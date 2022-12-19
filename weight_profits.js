let n = 3
let wght = [10, 20, 30]
 let p = [60, 100, 120]
let sw = 50



    let ans =0;
    let l=sw;
    let sum = 0;
    let max = 0
    for(let i=0; i<n; i++){
        if(wght[i]<=l){
            sum+=p[i], l=l-wght[i]
            for(let j=i+1; j<=n;j++){
                if(wght[j]<=l){
                    sum+=p[j], l=l-wght[j]
                }
            }if(sum>max){

                max=sum
            }
            sum=0, l=sw
        }
    }
    console.log(max) 
   
   



