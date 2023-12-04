class GravityGarden extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.add.text(0, 0, 'Hello World');
    }

    create ()
    {
    }
}


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: GravityGarden
};

const game = new Phaser.Game(config);