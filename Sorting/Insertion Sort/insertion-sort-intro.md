# Insertion Sort

You've probably used insertion sort before. Say you are dealt a hand of playing cards and wish to organize them from least to greatest. You might pick cards from the right side of your hand and move them to the left one-by-one, inserting each card in the correct location on the left.

Here are the steps to sort an array with insertion sort:

    Divide the array into sorted and unsorted
    Pick and remove a value from the unsorted
    Insert it into the correct place in the sorted
    Repeat this until unsorted is empty and sorted is full

There's two ways you can go about this, out-of-place or in-place.

## Out-of-place insertion sort (easy)

Let's say you want to sort the array [3, 2, 0, 4, 1] using out-of-place insertion sort. Start by creating an empty array called sorted.

```
arr = [3, 2, 0, 4, 1]
sorted = []
```

Start by removing a value from the input array and "inserting" it in the correct position of the sorted array. We'll use the first value in the array, the 3 and put it right in the empty sorted array. We will continue this process until arr is empty.

```
arr = [2, 0, 4, 1]
sorted = [3]
```

The next value in the array is 2, so remove that and insert it in the correct position. Since 2 is less than 3, it is inserted in the front.

```
arr = [0, 4, 1]
sorted = [2, 3]
```

The next value out of the input array is 0, which is less than 2 so goes at the front of sorted.

```
arr = [4, 1]
sorted = [0, 2, 3]
```

Next comes 4, which goes at the end.

```
arr = [1]
sorted = [0, 2, 3, 4]
```

The final value is 1, which is inserted between the 0 and 2. Think carefully about this step. How would you implement this in code? Put another way, how would you determine the correct position in the array to insert the value, and how would you perform the insertion?

```
arr = []
sorted = [0, 1, 2, 3, 4]
```

Now that the input array is empty, the sorted array is complete and can be returned.

## In-place insertion sort (medium)

Because the out-of-place insertion sort creates a new array, the space complexity is O(n). It's possible to perform this algorithm in-place, meaning in O(1) space using no extra memory. How is this possible? The answer involves mutating the input array.

Starting with the same input array, [3, 2, 0, 4, 1], create a variable marking the divide between the sorted and unsorted halves of the original array. At each step, the rule (sometimes called an invariant) is that everything to the left of the divider is sorted. Since the sorted half starts empty, the divider will start at 0.

```
arr = [3, 2, 0, 4, 1]
divider = 0
```

Take the first value from the unsorted half and save it in a temporary variable.

```
arr = [3, 2, 0, 4, 1]
divider = 0
temp = 3
```

In the sorted half, shift every sorted number larger than the temp variable value to the right by 1, then insert the temp variable value when it reaches a smaller value, or the end of the array. Since this new inserted value is now sorted, move the divider to the right by 1 as well.

On this initial pass, the sorted half is "empty" so the temp variable value 3 is inserted at index 0. Then the divider is moved to index 1, indicating that the value has been sorted.

```
arr = [3, 2, 0, 4, 1]
divider = 1
temp = 3
```

Everything to the left of the divider is now sorted! We now repeat this process until the entire array is sorted.

```
arr = [3, 2, 0, 4, 1]
divider = 1
temp = 2
```

Grab the 2, shift over the larger sorted values, then insert the 2 and increment the divider.

```
arr = [2, 3, 0, 4, 1]
divider = 2
temp = 2
```

Once again, everything to the left of the divider is sorted. The algorithm works just like the out-of-place insertion sort, except all in the same array. Next, grab the first value in the unsorted half and set it to the temp variable.

```
arr = [2, 3, 0, 4, 1]
divider = 2
temp = 0
```

Note that to insert the 0, you need to shift each larger value (the 2 and 3) to the right by one. This has intermediate states of [2, 3, 3, 4, 1] and [2, 2, 3, 4, 1] before inserting the temp value at the correct point, [0, 2, 3, 4, 1]. Remember that shifting is an O(n) operation and should be run from right to left.

```
arr = [0, 2, 3, 4, 1]
divider = 3
temp = 0
```

After running the shift and incrementing the divider, grab the next unsorted value and insert it at the correct place.

```
arr = [0, 2, 3, 4, 1]
divider = 3
temp = 4
```

Following same logic of shifting each larger sorted value to the right by one before inserting the 4, there are no larger values so nothing shifts and the 4 is put right back in its original location. Increment the divider and repeat.

```
arr = [0, 2, 3, 4, 1]
divider = 4
temp = 1
```

With the 1 stored, the algorithm begins to check each sorted value from right to left, shifting each larger value by 1. First goes the 4, making the array [0, 2, 3, 4, 4]. Next is the 3: [0, 2, 3, 3, 4], then the 2: [0, 2, 2, 3, 4]. The 0 is smaller so the loop can stop and the temp value can be inserted: [0, 1, 2, 3, 4]. Now the divider increments to the end of the array and the insertion sort can exit and return.

Note that both out-of-place and in-place insertion sorts have time complexities of O(n2). Can you figure out why?

## Your task

Your task is to implement insertionSort. Try the out-of-place insertion sort first, then try to solve it in-place. Here is the pseudocode for the in-place version. Good luck!

```
function insertionSort(arr) {

    // Set a pointer diving the array into sorted and unsorted halves

    // Repeat while the unsorted half is not empty:

    // Grab the first value from the unsorted half

    // For each sorted value in the array starting from the divider,
      // Check if the value to the left is smaller than the unsorted value
        // If so, you've reached the insertion point so exit the loop
        // If not shift the value to the right by 1 and continue

    // Insert the unsorted value at the insertion point

    // Increment the dividing pointer and repeat
}
```
