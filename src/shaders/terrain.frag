

uniform vec3 uColorA;
uniform vec3 uColorB;

varying vec2 vTextCoords;
varying float noise;

void main() {
    // Re-map the noise value
    float remappedNoise = noise * 0.5 + 0.5;

    // Colors based on noise value
    vec3 color = mix(uColorA, uColorB, remappedNoise);
    
    gl_FragColor = vec4(color, 1.0);
}