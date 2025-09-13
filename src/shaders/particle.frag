uniform sampler2D uTexture;
uniform float uColumns;
uniform float uRows;

varying vec2 vTextCoords;

void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;

    // UV mapping
    vec2 uv = gl_PointCoord;
    uv.y *= -1.0;
    uv /= vec2(uColumns, uRows);

    // Texture
    float textOffsetU = vTextCoords.x / uColumns;
    float textOffsetV = vTextCoords.y / uRows;
    uv += vec2(textOffsetU, textOffsetV);
    uv += vec2(0.5);

    vec4 textureColor = texture2D(uTexture, uv);

    // Discard dark pixels
    if (textureColor.r < 0.1 && textureColor.g < 0.1 && textureColor.b < 0.1) {
        discard;
    }

    // Grayscale conversion
    float gray = dot(textureColor.rgb, vec3(0.299, 0.587, 0.114));
    vec4 grayColor = vec4(vec3(gray), textureColor.a);

    gl_FragColor = grayColor;
}