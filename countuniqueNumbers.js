let b = [12, 3, 67, 3, 445]

let temp = [];
let obj = {};
let count = 0;

for (let i=0; i<b.length; i++){
    
    let obj2 =  {}
    for(let j=0; j<b.length; j++){
        
        
        if (obj[b[i]]==undefined && obj2[b[j]]==undefined){
            temp.push([b[i],b[j]])
            obj2[b[j]] = 1
            count++
        }
   
        
      
    }
   obj[b[i]]=1
    
   
}
console.log(count) 