function argumentsLength() {
    return arguments.length;
}

console.log(argumentsLength());                  // Output: 0 (no arguments passed)
console.log(argumentsLength(5));                 // Output: 1 (one argument passed)
console.log(argumentsLength('Hello', 7, true));  // Output: 3 (three arguments passed)
