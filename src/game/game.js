class GravityGarden extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    preloadCarrots(this);
    preloadWorld(this);
  }

    create ()
    {  
        this.rabbit = new Rabbit(this);
        this.cursors = this.input.keyboard.createCursorKeys();
        carrotSpawning(this);
        createWorld(this);

        this.energy_text = this.add.text(0, 10, this.rabbit.energy, { fontSize: '32px', fill: '#fff' });
    }

  update() {
    if (this.cursors.left.isDown) {
      this.rabbit.moveLeft();
    } else if (this.cursors.right.isDown) {
      this.rabbit.moveRight();
    }

        if (this.cursors.up.isDown || this.cursors.space.isDown)
        {
            this.rabbit.moveUp();
        }
        this.rabbit.updateEnergyText();
    
        if (this.rabbit.energy <= 0) {
            this.scene.restart();
        }

    }
}
