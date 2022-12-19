//33. Search in Rotated Sorted Array
var search = function(arr, target) {
    let n = arr.length;
      let low = 0;
      let high = n-1;
      let mid;
      while(low<=high){
         
          mid = Math.floor(low+(high-low)/2);
          
          if(arr[mid] == target)
              return mid;
          
          else if(arr[low]<=arr[mid])
              {
                  if(target < arr[mid] && target>= arr[low])
                  {
                      high = mid -1;
                      
                  }
                  else
                  {
                      low = mid+1;
                  }
              }
              
          else if(arr[mid]<=arr[high])
              {
                  if(target > arr[mid] && target <= arr[high])
                  {
                      low = mid+1
                      
                  }
                  else
                  {
                      high= mid-1;
                  }
              }    
      }return -1
      
  };

  //