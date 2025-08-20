attribute vec2 pixelUV;
attribute float aRandom;

varying vec2 vTextCoords;
varying vec2 vPixelUV;
varying vec2 vQuadUV;
varying float vRandom;

void main() {   
    vPixelUV = pixelUV;
    vQuadUV = uv;
    vRandom = aRandom;

    vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
}