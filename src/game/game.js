class GravityGarden extends Phaser.Scene {
  constructor() {
    super();
  }

    preload ()
    {
        print_hello(this);
    }

    create ()
    {  
        this.rabbit = new Rabbit(this);
        this.cursors = this.input.keyboard.createCursorKeys();
        carrotSpawning(this);
        createWorld(this);
    }

    update ()
    {

        if (this.cursors.left.isDown)
        {
            this.rabbit.moveLeft();
        }
        else if (this.cursors.right.isDown)
        {
            this.rabbit.moveRight();
        }

        if (this.cursors.up.isDown || this.cursors.space.isDown)
        {
            this.rabbit.moveUp();
        }

    }
}
