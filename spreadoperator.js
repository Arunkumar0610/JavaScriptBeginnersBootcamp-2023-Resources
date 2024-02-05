//spread operator-
//the spread operator allows an expression to be expanded inplaces where multiple
//arguments(for function calls) or multiple elements (for array literals) or
//multiple variables (for destructing assignment) are expected.

//syntax- ...
// example- in es5 using concat
 let letters=['a','b','c'];
 console.log(letters);
 console.log(...letters);

 var alpha=['a','b','c'];
 var bet=['d','e','f'];
 var alphabet=alpha.concat(bet);
 console.log(alphabet);
 //using spread operator in es6
 var alphabet=[...alpha,...bet];
 console.log(alphabet);

 //functions in es5 while passing arguments
 let first=[1,2,3];
 let second=[2,4,6];
 function productOfThree(a,b,c){
     let result=a*b*c;
     console.log(result);
 }

 productOfThree(first[0],first[1],first[2]);
 
 //in es6 using spread operator passing multiple arguments in function
 productOfThree(...second);