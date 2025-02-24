function charFrequency(str) {
    if (!str || typeof str !== "string") {
        throw new TypeError("Input to the function must be string")
    }

    let charFrequency = {}

    for (const char of str) {
        charFrequency[char] = (charFrequency[char] || 0) + 1
    }

    return charFrequency
}