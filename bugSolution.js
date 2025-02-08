function foo(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  } else if (a === b) {
    return true;
  } else {
    return false; 
  }
}

console.log(foo(NaN, NaN)); // Output: true
console.log(foo(1, 1)); //Output: true
console.log(foo(1, 2)); //Output: false