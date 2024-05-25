function expect(val) {
    return {
        toBe: function(expected) {
            if (val !== expected) {
                throw new Error("Not Equal");
            }
            return true;
        },
        notToBe: function(notExpected) {
            if (val === notExpected) {
                throw new Error("Equal");
            }
            return true;
        }
    };
}

// Example usage:
function example1() {
    try {
        return { "value": expect(5).toBe(5) };
    } catch (error) {
        return { "error": error.message };
    }
}

// Example:
console.log(example1()); // Output: {"value": true}
