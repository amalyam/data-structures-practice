Built-in Sorts
1 user recently completed this Reading

Now that you've learned how to implement various sorting algorithms, it's finally time to learn how to use JavaScript's built-in sort function.
What algorithm does JavaScript use to sort?

It depends. Each browser runs their own version of JavaScript, with their own sorting implementation. Chrome's V8 JS engine currently uses mergesort but has used quicksort in the past, with insertion sort for small inputs. Either way, you can be confident that whatever implementation was used, it will be in-place with O(1) space complexity and O(n log n) time complexity.
How do I use JavaScript's sort?

Start by creating an array and calling nums.sort(). It will return the sorted array, and since it sorts in-place, note that the original copy is mutated.

nums = [3, 2, 0, 4, 1];
nums.sort();
console.log(nums); // [0, 1, 2, 3, 4]

Fantastic! Or is it? This example doesn't quite tell the entire story of JavaScript's sort. To demonstrate this, try sorting the array, [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024].

nums = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
nums.sort();
console.log(nums);

Try running this in a console and the function returns [1024, 128, 16, 2, 256, 32, 4, 512, 64, 8]. What's going on here?

It turns out that JavaScript sorts numbers in alphabetical, not numerical order. This is because JavaScript is optimized for text parsing, so it stores everything, even numbers, as strings. Thus, it sees this array of integers as an array of strings ['2', '4', '8', '16', '32', '64', '128', '256', '512', '1024'] and sorts accordingly.

Fortunately, JavaScript allows you to define a custom sorting predicate, similar to higher-order functions you learned previously like map, filter and reduce.

function compareNumbers(a, b) {
return a - b;
}
nums = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
nums.sort(compareNumbers);

This works because if a is larger than b, a - b returns a positive value, and b is sorted ahead of a. Otherwise, a - b is negative and the values of a and b are not swapped, maintaining their order.
Funky sorting with JavaScript's sort

JavaScript's built-in sort can be very powerful! Recall this problem describing even/odd sort.

Given an array nums, sort the array in ascending order with all
the even numbers on the left and all the odds on the right.

Input: [9, 8, 7, 6, 5, 4, 3, 2, 1]
Output: [2, 4, 6, 8, 1, 3, 5, 7, 9]

In the prior reading, we came up with a 6-step plan and implemented a 50 line solution. Using the JS sorting predicate, we can create a 3 step plan and a 6 line solution.

    If a is even and b is odd, return 1
    If a is odd and b is even, return -1
    Otherwise, sort normally with a - b

Translated to code, this produces an extremely readable and elegant solution:

nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

function oddEvenCompare(a, b) {
if (a % 2 === 1 && b % 2 === 0) return 1;
if (a % 2 === 0 && b % 2 === 1) return -1;
return a - b;
}
nums.sort(oddEvenCompare);

Not only that, but assuming the engine is using an in-place merge or quicksort (not guaranteed, but very likely), this solution has a runtime of O(n log n) and space complexity of O(1). Not bad!

Note that you could also use the built-in sort to solve the zeroes to the right problem, but the runtime would be less efficient than the optimal O(n) solution. Still, if performance isn't a concern, this is a perfectly valid and extremely readable solution.

nums = [0, 1, 0, 4, 15];

function moveZeroesCompare(a, b) {
if (a === 0) return 1;
if (b === 0) return -1;
return a - b;
}
nums.sort(moveZeroesCompare);

What you learned

In this reading, you learned to make use of JavaScript's built-in sort to order array values alphabetically. You also learned how to define a custom sorting predicate to produce numerical sorts and various funky sorts.
