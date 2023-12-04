// gestion du terrain
function preloadWorld(gameloop) {
    gameloop.load.atlas('tiles', 'assets/sets/platformer.png', 'assets/sets/platformer.json');
    gameloop.load.image('bg', 'assets/sets/background.png');
}

function createWorld(gameloop) {
    const ground = gameloop.physics.add.staticGroup();
    ground.create(64, 536, 'tiles', '2');
    ground.create(64+128, 536, 'tiles', '2');
    ground.create(64+256, 536, 'tiles', '2');
    ground.create(64+384, 536, 'tiles', '2');
    ground.create(64+512, 536, 'tiles', '2');
    ground.create(64+640, 536, 'tiles', '2');
    ground.create(64+768, 536, 'tiles', '2');
    gameloop.add.image(400, 300, 'bg');
}