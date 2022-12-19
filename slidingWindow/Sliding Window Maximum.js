let  nums = [1,3,-1,-3,5,3,6,7];
let k = 3
let temp = [];
let max =0;


for(let i=0; i<k; i++){

    if(nums[i]<nums[i+1]){

        max = nums[i+1]
        
    }
}temp.push(max)

let arr1 = nums.splice(0,k)
//console.log(arr1)
arr2 =arr1.concat(nums)
//console.log(arr1)
//console.log(arr2)

for(let i=1; i<nums.length; i++){

     arr1[0]=arr2[i]
     arr1[k-1]=arr2[i+k-1]
     
    
     for(let j=0; j<arr1.length; j++){



        if(arr1[j]<arr1[j+1]){

            max = arr1[j+1]
        }

       
          

     } temp.push(max)

}
console.log(temp)