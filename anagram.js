string1 = "hello"
string2 = "ellho"

//check if the string are of equal length
//then check the number of each alphabets of one of the string.
//check if the other string alsocontains the same alphabets in the same amount


function anagram(string1, string2){
if(string1.length!=string2.length){
    return false
}


let temp={}
for (let n1 of string1){
    //console.log(n1)
    temp[n1]=(temp[n1] ||0)+1
   // console.log(temp[n1])
    
}console.log(temp)

for (let n2 of string2){
    console.log(temp[n2])
    if(!temp[n2]){
        return false
    }
    temp[n2]=temp[n2]-1
    
}


return true


}

const result = anagram("hello", "llhoe")
console.log(result)