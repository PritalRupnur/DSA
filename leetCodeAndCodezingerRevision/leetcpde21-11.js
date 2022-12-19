//1.342. Power of Four
var powerOfFour = function(n){

    if(n==1)return true
    if(n%4==0){
        console.log("hi")
        return powerOfFour(n/4)
        
    }console.log("hi1")
    return false
}
console.log(powerOfFour(128))


//1.without using recursion

var powerOf4 = function(n){

    if(n==1)return true
    while(n!==1){

        if(n%4==0)
        n=n/4
        
    } if(n%4!==0) return false
}
console.log(powerOf4(256))
//2.Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


var twoSum = function(arr,target){

    let obj = {}

    for(let i=0;i<arr.length;i++){

        obj[target-arr[i]]=i
    }

    for(let j=0; j<arr.length;j++){

        if(obj[arr[j]]!==undefined){

            return([obj[arr[j]],j])
        }
    }

}
console.log(twoSum([2,7,11,15],9))

//4.Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.

var concat = function(nums){

    let i=0
    let ans = []
    while(i<nums.length*2){

        if(i<nums.length){

            ans[i]=nums[i]
        }
        if(i>=nums.length&&i<nums.length*2){

            ans[i]=nums[i-nums.length]
        }i++
        
    }return ans
}
console.log(concat([2,7,11,15]))

//5.1480. Running Sum of 1d Array
//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
//Return the running sum of nums.

//9.35. Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index
// if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

var insertPosititon = function(nums,target){

    let start = 0;
    let end = nums.length-1;
    while(start<end){

        let mid = Math.floor((start+end)/2)

        if(target>mid){
            start = mid+1
        }
        else if(target<mid){
            end = mid-1
        }
        else{
            return mid
        }
    } return end+1



}