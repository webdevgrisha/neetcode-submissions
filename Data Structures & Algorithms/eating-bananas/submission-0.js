class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let minK = null;

        let left = 1;
        let right = Math.max(...piles);

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            const eatHours = this.countHours(piles, mid);

            if (eatHours <= h) {
                minK = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return minK;
    }
    countHours(piles, k) {
        return piles.reduce((sum, curr) => (sum += Math.ceil(curr / k)), 0);
    }
}
