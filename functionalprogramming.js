//Functional Programming: JavaScript can handle higher-order functions. A higher-order function is a function
//that can take another function as an argument, or that returns a function as a result.

//In javascript functions are objects and values so then functions can be assigned to the variables or other functions
//functional programming glossaries contain a large number of large words, but at its core, the essense of FP is really very
//simple; programs are built mostly with a handful of very small, very reuseable, very predictable pure functions.

//pure function- is a function in which:
//-Given the same input, will always return the same output.
//-produce no side effects.
//-relies on no external state.

//lets learn the functional programming using array method called map,filter and reduce

//map(['corn','cow','chicken'],cook)=>['popcorn','burger','omlet'] ->map and cook are functions we are passing cook function to map()
//filter(['popcorn','burger','omlet'],isVegetarian)=>['popcorn','omlet']
//reduce(['popcorn','omlet'],eat)=>shit

//filter=> array.filter(function(currentValue),{return ture;})
//filter is  a higher-order function and we are passing a function as argument to the filter function
// and in function we are passing an current value that is an element in array so it returns array of true values

var testScores=[92,87,54,63,75,59];
var passingTest=function(test){
    return test>60;
}
var graduation=testScores.filter(passingTest);
console.log(graduation);//[92,87,63,75]
var graduation1=testScores.filter(function(test){
    return test>60;
});
console.log(graduation1);//[92,87,63,75]

//how can we achieve this with out using filter
//use for or while loop lets use for loop
var graduation2=[];
for(var i=0;i<testScores.length;i++)
{
    if(testScores[i]>60)
        graduation2.push(testScores[i]);
}
console.log(graduation2); //[92,87,63,75]

var forecast=[{day:'Monday',sun:true},{day:'Tuesday',sun:false},{day:'Wednesday',sun:false},{day:'Thursday',sun:true},{day:'Friday',sun:false},{day:'Saturday',sun:true},{day:'Sunday',sun:false}];
var sunnyDays=[];
for(var i=0;i<forecast.length;i++){
    if(forecast[i].sun)
    {
        sunnyDays.push(forecast[i]);
    }
}
console.log(sunnyDays);

//using filter
var sunnyDays1=forecast.filter(function(weather){
    return weather.sun;
});
console.log(sunnyDays1);

//pure function vs impure function
//will be given same input and always get the same output vs like Math.random() always gives a different output
//Map()function-> Creates a new array with the results of calling a provided function on every element of an array.
//example ['cat1' ,'cat2','dog1']  ==filter()==> ['cat1','cat2']

var newforecast=[
    {day:'Monday',sun:true,humidity:10},
    {day:'Tuesday',sun:false,humidity:100},
    {day:'Wednesday',sun:false,humidity:100},
    {day:'Thursday',sun:true,humidity:25},
    {day:'Friday',sun:false,humidity:100},
    {day:'Saturday',sun:true,humidity:15},
    {day:'Sunday',sun:false,humidity:100}
]

// by using for loop will get the array of the humidity values of each day
var humid=[];
for(var i=0; i<newforecast.length;i++)
{
    humid.push(newforecast[i].humidity);
}

console.log(humid);

//using map()
var humid1=[];
humid1=newforecast.map(function(wetness){return wetness.humidity});
console.log(humid1);

//one more example
var numbers=[5,10,15,20,25]
var mutiplyby3=numbers.map(function(x){return x*3});
console.log(mutiplyby3);

var greeting=['hi','hello','hey','dear','sir'];
var shout=greeting.map(function(salutation){return salutation.toUpperCase()});
console.log(shout);

//reduce() method -LIST TRANSFORMATION
//applies a function against an accumulator and each value of the array (from left to right) to
//reduce it to a single value.
//syntax- array.reduce(function(accumulator.currentValue,currentIndex,array)initialValue)
//accumulatoe / -> required / -> result of reduction so far
//currentValue /->required /->current value of index
//currentIndex, array and initialValue are optional
//reduce() is higher order function has two arguments function , initial value and it is highly customizable.
//example
var numbers=[1,2,3,4];
var idx=0;
var result=numbers.reduce(function(acc,curr,idx,numbers){
    return acc+curr;
},5);
console.log(result);

var multArr=[[0,1],[2,3],[4,5]];
var result1=multArr.reduce(function(acc,curr,idx,arr){
    return acc.concat(curr);
},[-2,-1]);
console.log(result1);

var homeRuns=[
    {batter:12},
    {batter:21},
    {batter:28},
    {batter:42},
    {batter:31},
    {batter:22},
    {batter:17},
    {batter:16},
    {batter:5}
];
var totalHomeRuns=homeRuns.reduce(function(a,b){
    console.log('accumulator : '+a+'| current value: {batter:'+b.batter+'}.');
    return a+b.batter;
},0);
console.log(totalHomeRuns);

var array1=[2,5,7,1,3];
var sum=array1.reduce(function(a,b){return a+b},0);
var product=array1.reduce(function(a,b){return a*b},1);
var largestnumber=array1.reduce(function(a,b){
    // if(a>b)
    // {
    //     return a
    // }
    // else
    // {
    //     return b
    // }
    return (a>b)?a:b;
},0);
console.log('sum of array: '+sum +'.\nproduct of array: '+product+'.\nlargest element in array: '+largestnumber);

var answer=array1.map(function(mul2){return mul2*2}).reduce(function(a,b){return a+b},0);
console.log('sum of oddnumbers in an array: '+answer);