import * as THREE from 'https://esm.sh/three@0.154.0';

import ViewBase from '../shared/viewBase.js';
import AssetManager from '../shared/assetManager.js';
import CameraManager from '../shared/cameraManager.js';
import { fetchText } from '../../utils/fetch.js';

export default class AboutView extends ViewBase {
    constructor(canvas) {
        super(canvas);
    }

    async init() {
        // const position = new THREE.Vector3(0, 0, 0);
        // const angle = new THREE.Vector3(0, 0, 0);
        // CameraManager.moveToLookAt(position, angle, 2.0, 'power4.out');

        const position = new THREE.Vector3(0, 0, 1);
        const angle = new THREE.Vector3(0, 0, 0);
        CameraManager.moveToLookAt(position, angle, 2.0, 'power4.out');

        setTimeout(() => {
            this.handleResize();
        }, 2000); 

        await this.setAsciiImage();

        const aboutBtn = document.getElementById('aboutBtn');
        const introSection = document.querySelector('.about-intro');
        const detailsSection = document.querySelector('.about-details');
        const contentDiv = document.getElementById('pageContent');
        const hideButton = document.getElementById('hideBtn');
        const viewButton = document.getElementById('viewBtn');
        const closeButton = document.getElementById('closeBtn');


        aboutBtn.addEventListener('click', () => {
            if (introSection.style.display !== 'none') {
                introSection.style.display = 'none';
                detailsSection.classList.add('active');
                contentDiv.className = 'container';
                
                const position = new THREE.Vector3(0, 0, -2);
                CameraManager.moveTo(position, 2.0, 'power4.out');
            }

            hideButton.style.display = 'none';
            viewButton.style.display = 'none';
            closeButton.style.display = 'block';
        });

        closeButton.addEventListener('click', () => {
            introSection.style.display = 'flex';
            detailsSection.classList.remove('active');
            contentDiv.className = 'abs-bottom';
            hideButton.style.display = 'block';
            viewButton.style.display = 'none';
            closeButton.style.display = 'none';

            this.handleResize();
        });

        const maxGrid = 3;
        const iconGrids = document.querySelectorAll('.icons-grid');
        const iconName = document.querySelector('.icon-name');
        const icons = document.querySelectorAll('.tech-icon-wrapper');

        let currentGrid = 0;
        let lastHoveredIcon = null;

        const showGrid = (index, direction) => {
            iconGrids.forEach((iconGrid, i) => {
                iconGrid.classList.remove('swipe-left', 'swipe-right');
                iconGrid.style.display = (i == index) ? 'grid' : 'none';
            });

            iconGrids[index].classList.add((direction === 'left') ? 'swipe-left' : 'swipe-right');
        };

        icons.forEach(icon => {
            icon.addEventListener('mouseover', () => {
                if (icon.classList.contains('active')) return;

                icons.forEach(i => i.classList.remove('active'));
                icon.classList.add('active');

                iconName.textContent = icon.dataset.name;
                lastHoveredIcon = icon;
            });
        });

        document.getElementById('leftIcon').addEventListener('click', () => {
            currentGrid = (currentGrid - 1 + maxGrid) % maxGrid;
            showGrid(currentGrid, 'left');
        });

        document.getElementById('rightIcon').addEventListener('click', () => {
            currentGrid = (currentGrid + 1) % maxGrid;
            showGrid(currentGrid, 'right');
        });

        iconName.addEventListener('click', () => {
            if (!lastHoveredIcon) return;

            iconGrids.forEach((grid, index) => {
                if (grid.contains(lastHoveredIcon) && currentGrid != index) {
                    const direction = index > currentGrid ? 'right' : 'left';
                    currentGrid = index;
                    showGrid(currentGrid, direction);
                }
            });
        });

        const expList = document.querySelectorAll('.experiences');
        const expDetails = document.querySelectorAll('.experience-details');

        let currentExp = 0;

        const showExp = (index) => {
            expDetails.forEach((detail, i) => {
                detail.classList.remove('page-slide-in');
                detail.style.display = (i == index) ? 'block' : 'none';
            });

            expDetails[index].classList.add('page-slide-in');
        };

        expList.forEach(exp => {
            exp.addEventListener('click', () => {
                if (exp.classList.contains('active')) return;
                
                const index = exp.getAttribute('data-index');
                currentExp = index;

                expList.forEach(i => i.classList.remove('active'));
                exp.classList.add('active');

                showExp(currentExp);
            });
        });

        const emailButton = document.getElementById('emailButton');
        const emailTooltip = emailButton.querySelector('.tooltip-text');
        const discordButton = document.getElementById('discordButton');
        const discordTooltip = discordButton.querySelector('.tooltip-text');

        emailButton.addEventListener('click', () => {
            navigator.clipboard.writeText("jomerbarcenilla@gmail.com").then(() => {
                emailTooltip.textContent = "Copied to clipboard";
                
                setTimeout(() => {
                    emailTooltip.textContent = "Copy to clipboard";
                }, 2000);
            }).catch(err => {
                console.error("Failed to copy: ", err);
            });
        });

        discordButton.addEventListener('click', () => {
            navigator.clipboard.writeText("jomerok").then(() => {
                discordTooltip.textContent = "Copied to clipboard";
                
                setTimeout(() => {
                    discordTooltip.textContent = "Copy to clipboard";
                }, 2000);
            }).catch(err => {
                console.error("Failed to copy: ", err);
            });
        });

        showGrid(currentGrid);
        showExp(currentExp);
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

    handleResize() {
        if (!this.renderer || !this.camera || !this.camera.isPerspectiveCamera) return;

        const width = window.innerWidth;
        const height = window.innerHeight;
        
        this.renderer.setSize(width, height);
        CameraManager.resize(width, height);

        const introSection = document.querySelector('.about-intro');
        if (introSection.style.display === 'none') return;
        
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
        if (this.uniforms && this.uniforms.uTime) {
            this.uniforms.uTime.value += 0.01;
        }
    }

    cleanup() {
        if (this.instancedMesh) {
            this.scene.remove(this.instancedMesh);
            this.instancedMesh.geometry.dispose();
            this.instancedMesh.material.dispose();
        }

        super.cleanup();
    }
}