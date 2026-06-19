class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        const subset = [];

        function dfs(i, currSum = 0) {
            if (currSum === target) {
                result.push([...subset]);
                return;
            }

            if (i >= nums.length || currSum > target) return;

            subset.push(nums[i]);
            dfs(i, currSum + nums[i]);

            subset.pop();
            dfs(i + 1, currSum);
        }

        dfs(0);

        return result;
    }
}
