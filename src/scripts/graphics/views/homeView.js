import * as THREE from 'https://esm.sh/three@0.154.0';

import ViewBase from '../shared/viewBase.js';
import AssetManager from '../shared/assetManager.js';
import { fetchText } from '../../utils/fetch.js';

export default class HomeView extends ViewBase {
    constructor(canvas) {
        super(canvas);
    }

    async init() {
        this.camera.position.set(0, 20, 30);

        await this.setParticlesBackground();
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

    animate() {
        super.animate();
        if (this.uniforms && this.uniforms.uTime) {
            this.uniforms.uTime.value += 0.01;
        }
    }

    cleanup() {
        if (this.gridMesh) {
            this.scene.remove(this.gridMesh);
            this.gridMesh.geometry.dispose();
            this.gridMesh.material.dispose();
        }

        super.cleanup();
    }
}