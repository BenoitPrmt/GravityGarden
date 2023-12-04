// gestion du lapin

class Rabbit {
    constructor(gameloop) {
        this.gameloop = gameloop;
        this.rabbit = this.gameloop.physics.add.sprite(400, 300, 'rabbit').setCollideWorldBounds(true).setBounce(0.2).setGravityY(100);
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
        this.rabbit.setVelocityX(-260);
        this.removeEnergy(1);
        this.rabbit.flipX = true;
    }

    moveRight() {
        this.rabbit.setVelocityX(260);
        this.removeEnergy(1);
        this.rabbit.flipX = false;
    }

    moveUp() {
        this.rabbit.setVelocityY(-150);
        this.removeEnergy(1);
    }

    moveStop() {
        this.rabbit.setVelocityX(0);
    }

    
}