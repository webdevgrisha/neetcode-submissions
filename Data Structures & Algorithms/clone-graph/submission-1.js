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

        function dfs(node) {
            if (seen.has(node)) return seen.get(node);

            const copy = new Node(node.val);
            seen.set(node, copy);

            for (let n of node.neighbors) {
                copy.neighbors.push(dfs(n));
            }

            return copy;
        }

        return dfs(node);
    }
}
