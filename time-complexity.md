# Time Complexity

## Arrays

Time:

- access, insertion/deletion at end: O(1)
- search, insertion/deletion at beginning or middle: O(n)

Space: O(n) (where n is num of elements)

## Linked Lists

Time:

- access, search, and insertion/deletion at end or middle: O(n)
- insertion/deletion at beginning: O(1)

Space: O(n) (where n is num of elements)

## Stacks + Queues

Time:

- access/search: O(n)
- insertion/deletion: O(1)

Space: O(n) (where n is num of elements)

## Hash Tables

Time:

- Average: O(1) search, insert, delete
- Worst-case: O(n) (when all keys hash to same index)

Space: O(n) (where n is num of entries in table)

## Selection Sort

Time:

- Best, average, worst: O(n^2)
  (even when input is already sorted)

Space: O(1) (if in-place)

## Bubble + Insertion Sort

Time:

- Best: O(n) (where input is already sorted)
- Average + worst: O(n^2)

Space: O(1) (if in-place)

## Merge + Quicksort (recursive)

Time: O(n log n)
Quicksort can have worst-case of O(n^2) when the pivot is the smallest or largest element

Space: O(n) (needs space to temporarily store copy of the input)

## Binary Search

Time: O(log n)
Space: O(1) [space for the three ints - high, low, midpoint]

of an unsorted array (first requiring sorting): O(n log n)

worst-case (an unbalanced tree where each node only has one child): O(n)

## Binary Search Tree

Time: O(log n) search, insertion, and deletion

Traversal -
Time: O(n)
Space: O(w) [determined by the max width of the tree, i.e. max number of nodes at any depth]
