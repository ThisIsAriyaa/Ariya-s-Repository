function filter(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

// Example usage:
const arr = [0, 10, 20, 30];
const greaterThan10 = function greaterThan10(n) { return n > 10; };

const newArray = filter(arr, greaterThan10);
console.log(newArray); // Output: [20, 30]
