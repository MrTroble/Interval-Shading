#version 450
layout( set = 0, binding = 0 ) uniform sampler2D density;

layout( location = 1 ) in vec2 frag_uv;
layout( location = 0 ) out vec4 frag_color;



void main() {

    vec4 d = texture(density,vec2(frag_uv.x, frag_uv.y)).xyzw;

    frag_color = d;
    
}