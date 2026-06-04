class TabNode {
    constructor(url, prev, next) {
        this.url = url;
        this.prev = prev;
        this.next = next;
    }
}

class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.currTab = new TabNode(homepage);
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        const newTab = new TabNode(url, this.currTab, null);

        this.currTab.next = newTab;
        this.currTab = newTab;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        while (steps && this.currTab.prev) {
            this.currTab = this.currTab.prev;
            steps--;
        }

        return this.currTab.url;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        while (steps && this.currTab.next) {
            this.currTab = this.currTab.next;
            steps--;
        }

        return this.currTab.url;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
