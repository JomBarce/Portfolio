import * as THREE from 'https://esm.sh/three@0.154.0';

import AssetManager from '../shared/assetManager.js';
import { fetchText } from '../../utils/fetch.js';

export default class ImageView {
    constructor(canvas) {
        this.canvas = canvas;
        this.clock = new THREE.Clock();
        
        this.setRenderer();
        this.setScene();
        this.setLight();
        this.setCamera();
        this.addListeners();
    }

    setRenderer() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            canvas: this.canvas,
            alpha: true
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(width, height);
        this.renderer.setClearColor(0xffffff, 0);
    }

    setScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x000000);       
    }

    setLight() {
        const directional = new THREE.DirectionalLight(0xffffff, 1);
        directional.position.set(50, 50, 50);
        this.scene.add(directional);

        const ambient = new THREE.AmbientLight(0xffffff, 0.3);
        this.scene.add(ambient);
    }

    setCamera() {
        this.camera = new THREE.PerspectiveCamera(75, this.canvas.clientWidth / this.canvas.clientHeight, 0.1, 1000);
    }

    addListeners() {
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    handleResize() {
        if (!this.renderer || !this.camera || !this.camera.isPerspectiveCamera) return;

        const width = window.innerWidth;
        const height = window.innerHeight;

        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }

    async init() {
        await this.setAsciiImage();

        const model = await AssetManager.loadModel('monitor', '/public/portfolio/assets/Monitor.glb');
        model.scene.scale.set(0.1, 0.1, 0.1);

        const monitorNode = model.scene.getObjectByName('Monitor');

        if (monitorNode && this.instancedMesh) {
            this.instancedMesh.position.set(0, 10, -170.5);
            this.instancedMesh.scale.set(20, 20, 1);
            monitorNode.add(this.instancedMesh);
        }

        this.scene.add(model.scene);

        this.createBox();
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

    animate() {
        if (this.scene && this.camera && this.renderer) {
            requestAnimationFrame(() => this.animate());
            this.renderer.render(this.scene, this.camera);
        }
    }

    cleanup() {
        if (this.instancedMesh) {
            this.scene.remove(this.instancedMesh);
            this.instancedMesh.geometry.dispose();
            this.instancedMesh.material.dispose();
        }

        if (this.renderer) {
            this.renderer.dispose();
            this.renderer.domElement = null;
            this.renderer = null;
        }
        
        this.scene = null;

        window.removeEventListener('resize', this.handleResize.bind(this));
    }
}