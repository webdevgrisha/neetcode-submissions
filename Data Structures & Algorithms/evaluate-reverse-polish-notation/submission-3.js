class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        
        const oper = {
            '+': () => {
                const [num1, num2] = [stack.pop(), stack.pop()];
                stack.push(num1 + num2);
            },
            '-': () => {
                const [num1, num2] = [stack.pop(), stack.pop()];
                stack.push(num2 - num1);
            },
            '*': () => {
                const [num1, num2] = [stack.pop(), stack.pop()];
                stack.push(num2 * num1);
            },
            '/': () => {
                const [num1, num2] = [stack.pop(), stack.pop()];
                stack.push(Math.trunc(num2 / num1));
            },
        }

        for(let token of tokens) {
            if (!(token in oper)) {
                stack.push(+token);
            } else {
                oper[token]()
            }
        }

        return stack.pop();
    }
}
