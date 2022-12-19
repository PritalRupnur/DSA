

var subarraysWithKDistinct = function(nums, k) {

let freq = {}

let uniqueCh = 0
let arraysCount = 0
for (let i=0; i<nums.length; i++){

    if(!freq[nums[i]]==0||freq[nums[i]]==undefined){
        freq[nums[i]]=1
        uniqueCh++

    }
    if(freq[nums[i]]==1){

        if(uniqueCh==k){

            arraysCount++
            freq[nums[i]]==0
        }
    }
}return arraysCount




}

console.log( subarraysWithKDistinct([1,2,1,2,3], 2))

var minSubArrayLen = function(s, nums) {
    let result = Number.MAX_SAFE_INTEGER
    let sum = 0, left = 0
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
        while(sum >= s){
            result = Math.min(result, i - left + 1)
            sum -= nums[left++]
        }
    }
    return result === Number.MAX_SAFE_INTEGER ? 0 : result 
};