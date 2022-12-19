let arr = [5, 2, 7, 2, 9, 6, 2, 11, 4]

for(let i=0; i<arr.length; i++){
   let flag = false
    for(let j=0; j<arr.length-1; j++){

        if(arr[j]>arr[j+1]){

            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
          flag = true
        }
    }if(flag ==false) break;
} console.log(arr)

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
      let min = i
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[min] > arr[j]) {
              min = j
          }
      }
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
  } return arr
} console.log(selectionSort([4, 2, 9, 1, 6, 8]))