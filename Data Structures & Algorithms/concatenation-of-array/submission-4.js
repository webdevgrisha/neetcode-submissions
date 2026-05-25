class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const len = nums.length;
        let ans = new Array(len * 2);

        for (let i = 0; i < len; i++) {
            ans[i] = ans[len + i] = nums[i];
        }

        return ans;
    }
}
