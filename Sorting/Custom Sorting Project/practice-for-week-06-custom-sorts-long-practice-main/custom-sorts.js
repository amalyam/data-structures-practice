function ageSort(users) {
  return users.sort((a, b) => a.age - b.age);
}

function oddEvenSort(arr) {
  return arr.sort((a, b) => {
    if (a % 2 === 0 && b % 2 === 1) return 1;
    if (a % 2 === 1 && b % 2 === 0) return -1;
    return a - b;
  });
}

function validAnagrams(s, t) {
  if (s.length !== t.length) return false;

  return [...s].sort().join("") === [...t].sort().join("");
}

function reverseBaseSort(arr) {
  // Your code here
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
