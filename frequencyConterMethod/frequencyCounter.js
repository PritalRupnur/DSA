//check if all the elements in array 1 have therir squares in array 2
//brute force method

// let arr1 = [2, 3, 4, 5]
// let arr2 = [4, 9, 16, 25]
// let count = 1

// for(let i=0; i<arr1.length; i++){

//     if (visited[i]==true)
//     continue;

//     for (j=i; j<arr2.length; j++){

//         if(arr2[j]==arr1[i]*arr1[i]){

//             visited[i]==true;

//             count++

//         }

           
        
//     }console.log(arr1[i]+ " " + count)

// }

//______________________________________________________________________________________________________________________

//frequencyCounting method



var arr1=[1,2,3] 
var arr2=[1,4,9,9]
function iasquare(array1,array2){
let map1={}
let map2={}
for(item1 of array1){
    map1[item1]=(map1[item1]||0)+1
}
for(item2 of array2){
    map2[item2]=(map2[item2]||0)+1
    console.log(map2)
}
for(let key in map1){
    // console.log(key)
    if(!map2[key*key]){
        return false
    }
    if(map1[key]!==map2[key*key])
    {
        return false;
    }
}
return true
}
let res=iasquare([1,2,3],[1,4,9])
console.log(res)

//_______________________________________________________________________________________

//to check if a string is anagram of another

let str1 = "prital"
let str2 = "latpri"

let obj1 = {};
let obj2 = {};
for (n1 of str1){
    obj1[n1]==(obj1[n1]||0)+1
}

for (n2 of str2){
    obj2[n2]==(obj2[n2]||0)+1
}

console.log(obj1)

for(let key in obj1){
    // console.log(key)
    if(!obj2[key]){
        return false
    }
    if(obj1[key]!==obj2[key])
    {
        return false;
    }
}

// //_______________________________________________________________________________
// //to check is a string is anagram:brute force method

// let str1 = "prital";
// let str2 = "latpra";


// if(str1.length!=str2.length)return false
// for(let i=0; i<str1.length; i++)
// {

   
    
   
//   for(let j=0; j<str2.length; j++){

  

//     if (str1[i]!==str2[j]){


// return false

//     }
//   }
//   return true


// }



//[1,3,2,6,5,4,8]