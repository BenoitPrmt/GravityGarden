function preloadCarrots(game) {
  game.load.spritesheet("carrot", "src/assets/carrot.png",{ frameWidth: 203, frameHeight: 319 });
  game.load.spritesheet("rotten_carrot", "src/assets/rotten-carrot.png",{ frameWidth: 203, frameHeight: 319 });
  game.load.spritesheet("golden_carrot", "src/assets/golden-carrot.png", { frameWidth: 203, frameHeight: 319 });
}
function carrotSpawning(game, rabbit, ground, eating, belch, golden_carrot, villager) {
  let randomRottenCarrot = Math.floor(Math.random() * 20);

  if (randomRottenCarrot > 16 ) {
    let rottenCarrot = game.physics.add.sprite(
      Math.random() * 600 + 100,
      0,
      "rotten_carrot"
    ).setBounce(0.2).setCollideWorldBounds(true);

    rottenCarrot.setScale(0.5, 0.5);
    carrotGravity(rottenCarrot, rabbit.score); //change it to send to a function

    game.physics.add.collider(rottenCarrot, rabbit.rabbit, function() {
      belch.play();
      rabbit.energy /= Math.floor(2);
      rabbit.score -= 10;
      rottenCarrot.destroy();
    });

    game.physics.add.collider(rottenCarrot, ground, function() {
      rottenCarrot.destroy();
    });

    return rottenCarrot;
  } else if (randomRottenCarrot == 15) {
    let goldenCarrot = game.physics.add.sprite(
      Math.random() * 600 + 100,
      0,
      "golden_carrot"
    ).setBounce(0.2).setCollideWorldBounds(true);

    goldenCarrot.setScale(0.5, 0.5);
    carrotGravity(goldenCarrot, rabbit.score)

    game.physics.add.collider(goldenCarrot, rabbit.rabbit, function() {
      rabbit.addEnergy(50);
      rabbit.score += 50;
      golden_carrot.play();
      goldenCarrot.destroy();
    });

    game.physics.add.collider(goldenCarrot, ground, function() {
      villager.play();
      goldenCarrot.destroy();
    });

    return goldenCarrot;

  } else {
    let carrot = game.physics.add.sprite(
      Math.random() * 600 + 100,
      0,
      "carrot"
    ).setBounce(0.2).setCollideWorldBounds(true);

    carrot.setScale(0.5, 0.5);
    carrotGravity(carrot, rabbit.score)

    game.physics.add.collider(carrot, rabbit.rabbit, function() {
      rabbit.addEnergy(10);
      rabbit.score += 10;
      eating.play();
      carrot.destroy();
    });

    game.physics.add.collider(carrot, ground, function() {
      villager.play();
      rabbit.score -= 10;
      carrot.destroy();
    });

    return carrot;
  }
}
function carrotGravity(carrot, score) {
  if (score === 0)
  {
  carrot.setGravityY(400)
  }
  carrot.setGravityY( score * 5)
}
//function for the gravity based on the level of the player