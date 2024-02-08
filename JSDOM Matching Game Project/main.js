var cardsArray = [
    {    'name': 'CSS',    'img': 'https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true',  },
    {    'name': 'HTML',    'img': 'https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true',  },
    {    'name': 'jQuery',    'img': 'https://github.com/robgmerrill/img/blob/master/jquery-logo.png?raw=true',  },
    {    'name': 'JS',    'img': 'https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true',  },
    {    'name': 'Node',    'img': 'https://github.com/robgmerrill/img/blob/master/nodejs-logo.png?raw=true',  },
    {    'name': 'Photo Shop',    'img': 'https://github.com/robgmerrill/img/blob/master/photoshop-logo.png?raw=true',  },
    {    'name': 'PHP',    'img': 'https://github.com/robgmerrill/img/blob/master/php-logo_1.png?raw=true',  },
    {    'name': 'Python',    'img': 'https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true',  },
    {    'name': 'Ruby',    'img': 'https://github.com/robgmerrill/img/blob/master/rails-logo.png?raw=true',  },
    {    'name': 'Sass',    'img': 'https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true',  },
    {    'name': 'Sublime',    'img': 'https://github.com/robgmerrill/img/blob/master/sublime-logo.png?raw=true',  },
    {    'name': 'Wordpress',    'img': 'https://github.com/robgmerrill/img/blob/master/wordpress-logo.png?raw=true',  },
  ];
//duplicate the cardsArray to create a match flex for each card
var gameGrid=cardsArray.concat(cardsArray);

//Randomize gameGrid on each load
gameGrid.sort(function(){
    return 0.5-Math.random();
})
  //cardsArray[0].name; //'CSS'
  //cardsArray[1].img; //'https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true'

  //Grab the div with an id of game-board and assign to a variable game
  var game=document.getElementById('game-board');
  //create a section element and assign it to variable grid
  var grid=document.createElement('section');
  //Give section element a class of grid.
  grid.setAttribute('class','grid');
  //Append the grid section to the game-borad div
  game.appendChild(grid);

  //loop through each item in our cards array
  for(var i=0;i<gameGrid.length;i++){
     //create a div element and assign to variable card 
     var card= document.createElement('div');
     //Apply a card class to that div
     card.classList.add('card');
     //Set the data-name attribute of the div to the cardsArray name
     card.dataset.name=gameGrid[i].name;
     //Create front of card
     var front=document.createElement('div');
     front.classList.add('front');
     //Create back of card
     var back=document.createElement('div');
     back.classList.add('back');

     //Apply the background image of the back of card to the cardsArray image
     back.style.backgroundImage=`url(${gameGrid[i].img})`;
     //Append card to the grid section
     grid.appendChild(card);
     card.appendChild(front);
     card.appendChild(back);
  }

  var firstGuess='';
  var secondGuess='';
  //set count  to 0
  var count=0;
  var previousTarget=null;

  var delay=1200;
  //Add match CSS
  var match=function(){
      var selected=document.querySelectorAll('.selected');
      //loop through the array like object containing 'selected' class
      for(var i=0;i<selected.length;i++)
      {
          selected[i].classList.add('match');
      }
  }
  // Reset guesses after two attempts
  var resetGuesses=function(){
    firstGuess='';
    secondGuess='';
    count=0;
    previousTarget=null;
    var selected=document.querySelectorAll('.selected');
    for(var i=0;i<selected.length;i++)
    {
        selected[i].classList.remove('selected');
    }
  };
  //add event listener to grid
  grid.addEventListener('click',function(event){
      //Declare variable to target our clicked item
      var clicked=event.target;
      //Donot allow the grid section itself to be selected;
      //only select divs inside the gird;
      if(clicked.nodeName==='SECTION' || clicked===previousTarget ||
      clicked.parentNode.classList.contains('match')||
      clicked.parentNode.classList.contains('selected')){
          return;
      }
      //we only want to add selected class if the current count is less than 2
      if(count <2){
          count++;
          if(count===1){
              //Assign first guess
              firstGuess=clicked.parentNode.dataset.name;
              clicked.parentNode.classList.add('selected');
            }else{
                //Assign second guess
                secondGuess=clicked.parentNode.dataset.name;
                clicked.parentNode.classList.add('selected');
            }
            //If both the guess are not empty
            if(firstGuess!==' ' &&secondGuess!=='')
            {
                if(firstGuess===secondGuess)
                {
                   setTimeout(match,delay);
                   setTimeout(resetGuesses,delay);
                }  else{
                    setTimeout(resetGuesses,delay);
                } 
            }
            previousTarget=clicked;
      }    
  });