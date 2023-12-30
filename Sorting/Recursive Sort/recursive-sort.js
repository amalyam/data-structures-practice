function recursiveSort(arr) {
  // If the array is length 1 or less, return
  if (arr.length <= 1) return arr;

  // find the largest value in the array
  const maxVal = arr.reduce((largest, current) => {
    if (current > largest) {
      largest = current;
    }
    return largest;
  });

  // find its index
  const maxValIndex = arr.indexOf(maxVal);

  // remove it from the array
  arr.splice(maxValIndex, 1);

  // sort the remaining elements
  arr = recursiveSort(arr);

  //  Put the largest value back at the end of the array
  arr.push(maxVal);

  return arr;
}
console.log(recursiveSort([3, 2, 0, 4, 1]));
