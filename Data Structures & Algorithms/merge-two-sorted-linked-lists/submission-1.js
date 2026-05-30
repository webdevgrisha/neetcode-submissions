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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const dummy = new ListNode(null);

        let p1 = list1;
        let p2 = list2;

        let prev = dummy;
        while (p1 || p2) {
            const p1Val = p1?.val ?? +Infinity;
            const p2Val = p2?.val ?? +Infinity;

            if (p1Val < p2Val) {
                prev.next = p1;
                p1 = p1.next;
            } else {
                prev.next = p2;
                p2 = p2.next;
            }

            prev = prev.next;
        }

        return dummy.next;
    }
}
