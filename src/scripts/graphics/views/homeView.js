import * as THREE from 'https://esm.sh/three@0.154.0';

import ViewBase from '../shared/viewBase.js';
import AssetManager from '../shared/assetManager.js';
import CameraManager from '../shared/cameraManager.js';
import { fetchText } from '../../utils/fetch.js';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-";
const fullName = "JOMER BARCENILLA";
const titles = [
  "SOFTWARE DEVELOPER",
  "GAME DEVELOPER",
  "WEB DEVELOPER",
  "FULL-STACK DEVELOPER",
  "BACK-END DEVELOPER"
];

export default class HomeView extends ViewBase {
    constructor(canvas) {
        super(canvas);
        this.intervalId = null;
        this.index = 0;
        this.isCycling = false;
    }

    async init() {
        await this.setParticlesBackground();
        this.startTitleCycle();

        let position = new THREE.Vector3(0, 0, 200);
        let angle = new THREE.Vector3(0, 0, 0);
        CameraManager.moveToLookAt(position, angle, 2.0, 'power4.out');

        setTimeout(() => {
            this.handleResize();
        }, 2000); 
        
        // const position = new THREE.Vector3(0, 0, 30);
        // const angle = new THREE.Vector3(0, 30, 0);
        // CameraManager.moveToLookAt(position, angle, 2.0, 'power4.out');
    }

    async setParticlesBackground() {
        const vertexShader = await fetchText('/src/shaders/particle.vert');
        const fragmentShader = await fetchText('/src/shaders/particle.frag');

        const bitmap = await AssetManager.loadImage('bg', '/public/portfolio/images/Oscar.png');

        const texture = new THREE.CanvasTexture(bitmap);
        texture.flipY = false;
        texture.premultiplyAlpha = false;
        
        const imgWidth = texture.image.width;
        const imgHeight = texture.image.height;

        const multiplier = 1;
        const columns = Math.floor(imgWidth * multiplier);
        const rows = Math.floor(imgHeight * multiplier);

        const points = [];

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                const x = (j - columns / 2);
                const y = (i - rows / 2);
                const z = 0;

                points.push(x, y, z);
            }
        }

        const vertices = new Float32Array(points);
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

        this.uniforms = {
            uSize: { value: 2 },
            uTexture: { value: texture },
            uColumns: { value: columns },
            uRows: { value: rows },
            uTime: { value: 0.0 }
        };

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: this.uniforms,
            transparent: true,
            depthTest: false,
            depthWrite: false
        });

        this.gridMesh = new THREE.Points(geometry, material);
        this.scene.add(this.gridMesh);
    }

    startTitleCycle() {
        this.intervalId = setInterval(() => this.cycleTitles(), 3000);
    }

    scrambleText(target, newText) {       
        let iteration = 0;

        const scrambleInterval = setInterval(() => {
            target.innerText = newText
                .split("")
                .map((letter, index) => {
                    if (letter == " ") return " ";

                    const roundedIndex = Math.floor(iteration);
                    
                    if (index <= roundedIndex) {
                        return newText[index];
                    }

                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            iteration += 1 / 3;

            if (iteration >= newText.length) clearInterval(scrambleInterval);
        }, 30);
    }

    cycleTitles() {
        const titleName = document.querySelector('.hero h1');
        const subtitleName = document.querySelector('.hero p');

        if (!titleName || !subtitleName) return;

        titleName.classList.add('fade-out');

        setTimeout(() => {
            let nextTitle;
            let nextSubtitle;
            
            if (!this.isCycling) {
                this.isCycling = true;
                this.index = 0;
            }

            if (titles.length > this.index) {
                nextTitle = titles[this.index];
                nextSubtitle = fullName;
                this.index++;
            } else {
                this.isCycling = false;
                nextTitle = fullName;
                nextSubtitle = "";
            }

            this.scrambleText(titleName, nextTitle);
            subtitleName.textContent = nextSubtitle;
            titleName.classList.remove('fade-out');
        }, 1000);
    }

    addListeners() {
        super.addListeners();

        this.handleVisibilityChange = () => {
            if (document.hidden) {
                clearInterval(this.intervalId);
                this.intervalId = null;
            } else {
                if (!this.intervalId) {
                    this.intervalId = setInterval(() => this.cycleTitles(), 3000);
                }
            }
        };

        document.addEventListener('visibilitychange', this.handleVisibilityChange);
    }

    handleResize() {
        if (!this.renderer || !this.camera || !this.camera.isPerspectiveCamera) return;

        const width = window.innerWidth;
        const height = window.innerHeight;
        
        this.renderer.setSize(width, height);
        CameraManager.resize(width, height);
        
        const position = new THREE.Vector3(0, 0, 30);
        const angle = new THREE.Vector3(0, 30, 0);
        
        CameraManager.moveToLookAt(position, angle, 2.0, 'power4.out');
    }

    animate() {
        super.animate();
        
        const delta = this.clock.getDelta();
        if (this.uniforms && this.uniforms.uTime) {
            this.uniforms.uTime.value += delta;
        }
    }

    cleanup() {
        if (this.gridMesh) {
            this.scene.remove(this.gridMesh);
            this.gridMesh.geometry.dispose();
            this.gridMesh.material.dispose();
        }

        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.index = 0;
            this.isCycling = false;
            this.intervalId = null;
        }

        document.removeEventListener('visibilitychange', this.handleVisibilityChange);

        super.cleanup();
    }
}