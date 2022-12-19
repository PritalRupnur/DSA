//logarithmic time
let arr = [1,2,3,4,5]
let numberOfLoops = 0
for(let i=1; i<arr.length; i*=2){

    numberOfLoops++
}
console.log(numberOfLoops)

//T.C = O(log2N)