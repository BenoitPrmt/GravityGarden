class GravityGarden extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    preloadCarrots(this);
    preloadWorld(this);
  }

  create() {
    this.rabbit = new Rabbit(this);
    this.cursors = this.input.keyboard.createCursorKeys();
    createWorld(this);
    carrotSpawning(this);
  }

  update() {
    if (this.cursors.left.isDown) {
      this.rabbit.moveLeft();
    } else if (this.cursors.right.isDown) {
      this.rabbit.moveRight();
    }

    if (this.cursors.up.isDown || this.cursors.space.isDown) {
      this.rabbit.moveUp();
    }
  }
}
