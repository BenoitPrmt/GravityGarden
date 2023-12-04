class GravityGarden extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    preloadCarrots(this);
    preloadWorld(this);
    
    this.load.spritesheet('rabbit', '/assets/rabbit.png', { frameWidth: 100, frameHeight: 141 });
  }

    create ()
    {  
        this.ground = createWorld(this);
        this.rabbit = new Rabbit(this);
        this.cursors = this.input.keyboard.createCursorKeys();
        
        setInterval(() => {
            carrotSpawning(this, this.rabbit, this.ground);
        }, 2000);

        this.add.text(0, 0, 'Energy: ', { fontSize: '32px', fill: '#000' })
        this.energy_text = this.add.text(0, 40, this.rabbit.energy, { fontSize: '32px', fill: '#000' });
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
    } else if (this.cursors.down.isDown) {
        this.rabbit.moveStop();
    }

    
    this.rabbit.updateEnergyText();

    if (this.rabbit.energy <= 0) {
        this.scene.restart();
    }

    }
}
