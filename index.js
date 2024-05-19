import Computer from './classes/Computer.js';
import RPSGame from './classes/RPSGame.js';

function main() {
  const rpsGame = new RPSGame();

  const choiceRockBtn = document.getElementById('choiceRockBtn');
  const choicePaperBtn = document.getElementById('choicePaperBtn');
  const choiceScissorsBtn = document.getElementById('choiceScissorsBtn');

  [
    {el: choicePaperBtn, value: 'paper'},
    {el: choiceRockBtn, value: 'rock'},
    {el: choiceScissorsBtn, value: 'scissors'},
  ].forEach((button) => {
    button.el.addEventListener('click', () => {
      rpsGame.checkResult(button.value, 2000);
    });
  });
}

window.onload = () => {
  main();
};
