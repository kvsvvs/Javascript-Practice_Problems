function palindromeChecker(str) {
  if (!str || typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }

  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}
