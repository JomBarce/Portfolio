attribute vec3 aPosition;
attribute vec2 pixelUV;
attribute float aRandom;

varying vec2 vPixelUV;
varying vec2 vQuadUV;
varying float vRandom;

void main() {
    vPixelUV = pixelUV;
    vQuadUV = uv;
    vRandom = aRandom;

    // Apply instance transform
    vec4 localPos = instanceMatrix * vec4(position, 1.0);

    // Normalize to screen space
    vec2 screenPos = localPos.xy * 0.5 + 0.5;
    vec2 center = vec2(0.5);

    // Barrel distortion
    vec2 distorted = screenPos - center;
    float strength = 0.02;
    distorted /= 1.0 + strength * pow(length(distorted), 2.0);
    screenPos = distorted + center;

    vec2 finalPos = screenPos * 2.0 - 1.0;

    // Apply full transform
    vec4 distortedWorldPos = vec4(finalPos, localPos.z, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * distortedWorldPos;
}