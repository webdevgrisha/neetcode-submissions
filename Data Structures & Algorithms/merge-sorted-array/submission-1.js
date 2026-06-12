class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let last = m + n - 1;

        while(m > 0 && n > 0) {
            const [mVal, nVal] = [nums1[m - 1], nums2[n - 1]];

            if(mVal > nVal) {
                nums1[last] = mVal;
                m--;
            } else {
                nums1[last] = nVal;
                n--;
            }

            last--;
        }

        while(n > 0) {
            nums1[last] = nums2[n-1];
            last--;
            n--;
        }
    }
}
