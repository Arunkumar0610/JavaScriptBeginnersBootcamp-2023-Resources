//forEach() calls a provided callback function once for each element in an array in
//ascending order.

//syntax-
//array.forEach(function(currentValue,index,array),thisValue);
//array -Array
//forEach- keyword
//function- callbackfunction
//currentValue- current value iterating through
//index,array and thisValue are optional

//example using for loop in es5
var scaryCreatures=['lions','tigers','bears'];
for(var i=0; i<scaryCreatures.length;i++)
{
    console.log('Dorothy is afraid of '+scaryCreatures[i]+'.');
}

//using es6  forEach()
scaryCreatures.forEach(function(scaryCreature){console.log(`Dorothy is afraid of ${scaryCreature}.`);})

//index optional
scaryCreatures.forEach(function(scaryCreature,index){console.log(`${index+1}. Dorothy is afraid of ${scaryCreature}.`);})