/**
Add videos here.
*/
var vidName = 'video/greentest_2.webm';
var panoName = 'images/eleVRoffice1.JPG';
var vidTitle = "Vidcon Test";



/** ignore this **/

var overlayVideo = new THREEx.ChromaKeyMaterial(vidName, 0xd432);

var panoramaChoices = [
  { // 0
    "name": vidTitle,
    "texture": panoName,
    "objects": [
    {
      "geometry": new THREE.PlaneGeometry(10, 20),
      "material": overlayVideo,
      "position": {x:-10,y:-8,z:6},
      "rotation": {x:0,y:2.2,z:0},
      "startFunction": overlayVideo.startVideo,
      "stopFunction": overlayVideo.stopVideo,
      "animateFunction": overlayVideo.update,
      "link": -1
    }
    ],
    link: -1
  }
]
