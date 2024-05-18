export default class RPSGame {
  constructor() {
    this.resultDisplayment = document.getElementById('gameResultDisplay');
    this.computerChoiceDisplayIcon = document.getElementById(
      'computerChoiceDisplayIcon'
    );
    this.computerChoiceDisplayText = document.getElementById(
      'computerChoiceDisplayText'
    );
    this.playerChoiceDisplayIcon = document.getElementById(
      'playerChoiceDisplayIcon'
    );
    this.playerChoiceDisplayText = document.getElementById(
      'playerChoiceDisplayText'
    );

    this.allowedChoices = [
      {
        text: 'rock',
        icon: {computer: '✊', player: '✊🏻'},
      },
      {
        text: 'paper',
        icon: {computer: '🖐️', player: '🖐🏻'},
      },
      {
        text: 'scissors',
        icon: {computer: '✌️', player: '✌🏻'},
      },
    ];

    this.choice = {
      computer: null,
    };

    this.randomIndex = 0;
  }

  animationComputerChoose(delay) {
    const interval = setInterval(() => {
      const randIndex = Math.floor(Math.random() * 3);
      this.computerChoiceDisplayIcon.textContent =
        this.allowedChoices[randIndex].icon.computer;
      this.computerChoiceDisplayText.textContent =
        this.allowedChoices[randIndex].text;
    }, 100);
    const timeout = setTimeout(() => {
      clearInterval(interval);
      clearTimeout(timeout);
    }, delay);
  }

  setComputerChoice() {
    this.randomIndex = Math.floor(Math.random() * 3);
    this.choice.computer = this.allowedChoices[this.randomIndex];
    this.computerChoiceDisplayIcon.textContent =
      this.choice.computer.icon.computer;
    this.computerChoiceDisplayText.textContent = this.choice.computer.text;
  }

  setPlayerChoice(choice) {
    const playerChoice = this.allowedChoices.filter(
      (item) => item.text === choice
    )[0];

    this.playerChoiceDisplayIcon.textContent = playerChoice.icon.player;
    this.playerChoiceDisplayText.textContent = playerChoice.text;
  }

  checkResult(playerChoice, delay) {
    this.resultDisplayment.textContent = `VS`;
    this.setPlayerChoice(playerChoice);
    this.animationComputerChoose(delay);
    const timeout = setTimeout(() => {
      this.setComputerChoice();

      if (this.choice.computer.text === playerChoice) {
        this.resultDisplayment.textContent = `GAME TIE`;
      } else if (this.choice.computer.text === 'rock') {
        if (playerChoice === 'paper') {
          this.resultDisplayment.textContent = `YOU WIN!`;
        } else {
          this.resultDisplayment.textContent = `YOU LOSE!`;
        }
      } else if (this.choice.computer.text === 'paper') {
        if (playerChoice === 'scissors') {
          this.resultDisplayment.textContent = `YOU WIN!`;
        } else {
          this.resultDisplayment.textContent = `YOU LOSE!`;
        }
      } else if (this.choice.computer.text === 'scissors') {
        if (playerChoice === 'rock') {
          this.resultDisplayment.textContent = `YOU WIN!`;
        } else {
          this.resultDisplayment.textContent = `YOU LOSE!`;
        }
      } else {
        this.resultDisplayment.textContent = `UNDEFINED`;
      }

      clearTimeout(timeout);
    }, delay);
  }
}
