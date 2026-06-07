class ListNode {
    constructor(val = null, next = null) {
        this.val = val;
        this.next = next;
    }
}
class MyStack {
    constructor() {
        this.head = new ListNode();
        this.length = 0;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.head.next = new ListNode(x, this.head.next);
        this.length++;
    }

    /**
     * @return {number}
     */
    pop() {
        const val = this.head.next.val;

        this.head.next = this.head.next.next;
        this.length--;

        return val;
    }

    /**
     * @return {number}
     */
    top() {
        return this.head.next.val;
    }

    /**
     * @return {boolean}
     */
    empty() {
        return !this.length;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
