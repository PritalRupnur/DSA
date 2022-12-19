//brute force method
//pairs whose sum is zero

let arr1 = [-5,-3,-2,1,5,7]
let temp=[]
for(let i=0; i<arr1.length; i++){

    for(let j=i+1; j<arr1.length; j++){

        if (arr[i]+arr[j]==0)

        {

            temp.push(arr1[i],arr1[j])
        }

       

    }console.log(temp)
}

//T.C = O(N^2)

//_________________________________________________________________________________
//Multiiple pointer method

let arr2 = [-5,-3,-2,1,5,7]
let temp2 =[]
let i=0;
let j=arr2.length-1

while(i<j){

if(arr2[i]+arr[j]===0){
temp2.push(arr2[i],arr2[j])
i++
}

else if(arr2[i]+arr[j]>0)
{
    j--
}
else if(arr2[i]+arr[j]<0)
{
    i++
}

}console.log(temp2)

//pair of numbers with closest sum to a particular element

let array = []
