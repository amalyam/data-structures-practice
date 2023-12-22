Funky Sorting
1 user recently completed this Reading

So far, you've learned a variety of methods for sorting integers from smallest to largest. What about sorting in different ways? What kind of sorting problems should you expect in job interviews? This reading will cover all of that.
Zeroes to the right

Let's start by revisiting this problem from the Polya reading.

Given an array nums, write a function to move all 0's to the end of it while
maintaining the relative order of the non-zero elements.

Input: [0,1,0,4,15] Output: [1,4,15,0,0]

- You must do this in-place without making a copy of the array.
- Minimize the total number of operations.

Read it over and think back to your first encounter with this problem. Compare your understanding of the problem then with your understanding now. Now you know what it means to write an in-place algorithm (space complexity of O(1)) and how to minimize the number of operations (optimize the time complexity). You are familiar with in-place sorting techniques like swapping and shifting, and know the costs of each, along with shift, unshift, push, pop and splice.

Using this knowledge, how would you solve this problem? Can you solve it in O(n) time?
Zeroes to the right revisited

Here's an idea:

    Create a pointer called firstZero that points to the left-most zero in the array.
    Iterate through the array.
    If firstZero has not been set, continue on until you reach a zero
    When you reach the first zero, set firstZero to the current index
    When you reach a non-zero value, swap it's position with firstZero and increment firstZero

Here it is expressed in code:

function moveZeroes(nums) {
// Create a pointer called `firstZero` that points to the left-most
// zero n the array.
let firstZero = -1;
// Starts as -1 because there are no zeroes encountered yet

    // Iterate through the array.
    for (let i = 0 ; i < nums.length ; i++) {
        // If `firstZero` has not been set, continue on until you reach a zero
        if (firstZero === -1) {

            // When you reach the first zero, set `firstZero` to the current index
            if (nums[i] === 0) firstZero = i;
        }

        // When you reach a non-zero value
        else if (nums[i] !== 0) {
            // swap it's position with `firstZero`
            [nums[i], nums[firstZero]] = [nums[firstZero], nums[i]];
            // and increment `firstZero`
            firstZero++;
        }
    }

    return nums;

}

Using the two pointer, array iteration and in-place swaps, this problem can be solved optimally. Remember these techniques and think about how they might be applied when faced with a problem related to arranging data in some particular order.

If you're having trouble envisioning the solution to these type of problems, spend some more time studying and implementing the core sorting algorithms. These are classic exercises that can be revisited many times to practice fundamental coding techniques.
Even/Odd sort

Let's look at another funky sort: Even/Odd sort. This is a problem you might encounter in a whiteboarding interview.

Given an array nums, sort the array in ascending order with all
the even numbers on the left and all the odds on the right.

Input: [9, 8, 7, 6, 5, 4, 3, 2, 1]
Output: [2, 4, 6, 8, 1, 3, 5, 7, 9]

There are no time or space requirements so you're free to solve this as you please. Perhaps a 2-array variation of out-of-place selection sort.

    Create two empty arrays: evens and odds
    Find the smallest even and odd values in the array
    Add these to the end of the even and odd arrays
    Remove the smallest even and odd values from the array
    Repeat 2 through 4 until the input array is empty
    Join the even and odd arrays and return

function evenOddSort(nums) {
// Create two empty arrays: evens and odds
const evens = [];
const odds = [];

    // Repeat 2 through 4 until the input array is empty
    while (nums.length > 0) {

        // Find the smallest even and odd values in the array
        let smallestEven = Infinity;
        let smallestOdd = Infinity;
        for (let i = 0 ; i < nums.length ; i++) {
            if (nums[i] % 2 === 0) {  // even
                if (nums[i] < smallestEven) {
                    smallestEven = nums[i];
                }
            } else if (nums[i] % 2 === 1) {  // odd
                if (nums[i] < smallestOdd) {
                    smallestOdd = nums[i];
                }
            }
        }

        // Add these to the end of the even and odd arrays
        if (smallestEven !== Infinity) {
            evens.push(smallestEven);

            // Remove the smallest even value from the array
            let smallestEvenIndex = nums.indexOf(smallestEven);
            nums.splice(smallestEvenIndex, 1);
        }

        if (smallestOdd !== Infinity) {
            odds.push(smallestOdd);

            // Remove the smallest odd value from the array
            let smallestOddIndex = nums.indexOf(smallestOdd);
            nums.splice(smallestOddIndex, 1);
        }

    }

    // Join the even and odd arrays and return
    return [...evens, ...odds];

}

evenOddSort([0,1,1,1,1,1,1,2,4,5,6])

As an exercise, you can refactor this to run in-place.
What you learned

In this reading, you learned to integrate the coding techniques you've learned from sorting into various "funky" sorts that commonly show up in coding. Now, all that's standing between you and sorting mastery is practice!
