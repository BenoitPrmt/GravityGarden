const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 600 },
    },
  },
  scene: GravityGarden,
};

const game = new Phaser.Game(config);
