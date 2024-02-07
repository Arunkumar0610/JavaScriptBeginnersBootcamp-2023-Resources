// Alphabetical String Order
 
// Challenge
  // Create a function that takes a string and returns a string with its letters
  // in alphabetical order.
 
// Examples
  // "hello" ➞ "ehllo"
  // "goobye" ➞ "begooy"
  // "now" ➞ "now"
  // "javascript" ➞ "aacijprstv"
 
// Approach 1 - // if statement / for loop
 
// Tools
  // String.prototype.split()
    // http://bit.ly/string-split
  // Array.prototype.sort()
    // http://bit.ly/array-sort
  // Array.prototype.join()
    // http://bit.ly/array-join
 
    function alphaOrder(str) {
        return str.split('').sort().join('');
    }
    console.log(alphaOrder('hello'));
    console.log(alphaOrder('goobye'));
    console.log(alphaOrder('now'));
    console.log(alphaOrder('javascript'));

// Approach 2 - // if statement / for loop
 
// Tools
// Spread Operator
// https://codeburst.io/javascript-the-spread-operator-a867a71668ca
// Array.prototype.sort()
// http://bit.ly/array-sort
// Array.prototype.join()
// http://bit.ly/array-join

function alphaOrder1(str) {
    var strToArray=[...str];
    return strToArray.sort().join('');
}
console.log(alphaOrder1('hello'));
console.log(alphaOrder1('goobye'));
console.log(alphaOrder1('now'));
console.log(alphaOrder1('javascript'));