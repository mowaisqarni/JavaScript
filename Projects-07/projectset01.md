#Projects related to dom 
  ## Projects link 


#Solution code :
#Project 1


const buttons = document.querySelectorAll('.button')
const body =document.querySelector('body')

buttons.forEach(function(button)
{
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    const col=e.target.id;
    switch(col)
    {
      case 'grey':
      body.style.backgroundColor=col;
      break;
      case 'yellow':
      body.style.backgroundColor=col;
      break;
      case 'blue':
      body.style.backgroundColor=col;
      break;
      default:
      body.style.backgroundColor='white';
      break;

    }

  } )
})

#Project 2
const form = document.querySelector('form')


form.addEventListener('submit' ,function (e)
{
  e.preventDefault()
 const height=parseInt(document.querySelector('#height').value)
 const weight=parseInt(document.querySelector('#weight').value)
const results=document.querySelector('#results')
if(height < 0 || isNaN(height) || height ==="" )
{
  result.innerHTML = ("plz give a valid height")
}
else if(weight < 0 || isNaN(weight) || weight ==="" )
{
  results.innerHTML=("plz give a valid weight")
}
else{
  const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
}
})


#Project 3
let  clock=document.getElementById('clock')


setInterval(function()
{
  let date = new Date();
  clock.innerHTML=date.toLocaleTimeString();
},1000)



#project 4 
const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const input = document.querySelector('#guessField');
const userInput = document.querySelector('#guessField'); // Added for consistency with endGame
const startOver = document.querySelector('#startOver'); // Assuming a div with id="startOver"

const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(input.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Enter a valid number');
    } else if (guess > 100) {
        alert('Enter a valid number');
    } else if (guess < 1) {
        alert('Enter a valid number');
    } else {
        prevGuess.push(guess);
        if (numGuess > 10) {
            displayGuess(guess);
            displayMessage('Game Over, your attempts are completed');
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You guessed it right');
        endGame();
    } else if (guess < randomNumber) {
        displayMessage('Number is TOO low');
    } else if (guess > randomNumber) {
        displayMessage('Number is TOO High');
    }
}

function displayGuess(guess) {
    input.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess + 1}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start new Game</h2>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    // Implement new game logic here, e.g., reset variables and enable input
    console.log('New game started');
    userInput.removeAttribute('disabled');
    prevGuess = [];
    numGuess = 1;
    playGame = true;
    guessSlot.innerHTML = '';
    remaining.innerHTML = '10';
    lowOrHi.innerHTML = '';
    randomNumber = parseInt(Math.random() * 100 + 1);
}