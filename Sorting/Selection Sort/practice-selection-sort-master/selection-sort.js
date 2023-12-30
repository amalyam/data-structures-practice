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
    let minVal = arrCopy[0];

    arrCopy.forEach((number) => {
      if (number < minVal) {
        minVal = number;
      }
    });
    // Save and remove the value at the min index
    let mindIndex = arrCopy.indexOf(minVal);
    arrCopy.splice(mindIndex, 1);

    // Add the min value to the end of the sorted array
    sorted.push(minVal);
  }

  return sorted;
}

console.log(selectionSort([3, 2, 0, 4, 1]));

function selectionSortInPlace(arr) {
  // Set a pointer at zero dividing the array into sorted and unsorted halves
  let divider = 0;

  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Save the min value
    let minVal = arr.slice(divider).reduce((smallest, current, index) => {
      if (current < smallest) {
        smallest = current;
      }
      return smallest;
    });

    // Find the index of the minimum value in the unsorted half
    let minValIndex = arr.indexOf(minVal, divider);

    // Shift every unsorted value to the left of the min value to the right by 1
    if (minValIndex) {
      for (let i = minValIndex; i > divider; i--) {
        arr[i] = arr[i - 1];
      }
      // Put the min value at the divider
      arr[divider] = minVal;
    }

    // Increment the divider and repeat
    divider++;
  }
  return arr;
}

//console.log(selectionSortInPlace([3, 2, 0, 4, 1]));

module.exports = [selectionSort, selectionSortInPlace];
