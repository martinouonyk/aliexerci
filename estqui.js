function hasLongName(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= 5) {
      return true;
    }
  }
  return false;
}

// Example usage:
const names = ['John', 'Jane', 'Michael', 'Alexandra'];
console.log(hasLongName(names)); // Output: true
