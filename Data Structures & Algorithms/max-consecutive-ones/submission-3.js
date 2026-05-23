class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxNums = 0;
        let count = 0;
        for (let num of nums) {
            if (num) {
                maxNums = Math.max(maxNums, ++count);
            } else {
                count = 0;
            }
        }

        return maxNums;
    }
}
