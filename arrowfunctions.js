//Arrow functions-
//also called as "fat arrow" functions, are a more concise syntax for writing function
//expressions. They utilize a new token =>, that looks like a fat arrow(=>).
//Arrow functions are annonymous and change the way "this" binds in functions.

//ES5                               vs      ES6
/*var es5Func=function(){return 2;} |   let es6Func=()=>2;*/
//                                  | lesscode,nofunction keyword,()sometimes optional
//                                  | implicit return without curly braces.

//Arrowfunction-1 parameter
let cubed;
cubed=x=>x*x*x;//concise body,implicit return
console.log(cubed(3));
cubed=x=>{return x*x*x};//block body, needs explicit return statement
console.log(cubed(3));
//bestpractice to use
cubed=(x)=>x*x*x;//concise body,implicit return
console.log(cubed(3));
cubed=(x)=>{return x*x*x};//block body, needs explicit return statement
console.log(cubed(3));

//Arrowfunction-two or more parameter
let add;
add=(x,y)=>x+y;
console.log(add(2,3));
add=(x,y)=>{return x+y};
console.log(add(2,3));
add=(x,y,z)=>x+y+z;
console.log(add(2,3,4));
add=(x,y,z)=>{return x+y+z};
console.log(add(2,3,4));

//example use arrow function in array map method
//simple solution then convert to arrow function
var numbers=[2,3,4,5];
var es6squared=numbers.map(function(x){return x*x});
console.log(es6squared);
var es6squared=numbers.map(x=>x*x);
console.log(es6squared);

