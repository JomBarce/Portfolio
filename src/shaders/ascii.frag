uniform sampler2D uAsciiTexture;
uniform sampler2D uTexture;
uniform float uColumns;
uniform float uRows;
uniform float uAsciiLength;
uniform vec3 uPalette[5];
uniform float uTime;

varying vec2 vPixelUV;
varying vec2 vQuadUV;
varying float vRandom;

void main() {
    // Source texture brightness
    vec4 textureColor = texture2D(uTexture, vPixelUV);
    float brightness = pow(textureColor.r, 0.9) + (vRandom * 0.02);

    // Get ASCII UV from brightness
    float asciiIndex = floor(brightness * uAsciiLength);
    vec2 asciiUV = vec2(
        (vQuadUV.x / uAsciiLength) + (asciiIndex / uAsciiLength),
        vQuadUV.y
    );

    vec4 asciiColor = texture2D(uAsciiTexture, asciiUV);

    // Get color based on brightness
    int paletteIndex = int(clamp(floor(brightness * 5.0), 0.0, 4.0));
    vec3 tintColor = uPalette[paletteIndex];

    // Get glow based on brightness and time
    float glow = pow(brightness, 2.0) + sin(uTime * 2.0 + vRandom * 10.0) * 0.1;
    vec3 glowColor = tintColor * glow;

    // Add glow and tint
    asciiColor.rgb += glowColor * 0.15;
    asciiColor.rgb *= tintColor;

    gl_FragColor = asciiColor;

    // vec3 debugColor = uPalette[paletteIndex];
    // gl_FragColor = vec4(debugColor, 1.0);
}