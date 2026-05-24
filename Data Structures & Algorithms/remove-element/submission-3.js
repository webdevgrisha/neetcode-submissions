class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let p1 = 0;
        let p2 = nums.length;

        while (p1 < p2) {
            if (nums[p1] === val) {
                nums[p1] = nums[--p2];
            } else {
                p1++;
            }
        }

        return p1;
    }
}
