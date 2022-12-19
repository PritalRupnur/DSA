
let arr = [5,2,7,2,9,6,2,11,4]

function swap(arr,i,j){

    let temp = arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}

function partition(arr, low, high){
    console.log("hello")
    let pivotEle = arr[high]
    let i= low-1

    for(let j=low; j<high;j++){

        if(arr[j]<pivotEle){

            i++
            swap(arr,i,j)
        }
    }swap(arr, i+1,high)
    return i+1
}


 function quickSort(arr, low, high){

    if(low<high){
           
        pivot_index = partition(arr, low, high)
      
        quickSort(arr, low, pivot_index-1)
        quickSort(arr, pivot_index+1, high)
        
  
    }  return arr
}
console.log(quickSort([5, 2, 7, 2, 9, 6, 11, 4], 0, 7))

function solution(a){

    let obj={}
    for(let n of a)
   {
    obj[n] = (obj[n]||0)+1
   }
   for(let i=0; i<a.length;i++){
    a[i] = len - obj[a[i]]
   } return a
}

console.log(solution([1,2,5,2,2,5,4]))

function solution(str) {
    //Write your solution here
      let len =Math.floor(str.length/2)
      
      let obj={}
      for(let ele of str){
          obj[ele]=(obj[ele]||0)+1
      }
      let same=obj[str[0]]
      for(let key in obj){
           if(key==str[len]){
               continue;
           }
          if(obj[key]!=same){
              return 'No'
          }
             same=obj[key] 
      }
      return 'Yes'
  }
  
  
  function main() {
      var a = readLine()
  
      var res = solution(a);
      console.log(res);
  }
console.log(solution("abcdbac"))

var quickSelect = (nums,s,e) => {
    pivotEle = nums[e];
    let i = s-1
    for(let j=0; j<e;j++){
        if(nums[j]<pivotEle){
            i++
            [nums[i], nums[j]]=[nums[j], nums[i]]
        }
    }[nums[i+1], nums[e]]=[nums[e], nums[i+1]]
    return i+1
 }
 
 var findKthLargest = function(nums, k) {
     r = nums.length-k;
     let s=0;
     let e=nums.length-1;
     while(s<=e){
         let pivot = quickSelect(nums,s,e);
 
         if(r==pivot){
             return nums[pivot];
         }else if(r<pivot){
             e = pivot-1;
         }else{
             s = pivot+1;
         }
     }console.log(nums)
     
     return nums[low]
     
 };
 console.log(findKthLargest([3,2,1,5,6,4],2))
 