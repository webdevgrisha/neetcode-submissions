class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.backHist = [homepage];
        this.frontHist = [];
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        this.backHist.push(url);
        this.frontHist = [];
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        while(steps-- && this.backHist.length > 1) {
            this.frontHist.push(this.backHist.pop());
        }

        return this.backHist.at(-1);
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        while(steps-- && this.frontHist.length > 0) {
            this.backHist.push(this.frontHist.pop());
        }

        return this.backHist.at(-1);
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
