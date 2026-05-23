class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxCount = 0;
        let count = 0;

        for (let num of nums) {
            count = num ? count + 1 : 0;

            maxCount = Math.max(count, maxCount);
        }

        return maxCount;
    }
}
