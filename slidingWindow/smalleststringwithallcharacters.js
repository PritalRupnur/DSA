function solution(a) {
    //Write your solution here
      let mySet1 = new Set();
      for(let i=0;i<a.length;i++){
          
          mySet1.add(a[i])
      }
      let distCount = mySet1.size
      let start = 0;
    
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
                
              }
          }
      }return minLen}
 console.log(solution('aabbccdfeg'))