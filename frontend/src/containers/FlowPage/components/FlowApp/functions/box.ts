import * as THREE from 'three';

import { appObj } from './application';

import boxVertexShader from './shaders/box/vertex.glsl';
import boxFragmentShader from './shaders/box/fragment.glsl';

export const box = () => {
  const container = new THREE.Object3D();
  container.matrixAutoUpdate = false;

  const generateBox = () => {
    const geometry = new THREE.PlaneBufferGeometry(2, 2, 50, 50);

    const material = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      wireframe: true,
      fragmentShader: boxFragmentShader,
      vertexShader: boxVertexShader,
      uniforms: {
        uTime: { value: 0 },
      },
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, 0);

    appObj.appTime.on('tick', (slowDownFactor, time, _delta) => {
      material.uniforms.uTime.value = (time * slowDownFactor) / 1000;
    });

    container.add(mesh);
  };

  generateBox();

  return {
    container,
  };
};
