/**
Add videos here.
*/
var overlayVideo = new THREEx.ChromaKeyMaterial('video/greentest_2.webm', 0xd432);

var panoramaChoices = [
  { // 0
    "name": "The eleVR Office",
    "texture": 'images/eleVRoffice1.JPG',
    "objects": [
    {
      "geometry": new THREE.PlaneGeometry(12, 24),
      "material": overlayVideo,
      "position": {x:-10,y:-8,z:4},
      "rotation": {x:0,y:2.2,z:0},
      "startFunction": overlayVideo.startVideo,
      "stopFunction": overlayVideo.stopVideo,
      "animateFunction": overlayVideo.update,
      "link": 1
    },
    {
      "geometry": new THREE.PlaneBufferGeometry(1.4,4),
      "material": new THREE.MeshBasicMaterial( {transparent: true, opacity: 0.3, side: THREE.DoubleSide} ),
      "position": {x:-4,y:-0.5,z:-.9},
      "rotation": {x:0.55,y:1.7,z:-0.57},
      "link": 1
    }
    ],
    link: -1
  },
  { // 1
    "name": "By the Couches",
    "texture": 'images/mainByCouch.JPG',
    "objects": [
    {
      "geometry": new THREE.PlaneBufferGeometry(2.25,5.9),
      "material": new THREE.MeshBasicMaterial( {transparent: true, opacity: 0.3, side: THREE.DoubleSide} ),
      "position": {x:8,y:-0.7,z:-5.5},
      "rotation": {x:0,y:0,z:0},
      "link": 6
    },
    {
      "geometry": new THREE.PlaneBufferGeometry(1.8,5.2),
      "material": new THREE.MeshBasicMaterial( {transparent: true, opacity: 0.3, side: THREE.DoubleSide} ),
      "position": {x:-8,y:-0.8,z:-4},
      "rotation": {x:0,y:1.1,z:0},
      "link": 0
    },
    {
      "geometry": new THREE.PlaneBufferGeometry(3.3,1),
      "material": new THREE.MeshBasicMaterial( {transparent: true, opacity: 0.3, side: THREE.DoubleSide} ),
      "position": {x:-0.8,y:-0.9,z:5},
      "rotation": {x:4.7,y:0,z:0},
      "link": 2
    }
    ],
    link: -1
  },
  { // 2
    "name": "The Lunch Table",
    "texture": 'images/mainCloseKitchen.JPG',
    "objects": [
    {
      "geometry": new THREE.PlaneBufferGeometry(1.5,4.8),
      "material": new THREE.MeshBasicMaterial( {transparent: true, opacity: 0.3, side: THREE.DoubleSide} ),
      "position": {x:-9,y:-0.8,z:-0.8},
      "rotation": {x:0,y:1,z:0},
      "link": 3
    },
    {
      "geometry": new THREE.PlaneBufferGeometry(1.2,5.2),
      "material": new THREE.MeshBasicMaterial( {transparent: true, opacity: 0.3, side: THREE.DoubleSide} ),
      "position": {x:-9,y:-0.8,z:0.8},
      "rotation": {x:0,y:5.5,z:0},
      "link": 4
    },
    {
      "geometry": new THREE.PlaneBufferGeometry(1.2,3),
      "material": new THREE.MeshBasicMaterial( {transparent: true, opacity: 0.3, side: THREE.DoubleSide} ),
      "position": {x:-4,y:-0.3,z:7},
      "rotation": {x:0,y:5.5,z:0},
      "link": 5
    },
    {
      "geometry": new THREE.PlaneBufferGeometry(3.8,0.9),
      "material": new THREE.MeshBasicMaterial( {transparent: true, opacity: 0.3, side: THREE.DoubleSide} ),
      "position": {x:2.3,y:-1.3,z:5},
      "rotation": {x:0,y:2.5,z:0},
      "link": 1
    }
    ],
    link: -1
  },
  { // 3
    "name": "The Kitchen",
    "texture": 'images/byKitchen.jpg'
  },
  { // 4
    "name": "The Cold Room",
    "texture": 'images/coldRoom.JPG'
  },
  { // 5
    "name": "The Sound Room",
    "texture": 'images/soundRoom.JPG',
    "link": 4
  },
  { // 6
    "name": "The Tiny Room",
    "texture": 'images/mainByKitchen.JPG',
    "link": 1
  }
];
