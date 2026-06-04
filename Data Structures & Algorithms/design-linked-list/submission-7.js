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
    getPrev(index) {}

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
        const prevHead = this.head.next;

        this.head.next = new ListNode(val, prevHead);

        if(this.length === 0) {
            this.tail = this.head.next;
        }

        this.length++;
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

        let prev = this.head;
        for (let i = 0; i < index; i++) {
            prev = prev.next;
        }

        prev.next = new ListNode(val, prev.next);
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

        prev.next = prev.next.next;
        
        if(index === this.length - 1) {
            this.tail = prev;
        }

        this.length--;
    }
}
