// initialize variables
let ubcDjavadMowafaghian,
    ubcKoernerPavilion,
    ubcWalkway,
    ubcPurdyPavilion,
    ubcCrosswalk,
    ubcCafeteria,
    viewer;

// create the panoramas
ubcDjavadMowafaghian = new PANOLENS.ImagePanorama( '../assets/ubcDjavadMowafaghian.jpg' );
ubcKoernerPavilion = new PANOLENS.ImagePanorama( '../assets/ubcKoernerPavilion.jpg' );
ubcWalkway = new PANOLENS.ImagePanorama( '../assets/ubcWalkway.jpg' );
ubcPurdyPavilion = new PANOLENS.ImagePanorama( '../assets/ubcPurdyPavilion.jpg' );
ubcCrosswalk = new PANOLENS.ImagePanorama( '../assets/ubcCrosswalk.jpg' );
ubcCafeteria = new PANOLENS.ImagePanorama( '../assets/ubcCafeteria.jpg' );

// create a panorama viewer
viewer = new PANOLENS.Viewer({
  output: 'console', // where to output Panolens logging
  cameraFov: 85,
});

// add event listeners to the panoramas to set the 'initial look' positions
ubcDjavadMowafaghian.addEventListener('enter-fade-start', function() {
  viewer.tweenControlCenter(new THREE.Vector3(-4799.61, 1381.35, 35.29), 0 );
});

ubcKoernerPavilion.addEventListener('enter-fade-start', function() {
  viewer.tweenControlCenter(new THREE.Vector3(4939.1, 756.40, 45.68), 0 );
});

ubcCafeteria.addEventListener('enter-fade-start', function() {
  viewer.tweenControlCenter(new THREE.Vector3(-4942.32, 595.84, -346.73), 0 );
});

ubcWalkway.addEventListener('enter-fade-start', function() {
  viewer.tweenControlCenter(new THREE.Vector3(-4335.79, 1057.05, 2233.20), 0 );
});

ubcPurdyPavilion.addEventListener('enter-fade-start', function() {
  viewer.tweenControlCenter(new THREE.Vector3(2101.83, 765.92, 4466.17), 0 );
});

ubcCrosswalk.addEventListener('enter-fade-start', function() {
  viewer.tweenControlCenter(new THREE.Vector3(-4989.73, 187.27, -55.49), 0 );
});

// link the panoramas together
ubcDjavadMowafaghian.link(ubcKoernerPavilion, new THREE.Vector3(-173.17, -74.44, 4988.00));
ubcDjavadMowafaghian.link(ubcCafeteria, new THREE.Vector3(2868.55, -79.79, 4087.06));
ubcKoernerPavilion.link(ubcDjavadMowafaghian, new THREE.Vector3(-4685.34, -354.09, 1688.52));
ubcKoernerPavilion.link(ubcWalkway, new THREE.Vector3(3812.79, 260.61, 3209.54));
ubcWalkway.link(ubcKoernerPavilion, new THREE.Vector3(-318.24, 115.50, 4978.78));
ubcWalkway.link(ubcPurdyPavilion, new THREE.Vector3(-4972.72, 128.87, 423.91));
ubcPurdyPavilion.link(ubcWalkway, new THREE.Vector3(-4819.74, 149.87, 1281.80));
ubcPurdyPavilion.link(ubcCrosswalk, new THREE.Vector3(4991.11, -85.10, 105.82));
ubcCrosswalk.link(ubcCafeteria, new THREE.Vector3(-1697.77, 16.90, -4695.96));
ubcCrosswalk.link(ubcPurdyPavilion, new THREE.Vector3(-4993.84, 127.75, 21.70));
ubcCafeteria.link(ubcCrosswalk, new THREE.Vector3(-1647.69, -7.40, 4715.59));
ubcCafeteria.link(ubcDjavadMowafaghian, new THREE.Vector3(-3376.68, 389.95, -3663.06));

// add the panoramas to the viewer
viewer.add(ubcDjavadMowafaghian);
viewer.add(ubcKoernerPavilion);
viewer.add(ubcWalkway);
viewer.add(ubcPurdyPavilion);
viewer.add(ubcCrosswalk);
viewer.add(ubcCafeteria);
