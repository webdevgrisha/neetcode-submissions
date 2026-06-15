class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rowIndex = this.findRow(matrix, target);

        if (rowIndex === -1) return false;

        return this.isValExist(matrix[rowIndex], target);
    }
    isValExist(row, target) {
        let left = 0;
        let right = row.length - 1;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            const val = row[mid];

            if (val < target) {
                left = mid + 1;
            } else if (val > target) {
                right = mid - 1;
            } else {
                return true;
            }
        }

        return false;
    }
    findRow(matrix, target) {
        let left = 0;
        let right = matrix.length - 1;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            const midRow = matrix[mid];

            if (target > midRow.at(-1)) {
                left = mid + 1;
            } else if (target < midRow[0]) {
                right = mid - 1;
            } else {
                return mid;
            }
        }

        return -1;
    }
}
