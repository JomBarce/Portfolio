import * as THREE from 'https://esm.sh/three@0.154.0';
import View from './view.js';
import { fetchText } from '../utils/fetch.js';

export default class AboutView extends View {
    constructor(canvas) {
        super(canvas);
    }

    async init() {
        this.camera.position.set(0, 0, 10);

        await this.setAsciiImage();
    }

    async setAsciiImage() {
        const vertexShader = await fetchText('/src/shaders/ascii.vert');
        const fragmentShader = await fetchText('/src/shaders/ascii.frag');

        const loader = new THREE.ImageBitmapLoader();
        loader.setOptions({ imageOrientation: 'flipY', premultiplyAlpha: 'none' });

        const bitmap = await new Promise((resolve) => {
            loader.load('/public/portfolio/images/Self.png', resolve);
        })

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
            depthTest: false,
            depthWrite: false,
        });
        
        this.instancedMesh = new THREE.InstancedMesh(geometry, material, instances);

        let index = 0;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                index = (i * columns) + j;
                uv[index * 2] = i / (rows - 1);
                uv[index * 2 + 1] = j / (columns - 1);
                random[index] = Math.pow(Math.random(), 4)
                positions[index * 3] = i * size - size * (rows - 1) / 2;
                positions[index * 3 + 1] = j * size - size * (columns - 1) / 2;
                positions[index * 3 + 2] = 0;

                let m = new THREE.Matrix4();
                m.setPosition(positions[index * 3], positions[index * 3 + 1], positions[index * 3 + 2]);
                this.instancedMesh.setMatrixAt(index, m);

                index++;
            }
        }

        this.instancedMesh.needsUpdate = true;
        geometry.setAttribute('aRandom', new THREE.InstancedBufferAttribute(random, 1));
        geometry.setAttribute('pixelUV', new THREE.InstancedBufferAttribute(uv, 2));
        geometry.setAttribute('aPosition', new THREE.BufferAttribute(positionArray, 3));
        
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
        const width = window.innerWidth;
        const height = window.innerHeight;
        const aspect = width / height;

        this.renderer.setSize(width, height);

        if (this.camera && this.camera.isPerspectiveCamera) {
            this.camera.aspect = aspect;

            this.camera.fov = Math.max(75, Math.min(100, 100 / aspect));
            this.camera.updateProjectionMatrix();
            
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
}