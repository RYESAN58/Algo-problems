


// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

let arr = [1,2,3,4,5,6]
let x = 0
for (let i = arr.length; i > -1; i--){
  if (!arr[i-1]){
    arr[i] = x
  }else{
  arr[i] = arr[i-1]
  }
  }
console.log(arr)



// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

let arr2 = [1,2,3,4,5,6]
let x2 = arr2[0]
for (let i = 1; i< arr2.length ; i++){
  arr2[i-1] = arr2[i]
  }
arr2.pop()
console.log(x2)