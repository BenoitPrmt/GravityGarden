// gestion du lapin

class Rabbit {
    constructor(gameloop) {
        this.gameloop = gameloop;
        this.rabbit = this.gameloop.physics.add.image(400, 300, 'block');
    }

    preload() {
        this.gameloop.load.spritesheet('rabbit', '../../assets/rabbit.png', { frameWidth: 32, frameHeight: 32 });
    }

    create() {
        this.rabbit = this.gameloop.physics.add.sprite(100, 450, 'rabbit');
        this.rabbit.setCollideWorldBounds(true);
        this.rabbit.setBounce(0.2);
        this.rabbit.setGravityY(600);
    }

    update() {
        const cursors = this.gameloop.input.keyboard.createCursorKeys();
        if (cursors.left.isDown)
        {
            this.rabbit.setVelocityX(-160);
            this.rabbit.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            this.rabbit.setVelocityX(160);
            this.rabbit.anims.play('right', true);
        }
        else
        {
            this.rabbit.setVelocityX(0);
            this.rabbit.anims.play('turn');
        }
        if (cursors.up.isDown && this.rabbit.body.touching.down)
        {
            this.rabbit.setVelocityY(-330);
        }
    }

    moveLeft() {
        this.rabbit.setVelocityX(-160);

    }

    moveRight() {
        this.rabbit.setVelocityX(160);

    }

    moveUp() {
        this.rabbit.setVelocityY(-330);

    }

    
}