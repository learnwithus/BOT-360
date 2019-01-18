// initialize variables
let vghTwelfthEntrance,
    vghEmergency,
    vghResearchPavilion,
    vghBlusson,
    vghDoctorsResidence,
    viewer;

// create the panoramas
vghEmergency = new PANOLENS.ImagePanorama( '../assets/vghEmergency.jpg' );
vghResearchPavilion = new PANOLENS.ImagePanorama( '../assets/vghResearchPavilion.jpg' );
vghBlusson = new PANOLENS.ImagePanorama( '../assets/vghBlusson.jpg' );
vghDoctorsResidence = new PANOLENS.ImagePanorama( '../assets/vghDoctorsResidence.jpg' );

// create a panorama viewer
viewer = new PANOLENS.Viewer({
  output: 'console', // where to output Panolens logging
  cameraFov: 85,
});

// add event listeners to the panoramas to set the 'initial look' positions
vghEmergency.addEventListener('enter-fade-start', function() {
  viewer.tweenControlCenter(new THREE.Vector3(370.69, 529.09, 4948.97), 0 );
});

vghResearchPavilion.addEventListener('enter-fade-start', function() {
  viewer.tweenControlCenter(new THREE.Vector3(4925.1, 809.25, 151.84), 0 );
});

vghBlusson.addEventListener('enter-fade-start', function() {
  viewer.tweenControlCenter(new THREE.Vector3(4469.61, 376.03, -2193.74), 0 );
});

// link the panoramas together
vghEmergency.link(vghResearchPavilion, new THREE.Vector3(-4987.64, -169.85, 108.47));
vghResearchPavilion.link(vghEmergency, new THREE.Vector3(195.84, 152.67, -4983.74));
vghResearchPavilion.link(vghBlusson, new THREE.Vector3(890.85, -37.30, 4912.81));
vghBlusson.link(vghResearchPavilion, new THREE.Vector3(-3905.38, 74.28, -3106.82));
vghBlusson.link(vghDoctorsResidence, new THREE.Vector3(4765.44, -1.85, 1506.90));

// add the panoramas to the viewer
viewer.add(vghEmergency);
viewer.add(vghResearchPavilion);
viewer.add(vghBlusson);
viewer.add(vghDoctorsResidence);
