//Template Literals-
//Template literals are enclosed by backtick(`). They replace the single or double
//quotes typically used in strings.They may contain placeholders(${placeholders}).
//Placeholders are indicated by the dollar sign and curly braces.
//The expressions in the place holders including text contained between them are passed
//to a function.The parts are concatenated by the default function into single string.

//example newline in ES5
var sentence='My name is Rob and I like to run';//we cannot add new line by enter in single or double quotes
console.log(sentence);
var sentence="My name is Rob\nand I like to run";//add new line by using \n
console.log(sentence);
//example newline in ES6
var sentence=`My name is Rob 
and I like to run`;//recognizes the newline using backtick(`)
console.log(sentence);

//Example-2  ES5
var topping1='pepperoni';
var topping2='mushrooms';
var pizza='My Favorite Pizza has '+topping1+' and '+topping2+'!';
console.log(pizza);
//ES6
var pizza=`My Favorite Pizza has ${topping1} and ${topping2}!`
console.log(pizza);

//Example-3 ES5
var pizza1={
    topping1:'pepperoni',
    topping2:'mushrooms',
    pizzatoppings:function(){
        return 'My Favorite Pizza has '+this.topping1+' and '+this.topping2+'!';
    }
}
console.log(pizza1.pizzatoppings());
var pizza2={
    topping1:'pepperoni',
    topping2:'mushrooms',
    pizzatoppings:function(){
        return `My Favorite Pizza has ${topping1} and ${topping2}!`;
    }
}
console.log(pizza2.pizzatoppings());