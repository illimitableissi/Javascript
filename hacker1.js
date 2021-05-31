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

// Write a program that prints a staircase of size n,
function staircase(n) {
    // Write your code here
    let numArray = [...Array(n+1).keys()];
    let sliced = numArray.slice(1) 
    console.log(sliced.map(i => ' '.repeat(sliced.length - i) + '#'.repeat(i) + '\n').join(''))
}

// Count how many candles are tallest.
function birthdayCakeCandles(candles) {
    // Write your code here
    let sorted = candles.sort((a,b) => a - b);
    let max = sorted[sorted.length -1]
    return sorted.filter(i => i == max).length

}