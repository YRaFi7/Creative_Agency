import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./GridDistortion.css";

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;

    gl_Position = projectionMatrix
      * modelViewMatrix
      * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform sampler2D uDataTexture;

  varying vec2 vUv;

  void main() {
    vec4 offset = texture2D(uDataTexture, vUv);

    vec2 uv = vUv - 0.02 * offset.rg;

    gl_FragColor = texture2D(uTexture, uv);
  }
`;

function GridDistortion({
  grid = 15,
  mouse = 0.1,
  strength = 0.15,
  relaxation = 0.9,
  imageSrc,
  className = "",
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const camera = new THREE.OrthographicCamera(
      -1,
      1,
      1,
      -1,
      -100,
      100
    );

    camera.position.z = 2;

    const size = grid;

    const data = new Float32Array(4 * size * size);

    for (let i = 0; i < size * size; i++) {
      data[i * 4] = 0;
      data[i * 4 + 1] = 0;
      data[i * 4 + 2] = 0;
      data[i * 4 + 3] = 255;
    }

    const dataTexture = new THREE.DataTexture(
      data,
      size,
      size,
      THREE.RGBAFormat,
      THREE.FloatType
    );

    dataTexture.needsUpdate = true;

    const uniforms = {
      uTexture: {
        value: null,
      },
      uDataTexture: {
        value: dataTexture,
      },
    };

    const textureLoader = new THREE.TextureLoader();

    textureLoader.load(
      imageSrc,
      (texture) => {
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;

        uniforms.uTexture.value = texture;
      },
      undefined,
      (error) => {
        console.error("Failed to load GridDistortion image:", error);
      }
    );

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
    });

    const geometry = new THREE.PlaneGeometry(
      1,
      1,
      size - 1,
      size - 1
    );

    const plane = new THREE.Mesh(geometry, material);

    scene.add(plane);

    const mouseState = {
      x: 0.5,
      y: 0.5,
      prevX: 0.5,
      prevY: 0.5,
      vX: 0,
      vY: 0,
    };

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width;
      const y = 1 - (event.clientY - rect.top) / rect.height;

      mouseState.vX = x - mouseState.prevX;
      mouseState.vY = y - mouseState.prevY;

      mouseState.x = x;
      mouseState.y = y;

      mouseState.prevX = x;
      mouseState.prevY = y;
    };

    const handleMouseLeave = () => {
      mouseState.vX = 0;
      mouseState.vY = 0;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      const rect = container.getBoundingClientRect();

      if (rect.width === 0 || rect.height === 0) {
        return;
      }

      renderer.setSize(rect.width, rect.height);

      const aspect = rect.width / rect.height;

      plane.scale.set(aspect, 1, 1);

      camera.left = -aspect / 2;
      camera.right = aspect / 2;
      camera.top = 0.5;
      camera.bottom = -0.5;

      camera.updateProjectionMatrix();
    };

    handleResize();

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    let animationFrame;

    const animate = () => {
      animationFrame = requestAnimationFrame(animate);

      if (!uniforms.uTexture.value) {
        return;
      }

      for (let i = 0; i < size * size; i++) {
        data[i * 4] *= relaxation;
        data[i * 4 + 1] *= relaxation;
      }

      const gridMouseX = size * mouseState.x;
      const gridMouseY = size * mouseState.y;

      const maxDist = size * mouse;

      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const distX = gridMouseX - i;
          const distY = gridMouseY - j;

          const distSq = distX * distX + distY * distY;

          if (distSq < maxDist * maxDist) {
            const index = 4 * (i + size * j);

            const distance = Math.sqrt(distSq);

            const power = Math.min(
              maxDist / Math.max(distance, 0.001),
              10
            );

            data[index] +=
              strength * 100 * mouseState.vX * power;

            data[index + 1] -=
              strength * 100 * mouseState.vY * power;
          }
        }
      }

      dataTexture.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);

      resizeObserver.disconnect();

      container.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      container.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      geometry.dispose();
      material.dispose();
      dataTexture.dispose();

      if (uniforms.uTexture.value) {
        uniforms.uTexture.value.dispose();
      }

      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [grid, mouse, strength, relaxation, imageSrc]);

  return (
    <div
      ref={containerRef}
      className={`distortion-container ${className}`}
    />
  );
}

export default GridDistortion;