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
function distance(str, t){
    let distance = [];
    for(let i=0; i<str.length; i++){
        if(str[i]=== t){
            distance.push(0)
        }
        else{
            let dist = Math.abs(str.indexOf(t) - i)
            distance.push(dist)
        }
    }
    return distance
}

console.log(distance("Yashar", 'r'))


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

 console.log(fibo(11))


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
   
    console.log(mergeSortedArrays(arr11, arr22))

let arr11 = [1,12,4,4,5,6,7,8,9,0]
let arr22 =[5,6,9,4,3,22,11,5,66,78,65]


console.log(arr11.concat(arr22))




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
