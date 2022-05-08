import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const uniforms = {
    colorA: {
        type: 'vec3',
        value: new THREE.Color("rgb(40, 255, 20)")
    },
    colorB: {
        type: 'vec3',
        value: new THREE.Color("rgba(255, 100, 70)")
    },
    colorC: {
      type: 'vec3',
      value: new THREE.Color("rgb(10, 155, 220)")
  }
};

const vertexShader = `
  varying vec3 vUv;

  void main() {
    vUv = position;

    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;
  }
`;

const fragmentShaderA = `
    uniform vec3 colorA;
    uniform vec3 colorB;

    varying vec3 vUv;

    void main() {
      gl_FragColor = vec4(mix(colorA, colorB, vUv.x), 1.0);
    }
`;

const fragmentShaderB = `
    uniform vec3 colorB;
    uniform vec3 colorC;

    varying vec3 vUv;

    void main() {
      gl_FragColor = vec4(mix(colorC, colorB, vUv.x), 1.0);
    }
`;

export default function Box(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, setHover] = useState(false)
    const [clicked, setClicked] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {

        ref.current.rotation.x += 0.01;
        ref.current.rotation.y += 0.01;
    });
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 4 : 3}
        onClick={() => setClicked(!clicked)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        {hovered && (
          <shaderMaterial
            uniforms={uniforms}
            fragmentShader={fragmentShaderA}
            vertexShader={vertexShader}
          />
        )}
        {!hovered && (
          <shaderMaterial
            uniforms={uniforms}
            fragmentShader={fragmentShaderB}
            vertexShader={vertexShader}
          />
        )}
      </mesh>
    )
};
