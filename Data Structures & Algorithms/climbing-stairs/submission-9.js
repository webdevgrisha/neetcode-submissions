class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 3) return n;

        const cache = [2, 3];

        for (let i = 4; i < n; i++) {
            const tmp = cache[1];

            cache[1] = cache[0] + cache[1];
            cache[0] = tmp;
        }

        return cache[0] + cache[1];
    }
}
