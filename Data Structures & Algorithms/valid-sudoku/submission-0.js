function validateRow(row) {
    const set = new Set();

    for (let val of row) {
        if (val === ".") continue;
        if (set.has(val)) return false;

        set.add(val);
    }

    return true;
}

function validateCol(board, columIndex) {
    const set = new Set();

    for (let row of board) {
        const val = row[columIndex];

        if (val === ".") continue;
        if (set.has(val)) return false;

        set.add(val);
    }

    return true;
}

function validateBox(board, boxIndex) {
    const set = new Set();

    const rowIndex = Math.floor(boxIndex / 3) * 3;
    const colIndex = (boxIndex * 3) % 9;

    for (let row = rowIndex; row < rowIndex + 3; row++) {
        for (let col = colIndex; col < colIndex + 3; col++) {
            const val = board[row][col];

            if (val === ".") continue;
            if (set.has(val)) return false;

            set.add(val);
        }
    }

    return true;
}

class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < 9; i++) {
            const isRowValid = validateRow(board[i]);
            const isColValid = validateCol(board, i);
            const isBoxValid = validateBox(board, i);

            if (!(isRowValid && isColValid && isBoxValid)) return false;
        }

        return true;
    }
}
