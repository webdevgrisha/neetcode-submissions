class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let p1 = 0;
        let p2 = numbers.length;

        while (p1 < p2) {
            const [num1, num2] = [numbers[p1], numbers[p2]];

            if (num1 + num2 === target) return [++p1, ++p2];

            if(num1 + num2 < target) {
                p1++;
            } else {
                p2--;
            }
        }

        return false;
    }
}
