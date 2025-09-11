import * as THREE from 'https://esm.sh/three@0.154.0';

import ViewBase from '../shared/viewBase.js';
import AssetManager from '../shared/assetManager.js';
import CameraManager from '../shared/cameraManager.js';
import { fetchText } from '../../utils/fetch.js';

export default class AboutView extends ViewBase {
    constructor(canvas) {
        super(canvas);
        this._handlers = {};
    }

    async init() {
        await this.setAsciiImage();
        this.addPageContent();

        // const position = new THREE.Vector3(0, 0, 0);
        // const angle = new THREE.Vector3(0, 0, 0);
        // CameraManager.moveToLookAt(position, angle, 2.0, 'power4.out');

        const position = new THREE.Vector3(0, 0, 1);
        const angle = new THREE.Vector3(0, 0, 0);
        CameraManager.moveToLookAt(position, angle, 2.0, 'power4.out');

        setTimeout(() => {
            this.handleResize();
        }, 2000);
    }

    async setAsciiImage() {
        const vertexShader = await fetchText('/src/shaders/ascii.vert');
        const fragmentShader = await fetchText('/src/shaders/ascii.frag');

        const bitmap = await AssetManager.loadImage('self', '/public/portfolio/images/Self.png');

        const texture = new THREE.CanvasTexture(bitmap);
        texture.flipY = false;
        texture.premultiplyAlpha = false;

        const asciiTexture = this.createAsciiTexture();

        const positionArray = new Float32Array([
            -0.5, -0.5, 0.0,
            0.5, -0.5, 0.0,
            0.5,  0.5, 0.0,
            -0.5,  0.5, 0.0
        ]);

        const columns = 100;
        const rows = 100;
        let instances = rows * columns;
        let size = 0.1;

        let random =  new Float32Array(instances);
        let uv = new Float32Array(instances * 2);
        let positions = new Float32Array(instances * 3);

        let palette = [
            '#8c1eff',
            '#f222ff',
            '#ff2975',
            '#ff901f',
            '#ffd319',
        ];

        const paletteRGB = palette.map(color => new THREE.Color(color));
        const geometry = new THREE.PlaneGeometry(size, size, 1, 1);

        this.uniforms = {
            uTexture: { value: texture },
            uAsciiTexture: { value: asciiTexture },
            uColumns: { value: columns },
            uRows: { value: rows },
            uAsciiLength: { value: 90 },
            uPalette: { value: paletteRGB },
            uTime: { value: 0.0 }
        };

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: this.uniforms,
            transparent: true,
            depthTest: true,
            depthWrite: true,
        });
        
        this.instancedMesh = new THREE.InstancedMesh(geometry, material, instances);

        let index = 0;
        const tempMatrix = new THREE.Matrix4();
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                index = (i * columns) + j;
                uv[index * 2] = i / (rows - 1);
                uv[index * 2 + 1] = j / (columns - 1);
                random[index] = Math.pow(Math.random(), 4)
                positions[index * 3] = i * size - size * (rows - 1) / 2;
                positions[index * 3 + 1] = j * size - size * (columns - 1) / 2;
                positions[index * 3 + 2] = 0;

                tempMatrix.setPosition(
                    positions[index * 3],
                    positions[index * 3 + 1],
                    positions[index * 3 + 2]
                );
                this.instancedMesh.setMatrixAt(index, tempMatrix);
            }
        }

        this.instancedMesh.geometry.setAttribute('aRandom', new THREE.InstancedBufferAttribute(random, 1));
        this.instancedMesh.geometry.setAttribute('aPixelUV', new THREE.InstancedBufferAttribute(uv, 2));
        this.instancedMesh.geometry.setAttribute('aPosition', new THREE.BufferAttribute(positionArray, 3));
        this.scene.add(this.instancedMesh);
    }

    createAsciiTexture() {
        const asciiChar = ".-':_,^=;><+!rc*/z?sLTv)J7(|Fi{C}fI31tlu[neoZ5Yxjya]2ESwqkP6h9d4VpOGbUAKXHm8RD#$Bg0MNWQ%&@";
        const length = asciiChar.length;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = length * 64;
        canvas.height = 64;

        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 40px Menlo';
        ctx.textAlign = 'center';

        for (let i = 0; i < length; i++) {
            const xPos = i * 64 + 32;
            const yPos = 40;

            if (i > 50) {
                ctx.filter = 'blur(5px)';
                ctx.fillText(asciiChar[i], xPos, yPos);
            }

            ctx.filter = 'none';
            ctx.fillText(asciiChar[i], xPos, yPos);
        }
        
        const asciiTexture = new THREE.Texture(canvas);
        asciiTexture.needsUpdate = true;

        return asciiTexture;
    }

    addPageContent(){
        this.aboutButton = document.getElementById('aboutBtn');
        this.closeButton = document.getElementById('closeBtn');
        this.leftIcon = document.getElementById('leftIcon');
        this.rightIcon = document.getElementById('rightIcon');
        this.iconName = document.querySelector('.icon-name');
        this.techIcons = document.querySelectorAll('.tech-icon-wrapper');
        this.experiences = document.querySelectorAll('.experiences');
        this.emailButton = document.getElementById('emailButton');
        this.discordButton = document.getElementById('discordButton');
        this.introSection = document.getElementById('about-intro');

        const detailsSection = document.getElementById('about-details');
        const contentDiv = document.getElementById('pageContent');
        const hideButton = document.getElementById('hideBtn');
        const viewButton = document.getElementById('viewBtn');
        const iconsGrid = document.querySelectorAll('.icons-grid');
        const expDetails = document.querySelectorAll('.experience-details');
        const emailTooltip = this.emailButton.querySelector('.tooltip-text');
        const discordTooltip = this.discordButton.querySelector('.tooltip-text');
        const maxGrid = 3;
        
        let currentGrid = 0;
        let lastHoveredIcon = null;
        let currentExp = 0;

        const showGrid = (index, direction) => {
            iconsGrid.forEach((grid, i) => {
                grid.classList.remove('swipe-left', 'swipe-right');
                grid.style.display = (i === index) ? 'grid' : 'none';
            });  
            iconsGrid[index].classList.add(direction === 'left' ? 'swipe-left' : 'swipe-right');
        };

        const showExp = (index) => {
            expDetails.forEach((detail, i) => {
                detail.classList.remove('page-slide-in');
                detail.style.display = (i === index) ? 'block' : 'none';
            });
            expDetails[index].classList.add('page-slide-in');
        };

        this._handlers.aboutClick = () => {
            if (this.introSection.style.display !== 'none') {
                this.introSection.style.display = 'none';
                detailsSection.classList.add('active');
                contentDiv.className = 'container';
                CameraManager.moveTo(new THREE.Vector3(0, 0, -2), 2.0, 'power4.out');
            }
            hideButton.style.display = 'none';
            viewButton.style.display = 'none';
            this.closeButton.style.display = 'block';
        };

        this._handlers.closeClick = () => {
            this.introSection.style.display = 'flex';
            detailsSection.classList.remove('active');
            contentDiv.className = 'abs-bottom';
            hideButton.style.display = 'block';
            viewButton.style.display = 'none';
            this.closeButton.style.display = 'none';
            this.handleResize();
        };

        this._handlers.escapeKey = (event) => {
            if (event.key === 'Escape' && detailsSection.classList.contains('active')) {
                this._handlers.closeClick();
            }
        };

        this._handlers.leftClick = () => {
            currentGrid = (currentGrid - 1 + maxGrid) % maxGrid;
            showGrid(currentGrid, 'left');
        };

        this._handlers.rightClick = () => {
            currentGrid = (currentGrid + 1) % maxGrid;
            showGrid(currentGrid, 'right');
        };

        this._handlers.iconClick = () => {
            if (!lastHoveredIcon) return;
            iconsGrid.forEach((grid, index) => {
                if (grid.contains(lastHoveredIcon) && currentGrid !== index) {
                    const direction = index > currentGrid ? 'right' : 'left';
                    currentGrid = index;
                    showGrid(currentGrid, direction);
                }
            });
        };

        this._handlers.emailClick = () => {
            navigator.clipboard.writeText("jomerbarcenilla@gmail.com").then(() => {
                emailTooltip.textContent = "Copied to clipboard";
                setTimeout(() => emailTooltip.textContent = "Copy to clipboard", 2000);
            }).catch(err => console.error("Failed to copy: ", err));
        };

        this._handlers.discordClick = () => {
            navigator.clipboard.writeText("jomerok").then(() => {
                discordTooltip.textContent = "Copied to clipboard";
                setTimeout(() => discordTooltip.textContent = "Copy to clipboard", 2000);
            }).catch(err => console.error("Failed to copy: ", err));
        };

        this.aboutButton.addEventListener('click', this._handlers.aboutClick);
        this.closeButton.addEventListener('click', this._handlers.closeClick);
        document.addEventListener('keydown', this._handlers.escapeKey);
        this.leftIcon.addEventListener('click', this._handlers.leftClick);
        this.rightIcon.addEventListener('click', this._handlers.rightClick);
        this.iconName.addEventListener('click', this._handlers.iconClick);
        this.emailButton.addEventListener('click', this._handlers.emailClick);
        this.discordButton.addEventListener('click', this._handlers.discordClick);

        this.techIcons.forEach(icon => {
            icon.addEventListener('mouseover', this._handlers.iconHover = () => {
                if (icon.classList.contains('active')) return;
                this.techIcons.forEach(i => i.classList.remove('active'));
                icon.classList.add('active');
                this.iconName.textContent = icon.dataset.name;
                lastHoveredIcon = icon;
            });
        });

        this.experiences.forEach(exp => {
            exp.addEventListener('click', this._handlers.expClick = () => {
                if (exp.classList.contains('active')) return;
                const index = parseInt(exp.getAttribute('data-index'));
                currentExp = index;
                this.experiences.forEach(i => i.classList.remove('active'));
                exp.classList.add('active');
                showExp(index);
            });
        });

        showGrid(currentGrid);
        showExp(currentExp);
    }

    handleResize() {
        if (!this.renderer || !this.camera || !this.camera.isPerspectiveCamera) return;

        const width = window.innerWidth;
        const height = window.innerHeight;
        
        this.renderer.setSize(width, height);
        CameraManager.resize(width, height);

        if (this.introSection.style.display === 'none') return;
        
        let position;
        if (width <= 650 && height <= 600) {
            position = new THREE.Vector3(0, 0, 10);
        } else if (width <= 650) {
            position = new THREE.Vector3(0, -3, 15);
        } else if (height <= 650) {
            position = new THREE.Vector3(0, -1, 12);
        } else {
            position = new THREE.Vector3(0, -0.5, 8);
        }

        CameraManager.moveTo(position, 2.0, 'power4.out');
    }

    animate() {
        super.animate();
        
        const delta = this.clock.getDelta();
        if (this.uniforms && this.uniforms.uTime) {
            this.uniforms.uTime.value += delta;
        }
    }

    cleanup() {
        if (this.instancedMesh) {
            this.scene.remove(this.instancedMesh);
            this.instancedMesh.geometry.dispose();
            this.instancedMesh.material.dispose();
        }

        this.aboutButton?.removeEventListener('click', this._handlers.aboutClick);
        this.closeBtn?.removeEventListener('click', this._handlers.closeClick);
        document.removeEventListener('keydown', this._handlers.escapeKey);
        this.leftIcon?.removeEventListener('click', this._handlers.leftClick);
        this.rightIcon?.removeEventListener('click', this._handlers.rightClick);
        this.iconName?.removeEventListener('click', this._handlers.iconClick);
        this.emailButton?.removeEventListener('click', this._handlers.emailClick);
        this.discordButton?.removeEventListener('click', this._handlers.discordClick);
        
        this.techIcons?.forEach(icon => {
            icon.removeEventListener('mouseover', this._handlers.iconHover);
        });

        this.experiences?.forEach(exp => {
            exp.removeEventListener('click', this._handlers.expClick);
        });
        
        this._handlers = {};
        super.cleanup();
    }
}