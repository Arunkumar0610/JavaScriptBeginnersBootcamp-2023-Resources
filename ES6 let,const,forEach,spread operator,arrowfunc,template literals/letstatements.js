//ES6-ECMAScript2015
//LET Statement- the let statement allows for block scope to declare a local variable.
//This differs from the var keyword, which declares a variable globally or locally to the
//scope of a function.

//      var             vs        let
//var greeting='hello'; |   let name='Joe';
//greeting;->'hello'    |   //name; ->'Joe'
//greeting='Sir';       |   name='Sarah';
//greeting;->'Siru';    |   name;->'Sarah'
//var greeting='Hi';    |   let name='newname';
//greeting->Hi          |   name;->error
/*after redeclaring same| for redeclaring same variable with 
variable with var       | let keyword will give an error. 
keyword wont thrown     | this is known as Temporal dead zone.
an error*/ //           | like redeclaring in same function scope or block scope 
//                      | will cause an syntax error.

//Function scope:
/*example- var firstName="first";
function Name(){
    var lastName="last";
}
if(true){
    var salutation="sir";
}
console.log(salutation+' '+firstName+' '+lastName);//error lastName as undefined

here in this example var firstName & salutation are global variable and 
salutation is in conditional statement scope bur var is an function scope
and lastName is local variable of function scope
*/

//Block Scope:
/*example=>
 let firstName="first";
function Name(){
    let lastName="last";
}
if(true){
    let salutation="sir";
}
console.log(salutation+' '+firstName+' '+lastName);//error lastName and salutation as undefined

here in this example let firstName is global and salutation in conditional statement
which is in block scope because let is an block scope so it is an local variable of
conditional statement and  lastName is a local variable in function which is not accessable
outside of its scope.
*/

/*LAB:
=>let statement review
=>let is an alternative to var
=>utilizes block scope while var only utilizes function scope
=>temporal dead zone
=>using the let statement should help our code make more sense and our code will
be less buggy.
*/

//cahallenge- create identical set of code and show how var 
//doesnot take advantage of block scope but let does

//possible solution
var a=4;
let c=4;
if(true){
    var b=5;
    let d=5;
}
console.log(a*b);//20
//console.log(c*d);// will get an erroe d is not defined

//var vs let
function Vartest()
{
    var x=1;//function scope local
    if(true)
    {
        var x=2;//function scope local x is redeclared still works 
        console.log(x);//2
    }
    console.log(x);//2
}

Vartest();

function Lettest()
{
let y=1;//function scope local
if(true)
{
    let y=2;//block scope redeclared and local
    console.log(y);//2
}
console.log(y);//1
}

Lettest();
