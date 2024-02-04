//concept of 1. this & bind ,2. this & call
//this and bind:
//              in most cases, the value of "this" is determined by how a function is called.
//It can't be set by assignment during execution, and it may be different each time the function is called.
//ES5 introduced the bind method to set thr value of a functions "this" regradless of how it's called.
//Bind creates  new function that will have "this" set to the first parameter passed to bind().
let cat={
 sound:'meow',
 speak:function(){console.log(this.sound)}
}

cat.speak(); //meow

// here the method knows the context of this if we assign this cat.speak function (not method) to the new variable 
// and call it then it gives output undefined
//[function-cat.speak method-cat.speak()]

let catspeak=cat.speak;
catspeak(); //undefined ->this is contextless

//because after assignment catspeak will dont know the context of object cat  because of the function value is assigned it losts the this context 
//and to have the context of object cat will use bind method
//bind method helps to find the context by 
//simply passing the object as the first argument to the bind method
let speakfunction=cat.speak;
let speakfunctionbind=speakfunction.bind(cat);//now using this bind now this can find its context of cat
speakfunctionbind();//meow


//this & call-
//Call method- The call() method calls a function with a givrm "this" value and arguments provided individually.
//syntax- functionname.call(object,arg1,arg2,arg3,.....)

var obj={num:2};
var addToThis=function(a,b,c){
    return this.num+a+b+c;
}
console.log(addToThis.call(obj,1,2,3));

var person1={firstName:'John',lastName:'Doe'};
var person2={firstName:'Jane',lastName:'Doe'};
function hello(greeting){
    console.log(greeting+' '+this.firstName+' '+this.lastName);
}

hello(); //undefined undefined undefined
hello.call(person1,"Hello");// Hello John Doe
hello.call(person2,"Hello");// Hello Jane Doe