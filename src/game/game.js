class GravityGarden extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    preloadCarrots(this);
    preloadWorld(this);
    
    this.load.image('rabbit', '/assets/rabbit.png');
  }

    create ()
    {  

        this.ground = createWorld(this);
        console.log(this.ground);
        this.rabbit = new Rabbit(this);
        this.cursors = this.input.keyboard.createCursorKeys();
        
        setInterval(() => {
            let carrot = carrotSpawning(this);
            this.physics.add.collider(carrot, this.rabbit);
        }, 2000);

        // this.physics.add.collider(this.rabbit.rabbit, this.ground);

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
    } else if (this.cursors.down.isDown) {
        this.rabbit.moveStop();
    }

    
    this.rabbit.updateEnergyText();

    if (this.rabbit.energy <= 0) {
        this.scene.restart();
    }

    }
}
