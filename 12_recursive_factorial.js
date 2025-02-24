function recursiveFactorial(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new TypeError("Input must be a non-negative integer");
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    return n * recursiveFactorial(n - 1);
}

// Example usage:
console.log(recursiveFactorial(5));  // Output: 120
console.log(recursiveFactorial(0));  // Output: 1
console.log(recursiveFactorial(1));  // Output: 1
console.log(recursiveFactorial(10)); // Output: 3628800

// Edge Cases:
console.log(recursiveFactorial(-1)); // Throws error
console.log(recursiveFactorial(4.5)); // Throws error
console.log(recursiveFactorial("hello")); // Throws error
