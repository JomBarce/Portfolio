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
        // CameraManager.moveTo(
        //     new THREE.Vector3(0, 0, 10),
        //     new THREE.Vector3(0, 0, 0),
        //     2.0,
        //     'power4.out'
        // );
        this.handleResize();

        await this.setAsciiImage();
        // this.createBox();

        // this.currentPage = 0;
        // this.maxPage = 4;

        // const sections = document.querySelectorAll('.page-section');

        // const showPage = (index) => {
        //     sections.forEach((section, i) => {
        //         section.style.display = i === index ? 'block' : 'none';
        //     });
        // };

        // // Initial display
        // showPage(this.currentPage);

        // // Button listeners
        // document.getElementById('lookLeftBtn').addEventListener('click', () => {
        //     this.currentPage = (this.currentPage - 1 + sections.length) % sections.length;
        //     showPage(this.currentPage);
        // });

        // document.getElementById('lookRightBtn').addEventListener('click', () => {
        //     this.currentPage = (this.currentPage + 1) % sections.length;
        //     showPage(this.currentPage);
        // });
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

    createBox() {
        const geometry = new THREE.BoxGeometry( 20, 20, 20 );
        const edges = new THREE.EdgesGeometry( geometry ); 
        const lineMat = new THREE.LineBasicMaterial( { color: 0xffd319 } );
        const line = new THREE.LineSegments( edges, lineMat ); 

        this.cube = new THREE.Object3D();
        this.cube.add(line);
        
        this.scene.add(this.cube);
    }

    handleResize() {
        if (!this.renderer || !this.camera && this.camera.isPerspectiveCamera) return;

        const width = window.innerWidth;
        const height = window.innerHeight;

        this.renderer.setSize(width, height);
        CameraManager.resize(width, height);

        if (width <= 650) {
            this.camera.position.set(0, -1, 10);
        } else {
            this.camera.position.set(0, 0, 10);
        }
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

    // showFullscreenScene() {
    //     this.aboutSection.style.display = 'none';
    //     this.bgCanvas.style.display = 'block';
    // }

    // restoreAboutView() {
    //     this.bgCanvas.style.display = 'none';
    //     this.aboutSection.style.display = 'block';
    // }
}