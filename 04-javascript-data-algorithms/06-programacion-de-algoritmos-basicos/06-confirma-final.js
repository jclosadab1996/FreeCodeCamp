function confirmEnding(str, target) {
  // return str.endsWith(target);

  return str.slice(-target.length) === target;

  // Code Explanation
  // If a negative number is provided as the first parameter to slice() , the offset is taken backwards from the end of the string.
  // This is useful for finding if a string ends with another string.
}

console.log(confirmEnding("Bastian", "n"));
