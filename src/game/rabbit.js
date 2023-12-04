// gestion du lapin

class Rabbit {
    constructor(gameloop) {
        this.gameloop = gameloop;
        this.rabbit = this.gameloop.physics.add.image(400, 300, 'rabbit');
        this.energy = 100;
    }

    create() {
        this.rabbit.setCollideWorldBounds(true);
        this.rabbit.setBounce(0.2);
        this.rabbit.setGravityY(100);

        let image = this.gameloop.add.image(400, 300, 'rabbit');
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