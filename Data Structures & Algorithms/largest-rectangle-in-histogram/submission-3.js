class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let max = 0;
        const stack = [];

        for (let i = 0; i < heights.length; i++) {
            const currHeight = heights[i];

            let lastIndex = i;
            while (stack.at(-1)?.height > currHeight) {
                const { height, index } = stack.pop();

                max = Math.max(height * (i - index), max);
                lastIndex = index;
            }

            stack.push({ height: currHeight, index: lastIndex });
        }

        for (let { index, height } of stack) {
            max = Math.max(height * (heights.length - index), max);
        }

        return max;
    }
}
