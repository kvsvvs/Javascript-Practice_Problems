function deduplicatingArray(arr) {
  if ((!arr || Array, isArray(arr))) {
    throw new TypeError("Input must be an array");
  }

  return [...new Set(arr)];
}

function deduplicatingArrayWithoutSet(arr) {
  let checkObject = {};
  let result = [];

  for (const item of arr) {
    if (!checkObject[item]) {
      checkObject[item] = true;
      result.push(item);
    }
  }

  return result;
}
