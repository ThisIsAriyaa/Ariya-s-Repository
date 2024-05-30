class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, duration) {
        const now = Date.now();
        const expiration = now + duration;
        
        if (this.cache.has(key)) {
            const { expirationTime } = this.cache.get(key);
            if (expirationTime > now) {
                // Update existing key-value pair
                this.cache.set(key, { value, expirationTime: expiration });
                return true; // Updated existing key
            }
        }
        
        // Add new key-value pair
        this.cache.set(key, { value, expirationTime: expiration });
        return false; // Added new key
    }

    get(key) {
        const now = Date.now();
        if (this.cache.has(key)) {
            const { value, expirationTime } = this.cache.get(key);
            if (expirationTime > now) {
                return value; // Key exists and not expired
            } else {
                this.cache.delete(key); // Expired, delete from cache
            }
        }
        return -1; // Key does not exist or expired
    }

    count() {
        const now = Date.now();
        let count = 0;
        for (const [key, { expirationTime }] of this.cache) {
            if (expirationTime > now) {
                count++;
            } else {
                this.cache.delete(key); // Remove expired keys from cache
            }
        }
        return count;
    }
}

// Example usage:
const cache = new TimeLimitedCache();

// Initialize cache with key-value pairs
console.log(cache.set(1, 42, 100)); // false, new key-value pair added
console.log(cache.get(1)); // 42, key exists and not expired
console.log(cache.count()); // 1, one unexpired key in the cache

// After 50ms, key 1 should still exist
setTimeout(() => {
    console.log(cache.get(1)); // 42, key still exists and not expired
    console.log(cache.count()); // 1, one unexpired key in the cache
}, 50);

// After 150ms, key 1 should have expired
setTimeout(() => {
    console.log(cache.get(1)); // -1, key expired
    console.log(cache.count()); // 0, no unexpired keys in the cache
}, 150);
