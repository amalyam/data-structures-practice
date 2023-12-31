// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }
  // Divide the array in half
  let arrHalf1 = arr.slice(0, Math.floor(arr.length / 2));
  let arrHalf2 = arr.slice(Math.floor(arr.length / 2));
  // Recursively sort the left half
  arrHalf1 = mergeSort(arrHalf1);

  // Recursively sort the right half
  arrHalf2 = mergeSort(arrHalf2);

  // Merge the halves together and return
  return merge(arrHalf1, arrHalf2);
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
  let mergedArr = [];
  // Point to the first value of each array
  let pointerA = 0;
  let pointerB = 0;

  // While there are still values in each array...
  while (pointerA < arrA.length && pointerB < arrB.length) {
    // Compare the first values of each array
    if (arrA[pointerA] < arrB[pointerB]) {
      // Add the smaller value to the return array
      // Move the pointer to the next value in that array
      mergedArr.push(arrA[pointerA]);
      pointerA++;
    } else {
      mergedArr.push(arrB[pointerB]);
      pointerB++;
    }
  }
  // Merge any remaining elements from the longer array
  if (pointerA < arrA.length) {
    mergedArr.push(arrA.slice(pointerA));
  }
  if (pointerB < arrB.length) {
    mergedArr.push(arrB.slice(pointerB));
  }
  // Return the return array
  return mergedArr.flat();
}

module.exports = [merge, mergeSort];
