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
        if (!list1) return list2;
        if (!list2) return list1;

        const dummy = new ListNode(null);

        const [val1, val2] = [list1.val, list2.val];

        if (val1 < val2) {
            dummy.next = list1;
            dummy.next.next = this.mergeTwoLists(list1.next, list2);
        } else {
            dummy.next = list2;
            dummy.next.next = this.mergeTwoLists(list1, list2.next);
        }

        return dummy.next;
    }
}
