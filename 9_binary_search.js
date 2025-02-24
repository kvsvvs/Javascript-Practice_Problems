function binarySearch(sortedArr, target) {
    if (!Array.isArray(sortedArr)) {
        throw new TypeError("Input must be a sorted array");
    }

    let left = 0;
    let right = sortedArr.length - 1;

    while (left <= right) { 
        let mid = Math.floor((left + right) / 2);

        if (sortedArr[mid] === target) {
            return mid;
        } else if (sortedArr[mid] > target) { 
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1; 
}

// Example usage:
console.log(binarySearch([1, 3, 5, 7, 9], 5)); // Output: 2
console.log(binarySearch([1, 3, 5, 7, 9], 8)); // Output: -1
console.log(binarySearch([], 3));              // Output: -1
