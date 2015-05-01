window.WorldNav = (function() {
  function WorldNav() {
    var self = this;

    var focus = {
      object: -1,
      start: 0,
    }

		self.selectedPano = -1; // start with instructions

    self.navContainer = document.getElementById("nav");
		self.audio = document.getElementById("sound");
		self.video = document.getElementById("movie");

    /*
    Setup three.js WebGL renderer
    */
    self.renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } );
    self.renderer.setClearColor(0x000000, 0);
    self.navContainer.appendChild(self.renderer.domElement);

    /*
    Create a three.js scene
    */
    self.scene = new THREE.Scene();

    /*
    Create a three.js camera
    */
    self.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );

    self.cursor = new VRCursor();
    self.cursor.ready.then(function() {
    	self.scene.add(self.cursor.layout);
    	self.cursor.init(self.renderer.domElement, self.camera, self.scene);
    	self.cursor.enable();
    });

    /*
    Apply VR headset positional data to camera.
    */
    self.controls = new THREE.VRControls( self.camera );

    /*
    Apply VR stereo rendering to renderer
    */
    self.effect = new THREE.VREffect( self.renderer );
    self.effect.setSize( window.innerWidth, window.innerHeight );

    /*
    Create 3d objects
    */
    var backgroundGeometry   = new THREE.SphereGeometry(200, 32, 32);
    var backgroundMaterial  = new THREE.MeshBasicMaterial();
    self.backgroundMesh = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
		self.newBackgroundMesh = new THREE.Mesh(backgroundGeometry, backgroundMaterial);

		self.objects = [];

		self.dynamicTexture	= new THREEx.DynamicTexture(512,512);
		self.dynamicTexture.context.font	= "normal 25px Helvetica";
		self.dynamicTexture.clear().drawText("Press 'space'", undefined, 256, "rgb(255,255,255)");
		var geometry = new THREE.PlaneBufferGeometry( 20, 20 );
		var material = new THREE.MeshBasicMaterial( {color: 0xffffff, transparent: true, map	: self.dynamicTexture.texture, side: THREE.DoubleSide} );
		self.titleMesh = new THREE.Mesh( geometry, material );
		self.titleMesh.position.z = -10;
		self.titleMesh.position.x = 0;
		self.scene.add(self.titleMesh);

		self.lastSelectedObject = null;

		self.transition = {
			frameCount: 200, //bigger than finish time to start
			growTime: 55,
			finishTime: 60
		}

    self.resetWorld = function() {
      self.transition.frameCount = 200;

      self.scene.remove(self.backgroundMesh);
      for (var i=0; i<self.objects.length; i++) {
        var objectData = panoramaChoices[self.selectedPano].objects[i];
        if (typeof objectData.stopFunction !== 'undefined') {
          objectData.stopFunction();
        }
        self.scene.remove(self.objects[i]);
      }

      self.objects = [];

      self.selectedPano = -1;

      self.dynamicTexture.clear().drawText("Press 'space'", undefined, 256, "rgb(255,255,255)");
      self.titleMesh.position.z = -10;
      self.titleMesh.position.x = 0;
      self.titleMesh.position.y = 0;
      self.titleMesh.rotation.z = 0;
      self.titleMesh.rotation.x = 0;
      self.titleMesh.rotation.y = 0;
      self.scene.add(self.titleMesh);
    }

		self.growWorld = function() {
      var startPano = self.selectedPano;

      // select pano.
      // If object has link attribute, go to link, else go to next slide
      if (self.cursor.enabled) {
        self.cursor.updatePosition();
        if (self.cursor.objectMouseOver !== null && typeof self.cursor.objectMouseOver.link !== 'undefined') {
          if (self.cursor.objectMouseOver.link !== -1) {
            self.selectedPano = self.cursor.objectMouseOver.link;
          } else {
            return;
          }
        } else if (self.selectedPano >= 0 && typeof panoramaChoices[self.selectedPano].link !== 'undefined') {
          if (panoramaChoices[self.selectedPano].link !== -1) {
            self.selectedPano = panoramaChoices[self.selectedPano].link;
          } else {
            return;
          }
        } else {
          self.selectedPano += 1;
          if (self.selectedPano >= panoramaChoices.length) {
            self.selectedPano = 0;
          }
        }
      }

      // clear objects in scene
      for (var i=0; i<self.objects.length; i++) {
        var objectData = panoramaChoices[startPano].objects[i];
        if (typeof objectData.stopFunction !== 'undefined') {
          objectData.stopFunction();
        }
        self.scene.remove(self.objects[i]);
      }
      self.objects = [];

			// generate new scene
			var backgroundGeometry   = new THREE.SphereGeometry(5, 32, 32);
			var backgroundMaterial  = new THREE.MeshBasicMaterial();
			var rotation = self.controls.getRotation();

			if (panoramaChoices[self.selectedPano].video) {
				self.audio.src = "";
				self.video.src = panoramaChoices[self.selectedPano].video.src;
				self.video.load();
				self.video.play();

				var videoTexture = new THREE.Texture(self.video);
				videoTexture.minFilter = THREE.LinearFilter;
				videoTexture.magFilter = THREE.LinearFilter;

				backgroundMaterial.map = videoTexture;
				backgroundMaterial.overdraw = true;
			} else {
				self.video.src = "";
				backgroundMaterial.map = THREE.ImageUtils.loadTexture(panoramaChoices[self.selectedPano].texture);
				if (typeof self.audio.src !== 'undefined') {
          self.audio.src = panoramaChoices[self.selectedPano].audio;
        }
			}

			self.newBackgroundMesh = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
			self.newBackgroundMesh.position.z = -20;
			self.newBackgroundMesh.position.x = 0;
			self.newBackgroundMesh.position.applyQuaternion(rotation);
			self.newBackgroundMesh.originalPosition = self.newBackgroundMesh.position;
			self.newBackgroundMesh.scale.x = -1;
			self.newBackgroundMesh.link = panoramaChoices[self.selectedPano].link;
			self.scene.add(self.newBackgroundMesh);

			self.dynamicTexture.clear().drawText(panoramaChoices[self.selectedPano].name, undefined, 256, 'red');
			self.titleMesh.position.z = -10;
			self.titleMesh.position.x = 0;
			self.titleMesh.position.applyQuaternion(rotation);
			self.titleMesh.rotation.setFromQuaternion(rotation);
			self.scene.add(self.titleMesh);

			self.transition.frameCount = 0;
		}

    self.animate = function() {
      /*
      Update VR headset position and apply to camera and cursor.
      */
      self.controls.update();

      if (self.selectedPano >= 0 && typeof panoramaChoices[self.selectedPano].objects !== "undefined") {
        for (var j=0; j< panoramaChoices[self.selectedPano].objects.length; j++) {
          var objectData = panoramaChoices[self.selectedPano].objects[j];
          if (typeof objectData.animateFunction !== 'undefined') {
            objectData.animateFunction();
          }
        }
      }

			if (self.cursor.enabled) {
				self.cursor.updatePosition();
				if (self.cursor.objectMouseOver !== self.lastSelectedObject) {
					for (var i=0; i < self.objects.length; i++) {
						if (self.cursor.objectMouseOver === self.objects[i]) {
              focus.object = i;
              focus.start = performance.now();
							self.cursor.objectMouseOver.material.color = {r:1,g:1,b:1};
						} else if (self.lastSelectedObject === self.objects[i]){
              focus.object = -1;
              self.lastSelectedObject.material.color = {r:0.7,g:0.7,b:0.7};
						}
					}
				} else if (self.cursor.objectMouseOver !== null && focus.object > 0 && (performance.now() - focus.start) > 2000) {
          self.growWorld();
        }

				self.lastSelectedObject = self.cursor.objectMouseOver;
			}

			if (self.video.readyState === self.video.HAVE_ENOUGH_DATA) {
				self.newBackgroundMesh.material.map.needsUpdate = true;
        if (self.backgroundMesh.material.map !== null) {
  				self.backgroundMesh.material.map.needsUpdate = true;
        }
			}

      if (self.transition.frameCount < self.transition.growTime) { //experimental transition
				self.newBackgroundMesh.position.x -= self.newBackgroundMesh.originalPosition.x/(self.transition.growTime - self.transition.frameCount);
				self.newBackgroundMesh.position.y -= self.newBackgroundMesh.originalPosition.y/(self.transition.growTime - self.transition.frameCount);
				self.newBackgroundMesh.position.z -= self.newBackgroundMesh.originalPosition.z/(self.transition.growTime - self.transition.frameCount);
				self.newBackgroundMesh.originalPosition = self.newBackgroundMesh.position;
				self.newBackgroundMesh.scale.x += -0.07;
				self.newBackgroundMesh.scale.y += 0.07;
				self.newBackgroundMesh.scale.z += 0.07;

				self.transition.frameCount++;
			} else if (self.transition.frameCount === self.transition.growTime) { //hide and transition
				self.scene.remove(self.backgroundMesh);
				self.scene.remove(self.titleMesh);
				self.backgroundMesh = self.newBackgroundMesh;

				// add any additional objects to scene
				if (typeof panoramaChoices[self.selectedPano].objects !== "undefined") {
					for (var j=0; j< panoramaChoices[self.selectedPano].objects.length; j++) {
						var objectData = panoramaChoices[self.selectedPano].objects[j];

            if (typeof objectData.texture !== 'undefined') {
			        objectData.material.map = objectData.texture;
            }
            if (typeof objectData.startFunction !== 'undefined') {
              objectData.startFunction();
            }
						var objectMesh = new THREE.Mesh(objectData.geometry, objectData.material);
						objectMesh.position.x = objectData.position.x;
						objectMesh.position.y = objectData.position.y;
						objectMesh.position.z = objectData.position.z;

						objectMesh.rotation.x = objectData.rotation.x;
						objectMesh.rotation.y = objectData.rotation.y;
						objectMesh.rotation.z = objectData.rotation.z;

						objectMesh.link = objectData.link;
						objectMesh.material.color = {r:0.7,g:0.7,b:0.7};

						self.scene.add(objectMesh);
						self.objects.push(objectMesh);
					}
				}

				self.transition.frameCount++;
			} else if (self.transition.frameCount < self.transition.finishTime) {
				self.newBackgroundMesh.scale.x += -0.07;
				self.newBackgroundMesh.scale.y += 0.07;
				self.newBackgroundMesh.scale.z += 0.07;

				self.transition.frameCount++;
			}

      /*
      Render the scene through the VREffect.
      */
      self.effect.render( self.scene, self.camera );

      requestAnimationFrame( self.animate );
    }
  }

  return new WorldNav();
})();

/*
Kick off animation loop
*/
WorldNav.animate();

/*
Listen for double click event to enter full-screen VR mode
*/
document.body.addEventListener( 'dblclick', function() {
  WorldNav.effect.setFullScreen(true);
});

/*
Listen for keyboard event and zero positional sensor on appropriate keypress.
*/
function onkey(event) {
  event.preventDefault();

  if (event.keyCode == 90) { // z to zero sensor
    WorldNav.controls.zeroSensor();
  } else if (event.keyCode == 70) { // f to fullscreen
    WorldNav.effect.setFullScreen(true);
  } else if (event.keyCode == 32) { // spacebar to change pano
		if (WorldNav.transition.frameCount >= WorldNav.transition.finishTime) {
			WorldNav.growWorld();
		}
  } else if (event.keyCode == 82) { // r to restart
    WorldNav.resetWorld();
  }
};
window.addEventListener("keydown", onkey, true);

function key(event, sign) {
  var control = WorldNav.controls.manualControls[String.fromCharCode(event.keyCode).toLowerCase()];
  if (!control)
    return;
  if (sign === 1 && control.active || sign === -1 && !control.active)
    return;
  control.active = (sign === 1);
  WorldNav.controls.manualRotateRate[control.index] += sign * control.sign;
}
document.addEventListener('keydown', function(event) { key(event, 1); }, false);
document.addEventListener('keyup', function(event) { key(event, -1); }, false);

/*
Handle window resizes
*/
function onWindowResize() {
  WorldNav.camera.aspect = window.innerWidth / window.innerHeight;
  WorldNav.camera.updateProjectionMatrix();

  WorldNav.effect.setSize( window.innerWidth, window.innerHeight );

  WorldNav.navContainer.height = window.innerHeight;
  WorldNav.navContainer.width = window.innerWidth;
}

window.addEventListener( 'resize', onWindowResize, false );
