/**
 * https://leetcode.com/problems/invert-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  };


 var invertTree = function(root) {
  const left = TreeNode.left;
  const right = TreeNode.right;
  // Base case...
  if(root == null){
      return root
  }
  // Call the function recursively for the left subtree...
  invertTree(root.left)
  // Call the function recursively for the right subtree...
  invertTree(root.right)
  // swapping process...
  const curr = root.left
  root.left = root.right
  root.right = curr
  return root         // Return the root...   
};

const test = JSON.stringify(invertTree([4,2,7,1,3,6,9]));
console.log(test);
//0->1
//1, 2->2
//3, 4, 5, 6->4
//->8