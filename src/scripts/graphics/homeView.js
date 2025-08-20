import * as THREE from 'https://esm.sh/three@0.154.0';

import View from './view.js';
import { PI } from '../utils/math.js';
import { fetchText } from '../utils/fetch.js';

export default class HomeView extends View {
    constructor(canvas) {
        super(canvas);
    }

    async init() {
        await this.setParticlesBackground();
    }

    async setParticlesBackground() {
        const vertexShader = await fetchText('/src/shaders/particle.vert');
        const fragmentShader = await fetchText('/src/shaders/particle.frag');

        const texture = await new Promise((resolve) => {
            new THREE.TextureLoader().load('/public/portfolio/images/Oscar.png', resolve);
        });
        
        texture.flipY = false;
        
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
            this.gridMesh.geometry.dispose();  // Dispose of geometry
            this.gridMesh.material.dispose();  // Dispose of material

            // Dispose of the texture
            if (this.gridMesh.material.map) {
                this.gridMesh.material.map.dispose();
            }
        }

        super.cleanup();
    }
}