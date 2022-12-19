function solution (s, k){

let totalSubStr = 0;
for(let i=0; i<s.length; i++){

    let totalUniqueChars = 0;
    let charsObj = {}
    for(j=i; j<s.length; j++){

        if(!charsObj[s[j]]){
            totalUniqueChars++
        }
        if(totalUniqueChars==k){

            totalSubStr++
        }
        charsObj[s[j]]=1
    }
}return totalSubStr

}

console.log(solution("pqpqs",2))


// var subarraysWithKDistinct = function(A, K) {
//     return (atMostK(A, K) - atMostK(A, K - 1));
// };

// function atMostK(A, K) {
//       let count = {};
//     let maxArr = 0, windowStart = 0;

//     for (let windowEnd = 0; windowEnd < A.length; windowEnd++) {
//         const rightInt = A[windowEnd];

//         if (!(rightInt in count)) {
//             count[rightInt] = 0;
//         }

//         if (count[rightInt] === 0) {
//             K -= 1;
//         }
//         count[rightInt] += 1;

//         while (K < 0) {
//             const leftInt = A[windowStart];
//             count[leftInt] -= 1;
//             if (count[leftInt] === 0) {
//                 K += 1;
//             }
//             windowStart += 1;        }
//         maxArr += windowEnd - windowStart + 1;
//     }

//     return maxArr;
// }