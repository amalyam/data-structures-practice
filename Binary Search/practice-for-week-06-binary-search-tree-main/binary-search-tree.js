// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }
    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new TreeNode(val);
        return;
      } else {
        this.insert(val, currentNode.left);
      }
    }
    if (val >= currentNode.val) {
      if (!currentNode.right) {
        currentNode.right = new TreeNode(val);
        return;
      } else {
        this.insert(val, currentNode.right);
      }
    }
  }

  search(target, node = this.root) {
    if (!node) return false;
    if (node.val === target) return true;
    if (target < node.val) return this.search(target, node.left);
    if (target > node.val) return this.search(target, node.right);
    return false;
  }

  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
  }
}

module.exports = { BinarySearchTree, TreeNode };
