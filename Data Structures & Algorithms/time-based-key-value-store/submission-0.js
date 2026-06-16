class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        const newVal = { value, timestamp };

        if (this.keyStore.has(key)) {
            this.keyStore.get(key).push(newVal);
        } else {
            this.keyStore.set(key, [newVal]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) return "";

        const arr = this.keyStore.get(key);

        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (timestamp >= arr[mid].timestamp) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return left > 0 ? arr[left - 1].value : "";
    }
}
