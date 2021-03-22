// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
    // do magic
    let sorted = arr.sort((a,b) => b-a)
    
    if(sorted[0] == sorted[1]) {
      return sorted[sorted.length-1]
    } else {
      return sorted[0]
    } 
  }

  function noSpace(x){
    return String(x.split('').map(i => i.trim()).join(''))
}

function digital_root(n) {
  
  function splitAdd (num) {
    return num
  }
  // ...
  splitAdd(n)
}

function repeatStr (n, s) {
  return s.repeat(n);
}

function find_average(array) {
  // your code here
  return array.reduce((a,b) => a + b)/array.length;
}

//return the total number of smiling faces in the array
function countSmileys(arr) {

  let valid = [':)', ':D', ';-D', ':~)', ';~D'];
  let smilies = 0;
  
  for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < valid.length; j++){
      if (arr[i] === valid[j]) {
      smilies++
      }
    }
  }
  return smilies
}

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending){
  // TODO: complete
  let sub = str.substring(str.length - ending.length)
  return sub === ending ? true : false

  // return str.endsWith(ending);
}

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), 
// from smallest to largest. If the number is prime return the string '(integer) is prime'

function divisors(integer) {
  
  let array = [...Array(integer).keys()].filter(i => integer % i === 0).filter(j => j !=1)
  return array.length > 0 ? array : `${integer} is prime`
  
};

// Return the average of the given array rounded down to its nearest integer.
function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
  return Math.floor(marks.reduce((a,b) => a + b)/marks.length)
          
 }

//  Convert number to reversed array of digits
 function digitize(n) {
  //code here
  let array = String(n).split('').reverse()
  return array.map(i => Number(i))
}

//convert to celsius

function weatherInfo (temp) {
  var c = convertToCelsius(temp)
  if (c <= 0)
    return (c + " is freezing temperature")
  else
    return (c + " is above freezing temperature")
}

function convertToCelsius (temperature) {
  var celsius = (temperature - 32) * (5/9)
  return celsius
}

function bonusTime(salary, bonus) {
  // your code here
    return bonus ? `£${salary*10}` : `£${salary}`
  }

//Convert number to binary
  function addBinary(a,b) {
    return (a + b).toString(2)
  }

  // Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

  // If the input array is empty or null, return an empty array.

  function countPositivesSumNegatives(input) {
    
    if (!input || input.length === 0) {
      return []
    } else {
  
    let brackets = []
    let positives = input.filter(i => i > 0)
    let negatives = input.filter(j => j < 0).reduce((a,b) => a+b)
    
     brackets.push(positives.length);
     brackets.push(negatives);
  
    return brackets
    }
}