
//    function minJumps(arr,n){
        
//         let jump = 0
//         let curr = 0 
//         let res = 0
         
//          for(let i=0; i<n-1; i++){
             
//               res=Math.max(res,arr[i]+i);
              
//               if(curr==i){
//                 curr=res;
//                 jump++;
//              }
//         }
        
//         if(curr>=(n-1)){
//           return jump;
          
//         } else {
//            return -1;
           
//         }
//     }

// console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9],11))

// function duplicates(arr, n) {
 
//     // Increment array elements by 1
//     for (let i = 0; i < n; i++) {
//         arr[i] += 1;
//     }
 
//     // result vector
//     let res = new Array();
 
//     // count variable for count of
//     // largest element
//     let count = 0;
 
//     for (let i = 0; i < n; i++) {
 
//         // Calculate index value
//         let index = Math.abs(arr[i]) > n ? Math.abs(arr[i]) / (n + 1)
//             : Math.abs(arr[i]);
 
//         // Check if index equals largest element value
//         if (index == n) {
//             count++;
//             continue;
//         }
 
//         // Get element value at index
//         let val = arr[index];
 
//         // Check if element value is negative, positive
//         // or greater than n
//         if (val < 0) {
//             res.push(index - 1);
//             arr[index] = Math.abs(arr[index]) * (n + 1);
//         }
//         else if (val > n)
//             continue;
//         else
//             arr[index] = -arr[index];
//     }
 
//     // If largest element occurs more than once
//     if (count > 1)
//         res.push(n - 1);
 
//     if (res.length == 0)
//         res.push(-1);
//     else
//         res.sort(function (a, b) { return a - b });
 
//     return res;
// }
 
// // Driver Code
// let numRay = [0, 4, 3, 2, 7, 8, 2, 3, 1];
// let n = numRay.length;
 
// let ans = duplicates(numRay, n);
// for (let i = 0; i < ans.length; i++)
//     console.log(ans[i]);

// function duplicates(a, n)
// {
//  let res=[]
// for (let i = 0; i < a.length; i++) {
//     let x=Math.abs(a[i])
//     let index=x-1
//     if(a[index]<0){
//         res.push(x)
//     }else{
//         a[index]*=-1
//     }
// }
// return res
// }                     //0 1 2 3 4 5 6 7 8
// console.log(duplicates([1,4,2,5,3,4,6,5,1],9))//

// function merge(m , n) {
//     var i = 0, j = 0, k = n - 1;
//     while (i <= k && j < m) {
//         if (arr1[i] < arr2[j])
//             i++;
//         else {
//             var temp = arr2[j];
//             arr2[j] = arr1[k];
//             arr1[k] = temp;
//             j++;
//             k--;
//         }
//     }
//     arr1.sort((a,b)=>a-b);
//     arr2.sort((a,b)=>a-b);
//     return arr1,arr2
// }

// var merge = function(nums1,nums2, n,m) {
//     let first=n-1,second=m-1;
//       for(i=m+n-1;i>=0;i--)
//           {  
//              if(second<0){
//                  break;
//              }
//               if(nums1[first]>nums2[second]){
//                   nums1[i]=nums1[first];
//                   first--;
//               }else{
//                   nums1[i]=nums2[second];
//                   second--;
//               }
//           }
//       return nums1;
//   };
// let nums1 = [1,3,5,7]; 
// let nums2 = [0,2,6,8,9];
// console.log(merge(nums1,nums2,4,5))

// merge(arr1, arr2, n, m)
// {
//     let i =0;
//     let j = 0;
//     let arr = []
//     let k = 0;
//   while(i<n && j<m){
//       if(arr2[j]<arr1[i]){
//           arr[k++] = arr2[j++];
//       }else{
//           arr[k++] = arr1[i++];
//       }
//   }
   
//      while(i<n){
//       arr[k++] = arr1[i++]
//   }
   
//   while(j<m){
//       arr[k++] = arr2[j++]
//   }
//   for(let i =0; i<n; i++){
//       arr1[i] = arr[i]
//   }
//   for(let i =0; i<m; i++){
//       arr2[i] = arr[n+i]
//   }
//  return arr1
 
// }

function maxSubStr(str, n)
{
 
    // To store the count of 0s and 1s
    var count0 = 0, count1 = 0;
 
    // To store the count of maximum
    // substrings str can be divided into
    var cnt = 0;
    for (var i = 0; i < n; i++) {
        if (str[i] == '0') {
            count0++;
        }
        else {
            count1++;
        }
        if (count0 == count1) {
            cnt++;
        }
    }
 
    // It is not possible to
    // split the string
    if (count0 != count1) {
        return -1;
    }
 
    return cnt;
}
console.log(maxSubStr("0111100010",10))