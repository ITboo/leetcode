/*
Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys.
*/

class TimeLimitedCache {
    constructor() {}
    cache = new Map() ;
    set(key, value, duration) {
        this.removeExpire();
        const ans = this.cache.has(key);
        this.cache.set(key, [value, this.now() + duration]);
        return ans;
    }

    get(key){
        this.removeExpire();
        return this.cache.get(key)?.[0] ?? -1;
    }

    count() {
        this.removeExpire();
        return this.cache.size;
    }

    now() {
        return new Date().getTime();
    }

    removeExpire(){
        const now = this.now();
        for (const [key, [, expire]] of this.cache) {
            if (expire <= now) {
                this.cache.delete(key);
            }
        }
    }
}