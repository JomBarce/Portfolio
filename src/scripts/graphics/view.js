import * as THREE from 'https://esm.sh/three@0.154.0';
import { OrbitControls } from 'https://esm.sh/three@0.154.0/examples/jsm/controls/OrbitControls.js';

import Particles from './particles.js';

export default class View {
    constructor(canvas) {
        this.canvas = canvas;
        
        this.setRenderer();
        this.setScene();
        this.setCamera();
        this.setControls();
        this.addListeners();

        this.setParticles().then(() => {
            this.animate();
        });
    }

    // Setup Methods

    setRenderer() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            canvas: this.canvas
        });
        this.renderer.setSize(width, height);
        this.renderer.setClearColor(0xffffff, 0);
    }

    setScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x000000);       
    }

    setCamera() {
        const fieldOfView = 75;
        const aspectRatio = window.innerWidth / window.innerHeight;
        const nearPlane = 0.1;
        const farPlane = 1000;

        this.camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
        // this.camera.position.x = 5;
        // this.camera.position.y = 5;
        // this.camera.position.z = 300;

        // x=31.207232351433568, y=35.34354645658869, z=23.538066700349884
        this.camera.position.x = 0;
        this.camera.position.y = 20;
        this.camera.position.z = 30;

        this.camera.lookAt(0, 0, 0);

        this.scene.add(this.camera);
    }

    setControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    }

    addListeners() {
        window.addEventListener('resize', this.handleResize.bind(this)); // Bind 'this' correctly
    }

    handleResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        this.renderer.setSize(width, height);

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }

    // Animation
    animate() {
        requestAnimationFrame(() => this.animate());
        this.controls.update();

        if (this.particles && this.particles.uniforms && this.particles.uniforms.uTime) {
            this.particles.uniforms.uTime.value += 0.01;
        }

        this.render();
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }


    // Particles
    async setParticles() {
        this.particles = new Particles(this.scene);

        await this.particles.setParticlesGrid();
    }
}