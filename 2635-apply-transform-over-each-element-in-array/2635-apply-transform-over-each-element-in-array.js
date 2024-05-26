// Function to implement map without using Array.map
function map(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
}

// Example usage:
const arr = [1, 2, 3];

// Example mapping function: plusone
const plusone = function plusone(n) { return n + 1; };

// Applying map function
const newArray = map(arr, plusone);
console.log(newArray); // Output: [2, 3, 4]
