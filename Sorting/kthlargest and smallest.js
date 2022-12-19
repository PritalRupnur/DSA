var conqure = (arr1, arr2) => {
    let res = []
    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i])
            i++
        } else {
            res.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        res.push(arr1[i])
        i++

    }
    while (j < arr2.length) {
        res.push(arr2[j])
        j++

    }
    return res
}
function divide(nums) {

    let n = nums.length
    if (n == 1) return nums

    let mid = Math.floor(0 + (n - 0) / 2)

    let l = divide(nums.slice(0, mid))
    let r = divide(nums.slice(mid))

    return conqure(l, r)

}
var findKthLargest = function (nums, k) {

    let result = divide(nums)
    console.log(result)
    // for(let i=result.length-1;i>result.length-k;i--){
    //     if(result[i]==result[i-1]){
    //       k++
    //     }
    // } return result[result.length-k]
    for(let i=0; i<k; i++){

        if(result[i]==result[i+1]){
            k++
        }
    }
    return result[k-1]//2

};
console.log(findKthLargest([1,2,3,4,-4,-4,0,5,67],2))//1,2,3,5,5,5,6,7//1,2,3,4,5,6,7