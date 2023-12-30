// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

- Copy the original array
- Create an array to store the sorted values
- While the array is not empty:
- Pop a value from the array
- Walk through the sorted array in reverse order
- Check if the current value in the sorted array is greater than the new value
- If so, shift the current value to the right by 1 and continue
- If not, or if you've reached the beginning of the sorted array, insert the new value at the current position and exit the loop
- Return the sorted array
  */

  let arrCopy = [...arr];
  let sorted = [];
  let insertion;

  if (!sorted.length) {
    sorted.push(arrCopy.pop());
  }

  while (arrCopy.length > 0) {
    console.log(sorted.join(","));
    let temp = arrCopy.pop();
    sorted.push(null);

    for (let i = sorted.length - 1; i >= 0; i--) {
      if (sorted[i - 1] < temp || i === 0) {
        insertion = i;
        break;
      } else {
        sorted[i] = sorted[i - 1];
      }
    }
    sorted[insertion] = temp;
  }
  console.log(sorted.join(","));
  return sorted;
}

console.log(insertionSort([2, 4, 6, 8, 1, 3, 5, 7, 9]));

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */
}

/*
  More efficient pseudocode for out-of-place insertion sort:

- Create a copy of the original array
- Create an array to store the sorted values
- For each value in the copied array:
- Walk through the sorted array in reverse order
- Check if the current value in the sorted array is greater than the new value
- If so, shift the current value to the right by 1 and continue
- If not, or if you've reached the beginning of the sorted array, insert the new value at the current position and exit the loop
- Return the sorted array


let arrCopy = [...arr];
let sorted = [];
let counter = arrCopy.length - 1;
let insertion;

while (counter >= 0) {
  console.log(sorted.join(","));
  let temp = arrCopy[counter];
  sorted.push(null);

  for (let i = sorted.length - 1; i >= 0; i--) {
    if (sorted[i - 1] < temp || i === 0) {
      insertion = i;
      break;
    } else {
      sorted[i] = sorted[i - 1];
    }
  }
  sorted[insertion] = temp;
  counter--;
}

return sorted;
}
*/

module.exports = [insertionSort, insertionSortInPlace];
