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
        const secondHalf = this.cutHalf(head);
        const reversedHalf = this.reverse(secondHalf);
        
        return this.merge(head, reversedHalf);
    }

    cutHalf(head) {
        let slow = head;
        let fast = head.next;

        while (fast) {
            slow = slow.next;
            fast = fast.next?.next;
        }

        const second = slow.next;
        slow.next = null; 
        
        return second;
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
        const dummyNode = new ListNode(null, list1);

        while (list1 && list2) {
            let [list1Next, list2Next] = [list1.next, list2.next];

            list1.next = list2;
            list2.next = list1Next;

            list1 = list1Next;
            list2 = list2Next;
        }

        return dummyNode.next;
    }
}
