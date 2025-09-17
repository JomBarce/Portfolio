import * as THREE from 'https://esm.sh/three@0.154.0';

import ViewBase from '../shared/viewBase.js';
import CameraManager from '../shared/cameraManager.js';
import { fetchText, fetchJson } from '../../utils/fetch.js';
import { PI, rangeRandom } from '../../utils/math.js';
 
export default class WorksView extends ViewBase {
    constructor(canvas) {
        super(canvas);
        this._handlers = {};
    }

    async init() {
        await this.setTerrainBackground();
        await this.addPageContent();

        this.handleResize();
    }

    async setTerrainBackground() {
        const vertexShader = await fetchText('./src/shaders/terrain.vert');
        const fragmentShader = await fetchText('./src/shaders/terrain.frag');

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

    async addPageContent() {
        this.worksSection = document.getElementById('works');
        this.detailsSection = document.getElementById('worksDetails');
        this.closeButton = document.getElementById('closeBtn');
        this._handlers.projectDivs = [];

        const worksContainer = document.querySelector('.project-container');
        const contentDiv = document.getElementById('pageContent');
        const hideButton = document.getElementById('hideBtn');
        const viewButton = document.getElementById('viewBtn');
        const worksData = await fetchJson('./data/works.json');

        if (!Array.isArray(worksData) || worksData.length === 0) return;

        worksData.forEach((project, index) => {
            const div = document.createElement('div');
            div.className = 'project-content';
            div.innerHTML = `<img class="thumbnail" src="${project.thumbnail}" alt="Project Thumbnail ${index + 1}" draggable="false"/>`;
            
            const clickHandler = () => {
                if (this.worksSection.style.display !== 'none') {
                    this.worksSection.style.display = 'none';
                    this.detailsSection.classList.add('active');
                    CameraManager.moveTo(new THREE.Vector3(0, 300, 0), 2.0, 'power4.out');
                }
                hideButton.style.display = 'none';
                viewButton.style.display = 'none';
                this.closeButton.style.display = 'block';
                this.renderProjectDetails(project.id, worksData);
                window.scrollTo({ top: 0 });
            };

            div.addEventListener('click', clickHandler);
            this._handlers.projectDivs.push({ div, clickHandler });

            worksContainer.appendChild(div);
        });

        this._handlers.closeClick = () => {
            this.worksSection.style.display = 'block';
            this.detailsSection.classList.remove('active');
            contentDiv.className = 'container';
            hideButton.style.display = 'block';
            viewButton.style.display = 'none';
            this.closeButton.style.display = 'none';
            this.handleResize();
        };

        this._handlers.escapeKey = (event) => {
            if (event.key === 'Escape' && this.detailsSection.classList.contains('active')) {
                this._handlers.closeClick();
            }
        };

        this.closeButton.addEventListener('click', this._handlers.closeClick);
        document.addEventListener('keydown', this._handlers.escapeKey);
    }

    renderProjectDetails(projectId, worksData) {
        const project = worksData.find(p => p.id === projectId);

        if (project) {
            let urlMarkup = '';
            if (project.url) {
                urlMarkup = `
                    <p>
                        <strong>URL:</strong> 
                        <a class="truncate" href="${project.url}" target="_blank" rel="noopener noreferrer">${project.url}</a>
                    </p>
                `;
            }

            let infoMarkup = '';
            if (project.info && Array.isArray(project.info)) {
                infoMarkup = project.info.map(section => {
                    const title = Array.isArray(section.title) ? section.title.join(', ') : section.title;
                    const details = section.details.map(detail => `<li><p>${detail}</p></li>`).join('');
                    return `
                        <div class="project-info">
                            <p><strong>${title}</strong></p>
                            <ul>${details}</ul>
                        </div>
                    `;
                }).join('');
            }

            this.detailsSection.innerHTML = `
                <section class="page-section">
                    <h1>${project.name}</h1>
                    <div class="project-details">
                        <p><strong>Date:</strong> ${project.date}</p>
                        <p><strong>Type:</strong> ${project.type}</p>
                        <p><strong>Technologies:</strong> ${project.tech.join(', ')}</p>
                        ${urlMarkup}
                        <p>${project.description}</p>
                        ${infoMarkup}
                    </div>
                </section>
            `;

            const section = document.createElement('section');
            section.id = "projectImages";
            section.className = 'page-section';

            project.images.forEach((image, index) => {
                const img = document.createElement('img');
                img.className = 'project-img';
                img.src = image;
                img.alt = `Project Image ${index + 1}`;
                img.draggable = false;

                section.appendChild(img);
            });
            
            this.detailsSection.appendChild(section);
        }
    }

    handleResize() {
        if (!this.renderer || !this.camera || !this.camera.isPerspectiveCamera) return;

        const width = window.innerWidth;
        const height = window.innerHeight;
        
        this.renderer.setSize(width, height);
        CameraManager.resize(width, height);

        if (this.worksSection.style.display === 'none') return;
        
        const position = new THREE.Vector3(0, 0, 200);
        const angle = new THREE.Vector3(0, 500, 0);

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

        this.closeButton?.removeEventListener('click', this._handlers.closeClick);
        document.removeEventListener('keydown', this._handlers.escapeKey);
        
        if (Array.isArray(this._handlers.projectDivs)) {
            this._handlers.projectDivs.forEach(({ div, clickHandler }) => {
                div.removeEventListener('click', clickHandler);
            });
        }
        
        this._handlers = {};
        super.cleanup();
    }
}