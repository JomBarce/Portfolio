import * as THREE from 'https://esm.sh/three@0.154.0';
import { OrbitControls } from 'https://esm.sh/three@0.154.0/examples/jsm/controls/OrbitControls.js';

import CameraManager from './cameraManager.js';

export default class ViewBase {
    constructor(canvas) {
        this.canvas = canvas;
        this.clock = new THREE.Clock();
        
        this.setRenderer();
        this.setScene();
        this.setLight();
        this.setCamera();
        // this.setControls();
        this.addListeners();
    }

    // Setup Methods

    setRenderer() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            canvas: this.canvas,
            alpha: true
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(width, height);
        this.renderer.setClearColor(0xffffff, 0);
    }

    setScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x000000);       
    }

    setLight() {
        const directional = new THREE.DirectionalLight(0xffffff, 1);
        directional.position.set(50, 50, 50);
        this.scene.add(directional);

        const ambient = new THREE.AmbientLight(0xffffff, 0.3);
        this.scene.add(ambient);
    }

    setCamera() {
        this.camera = CameraManager.getCamera();
    }

    setControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.enableZoom = true;
    }

    addListeners() {
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    handleResize() {
        if (!this.renderer || !this.camera || !this.camera.isPerspectiveCamera) return;

        const width = window.innerWidth;
        const height = window.innerHeight;

        this.renderer.setSize(width, height);
        CameraManager.resize(width, height);
    }

    // Animation
    animate() {
        if (this.scene && this.camera && this.renderer) {
            requestAnimationFrame(() => this.animate());
            // this.controls.update();
            this.render();
        }
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    resetScene() {
        this.scene.traverse(object => {
            if (object instanceof THREE.Mesh) {
                object.geometry.dispose();
                if (object.material.map) object.material.map.dispose();
                object.material.dispose();
                this.scene.remove(object);
            }
        });
    }

    async cleanup() {
        this.resetScene();

        if (this.renderer) {
            this.renderer.dispose();
            this.renderer.domElement = null;
            this.renderer = null;
        }
        
        this.scene = null;

        window.removeEventListener('resize', this.handleResize.bind(this));
    }
}