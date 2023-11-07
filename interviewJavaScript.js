//JavaScript inerview questions

function maxi(arr){
    return Math.max(...arr)
  }
  
  console.log(maxi([3,6,7,8,9]))

  

  function reversed(str){
    return str.split('').reverse().join('')
  }

  console.log(reversed('Yashar'))



// distance of a character to others in a string


function calculateDistances(str, char) {
    const distances = [];
    let lastPosition = -1;

    // Scan from left to right.
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            lastPosition = i;
        }
        if (lastPosition === -1) {
            distances[i] = Infinity;
        } else {
            distances[i] = i - lastPosition;
        }
    }

    // Scan from right to left.
    lastPosition = -1;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === char) {
            lastPosition = i;
        }
        if (lastPosition !== -1) {
            distances[i] = Math.min(distances[i], lastPosition - i);
        }
    }

    return distances;
}

console.log(calculateDistances('diragornov', 'r'));




function dist(str, t){
    let distance = []
    let lastpos = -1

    for(let i =0; i<str.length; i++){
        if(str[i] ===t){
            lastpos =i
        }
        if(lastpos ===-1){
            distance[i]= Infinity
        
        }else{
            distance[i] = i - lastpos
        }
    }

    lastpos = -1

    for(let i = str.length -1; i>=0; i--){
        if(str[i] ===t){
            lastpos =i
        }
        if(lastpos !== -1){
            distance[i] = Math.min(distance[i], lastpos -i)
        }
    }
    return distance
}


console.log(dist('drvenicgtroventriog', 'r'))
// listing Gold Medal, Silver Medal, and Boronze medal

function sorted(arr){
    let final =[]
   
    arr = arr.sort()
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 1){
            final.push('Gold Medal')
        }
        else if(arr[i] ==2){
            final.push('Silver Medal')
        }
       else if(arr[i] ==3){
            final.push('Boronze Medal')
        }
        else{
            
            final.push(arr[i])
           

        }
        
    }
    
    return final
}
  
console.log(sorted([4,2,3,5,1,7,6]))

  




//returning an array of only even numbers

function even(arr){
    let eve = []

    for(let i =0; i<arr.length; i++){
        if(arr[i]% 2==0){
            eve.push(arr[i])
        }
        
    }
    return eve
}
  console.log(even([1,2,4,5,6,7,8,9,5,4,3,2,22,33,44,55]))
  

  function even2(arr){
    return arr.filter(item => item %2 ==0)
  }
  
  console.log(even2([1,2,4,5,6,7,8,9,5,4,3,2,22,33,44,55]))





  // factorial or factor of a given number 

  function factorial(n){
    if(n ==0 || n ==1){
        return 1
    }else{
        return n * factorial(n-1)
    }
  }

  console.log(factorial(5))



  //check if the number is Prime

function isPrime(n){
    if(n <=1) return false;

    for(let i=2; i<= Math.sqrt(n); i++){
        if(n %i==0) return false
    }
    return true
}

console.log(isPrime(19))





// finding the largest element in nested array

function largestNest(nested){
  if(!Array.isArray(nested)){
    return null
  }
  let largest = null

  for(let i=0; i<nested.length; i++){
    if(Array.isArray(nested[i])){
        for(let j =0; j<nested[i].length; j++){
            if(largest === null || nested[i][j] > largest){
                largest = nested[i][j]
            }
        }
    }
  }
  return largest
}

console.log(largestNest([
    [11, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]))




  //fibonacci to the given number

 function fibo(n){
    if(n <=0){
        return []
    }
    if(n ===1){
        return [0]
    }
    else{
        let seq = [0,1]
        while(seq.length < n){
            let next = seq[seq.length -1] + seq[seq.length -2];
            seq.push(next)
        }
        return seq
    }
 }

 console.log(fibo(10))







 // capitalize the first word of each string

function capital(str){
    return str.replace(/\b\w/g, l=> l.toUpperCase())
}

console.log(capital("another changing to capital the first letter"))



  
//Advance javascript interview questions
// a function that debounce the execution of another function when its repeatedly called in timeperiod



function debounce(func, delay){
    let timeoutID;

    return function(...args){
        clearTimeout(timeoutID);

        timeoutID = setTimeout(()=> {
            func.apply(this, args)
        }, delay)
    }
}

function test(){
    console.log('this is test')
}

const debounced = debounce(test, 1500)
debounced()
 



// a function that takes an array of objects and a key, 
// and returns a new array
//  sorted based on the values of that key in ascending order. 

function keySort(array, key){
    return array.sort((a,b)=> a[key]- b[key])
}

const keyArr = [
  {name: 'David', age: 34},
  {name: 'David', age: 31},
  {name: 'David', age: 30},
  {name: 'David', age: 33},
]

console.log(keySort(keyArr, 'age'))




// Implement a deep clone function
//  in JavaScript that creates a 
//  copy of a nested object or array
//   without any reference to the original. 
function deepClone(obj){

    return JSON.parse(JSON.stringify(obj))
}

let org = {
    name: 'Yashar',
    age: 38
}

let deep = deepClone(org)

deep.age = 50
console.log(deep)



// Write a recursive function to calculate the factorial of a given number. 

function factoral(num){
    if(num ===1){
        return 1
    }else{
        return num * factoral(num -1)
    }
}

console.log(factoral(4))





// Implement a function that takes two sorted arrays and
//  merges them into a single sorted array without using any built-in sorting functions. 


//with built-in
function mergeSorted(arr1, arr2){
    return [...arr1, ...arr2].sort((a,b)=> a-b)
}

let arr1 = [3,5,6,3,2,22]
let arr2 =[44,5,2,8,9,90,33]

console.log(mergeSorted(arr1, arr2))



//without built in 
function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;

    // Merge elements from arr1 and arr2 in sorted order
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1, add them to the merged array
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2, add them to the merged array
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return mergeSorted(merged);
}


//mergeSort algorithm
function mergeSorted(arr){
    if(arr.length <=1){
      return arr
    }

    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    return merge(mergeSorted(left), mergeSorted(right))
}
    function merge(left, right){
        let merge = [], i =0, j =0
        while(i < left.length && j <right.length){
            if(left[i]< right[j]){
                merge.push(left[i])
                i++
            }else{
                merge.push(right[j])
                j++
            }
        }

        return merge.concat(left.slice(i)).concat(right.slice(j))
    }

    let arr11 = [1,12,4,4,5,6,7,8,9,0]
let arr22 =[5,6,9,4,3,22,11,5,66,78,65]
   
    console.log(mergeSortedArrays(arr11, arr22))







// a function that checks if a given string is a palindrome,
//  considering only alphanumeric characters and ignoring case. 

function isPalindrome(s){
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    return s === s.split('').reverse().join('')
}

console.log(isPalindrome("Yashsay"))








// Create a JavaScript class for a linked list with methods
//  to insert a node at the beginning, end, or at a specific
//   position, and to delete a node from a given position. 

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtBeginning(data) {
        this.head = new Node(data, this.head);
    }

    insertAtEnd(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    insertAt(data, index) {
        if (index === 0) {
            this.insertAtBeginning(data);
        } else {
            const node = new Node(data);
            let current = this.head;
            let previous;
            let count = 0;
            while (count < index) {
                previous = current;
                count++;
                current = current.next;
            }
            node.next = current;
            previous.next = node;
        }
    }
}






// Implement a function that flattens a nested array in JavaScript, 
// converting it into a single-level array. 


function flatterArr(arr){
    return arr.flat(Infinity)
}

console.log(flatterArr([[1,3,6],[34,6,7]]))



// Write a function that determines if two strings are anagrams of each other  

function anagram(str1, str2){
  return str1.split('').sort().join('') === str2.split('').sort().join('')
}

console.log(anagram('yashar','rashah'))




// Create a JavaScript function that returns the Fibonacci sequence up to a given number,
//  utilizing memoization for optimized performance.

function fiboMemo(n, memo = {}){
    if(n <=0) return 0;
    if(n ===1) return 1;
    if(n in memo) return memo[n];

    memo[n] = fiboMemo(n - 1, memo) + fiboMemo(n - 2, memo);

    return memo[n]
}

console.log(fiboMemo(10))



// Implement a function to reverse a string
//  without using the built-in reverse() method. 

function rev(str){
    let revers = '';

    for(let i = str.length -1; i >=0; i--){
        revers+=str[i]
    }
    return revers
}

console.log(rev('fibonacci'))







// Given an array of numbers, write a function
//  to find the largest and smallest numbers in the array. 

function minMax(arr){
    let min = Math.min(...arr)
    let max = Math.max(...arr)

    return [min, max]
}

console.log(minMax([3,5,6,8,9,11,4,2]))




// Write a function that takes an array of integers as input
//  and returns a new array with only the unique elements. 

function unique(arr){
 return Array.from(new Set(arr))
}
console.log(unique([4,6,7,8,2,1,2,3,4,5,4,7,8,9,6,5,4,3,2,1,2,3,4,5]))





// Implement a function to find the sum of all the numbers in an array. 

function sum(arr){
    return arr.reduce((a,b)=> a+b,0)
}
console.log(sum([3,2,4,5,6]))



// Given a string, write a function 
// to count the occurrences of each character in the string. 

function occurance(str){
    let count = {};

    for(let char of str){
        if(count[char]){
            count[char]++
        }else{
            count[char]=1
        }
    }
    return count
}

console.log(occurance('Dragonovsky'))


// Implement a function to remove duplicates from an array. 

function duplicate(arr){
    return Array.from(new Set(arr))
}

console.log(duplicate([2,4,5,7,8,9,99,9,8,7,6,6,7,5,4,3,2,4]))



// Write a function that sorts an array of numbers in ascending order. 

function sortNum(arr){
    return arr.sort((a,b)=> b-a)
}

console.log(sortNum([1,2,3,4,5,6,7,8,9]))





// Tricky JavaScript coding questions

// Write a function that reverses the order of words in a
//  sentence without using the built-in reverse() method. 

function reversWord(senten){
    let words = senten.split(" ")
    let revers = ''

    for(let i = words.length -1; i>=0; i--){
        revers+=words[i] + (i>0? " ": '')
    }
    return revers
}

console.log(reversWord("This is new words"))




// Implement a function that checks if a given string is a palindrome 
// (reads the same forwards and backwards) while ignoring whitespace and punctuation.

function palindrom(str){
    let cleaned = str.toLowerCase().replace(/[^\w]/g, '')

    return cleaned === cleaned.split('').reverse().join('')
}

console.log(palindrom("Yashhsay"))



// Write a function that takes an array of integers and returns
//  the largest difference between any two numbers in the array. 

function highest(arr){
    let min = arr[0]
    let high = 0


    for(let i =0; i<arr.length; i++){
        if(arr[i]< min){
            min = arr[i]
        }
        else{
            let dif = arr[i] - min
            if(dif > high){
                high = dif
            }
        }
    }
    return high;
}

console.log(highest([2,4,5,6,7,8,19]))




// Implement a function that removes duplicates from an array,
//  keeping only the unique elements. 

function dup(arr){
    return arr.filter((item, index)=> arr.indexOf(item)===index)
}

console.log(dup([2,3,4,5,6,7,2,9,1,2,3,5]))



// Write a function that generates a random alphanumeric string of a given length. 

function randomGen(length){
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let result = '';
    for(let i =0; i<length; i++){
     result+=chars[Math.floor(Math.random()* chars.length)] 
    }
    return result
}

console.log(randomGen(10))





function toRoman(num){

    const lookup = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};
    let roman = ''
    for(let i in lookup){
        while(num>= lookup[i]){
            roman +=i
            num -=lookup[i]
        }
    }
    return roman
}

console.log(toRoman(41))



// Write a function that removes all falsy values 
// (false, null, 0, “”, undefined, and NaN) from an array.

function removeFalse(arr){
   return arr.filter(Boolean)
}

console.log(removeFalse([NaN, false, 3,5,6, "", undefined]))
