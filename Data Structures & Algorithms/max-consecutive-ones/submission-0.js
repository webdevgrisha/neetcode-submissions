class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        return Math.max(...nums.join('').split('0').map(arr => arr.length));
    }
}
