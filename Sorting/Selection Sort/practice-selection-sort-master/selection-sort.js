function selectionSort(arr) {
  // Copy the original array
  let arrCopy = [...arr];

  // Create an array to store the sorted values
  let sorted = [];

  // While the array is not empty...
  while (arrCopy.length > 0) {
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let minVal;
    if (sorted[0]) {
      minVal = sorted[0];
    } else {
      minVal = arrCopy[0];
    }
    arrCopy.forEach((number) => {
      if (number < minVal) {
        minVal = number;
      }
    });
    // Save and remove the value at the min index
    arrCopy = arrCopy.filter((number) => number !== minVal);

    // Add the min value to the end of the sorted array
    sorted.push(minVal);
  }

  return sorted;
}

console.log(selectionSort([3, 2, 0, 4, 1]));

function selectionSortInPlace(arr) {
  // Set a pointer at zero dividing the array into sorted and unsorted halves

  // Repeat while the unsorted half is not empty:

  // Do not move this console.log
  console.log(arr.join(","));

  // Find the index of the minimum value in the unsorted half

  // Save the min value

  // Shift every unsorted value to the left of the min value to the right by 1

  // Put the min value at the divider

  // Increment the divider and repeat
}

module.exports = [selectionSort, selectionSortInPlace];
