var factorial = function(n) {
    if (n==1) return 1


   return n*factorial(n-1)

};



function oneToN(n) {
  if (n == 0) {
    console.log(n);
    return n;
  } else {
    oneToN(--n);
    console.log(n + 1);
  }
}
oneToN(5);

function print(n){
if(n==0) {
  console.log(n) 
  return n}
  else{

     print(n-1)
     console.log(n )
  } 
}
console.log(print(10))

class Solution {
    printNos(N) {
        let res = []
        function loop(N) {

            if (N == 0) return res

            loop(N - 1)
            res.push(N)
            return (res)

        }
        return loop(N)
    }
}
console.log((printNos(10)))



var factorial1 = function(n){
  let result = 1
  for(let i=n;i>0;i--){

    result = result*n
  }
  return result

};
//sum of first n natural numbers
var sum = function(n){
  if (n==0) return 0

  return n+sum(n-1)

};
//product of array using recursion


//fibonacci series

var fibonaci = function(n){//1, 1, 2, 3, 5, 8, 13, 21, 34, 55,

  if(n<2) return 1
  return fibonaci(5-1)+fibonaci(5-2)//
}
//multiplication of all the elements in the array

var multiplication = function(arr){

if (arr.length==0) return 1
 return arr[0]*multiplication(arr.splice(1))

}
console.log([1,4,3,7,6,9,8])

//reverse a string

function reverse(str){

  if(str.length==1)return str
  return reverse(str.splice(1))+str[0]
}

//chek wetheer string is palindrome

function palindrome(str){

if(str.lrngth<=1)return true

if (str[0]==str.slice(-1)) return  palindrome(str.slice(1,-1))


}

//program to flatten an array
function flattenArr(){

  let flat = []
  for(var i=0;i<arr.length;i++){

    if(arr.isArray(arr[i])==false){
      flat.push(arr[i])
    }
    else flat =  flat.concat(flattenArr(arr[i]))
  }return flat;
}

//write a program to capitalise all the first letters of all the string in an array of strings
//['hi', 'hello', 'hola']
let result = []
function capitaliseElement(arr){

 
  if(arr.length==0) return result
  let s = arr[0][0].toUpperCase()+arr[0].slice(1)
  result.push(s)
  return (capitaliseElement(arr.splice(1)));
}
console.log(capitaliseElement(['abd','pre','lnkg']))
//revese each word in string

function reverse(s){

  let arr  = s.split(',')
  
}

//reverse a linkedlist 

class LinkedListNode {
  constructor(value){
      this.value = value;
      this.next = null;

      
  }
}

let headNode = new LinkedListNode(10);
headNode.next = new LinkedListNode(20);
headNode.next.next = new LinkedListNode(30);

console.log(headNode);


const reverseFunc = (headNode) => {
  
  if(headNode == null || headNode.next == null)
      return headNode;
  
  let newHead = reverseFunc(headNode.next);
  headNode.next.next = headNode;
  headNode.next = null;
  
  return newHead;
}

console.log("");

console.log("Reversed LinkedList");
console.log(reverseFunc(headNode));

var superPow = function(a, b) {
  if (b.length === 0) {
      return 1;
  }
  let last = b.pop();
  let part1 = myPow(a, last);//8
  let part2 = myPow(superPow(a, b), 10);
  return (part1 * part2) % 1337;
};

function myPow(a, k) {
  a %= 1337//2;
  let res = 1;
  for(let i = 0; i < k; i++) {
      res = (res * a) % 1337;//2*1%1337=2*2*2=8
  }
  return res;
};

console.log(superPow( 1,[4,3,3,8,5,2]));


var reverseString = function(s) {
if(s.length <=1) return s
  return reverseString(s.slice(1))+s[0]
   


};
console.log(reverseString( "hello"));

var reverseArray = function(right,left) {
  if(right<left){
    [s[left],s[right]]=[s[right],s[left]]
    reverseArray(left+1,right-1)
  }reverseArray(0,s.length-1)
  
  
  };

  var countPrimes = function(n) {
   
    let count=0;
    let i=2;
    while(i<=n/2){
      
        if((n/i)!=0){
            count++
            break;
        }
        else{i++}i++;
        n--
    }return count
};
console.log(countPrimes(10));

function primeNumberRecursion(n, j) {
  if (n <= 1)
      return 0
  if (n == 2)
      return 1
  if (j >= n)
      return 1



  return (n % j != 0) ? primeNumberRecursion(n, j + 1) : 0


}

console.log(primeNumberRecursion(907, 2));
//reverse a string
function solution(a) {
  if(a==null || a.length==0){return 1}
    if(a[0]!=a[a.length-1]){ return 0 }
    return solution(a.slice(1,-1))
}

var t1 = performance.now();
console.log(solution("1234567654321"));
var t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

class Solution {

  reverseWords(s){
      
    let reverseword=(w)=>{
    let s=""
    for(let i=w.length-1;i>=0;i--){
    s +=w[i]
    }
     return s
}

       let w=""
    let ans=""
    for(let i=0;i<s.length;i++){
            if(s[i]=="."){
                w=reverseword(w)
                ans +=w
                ans+="."
                w=""
            }else{
                w+=s[i]
            }
}
    if(w!=""){
        w=reverseword(w)
        ans+=w
    }
    return ans
  }
}


function flattenArr(arr) {

  let ansArr = []
  for (let i = 0; i < arr.length; i++) {

      if (Array.isArray(arr[i]) == false) ansArr.push(arr[i])

      

       else ansArr = ansArr.concat(flattenArr(arr[i]))
  }

  return ansArr

}
// arr = []
console.log(flattenArr(arr))