//given kelvin temperature 301
var kelvinTemp=301;
//convert given kelvin temperature to celsius by subtracting 273.15
var celsiusTemp=kelvinTemp-273.15;
//covert the celsius to fahrenheit using formula fahrenheit=celsius*(9/5)+32
var fahrenTemp=celsiusTemp*(9/5)+32;
//print the fahrenheit
console.log(fahrenTemp);
//floor the fahrenheit
console.log(Math.floor(fahrenTemp));
//console.log(Math.ceil(fahrenTemp));
//console.log(Math.round(fahrenTemp));
console.log('The temperature is ' +Math.floor(fahrenTemp)+' degrees Fahrenheit.');