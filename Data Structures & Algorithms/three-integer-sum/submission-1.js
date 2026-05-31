class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const triplets = new Map();

        nums.sort((a, b) => a - b);

        for (let p1 = 0; p1 < nums.length; p1++) {
            let p2 = p1 + 1;
            let p3 = nums.length - 1;

            while (p2 < p3) {
                const [num1, num2, num3] = [nums[p1], nums[p2], nums[p3]];
                const sum = num1 + num2 + num3;

                if (sum === 0) {
                    const key = [num1, num2, num3].sort((a, b) => a - b).join(".");

                    triplets.set(key, [num1, num2, num3]);
                }

                if (sum < 0) {
                    p2++;
                } else {
                    p3--;
                }
            }
        }

        return Array.from(triplets.values());
    }
}
