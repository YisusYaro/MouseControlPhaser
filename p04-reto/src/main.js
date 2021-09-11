import Bootloader from "./scenes/Bootloader.js"

const config = {
  title: "Curso Phaser", //Nombre del juego (opcional)
  url: "http://google.es", //Dirección de la página del juego (opcional)
  version: "0.0.1", //Versión alfanumérica (opcional)
  type: Phaser.AUTO, //Tipo de renderizado (WEBGL, CANVAS, AUTO)
  // AUTO: busca primero WEBGL y si no está disponible
  // eligirá CANVAS
  
  width: 1000, //Ancho de pantalla del juego
  height: 500, //Alto de pantalla del juego
  parent: "contenedor", //Nombre del id del elemento <div> en el index.html
  // se refiere a dónde se pondrá el canvas o lienzo
  pixelArt: true, //Diseño con pixeles definidos (no borrosos)
  backgroundColor: "#34495e", //Color de fondo del canvas ()
  scene: [Bootloader],
  };


  const game = new Phaser.Game(config);