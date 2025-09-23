import * as THREE from 'https://esm.sh/three@0.154.0';

import ViewBase from '../shared/viewBase.js';
import CameraManager from '../shared/cameraManager.js';

export default class MoreView extends ViewBase {
    constructor(canvas) {
        super(canvas);
        this._handlers = {};
        this.direction = 1;
    }

    async init() {
        this.setBackground();
        this.addPageContent();

        this.handleResize();
    }

    setBackground() {
        this.shapes = new THREE.Object3D();

        const geometry = new THREE.BoxGeometry(50, 50, 50);
        const edges = new THREE.EdgesGeometry( geometry ); 
        const lineMat = new THREE.LineBasicMaterial({ color: 0xffd319 });
        const line = new THREE.LineSegments(edges, lineMat); 

        this.cube = new THREE.Object3D();
        this.cube.add(line);
        
        this.shapes.add(this.cube);


        const geometry1 = new THREE.BoxGeometry(100, 100, 100);
        const edges1 = new THREE.EdgesGeometry( geometry1 ); 
        const lineMat1 = new THREE.LineBasicMaterial({ color: 0x00ffff });
        const line1 = new THREE.LineSegments(edges1, lineMat1); 

        this.cube1 = new THREE.Object3D();
        this.cube1.add(line1);

        this.shapes.add(this.cube1);

        const geometry2 = new THREE.BoxGeometry(150, 150, 150);
        const edges2 = new THREE.EdgesGeometry( geometry2 ); 
        const lineMat2 = new THREE.LineBasicMaterial({ color: 0xff00ff });
        const line2 = new THREE.LineSegments(edges2, lineMat2); 

        this.cube2 = new THREE.Object3D();
        this.cube2.add(line2);

        this.shapes.add(this.cube2);

        this.scene.add(this.shapes);
    }

    addPageContent() {
        this.arcardeDiv = document.getElementById('arcadeContainer');
        this.portfolioDiv = document.getElementById('portfolioContainer');
        this.soonDiv = document.getElementById('soonContainer');

        this._handlers.arcadeClick = () => {
            window.open('https://github.com/JomBarce/ArcadeGames', '_blank');
        };

        this._handlers.portfolioClick = () => {
            window.open('https://jombarce.github.io/Jomer-Barcenilla/', '_blank');
        };

        this._handlers.soonClick = () => {
            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
        };

        this.arcardeDiv.addEventListener('click', this._handlers.arcadeClick);
        this.portfolioDiv.addEventListener('click', this._handlers.portfolioClick);
        this.soonDiv.addEventListener('click', this._handlers.soonClick);
    }

    handleResize() {
        if (!this.renderer || !this.camera || !this.camera.isPerspectiveCamera) return;

        const width = window.innerWidth;
        const height = window.innerHeight;
        
        this.renderer.setSize(width, height);
        CameraManager.resize(width, height);
        
        const position = new THREE.Vector3(0, 0, 100);
        const angle = new THREE.Vector3(0, 100, 0);
        
        CameraManager.moveToLookAt(position, angle, 2.0, 'power4.out');
    }

    animate() {
        super.animate();

        if (!this.shapes) return;
        
        const delta = this.clock.getDelta();
        this.shapes.position.z += 0.02 * this.direction;

        if (this.shapes.position.z > 5 || this.shapes.position.z < -5) {
            this.direction *= -1;
        }

        this.cube.rotation.x += delta/2;
        this.cube.rotation.y -= 0.001;

        this.cube1.rotation.x -= delta/2;
        this.cube1.rotation.y -= 0.001;

        this.cube2.rotation.x += delta/2;
        this.cube2.rotation.y += 0.001;
    }

    cleanup() {
        if (this.shapes) {
            this.scene.remove(this.shapes);

            this.shapes.traverse(shape => {
                if (shape.geometry) shape.geometry.dispose();

                if (shape.material) {
                    if (Array.isArray(shape.material)) {
                        shape.material.forEach(mat => mat.dispose());
                    } else {
                        shape.material.dispose();
                    }
                }
            });

            this.shapes = null;
            this.cube = null;
            this.cube1 = null;
            this.cube2 = null;
        }

        this.arcardeDiv?.removeEventListener('click', this._handlers.arcadeClick);
        this.portfolioDiv?.removeEventListener('click', this._handlers.portfolioClick);
        this.soonDiv?.removeEventListener('click', this._handlers.soonClick);

        super.cleanup();
    }
}