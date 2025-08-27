uniform sampler2D uAsciiTexture;
uniform sampler2D uTexture;
uniform float uAsciiLength;
uniform vec3 uPalette[5];
uniform float uTime;

varying vec2 vPixelUV;
varying vec2 vQuadUV;
varying float vRandom;

void main() {
    // Distortion Logic
    vec2 uvDistort = vPixelUV + vec2(sin(vPixelUV.y * 5.0 + uTime), 0.0) * 0.01;

    // Source texture brightness
    vec4 textureColor = texture2D(uTexture, uvDistort);
    float brightness = pow(textureColor.r, 0.9) + (vRandom * 0.02);

    // Get ASCII from brightness
    float asciiIndex = floor(brightness * uAsciiLength);
    vec2 asciiUV = vec2(
        (vQuadUV.x / uAsciiLength) + (asciiIndex / uAsciiLength),
        vQuadUV.y
    );
    
    // Get color from brightness
    int paletteIndex = int(clamp(floor(brightness * 5.0), 0.0, 4.0));
    vec3 tintColor = uPalette[paletteIndex];
    vec3 invertedTint = vec3(1.0) - tintColor;

    // Glow Logic
    float glow = pow(brightness, 2.0) + sin(uTime * 2.0 + vRandom * 10.0) * 0.1;
    vec3 glowColor = tintColor * glow;

    // Add Effects
    vec4 asciiColor = texture2D(uAsciiTexture, asciiUV);
    float phase = mod(uTime, 30.0);

    if (phase < 5.0) {
        asciiColor = texture2D(uAsciiTexture, asciiUV);
    } else if (phase < 10.0) {
        asciiColor.rgb *= tintColor;
    } else if (phase < 15.0) {
        asciiColor.rgb += glowColor * 0.15;
    } else if (phase < 20.0) {
        asciiColor.rgb += glowColor * 0.15;
        asciiColor.rgb *= tintColor;
    } else if (phase < 25.0) {
        asciiColor.rgb *= invertedTint;
    } else {
        asciiColor.rgb += (glow * invertedTint) * 0.3;
    }

    float scanline = sin(vPixelUV.y * 800.0) * 0.04;
    asciiColor.rgb -= scanline;

    vec2 dist = vPixelUV - 0.5;
    float vignette = 1.0 - dot(dist, dist) * 1.5;
    asciiColor.rgb *= vignette;

    // Final output
    gl_FragColor = asciiColor;

    
}