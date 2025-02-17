let obj = {};
let clonedObj = JSON.parse(JSON.stringify(obj));

//manual cloning

function deepClone(obj) {
  if (!obj || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  let clonedObj = {};

  for (const key in obj) {
    clonedObj[key] = deepClone(key);
  }

  return clonedObj;
}
