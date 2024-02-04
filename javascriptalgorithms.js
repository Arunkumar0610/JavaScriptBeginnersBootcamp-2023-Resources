//Algorithms- algorithms is a self contained step by step set of operations to be performed.
//Algorithm performs calculations, data processing, and/or automated reasoning  tasks.

//Identify unique string ?
//psuedo code:
/*
function uniquestring(string argument)
functionstart
for loop(statement1;statement2,statement3)
forloop start
if(statement of indexOf and lastindexOf doesn't match) return false;
forloopend
return true;
functionend
 */
function uniqueString(str)
{
    for(var i=0;i<str.length;i++)
    {
        if(str.indexOf(str[i])!==str.lastIndexOf(str[i]))
        {
            return false;
        }
    }
    return true;
}

console.log(uniqueString("abcd"));
//-------------------------------------------------------------------------------------------------------------
//Algorithms-It's a lot like a recipe and tells your computer precisely what steps to take to solve a problem or reach a goal
//Given a string find the length of the longest word ?

//psuedo code
/*
function longestword(string argument)
function start
var array =string.split(" ");
var max=0; or var biggestword='';
for(var i=0;i<array.length;i++)
{
    len=array[i].length;
    if(max>len) or if(biggestword.length<len)
    {
        max=len; or biggestword=array[i];
    }
}
return max; or return biggestword;
function end
 */
function longestword(str)
{
    var array =str.split(" ");
    var max=0;
    for(var i=0;i<array.length;i++)
    {
        len=array[i].length;
        if(max<len)
        {
            max=len;
        }
    }
    return max;
}
function newlongestword(str)
{
    var array =str.split(" ");
    var biggestword='';
    for(var i=0;i<array.length;i++)
    {
        len=array[i].length;
        if(biggestword.length<len)
        {
            biggestword=array[i];
        }
    }
    console.log(biggestword);
    return biggestword.length;
}
console.log(longestword("Hello Everyone, how are yu all doing?"));
console.log(newlongestword("Hello Everyone, how are yu all doing?"));
//-------------------------------------------------------------------------------------------------------------
//Determine if the given two strings are a permutation of each other
//psuedocode
/*
function permutationcheck(string argument1, string argument2)
{
    if(argument1.length===argument2.length)
    {
        var arr1=argument1.split('').sort();
        var arr2=argument2.split('').sort();
        for(var i=0;i<arr1.length;i++)
        {
            if(arr1[i]!==arr2[i]) return false;
        }
        return true;
               (or)
        var arr1=argument1.split('').sort().join('');
        var arr2=argument2.split('').sort().join('');
        return arr1===arr2;
    }
}
 */
function permutationcheck(argument1, argument2)
{
    if(argument1.length===argument2.length)
    {
        //var arr1=argument1.split('').sort();
        //var arr2=argument2.split('').sort();
        // for(var i=0;i<arr1.length;i++)
        // {
        //     if(arr1[i]!==arr2[i])
        //     {
        //         return false;
        //     }
        // }
        // return true;
        var strr1=argument1.split('').sort().join('');
        var strr2=argument2.split('').sort().join('');
        return strr1===strr2;
    }
    return false;
}

console.log(permutationcheck('abcd','dcba'));
//-------------------------------------------------------------------------------------------------------------
//Given an array with two values find the sum of those numbers with in the Range?
//psuedocode
/*function sumOfRange(array)
{
    var sum=0;
    for(var i=Math.min(array);i<=Math.max(array);i++)
    {
        sum+=i;
    }
    return sum;
}
 */
function sumOfRange(arrval)
{
    var sum=0;
    for(var i=Math.min(arrval[0],arrval[1]);i<=Math.max(arrval[0],arrval[1]);i++)
    {
        sum+=i;
    }
    return sum;
}
console.log(sumOfRange([1,5]));
console.log(sumOfRange([5,1]));
//-------------------------------------------------------------------------------------------------------------
//Remove elements from head in array?

//slice method vs splice method
//slice- doesnot alter the orginal array but returns an altered copy of the array.
// ex- var travel=['boat','bus','train'];
//var newtravel=travel.slice(0,1); //['boat']
//splice- the method changes the contents of an array by removing existing elements and/or adding elements
//syntax= array.splice(start,delete,addtionalelements)
//ex- var travel=['boat','bus'];
// travel.splice(2,0,'train','flight')
// console.log(travel); 
// travel.splice(2,2)
// console.log(travel); 

//psuedocode
/*
function removeFromHead(arra,excess)
function start
    arra.splice(0,excess);
    return arra;
function end
 */
function removeFromHead(arra,excess)
{
    arra.splice(0,excess);
    return arra;
}
console.log(removeFromHead([2,3,4,5,6],1));
//-------------------------------------------------------------------------------------------------------------
//Palindromes - a word spelled the same forward and backwards
//eg. racecar,dad,level
//-case insensitive : 'Racecar'
//-allows ' , / - _ ( ) ' eg- 'Race-car'

//RegularExpressions - is a sequence of characters that form a search pattern.
//May be a single character, or a more complicated pattern. Used often with text 
//search and replace operations.
//syntax- /pattern/modifiers
//  /milk/i - regularexpression
// milk - pattern to be used in search
// , . _ - ( ) characters - to match this characters we have regularExpression
//  /\W/ equivalent to[^A-Za-z0-9_]
//g - global modifier to get the all repeated matches.

//string.replace() - returns a new string with some or all matches of a pattern replaced
//by a replacement. The pattern can be a string or a Regex. The replacement can be
//a string or a function to be called for each match.
//syntax- str.replace(regexp|substr,newSubStr|function)
//example-
//var milkAdd='Drink more milk';
//var milkAdd.replace('milk','silk');
//milkAlt; -> 'Drink more silk'
//var milkSub=milkAdd.replace(/silk/,'soy milk;);
//milkDub; ->Drink more soy milk

//psuedocode
/*
function Palindrome(string argument)
codeblock
    use regular expression and replace method to get rid of all undesired characters
    for comparison 
        reverse our string and return the value of whether our string is equal to our reversed string

call our function with a string argumeng
 */

function isPalindrome(Palindromestring)
{
    Palindromestring=Palindromestring.replace(/\W/g,'').toLowerCase();
    return Palindromestring===Palindromestring.split('').reverse().join('');
}

console.log(isPalindrome("Racecar"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("Race-car"));