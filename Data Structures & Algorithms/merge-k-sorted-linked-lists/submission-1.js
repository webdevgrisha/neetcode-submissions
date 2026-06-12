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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let dummy = new ListNode()

        for (let i = 0; i < lists.length; i++) {
            dummy.next = this.mergeTwoSortedLists(dummy.next, lists[i]);
        }

        return dummy.next;
    }
    mergeTwoSortedLists(list1, list2) {
        const dummy = new ListNode();

        let prev = dummy;
        while (list1 && list2) {
            if (list1.val <= list2.val) {
                prev.next = list1;
                list1 = list1.next;
            } else {
                prev.next = list2;
                list2 = list2.next;
            }

            prev = prev.next;
        }

        if (list1) prev.next = list1;
        if (list2) prev.next = list2;

        return dummy.next;
    }
}
