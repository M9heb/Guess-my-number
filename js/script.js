'use strict';

// Varibles
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//fucntions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Game Logic
document.querySelector('.btn-check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.insert-box').value);

  if (!guess || guess > 20 || guess < 0)
    displayMessage('Invalid number inserted 😐');
  else if (guess === secretNumber) {
    document.querySelector('.guess--number').textContent = secretNumber;
    displayMessage('CORRECT NUMBER 🥳');
    document.querySelector('.guess--number').style.backgroundColor = '#60b347';
    document.querySelector('.guess--number').style.color = 'white';
    document.querySelector('.guess--number').style.borderColor = '#7ec469';
    document.querySelector('.heading-1').style.color = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'My number is lower 😑'
          : 'My number is higher 😑'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game over! you lost 😥');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Game reset logic
document.querySelector('.btn-again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('Start to guess right now...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess--number').style.backgroundColor = 'orange';
  document.querySelector('.guess--number').style.color = '#333';
  document.querySelector('.guess--number').style.borderColor = '#ffbd42';
  document.querySelector('.heading-1').style.color = '#333';
  document.querySelector('.guess--number').textContent = '?';
  document.querySelector('.insert-box').value = '';
});
