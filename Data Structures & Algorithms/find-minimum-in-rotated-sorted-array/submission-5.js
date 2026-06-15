class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = +Infinity;
        let left = 0;
        let right = nums.length - 1;

        while (true) {
            if (nums[left] <= nums[right]) {
                min = Math.min(min, nums[left]);
                break;
            }

            const mid = left + Math.floor((right - left) / 2);

            min = Math.min(min, nums[mid]);

            if (nums[left] <= nums[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return min;
    }
}
