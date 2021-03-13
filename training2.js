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