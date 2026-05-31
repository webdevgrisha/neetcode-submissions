// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const dummy = new Node(null);
        const hashMap = new Map();

        let curr = head;
        let prev = dummy;
        while(curr) {
            const newNode = new Node(curr.val);
            
            hashMap.set(curr, newNode);

            prev.next = newNode;
            prev = newNode;
            curr = curr.next;
        }

        curr = head;
        prev = dummy.next;
        while(curr) {
            prev.random = hashMap.get(curr.random);

            curr = curr.next;
            prev = prev.next;
        }

        return dummy.next;
    }
}
