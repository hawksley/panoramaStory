/**
Add videos here.
*/
var panoramaChoices = [
  { // 0
    "name": "Room 1",
    "texture": 'images/kirby-cove-1-small.jpg',
    "audio": 'audio/Fibonacci Waltz.mp3',
    "objects": [
      {
        "texture": new THREEx.DynamicTexture(512,256).clear()
        .drawText("Exit Room 1", undefined, 64, "#ffffff", "normal 40px Helvetica")
        .drawText("Go Right", undefined, 128, "#ffffff", "normal 40px Helvetica")
        .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
        .texture,
        "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
        "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
        "position": {x:10,y:0,z:-10},
        "rotation": {x:0,y:-0.5,z:0},
        "link": 1
      },
      {
        "texture": new THREEx.DynamicTexture(512,256).clear()
        .drawText("Exit Room 1", undefined, 64, "#ffffff", "normal 40px Helvetica")
        .drawText("Go Left", undefined, 128, "#ffffff", "normal 40px Helvetica")
        .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
        .texture,
        "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
        "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
        "position": {x:-10,y:0,z:-10},
        "rotation": {x:0,y:0.5,z:0},
        "link": 4
      },
      {
        "texture": new THREEx.DynamicTexture(512,256).clear()
        .drawText("Exit Room 1", undefined, 64, "#ffffff", "normal 40px Helvetica")
        .drawText("Go Forward", undefined, 128, "#ffffff", "normal 40px Helvetica")
        .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
        .texture,
        "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
        "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
        "position": {x:0,y:0,z:-10},
        "rotation": {x:0,y:0,z:0},
        "link": 5
      }
    ],
    "link": -1
  },
  { // 1
    "name": "Room 2",
    "texture": 'images/sky.jpg',
    "audio": 'audio/Sad Pi.mp3',
    "objects": [
      {
        "texture": new THREEx.DynamicTexture(512,256).clear()
            .drawText("Game Over.", undefined, 64, "#ffffff", "normal 50px Helvetica")
            .drawText("You have been eaten by", undefined, 128, "#ffffff", "normal 40px Helvetica")
            .drawText("the WUMPUS.", undefined, 192, "#ffffff", "normal 40px Helvetica")
            .texture,
        "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
        "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
        "position": {x:0,y:0,z:-10},
        "rotation": {x:0,y:0,z:0},
        "link": -1
      }
    ],
    "link": -1
  },
  { // 2
    "name": "Room 3",
    "texture": 'images/utrecht-canal.jpg',
    "audio": 'audio/Fibonacci Waltz.mp3',
    "objects": [
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 3", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Right", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:10,y:0,z:-10},
      "rotation": {x:0,y:-0.5,z:0},
      "link": 1
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 3", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Left", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:-10,y:0,z:-10},
      "rotation": {x:0,y:0.5,z:0},
      "link": 7
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 3", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Forward", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:0,y:0,z:-10},
      "rotation": {x:0,y:0,z:0},
      "link": 3
    }
    ]
  },
  { // 3
    "name": "Room 4",
    "texture": 'images/video1.jpg',
    "audio": 'audio/Fibonacci Waltz.mp3',
    "objects": [
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 4", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Right", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:10,y:0,z:-10},
      "rotation": {x:0,y:-0.5,z:0},
      "link": 2
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 4", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Left", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:-10,y:0,z:-10},
      "rotation": {x:0,y:0.5,z:0},
      "link": 4
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 4", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Forward", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:0,y:0,z:-10},
      "rotation": {x:0,y:0,z:0},
      "link": 8
    }
    ],
    "link": -1
  },
  { // 4
    "name": "Room 5",
    "texture": 'images/mosaic-math-art.jpg',
    "audio": 'audio/Fibonacci Waltz.mp3',
    "objects": [
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 5", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Right", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:10,y:0,z:-10},
      "rotation": {x:0,y:-0.5,z:0},
      "link": 0
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 5", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Left", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:-10,y:0,z:-10},
      "rotation": {x:0,y:0.5,z:0},
      "link": 9
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 5", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Forward", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:0,y:0,z:-10},
      "rotation": {x:0,y:0,z:0},
      "link": 3
    }
    ],
    "link": -1
  },
  { // 5
    "name": "Room 6",
    "texture": 'images/kirby-cove-1-small.jpg',
    "audio": 'audio/Fibonacci Waltz.mp3',
    "objects": [
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 6", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Right", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:10,y:0,z:-10},
      "rotation": {x:0,y:-0.5,z:0},
      "link": 0
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 6", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Left", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:-10,y:0,z:-10},
      "rotation": {x:0,y:0.5,z:0},
      "link": 10
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 6", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Forward", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:0,y:0,z:-10},
      "rotation": {x:0,y:0,z:0},
      "link": 14
    }
    ],
    "link": -1
  },
  { // 6
    "name": "Room 7",
    "texture": 'images/mosaic-math-art.jpg',
    "audio": 'audio/Fibonacci Waltz.mp3',
    "objects": [
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 7", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Right", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:10,y:0,z:-10},
      "rotation": {x:0,y:-0.5,z:0},
      "link": 1
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 7", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Left", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:-10,y:0,z:-10},
      "rotation": {x:0,y:0.5,z:0},
      "link": 13
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 7", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Forward", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:0,y:0,z:-10},
      "rotation": {x:0,y:0,z:0},
      "link": 14
    }
    ],
    "link": -1
  },
  { // 7
    "name": "Room 8",
    "video": {
      "src": 'video/therelaxatron.webm',
      "height": 512,
      "width": 1024
    },
    "objects": [
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Congratulations!", undefined, 64, "#ffffff", "normal 50px Helvetica")
      .drawText("You have found the exit", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("and avoided the Wumpus", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:0,y:0,z:-10},
      "rotation": {x:0,y:0,z:0},
      "link": -1
    }
    ],
    "link": -1
  },
  { // 8
    "name": "Room 9",
    "texture": 'images/stars.jpg',
    "audio": 'audio/Fibonacci Waltz.mp3',
    "objects": [
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Game Over.", undefined, 64, "#ffffff", "normal 50px Helvetica")
      .drawText("You have fallen into", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("a bottomless pit.", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:0,y:0,z:-10},
      "rotation": {x:0,y:0,z:0},
      "link": -1
    }
    ],
    "link": -1
  },
  { // 9
    "name": "Room 10",
    "texture": 'images/kirby-cove-1-small.jpg',
    "audio": 'audio/Fibonacci Waltz.mp3',
    "objects": [
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 10", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Right", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:10,y:0,z:-10},
      "rotation": {x:0,y:-0.5,z:0},
      "link": 10
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 10", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Left", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:-10,y:0,z:-10},
      "rotation": {x:0,y:0.5,z:0},
      "link": 16
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 10", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Forward", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:0,y:0,z:-10},
      "rotation": {x:0,y:0,z:0},
      "link": 4
    }
    ],
    "link": -1
  },
  { // 10
    "name": "Room 11",
    "texture": 'images/video1.jpg',
    "audio": 'audio/Fibonacci Waltz.mp3',
    "objects": [
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 11", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Right", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:10,y:0,z:-10},
      "rotation": {x:0,y:-0.5,z:0},
      "link": 5
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 11", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Left", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:-10,y:0,z:-10},
      "rotation": {x:0,y:0.5,z:0},
      "link": 18
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 11", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Forward", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:0,y:0,z:-10},
      "rotation": {x:0,y:0,z:0},
      "link": 9
    }
    ],
    "link": -1
  },
  { // 11
    "name": "Room 12",
    "texture": 'images/denver-botanical-5-small.jpg',
    "audio": 'audio/Fibonacci Waltz.mp3',
    "objects": [
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 12", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Right", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:10,y:0,z:-10},
      "rotation": {x:0,y:-0.5,z:0},
      "link": 18
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 12", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Left", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:-10,y:0,z:-10},
      "rotation": {x:0,y:0.5,z:0},
      "link": 14
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 12", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Forward", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:0,y:0,z:-10},
      "rotation": {x:0,y:0,z:0},
      "link": 12
    }
    ],
    "link": -1
  },
  { // 12
    "name": "Room 13",
    "texture": 'images/utrecht-canal.jpg',
    "audio": 'audio/Fibonacci Waltz.mp3',
    "objects": [
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 1", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Right", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:10,y:0,z:-10},
      "rotation": {x:0,y:-0.5,z:0},
      "link": 13
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 1", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Left", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:-10,y:0,z:-10},
      "rotation": {x:0,y:0.5,z:0},
      "link": 19
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 1", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Forward", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:0,y:0,z:-10},
      "rotation": {x:0,y:0,z:0},
      "link": 11
    }
    ],
    "link": -1
  },
  { // 13
    "name": "Room 14",
    "texture": 'images/kirby-cove-1-small.jpg',
    "audio": 'audio/Fibonacci Waltz.mp3',
    "objects": [
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 14", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Right", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:10,y:0,z:-10},
      "rotation": {x:0,y:-0.5,z:0},
      "link": 6
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 14", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Left", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:-10,y:0,z:-10},
      "rotation": {x:0,y:0.5,z:0},
      "link": 7
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 14", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Forward", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:0,y:0,z:-10},
      "rotation": {x:0,y:0,z:0},
      "link": 12
    }
    ],
    "link": -1
  },
  { // 14
    "name": "Room 15",
    "texture": 'images/mosaic-math-art.jpg',
    "audio": 'audio/Fibonacci Waltz.mp3',
    "objects": [
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 15", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Right", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:10,y:0,z:-10},
      "rotation": {x:0,y:-0.5,z:0},
      "link": 5
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 15", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Left", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:-10,y:0,z:-10},
      "rotation": {x:0,y:0.5,z:0},
      "link": 6
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 15", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Forward", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:0,y:0,z:-10},
      "rotation": {x:0,y:0,z:0},
      "link": 11
    }
    ],
    "link": -1
  },
  { // 15
    "name": "Room 16",
    "texture": 'images/video1.jpg',
    "audio": 'audio/Fibonacci Waltz.mp3',
    "objects": [
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 16", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Right", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:10,y:0,z:-10},
      "rotation": {x:0,y:-0.5,z:0},
      "link": 7
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 16", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Left", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:-10,y:0,z:-10},
      "rotation": {x:0,y:0.5,z:0},
      "link": 8
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 16", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Forward", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:0,y:0,z:-10},
      "rotation": {x:0,y:0,z:0},
      "link": 19
    }
    ],
    "link": -1
  },
  { // 16
    "name": "Room 17",
    "texture": 'images/denver-botanical-5-small.jpg',
    "audio": 'audio/Fibonacci Waltz.mp3',
    "objects": [
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 17", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Right", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:10,y:0,z:-10},
      "rotation": {x:0,y:-0.5,z:0},
      "link": 9
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 17", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Left", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:-10,y:0,z:-10},
      "rotation": {x:0,y:0.5,z:0},
      "link": 17
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 17", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Forward", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:0,y:0,z:-10},
      "rotation": {x:0,y:0,z:0},
      "link": 8
    }
    ],
    "link": -1
  },
  { // 17
    "name": "Room 18",
    "texture": 'images/stars.jpg',
    "audio": 'audio/Fibonacci Waltz.mp3',
    "objects": [
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Game Over.", undefined, 64, "#ffffff", "normal 50px Helvetica")
      .drawText("You have fallen into", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("a bottomless pit.", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:0,y:0,z:-10},
      "rotation": {x:0,y:0,z:0},
      "link": -1
    }
    ],
    "link": -1
  },
  { // 18
    "name": "Room 19",
    "texture": 'images/kirby-cove-1-small.jpg',
    "audio": 'audio/Fibonacci Waltz.mp3',
    "objects": [
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 19", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Right", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:10,y:0,z:-10},
      "rotation": {x:0,y:-0.5,z:0},
      "link": 10
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 19", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Left", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:-10,y:0,z:-10},
      "rotation": {x:0,y:0.5,z:0},
      "link": 17
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 19", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Forward", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:0,y:0,z:-10},
      "rotation": {x:0,y:0,z:0},
      "link": 11
    }
    ],
    "link": -1
  },
  { // 19
    "name": "Room 20",
    "texture": 'images/mosaic-math-art.jpg',
    "audio": 'audio/Fibonacci Waltz.mp3',
    "objects": [
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 20", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Right", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:10,y:0,z:-10},
      "rotation": {x:0,y:-0.5,z:0},
      "link": 12
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 20", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Left", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:-10,y:0,z:-10},
      "rotation": {x:0,y:0.5,z:0},
      "link": 15
    },
    {
      "texture": new THREEx.DynamicTexture(512,256).clear()
      .drawText("Exit Room 20", undefined, 64, "#ffffff", "normal 40px Helvetica")
      .drawText("Go Forward", undefined, 128, "#ffffff", "normal 40px Helvetica")
      .drawText("Escape the Maze!", undefined, 192, "#ffffff", "normal 40px Helvetica")
      .texture,
      "geometry": new THREE.PlaneBufferGeometry( 10, 5 ),
      "material": new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
      "position": {x:0,y:0,z:-10},
      "rotation": {x:0,y:0,z:0},
      "link": 17
    }
    ],
    "link": -1
  }
];
