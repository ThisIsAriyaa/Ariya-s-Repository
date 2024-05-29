function cancellable(fn, args, t) {
    let timeoutId;
    let executed = false;

    const executeFn = () => {
        if (!executed) {
            executed = true;
            return fn(...args);
        }
    };

    const cancelFn = () => {
        if (!executed) {
            clearTimeout(timeoutId);
            console.log(`Cancellation happened at ${Date.now()} ms.`);
            executed = true;
        }
    };

    timeoutId = setTimeout(() => {
        executeFn();
    }, t);

    return cancelFn;
}

// Example usage:
const fn = (x) => x * 5;
const args = [2];
const t = 20;
const cancelTimeMs = 50;

const cancelFn = cancellable(fn, args, t);
setTimeout(cancelFn, cancelTimeMs); // This simulates cancelling after 50ms

// Logs the result when fn is executed after 20ms
setTimeout(() => {
    console.log(`Execution result: ${fn(...args)}`);
}, t);
