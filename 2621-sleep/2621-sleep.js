function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(millis);
        }, millis);
    });
}

// Example usage:
const millis = 100;
sleep(millis).then(() => {
    console.log(millis); // Output: 100
});
