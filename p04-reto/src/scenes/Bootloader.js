import Utils from "./Utils.js"

export default class Bootloader extends Phaser.Scene {

  constructor(scene) {
    super({
      key: "Bootloader"
    });
    this.cards = ["imagen1", "imagen2", "imagen3", "imagen4", "imagen5", "imagen6",
      "imagen7", "imagen8", "imagen9", "imagen10", "imagen11", "imagen12"];
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
          cardsMap.set(shuffledArrayCards[cardIterator], this.add.image(i, j, shuffledArrayCards[cardIterator]).setInteractive());
          cardsMap.get(shuffledArrayCards[cardIterator]).setScale(0.4, 0.4);
          cardsMap.set(shuffledArrayCards[cardIterator]+'Back', this.add.image(i, j, 'cardBack').setInteractive());
          cardsMap.get(shuffledArrayCards[cardIterator]+'Back').setScale(0.4, 0.4);
          cardIterator++;
          if(cardIterator==12){
            cardIterator=0;
            shuffledArrayCards = Utils.shuffleArray(shuffledArrayCards);
          }
        } else {
          cardsMap.set(shuffledArrayCards[cardIterator] + 'a', this.add.image(i, j, shuffledArrayCards[cardIterator]).setInteractive());
          cardsMap.get(shuffledArrayCards[cardIterator] + 'a').setScale(0.4, 0.4);
          cardsMap.set(shuffledArrayCards[cardIterator]+'aBack', this.add.image(i, j, 'cardBack').setInteractive());
          cardsMap.get(shuffledArrayCards[cardIterator]+'aBack').setScale(0.4, 0.4);
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

    // //cardBack
    // this.cardBack = this.add.image(65,70, "cardBack");
    // this.cardBack.setScale(0.4, 0.4);

    // //events
    // const events = Phaser.Input.Events;

    // this.imagen1.on(events.POINTER_DOWN, function () {
    //   alert('vamo a voltear');
    // });

    // this.imagen1.on(events.POINTER_MOVE, function () {
    //   console.log('la vida');
    // });
  }


  update(time, delta) {


  }

}
