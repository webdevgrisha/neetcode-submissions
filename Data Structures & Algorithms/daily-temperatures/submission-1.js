class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            const currTemp = temperatures[i];

            while (stack.at(-1)?.temp < currTemp) {
                const { index } = stack.pop();

                result[index] = i - index;
            }

            stack.push({ temp: currTemp, index: i });
        }

        return result;
    }
}
