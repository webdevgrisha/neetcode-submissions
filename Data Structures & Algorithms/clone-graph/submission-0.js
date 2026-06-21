/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return node;

        const seen = new Map();
        const stack = [node];
        seen.set(node, new Node(node.val));

        while (stack.length) {
            const curr = stack.pop();

            for(let n of curr.neighbors) {
                if(!seen.has(n)) {
                    seen.set(n, new Node(n.val));
                    stack.push(n);
                }

                seen.get(curr).neighbors.push(seen.get(n));
            }
        }

        return seen.get(node);
    }
}
