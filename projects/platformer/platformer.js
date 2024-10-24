$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    // First layer //
    createPlatform(555, 680, 200, 200);
    createPlatform(1300, 520, 400, 400);
    createPlatform(1250, 620, 100, 10);
    createPlatform(100, 530, 1000, 25);
    createPlatform(100, 0, 10, 530);
    //hallway obstacle layer//
    createPlatform(520, 725, 300, 100);
    createPlatform(150, 725, 150, 100);
    createPlatform(170, 700, 100, 40);
    createPlatform(270, 535, 220, 40);
    createPlatform(280, 535, 160, 60);
    createPlatform(480, 535, 220, 40);
    createPlatform(520, 535, 160, 60);
    createPlatform(1060, 535, 20, 60);
    createPlatform(1050, 535, 40, 30);
    createPlatform(825, 535, 160, 40);
    //second layer//
    createPlatform(300, 280, 1300, 25);
    createPlatform(270, 300, 100, 15);
    createPlatform(250, 310, 100, 15);
    createPlatform(100, 500, 300, 50);
    createPlatform(100, 440, 150, 110);
  
//last ramp//
createPlatform(500, 265, 1200, 25);
createPlatform(580, 250, 1200, 25);
createPlatform(1170,230,100,50)
createPlatform(1200,220,40,60)

//Tunnel tweaks//
createPlatform(520,305,430,15);
createPlatform(560,320,300,25);
createPlatform(520,515,430,15);
createPlatform(540,500,350,25);

    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    createCollectable('DragonBall1', 200, 600, 0);
    createCollectable('DragonBall2', 450, 580, 0);
    createCollectable('DragonBall3',500,600, 0);
    createCollectable('DragonBall4',700,570, 0);
    createCollectable('DragonBall5',920,430, 0);
    createCollectable('DragonBall6',500,440, 0);
    createCollectable('DragonBall7',1200,180, 0);

    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon("left", 590, 2200, 220, 220);
 createCannon("right", 480, 5000, 300, 5)
 createCannon("right", 500, 5000, 300, 5)
 createCannon("right", 520, 5000, 300, 5)
 createCannon("top", 1450, 1, 20, 70)
 createCannon("bottom", 1330, 1, 20, 70)
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
var collectableList = {
  database: { image: "images/collectables/database.png" },
  diamond: { image: "images/collectables/diamond-head.png" },
  grace: { image: "images/collectables/grace-head.png" },
  kennedi: { image: "images/collectables/kennedi-head.png" },
  max: { image: "images/collectables/max-head.png" },
  steve: { image: "images/collectables/steve-head.png" },
  DragonBall1: { image: "images/collectables/DragonBall1.png"},
  DragonBall2: { image: "images/collectables/DragonBall2.png"},
  DragonBall3: { image: "images/collectables/DragonBall3.png"},
  DragonBall4: { image: "images/collectables/DragonBall4.png"},
  DragonBall5: { image: "images/collectables/DragonBall5.png"},
  DragonBall6: { image: "images/collectables/DragonBall6.png"},
  DragonBall7: { image: "images/collectables/DragonBall7.png"}
};
