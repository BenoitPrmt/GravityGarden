const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'body',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 1000
},
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 600 },
    },
  },
  scene: [ Preloader, MainMenu, GravityGarden, GameOver ]
};

const game = new Phaser.Game(config);
