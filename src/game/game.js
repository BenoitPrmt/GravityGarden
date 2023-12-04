class GravityGarden extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    preloadCarrots(this);
    preloadWorld(this);
  }

  create() {
    createWorld(this);
    carrotSpawning(this);
  }

  update() {}
}
