var intersect = function(nums1, nums2) {
    
    let temp = [];
   
    
    for(let i=0; i<nums1.length; i++){

        for(let j=0; j<nums2.length; j++){

            
           

            if(nums1[i]==nums2[j])
            {
               
                temp.push(nums1[i])
                nums2.splice(j,1)
                break;
               
            }
        }
    } return temp
};
console.log(intersect([1,2,2,1], [2,2]))

//
var longestCommonPrefix = function(strs) {
    let cur = strs[0]
    let temp = ""
    for(let i = 1; i < strs.length; i++){
        for(let j = 0; j < cur.length; j++){
            if(cur[j] == strs[i][j]){
                temp += cur[j]
            } else {
                break
            }
        }
        cur = temp
        temp = ""
    }
    return cur
};