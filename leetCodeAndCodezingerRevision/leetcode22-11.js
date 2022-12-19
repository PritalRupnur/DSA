//1.2114. Maximum Number of Words Found in Sentences
var maxWords = function(str){

    let len=0
    for(let i=0; i<str.length; i++){
        let eleLen = str[i].split(' ').length
        if(eleLen>len){
            len = eleLen
        }
    }return len
}
console.log(maxWords(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))
// //2.1672. Richest Customer Wealth
// You are given an m x n integer grid accounts where accounts[i][j]
//  is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. 
//  Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in 
// all their bank accounts. The richest customer is the customer that has the maximum wealth.
var richestCoustmer = function(arr){

    let maxSum = 0;
    for(let i=0;i<arr.length;i++){ 
        let sum=0
        if(typeof arr[i]=="number"){
            sum+=arr[i];
        }else if(arr[i] instanceof Array){
            sum+=richestCoustmer(arr[i]);
        
        if(sum>maxSum)
        {
            maxSum = sum
        }}
      }return maxSum
    }
    

console.log(richestCoustmer([[1,2,3],[3,2,1]]))
//3.88. Merge Sorted Array
var merge = function(nums1,m,nums2,n){

    let j=m
    for (let i=0;i<m+n;i++){
           
            if(nums1[i]==0){
                nums1[i]=nums2[j]
                
            }j--
    }
}

//4.66. Plus One
// You are given a large integer represented as an integer array digits, 
// where each digits[i] is the ith digit of the integer. 
// The digits are ordered from most significant to least significant in left-to-right order. 
// The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

var plusOne = function(n){

    for(let i=n.length-1; i>=0;i--){
        n[i]++
        if(n[i]>9){
            n[i]=0
        }
        else return digit
    }n.unshift(1)
    return digit
}
//5.
//6.
//7.
//8.
//9.
//10.