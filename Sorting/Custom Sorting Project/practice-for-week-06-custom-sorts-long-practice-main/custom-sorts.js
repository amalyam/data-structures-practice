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

  const sortedS = [...s].sort();
  const sortedT = [...t].sort();

  for (let i = 0; i < sortedS.length; i++) {
    if (sortedS[i] !== sortedT[i]) return false;
  }

  return true;
}

function reverseBaseSort(arr) {
  return arr.sort((a, b) => {
    if (a.toString().length > b.toString().length) return -1;
    if (a.toString().length < b.toString().length) return 1;
    return a - b;
  });
}

function frequencySort(arr) {
  let numberTable = {};

  for (let i = 0; i < arr.length; i++) {
    if (!numberTable[arr[i]]) {
      numberTable[arr[i]] = 1;
    } else {
      numberTable[arr[i]]++;
    }
  }

  return arr.sort((a, b) => {
    if (numberTable[a] === numberTable[b]) return b - a;
    return numberTable[a] - numberTable[b];
  });
}

console.log([1, 1, 2, 2, 2, 3]);
console.log([2, 3, 1, 3, 2]);
console.log([-1, 1, -6, 4, 5, -6, 1, 4, 1]);

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
