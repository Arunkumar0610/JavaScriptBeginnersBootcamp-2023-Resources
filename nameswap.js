//Name Swap
//challenge- reverse the order of two provided strings.

//Examples-
//"Abraham Lincoln" ->"Lincoln Abraham"
//"Hank Aaron" -> "Aaron Hank"

//Approach1-//using built in functions
//Tools-
//string.prototype.split()
//http://bit.ly/string-split
//Array.prototype.reverse()
// http://bit.ly/array-reverse-method
// Array.prototype.join()
// http://bit.ly/array-join

function nameSwap(str){
 return str.split(' ').reverse().join(' ');
}
console.log(nameSwap("Abraham Lincoln"));
console.log(nameSwap("Hank Aaron"));

//Approach2- Add array indices/indexes
//Tools-
//string.prototype.split()
//http://bit.ly/string-split
//accessing array elements
//http://bit.ly/arrays-bracket-notation
function nameSwap2(str){
    var arrayOfWords= str.split(' ');
    return arrayOfWords[1]+' '+arrayOfWords[0];
}
console.log(nameSwap("Abraham Lincoln"));
console.log(nameSwap("Hank Aaron"));