// Determine if a string is a Palindrome
 
// Challenge
  // A palindrome is a text that is spelled the same front to back.
 
// Examples
  // 'Eva, Can I Stab Bats In A Cave?' -> true
  // 'Was It A Rat I Saw?' -> true
  // 'A nut for a jar of tuna?' -> true
 
// Note
  // Ignore capitalization and spaces or any special characters.
 
// Tools
  // String.prototype.replace()
    // http://bit.ly/string-replace-method
  // Online Regex Tool
    // http://bit.ly/regular-expressions-javascript
    // https://regex101.com/
  // String.prototype.toLowerCase()
    // http://bit.ly/lowercase-string
 
function isPalindrome(str) {
    str=str.replace(/\W/g,'');
    str=str.toLowerCase();
    //approach1 using inbuilt functions
    //var reversestr=str.split('').reverse().join('');
    //approach2 using for loop
    // var reversestr='';
    // for(var i=str.length-1;i>=0;i--)
    // {
    //     reversestr+=str[i];
    // }
    //approach3 using for...of loop
    // var reversestr='';
    // for(var i of str)
    // {
    //     reversestr=i+reversestr;
    // }
    //approach4 using inbuilt functions and spread operator
    var reversestr=[...str].reverse().join('');
    return str===reversestr;
}
console.log(isPalindrome('Eva, Can I Stab Bats In A Cave?'));
console.log(isPalindrome('Was It A Rat I Saw?'));
console.log(isPalindrome('A nut for a jar of tuna?'));