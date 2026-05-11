class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const output = new Array(n + 1).fill(0);

        for (let i = 0; i <= n; i++) {
            let num = i;

            while (num !== 0) {
                num &= num - 1;
                output[i]++;
            }
        }

        return output;
    }
}
