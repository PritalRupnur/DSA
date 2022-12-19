let nums = [1,1,2]

let obj = {}

for (let n of nums){

    obj[n]=(obj[n]||0)+1
}

let keys = Object.keys(obj)
console.log(keys)