function memoize(fn) {
    const cache = new Map();

    return function memoized(...args) {
        const key = JSON.stringify(args); // Create a unique key based on arguments
        if (!cache.has(key)) {
            cache.set(key, fn(...args)); // Compute and cache the result if not already cached
        }
        return cache.get(key); // Return the cached result
    };
}

function memoizedSum(a, b) {
    return a + b;
}

function memoizedFib(n) {
    if (n <= 1) {
        return 1;
    }
    return memoizedFib(n - 1) + memoizedFib(n - 2);
}

function memoizedFactorial(n) {
    if (n <= 1) {
        return 1;
    }
    return memoizedFactorial(n - 1) * n;
}

function applyActions(fnName, actions, values) {
    let results = [];
    let memoizedFn;

    if (fnName === "sum") {
        memoizedFn = memoize(memoizedSum);
    } else if (fnName === "fib") {
        memoizedFn = memoize(memoizedFib);
    } else if (fnName === "factorial") {
        memoizedFn = memoize(memoizedFactorial);
    }

    for (let i = 0; i < actions.length; i++) {
        let action = actions[i];
        if (action === "call") {
            let value = values[i];
            let result = memoizedFn(...value);
            results.push(result);
        } else if (action === "getCallCount") {
            results.push(cache.size); // Assuming cache size is accessed for testing purpose
        }
    }

    return results;
}
