let randomNumber = parseInt(Math.random()*100+1);
// console.log(randomNumber);
const userInput =document.querySelector('#guessField');
const submit=  document.querySelector('#subt');
const guessSlot= document.querySelector('.guesses');
const remaining= document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement("p");
let prevGuess = [];
let numGuess = 1;
let playGame=true;
if(playGame){
    submit.addEventListener("click",function(e){
    e.preventDefault();
     const guess =  parseInt( userInput.value);
      validateGuess(guess);
    });
}


function validateGuess(guess){
if (isNaN(guess)){
    alert(" try to give some valid value to continue")
}
else if(guess<1){
    alert(" try to give some valid value which is greater thn 1 ")
}
else if(guess>100){
    alert(" try to give some valid value which is less than 100")
}
else{
  prevGuess.push(guess);
  if (numGuess===11){
    displayGuess(guess);
    displayMessge(`Game over.Random no was ${randomNumber} `);
    endGame();
  }
  else{
    displayGuess(guess);
    checkGuess(guess);
  }
}

}
function checkGuess(guess){
  if (guess===randomNumber){
    displayMessge(`you guessed it right.the random number was ${randomNumber}`)
    endGame();
  }
  else if(guess<randomNumber){
    displayMessge("Number is TOO low");

  }
  else if (guess>randomNumber){
    displayMessge("Number is TOO high");
  }

}
function displayGuess(guess){
    userInput.value="";
    guessSlot.innerHTML+= `${guess}  `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}` 
}
function displayMessge(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`;

}
function endGame(){
   userInput.value=" ";
   userInput.setAttribute("disabled", " " );
   p.classList.add("button");
   p.innerHTML= '<h2 id="newGame">StartOver</h2>';
   startOver.appendChild(p);
   playGame=false;
newGame();
}
function newGame(){
  let newGameButton = document.getElementById("newGame");
  newGameButton.addEventListener("click",function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
 playGame = true;
  })
};