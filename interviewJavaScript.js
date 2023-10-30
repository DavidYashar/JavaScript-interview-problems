//JavaScript interview questions
//return maximum number from an array
function maxi(arr){
    return Math.max(...arr)
  }
  
  console.log(maxi([3,6,7,8,9]))

  
//reverse the character of a string
  function reversed(str){
    return str.split('').reverse().join('')
  }

  console.log(reversed('Yashar'))



// distance of a character to others in a string(Turing assessment test)
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


// listing Gold Medal, Silver Medal, and Bronze medal(Turing assessment test)
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



//Finding the largest element in a nested array

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

  //Fibonacci to the given number

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
// a function that debounces the execution of another function when it is repeatedly called in time period



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
 

