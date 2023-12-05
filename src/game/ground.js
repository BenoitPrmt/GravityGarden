// gestion du terrain
function preloadWorld(gameloop) {
    gameloop.load.atlas('tiles', '/assets/platformer.png', '/assets/platformer.json');
    gameloop.load.image('bg', '/assets/background.png');
}

function createWorld(gameloop) {
    
    gameloop.add.image(400, 300, 'bg');

    const ground = gameloop.physics.add.staticGroup();
    
    ground.create(64, 936, 'tiles', '2');
    ground.create(64+128, 936, 'tiles', '2');
    ground.create(64+256, 936, 'tiles', '2');
    ground.create(64+384, 936, 'tiles', '2');
    ground.create(64+512, 936, 'tiles', '2');
    ground.create(64+640, 936, 'tiles', '2');
    ground.create(64+768, 936, 'tiles', '2');

    ground.refresh();
    
    // gameloop.physics.world.setBounds(0, -400, 800, 1000);
    
    return ground;
}