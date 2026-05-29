class MinStack { 
    constructor() {
        this.min = Infinity;
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (!this.stack.length) {
            this.stack.push(0);
            this.min = val;
        } else {
            this.stack.push(val - this.min);
            if (val < this.min) this.min = val;
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const removeVal = this.stack.pop();

        if (removeVal < 0) {
            this.min -= removeVal;
        }
    }

    /**
     * @return {number}
     */
    top() {
        const topVal = this.stack.at(-1);

        if (topVal >= 0) {
            return topVal + this.min;
        } else {
            return this.min;
        }
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min;
    }
}