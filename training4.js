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