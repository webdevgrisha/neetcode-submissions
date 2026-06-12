/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs, l = 0, r = pairs.length - 1) {
        if (l < r) {
            const m = Math.floor((l + r) / 2);
            this.mergeSort(pairs, l, m);
            this.mergeSort(pairs, m + 1, r);
            this.merge(pairs, l, m, r);
        }

        return pairs;
    }
    merge(pairs, l, m, r) {
        const len1 = m - l + 1;
        const len2 = r - m;

        const L = new Array(len1);
        const R = new Array(len2);

        for (let i = 0; i < len1; i++) {
            L[i] = pairs[l + i];
        }

        for (let i = 0; i < len2; i++) {
            R[i] = pairs[m + 1 + i];
        }

        let pL = 0;
        let pR = 0;
        let c = l;

        while (pL < len1 && pR < len2) {
            if (L[pL].key <= R[pR].key) {
                pairs[c] = L[pL];
                pL++;
            } else {
                pairs[c] = R[pR];
                pR++;
            }

            c++;
        }

        while (pL < len1) {
            pairs[c] = L[pL];
            pL++;
            c++;
        }

        while (pR < len2) {
            pairs[c] = R[pR];
            pR++;
            c++;
        }
    }
}
