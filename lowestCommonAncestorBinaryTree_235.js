
/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * 
 * https://www.youtube.com/watch?v=6POfA8fruxI
 * 
 * 
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var lowestCommonAncestor = function(root, p, q) {
  if (p.val < root.val && q.val < root.val) {
      return lowestCommonAncestor(root.left, p, q);
  }
  if (p.val > root.val && q.val > root.val) {
      return lowestCommonAncestor(root.right, p, q)
  }
  return root;
};
//Test

const test1 = lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5], 2, 8);
console.log((test1)); // => 6



