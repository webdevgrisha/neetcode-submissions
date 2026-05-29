class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashMap = new Set();

        for (let num of nums) {
            if (hashMap.has(num)) return true;

            hashMap.add(num);
        }

        return false;
    }
}