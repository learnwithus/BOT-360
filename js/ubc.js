// initialize variables
let ubc1,
    ubc2,
    ubc3,
    ubc4,
    ubc5,
    ubc6,
    ubc7,
    ubc8,
    ubc9,
    ubc10,
    ubc11,
    ubc12,
    viewer;

// create the panoramas
ubc1 = new PANOLENS.ImagePanorama('./assets/ubc/ubc1.jpg');
ubc2 = new PANOLENS.ImagePanorama('./assets/ubc/ubc2.jpg');
ubc3 = new PANOLENS.ImagePanorama('./assets/ubc/ubc3.jpg');
ubc4 = new PANOLENS.ImagePanorama('./assets/ubc/ubc4.jpg');
ubc5 = new PANOLENS.ImagePanorama('./assets/ubc/ubc5.jpg');
ubc6 = new PANOLENS.ImagePanorama('./assets/ubc/ubc6.jpg');
ubc7 = new PANOLENS.ImagePanorama('./assets/ubc/ubc7.jpg');
ubc8 = new PANOLENS.ImagePanorama('./assets/ubc/ubc8.jpg');
ubc9 = new PANOLENS.ImagePanorama('./assets/ubc/ubc9.jpg');
ubc10 = new PANOLENS.ImagePanorama('./assets/ubc/ubc10.jpg');
ubc11 = new PANOLENS.ImagePanorama('./assets/ubc/ubc11.jpg');

// define the DOM element that will contain the panolens
panolensContainer = document.querySelector('#panolens-container');

// create a panorama viewer
viewer = new PANOLENS.Viewer({
  output: 'console', // where to output Panolens logging
  cameraFov: 85,
  container: panolensContainer
});

// add event listeners to the panoramas to set the 'initial look' positions


// link the panoramas together
ubc1.link(ubc2, new THREE.Vector3(3831.51, -213.18, 3189.38));
ubc1.link(ubc11, new THREE.Vector3(-4313.55, -210.06, 2510.39));
ubc1.link(ubc3, new THREE.Vector3(4424.27, -180.43, 2299.64));
ubc1.link(ubc7, new THREE.Vector3(1422.08, 44.93, -4786.42));
ubc2.link(ubc1, new THREE.Vector3(1023.54, -43.87, 4891.53));
ubc2.link(ubc11, new THREE.Vector3(3542.48, -236.16, 3505.79));
ubc2.link(ubc3, new THREE.Vector3(-2093.86, 52.99, -4534.73));
ubc3.link(ubc2, new THREE.Vector3(-4365.57, -48.46, 2426.24));
ubc3.link(ubc4, new THREE.Vector3(485.05, -55.62, -4972.39));
ubc4.link(ubc3, new THREE.Vector3(-233.97, -128.46, 4982.69));
ubc4.link(ubc5, new THREE.Vector3(-1019.21, 215.01, -4885.42));
ubc5.link(ubc6, new THREE.Vector3(-4972.02, 123.77, 441.05));
ubc5.link(ubc4, new THREE.Vector3(2668.9, -137.56, 4214.01));
ubc6.link(ubc7, new THREE.Vector3(4986.95, 19.89, -234.11));
ubc6.link(ubc5, new THREE.Vector3(-4974.15, -38.29, 464.61));
ubc7.link(ubc1, new THREE.Vector3(3836.12, -159.89, 3187.01));
ubc7.link(ubc8, new THREE.Vector3(-4885.47, 102.83, 1043.65));
ubc7.link(ubc6, new THREE.Vector3(4989.96, -155.64, -74.90));
ubc8.link(ubc7, new THREE.Vector3(-4936.84, 85.55, 727.00));
ubc8.link(ubc9, new THREE.Vector3(4994.8, 22.71, -82.24));
ubc9.link(ubc8, new THREE.Vector3(104.34, -245.86, -4984.87));
ubc9.link(ubc10, new THREE.Vector3(4514.8, -46.06, 2133.57));
ubc10.link(ubc9, new THREE.Vector3(225.36, 290.06, -4976.79));
ubc10.link(ubc11, new THREE.Vector3(4961.14, -83.37, 574.12));
ubc11.link(ubc1, new THREE.Vector3(3392.77, 215.99, -3656.62));
ubc11.link(ubc2, new THREE.Vector3(4591.77, 140.92, -1955.63));
ubc11.link(ubc10, new THREE.Vector3(-3560.57, 36.61, -3498.77));

// add the panoramas to the viewer
viewer.add(ubc1);
viewer.add(ubc2);
viewer.add(ubc3);
viewer.add(ubc4);
viewer.add(ubc5);
viewer.add(ubc6);
viewer.add(ubc7);
viewer.add(ubc8);
viewer.add(ubc9);
viewer.add(ubc10);
viewer.add(ubc11);
viewer.add(ubc12);
