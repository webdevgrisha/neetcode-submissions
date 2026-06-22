class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let counter = 0;
        let l = 0;
        let currSum = 0;

        for (let r = 0; r < arr.length; r++) {
            currSum += arr[r];

            if(r - l + 1 > k) {
                currSum -= arr[l];
                l++;
            }

            if (r - l + 1 === k && currSum / k >= threshold) {
                counter++;
            }
        }

        return counter;
    }
}
