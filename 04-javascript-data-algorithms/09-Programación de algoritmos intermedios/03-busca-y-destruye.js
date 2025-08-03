function destroyer(arr) {
  const valsToRemove = Array.from(arguments).slice(1);
  return arr.filter(function (val) {
    return !valsToRemove.includes(val);
  });
}

//Code Explanation
// Declare a variable named valsToRemove and set it equal to a new Array object from() the arguments passed into the function. Use the slice() method on the array of arguments, starting from the second index, 1.

// Return the filtered array, using includes() in the callback function to check if val is not in valsToRemove; returning true to keep the value in the original array or false to remove it.
