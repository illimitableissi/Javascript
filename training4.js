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