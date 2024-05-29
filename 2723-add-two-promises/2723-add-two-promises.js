function addTwoPromises(promise1, promise2) {
    // Return a new Promise that resolves with the sum of the resolved values of promise1 and promise2
    return Promise.all([promise1, promise2])
        .then((results) => {
            const sum = results[0] + results[1];
            return sum;
        });
}

// Example usage:
const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2)
    .then(result => {
        console.log(result); // Output: 7
    })
    .catch(error => {
        console.error('Error:', error);
    });
