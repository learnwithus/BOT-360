// initialize variables
let vgh1,
    vgh2,
    vgh3,
    vgh4,
    vgh5,
    vgh6,
    vgh7,
    vgh8,
    vgh9,
    vgh10,
    vgh11,
    vgh12,
    vgh13,
    vgh14,
    vgh15,
    vgh16,
    vgh17,
    viewer;

// create the panoramas
vgh1 = new PANOLENS.ImagePanorama('./assets/vgh/vgh1.jpg');
vgh2 = new PANOLENS.ImagePanorama('./assets/vgh/vgh2.jpg');
vgh3 = new PANOLENS.ImagePanorama('./assets/vgh/vgh3.jpg');
vgh4 = new PANOLENS.ImagePanorama('./assets/vgh/vgh4.jpg');
vgh5 = new PANOLENS.ImagePanorama('./assets/vgh/vgh5.jpg');
vgh6 = new PANOLENS.ImagePanorama('./assets/vgh/vgh6.jpg');
vgh7 = new PANOLENS.ImagePanorama('./assets/vgh/vgh7.jpg');
vgh8 = new PANOLENS.ImagePanorama('./assets/vgh/vgh8.jpg');
vgh9 = new PANOLENS.ImagePanorama('./assets/vgh/vgh9.jpg');
vgh10 = new PANOLENS.ImagePanorama('./assets/vgh/vgh10.jpg');
vgh11 = new PANOLENS.ImagePanorama('./assets/vgh/vgh11.jpg');
vgh12 = new PANOLENS.ImagePanorama('./assets/vgh/vgh12.jpg');
vgh13 = new PANOLENS.ImagePanorama('./assets/vgh/vgh13.jpg');
vgh14 = new PANOLENS.ImagePanorama('./assets/vgh/vgh14.jpg');
vgh15 = new PANOLENS.ImagePanorama('./assets/vgh/vgh15.jpg');
vgh16 = new PANOLENS.ImagePanorama('./assets/vgh/vgh16.jpg');
vgh17 = new PANOLENS.ImagePanorama('./assets/vgh/vgh17.jpg');

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
vgh9.addEventListener('enter-fade-start', function() {
  viewer.tweenControlCenter(new THREE.Vector3(4975.92, 11.01, -451.22), 0 );
});
vgh11.addEventListener('enter-fade-start', function() {
  viewer.tweenControlCenter(new THREE.Vector3(-4768.89, 268.51, -1453.58), 0 );
});
vgh12.addEventListener('enter-fade-start', function() {
  viewer.tweenControlCenter(new THREE.Vector3(4482.14, 165.55, 2187.35), 0 );
});



// link the panoramas together
vgh1.link(vgh2, new THREE.Vector3(-621.31, -6.01, -4956.74));
vgh1.link(vgh17, new THREE.Vector3(2372.38, 25.31, 4394.04));
vgh2.link(vgh1, new THREE.Vector3(288.41, -1.79, 4984.81));
vgh2.link(vgh3, new THREE.Vector3(-197.05, -112.28, -4985.26));
vgh2.link(vgh17, new THREE.Vector3(1514.61, 198.20, 4755.40));
vgh3.link(vgh2, new THREE.Vector3(743.22, -112.28, 4933.21));
vgh3.link(vgh4, new THREE.Vector3(-666.55, 15.67, -4949.19));
vgh4.link(vgh3, new THREE.Vector3(-141.88, -70.86, 4989.78));
vgh4.link(vgh5, new THREE.Vector3(-666.55, 15.67, -4949.19));
vgh5.link(vgh4, new THREE.Vector3(328.49, -16.13, 4982.15));
vgh5.link(vgh6, new THREE.Vector3(-392.31, -20.96, -4978.62));
vgh6.link(vgh5, new THREE.Vector3(-9.04, -21.26, 4998.69));
vgh6.link(vgh7, new THREE.Vector3(2454.82, 33.39, -4351.68));
vgh7.link(vgh6, new THREE.Vector3(-3412.92, 182.84, 3638.31));
vgh7.link(vgh8, new THREE.Vector3(4981.35, -326.10, -111.37));
vgh8.link(vgh7, new THREE.Vector3(4994.39, 139.86, 2.11));
vgh8.link(vgh9, new THREE.Vector3(-4766.98, -66.12, -1491.40));
vgh9.link(vgh8, new THREE.Vector3(-3716.7, 601.44, 3280.70));
vgh9.link(vgh10, new THREE.Vector3(4760.29, -50.82, 1518.69));
vgh9.link(vgh12, new THREE.Vector3(4971.87, -40.94, -506.11));
vgh10.link(vgh9, new THREE.Vector3(-4847.83, -54.91, -1191.39));
vgh10.link(vgh11, new THREE.Vector3(3011, 133.95, 3979.96));
vgh10.link(vgh12, new THREE.Vector3(4748.15, -45.69, -1558.66));
vgh11.link(vgh12, new THREE.Vector3(-3198.87, -25.32, 3833.31));
vgh12.link(vgh9, new THREE.Vector3(-4972.35, -36.53, 500.11));
vgh12.link(vgh10, new THREE.Vector3(-4785.8, 121.80, 1412.72));
vgh12.link(vgh11, new THREE.Vector3(-3838.04, 198.81, 3182.21));
vgh12.link(vgh13, new THREE.Vector3(4994, 36.63, 87.04));
vgh13.link(vgh12, new THREE.Vector3(-4982.58, -35.45, 305.79));
vgh13.link(vgh14, new THREE.Vector3(4997.38, -18.93, -35.86));
vgh14.link(vgh13, new THREE.Vector3(-4992, -120.75, 62.10));
vgh14.link(vgh15, new THREE.Vector3(4983.73, 199.54, -160.83));
vgh15.link(vgh14, new THREE.Vector3(-4992.83, -46.43, -101.99));
vgh15.link(vgh16, new THREE.Vector3(-12.2, 123.98, 4994.49));
vgh16.link(vgh15, new THREE.Vector3(-3007.46, 30.80, -3988.04));
vgh16.link(vgh17, new THREE.Vector3(-524.99, 15.97, 4971.60));
vgh17.link(vgh1, new THREE.Vector3(4807.04, 68.01, -1341.63));
vgh17.link(vgh16, new THREE.Vector3(-3753.24, 65.85, 3295.22));

// add the panoramas to the viewer
viewer.add(vgh1);
viewer.add(vgh2);
viewer.add(vgh3);
viewer.add(vgh4);
viewer.add(vgh5);
viewer.add(vgh6);
viewer.add(vgh7);
viewer.add(vgh8);
viewer.add(vgh9);
viewer.add(vgh10);
viewer.add(vgh11);
viewer.add(vgh12);
viewer.add(vgh13);
viewer.add(vgh14);
viewer.add(vgh15);
viewer.add(vgh16);
viewer.add(vgh17);
