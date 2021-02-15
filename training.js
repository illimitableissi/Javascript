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