// gestion du lapin

class Rabbit {
    constructor(gameloop) {
        this.gameloop = gameloop;
        this.rabbit = this.gameloop.physics.add.sprite(400, 800, 'rabbit').setCollideWorldBounds(true).setBounce(0.2).setGravityY(600);
        this.rabbit.setPushable(false);
        this.energy = 100;
        this.score = 0;
        this.gameloop.physics.add.collider(this.rabbit, this.gameloop.ground);

        // this.anims.create({
        //     key: 'left',
        //     frames: this.anims.generateFrameNumbers('rabbit', { start: 0, end: 1 }),
        //     frameRate: 10,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'right',
        //     frames: this.anims.generateFrameNumbers('rabbit', { start: 2, end: 3 }),
        //     frameRate: 10,
        //     repeat: -1
        // });
    }

    addEnergy(quantity) {
        this.energy += quantity;
    }

    removeEnergy(quantity) {
        this.energy -= quantity;
    }

    addScore(quantity) {
        this.score += quantity;
    }

    updateEnergyText() {
        this.gameloop.energy_text.setText(Math.floor(this.energy));
    }

    moveLeft() {
        if (this.rabbit.x < 10) {
            this.rabbit.setVelocityX(0);
            return;
        } else {
            this.rabbit.setVelocityX(-700);
            this.removeEnergy(0.5);
            this.rabbit.flipX = true;
        }
    }

    moveRight() {
        if (this.rabbit.x > 790) {
            this.rabbit.setVelocityX(0);
            return;
        } else {
            this.rabbit.setVelocityX(700);
            this.removeEnergy(0.5);
            this.rabbit.flipX = false;
        }
    }

    moveUp(jump) {
        this.rabbit.setVelocityY(-300);
        this.removeEnergy(1);
        jump.play();        
    }

    moveStop() {
        this.rabbit.setVelocityX(0);
    }

    
}