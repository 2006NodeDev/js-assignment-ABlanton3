/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
  return !(someNum & 1);
};

console.log(isEven(10));
console.log(isEven(11));
console.log(isEven(144));
console.log(isEven(2.5));


