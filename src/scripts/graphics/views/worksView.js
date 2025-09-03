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
        // const position = new THREE.Vector3(0, 0, 40);
        // const angle = new THREE.Vector3(0, -20, 0);
        // const position = new THREE.Vector3(0, 0, 40);
        // const angle = new THREE.Vector3(40, 100, 0);
        const position = new THREE.Vector3(0, 0, 200);
        const angle = new THREE.Vector3(0, 500, 0);
        CameraManager.moveToLookAt(position, angle, 2.0, 'power4.out');

        await this.setTerrainBackground();
    }

    async setTerrainBackground() {
        const vertexShader = await fetchText('/src/shaders/terrain.vert');
        const fragmentShader = await fetchText('/src/shaders/terrain.frag');

        const radius = 200;
        const widthSegments = 100;
        const heightSegments = 100;

        const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
        geometry.rotateZ(Math.PI / 2);

        // let size = 1500;
        // const geometry = new THREE.PlaneGeometry(size, size, 100, 100);
        // geometry.rotateX(-Math.PI / 2);

        const positionAttribute = geometry.getAttribute('position');
        const positionArray = positionAttribute.array;

        this.uniforms = {
            uTime: { value: 0.0 },
            uDisplacement: { value: 1.0 },
            uColorA: { value: new THREE.Color(0xfffff) },
            uColorB: { value: new THREE.Color(0xFF69B4) },
            uRotationSpeed: { value: 0.2 }
        };

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: this.uniforms,
            depthTest: true,
            depthWrite: true,
            wireframe: true
        });

        this.terrainMesh = new THREE.Mesh(geometry, material);

        this.terrainMesh.geometry.setAttribute('aPosition', new THREE.BufferAttribute(positionArray, 3));
        
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