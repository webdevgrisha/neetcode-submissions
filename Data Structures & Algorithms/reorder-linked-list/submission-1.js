/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        const middle = this.findMiddle(head);
        const reverse = this.reverse(middle);
        
        return this.merge(head, reverse)
    }

    findMiddle(head) {
        let slow = head;
        let fast = head.next;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }
    reverse(head) {
        let prev = null;
        let curr = head;

        while (curr) {
            const next = curr.next;

            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }
    merge(list1, list2) {
        const dummy = new ListNode(list1);

        while (list1 && list2) {
            let [list1Next, list2Next] = [list1.next, list2.next];

            list1.next = list2;
            list2.next = list1Next;

            list1 = list1Next;
            list2 = list2Next;
        }

        return dummy;
    }
}
