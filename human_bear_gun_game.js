//Human, Bear and Gun Game is like a rock paper scissor game 
//let do this using functions
function getUserInput(userInput){
userInput=userInput.toLowerCase();
if(userInput!=='bear' && userInput!=='human' && userInput!=='gun')
{
    return 'Invaild input';
}
return userInput;
}


function getComputerChoice()
{
    var choices=['bear','human','gun'];
    var computerChoice=choices[Math.floor(Math.random()*3)];
    return computerChoice;
}


function determineWinner(userChoice,computerChoice)
{
    if(userChoice===computerChoice)
    {
        return "it is a tie";
    }
    else
    {
        // if((userChoice==='bear' && computerChoice==='human')||
        // (userChoice==='gun' && computerChoice==='bear')||
        // userChoice==='human' && computerChoice==='gun')
        // {
        //     return 'user won';
        // }
        // return 'computer won';
        if(userChoice==='human')
        { 
            if(computerChoice==='bear' )
            {
                return "You have been mauled by a bear";
            }
            else{
                return "You have disarmed a gun";
            }
        }
        if(userChoice==='bear')
        { 
            if(computerChoice==='gun' )
            {
                return "You have been shot by a gun";
            }
            else{
                return "You have mauled a human";
            }
        }
        if(userChoice==='gun')
        { 
            if(computerChoice==='human' )
            {
                return "Your gun has been disarmed";
            }
            else{
                return "You shot a bear";
            }
       }
    }
}

function Playgame(){
    //prompt is used in browser console to use in vs code you need to run this commands in terminal
    //1.npm init -y  -> which will init the package.json
    //2.npm install prompt-sync -> which will install the prompt to use it we need to use in this syntax
    //const prompt=require("prompt-sync")();
    //var YourInput=prompt("your info :");
    const prompt=require("prompt-sync")();
    var input=prompt("Please choose from bear, human or gun : ");
    var userChoice=getUserInput(input);
    var computerChoice=getComputerChoice();
    console.log(userChoice+' vs '+computerChoice);
    var winner=determineWinner(userChoice,computerChoice);
    console.log(winner);
}

Playgame();

