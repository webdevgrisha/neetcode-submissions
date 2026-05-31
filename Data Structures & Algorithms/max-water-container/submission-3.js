class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;

        let p1 = 0;
        let p2 = heights.length - 1;

        while (p1 < p2) {
            const [p1Val, p2Val] = [heights[p1], heights[p2]];
            const area = Math.min(p1Val, p2Val) * (p2 - p1);

            max = Math.max(area, max);

            if (p1Val <= p2Val) {
                p1++;
            } else {
                p2--;
            }
        }

        return max;
    }
}
