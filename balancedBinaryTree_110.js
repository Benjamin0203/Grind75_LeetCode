/**
 * https://leetcode.com/problems/balanced-binary-tree/
 * 
 * 
 * Given a binary tree, determine if it is height-balanced.
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */



 var isBalanced = function(root) {
  if (root === null) return false;
  if (height(root) === -1) return false;
  return true;
  
};

const height = root => {
  
  if (root === null) return 0;
  let leftHeight = height(root.left);
  let rightHeight = height(root.right);
  
  if (leftHeight === -1 || rightHeight === -1) return -1;
  if (Math.abs(leftHeight - rightHeight) > 1 ) return -1;
  
  return (Math.max(leftHeight, rightHeight) + 1);
}

const test1 = isBalanced([3,9,20,null,null,15,7]);
console.log(test1);