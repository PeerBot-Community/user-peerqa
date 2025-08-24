#!/usr/bin/env python3

def greet(name="World"):
    """Simple greeting function."""
    return f"Hello, {name}!"

def calculate_sum(a, b):
    """Calculate the sum of two numbers."""
    return a + b

def main():
    """Main function demonstrating the sample code."""
    print(greet())
    print(greet("Claude"))
    
    result = calculate_sum(5, 3)
    print(f"5 + 3 = {result}")

if __name__ == "__main__":
    main()