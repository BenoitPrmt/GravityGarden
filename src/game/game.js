class GravityGarden extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    preloadCarrots(this);
    preloadWorld(this);
    this.load.spritesheet('rabbit', 'src/assets/rabbit.png', { frameWidth: 100, frameHeight: 141 });
    this.load.audio('jump', 'src/assets/sounds/jump.wav');
    this.load.audio('ambient', 'src/assets/sounds/ambient.mp3');
    this.load.audio('eating', 'src/assets/sounds/eating.m4a');
    this.load.audio('belch', 'src/assets/sounds/belch.mp3');
    this.load.audio('villager', 'src/assets/sounds/villager.mp3')
  }

    create ()
    {
        this.eating= this.sound.add('eating');
        this.belch= this.sound.add('belch');
        this.ambient= this.sound.add('ambient');
        this.villager= this.sound.add('villager');
        this.ambient.loop = true;
        this.ambient.play();
        this.jump = this.sound.add('jump');
        this.ground = createWorld(this);
        this.rabbit = new Rabbit(this);
        this.cursors = this.input.keyboard.createCursorKeys();
        
        this.carrotInterval = setInterval(() => {
            carrotSpawning(this, this.rabbit, this.ground, this.eating, this.belch, this.villager);
        }, 1000);

        this.add.text(5, 5, 'Energy : ', { fontFamily: 'Games', fontSize: '30px', fill: '#FFFFFF'});
        this.energy_text = this.add.text(5, 40, this.rabbit.energy, { fontFamily: 'Games', fontSize: '35px', fill: '#FFFFFF'});

        this.add.text(5, 80, 'Score : ', { fontFamily: 'Games', fontSize: '30px', fill: '#FFFFFF'});
        this.score_text = this.add.text(5, 105, this.rabbit.score, { fontFamily: 'Games', fontSize: '35px', fill: '#FFFFFF'});
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
        this.scene.restart();
        this.sound.stopAll();
        clearInterval(this.carrotInterval);
    }

    }
}
