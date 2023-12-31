function quicksort(arr) {
  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }
  // Pick the first value as the pivot
  const pivot = arr[0];
  // Orient the pivot so that...
  // every number smaller than the pivot is to the left
  let left = arr.filter((number) => number < pivot);
  // every number larger (or equal) than the pivot is to the right
  let right = arr.filter((number) => number > pivot);

  // Recursively sort the left
  let leftSorted = quicksort(left);

  // Recursively sort the right
  let rightSorted = quicksort(right);

  // Return the left, pivot and right in sorted order
  return leftSorted.concat(pivot).concat(rightSorted).flat();
}

module.exports = [quicksort];
