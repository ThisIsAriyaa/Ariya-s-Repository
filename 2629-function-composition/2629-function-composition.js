/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        if (functions.length === 0) {
            return x; // Identity function
        }
        
        // Start with the last function and apply it to x
        let result = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        
        return result;
    }
};

// Example usage:
const fn = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(fn(4)); // Output: 65
