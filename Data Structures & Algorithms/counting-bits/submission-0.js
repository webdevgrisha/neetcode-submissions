class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const output = [];

        for (let i = 0; i <= n; i++) {
            let count = 0;
            let b = i;

            while (b !== 0) {
                b &= (b - 1);
                count++;
            }

            output[i] = count;
        }

        return output;
    }
}
