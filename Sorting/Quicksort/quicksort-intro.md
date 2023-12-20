Quicksort
1 user recently completed this Reading

Quick sort is an algorithm that uses a divide and conquer approach to sort values efficiently. In this reading, you will learn how it works.
The quicksort algorithm

The quicksort algorithm works as follows:

    Pick a value in the array to serve as the pivot
    Partition the array so that values smaller than the pivot are on the left and values larger than the pivot are on the right
    Sort the left and the right partitions
    Return an array with left, pivot, and right values

Let's walk through an example.
Quicksort example

Say you want to sort the array, [5, 4, 10, 1, 8, 3, 6].

Start by picking a pivot. You can pick any value to be the pivot but for simplicity, let's use the first value: 5.

Next create empty arrays called left and right. Walk through the array and copy all smaller values into left and larger values into right.

pivot: 5
left: [4, 1, 3] // values smaller than pivot
right: [10, 8, 6] // values larger than pivot

Next, sort the left and right sides.

pivot: 5
left: [1, 3, 4]
right: [6, 8, 10]

Finally, return an array combining the left, pivot, and right in that order.

[1, 3, 4] + 5 + [6, 8, 10] ->

[1, 3, 4, 5, 6, 8, 10]

Recursive sorting

Similar to merge sort, quicksort calls itself recursively on subarrays that get smaller with each call until it reaches the base case of length 1 or 0.

Since arrays of length 1 or 0 are always sorted, this satisfies the three criteria for recursion:

    Must call itself recursively
    Must contain a base case
    Must move toward the base case with each recursive call

Recursion makes quicksort work like magic!
Time complexity of quicksort

In the example shown above, the array is chopped in half at each step. This results in O(log n) steps to get down to the base case. Each step requires walking through all n elements to partition values into the left and right halves for a time complexity of O(n log n).

However, it is possible that the pivots are arranged in such a way that the array is very unbalanced. For example, if you quicksort the array [1, 2, 3, 4, 5], you will get values like this:

pivot = 1
left = [2, 3, 4, 5]
right = []

Then, you recursively call quicksort on the right array which returns immediately and the left array which results in this:

pivot = 2
left = [3, 4, 5]
right = []

Recursively quicksorting the left again results in this:

pivot = 3
left = [4, 5]
right = []

...until you finally hit the base case.

pivot = 4
left = [5]
right = []

In this worst case, you end up making n recursive calls which iterate through the array each time for a worst-case time complexity of O(n2). Yikes!

This is quite rare for an array with randomly distributed values but it's worth noting that the performance of quicksort can vary depending on the input.

On average though quicksort has a time complexity of (n log n).
Space complexity of quicksort

Just like merge sort, this implementation creates three new arrays with each recursive call: two half arrays and one full-length copy to return. For the average case of log n calls, this results in a space complexity of O(n log n).

Also like merge sort, it is possible to perform this in-place for a space complexity of O(1). Once you get an out-of-place solution working, try it out!
Pseudocode

function quicksort(arr) {

// Check if the input is length 1 or less
// If so, it's already sorted: return

// Pick a pivot

// Put all values smaller than the pivot to the `left`
// Put all values larger than the pivot to the `right`

// Sort the left half
// Sort the right half

// Return the array with the left, pivot, and right values
}

in-place quicksort
What you learned

In this reading, you learned how quicksort uses a recursive divide and conquer approach to sort an array in O(n log n) time.
