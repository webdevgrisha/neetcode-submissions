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
     * @return {boolean}
     */
    isBalanced(root) {
        if(!root) return true;

        const leftH = this.getHeight(root.left);
        const rightH = this.getHeight(root.right);

        const diff = Math.abs(leftH - rightH);

        if(diff > 1) return false;

        return this.isBalanced(root.left) && this.isBalanced(root.right)

    }
    getHeight(root) {
        if (!root) return 0;

        return Math.max(this.getHeight(root.left) + 1, this.getHeight(root.right) + 1);
    }
}
