import * as THREE from 'https://esm.sh/three@0.154.0';

import ViewBase from '../shared/viewBase.js';
import AssetManager from '../shared/assetManager.js';
import CameraManager from '../shared/cameraManager.js';
import { fetchText } from '../../utils/fetch.js';

export default class WorksView extends ViewBase {
    constructor(canvas) {
        super(canvas);
    }

    async init() {
        const position = new THREE.Vector3(0, 0, 40);
        const angle = new THREE.Vector3(0, -20, 0);
        CameraManager.moveToLookAt(position, angle, 2.0, 'power4.out');

        // await this.setParticlesBackground();
        this.setBackground();
    }

    async setParticlesBackground() {
        const vertexShader = await fetchText('/src/shaders/particle.vert');
        const fragmentShader = await fetchText('/src/shaders/particle.frag');

        const bitmap = await AssetManager.loadImage('logo', '/public/portfolio/images/Logo.png');

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

    setBackground() {
        let size = 500;
        
        const geometry = new THREE.PlaneGeometry(size, size, 100, 100);
        const material = new THREE.MeshBasicMaterial({
            color: 0xfffff,
            wireframe: true
        })

        this.terrainMesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.terrainMesh);
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