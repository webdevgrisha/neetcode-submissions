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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum = 0) {
        function dfs(root, currSum = 0) {
            if (!root) return false;

            currSum += root.val;

            if (!root.left && !root.right) {
                return currSum === targetSum;
            }

            if (dfs(root.left, currSum)) return true;
            if (dfs(root.right, currSum)) return true;

            return false;
        }

        return dfs(root)
    }
}
