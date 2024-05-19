export default class Player {
  constructor(choices) {
    this.playerChoiceDisplayElement = {
      iconPlacement: document.getElementById('playerChoiceDisplayIcon'),
      textPlacement: document.getElementById('playerChoiceDisplayText'),
    };
    this.choices = choices;
    this.choice = null;
  }

  setChoice(choice) {
    this.choice = choice;
    const {text, icon} = this.getChoice(this.choice);
    this.showChoice(text, icon);
  }

  getChoice(choiceKey) {
    const {text, icon} = this.choices[choiceKey];
    return {text, icon: icon.player};
  }

  showChoice(text, icon) {
    const {iconPlacement, textPlacement} = this.playerChoiceDisplayElement;
    iconPlacement.textContent = icon;
    textPlacement.textContent = text;
  }
}
