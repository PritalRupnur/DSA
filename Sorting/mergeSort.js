// function merge(arr, l, m, r) {


//     let n1 = l - m + 1
//     let n2 = r - m
//     let L = new Array(n1)
//     let R = new Array(n2)

//     for (let i = 0; i < n1; i++) {

//         L[i] = arr[l - i]
//     }
//     for (let j = 0; j < n2; j++) {

//         R[j] = arr[l + m + j]
//     }

//     let i = 0;
//     let j = 0;
//     let k = l
//     while (i < n1 && j < n2) {

//         if (L[i] < R[j]) {
//             arr[k] = L[i]
//             i++

//         }

//         else if (R[j] < L[i]) {

//             arr[k] = R[j]
//             j++
//         }
//         k++

//         while (i < n1) {
//             arr[k] = L[i]
//             i++
//             k++
//         }

//         while (j < n2) {
//             arr[k] = R[j]
//             j++
//             k++
//         }

//     }


// }

// function mergeSort(arr, l, m, r) {

//     if (l >= r) {
//         return
//     }

//      m = l + (r - l) / 2
//     mergeSort(arr, l, m )
//     mergeSort(arr, m + 1, r)
//     merge(arr, l, m, r)


// }
// console.log(mergeSort([1,5,3,7,2]))

// JavaScript program for Merge Sort
 
// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
// function merge(arr, l, m, r)
// {
//     var n1 = m - l + 1;
//     var n2 = r - m;
 
//     // Create temp arrays
//     var L = new Array(n1);
//     var R = new Array(n2);
 
//     // Copy data to temp arrays L[] and R[]
//     for (var i = 0; i < n1; i++)
//         L[i] = arr[l + i];
//     for (var j = 0; j < n2; j++)
//         R[j] = arr[m + 1 + j];
 
//     // Merge the temp arrays back into arr[l..r]
 
//     // Initial index of first subarray
//     var i = 0;
 
//     // Initial index of second subarray
//     var j = 0;
 
//     // Initial index of merged subarray
//     var k = l;
 
//     while (i < n1 && j < n2) {
//         if (L[i] <= R[j]) {
//             arr[k] = L[i];
//             i++;
//         }
//         else {
//             arr[k] = R[j];
//             j++;
//         }
//         k++;
//     }
 
//     // Copy the remaining elements of
//     // L[], if there are any
//     while (i < n1) {
//         arr[k] = L[i];
//         i++;
//         k++;
//     }
 
//     // Copy the remaining elements of
//     // R[], if there are any
//     while (j < n2) {
//         arr[k] = R[j];
//         j++;
//         k++;
//     } return arr
// }
 
// // l is for left index and r is
// // right index of the sub-array
// // of arr to be sorted */
// function mergeSort(arr,l, r){
//     if(l>=r){
//         return;//returns recursively
//     }
//     var m =l+ parseInt((r-l)/2);
//     mergeSort(arr,l,m);
//     mergeSort(arr,m+1,r);
//      return merge(arr,l,m,r);
// }

// console.log(mergeSort([1,5,3,7,2]))

function conqure(left, right) {
    let i = 0
    let j = 0
    let resArr = []

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            resArr.push(left[i])
            i++
        }
        else {
            resArr.push(right[j])
            j++
        }
    }

    while (i < left.length) {
        resArr.push(left[i])
        i++
    }
    while (j < right.length) {
        resArr.push(right[j])
        j++
    }
    return resArr
}

function divide(arr) {
    let n = arr.length

    if (n <= 1) {
        return arr
    }
    let mid = Math.floor(0 + (n - 0) / 2)

    let left = divide(arr.slice(0, mid))
    let right = divide(arr.slice(mid))

    return conqure(left, right)

}

 



let arr = [2, 5, 8, 3, 1, 3, 6, 89,]//1,2,3,3,5,6,8,89
