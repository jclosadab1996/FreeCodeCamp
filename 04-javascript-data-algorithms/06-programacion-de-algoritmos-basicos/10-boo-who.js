function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);
// Code Explanation
// Uses the operator typeof to check if the variable is a boolean. If it is, it will return true. Otherwise, if it is any other type it will return false.
// Relevant Links
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
