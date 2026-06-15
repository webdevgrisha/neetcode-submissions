class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let k = 1;

        while (true) {
            let time = 0;
            for(let pile of piles) {
                time += Math.ceil(pile / k);
            }

            if (time <= h) return k;

            k++;
        }
    }
}
