/*
Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

Examples
getAbsSum([2, -1, 4, 8, 10]) ➞ 25

getAbsSum([-3, -4, -10, -2, -3]) ➞ 22

getAbsSum([2, 4, 6, 8, 10]) ➞ 30

getAbsSum([-1]) ➞ 1
*/
//SOLUTION

function getAbsSum(arr){
    return arr.reduce((count, num) => count + Math.abs(num), 0)
  }