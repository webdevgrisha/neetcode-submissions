class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = PriorityQueue.fromArray(stones, (a, b) => b - a);

        while(maxHeap.size() > 1) {
            const [first, second] = [maxHeap.pop(), maxHeap.pop()];

            if(first !== second) {
                maxHeap.push(Math.abs(first - second));
            }
        }

        return maxHeap.front() || 0;
    }
}
