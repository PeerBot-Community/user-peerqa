#!/bin/bash

echo "🔍 RBAC Debug Script for Worker Creation"
echo "======================================="

# Function to check if kubectl is available
check_kubectl() {
    if ! command -v kubectl &> /dev/null; then
        echo "❌ kubectl is not installed or not in PATH"
        return 1
    fi
    echo "✅ kubectl is available"
}

# Function to check cluster connectivity
check_cluster() {
    echo "🌐 Checking cluster connectivity..."
    if kubectl cluster-info &> /dev/null; then
        echo "✅ Connected to Kubernetes cluster"
        kubectl cluster-info | head -2
    else
        echo "❌ Cannot connect to Kubernetes cluster"
        return 1
    fi
}

# Function to check current context and permissions
check_permissions() {
    echo "👤 Checking current context and permissions..."
    echo "Current context: $(kubectl config current-context)"
    echo "Current user: $(kubectl config view --minify -o jsonpath='{.contexts[0].context.user}')"
    
    echo "🔐 Testing current user permissions..."
    kubectl auth can-i create pods --quiet && echo "✅ Can create pods" || echo "❌ Cannot create pods"
    kubectl auth can-i create jobs --quiet && echo "✅ Can create jobs" || echo "❌ Cannot create jobs"
    kubectl auth can-i create serviceaccounts --quiet && echo "✅ Can create serviceaccounts" || echo "❌ Cannot create serviceaccounts"
    kubectl auth can-i create clusterroles --quiet && echo "✅ Can create clusterroles" || echo "❌ Cannot create clusterroles"
    kubectl auth can-i create clusterrolebindings --quiet && echo "✅ Can create clusterrolebindings" || echo "❌ Cannot create clusterrolebindings"
}

# Function to check existing RBAC resources
check_existing_rbac() {
    echo "📋 Checking existing RBAC resources..."
    
    echo "ServiceAccounts:"
    kubectl get serviceaccounts -A | grep -E "(worker|default)" || echo "No relevant ServiceAccounts found"
    
    echo "ClusterRoles:"
    kubectl get clusterroles | grep -E "(worker|default)" || echo "No relevant ClusterRoles found"
    
    echo "ClusterRoleBindings:"
    kubectl get clusterrolebindings | grep -E "(worker|default)" || echo "No relevant ClusterRoleBindings found"
}

# Function to test worker service account permissions
test_worker_permissions() {
    echo "🧪 Testing worker service account permissions..."
    
    # Check if worker service account exists
    if kubectl get serviceaccount worker-service-account &> /dev/null; then
        echo "✅ Worker service account exists"
        
        # Test permissions for the worker service account
        echo "Testing worker service account permissions:"
        kubectl auth can-i create pods --as=system:serviceaccount:default:worker-service-account --quiet && echo "✅ Worker can create pods" || echo "❌ Worker cannot create pods"
        kubectl auth can-i get pods --as=system:serviceaccount:default:worker-service-account --quiet && echo "✅ Worker can get pods" || echo "❌ Worker cannot get pods"
        kubectl auth can-i create jobs --as=system:serviceaccount:default:worker-service-account --quiet && echo "✅ Worker can create jobs" || echo "❌ Worker cannot create jobs"
    else
        echo "❌ Worker service account does not exist"
    fi
}

# Function to check pod status and logs
check_worker_status() {
    echo "📊 Checking worker pod/job status..."
    
    echo "Jobs:"
    kubectl get jobs -l app=worker || echo "No worker jobs found"
    
    echo "Pods:"
    kubectl get pods -l app=worker || echo "No worker pods found"
    
    echo "Recent events:"
    kubectl get events --sort-by='.firstTimestamp' | tail -10
}

# Function to show logs from failed pods
show_logs() {
    echo "📝 Showing logs from worker pods..."
    
    for pod in $(kubectl get pods -l app=worker -o jsonpath='{.items[*].metadata.name}'); do
        echo "--- Logs for pod: $pod ---"
        kubectl logs $pod || echo "Could not retrieve logs for $pod"
        echo ""
    done
}

# Main execution
main() {
    check_kubectl || exit 1
    check_cluster || exit 1
    check_permissions
    check_existing_rbac
    test_worker_permissions
    check_worker_status
    show_logs
    
    echo ""
    echo "🛠️  Common RBAC Issues and Solutions:"
    echo "1. Missing ServiceAccount: Apply k8s/rbac/service-account.yaml"
    echo "2. Missing ClusterRole: Apply k8s/rbac/cluster-role.yaml"
    echo "3. Missing ClusterRoleBinding: Apply k8s/rbac/cluster-role-binding.yaml"
    echo "4. Insufficient permissions: Check if current user can create RBAC resources"
    echo "5. Wrong namespace: Ensure resources are in the correct namespace"
    echo ""
    echo "🚀 To apply RBAC configuration:"
    echo "kubectl apply -f k8s/rbac/"
    echo "kubectl apply -f k8s/worker-deployment.yaml"
}

main "$@"