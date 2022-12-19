// var searchRange = function(arr, target) {
//     let n = arr.length;
//    let low = 0;
//    let high = n-1;
//    let mid;
//    let leftOcc = -1;
//    let rightOcc = -1;
//    while(low<=high){

//        mid = Math.floor(low+(high-low)/2);

//        if(arr[mid] == target){
//          leftOcc= mid;
//            high = mid-1;

//        }


//        else if(arr[mid]<target)
//            low = mid+1

//          else high = mid-1  


//            }

//    low = 0
//    high = n-1

//    while(low<=high){

//        mid = Math.floor(low+(high-low)/2);

//          if(arr[mid] == target){
//          rightOcc= mid;
//            low= mid+1;

//        }


//        else if(arr[mid]>target)

//            high = mid-1

//          else  low = mid+1 


//            }return[leftOcc,rightOcc]
// };
// console.log(searchRange( [5,7,7,8,8,10],8))

var maxProduct = function (nums) {

  let prod = 1
  let maxProd = -Infinity
  console.log(maxProd)
  for (let i = 0; i < nums.length; i++) {

    prod = prod * nums[i]
    maxProd = Math.max(prod, maxProd)
    if (prod == 0) {
      prod = 1
    }
  }
  prod = 1
  for (let i = nums.length - 1; i >= 0; i--) {

    prod = prod * nums[i]
    maxProd = Math.max(prod, maxProd)
    if (prod == 0) {
      prod = 1
    }
  } return maxProd

};
console.log(maxProduct([-2]))

function goodKarma() {

  function happiness()
  return "Happiness"

}
console.log(goodKarma())
function goodKarma() {

  function happiness() {
    console.log("Happiness");
  }

  return goodKarma()
}
console.log(happiness('Infinity'))

function goodKarma() {
  function happiness() {
    console.log("Happiness");
    happiness()
  }
  return happiness()
}
console.log(goodKarma('Infinity'))
