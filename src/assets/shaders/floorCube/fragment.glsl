varying vec2 vUv;
uniform vec3 uColor;
void main() {
  // Pick a coordinate to visualize in a grid
  vec2 coord = vUv.xy;

  // Compute anti-aliased world-space grid lines
  vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord);
  float line = min(grid.x, grid.y);

  // Just visualize the grid lines directly
  vec3 color = vec3(uColor.r - min(line, 1.0), uColor.g- min(line, 1.0),uColor.b - min(line, 1.0));
    // color =vec3 ( pow(color.r, 1.0 / 2.2), pow(color.g, 1.0 / 2.2), pow(color.b, 1.0 / 2.2));
    vec3 colorMix = mix(color, uColor, 0.5);
  // Apply gamma correction

  gl_FragColor = vec4(color, 1.0);
}