class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let minLength = Infinity;
        let currSum = 0;
        let l = 0;

        for (let r = 0; r < nums.length; r++) {
            currSum += nums[r];

            while (currSum >= target) {
                minLength = Math.min(minLength, r - l + 1);
                currSum -= nums[l];
                l++;
            }
        }

        return minLength === Infinity ? 0 : minLength;
    }
}
