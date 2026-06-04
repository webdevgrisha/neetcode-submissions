class ListNode {
    constructor(val = null, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
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
        if (index < 0 || index >= this.length) return -1;

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

        let prev = this.head;
        for (let i = 0; i < index; i++) {
            prev = prev.next;
        }

        return prev.next.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        const newNode = new ListNode(val, this.head, this.head.next);

        if (this.head.next) {
            this.head.next.prev = newNode;
        }

        this.head.next = newNode;

        if (this.length === 0) {
            this.tail = newNode;
        }

        this.length++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        const newNode = new ListNode(val, this.tail);

        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index < 0 || index > this.length) return;

        if (index === this.length) {
            this.addAtTail(val);
            return;
        }

        let prev = this.head;
        for (let i = 0; i < index; i++) {
            prev = prev.next;
        }

        const newNode = new ListNode(val, prev, prev.next);

        if (prev.next) {
            prev.next.prev = newNode;
        }

        prev.next = newNode;

        this.length++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index < 0 || index >= this.length) return;

        let prev = this.head;
        for (let i = 0; i < index; i++) {
            prev = prev.next;
        }

        if (prev.next.next) {
            prev.next.next.prev = prev;
        }

        prev.next = prev.next.next;

        if (index === this.length - 1) {
            this.tail = prev;
        }
        this.length--;
    }
}
