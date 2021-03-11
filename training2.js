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