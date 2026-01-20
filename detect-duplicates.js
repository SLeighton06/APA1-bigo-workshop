function hasDuplicate(arr) {
  const values = new Set();

  for (const value of arr) {
    if (values.has(value)) {
      return true;
    }
    values.add(value);
  }

  return false;
}

console.log(hasDuplicate([7, 1, 4, 6, 7, 9]));