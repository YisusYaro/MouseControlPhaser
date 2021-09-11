class Bootloader extends Phaser.Scene {


  constructor(scene) {
    super({
      key: "Bootloader" 
    });

  }

  init() {

  }

  preload() {
    this.load.path = "src/scenes/assets/";
    this.load.image('bg', 'bg.png');
    this.load.image('demon', 'demon.png');
    this.load.image('knight', 'knight.png');
  }

  getDistance(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
  }

  getTheOtherCharacter(character){
    if(character===this.demon){
      return this.knight;
    }
    else{
      return this.demon;
    }
  }


  listenCursor(character, characterCursor) {
    if (characterCursor.left.isDown) {
      if(this.getDistance(character.x-1, character.y, this.getTheOtherCharacter(character).x, this.getTheOtherCharacter(character).y)>=28){
        character.x--;
        character.flipX = true;
      }
    }
    if (characterCursor.right.isDown) {
      if(this.getDistance(character.x+1, character.y, this.getTheOtherCharacter(character).x, this.getTheOtherCharacter(character).y)>=28){
        character.x++;
        character.flipX = false;
      }
    }
    if (characterCursor.up.isDown) {
      if(this.getDistance(character.x, character.y-1, this.getTheOtherCharacter(character).x, this.getTheOtherCharacter(character).y)>=28){
        character.y--;
      }
    }
    if (characterCursor.down.isDown) {
      if(this.getDistance(character.x, character.y+1, this.getTheOtherCharacter(character).x, this.getTheOtherCharacter(character).y)>=28){
        character.y++;
      }
    }
  }

  setKeyboard() {
    const keyCodes = Phaser.Input.Keyboard.KeyCodes;
    this.demonCursor = this.input.keyboard.createCursorKeys();
    this.knightCursor = this.input.keyboard.addKeys(
      {
        up: keyCodes.W,
        down: keyCodes.S,
        left: keyCodes.A,
        right: keyCodes.D
      });

    this.demonCombo = this.input.keyboard.createCombo(
      [keyCodes.B, keyCodes.N, keyCodes.M],
      { resetOnMatch: true }
    );

    this.knightCombo = this.input.keyboard.createCombo(
      [keyCodes.T, keyCodes.Y, keyCodes.U],
      { resetOnMatch: true }
    );

    this.input.keyboard.on('keycombomatch', (keyCombo) => {
      //event for demonCombo
      if (this.arraysAreIdentical([keyCodes.B, keyCodes.N, keyCodes.M], keyCombo.keyCodes)) {
        this.setTintCharacter(this.demon);
      }
      //event for knightCombo
      if (this.arraysAreIdentical([keyCodes.T, keyCodes.Y, keyCodes.U], keyCombo.keyCodes)) {
        this.setTintCharacter(this.knight);
      }
    });
  }

  async setTintCharacter(character) {
    character.setTint('0xff0000');
    await this.sleep(200);
    character.setTint('0xffffff');
    await this.sleep(200);
    character.setTint('0xff0000');
    await this.sleep(100);
    character.setTint('0xffffff');
    await this.sleep(100);
    character.setTint('0xff0000');
    await this.sleep(50);
    character.setTint('0xffffff');
    await this.sleep(50);
    character.setTint('0xff0000');
    await this.sleep(10);
    character.setTint('0xffffff');
    await this.sleep(10);
    character.setTint('0xff0000');
    await this.sleep(10);
    character.setTint('0xffffff');
    await this.sleep(10);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  arraysAreIdentical(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (var i = 0, len = arr1.length; i < len; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  create() {

    //keyboard
    this.setKeyboard();
    //bg
    this.bg = this.add.image(this.scale.width / 2, this.scale.height / 2, 'bg');
    //characters
    this.demon = this.add.image(100, 250, 'demon');
    this.demon.scale = 2;

    this.knight = this.add.image(200, 250, 'knight');
    this.knight.scale = 2;
  }

  update(time, delta) {
    this.listenCursor(this.demon, this.demonCursor);
    this.listenCursor(this.knight, this.knightCursor);
  }


}

export default Bootloader;