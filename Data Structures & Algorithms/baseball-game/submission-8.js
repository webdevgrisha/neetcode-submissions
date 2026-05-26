class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let sum = 0;
        const stack = [];

        const actions = {
            "+": () => {
                const [num1, num2] = [stack.at(-1), stack.at(-2)];
                const numSum = num1 + num2;

                stack.push(numSum);
                sum += numSum;
            },
            D: () => {
                const doubleNum = stack.at(-1) * 2;

                stack.push(doubleNum);
                sum += doubleNum;
            },
            C: () => {
                const removeNum = stack.pop();
                sum -= removeNum;
            },
            add: (num) => {
                stack.push(+num);
                sum += +num;
            },
        };

        for (let oper of operations) {
            oper in actions ? actions[oper]() : actions.add(oper);
        }

        return sum;
    }
}
