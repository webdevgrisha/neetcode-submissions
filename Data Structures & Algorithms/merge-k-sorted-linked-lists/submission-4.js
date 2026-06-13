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
        const dummy = new ListNode();
        let curr = dummy;

        while (true) {
            let minNode = -1;

            for (let i = 0; i < lists.length; i++) {
                if (!lists[i]) continue;

                if (minNode === -1 || lists[minNode].val > lists[i].val) {
                    minNode = i;
                }
            }

            if (minNode === -1) break;

            curr.next = lists[minNode];
            curr = curr.next;
            lists[minNode] = lists[minNode].next;
        }

        return dummy.next;
    }
}
