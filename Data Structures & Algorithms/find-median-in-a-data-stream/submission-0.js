class MedianFinder {
    constructor() {
        this.minHeap = new MinPriorityQueue();
        this.maxHeap = new MaxPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.maxHeap.push(num);
        this.minHeap.push(this.maxHeap.pop());

        if(this.maxHeap.size() < this.minHeap.size()) {
            this.maxHeap.push(this.minHeap.pop());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.minHeap.size() !== this.maxHeap.size()) {
            return this.maxHeap.front();
        }
        return (this.minHeap.front() + this.maxHeap.front()) / 2;
    }
}
