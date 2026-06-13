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
        while (lists.length > 1) {
            const mergedLists = [];

            for (let i = 0; i + 1 <= lists.length; i += 2) {
                mergedLists.push(this.mergeLists(lists[i], lists[i + 1]));
            }

            lists = mergedLists;
        }

        return lists[0] || null;
    }
    mergeLists(list1, list2) { 
        const dummy = new ListNode();
        let curr = dummy;

        while (list1 && list2) {
            if (list1.val <= list2.val) {
                curr.next = list1;
                list1 = list1.next;
            } else {
                curr.next = list2;
                list2 = list2.next;
            }

            curr = curr.next;
        }

        if (list1) curr.next = list1;
        if (list2) curr.next = list2;

        return dummy.next;
    }
}
