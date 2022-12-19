var minSubArrayLen = function(k, nums) {
    

    let len = nums.length

    for (const item of array) {
        sum += item;
      }

      if(sum<target) return 0
    
    
    for(let i=0;i<nums.length;i++){
    
           var sum = 0
          var count = 0
              for(let j=i;j<nums.length;j++){
    
                 sum +=nums[j]
                  count++
    
                  if(sum>=k){
                      if(count<len){
    
                          len =count
                         
                      } break;
    
                  }
    
    
    
    }}return count
    
    };

    console.log(minSubArrayLen(11,[1,1,1,1,1,1,1,1]))


    var minSubArrayLen = function(s, nums) {
        let sum = 0;
        let minLength = Infinity;
        let prevIndex = 0;
        
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
    
            while (sum >= s) {
                minLength = Math.min(minLength, i - prevIndex + 1);
                sum -= nums[prevIndex];
                prevIndex++;
            }
        }
        
        
        return minLength === Infinity ? 0 : minLength;
    };