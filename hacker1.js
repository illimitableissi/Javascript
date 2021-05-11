// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr) {
    // Write your code here
    let positives = arr.filter(a => a > 0).length/arr.length;
    let negatives = arr.filter(b => b < 0).length/arr.length;
    let zero = arr.filter(c => c == 0).length/arr.length;
    
    function parse (n) {
        console.log(Number.parseFloat(n).toFixed(6))
    }
    
    return [parse(positives), parse(negatives), parse(zero)]
   
}