//Remove Odd Numbers From an Array
//Challenge-
//create a function that takes an array of numbers and returns only the even values.
//The function should return an array containing only even numbers

//Examples
//[1,2,3,4,5,6,7,8,9,10]->[2,4,6,8,10]
//[21,26,28,29]->[26,28]

//Approach1- for loop//modulus or remainder operator (%)

//Tools
//for statement
//http://bit.ly/for-loop-javasscript
//modulus or remainder operator
//http://bit.ly/remainder-operator
//array.prototype.push()
//http://bit.ly/array-push

function evensOnly(arr){
    var evenarray=[];
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2===0)
        {
            evenarray.push(arr[i]);
        }
    }
    return evenarray;
}

console.log(evensOnly([1,2,3,4,5,6,7,8,9,10]));
console.log(evensOnly([21,26,28,29]));

//Approach2-// filter method
 
// Tools
  // filter method
    // http://bit.ly/array-filter-method
  // remainder/modulus operator
    // http://bit.ly/remainder-operator
    function evensOnly(arr){
        //var evenarray=arr.filter(function(x){return x%2===0});
        var evenarray=arr.filter(x=>x%2===0);
        return evenarray;
    }
    
    console.log(evensOnly([1,2,3,4,5,6,7,8,9,10]));
    console.log(evensOnly([21,26,28,29]));

