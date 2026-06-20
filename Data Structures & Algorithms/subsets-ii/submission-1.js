class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const result = [];
        const subset = [];

        nums.sort((a, b) => a - b);

        function dfs(i) {
            if (i >= nums.length) {
                result.push([...subset]);
                return;
            }

            subset.push(nums[i]);
            dfs(i + 1);

            subset.pop();

            while(i < nums.length && nums[i] === nums[i + 1]) {
                i++;
            }

            dfs(i + 1);
        }

        dfs(0);

        return result;
    }
}
