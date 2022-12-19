
var isPalindrome = function(x) {
for(let i=0; i<(x.length/2); i++){

       

    if(x[i]!==x[x.length-1-i]){

        return false
       
    }


}
return true}

console.log(isPalindrome("121"))

