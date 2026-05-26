class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const parentheses = {
            "]": "[",
            "}": "{",
            ")": "(",
        };

        const stack = [];

        for (let parenth of s) {
            if (!(parenth in parentheses)) {
                stack.push(parenth);
                continue;
            }

            if (stack.pop() !== parentheses[parenth]) return false;
        }

        return !stack.length;
    }
}
