//reverse words in string
function reverseString(str)
{
    //approach 1
    // var arraywords=str.split(' ');
    // var reversearray=[];  
    // for(var i=arraywords.length-1;i>=0;i--)
    // {
    //     reversearray.push(arraywords[i]);
    // }
    //return reversearray.join(' ');
    //approach 2
    return str.split(' ').reverse().join(' ');
    
}

console.log(reverseString('This is a reverse string problem'));

// Challenge
  // Reverse the provided string.
  // You may need to turn the string into an array before you can reverse it.
  // Your result must be a string.
 
// Examples
  // 'car' -> 'rac'
  // 'bar' -> 'rab'
//approach-1
// Tools
  // String.prototype.split()
    // http://bit.ly/string-split
  // Array.prototype.reverse()
    // http://bit.ly/array-reverse-method
  // Array.prototype.join()
    // http://bit.ly/array-join
//approach-2
// Tools
  // spread operator
    // http://bit.ly/spread-operator
//approach-3
//Tools
// Tools
  // for loops
    // http://bit.ly/for-loop-javascript
//approach-4
// Tools
  // for of
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

function reverseString1(str)
{
    //approach 1
    // return str.split('').reverse().join('');
    //approach 2
    //return [...str].reverse().join('');
    //approach 3
    // var resversestring='';
    // for(var i=str.length-1;i>=0;i--)
    // {
    //     resversestring+=str[i];
    // }
    // return resversestring;
    //approach 4
    var resversestring='';
    for(var i of str)
    {
        resversestring=i+resversestring;
    }
    return resversestring;
}

console.log(reverseString1('This is a reverse string problem'));