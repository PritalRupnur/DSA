

// let i=0;
// let j=a-1;
// var finalDiff = a;
// let diff;
// let min = Math.min(...arr)

// while(i<j){

//     if(arr[i]===min){

        
//       if(arr[i]===arr[j]) { diff=j-i;
//             if(diff<finalDiff){
//                 finalDiff=diff
                
//             }i++}

           
//     }   
//     if(arr[i]>arr[j]){

//         i++
//     }

// if(arr[i]<arr[j]){
//         j--
//     }

//   if(arr[i]!==arr[j]&&finalDiff == a){
//         finalDiff = -1
//     }


// }console.log(finalDiff)

////next method
let arr = [5,1,2,3,4,1,2,1]
let min = Math.min(...arr)
let prev = 0
let diff1 = arr.length
let count = 1;
let vari = 0
let finalDiff;

for(i=0; i<arr.length; i++){

    if(arr[i]==min){
      vari =i;
      prev =i
      break;
    }
    
} 

for(let i=vari+1; i<arr.length; i++){

    if(arr[i]==min){
       count++
       if(diff1>(i-prev))
        diff1 = i-prev
        prev = i;
    }
    
} 

if (count==1){

    finalDiff = -1
}
else{
    finalDiff  =diff1
}

console.log(finalDiff)

