---
title: "Three.js Guide"
description: "Build 3D and WebXR experiences with Three.js for the Spatial Shanghai 2026 hackathon"
---

## What is Three.js?

[Three.js](https://threejs.org/) is a lightweight JavaScript library that makes it easy to create 3D graphics in the browser using WebGL. It also provides built-in support for **WebXR**, the browser API for building AR and VR experiences — making it one of the best tools for this hackathon.

**Why Three.js for this hackathon?**

- Runs in any modern browser — no app store required
- Native WebXR support for AR and VR headsets
- Huge ecosystem of plugins, loaders, and community examples
- Works with React via React Three Fiber for rapid prototyping

---

## Getting Started

### Prerequisites

Make sure you have **Node.js 18+** installed. We recommend using [Vite](https://vitejs.dev/) as the build tool for fast development.

### Project Setup

Create a new Vite project and install Three.js:

```bash
# Create a new Vite project
npm create vite@latest my-xr-app -- --template vanilla
cd my-xr-app

# Install Three.js
npm install three
npm install -D @types/three  # TypeScript users

# Start the dev server
npm run dev
```

### Minimal Example

Replace the contents of `main.js` with this to see a spinning cube:

```javascript
import * as THREE from 'three';

// Scene — the container for all 3D objects
const scene = new THREE.Scene();

// Camera — defines what we see
const camera = new THREE.PerspectiveCamera(
  75,                                    // Field of view
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1,                                   // Near clipping plane
  1000                                   // Far clipping plane
);
camera.position.z = 5;

// Renderer — draws the scene to the screen
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Mesh = Geometry + Material
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff88 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
```

Also update your `index.html` body to just:

```html
<body style="margin: 0; overflow: hidden;">
  <script type="module" src="/main.js"></script>
</body>
```

---

## Core Concepts

Understanding these six building blocks is all you need to start creating 3D scenes:

### Scene

The root container that holds all objects, lights, and cameras. Think of it as the 3D world.

```javascript
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111); // Dark background
```

### Camera

Defines the viewpoint. **PerspectiveCamera** mimics human vision with depth; **OrthographicCamera** has no perspective distortion.

```javascript
// Most common for 3D/XR
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
```

### Renderer

The WebGLRenderer draws the scene. For XR, you must enable XR support on the renderer.

```javascript
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.xr.enabled = true; // Enable WebXR
```

### Geometry

The shape of an object. Three.js includes many built-in geometries:

- `BoxGeometry` — Cube
- `SphereGeometry` — Sphere
- `PlaneGeometry` — Flat surface
- `CylinderGeometry` — Cylinder
- `TorusGeometry` — Donut shape

### Material

Defines how the surface looks. Common materials:

- `MeshStandardMaterial` — Physically-based, responds to lights (recommended)
- `MeshBasicMaterial` — Flat color, ignores lights (fast)
- `MeshPhongMaterial` — Shiny highlights

```javascript
const material = new THREE.MeshStandardMaterial({
  color: 0x2194ce,
  metalness: 0.3,
  roughness: 0.4,
});
```

### Mesh

A Mesh combines a Geometry and a Material into a visible 3D object that you add to the scene.

```javascript
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 1, -3); // x, y, z
scene.add(mesh);
```

---

## WebXR Integration

Three.js has first-class WebXR support. Here is how to create an immersive VR or AR session:

### VR Experience

```javascript
import * as THREE from 'three';
import { VRButton } from 'three/addons/webxr/VRButton.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true; // Key line!
document.body.appendChild(renderer.domElement);

// Add the "Enter VR" button
document.body.appendChild(VRButton.createButton(renderer));

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Add objects to your scene...
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 0.5, 0.5),
  new THREE.MeshStandardMaterial({ color: 0xff6347 })
);
cube.position.set(0, 1.5, -2);
scene.add(cube);
scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1));

// Use renderer.setAnimationLoop for XR (not requestAnimationFrame)
renderer.setAnimationLoop(() => {
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
});
```

### AR Experience

```javascript
import { ARButton } from 'three/addons/webxr/ARButton.js';

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.xr.enabled = true;
document.body.appendChild(renderer.domElement);

// AR button with hit-test feature
document.body.appendChild(ARButton.createButton(renderer, {
  requiredFeatures: ['hit-test'],  // Place objects on surfaces
}));
```

:::tip
**Important for XR:** Always use `renderer.setAnimationLoop()` instead of `requestAnimationFrame()` when working with WebXR. Three.js manages the XR frame loop internally.
:::

### Testing WebXR Locally

WebXR requires HTTPS. For local development:

```bash
# Vite serves over HTTPS with this flag
npm run dev -- --https

# Or use the WebXR emulator browser extension
# Chrome: "WebXR API Emulator" extension
# https://chromewebstore.google.com/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje
```

---

## Loading 3D Models

The **glTF/GLB** format is the standard for 3D models on the web. GLB is the binary version (single file, smaller).

:::tip
**Tripo3D** is available at this hackathon for AI-generated 3D models. Export your models as GLB and load them directly into Three.js!
:::

### Loading a GLB Model

```javascript
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

loader.load(
  '/models/my-model.glb',      // Path to model
  (gltf) => {                    // On success
    const model = gltf.scene;
    model.scale.set(0.5, 0.5, 0.5);
    model.position.set(0, 0, -2);
    scene.add(model);
  },
  (progress) => {                // On progress
    console.log(`Loading: ${(progress.loaded / progress.total * 100).toFixed(0)}%`);
  },
  (error) => {                   // On error
    console.error('Failed to load model:', error);
  }
);
```

### With Draco Compression

For compressed GLB files (much smaller file sizes):

```javascript
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');

const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader);

loader.load('/models/compressed-model.glb', (gltf) => {
  scene.add(gltf.scene);
});
```

**Where to find free 3D models:**

- [Sketchfab](https://sketchfab.com/) — Thousands of free downloadable models
- [Poly Pizza](https://poly.pizza/) — Low-poly models, CC0 license
- [Kenney Assets](https://kenney.nl/assets) — Game-ready asset packs
- **Tripo3D** (hackathon sponsor) — Generate models from text or images with AI

---

## React Three Fiber Ecosystem

If you prefer React, the **React Three Fiber** ecosystem gives you a declarative way to build Three.js scenes with powerful helper libraries.

### Installation

```bash
# Create a React + Vite project
npm create vite@latest my-xr-app -- --template react
cd my-xr-app

# Install the R3F ecosystem
npm install three @react-three/fiber @react-three/drei @react-three/xr
```

### @react-three/fiber (React Three Fiber)

The core library. Renders Three.js scenes as React components.

```jsx
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <mesh position={[0, 1, -3]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  );
}
```

### @react-three/drei

A collection of useful helpers: orbit controls, text, environment maps, loaders, and more.

```jsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, Text } from '@react-three/drei';

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={0.5} />;
}

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <Environment preset="sunset" />
      <Model url="/models/my-model.glb" />
      <Text position={[0, 2, 0]} fontSize={0.5} color="white">
        Hello XR!
      </Text>
    </Canvas>
  );
}
```

### @react-three/xr

Adds WebXR support to React Three Fiber — VR/AR sessions, controllers, hand tracking, and hit testing.

```jsx
import { Canvas } from '@react-three/fiber';
import { createXRStore, XR } from '@react-three/xr';

const store = createXRStore();

function App() {
  return (
    <>
      <button onClick={() => store.enterVR()}>Enter VR</button>
      <button onClick={() => store.enterAR()}>Enter AR</button>
      <Canvas>
        <XR store={store}>
          <ambientLight />
          <mesh position={[0, 1.5, -2]}>
            <boxGeometry />
            <meshStandardMaterial color="royalblue" />
          </mesh>
        </XR>
      </Canvas>
    </>
  );
}
```

---

## Quick Starter Template

Here is a complete React Three Fiber + XR starter you can copy to get building immediately:

### Step 1: Create the Project

```bash
npm create vite@latest spatial-hack -- --template react
cd spatial-hack
npm install three @react-three/fiber @react-three/drei @react-three/xr
```

### Step 2: Replace `src/App.jsx`

```jsx
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { createXRStore, XR } from '@react-three/xr';
import { useRef } from 'react';

const store = createXRStore();

function SpinningBox({ position, color }) {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.5;
    ref.current.rotation.y += delta * 0.8;
  });
  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.4, 0.4, 0.4]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div style={{ position: 'absolute', zIndex: 1, padding: '16px' }}>
        <button onClick={() => store.enterAR()}
          style={{ marginRight: 8, padding: '8px 16px', fontSize: 16 }}>
          Enter AR
        </button>
        <button onClick={() => store.enterVR()}
          style={{ padding: '8px 16px', fontSize: 16 }}>
          Enter VR
        </button>
      </div>
      <Canvas camera={{ position: [0, 1.5, 4] }}>
        <XR store={store}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Environment preset="city" />
          <OrbitControls />
          <SpinningBox position={[-1, 1, -2]} color="tomato" />
          <SpinningBox position={[0, 1, -2]} color="royalblue" />
          <SpinningBox position={[1, 1, -2]} color="limegreen" />
          {/* Add a ground plane */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color="#333" />
          </mesh>
        </XR>
      </Canvas>
    </div>
  );
}
```

### Step 3: Run It

```bash
npm run dev
```

Open the browser and you will see three spinning cubes. Click "Enter AR" or "Enter VR" to start an immersive session (requires a compatible device or the WebXR emulator extension).

---

## Tips for the Hackathon

- **Start with the R3F template above** — it gets you to a working XR scene in minutes
- **Use Tripo3D** to generate 3D models from text prompts, then export as GLB
- **Use `drei` helpers** like `useGLTF`, `Html`, `Text`, and `Billboard` to save time
- **Test with the WebXR Emulator** browser extension if you do not have a headset
- **Keep models small** — aim for GLB files under 5MB for fast loading
- **Use `<Environment preset="..." />`** from drei for instant good lighting

---

## Resources and Documentation

### Official Documentation

- [Three.js Documentation](https://threejs.org/docs/) — Full API reference
- [Three.js Examples](https://threejs.org/examples/) — Hundreds of live demos
- [Three.js Fundamentals](https://threejs.org/manual/) — Official learning guide

### React Three Fiber

- [React Three Fiber Docs](https://r3f.docs.pmnd.rs/) — R3F documentation
- [Drei Docs](https://drei.docs.pmnd.rs/) — Helper library docs
- [React Three XR Docs](https://github.com/pmndrs/xr) — XR integration docs

### WebXR

- [WebXR Device API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API) — Browser API reference
- [Immersive Web (W3C)](https://immersiveweb.dev/) — WebXR samples and specs
- [WebXR API Emulator](https://chromewebstore.google.com/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje) — Chrome extension for testing

### Hackathon Resources

- [Three.js Skills & Patterns](https://github.com/cloudai-x/threejs-skills) — Curated skills and patterns for Three.js development (recommended for this hackathon)

### Learning Resources

- [Three.js Journey](https://threejs-journey.com/) — Comprehensive video course (paid, excellent)
- [Discover Three.js](https://discoverthreejs.com/) — Free online book
- [Bruno Simon's Portfolio](https://bruno-simon.com/) — Inspiration for creative 3D web projects
