function firstNonRepeatingCharacter(str) {
    if (typeof str !== "string") {
        throw new TypeError("Only string input is allowed");
    }

    let charCount = {};

    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; 
}

// Example usage:
console.log(firstNonRepeatingCharacter("aabbcdd")); // Output: "c"
console.log(firstNonRepeatingCharacter("aabbcc"));  // Output: null
console.log(firstNonRepeatingCharacter("abcd"));    // Output: "a"
