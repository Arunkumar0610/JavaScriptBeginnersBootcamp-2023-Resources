//Random insult generator mini app
var randomBodyParts=['head','arms', 'legs', 'feet', 'toes', 'hips'];
var randomAdjectives=['bad','nest','smelly','ugly'];
var randomWords=['rat','bat','cat','bird','socks'];
var randomBodyPart=randomBodyParts[Math.floor(Math.random()*6)];
var randomAdjective=randomAdjectives[Math.floor(Math.random()*4)];
var randomWord=randomWords[Math.floor(Math.random()*5)];
console.log('Your '+randomBodyPart+' is like a '+randomAdjective+ ' '+randomWord);