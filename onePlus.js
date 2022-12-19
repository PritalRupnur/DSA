// var plusOne = function(digits) {
    

//     for(let i=digits.length-1;i>=0;i--){
//      digits[i]++;//109=>1,0,0
//      if(digits[i]>9){
//          digits[i]=0;
//      }
//      else{
//          return digits;
//      }
//  }
//  digits.unshift(1);
//  return digits;
// }
// console.log( plusOne([1,0,9]))

var twoSum = function(numbers, target) {
    
    var obj = {}
      
    for(let i=0; i<numbers.length;i++){

        obj[target-numbers[i]]=i+1
    }

   for (let i=0; i<numbers.length;i++){
         
         if(obj[numbers[i]]!==undefined){

             return ([i+1,obj[numbers[i]]])
         }
         

   }

};
console.log( twoSum([2,3,4],6))

var twoSum = function(numbers, target) {
    let length = numbers.length;
    let cache = {};
    for (let i = 0; i < length; i++) {
        let cur = numbers[i];
        let seek = target - cur;
        if (cache[seek]) {
            return [cache[seek], i + 1];
        } else {
            cache[cur] = i + 1;
        };
    };
};
