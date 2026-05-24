class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let p1 = 0;

        for (let num of nums) {
            if (num === val) continue;

            nums[p1++] = num;
        }

        return p1;
    }
}
