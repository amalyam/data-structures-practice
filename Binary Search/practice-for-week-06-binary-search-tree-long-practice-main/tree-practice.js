const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  if (!rootNode) return;

  if (rootNode.left) return findMinBST(rootNode.left);

  return rootNode.val;
}

function findMaxBST(rootNode) {
  if (!rootNode) return;

  if (rootNode.right) return findMaxBST(rootNode.right);

  return rootNode.val;
}

function findMinBT(rootNode) {
  const stack = [];
  stack.push(rootNode);
  let min = Infinity;

  if (rootNode && rootNode.val !== null && rootNode.val !== undefined) {
    min = rootNode.val;
  }

  while (stack.length > 0) {
    let node = stack.pop();
    if (node.val && node.val < min) {
      min = node.val;
    }
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return min;
}

function findMaxBT(rootNode) {
  const stack = [];
  stack.push(rootNode);
  let max = Infinity;

  if (rootNode && rootNode.val !== null && rootNode.val !== undefined) {
    max = rootNode.val;
  }

  while (stack.length > 0) {
    let node = stack.pop();
    if (node.val && node.val > max) {
      max = node.val;
    }
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return max;
}

function getHeight(rootNode) {
  if (!rootNode) return -1;
  if (!rootNode.left && !rootNode.right) {
    return 0;
  } else if (rootNode.left && rootNode.right) {
    return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right));
  } else if (!rootNode.left && rootNode.right) {
    return 1 + getHeight(rootNode.right);
  } else if (rootNode.left && !rootNode.right) {
    return 1 + getHeight(rootNode.left);
  }
}

function countNodes(rootNode) {
  if (!rootNode) return 0;

  const stack = [];
  stack.push(rootNode);
  let count = 0;

  while (stack.length > 0) {
    let node = stack.pop();
    count++;

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return count;
}

function balancedTree(rootNode) {
  if (!rootNode) return true;
}

function getParentNode(rootNode, target) {
  // Your code here
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  // Undefined if the target cannot be found
  // Set target based on parent
  // Case 0: Zero children and no parent:
  //   return null
  // Case 1: Zero children:
  //   Set the parent that points to it to null
  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.
  // Case 3: One child:
  //   Make the parent point to the child
}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST,
};
