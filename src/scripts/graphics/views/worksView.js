import * as THREE from 'https://esm.sh/three@0.154.0';

import ViewBase from '../shared/viewBase.js';
import AssetManager from '../shared/assetManager.js';
import CameraManager from '../shared/cameraManager.js';
import { fetchText, fetchJson } from '../../utils/fetch.js';
import { PI, rangeRandom } from '../../utils/math.js';
 
export default class WorksView extends ViewBase {
    constructor(canvas) {
        super(canvas);
    }

    async init() {
        const position = new THREE.Vector3(0, 0, 200);
        const angle = new THREE.Vector3(0, 500, 0);
        CameraManager.moveToLookAt(position, angle, 2.0, 'power4.out');

        await this.setTerrainBackground();

        const slideContainer = document.getElementById('slideshow');
        const worksData = await fetchJson('../../../../data/works.json');

        if (!Array.isArray(worksData) || worksData.length === 0) {
            console.error('No valid data found.');
            return;
        }

        worksData.forEach(project => {
            const div = document.createElement('div');
            div.className = 'project';

            div.innerHTML = `
            <div class="project-content">
                <h2>${project.name}</h2>
                <p>${project.description}</p>
                <p>Date: ${project.date}</p>
                <p>Type: ${project.type}</p>
                <p>Technologies: ${project.tech.join(', ')}</p>
            </div>
            `;

            slideContainer.appendChild(div);
        });
    }

    async setTerrainBackground() {
        const vertexShader = await fetchText('/src/shaders/terrain.vert');
        const fragmentShader = await fetchText('/src/shaders/terrain.frag');

        const radius = 200;
        const widthSegments = 100;
        const heightSegments = 100;

        const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
        geometry.rotateZ(PI / 2);

        const positionAttribute = geometry.getAttribute('position');
        const positionArray = positionAttribute.array;

        this.uniforms = {
            uTime: { value: 0.0 },
            uDisplacement: { value: 1.0 },
            uRotationSpeed: { value: 0.2 },
            uRandom: { value: rangeRandom(50, 100) },
            uColorA: { value: new THREE.Color(0xfffff) },
            uColorB: { value: new THREE.Color(0xFF69B4) },
            uNoiseShift: { value: new THREE.Vector3(rangeRandom(-10, 10), rangeRandom(-10, 10), rangeRandom(-10, 10)) }
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