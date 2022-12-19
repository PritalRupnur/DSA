var lengthOfLongestSubstring = function (s) {
    // Initialise a set to store the longest string in
    let uniqueString = 0;
    let currentString = [];

    // Loop through the provided string
    for (let i = 0; i < s.length; i++) {
        // Initialise a set to store the string created from the current point
        
        const currIndex = currentString.indexOf(s[i])

        // Loop through the letters from the current point
       
            // Check if the current letter exists in the current Set
            if (currIndex!==-1) {
                // Move on from the current letter without adding it (as it already exists in the set)
                currentString.splice(0, currIndex + 1);
            } 
                // Character not found, add it to the set
                currentString.push(s[i]);
            
        

        // Update the longest string length (if this one was bigger)
        uniqueString = Math.max(
            uniqueString,
            currentString.length
        );
    }

    return uniqueString;
};

console.log(lengthOfLongestSubstring("aab"))

var lonSubString=function(s){

    let obj1={}
    let start = 0;
    for(let i=0;i<s.length;i++){

        while(obj1[s[i]]==1){

            obj1[s[start]]=0
            start++


        }obj1[s[i]]==1
        ans = Math.max(ans,end-start+1)
    }return ans

}