/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        const result = [];
        const q = new Queue();

        if (root) q.push(root);

        while (q.size()) {
            const qSize = q.size();

            const currLevel = [];
            for (let i = 0; i < qSize; i++) {
                const curr = q.pop();

                currLevel.push(curr.val);

                if (curr.left) q.push(curr.left);
                if (curr.right) q.push(curr.right);
            }

            result.push(currLevel);
        }

        return result;
    }
}
