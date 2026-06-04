class ListNode {
    constructor(val = null, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MyLinkedList {
    constructor() {
        this.head = new ListNode();
        this.tail = this.head;
        this.length = 0;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        let prev = this.head;
        for (let i = 0; i < index; i++) {
            prev = prev.next;
        }

        return prev;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.length) return -1;

        return this.getPrev(index).next.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        this.addAtIndex(0, val);
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        this.tail.next = new ListNode(val);
        this.tail = this.tail.next;
        this.length++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index < 0 || index > this.length) return;

        if (index === this.length) {
            this.addAtTail(val);
            return;
        }

        const prev = this.getPrev(index);

        prev.next = new ListNode(val, prev.next);
        this.length++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index < 0 || index >= this.length) return;

        const prev = this.getPrev(index);

        prev.next = prev.next.next;

        if (index === this.length - 1) {
            this.tail = prev;
        }

        this.length--;
    }
}
