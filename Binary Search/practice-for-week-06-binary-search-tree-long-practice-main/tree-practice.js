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

  // Recursive Solution
  return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);

  /* 
Stack Solution

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
  */
}

function balancedTree(rootNode) {
  if (!rootNode) return true;
  if (!rootNode.left && !rootNode.right) return true;

  const leftHeight = getHeight(rootNode.left);
  const rightHeight = getHeight(rootNode.right);

  if (Math.abs(leftHeight - rightHeight) > 1) return false;

  return balancedTree(rootNode.left) && balancedTree(rootNode.right);
}

function getParentNode(rootNode, target) {
  if (rootNode.val === target) return null;
  if (rootNode.left && rootNode.left.val === target) return rootNode;
  if (rootNode.right && rootNode.right.val === target) return rootNode;

  let left = null;
  let right = null;

  if (rootNode.left) {
    left = getParentNode(rootNode.left, target);
  }
  if (rootNode.right) {
    right = getParentNode(rootNode.right, target);
  }
  if (left === null && right === null) return undefined;

  return left || right;
}

/* 
// Correct code for a _binary tree_
function inOrderPredecessor(rootNode, target, prevNode = null) {
  if (rootNode === null) return null;

  if (rootNode.left) {
    let result = inOrderPredecessor(rootNode.left, target, rootNode);
    if (result !== undefined) return result;
  }

  if (rootNode.val === target) return prevNode ? prevNode.val : null;

  if (rootNode.right) {
    let result = inOrderPredecessor(rootNode.right, target, rootNode);
    if (result !== undefined) return result;
  }

  return null;
} */

// Code for a binary _search_ tree
function inOrderPredecessor(rootNode, target) {
  let targetNode = findNode(rootNode, target);
  if (targetNode === null) return null;

  if (targetNode.left !== null) {
    return findMaxNode(targetNode.left).val;
  } else {
    let ancestor = findAncestor(rootNode, target);
    return ancestor ? ancestor.val : null;
  }
}

function findNode(node, target) {
  if (node === null || node.val === target) return node;
  if (target < node.val) return findNode(node.left, target);
  return findNode(node.right, target);
}

function findMaxNode(node) {
  while (node.right !== null) node = node.right;
  return node;
}

function findAncestor(node, target, parent = null) {
  if (node === null) return null;
  if (target < node.val) return findAncestor(node.left, target, parent);
  if (target > node.val) return findAncestor(node.right, target, node);
  return parent;
}

function deleteNodeBST(rootNode, target, parentNode = null) {
  // Do a traversal to find the node. Keep track of the parent
  if (rootNode === null) return null;

  // Set target based on parent
  if (rootNode.val === target) {
    // Case 0: Zero children and no parent:
    //   return null
    if (!rootNode.left && !rootNode.right && !parentNode) return null;

    // Case 1: Zero children:
    //   Set the parent that points to it to null
    if (!rootNode.left && !rootNode.right) {
      if (parentNode.left === rootNode) parentNode.left = null;
      if (parentNode.right === rootNode) parentNode.right = null;
    }

    // Case 2: Two children:
    if (rootNode.left && rootNode.right) {
      //  Set the value to its in-order predecessor, then delete the predecessor
      //  Replace target node with the left most child on its right side,
      //  or the right most child on its left side.
      //  Then delete the child that it was replaced with.
      if (rootNode.left.val < rootNode.val) {
        rootNode.val = rootNode.left.val;
        rootNode.left.val = null;
      }
      if (rootNode.right.val < rootNode.val) {
        rootNode.val = rooNode.right.val;
        rootNode.right.val = null;
      }
    }
    // Case 3: One child:
    //   Make the parent point to the child
  }

  // Undefined if the target cannot be found
  return undefined;
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
