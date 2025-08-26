import * as THREE from 'https://esm.sh/three@0.154.0';
import gsap from 'https://esm.sh/gsap@3.12.2';

class CameraManager {
  constructor() {
    const fieldOfView = 75;
    const aspectRatio = window.innerWidth / window.innerHeight;
    const nearPlane = 0.1;
    const farPlane = 1000;

    this.camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
    this.camera.position.set(0, 0, 5);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
  }

  getCamera() {
    return this.camera;
  }

  resize(width, height) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  moveTo(position, lookAt, duration = 1.5, ease = 'power2.inOut') {
    gsap.to(this.camera.position, {
      x: position.x,
      y: position.y,
      z: position.z,
      duration,
      ease,
      onUpdate: () => {
        this.camera.lookAt(lookAt);
      }
    });
    // this.target.copy(lookAt);
  }
}

export default new CameraManager();