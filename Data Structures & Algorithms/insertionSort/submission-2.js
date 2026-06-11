/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {
        if(!pairs.length) return [];
        
        let response = [[...pairs]];

        for(let i = 1; i < pairs.length; i++) {
            let j = i - 1;

            while(j >= 0 && pairs[j + 1].key < pairs[j].key) {
                const tmp = pairs[j + 1];
                pairs[j + 1] = pairs[j];
                pairs[j] = tmp;
                j--;
            }

            response.push([...pairs])
        }

        return response;
    }
}
