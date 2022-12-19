//find the largest sum 3 consicutive elements in an array



//let arr= [23,34,6,2,43,89,9,3,2,7]
let arr1 = [1, 2, 3, 4]
let arr2 = [5, 6, 7]


let k=3

//optimixed approach


let arr = [1,2,3,4,5,6]

let currSum = 0;
let maxSum  =0;

for(let i=0; i<k; i++){

    currSum += arr[i]
}
maxSum = currSum

for(let i=k;i<arr.length; i++){

    currSum += arr[i]
    currSum -=arr[i-k]
    maxSum = Math.max(maxSum, currSum)
}
return maxSum


