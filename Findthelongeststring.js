//Find the Longest String
// Supercalifragilisticexpialidocious
 
// Challenge
  // Given a string of words return the length of the longest word(s)
 
// Examples
  // 'Hi, where is the airport?' -> 7
  // 'Thanks for stopping by!' -> 8
 
// Approach 1 - Using Built in Functions & Regular Expressions & For Loop
 
// Tools
  // split() method - splits a string into an array
    // http://bit.ly/string-split
  // String.prototype.replace()
    // http://bit.ly/string-replace-method
  // Online Regex Tool
    // http://bit.ly/regular-expressions-javascript
    // https://regex101.com/
    // https://regex101.com/r/c19vza/1
 
function longestWordLength (str) {
    str= str.replace(/\W/g,' '); //regular expression \W means all non Word characters like symbols and spaces
    //to replace all the occurences of non word characters we are using 'g' which will find all the occurences
    //and  then replace it by space. if we add i which will be a ignore case if this a string it ignore it 
    //wheater captial or small letters. 
    var arraywords=str.split(' ');
    var longestword='';
    for(var i=0;i<arraywords.length;i++)
    {
        if(longestword.length<arraywords[i].length)
        {longestword=arraywords[i];}
    }
    return longestword.length;
}
console.log(longestWordLength('Hi, where is the airport?'));
console.log(longestWordLength('Thanks for stopping by!'));


// Approach 2 - Using Built in Functions & Regular Expressions
 
// Tools
  // split() method - splits a string into an array
    // http://bit.ly/string-split
  // for of loop
    // http://bit.ly/for-of-loop
  // String.prototype.replace()
    // http://bit.ly/string-replace-method
  // Online Regex Tool
    // http://bit.ly/regular-expressions-javascript
    // https://regex101.com/
    // https://regex101.com/r/c19vza/1

    function longestWordLength1(str) {
        str= str.replace(/\W/g,' ');  
        var arraywords=str.split(' ');
        var longestword='';
        for (var i of arraywords)
        {
            if(longestword.length<i.length)
            {longestword=i;}
        }
        return longestword.length;
    }
    console.log(longestWordLength1('Hi, where is the airport?'));
    console.log(longestWordLength1('Thanks for stopping by!'));