// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
    var count = 0;
    num = num.toString();
    while (num.length > 1) {
      count++;
      num = num.split('').map(Number).reduce((a, b) => a*b).toString();
      }
    return count;
 }

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

 function order(words){
    return words.split(' ').sort(function(a,b){
       return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
   }

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    var newArray =  numbers.split(' ').map(Number)
    return [Math.max(...newArray), Math.min(...newArray)].join(' ')
  
  }


//   ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//   If the function is passed a valid PIN string, return true, else return false.

  function validatePIN (pin) {
    //return true or false
    return /^(\d{4}|\d{6})$/.test(pin)
  }

  function FizzBuzz () {
      for (var i = 1; i <= 101; i++){
          if (i%15 === 0) {
              console.log("FizzBUzz")
          } else if ( i%5 === 0) {
              console.log("Fizz")
          } else if (i%3 === 0) {
              console.log("Buzz")
          } else {
              console.log(i)
          }
      }
  }


//   Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
    //Code here
    return str.split(' ').map(i => i.match(/[A-z]/i) ? i.slice(1) + i.charAt(0) + "ay" : i).join(' ')
  }

  function reverseString(str) {
    return str.split("").reverse().join("");
}

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed 
// (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.

function spinWords(str){
    //TODO Have fun :)
    return str.split(' ').map(i => i.length >= 5 ? i.split("").reverse().join('') : i).join(' ')
    
  }
  