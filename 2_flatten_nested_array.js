function flattenArray(arr) {
  const result = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      result.push(...flattenArray(element));
    } else {
      result.push(element);
    }
  }
  return result;
}
