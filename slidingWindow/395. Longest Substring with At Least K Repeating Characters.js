var longestSubstring = function(s, k) {
    let size = 0;
    let obj = {};
    let len = 0;
    let end = 0
    for(let i=0;i<s.length;i++){
        obj[s[i]] = (obj[s[i]]||0)+1
        size++
      
        if(size>=k){
            
          while(obj[s[end]]>=k){

               len = Math.max(len,size)
               end++
           }
        }
    }
    return len
};
console.log(longestSubstring("abababc",3))

// var longestSubstring = function(s,k){

//     let obj = {}
//     let obj1={}
//     let sum = 0;
//     for(n of s){

//         obj[n] = (obj[n]||0)+1
//     }

//     for(let i=0; i<s.length;i++){
        
//         if(obj1[s[i]]===1) continue;
       
//         if(obj[s[i]]>=k){

//             sum = sum+obj[s[i]]
//         }
//         (obj1[s[i]]=1) 

//     }return sum
// }
// console.log(longestSubstring("ababacb",3))

var longestSubstring = function(s, k) {
    let maxUnique = new Set(s).size;
    // we'll try substrings consisting of one distinct character to those consisting of maximum distinct characters
    let max = 0;
    for (let curUnique = 1; curUnique <= maxUnique; curUnique++) {
        let start = 0, end = 0, atLeastK = 0, unique = 0, m = new Map();
        while (end < s.length) {    
            m.set(s[end], m.get(s[end]) + 1 || 1);
            if (m.get(s[end]) == 1) unique++;
            if (m.get(s[end]) == k) atLeastK++;
            
            while (unique > curUnique) { // move left pointer so that the number of unique characters do not exceed the upper bound
                m.set(s[start], m.get(s[start]) - 1);
                if (m.get(s[start]) == k-1) atLeastK--;
                if (m.get(s[start]) == 0) unique--;
                start++;
            }
            if (unique == curUnique && unique == atLeastK) {
                max = Math.max(max, end - start + 1);
            } 
            end++;
        }
    }
    return max;
    // We are only considering lowercase alphaabets so maxUnique can be at most 26.
    // Therefore, Time complexity: O(26) * O(n) = O(n)
    // Space Complexity: O(26) = O(1)
};