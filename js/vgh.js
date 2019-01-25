// initialize variables
let vgh1,
    vgh2,
    vgh3,
    vgh4,
    vgh5,
    vgh6,
    vgh7,
    vgh8,
    viewer;

console.log(document.location);
// create the panoramas
vgh1 = new PANOLENS.ImagePanorama('./assets/vgh/vgh1.jpg');
vgh2 = new PANOLENS.ImagePanorama('./assets/vgh/vgh2.jpg');
vgh3 = new PANOLENS.ImagePanorama('./assets/vgh/vgh3.jpg');
vgh4 = new PANOLENS.ImagePanorama('./assets/vgh/vgh4.jpg');
vgh5 = new PANOLENS.ImagePanorama('./assets/vgh/vgh5.jpg');
vgh6 = new PANOLENS.ImagePanorama('./assets/vgh/vgh6.jpg');
vgh7 = new PANOLENS.ImagePanorama('./assets/vgh/vgh7.jpg');
vgh8 = new PANOLENS.ImagePanorama('./assets/vgh/vgh8.jpg');

// create a panorama viewer
viewer = new PANOLENS.Viewer({
  output: 'console', // where to output Panolens logging
  cameraFov: 85,
});

// add event listeners to the panoramas to set the 'initial look' positions
vgh1.addEventListener('enter-fade-start', function() {
  viewer.tweenControlCenter(new THREE.Vector3(4961.88, 277.34, -519.46), 0 );
});

vgh7.addEventListener('enter-fade-start', function() {
  viewer.tweenControlCenter(new THREE.Vector3(4993.79, 34.14, -92.90), 0 );
});
vgh8.addEventListener('enter-fade-start', function() {
  viewer.tweenControlCenter(new THREE.Vector3(-4989.07, -143.04, 101.31), 0 );
});



// link the panoramas together
vgh1.link(vgh2, new THREE.Vector3(-621.31, -6.01, -4956.74));
vgh2.link(vgh3, new THREE.Vector3(-197.05, -112.28, -4985.26));
vgh3.link(vgh4, new THREE.Vector3(-666.55, 15.67, -4949.19));
vgh4.link(vgh5, new THREE.Vector3(-666.55, 15.67, -4949.19));
vgh5.link(vgh6, new THREE.Vector3(-392.31, -20.96, -4978.62));
vgh6.link(vgh7, new THREE.Vector3(2454.82, 33.39, -4351.68));
vgh7.link(vgh6, new THREE.Vector3(-3412.92, 182.84, 3638.31));
vgh7.link(vgh8, new THREE.Vector3(4981.35, -326.10, -111.37));
vgh8.link(vgh7, new THREE.Vector3(4994.39, 139.86, 2.11));

// add the panoramas to the viewer
// viewer.add(vgh1);
// viewer.add(vgh2);
// viewer.add(vgh3);
// viewer.add(vgh4);
// viewer.add(vgh5);
// viewer.add(vgh6);
viewer.add(vgh7);
viewer.add(vgh8);
