import RPSGame from './RPSGame.js';

export default class Computer {
  constructor(choices) {
    this.computerChoiceDisplayElement = {
      iconPlacement: document.getElementById('computerChoiceDisplayIcon'),
      textPlacement: document.getElementById('computerChoiceDisplayText'),
    };
    this.choices = choices;
    this.choice = null;
  }

  getRandomNumber(limit) {
    return Math.floor(Math.random() * limit);
  }

  shufflingAnimation(delay) {
    const interval = setInterval(() => {
      const choiceIndex = this.getRandomNumber(3);
      const {text, icon} = this.getChoice(choiceIndex);
      this.showChoice(text, icon);
    }, 100);

    const timeout = setTimeout(() => {
      this.setChoice();
      clearInterval(interval);
      clearTimeout(timeout);
    }, delay);
  }

  setChoice() {
    const randomNumber = this.getRandomNumber(3);
    const {text, icon} = this.getChoice(randomNumber);
    this.choice = text;
    this.showChoice(text, icon);
  }

  getChoice(choiceIndex) {
    const choiceKey = Array.from(Object.keys(this.choices))[choiceIndex];
    const {text, icon} = this.choices[choiceKey];

    return {text, icon: icon.computer};
  }

  showChoice(text, icon) {
    const {iconPlacement, textPlacement} = this.computerChoiceDisplayElement;
    iconPlacement.textContent = icon;
    textPlacement.textContent = text;
  }
}
