    import {BaseComponent} from '../../core/base-component';

import {Services} from '../../core/services';
import {WebAudio} from '../../services/webaudio';

@Services([
    WebAudio
])
export class Lab002 extends BaseComponent {
    constructor() {
        super();
    }

    /**
     * CreatedCallback
     * The behavior you define occurs
     * when the element is registered.
     */
    createdCallback() {
        this.container = this.querySelector('#webGL-container');
        this.build();

        this.webaudio.on(WebAudio.RENDER, this.render.bind(this));
        window.addEventListener('resize', this.resize.bind(this));

        super.createdCallback();
    }

    build() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(90, 1, .1, 100);

        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        this.renderer.setClearColor(0x333333);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMapSoft = true;

        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);

        // Plane
        this.planeGeometry = new THREE.PlaneGeometry(60, 20, 30);
        this.planeMaterial = new THREE.MeshLambertMaterial({
            color: 0xDDDDDD
        });
        this.plane = new THREE.Mesh(this.planeGeometry, this.planeMaterial);
        this.plane.rotation.x = -.5 * Math.PI;
        this.plane.receiveShadow = true;
        this.scene.add(this.plane);

        // Cube
        let i = 0;
        this.cubes = [];
        while(i < 20) {
            let cubeGeometry = new THREE.BoxGeometry(1, 4, 1);
            let cubeMaterial = new THREE.MeshLambertMaterial({color: 0x33ff00});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

            cube.castShadow = true;
            cube.position.x = (i * 2) - 20;
            cube.position.y = 10;
            cube.position.z = 0;
            this.scene.add(cube);

            this.cubes.push(cube);

            i++;
        }

        // SpotLight
        this.spotlight = new THREE.SpotLight(0xffffff);
        this.spotlight.castShadow = true;
        this.spotlight.position.set(10, 100, 10);
        this.spotlight.penumbra = 0.05;
        this.spotlight.decay = 2;
        this.scene.add(this.spotlight);

        // Camera
        this.camera.position.x = 0;
        this.camera.position.y = 30;
        this.camera.position.z = 0;
        this.camera.lookAt(this.cubes[this.cubes.length / 2].position);

        // add renderer to container
        this.container.appendChild(this.renderer.domElement);
    }

    render(event) {
        let frequencyData = event.frequencyData;

        this.renderer.render(this.scene, this.camera);

        let i = 0;
        while(i < this.cubes.length) {
            let cube = this.cubes[i];
            cube.rotation.x = frequencyData[i] / 100;
            cube.rotation.y = frequencyData[i] / 100;

            cube.scale.y = frequencyData[i] / 150;

            cube.position.y = (frequencyData[i] / 50) + 4;

            // cube.material.color = new THREE.Color(0xFFFFFF / frequencyData[i]);

            i++;
        }

        this.spotlight.position.y = frequencyData[0];
    }

    // Resize
    resize(event) {
        this.camera.aspect = 1;
        this.camera.updateProjectionMatrix();
    };
}
