class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const minHeap = new MinPriorityQueue((entry) => entry[1]);

        const counter = nums.reduce((accum, curr) => {
            accum.set(curr, (accum.get(curr) ?? 0) + 1);

            return accum;
        }, new Map());

        for (let entry of counter.entries()) {
            minHeap.push(entry);

            if(minHeap.size() > k) {
                minHeap.pop();
            }
        }

        return Array.from(minHeap).map((entry) => entry[0]);
    }
}
