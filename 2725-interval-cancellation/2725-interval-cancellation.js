function cancellable(fn, args, t) {
    let intervalId;
    let time = 0;

    // Execute fn immediately
    console.log(`{"time": ${time}, "returned": ${fn(...args)}}`);
    time += t;

    // Start interval
    intervalId = setInterval(() => {
        console.log(`{"time": ${time}, "returned": ${fn(...args)}}`);
        time += t;
    }, t);

    // Cancel function
    const cancelFn = () => {
        clearInterval(intervalId);
        console.log(`Cancelled at ${time}ms`);
    };

    return cancelFn;
}

// Example usage:
const fn = (x) => x * 2;
const args = [4];
const t = 35;
const cancelTimeMs = 190;

const cancelFn = cancellable(fn, args, t);
setTimeout(cancelFn, cancelTimeMs);
