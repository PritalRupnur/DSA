function ChVowel(ch){

    if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){
        return true
    }return false
}

var maxVowels = function(s, k) {

    let count = 0
    let maxCount=0

    for(let i=0; i<k;i++){

        if(ChVowel(s[i])){

            count++
        }
    }

    maxCount = Math.max(maxCount,count)

    for(let j=k; j<s.length;j++){

        if(ChVowel(s[j])){

            count++
        }
        if(ChVowel(s[j-k])){

            count--
        }
        maxCount = Math.max(maxCount,count)
    }
    return maxCount
   
    
};

console.log(maxVowels("abciiidef", 3))