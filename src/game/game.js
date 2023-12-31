class Preloader extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'preloader' });
    }

    preload ()
    {
      this.load.image('bg', 'src/assets/gravitygarden.png');
      this.load.image('buttonBG', 'src/assets/playbtn.png');
      preloadCarrots(this);
      preloadWorld(this);
      this.load.spritesheet('rabbit', 'src/assets/rabbit/rabbit-frame.png', { frameWidth: 100, frameHeight: 141 });
      this.load.audio('jump', 'src/assets/sounds/jump.wav');
      this.load.audio('ambient', 'src/assets/sounds/ambient.mp3');
      this.load.audio('eating', 'src/assets/sounds/eating.m4a');
      this.load.audio('golden_carrot', 'src/assets/sounds/golden-carrot.m4a');
      this.load.audio('belch', 'src/assets/sounds/belch.mp3');
      this.load.audio('villager', 'src/assets/sounds/villager.m4a');
      this.load.audio('gameover', 'src/assets/sounds/gameover.mp3');
      this.load.image('ayu', 'src/assets/gameover.png');
    }

    create ()
    {
        this.scene.start('mainmenu');
    }
}


class MainMenu extends Phaser.Scene {
  constructor ()
    {
      super({ key: 'mainmenu' });
      window.MENU = this;
    }

  create ()
    {
      this.add.image(370, 500, 'bg');

      const bg = this.add.image(400, 500, 'buttonBG');

      bg.setInteractive();

      bg.once('pointerup', function ()
      {
        this.scene.start('game');
      }, this);
    }
}

class GravityGarden extends Phaser.Scene {
  constructor() {
    super({ key: 'game'});
    window.GAME = this;
  }

    create ()
    {
        this.eating= this.sound.add('eating');
        this.belch= this.sound.add('belch');
        this.ambient= this.sound.add('ambient');
        this.golden_carrot= this.sound.add('golden_carrot');
        this.villager= this.sound.add('villager');
        this.gameover= this.sound.add('gameover');
        this.ambient.loop = true;
        this.ambient.play();
        this.jump = this.sound.add('jump');
        this.ground = createWorld(this);
        this.rabbit = new Rabbit(this);
        this.cursors = this.input.keyboard.createCursorKeys();
        
        this.carrotInterval = setInterval(() => {
            carrotSpawning(this, this.rabbit, this.ground, this.eating, this.belch, this.golden_carrot, this.villager);
        }, 1000);

        this.add.text(10, 10, 'Energy : ', { fontFamily: 'Games', fontSize: '30px', fill: '#FFFFFF'});
        this.energy_text = this.add.text(10, 45, this.rabbit.energy, { fontFamily: 'Games', fontSize: '35px', fill: '#FFFFFF'});
        this.add.text(10, 85, 'Score : ', { fontFamily: 'Games', fontSize: '30px', fill: '#FFFFFF'});
        this.score_text = this.add.text(10, 110, this.rabbit.score, { fontFamily: 'Games', fontSize: '35px', fill: '#FFFFFF'});
        this.add.text(525,950,  'GravityGarden ', { fontFamily: 'Games', fontSize: '30px', fill: '#FFFFFF'});
        this.rabbit.create()
    }

  update() {

    if (this.cursors.left.isDown) {
      this.rabbit.moveLeft();
    } else if (this.cursors.right.isDown) {
      this.rabbit.moveRight();
    }

    if ((this.cursors.up.isDown || this.cursors.space.isDown) && this.rabbit.rabbit.body.touching.down)
    {
        this.rabbit.moveUp(this.jump);
    } else if (this.cursors.down.isDown) {
        this.rabbit.moveStop();
    }

    
    this.rabbit.updateEnergyText();
    this.score_text.setText(this.rabbit.score);

    if (this.rabbit.energy <= 0 || this.rabbit.score < 0) {
        this.sound.stopAll();
        this.gameover.play();
        clearInterval(this.carrotInterval);
        this.scene.start('gameover');
    }

    }
}

class GameOver extends Phaser.Scene
{
  constructor ()
  {
    super({ key: 'gameover' });
    window.OVER = this;
  }

  create ()
  {
    this.add.image(370, 500, 'bg');

    this.add.sprite(400, 500, 'ayu');

    this.add.text(270, 600, 'Game Over - Click to restart', { font: '16px Courier', fill: '#ffffff' });

    this.input.once('pointerup', function (event)
    {

      this.scene.start('mainmenu');

    }, this);
  }
}