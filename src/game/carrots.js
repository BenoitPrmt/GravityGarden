function preloadCarrots(game) {
  game.load.spritesheet("carrot", "/assets/carrot.png",{ frameWidth: 203, frameHeight: 319 });
  game.load.spritesheet("rotten_carrot", "/assets/rotten-carrot.png",{ frameWidth: 203, frameHeight: 319 });
}
function carrotSpawning(game, rabbit, ground) {
  let randomRottenCarrot = Math.floor(Math.random() * 10);

  if (randomRottenCarrot > 8 ) {
    let rottenCarrot = game.physics.add.sprite(
      Math.random() * 600 + 100,
      0,
      "rotten_carrot"
    ).setBounce(0.2).setCollideWorldBounds(true);

    rottenCarrot.setScale(0.5, 0.5);
    rottenCarrot.setGravityY(500); //change it to send to a function

    game.physics.add.collider(rottenCarrot, rabbit.rabbit, function() {
      rabbit.energy /= 2;
      rottenCarrot.destroy();
    });

    game.physics.add.collider(rottenCarrot, ground, function() {
      rottenCarrot.destroy();
    });

    return rottenCarrot;

  } else {
    let carrot = game.physics.add.sprite(
      Math.random() * 600 + 100,
      0,
      "carrot"
    ).setBounce(0.2).setCollideWorldBounds(true);

    carrot.setScale(0.5, 0.5);
    carrot.setGravityY(500);

    game.physics.add.collider(carrot, rabbit.rabbit, function() {
      rabbit.addEnergy(5);
      carrot.destroy();
    });

    game.physics.add.collider(carrot, ground, function() {
      carrot.destroy();
    });

    return carrot;
  }
}
//function for the gravity based on the level of the player