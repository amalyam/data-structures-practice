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
    if (!currentNode) return;

    console.log(currentNode.val);

    if (currentNode.left) this.preOrderTraversal(currentNode.left);
    if (currentNode.right) this.preOrderTraversal(currentNode.right);
  }

  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    if (currentNode.left) this.inOrderTraversal(currentNode.left);

    console.log(currentNode.val);

    if (currentNode.right) this.inOrderTraversal(currentNode.right);
  }

  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    if (currentNode.left) this.postOrderTraversal(currentNode.left);

    if (currentNode.right) this.postOrderTraversal(currentNode.right);

    console.log(currentNode.val);
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    const queue = [];
    if (this.root) queue.push(this.root);

    while (queue.length > 0) {
      let node = queue.shift();
      if (node) {
        console.log(node.val);

        queue.push(node.left);
        queue.push(node.right);
      } else {
        return;
      }
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    const stack = [];
    if (this.root) stack.push(this.root);

    while (stack.length > 0) {
      let node = stack.pop();
      if (node) {
        console.log(node.val);

        if (node.right) stack.push(node.left);
        if (node.left) stack.push(node.right);
      } else {
        return;
      }
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
