// Problem Statement: Given an integer N, return the number of digits in N.

//Brute force
function countDigitsBf(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
// console.log(countDigitsBf(10789996)); //Op = 8

//Optimal approach
// Time Complexity: O(1)as simple arithmetic operations in constant time are computed on integers.

// Space Complexity : O(1)as only a constant amount of additional memory for the count variable regardless of size of the input number.
function countDigits(n) {
     return Math.floor(Math.log10(n)) + 1; //Space complexity is 0 here 
}
console.log(countDigits(1078999));