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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode(null);

        let prev = dummy;
        let carry = 0;
        while (l1 || l2) {
            const [l1Val, l2Val] = [l1?.val ?? 0, l2?.val ?? 0]
            const sum = l1Val + l2Val + carry;

            const digit = sum % 10;
            carry = Math.floor(sum / 10);

            prev.next = new ListNode(digit);
            prev = prev.next;

            l1 = l1?.next;
            l2 = l2?.next;
        }

        if(carry) {
            prev.next = new ListNode(1);
        }

        return dummy.next;
    }
}
