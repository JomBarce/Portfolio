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
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;

    vec4 textureColor = texture2D(uTexture, vPixelUV);
    float brightness = pow(textureColor.r, 0.9) + (vRandom * 0.02);

    float asciiIndex = floor(brightness * uAsciiLength);
    
    vec2 asciiUV = vec2(
        (vQuadUV.x / uAsciiLength) + (floor(brightness * uAsciiLength) / uAsciiLength),
        vQuadUV.y
    );

    vec4 asciiColor = texture2D(uAsciiTexture, asciiUV);

    int paletteIndex = int(clamp(floor(brightness * 5.0), 0.0, 4.0));
    vec3 tintColor = uPalette[paletteIndex];


    float glow = pow(brightness, 2.0) + sin(uTime * 2.0 + vRandom * 10.0) * 0.05;
    vec3 glowColor = tintColor * glow;

    asciiColor.rgb += glowColor * 0.15;

    
    asciiColor.rgb *= tintColor;

    gl_FragColor = asciiColor;

    // vec3 debugColor = uPalette[paletteIndex];
    // gl_FragColor = vec4(debugColor, 1.0);
}