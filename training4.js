//Sum array after removing min and mx values

function sumArray(array) {
  
  if(array == null) {
    return 0
  }

 let newArray = array.sort((a,b) => a - b)
 newArray.pop();
 newArray.shift();
  
 if (!newArray || newArray.length === 0) {
   return 0
 } else {
   return newArray.reduce((c,d) => c + d)
 }
  
}

//square numebrs and add array

function squareSum(numbers){
    return !numbers || numbers.length === 0 ? 0 : numbers.map(i => i*i).reduce((a,b) => a + b)
  }

//   The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

  function count (string) {  
    var count = {};  
    string.split('').forEach(s => count[s] ? count[s]++ : count[s] = 1);

    return count;
  }

//   Given a number n, return the number of positive odd numbers below n
  function oddCount(n){
  
    return [...Array(n).keys()].filter(i => i%2 !==0).length
  }

  //You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

  function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((a,b) => a + b)/classPoints.length < yourPoints ? true : false
  }

//   Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

  function lovefunc(flower1, flower2){
    return flower1%2 == 0 && flower2%2 !== 0 || flower1%2 !==0 && flower2%2 == 0 
  }

//   Return the number (count) of vowels in the given string.

  function getCount(str) {
    const regex = /[aeiou]/g
    
    return str.match(regex) == null ? 0 : str.match(regex).length
  }

  // Create a function that transforms any positive number to a string representing the number in words. The function should work for all numbers between 0 and 999999.


var num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
var tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

function number2words(n){
  if (n < 20) return num[n];
  var digit = n%10;
  if (n < 100) return tens[Math.floor(n/10)-2] + (digit ? "-"+num[digit] : "");
  if (n < 1000) return num[Math.floor(n/100)] +" hundred" + (n%100 == 0 ? "" : " " + number2words(n%100));
  return number2words(Math.floor(n/1000)) + " thousand" + (n%1000 != 0 ? " " +number2words(n%1000) : "");
}

// Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
  return Number(String(n).split('').sort((a,b) => b - a).join(''))
  //...
}