function memoized(fn) {
  let functionMap = new Map();

  return function (...args) {
    let key = JSON.stringify(args);

    if (functionMap.has(key)) {
      return functionMap.get(key);
    }

    let result = fn.apply(this, args);
    functionMap.set(key, result);
    return result;
  };
}
