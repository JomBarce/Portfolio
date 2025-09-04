// attribute vec3 aPosition;

// uniform float uTime;
// uniform float uDisplacement;

// varying vec2 vTextCoords;

// void main() {
//     float noise = sin(aPosition.x + aPosition.z + uTime) * 0.5 + 1.0;
//     vec3 displacedPosition = aPosition;
//     displacedPosition.y += noise * uDisplacement;

//     vTextCoords = uv;
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPosition, 1.0);
// }