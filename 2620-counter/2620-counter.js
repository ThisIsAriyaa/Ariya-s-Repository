function createCounter(n) {
    // Define a variable to store the current value of the counter
    let current = n;

    // Define the counter function
    function counter() {
        // Return the current value of the counter and then increment it
        return current++;
    }

    // Return the counter function
    return counter;
}

// Example usage:
// Create a counter starting at 3
const counter = createCounter(3);

// Call the counter function multiple times to see the sequence
console.log(counter());  // Output: 3
console.log(counter());  // Output: 4
console.log(counter());  // Output: 5
console.log(counter());  // Output: 6