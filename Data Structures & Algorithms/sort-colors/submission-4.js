class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let zero = 0,
            one = 0,
            two = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                nums[two++] = 2;
                nums[one++] = 1;
                nums[zero++] = 0;
            } else if (nums[i] == 1) {
                nums[two++] = 2;
                nums[one++] = 1;
            } else {
                nums[two++] = 2;
            }
        }
    }
}