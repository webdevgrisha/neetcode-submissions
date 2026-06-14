class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const counts = new Array(3).fill(0);

        for(let i = 0; i < nums.length; i++) {
            const color = nums[i];
            counts[color]++;
        }

        let i = 0;
        for(let n = 0; n < counts.length; n++) {
            for(let j = 0; j < counts[n]; j++) {
                nums[i] = n;
                i++;
            }
        }
    }
}
