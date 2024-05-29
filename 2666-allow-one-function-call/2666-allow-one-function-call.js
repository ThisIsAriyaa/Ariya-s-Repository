function once(fn) {
    let called = false;
    let result;

    return function onceFn(...args) {
        if (!called) {
            result = fn(...args);
            called = true;
            return result;
        } else {
            return undefined;
        }
    };
}

// Example function
const fn = (a, b, c) => a + b + c;

// Create a new function using once
const onceFn = once(fn);

// First call should return the result of fn
console.log(onceFn(1, 2, 3)); // Output: 6

// Subsequent calls should return undefined
console.log(onceFn(2, 3, 6)); // Output: undefined
