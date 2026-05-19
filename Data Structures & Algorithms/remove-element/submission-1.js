class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let p1 = 0;
        let p2 = nums.length - 1;
        while (p2 >= 0 && nums[p2] === val) p2--;

        while (p1 <= p2) {
            if (nums[p1] === val) {
                [nums[p2], nums[p1]] = [nums[p1], nums[p2]];
                while (p2 >= 0 && nums[p2] === val) p2--;
            }

            p1++;
        }

        return p1;
    }
}
