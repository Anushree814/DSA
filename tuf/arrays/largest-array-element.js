// Problem Statement: Given an array, we have to find the largest element in the array.

// Examples
// Example 1:
// Input:
//  arr[] = {2,5,1,3,0};
// Output:
//  5
// Explanation:
//  5 is the largest element in the array.

// Example2:
// Input:
//  arr[] = {8,10,5,7,9};
// Output:
//  10
// Explanation:
// 10 is the largest element in the array.

/*Brute Force approach 1*/
//TC = O(n^2)
function findLargestBf1(arr) {
  let largest = -9999;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] > arr[j] && arr[i] > largest) {
        largest = arr[i];
      } else {
        if (arr[j] > largest) {
          largest = arr[j];
        }
      }
    }
  }
  return largest;
}

//console.log(findLargestBf([8, 10, 5, 7, 9]));

/*Brute Force approach 2*/
//TC= O(n log(n))
function findLargestBf2(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}
//console.log(findLargestBf2([8, 10, 5, 7, 9]));

/* Brute Force approach 3 */
function findLargestElementBf3(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

const arr1 = [2, 5, 1, 3, 0];
let max = findLargestElementBf3(arr1);
//console.log("The largest element in the array is: " + max);

const arr2 = [8, 10, 5, 7, 9];
max = findLargestElementBf3(arr2);
//console.log("The largest element in the array is: " + max);

/* Recursive approach */
function findLargestRecursive(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return Math.max(
      findLargestRecursive(arr.slice(0, arr.length - 1)),
      arr[arr.length - 1]
    );
  }
}

//console.log(findLargestRecursive([1, -60, 45, 24, 18]));

/* 2-pointer Approach */
//TC = O(n)
function findMax(arr){
    let start=0, end=arr.length-1, max=-99999;
    while(start!==end){
        if(arr[start]<arr[end]){
            max=arr[end]
            start++;
        }else{
            max=arr[start]
            end--;
        }
    }
    return max;
}
console.log(findMax([1, -60, 45, 124, 18]));