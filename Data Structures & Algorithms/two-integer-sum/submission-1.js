class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const counter = new Map();

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const targetNum = target - num;

            if (counter.has(targetNum)) {
                return [counter.get(targetNum), i];
            }

            counter.set(num, i);
        }
    }
}
