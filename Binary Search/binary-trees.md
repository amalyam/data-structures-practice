# Binary Trees

## Binary Tree Search

Algorithm: 1. Base case: If the tree is null, return false 2. If the current node's value equals the target, return true 3. Otherwise, search the left subtree for the target 4. If the value isn't in the left subtree, try the right subtree

```
function binaryTreeSearch(root, target) {
    // Base case: If the tree is null, return false
    if (root === null) return false;

    // If the current node's value equals the target, return true
    if (root. value === target) return true;

    // Otherwise, search the left subtree for the target
    if (binaryTreeSearch(root.left, target)) return true;

    // If the value isn't in the left subtree, try the right subtree
    return binaryTreeSearch(root.right, target);
}
```

## Binary Tree Traversal

```
function BinaryTreeSum(root) {
    // Check the base case
    if (root === null) return 0;

    // Recursively sum up the left and right trees
    const leftSum = binaryTreeSum(root.left);
    const rightSum = binaryTreeSum(root.right);

    // Return the value plus the left and right totals
    return root.value + leftSum + rightSum;
}
```

**Pre-order traversal**: follows "Root-Left-Right" policy - performs action on root, left subtree, then right subtree

- perform action before recursive call

**In-order traversal**: performs action on nodes in order

- perform action wherever, ex: between recursive calls

**Post-order traversal**: follows "Left-Right-Root" policy - performs action on left subtree, right subtree, then root node

- perform action after recursive call

**Depth-first search/traversal**: traveling as deep as possible down the tree branches until reaching a dead-end, then backtracking to the next branch

- although the nodes are acted on in different orders, the path each algorithm takes is the same as pre-order traversal

## Breadth-first traversal

Visits each node by level before traveling down to the next level

- because breadth-first traversals jump between subtrees, it cannot be implemented recursively
- instead, solved with a queue:
  1. Put the starting node in a queue
  2. While the queue is not empty, repeat steps 3-4
  3. Dequeue a node and perform action
  4. Put all of the node's children in the back of the queue

```
function breadthFirstTraversal(root) {

    // Put the starting node in a queue
    const queue = new Queue();
    queue.enqueue(root);

    // While the queue is not empty
    while (queue.size > 0) {

        // Dequeue a node and print it
        let node = queue.dequeue();
        console.log(node.value);

        // Put all of the node's children in the back of the queue
        queue.enqueue(node.left);
        queue.enqueue(node.right);
    }
}
```

or, use an array to mimic a queue:

```
function breadthFirstTraversal(root) {

    // Put the starting node in a queue
    const queue = [];
    queue.push(root);

    //While the queue is not empty
    while (queue.length > 0) {

        // Dequeue a node and print it
        let node = queue.shift();
        console.log(node.value);

        // Put all of the node's children in the back of the queue
        queue.push(node.left);
        queue.push(node.right);
    }
}
```

## Depth-first traversal with a stack

1. Put the starting node on a STACK
2. While the STACK is not empty, repeat steps 3-4
3. POP a node and print it
4. Put all of the node's children on the TOP of the STACK

```
function depthFirstTraversal(root) {

    // Put the starting node on a stack
    const stack = [];
    stack.push(root);

    // While the stack is not empty
    while (stack.length > 0) {

        // Pop a node and print it
        let node = stack.pop();
        console.log(node.value);

        // Put all of the node's children on the top of the stack
        stack.push(node.right);
        stack.push(node.left);
    }
}
```
