var maxArea = function(height) {

    let maxStore = 0;
   
     let store =0
    for (let i=0;i<height.length;i++){
        for(let j=i+1; j<height.length;j++){
             
             min=Math.min(height[i],height[j])
             dis = j-i
              store = dis*min
             if(store>maxStore){
                 maxStore = store
             }
        }
    }return store
};console.log(maxArea([1,8,6,2,5,4,8,3,7]))