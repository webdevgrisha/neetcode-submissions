class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        for (let num of nums) {
            const index = Math.abs(num) - 1;

            if (nums[index] < 0) return Math.abs(num);

            nums[index] *= -1;
        }

        return -1;
    }
}
