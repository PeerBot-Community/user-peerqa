#!/usr/bin/env python3
import random
import concurrent.futures
import time

def task_1():
    """Task 1: Generate a random number between 1-100"""
    time.sleep(0.1)  # Simulate some work
    number = random.randint(1, 100)
    print(f"Task 1 generated: {number}")
    return number

def task_2():
    """Task 2: Generate a random number between 1-100"""
    time.sleep(0.1)  # Simulate some work
    number = random.randint(1, 100)
    print(f"Task 2 generated: {number}")
    return number

def task_3():
    """Task 3: Generate a random number between 1-100"""
    time.sleep(0.1)  # Simulate some work
    number = random.randint(1, 100)
    print(f"Task 3 generated: {number}")
    return number

def task_4():
    """Task 4: Generate a random number between 1-100"""
    time.sleep(0.1)  # Simulate some work
    number = random.randint(1, 100)
    print(f"Task 4 generated: {number}")
    return number

def task_5():
    """Task 5: Generate a random number between 1-100"""
    time.sleep(0.1)  # Simulate some work
    number = random.randint(1, 100)
    print(f"Task 5 generated: {number}")
    return number

def main():
    print("Starting 5 random number generation tasks...")
    
    # List of all tasks
    tasks = [task_1, task_2, task_3, task_4, task_5]
    
    # Execute all tasks concurrently
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
        # Submit all tasks
        futures = [executor.submit(task) for task in tasks]
        
        # Collect results
        results = []
        for i, future in enumerate(concurrent.futures.as_completed(futures)):
            result = future.result()
            results.append(result)
        
        # Sort results to maintain order
        results = [futures[i].result() for i in range(len(futures))]
    
    print(f"\nAll generated numbers: {results}")
    
    # Sum all the numbers
    total = sum(results)
    print(f"Sum of all numbers: {total}")
    
    return total

if __name__ == "__main__":
    main()