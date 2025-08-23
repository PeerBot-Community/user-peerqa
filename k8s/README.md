# Kubernetes Worker RBAC Configuration

This directory contains Kubernetes manifests for setting up a worker with proper RBAC permissions.

## Files Structure

```
k8s/
├── rbac/
│   ├── service-account.yaml     # ServiceAccount and token for worker
│   ├── cluster-role.yaml        # ClusterRole with necessary permissions
│   └── cluster-role-binding.yaml # Binding ServiceAccount to ClusterRole
├── worker-deployment.yaml       # Worker Job and Deployment manifests
└── README.md                   # This file
```

## Quick Start

1. **Apply RBAC configuration:**
   ```bash
   kubectl apply -f k8s/rbac/
   ```

2. **Deploy worker:**
   ```bash
   kubectl apply -f k8s/worker-deployment.yaml
   ```

3. **Debug RBAC issues:**
   ```bash
   ./debug-rbac.sh
   ```

## RBAC Components

### ServiceAccount
- **Name:** `worker-service-account`
- **Namespace:** `default`
- **Token:** `worker-service-account-token`

### ClusterRole Permissions
- **Pods:** Full CRUD operations
- **Jobs:** Full CRUD operations  
- **ConfigMaps & Secrets:** Read and write
- **Services & Endpoints:** Read access
- **Nodes:** Read access (for scheduling)
- **Events:** Read and create (for debugging)
- **Namespaces:** Read access

### Common RBAC Issues

1. **Forbidden errors:** Check if ClusterRoleBinding exists and links correct ServiceAccount
2. **Pod creation fails:** Verify pod management permissions in ClusterRole
3. **API access denied:** Ensure ServiceAccount token is mounted in pod
4. **Wrong namespace:** All resources should be in same namespace or use ClusterRole

## Debugging Commands

```bash
# Check ServiceAccount
kubectl get serviceaccounts worker-service-account

# Check ClusterRole
kubectl get clusterrole worker-cluster-role

# Check ClusterRoleBinding
kubectl get clusterrolebinding worker-cluster-role-binding

# Test permissions
kubectl auth can-i create pods --as=system:serviceaccount:default:worker-service-account

# Check pod logs
kubectl logs -l app=worker

# Check events
kubectl get events --sort-by='.firstTimestamp'
```

## Troubleshooting

If worker creation fails:

1. Run the debug script: `./debug-rbac.sh`
2. Check cluster permissions for your user
3. Verify all RBAC resources are applied
4. Check pod logs for specific errors
5. Review events for admission controller rejections