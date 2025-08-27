import * as THREE from 'https://esm.sh/three@0.154.0';
import { GLTFLoader } from 'https://esm.sh/three@0.154.0/examples/jsm/loaders/GLTFLoader.js';

class AssetManager {
    constructor() {
        this.images = {};
        this.models = {};
    }

    async loadImage(name, url) {
        if (this.images[name]) return this.images[name];

        const loader = new THREE.ImageBitmapLoader();
        loader.setOptions({ imageOrientation: 'flipY', premultiplyAlpha: 'none' });

        const bitmap = await new Promise((resolve) => {
            loader.load(url, resolve);
        })

        this.images[name] = bitmap;

        return bitmap;
    }

    async loadModel(name, url) {
        if (this.models[name]) return this.models[name];
        
        const loader = new GLTFLoader();
        const gltf = await loader.loadAsync(url);
        this.models[name] = gltf;

        return gltf;
    }

    getImage(name) {
        return this.images[name];
    }

    getModel(name) {
        return this.models[name];
    }

    clear() {
        this.images = {};
        this.models = {};
    }
}

export default new AssetManager();