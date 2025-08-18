uniform float uSize;
uniform float uColumns;
uniform float uRows;
uniform float uTime;

varying vec2 vTextCoords;

void main() {
	// Original Position
    vec3 transformed = position;

    // Wave Motion
    transformed.z += sin(transformed.x * 0.1 + uTime) * 2.0;
	transformed.y += cos(transformed.x * 0.1 + uTime) * 1.0;

    // Positions
    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
    gl_Position = projectionMatrix * mvPosition;
	
	gl_PointSize = uSize;

	vTextCoords = position.xy ;
}