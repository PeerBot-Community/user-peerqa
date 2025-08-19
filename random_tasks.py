#!/usr/bin/env python3

import random

def task1():
    """Task 1: Returns a random number between 1 and 100"""
    return random.randint(1, 100)

def task2():
    """Task 2: Returns a random float between 0 and 50"""
    return random.uniform(0, 50)

def task3():
    """Task 3: Returns a random number between 10 and 200"""
    return random.randint(10, 200)

def task4():
    """Task 4: Returns a random float between -25 and 25"""
    return random.uniform(-25, 25)

def task5():
    """Task 5: Returns a random number between 5 and 75"""
    return random.randint(5, 75)

def main():
    """Execute all 5 tasks and sum their results"""
    print("Executing 5 random number tasks...\n")
    
    # Execute each task
    result1 = task1()
    result2 = task2()
    result3 = task3()
    result4 = task4()
    result5 = task5()
    
    # Display individual results
    print(f"Task 1 result: {result1}")
    print(f"Task 2 result: {result2:.2f}")
    print(f"Task 3 result: {result3}")
    print(f"Task 4 result: {result4:.2f}")
    print(f"Task 5 result: {result5}")
    
    # Calculate and display sum
    total_sum = result1 + result2 + result3 + result4 + result5
    print(f"\nSum of all tasks: {total_sum:.2f}")
    
    return total_sum

if __name__ == "__main__":
    main()