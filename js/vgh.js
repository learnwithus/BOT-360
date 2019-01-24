// initialize variables
let vgh1,
    vgh2,
    vgh3,
    vgh4,
    vgh5,
    viewer;

// create the panoramas
vgh1 = new PANOLENS.ImagePanorama('../assets/vgh/vgh1.jpg');
vgh2 = new PANOLENS.ImagePanorama('../assets/vgh/vgh2.jpg');
vgh3 = new PANOLENS.ImagePanorama('../assets/vgh/vgh3.jpg');
vgh4 = new PANOLENS.ImagePanorama('../assets/vgh/vgh4.jpg');
vgh5 = new PANOLENS.ImagePanorama('../assets/vgh/vgh5.jpg');

// create a panorama viewer
viewer = new PANOLENS.Viewer({
  output: 'console', // where to output Panolens logging
  cameraFov: 85,
});

// add event listeners to the panoramas to set the 'initial look' positions
vgh1.addEventListener('enter-fade-start', function() {
  viewer.tweenControlCenter(new THREE.Vector3(4961.88, 277.34, -519.46), 0 );
});

// link the panoramas together
vgh1.link(vgh2, new THREE.Vector3(-621.31, -6.01, -4956.74));
vgh2.link(vgh3, new THREE.Vector3(-197.05, -112.28, -4985.26));
vgh3.link(vgh4, new THREE.Vector3(-666.55, 15.67, -4949.19));
vgh4.link(vgh5, new THREE.Vector3(-666.55, 15.67, -4949.19));

// add the panoramas to the viewer
viewer.add(vgh1);
viewer.add(vgh2);
viewer.add(vgh3);
viewer.add(vgh4);
viewer.add(vgh5);
