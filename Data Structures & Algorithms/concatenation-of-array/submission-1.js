class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = [];
        for (let i = 0; i < 2; i++) {
            for (let b = 0; b < nums.length; b++) {
                ans.push(nums[b]);
            }
        }

        return ans;
    }
}
