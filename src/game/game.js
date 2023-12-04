class GravityGarden extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {}

  create() {
    carrotSpawning(this);
    createWorld(this);
  }

  update() {}
}
