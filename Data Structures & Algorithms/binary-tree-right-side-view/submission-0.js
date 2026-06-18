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
     * @return {number[]}
     */
    rightSideView(root) {
        const result = [];
        const q = new Queue();

        if(root) q.push(root);

        while(q.size()) {
            const qLen = q.size();
            let curr = null;

            for(let i = 0; i < qLen; i++) {
                curr = q.pop();

                if(curr.left) q.push(curr.left);
                if(curr.right) q.push(curr.right);
            }

            result.push(curr.val);
        }

        return result;
    }
}
