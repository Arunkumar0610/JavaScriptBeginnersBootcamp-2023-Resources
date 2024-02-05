//const- declaring the constant will create a value that is a read only reference.
//It can be either global or local to the function or block in which it is declared its value must be
//initialized when it is declared as you can't change the reference or literal that's assigned to it.

//const vs let vs var
//=>blockscope vs blockscope vs function scope
//=>temporal dead zone vs temporal dead zone vs not temporal dead zone
//=>value is read only vs value can be reassignable vs value can be reassignable
//=>must initialized when declared vs not must vs not must

//example - const vs var vs let
const a=1;
var b=1;
let c=1;
console.log(a+" "+b+ " "+c);

var b=2;
//let c=2; will give an error c is already declared
//const b=2; will give an error c is already declared
console.log(a+" "+b+ " "+c);

//a=1; will give an error that uncaught assignment to the constant varaiable
b=3;
c=2;
console.log(a+" "+b+ " "+c);
//so we can reassign the values of var and let varaiables and we can redeclare the var variable .
//const is not reassignable it is read only and  const and let cannot be redeclared in same scope.