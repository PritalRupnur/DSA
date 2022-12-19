// var twoSum = function(nums, target) {
   
//     const obj = {}
//     for(let i=0;i<nums.length; i++){
//         obj[target-nums[i]]=i
//     }console.log(obj)
//     let keys = Object.keys(obj)
//     const len =nums.length
//     for(let j=0;j<len; j++){
        
//         if(obj[nums[j]]>0&&nums[j]!=keys[j]){
 
//             return [j,obj[nums[j]]]
//         }
        
//     }
//  return []
    
//      }
// console.log(twoSum([1,3,4,2],6)) 

const getDrome = (left,right,s)=>{
    while(left>=0&&right<s.length){
        if(s[left]!==s[right]) break;
        left--
        right++
    }return [left+1,right]
}
var longestPalindrome = function(s) {

let max = [0,1]


for(let i=0;i<s.length;i++){
    let even = getDrome(i-1,i,s)
    let odd = getDrome(i-1,i+1,s);
    let curMax = odd[1]-odd[0]>even[1]-even[0]?odd:even
    max = max[1]-max[0]>curMax[1]-curMax[0]?max:curMax
}
return s.slice(max[0],max[1])

};                           //0123456
console.log(longestPalindrome('abcdcba')) 