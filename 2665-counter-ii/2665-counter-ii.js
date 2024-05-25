function createCounter(init) {
    let currentValue = init;

    return {
        increment: function() {
            currentValue++;
            return currentValue;
        },
        decrement: function() {
            currentValue--;
            return currentValue;
        },
        reset: function() {
            currentValue = init;
            return currentValue;
        }
    };
}

// Example usage:
const counter = createCounter(5);
const calls = ["increment", "reset", "decrement"];

const results = calls.map(call => counter[call]());

console.log(results); // Output: [6, 5, 4]
