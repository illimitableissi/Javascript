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