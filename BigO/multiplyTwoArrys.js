let arr1 = [1,2,3]
let arr2 = [4,5]
let total = []
for (let i=0; i<arr1.length; i++){

for(let j=0; j<arr2.length; j++){

    total.push(arr1[i]*arr2[j])


}

}console.log(total)

//T.C = O(n*m)