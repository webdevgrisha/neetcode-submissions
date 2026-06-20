class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {
        const comb = capital.map((cap, index) => [cap, profits[index]]);
        const minHeap = PriorityQueue.fromArray(comb, (a, b) => a[0] - b[0]);
        const maxHeap = new MaxPriorityQueue((item) => item[1]);

        this.addAvailbleProjects(minHeap, maxHeap, w);

        while (k && maxHeap.size()) {
            w += maxHeap.pop()[1];
            k--;

            this.addAvailbleProjects(minHeap, maxHeap, w);
        }

        return w;
    }
    addAvailbleProjects(minHeap, maxHeap, w) {
        while (minHeap.size() && minHeap.front()[0] <= w) {
            maxHeap.push(minHeap.pop());
        }
    }
}
