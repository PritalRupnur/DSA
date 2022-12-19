
let arr = [5,2,7,2,9,6,2,11,4]
function insertionSort(arr){
    for(let i=1; i<arr.length; i++){

        let key = arr[i]
        let j=i-1
        
        while(j>=0&& arr[j]>key){
        
            arr[j+1]=arr[j]
            j--
        }arr[j+1]=key
        
        }
        return arr

}
console.log(insertionSort([5,2,7,2,9,6,2,11,4]))


//smallest window that contain all charaters of a string

function solution(a) {
    //Write your solution here
      let mySet1 = new Set();
      for(let i=0;i<a.length;i++){
          
          mySet1.add(a[i])
      }
      let distCount = mySet1.size
      let start = 0;
      let startIndex = 0
      let minLen = Number.MAX_VALUE;
      let counter = 0;
      let visited = new Array(256).fill(0)
      for(let j=0;j<a.length;j++){
          
          visited[a.charCodeAt(j)]++
          if(visited[a.charCodeAt(j)]==1){
              counter++
          }if(counter==distCount){
              
              while(visited[a.charCodeAt(start)]>1){
                  
                  if(visited[a.charCodeAt(start)]>1){
                      visited[a.charCodeAt(start)]--
                      start++
                  }
              }
              let cur_len = j-start+1
              if(cur_len<minLen){
                  minLen = cur_len
                  start = startIndex
              }
          }
      }return minLen
  }
  
  
  function main() {
      var a = readLine();
  
      var res = solution(a);
      console.log(res);
  }