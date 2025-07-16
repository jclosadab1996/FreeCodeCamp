function getIndexToIns(arr, num) {
  return arr.filter((val) => num > val).length;
}

getIndexToIns([40, 60], 50);
// Code Explanation
// Count the number of entries that are smaller than the new value num
// The new value would be inserted after these values
// Return the number of entries that are smaller than the new value
