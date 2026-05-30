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
     * @return {boolean}
     */
    hasCycle(head) {
        let p1 = head;
        let p2 = head;

        while (p1 && p2) {
            p1 = p1.next;
            p2 = p2.next?.next;

            if (p1 === p2) return true;
        }

        return false;
    }
}
