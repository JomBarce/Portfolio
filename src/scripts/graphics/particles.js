import * as THREE from 'https://esm.sh/three@0.154.0';

import { fetchText } from '../utils/fetch.js';

export default class Particles {

    constructor(scene) {
        this.scene = scene;
        this.container = new THREE.Object3D();
        this.scene.add(this.container);
        this.uniforms = null;
    }

    async setParticlesGrid() {
        const vertexShader = await fetchText('/src/shaders/particle.vert');
        const fragmentShader = await fetchText('/src/shaders/particle.frag');

        const texture = await new Promise((resolve) => {
            // new THREE.TextureLoader().load('/public/portfolio/images/Self.png', resolve);
            new THREE.TextureLoader().load('/public/portfolio/images/Oscar.png', resolve);
            // new THREE.TextureLoader().load('/public/portfolio/images/Self-removebg.png', resolve);
        });
        
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

        const uniforms = {
            uSize: { value: 2 },
            uTexture: { value: texture },
            uColumns: { value: columns },
            uRows: { value: rows },
            uTime: { value: 0.0 }
        };
        
        this.uniforms = uniforms;

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms,
            transparent: true,
            depthTest: false,
            depthWrite: false
        });

        this.gridMesh = new THREE.Points(geometry, material);
        this.container.add(this.gridMesh);
    }
}