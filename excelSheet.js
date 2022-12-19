// var nextPermutation = function(nums) {


//  // let num = nums.join('')
//   let permutation = 0
//   let newStr, temp
//  for(let i=nums.length-1;i>=0;i--){

//      var oldStr = [...nums]
//      for(let j=i-1;j>=0;j--){
        
//         temp = oldStr[i]
//          oldStr[i]=oldStr[j]
//         oldStr[j] = temp
//       //  console.log(oldStr)
//       //  console.log(nums)
//         if(oldStr.join('')>nums.join('')){

//          permutation = oldStr;
//          return permutation

//         }
       

//      }
//  }return oldStr.sort(function(a, b){return a-b})
  
// };
        
// console.log(nextPermutation([3,1,2]));
        
// var countGoodSubstrings = function(s) {
//   let good = 0;
  
// // Sliding window of fixed size 3, starting from beginning of string
//   for(let left = 0; left < s.length - 2; left++) {
//   // Put characters from window into a Set
//       const window = [s[left], s[left + 1], s[left + 2]];
//       const chars = new Set(window);

//   // If each character is distinct, then the Set should be size 3,
//   // which would make it a good substring
//       if(chars.size === 3) good++;
//   }
//   return good;
// };console.log(countGoodSubstrings("aababcabc"));

var longestNiceSubstring = function (s) {

  if (s.length < 2) return "";

  const obj = {};

  for (const i of s) obj[i] = i;

  for (let i = 0; i < s.length; i++) {
    const element = s[i];

    if (obj[element.toUpperCase()] && obj[element.toLowerCase()]) continue;

    const prev = longestNiceSubstring(s.substring(0, i));
    const next = longestNiceSubstring(s.substring(i + 1));

    return prev.length >= next.length ? prev : next;
  }

  return s;
};console.log(longestNiceSubstring("YazaAay"));

var reverseWords = function(s) {
    
 
  const arr = s.split('');
  let i = 0;
  
  for (let j = 1; j <= arr.length; j++) {
      if (arr[j] === ' ' || j === arr.length) {
          let k = j - 1;
          while (i < k) {
              const temp = arr[i];
              arr[i] = arr[k];
              arr[k] = temp;
              i++;
              k--;
          }
          i = j + 1;
      }
  }
  
  return arr.join('');
};
console.log(reverseWords("Let's take LeetCode contest"));