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
    this.load.image(["imagen1", "imagen1a", "imagen2", "imagen2a", "imagen3", "imagen3a", "imagen4",
      "imagen4a", "imagen5", "imagen5a", "imagen6", "imagen6a", "imagen7", "imagen7a", "imagen8",
      "imagen8a", "imagen9", "imagen9a", "imagen10", "imagen10a", "imagen11", "imagen11a",
      "imagen12", "imagen12a", "escenario"]);
  }

  create() {

    //images
    this.escenario = this.add.image(500, 250, "escenario");
    this.imagen1 = this.add.image(65, 65, "imagen1").setInteractive();
    this.imagen1.setScale(0.4, 0.4);
    this.imagen1.setTint('0x000000');
    this.imagen1a = this.add.image(185, 70, "imagen1a").setInteractive();
    this.imagen1a.setScale(0.4, 0.4);
    this.imagen2 = this.add.image(305, 70, "imagen2").setInteractive();
    this.imagen2.setScale(0.4, 0.4);
    this.imagen2a = this.add.image(425, 70, "imagen2a").setInteractive();
    this.imagen2a.setScale(0.4, 0.4);
    this.imagen3 = this.add.image(545, 70, "imagen3").setInteractive();
    this.imagen3.setScale(0.4, 0.4);
    this.imagen3a = this.add.image(665, 70, "imagen3a").setInteractive();
    this.imagen3a.setScale(0.4, 0.4);
    this.imagen4 = this.add.image(785, 70, "imagen4").setInteractive();
    this.imagen4.setScale(0.4, 0.4);
    this.imagen4a = this.add.image(905, 70, "imagen4a").setInteractive();
    this.imagen4a.setScale(0.4, 0.4);
    this.imagen5 = this.add.image(65, 215, "imagen5").setInteractive();
    this.imagen5.setScale(0.4, 0.4);
    this.imagen5a = this.add.image(185, 215, "imagen5a").setInteractive();
    this.imagen5a.setScale(0.4, 0.4);
    this.imagen6 = this.add.image(305, 215, "imagen6").setInteractive();
    this.imagen6.setScale(0.4, 0.4);
    this.imagen6a = this.add.image(425, 215, "imagen6a").setInteractive();
    this.imagen6a.setScale(0.4, 0.4);
    this.imagen7 = this.add.image(545, 215, "imagen7").setInteractive();
    this.imagen7.setScale(0.4, 0.4);
    this.imagen7a = this.add.image(665, 215, "imagen7a").setInteractive();
    this.imagen7a.setScale(0.4, 0.4);
    this.imagen8 = this.add.image(785, 215, "imagen8").setInteractive();
    this.imagen8.setScale(0.4, 0.4);
    this.imagen8a = this.add.image(905, 215, "imagen8a").setInteractive();
    this.imagen8a.setScale(0.4, 0.4);
    this.imagen9 = this.add.image(65, 360, "imagen9").setInteractive();
    this.imagen9.setScale(0.4, 0.4);
    this.imagen9a = this.add.image(185, 360, "imagen9a").setInteractive();
    this.imagen9a.setScale(0.4, 0.4);
    this.imagen10 = this.add.image(305, 360, "imagen10").setInteractive();
    this.imagen10.setScale(0.4, 0.4);
    this.imagen10a = this.add.image(425, 360, "imagen10a").setInteractive();
    this.imagen10a.setScale(0.4, 0.4);
    this.imagen11 = this.add.image(545, 360, "imagen11").setInteractive();
    this.imagen11.setScale(0.4, 0.4);
    this.imagen11a = this.add.image(665, 360, "imagen11a").setInteractive();
    this.imagen11a.setScale(0.4, 0.4);
    this.imagen12 = this.add.image(785, 360, "imagen12").setInteractive();
    this.imagen12.setScale(0.4, 0.4);
    this.imagen12a = this.add.image(905, 360, "imagen12a").setInteractive();
    this.imagen12a.setScale(0.4, 0.4);


    //events
    const events = Phaser.Input.Events;

    this.imagen1.on(events.POINTER_DOWN, function () {
      this.clearTint();
    });

    this.imagen1.on(events.POINTER_MOVE, function () {
      console.log('la vida');
    });
  }


  update(time, delta) {


  }

}

export default Bootloader;