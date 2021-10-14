// Task 1
const arr1 =[1,2,3];
arr1.push(4,5,6);

console.log(arr1);

// Task 2
const arr2 = [1,2,3];

arr2.unshift(4,5,6);

console.log(arr2);

// Task 3
const arr3 = [1,2,3,4,5];

arr3.splice(3,0,"a","b","c");

console.log(arr3);

// Task 4

const num = 3751;

let result = parseInt(num.toString().split('').sort((a,b)=> a-b).join(''));

console.log(result);