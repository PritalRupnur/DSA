let operations = ["--X","X++","X++"]
let x = 0;
for(let i=0; i<operations.length; i++){

    if(operations[i]=="X++"||operations[i]=="++X")
    x= x+1

    if(operations[i]=="X--"||operations[i]=="--X")
    x = x-1
}
console.log(x) 