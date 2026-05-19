class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxCount = 0;

        let oneCount = 0;
        for (let i = 0; i <= nums.length; i++) {
            if (nums[i] === 1) {
                oneCount++
                continue;
            }

            maxCount = Math.max(maxCount, oneCount);
            oneCount = 0;
        }

        return maxCount;
    }
}
