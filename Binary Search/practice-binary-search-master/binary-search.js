function linearSearch(arr, target) {
  return arr.indexOf(target);
}

// console.log(linearSearch([2, 4, 6, 8], 6));
// console.log(linearSearch([2, 4, 6, 8], 10));

function binarySearch(arr, target) {
  // Set integers pointing to the high and low range of possible indices
  let low = 0;
  let high = arr.length - 1;
  // While high and low indices do not overlap...
  while (high >= low) {
    // Find the midpoint between high and low indices
    let midpoint = Math.floor((high - low) / 2) + low;
    // Compare the target value to the midpoint value
    let midpointNum = arr[midpoint];
    // If the target equals the midpoint...
    // Return the midpoint index
    if (target === midpointNum) return midpoint;

    // If the target is higher than the midpoint...
    // Move the low pointer to midpoint + 1
    if (target > midpointNum) low = midpoint + 1;

    // If the target is less than the midpoint...
    // Move the high pointer to midpoint - 1
    if (target < midpointNum) high = midpoint - 1;
  }
  // Return -1 if the loop exits with overlapping pointers
  return -1;
}

/* function testBinarySearch(target) {
  arr = [];

  for (let i = 0; i < 1000000; i++) {
    arr.push(i);
  }

  return binarySearch(arr, target);
}

//console.log(testBinarySearch(100));
console.log(testBinarySearch(1000000)); */

module.exports = [linearSearch, binarySearch];
