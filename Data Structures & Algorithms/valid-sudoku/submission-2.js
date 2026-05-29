class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Array(9).fill(null).map(() => new Set());
        const cols = new Array(9).fill(null).map(() => new Set());
        const squares = new Array(9).fill(null).map(() => new Set());

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const val = board[row][col];

                if (val === ".") continue;

                const square = Math.floor(row / 3) * 3 + Math.floor(col / 3);

                if (rows[row].has(val) || cols[col].has(val) || squares[square].has(val))
                    return false;

                rows[row].add(val);
                cols[col].add(val);
                squares[square].add(val);
            }
        }

        return true;
    }
}
