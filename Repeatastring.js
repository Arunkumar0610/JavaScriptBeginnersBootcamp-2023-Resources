// Repeat a String
 
// Challenge
  // write a function that takes two arguments, a string and a number.
  // The function should return a single string that contains the original string,
  // repeated the number of times specified by the second argument,
  // or an empty string if the number is negative.
 
// Examples
  // 'car', 4 -> 'carcarcarcar'
  // 'bar', 3 -> 'barbarbar'
 
// Approach 1 - for loop
 
// Tools
  // for loop
    // http://bit.ly/for-loop-javascript
  // arithmetic operators
    // http://bit.ly/arithmetic-operators-js
 
    function repeatString(str, num) {
      var repeatstring="";
      if(num<=0)
      {
        return repeatString;
      }  
      for(var i=1;i<=num;i++)
      {
        repeatstring+=str;
      }
      return repeatstring;
    }
    console.log(repeatString('car',4));
    console.log(repeatString('bar',3));

// Approach 2 - while loop
 
// Tools
  // while loop
    // http://bit.ly/while-loop
  // arithmetic operators
    // http://bit.ly/arithmetic-operators-js

    function repeatString1(str, num) {
      var repeatstring="";
      if(num<=0)
      {
        return repeatString;
      }  
      while(num>0)
      {
        repeatstring+=str;
        num--;
      }
      return repeatstring;
    }
    console.log(repeatString1('car',4));
    console.log(repeatString1('bar',3));