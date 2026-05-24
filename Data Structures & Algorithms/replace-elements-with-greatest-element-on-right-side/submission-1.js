class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let currMax = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            const currVal = arr[i];
            
            arr[i] = currMax;
            currMax = Math.max(currMax, currVal);
        }

        return arr;
    }
}
