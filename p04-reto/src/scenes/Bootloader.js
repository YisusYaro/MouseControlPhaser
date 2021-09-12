import Utils from "./Utils.js"

export default class Bootloader extends Phaser.Scene {

  constructor(scene) {
    super({
      key: "Bootloader"
    });
    this.cards = ["imagen1", "imagen2", "imagen3", "imagen4", "imagen5", "imagen6",
      "imagen7", "imagen8", "imagen9", "imagen10", "imagen11", "imagen12"];
    this.selectedCards = [];
  }

  init() {

  }

  preload() {
    this.load.path = "src/scenes/assets/";
    this.load.image(this.cards);
    this.load.image('cardBack');
    this.load.image('escenario');
  }



  setCards(cardsMap) {

    let shuffledArrayCards = Utils.shuffleArray(this.cards);

    const xFirstCardFirstRow = 65;
    const xLastCardFisrtRow = 905;
    const yFisrtCardFirstRow = 70;
    const yFisrtCardLastRow = 360;
    const xStepCard = 120;
    const yStepCard = 145;

    let cardIterator = 0;

    for (let j = yFisrtCardFirstRow; j <= yFisrtCardLastRow; j += yStepCard) {
      for (let i = xFirstCardFirstRow; i <= xLastCardFisrtRow; i += xStepCard) {
        if (!cardsMap.get(shuffledArrayCards[cardIterator])) {
          cardsMap.set(shuffledArrayCards[cardIterator], this.add.image(i, j, shuffledArrayCards[cardIterator]));
          cardsMap.get(shuffledArrayCards[cardIterator]).setScale(0.4, 0.4);
          cardsMap.get(shuffledArrayCards[cardIterator]).setName(shuffledArrayCards[cardIterator]);

          cardsMap.set(shuffledArrayCards[cardIterator] + 'Back', this.add.image(i, j, 'cardBack').setInteractive());
          cardsMap.get(shuffledArrayCards[cardIterator] + 'Back').setScale(0.4, 0.4);
          cardsMap.get(shuffledArrayCards[cardIterator] + 'Back').setName(shuffledArrayCards[cardIterator] + 'Back');
          console.log(shuffledArrayCards[cardIterator] + 'Back');

          cardIterator++;
          if (cardIterator == 12) {
            cardIterator = 0;
            shuffledArrayCards = Utils.shuffleArray(shuffledArrayCards);
          }
        } else {
          cardsMap.set(shuffledArrayCards[cardIterator] + 'a', this.add.image(i, j, shuffledArrayCards[cardIterator]));
          cardsMap.get(shuffledArrayCards[cardIterator] + 'a').setScale(0.4, 0.4);
          cardsMap.get(shuffledArrayCards[cardIterator] + 'a').setName(shuffledArrayCards[cardIterator] + 'a');

          cardsMap.set(shuffledArrayCards[cardIterator] + 'aBack', this.add.image(i, j, 'cardBack').setInteractive());
          cardsMap.get(shuffledArrayCards[cardIterator] + 'aBack').setScale(0.4, 0.4);
          cardsMap.get(shuffledArrayCards[cardIterator] + 'aBack').setName(shuffledArrayCards[cardIterator] + 'aBack');

          cardIterator++;
        }
      }
    }

  }

  create() {

    //bg
    this.escenario = this.add.image(500, 250, "escenario");
    //cards
    this.mapCards = new Map();
    this.setCards(this.mapCards);

    //events
    const events = Phaser.Input.Events;

    this.input.on(events.GAMEOBJECT_DOWN, (pointer, gameObject) => {
      this.uncoverCard(gameObject.name);
    });

    this.input.on(events.GAMEOBJECT_OVER, (pointer, gameObject) => {
      this.animateHoverCard(gameObject.name);
    });

    this.input.on(events.GAMEOBJECT_OUT, (pointer, gameObject) => {
      this.desanimateHoverCard(gameObject.name);
    });
  }

  uncoverCard(name) {
    this.selectedCards.push(name);
    if(this.selectedCards.length<=2){
      this.mapCards.get(name).alpha = 0.0;
    }else{
      for(let card of this.selectedCards){
        this.mapCards.get(card).alpha = 1;
      }
      this.selectedCards = [];
      // this.selectedCards.push(name);
      // this.mapCards.get(name).alpha = 0.0;
    }
  }

  animateHoverCard(name) {
    this.mapCards.get(name).setScale(0.5, 0.5);
  }

  desanimateHoverCard(name) {
    this.mapCards.get(name).setScale(0.4, 0.4);
  }


  update(time, delta) {


  }

}
