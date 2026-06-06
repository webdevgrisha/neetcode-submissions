class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.history = [homepage];
        this.cur = 0;
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        this.history.length = this.cur + 1;
        this.history.push(url);
        this.cur++;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        this.cur = Math.max(0, this.cur - steps);
        return this.history[this.cur];
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        this.cur = Math.min(this.history.length - 1, this.cur + steps);
        return this.history[this.cur];
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
