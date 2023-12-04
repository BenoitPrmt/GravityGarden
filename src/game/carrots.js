// gestion des carottes
function preloadCarrots(game) {
  game.load.image("carrot", "/assets/carrot.png");
  game.load.image("rotten_carrot", "/assets/rotten-carrot.png");
}
function carrotSpawning(game) {
  let randomRottenCarrot = Math.floor(Math.random() * 10);

  if (randomRottenCarrot === 5) {
    let rottenCarrot = game.physics.add.sprite(
      Math.random() * 800 + 100,
      0,
      "rotten_carrot"
    );
    rottenCarrot.setScale(0.5, 0.5);
    rottenCarrot.setGravityY(500);
  } else {
    let carrot = game.physics.add.sprite(
      Math.random() * 600 + 100,
      0,
      "carrot"
    );
    carrot.setScale(0.5, 0.5);
    carrot.setGravityY(500);
  }
}
function carrotDespawing(game) {}
