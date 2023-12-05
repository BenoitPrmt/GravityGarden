// gestion du lapin

class Rabbit {
    constructor(gameloop) {
        this.gameloop = gameloop;
        this.rabbit = this.gameloop.physics.add.sprite(400, 800, 'rabbit').setCollideWorldBounds(true).setBounce(0.2).setGravityY(600);
        this.energy = 100;
        this.gameloop.physics.add.collider(this.rabbit, this.gameloop.ground);
    }

    addEnergy(quantity) {
        this.energy += quantity;
    }

    removeEnergy(quantity) {
        this.energy -= quantity;
    }

    updateEnergyText() {
        this.gameloop.energy_text.setText(this.energy);
    }

    moveLeft() {
        this.rabbit.setVelocityX(-300);
        this.removeEnergy(0.5);
        this.rabbit.flipX = true;
    }

    moveRight() {
        this.rabbit.setVelocityX(300);
        this.removeEnergy(0.5);
        this.rabbit.flipX = false;
    }

    moveUp(jump) {
        this.rabbit.setVelocityY(-250);
        this.removeEnergy(1);
        jump.play();        
    }

    moveStop() {
        this.rabbit.setVelocityX(0);
    }

    
}