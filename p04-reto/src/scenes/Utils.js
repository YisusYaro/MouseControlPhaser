export default class Utils {

  static shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  //can be imagen12 imagen11 | imagen12A imagen1A| imagen8 imagen9A
  static compareCards(cardName1, cardName2){
    cardName1 = cardName1.replace('Back','');
    cardName2 = cardName2.replace('Back','');

    if(cardName1.includes('A')){
      cardName1 = cardName1.replace('A','');
    }
    if(cardName2.includes('A')){
      cardName2 = cardName2.replace('A','');
    }

    return cardName1==cardName2;
  }

  static millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  



}
