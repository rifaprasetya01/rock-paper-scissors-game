import Computer from './Computer.js';
import Player from './Player.js';

export default class RPSGame {
  constructor() {
    this.resultDisplayElement = document.getElementById('gameResultDisplay');

    this.choices = {
      rock: {
        text: 'rock',
        icon: {computer: '✊', player: '✊🏻'},
      },
      paper: {
        text: 'paper',
        icon: {computer: '🖐️', player: '🖐🏻'},
      },
      scissors: {
        text: 'scissors',
        icon: {computer: '✌️', player: '✌🏻'},
      },
    };

    this.computerInstance = new Computer(this.choices);
    this.playerChoice = new Player(this.choices);
  }

  checkResult(playerChoice, delay) {
    const conditionCases = {
      'computer:rock': {
        'player:rock': 'GAME TIE',
        'player:paper': 'YOU WIN',
        'player:scissors': 'YOU LOSE',
      },
      'computer:paper': {
        'player:paper': 'GAME TIE',
        'player:scissors': 'YOU WIN',
        'player:rock': 'YOU LOSE',
      },
      'computer:scissors': {
        'player:scissors': 'GAME TIE',
        'player:rock': 'YOU WIN',
        'player:paper': 'YOU LOSE',
      },
    };

    this.resultDisplayElement.textContent = 'VS';
    this.playerChoice.setChoice(playerChoice);
    this.computerInstance.shufflingAnimation(delay);
    const timeout = setTimeout(() => {
      this.resultDisplayElement.textContent =
        conditionCases[`computer:${this.computerInstance.choice}`][
          `player:${playerChoice}`
        ];

      clearTimeout(timeout);
    }, delay);
  }
}
