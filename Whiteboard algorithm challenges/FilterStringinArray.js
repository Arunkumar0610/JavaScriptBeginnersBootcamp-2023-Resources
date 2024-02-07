//remove the strings from array 
function FilterString(arr)
{
    //approach 1
    // var filterarray=[];
    // for(var i=0;i<arr.length;i++)
    // {
    //     if(typeof arr[i]==="number")
    //     {
    //         filterarray.push(arr[i]);
    //     }
    // }
    //return filterarray;
    //approach 2
    //return arr.filter(function(x){return typeof x==="number"});
    //approach 3
    return arr.filter(x=> typeof x!="string");//type of x === number means get only numbers 
    //type of x != string means get all elements except strings
}
console.log(FilterString([1,2,'a',4,'b']));