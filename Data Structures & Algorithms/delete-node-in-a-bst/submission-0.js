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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if (!root) return null;

        if (key > root.val) {
            root.right = this.deleteNode(root.right, key);
        } else if (key < root.val) {
            root.left = this.deleteNode(root.left, key);
        } else {
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }

            const midNodeVal = this.findMinNodeVal(root.right);
            root.val = midNodeVal;
            root.right = this.deleteNode(root.right, midNodeVal)
        }

        return root;
    }
    findMinNodeVal(root) {
        let curr = root;

        while (curr && curr.left) {
            curr = curr.left;
        }

        return curr.val;
    }
}
