function anagramChecker(str1, str2) {
  if (!str1 || !str2 || typeof str1 !== "string" || typeof str2 !== "string") {
    throw new TypeError("Parameters must be strings");
  }

  if (str1.length !== str2.length) return false;

  let charCount = new Map();

  for (const char of str1) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of str2) {
    if (!charCount.has(char) || charCount.get(char) === 0) {
      return false;
    }
    charCount.set(char, charCount.get(char) - 1);
  }

  return true;
}

console.log(anagramChecker("listen", "silent"));
console.log(anagramChecker("hello", "world"));
