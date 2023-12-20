Merge Sort
1 user recently completed this Reading

So far, you've gone over some fairly inefficient methods of sorting an array. In this reading, you will explore a more time-efficient method of sorting: merge sort.
The merge sort algorithm

This algorithm sorts values using the following divide and conquer approach:

    Split unsorted array in half (divide)
    Sort the halves (conquer)
    Merge the newly sorted halves

Let's walk through an example.
Merge sort example

Say you want to sort the array, [10, 1, 7, 2]. Start by dividing the array in half.

[10, 1, 7, 2] ->

[10, 1] [7, 2]

Next, sort each half.

[10, 1] -> [1, 10]
[7, 2] -> [2, 7]

Finally, merge them back together.

[1, 10] [2, 7] -> [1, 2, 7, 10]

You might have some questions at this point. For example, isn't it cheating to call a sorting algorithm to implement a sorting algorithm? How does merge work? Let's answer those questions.
Merge

Merge is a function that takes two sorted arrays and combines them into a single sorted array containing all elements. It does this by comparing the first element of each array and moving the smaller value into the return array.

For the arrays [1, 10] and [2, 7], the first elements are 1 and 2 so you move the 1 into the return array.

[10] [2, 7]

return: [1]

Now, the first elements are 2 and 10, so you move the 2 into the return array.

[10] [7]

return: [1, 2]

Next goes the 7.

Since array 2 is now empty, you can add the remaining elements in array 1, giving you [1, 2, 7, 10].
Time complexity of Merge

Take a moment to think: what is the time complexity of merge?

If you guessed O(n2), you are correct! Remember that adding or removing values from the front of an array is an O(n) operation, and you do this for each value in the arrays.

Fortunately, you don't actually need to remove values to perform a merge. Instead, you can set a pointer to the first value, comparing values at that index. When you move a value to the return array, simply increment the pointer.

arr1: [1, 10], index1: 0
arr2: [2, 7], index2: 0
return: []

arr1: [1, 10], index1: 1
arr2: [2, 7], index2: 0
return: [1]

arr1: [1, 10], index1: 1
arr2: [2, 7], index2: 1
return: [1, 2]

...

This performs the merge without mutating the original arrays and gives merge a time complexity of O(n).
Calling a sort within a sort

Can you think of a technique you learned that calls a function from within itself?

If you answered recursion, you are right! Recall the steps that define a recursive function:

    Must call itself recursively
    Must contain a base case
    Must move toward the base case with each recursive call

The base case for merge sort is when the array is already sorted. This relies on the fact that an array of length 1 or 0 is considered trivially sorted.

The arrays [1], [1000], and [] are all sorted. Any array of length 1 or less is sorted. As long as our merge sort moves towards this state with each recursive call, it will work.

Since merge sort divides the array in half with each call, it gets smaller every time and will eventually get to length 1. Just like magic!
Time complexity of merge sort

Now think, what is the time complexity of merge sort?

This is a bit tricky to conceptualize but simply speaking, you must merge each time you make a recursive call. Since merge is O(n), you must determine the amount of times you recurse.

For an array of length 32, how many times must you divide to get to subarrays of length 1? The answer is 32 -> 16 -> 8 -> 4 -> 2 -> 1. Similar to binary search, this reduces the size by half each time for log n operations.

With one merge for each divide, the time complexity of merge sort is O(n log n).
Space complexity of merge sort

With this implementation, three new arrays are created every time you call merge sort. That means two half-arrays and one full-length merged array, for 2n space with each recursive call. Since there are log n recursive calls, this results in a space complexity of O(n log n). (Remember, the coefficient is ignored.)

It is possible to perform an in-place merge sort with a space complexity of O(1). Once you are able to complete an out-of-place merge sort, give it a try!

Final note: because recursion occupies space on the call stack, to truly achieve O(1) space complexity, you must also refactor to an iterative implementation, rather than recursive. That is beyond the scope of this reading, though.
Pseudocode

function mergesort(arr) {

// Check if the input is length 1 or less
// If so, it's already sorted: return

// Divide the array in half

// Recursively sort the left half
// Recursively sort the right half

// Merge the halves together and return
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

// Create an empty return array

// Point to the first value of each array

// While there are still values in each array...
// Compare the first values of each array
// Add the smaller value to the return array
// Move the pointer to the next value in that array

// Return the merged array
}

merge sort
What you learned

In this reading, you learned how merge sort uses a recursive divide and conquer approach to sort an array in O(n log n) time.
