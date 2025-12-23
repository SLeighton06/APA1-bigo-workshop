function hasDuplicate(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) { // j starts at i+1 to avoid i !== j checks
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }

  return false;
}

console.log(hasDuplicate([1, 4, 6, 7, 9]));