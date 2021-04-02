// Given a year, return the century it is in.

function century(year) {
    // Finish this :)
    return Math.ceil(year/100)
  }

//   You are given an array (which will have a length of at least 3, 
// but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier" 

function findOutlier(integers){
//your code here
return integers.filter(i => i%2 !== 0).length !== 1 ? integers.find(i => i%2 === 0) : integers.find(i => i%2 !== 0)
}

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

function high(x){
    const alphabet = [0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let newArray = x.split(' ')
    let sumString = newArray.map(i => i.split('').map(j => alphabet.indexOf(j)).reduce((a,b) => a+b))
    let index = sumString.findIndex(z => z === Math.max(...sumString))
    return newArray[index]
}

// write the function isAnagram
function isAnagram (test, original) {
   
    function splitter (str) {
      return str.toLowerCase().split('').sort().join('')
    }
    return splitter(test) === splitter(original)
  };

  function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    return dna.split('').map(i => i.replace('T', 'U')).join('')
  }

//   A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base
//   Your code must return true or false depending upon whether the given number is a Narcissistic number

  function narcissistic(value) {
    // Code me to return true or false
    let numArray = String(value).split('').map(Number)
    let sum = numArray.map(i => Math.pow(i, numArray.length)).reduce((a,b) => a+b)
    return sum === value
  }

  function typeValidation(variable, type) {
    // Your code should be here ;) 
    return typeof(variable) === type
  }


  function disemvowel(str) {
    return str.split('').filter(i => i.match(/[^aAeEiIoOuU]/g)).join('')
  }

//   Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

  function squares(x, n) {
    if (n <= 0){
      return []
    } else {
    let array = [x]
    let power = x
    while (array.length < n) {
      power = Math.pow(power, 2)
      array.push(power)
    }
    return array
     }
  }

  const number = (busStops) => {
    // Good Luck!
    return busStops.map(i => i.reduce((a,b) => a - b)).reduce((c,d) => c + d)
  }

//   Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n) between 0 and n. Count the numbers of digits d

  function nbDig(n, d) {
    // your code
  let array = [...Array(n+1).keys()].map(i => i*i)
  let stringArray = array.join('').split('')
  
  return stringArray.filter(k => k == d).length

}

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]


function countSmileys(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
  }

//   Digital root is the recursive sum of all the digits in a number.

//   Given n, take the sum of the digits of n. 
//   If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
//   The input will be a non-negative integer.

function digital_root(n) {
  
    function splitAdd (num) {
      return String(num).split('').map(Number).reduce((a,b) => a+b)
    }
    
    if (splitAdd(n) <= 10){
      return splitAdd(n)
    }
    
    while(splitAdd(n) >= 10) {
        n = splitAdd(n)
        if (splitAdd(n) < 10){
          return splitAdd(n)
           break;
        }
      }
   }

//    You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.


   function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
// If there are multiple elements with the same value, remove the one with a lower index. I
// f you get an empty array/list, return an empty array/list.

  function removeSmallest(numbers) {
    let min = Math.min(...numbers)
    numbers.splice(numbers.indexOf(min), 1, 0)
    return numbers.filter(i => i!== 0)
  }

//   Given: an array containing hashes of names

//   Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

  function list(names){
    //your code here
    let array = []
    for (var i = 0; i < names.length; i++){
      array.push(names[i].name)
    }
    if (array.length <= 1){
         return String(array)
      } else if (array.length == 2) {
       return array.join(' & ')
      } else {
        let popped = array.pop();
        return `${array.join(', ')} & ${popped}`
      }
  }
//   Given a string, turn each character into its ASCII character code and join them together to create a number

  function calc(x){
    let string = x.split('').map(i => x.indexOf(i)).map(j => x.charCodeAt(j)).join('')
    let totalOne = string.split('').map(Number).reduce((a,b) => a+b)
    let totalTwo = string.split('').map(k => k.replace('7','1')).map(Number).reduce((c,d) => c +d)
    
    return totalOne - totalTwo
   }

   function printerError(s) {
    // your code
    let regex = /[^abcdefghijklm]/g
    let match = s.match(regex)
    return !match ? `0/${s.length}` : `${match.length}/${s.length}`
}

function validBraces(braces){
    let re = /\(\)|\{\}|\[\]/;
    return re.test(braces) ? validBraces(braces.replace(re, '')) : '' === braces;
  }

//Removes duplicate values in an array

  var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

const stray = nums => nums.reduce((a, b) => a ^ b);

//Rock, paper, scissors
const rps = (p1, p2) => {
    return p1 == p2 ? 'Draw!' :
           p1 == 'scissors' && p2 == 'paper' ? 'Player 1 won!' : 
           p1 == 'paper' && p2 == 'rock' ? 'Player 1 won!' :  
           p1 == 'rock' && p2 == 'scissors' ? 'Player 1 won!' : 'Player 2 won!'
};

// Given a list of integers, determine whether the sum of its elements is odd or even.

function oddOrEven(array) {
    //enter code here
   if (!array || array.length == 0) {
     return 'even'
   }
   return array.reduce((a,b) => a+b) %2 === 0 ? 'even' : 'odd'
  }

//   Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

  function doubleChar(str) {
    // Your code here
    return str.split('').map(i => i.repeat(2)).join('')
  }

//   check if an integer number is divisible by each out of two arguments.
  function isDivideBy(number, a, b) {
    // good luck
    return number % a == 0 && number % b == 0
  }

  var countSheep = function (num){
    //your code here
    let array = [...Array(num+1).keys()]
    array.shift()
    return array.map(i => `${i} sheep...`).join('')
  }

//   Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. 
// For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
  function deleteNth(arr, x) {
    var res = []
    var map = {}
    
    for (var i = 0; i < arr.length; i++) {
      var n = arr[i]
      var c = map[n] = (map[n] || 0) + 1
      if (c <= x) res.push(n)
    }
    
    return res
  }