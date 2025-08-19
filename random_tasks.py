import random

def task1():
    return random.randint(1, 100)

def task2():
    return random.randint(1, 100)

def task3():
    return random.randint(1, 100)

def task4():
    return random.randint(1, 100)

def task5():
    return random.randint(1, 100)

def main():
    result1 = task1()
    result2 = task2()
    result3 = task3()
    result4 = task4()
    result5 = task5()
    
    print(f"Task 1: {result1}")
    print(f"Task 2: {result2}")
    print(f"Task 3: {result3}")
    print(f"Task 4: {result4}")
    print(f"Task 5: {result5}")
    
    total = result1 + result2 + result3 + result4 + result5
    print(f"\nSum of all tasks: {total}")
    
    return total

if __name__ == "__main__":
    main()