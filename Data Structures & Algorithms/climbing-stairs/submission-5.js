class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n, cache = new Map()) {
        if (n <= 3) return n;

        if(cache.has(n)) return cache.get(n)

        cache.set(n, this.climbStairs(n - 1, cache) + this.climbStairs(n - 2, cache));

        return cache.get(n);
    }
}