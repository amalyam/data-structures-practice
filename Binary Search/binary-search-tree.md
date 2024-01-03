# Binary Search Trees (BST)

A node-and-pointer-based ata structure, similar to a doubly linked list
Allows for the same O(log n) search as a sorted array, but with O(log n) insertion ad deletion as well
Consists of nodes which each contain a value and two pointers (left + right) which always point downward

**Key property**: Every node contained in the left branch of any node will be less than the value of the node itself

- every node in the right branch will be greater than the node value

Three possible implementations for handling values that are equal to a value in an existing node:

1. discard the duplicate (similar to a set)
2. place equal values to the left
3. place equal values to the right (most common)

## Searching a binary search tree

1. If the root node is null, return false
2. If the root node's value equals the target, return true
3. If the target is less than the root value, recursively search the left child
4. If the target is greater than the root value, recursively search the right child

### Recursive implementation

```
function searchBST(root, target) {

    if (root === null) return false

    if (target === root.value) return true;

    if (target < root.value) return searchBST(root.left, target);

    if (target > root.value) return searchBST(root.right, target);
}
```

### Iterative implementation

```
function searchBST(root, target) {

    let currentNode = root;

    while (currentNode !== null) {

        if (target === currentNode.value) return true;

        if (target < currentNode.value) currentNode = currentNode.left;

        if (target > currentNode.value) currentNode = currentNode.right;
    }

    return false;
}
```

## Time complexity of BST search

worst-case: num of calls === height of the tree (in a perfectly balanced BST, height === log n)

- each level has twice the number of nodes as the level above it (adding a level doubles the capacity)
- moving down a level reduces the number of values to search by half
- **time complexity: O(log n)**

## Node addition + removal

Addition: search for an empty spot to put the node and insert it

Removal:

Case 1 - node with no children
Simply delete the node

Case 2 - node with one child
Replace that node with its child

Case 3 - node with two children
Search for either the right-most node in the left branch, or the left-most nod ein the right branch, delete that node, replace current node with its value

Each of these operations require one comparison per level for an optimal runtime of **O(log n)**

## Unbalanced BSTs

Worst-case search time of O(n)
