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
    getNode(index) {
        if (index < 0 || index >= this.length) return null;

        let curr;
        if (index < this.length / 2) {
            curr = this.head.next;
            for (let i = 0; i < index; i++) curr = curr.next;
        } else {
            curr = this.tail;
            for (let i = this.length - 1; i > index; i--) curr = curr.prev;
        }

        return curr;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        const node = this.getNode(index);

        return node ? node.val : -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        this.addAtIndex(0, val)
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        const newNode = new ListNode(val, this.tail, null);

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

        const nextNode = this.getNode(index);
        const prevNode = nextNode.prev;

        const newNode = new ListNode(val, prevNode, nextNode);
        prevNode.next = newNode;
        nextNode.prev = newNode;

        this.length++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index < 0 || index >= this.length) return;

        const nodeToRemove = this.getNode(index);
        const prevNode = nodeToRemove.prev;
        const nextNode = nodeToRemove.next;

        prevNode.next = nextNode;

        if (nextNode) {
            nextNode.prev = prevNode;
        } else {
            this.tail = prevNode;
        }

        this.length--;
    }
}
