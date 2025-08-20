import * as THREE from 'https://esm.sh/three@0.154.0';
import { OrbitControls } from 'https://esm.sh/three@0.154.0/examples/jsm/controls/OrbitControls.js';

export default class View {
    constructor(canvas) {
        this.canvas = canvas;
        
        this.setRenderer();
        this.setScene();
        this.setCamera();
        this.setControls();
        this.addListeners();
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
        // this.camera.position.x = 0;
        // this.camera.position.y = 20;
        // this.camera.position.z = 30;
        this.camera.position.z = 10;

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

        if (this.camera) {
            this.renderer.setSize(width, height);
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
        }
    }

    // Animation
    animate() {
        if (this.scene && this.camera && this.renderer) {
            requestAnimationFrame(() => this.animate());
            this.controls.update();
            this.render();
        }
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    resetScene() {
        // Clear all existing objects in the scene
        this.scene.traverse(object => {
            if (object instanceof THREE.Mesh) {
                object.geometry.dispose();
                if (object.material.map) object.material.map.dispose();
                object.material.dispose();
                this.scene.remove(object);
            }
        });
    }

    cleanup() {
        // Only clear the scene, but do not dispose of the renderer or camera
        this.resetScene();

        // Optionally: reset controls if needed
        if (this.controls) {
            this.controls.reset();  // Reset OrbitControls to default position
        }
    }

    // cleanup() {
    //     this.renderer.dispose();
    //     // this.renderer.forceContextLoss();
    //     this.controls.dispose();

    //     this.scene = null;
    //     this.camera = null;

    //     window.removeEventListener('resize', this.handleResize.bind(this));
    // }
}