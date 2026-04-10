---
title: "Three.js 指南"
description: "使用 Three.js 为 Spatial Shanghai 2026 黑客松构建 3D 和 WebXR 体验"
---

## 什么是 Three.js？

[Three.js](https://threejs.org/) 是一个轻量级的 JavaScript 库，可以轻松地在浏览器中使用 WebGL 创建 3D 图形。它还内置了对 **WebXR** 的支持，WebXR 是用于构建 AR 和 VR 体验的浏览器 API——使其成为本次黑客松的最佳工具之一。

**为什么在黑客松中使用 Three.js？**

- 在任何现代浏览器中运行——无需应用商店
- 原生支持 AR 和 VR 头戴设备的 WebXR
- 庞大的插件、加载器和社区示例生态系统
- 通过 React Three Fiber 与 React 配合，实现快速原型开发

---

## 快速开始

### 前提条件

确保已安装 **Node.js 18+**。我们推荐使用 [Vite](https://vitejs.dev/) 作为构建工具以实现快速开发。

### 项目设置

创建一个新的 Vite 项目并安装 Three.js：

```bash
# 创建新的 Vite 项目
npm create vite@latest my-xr-app -- --template vanilla
cd my-xr-app

# 安装 Three.js
npm install three
npm install -D @types/three  # TypeScript 用户

# 启动开发服务器
npm run dev
```

### 最小示例

将 `main.js` 的内容替换为以下代码，即可看到一个旋转的立方体：

```javascript
import * as THREE from 'three';

// 场景——所有 3D 对象的容器
const scene = new THREE.Scene();

// 相机——定义我们看到的内容
const camera = new THREE.PerspectiveCamera(
  75,                                    // 视野角度
  window.innerWidth / window.innerHeight, // 宽高比
  0.1,                                   // 近裁剪面
  1000                                   // 远裁剪面
);
camera.position.z = 5;

// 渲染器——将场景绘制到屏幕上
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// 网格 = 几何体 + 材质
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff88 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 灯光
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

// 动画循环
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// 处理窗口大小变化
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
```

同时将你的 `index.html` body 更新为：

```html
<body style="margin: 0; overflow: hidden;">
  <script type="module" src="/main.js"></script>
</body>
```

---

## 核心概念

理解以下六个基本构建块就足以开始创建 3D 场景：

### 场景

根容器，包含所有对象、灯光和相机。可以将其视为 3D 世界。

```javascript
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111); // 深色背景
```

### 相机

定义视角。**PerspectiveCamera** 模拟人眼的深度视觉；**OrthographicCamera** 没有透视变形。

```javascript
// 3D/XR 中最常用的
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
```

### 渲染器

WebGLRenderer 绘制场景。对于 XR，必须在渲染器上启用 XR 支持。

```javascript
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.xr.enabled = true; // 启用 WebXR
```

### 几何体

对象的形状。Three.js 包含许多内置几何体：

- `BoxGeometry` — 立方体
- `SphereGeometry` — 球体
- `PlaneGeometry` — 平面
- `CylinderGeometry` — 圆柱体
- `TorusGeometry` — 甜甜圈形状

### 材质

定义表面的外观。常用材质：

- `MeshStandardMaterial` — 基于物理的，响应灯光（推荐）
- `MeshBasicMaterial` — 纯色，忽略灯光（快速）
- `MeshPhongMaterial` — 光泽高光

```javascript
const material = new THREE.MeshStandardMaterial({
  color: 0x2194ce,
  metalness: 0.3,
  roughness: 0.4,
});
```

### 网格

网格将几何体和材质组合成一个可见的 3D 对象，并添加到场景中。

```javascript
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 1, -3); // x, y, z
scene.add(mesh);
```

---

## WebXR 集成

Three.js 具有一流的 WebXR 支持。以下是创建沉浸式 VR 或 AR 会话的方法：

### VR 体验

```javascript
import * as THREE from 'three';
import { VRButton } from 'three/addons/webxr/VRButton.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true; // 关键代码！
document.body.appendChild(renderer.domElement);

// 添加"进入 VR"按钮
document.body.appendChild(VRButton.createButton(renderer));

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// 向场景中添加对象...
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 0.5, 0.5),
  new THREE.MeshStandardMaterial({ color: 0xff6347 })
);
cube.position.set(0, 1.5, -2);
scene.add(cube);
scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1));

// XR 中使用 renderer.setAnimationLoop（而非 requestAnimationFrame）
renderer.setAnimationLoop(() => {
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
});
```

### AR 体验

```javascript
import { ARButton } from 'three/addons/webxr/ARButton.js';

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.xr.enabled = true;
document.body.appendChild(renderer.domElement);

// 带有命中测试功能的 AR 按钮
document.body.appendChild(ARButton.createButton(renderer, {
  requiredFeatures: ['hit-test'],  // 将对象放置在表面上
}));
```

:::tip
**XR 重要提示：** 使用 WebXR 时，始终使用 `renderer.setAnimationLoop()` 而非 `requestAnimationFrame()`。Three.js 在内部管理 XR 帧循环。
:::

### 本地测试 WebXR

WebXR 需要 HTTPS。本地开发时：

```bash
# Vite 使用此标志通过 HTTPS 提供服务
npm run dev -- --https

# 或使用 WebXR 模拟器浏览器扩展
# Chrome: "WebXR API Emulator" extension
# https://chromewebstore.google.com/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje
```

---

## 加载 3D 模型

**glTF/GLB** 格式是网页 3D 模型的标准格式。GLB 是二进制版本（单个文件，更小）。

:::tip
本次黑客松提供 **Tripo3D** 用于 AI 生成 3D 模型。将模型导出为 GLB 格式，直接加载到 Three.js 中！
:::

### 加载 GLB 模型

```javascript
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

loader.load(
  '/models/my-model.glb',      // 模型路径
  (gltf) => {                    // 成功回调
    const model = gltf.scene;
    model.scale.set(0.5, 0.5, 0.5);
    model.position.set(0, 0, -2);
    scene.add(model);
  },
  (progress) => {                // 进度回调
    console.log(`Loading: ${(progress.loaded / progress.total * 100).toFixed(0)}%`);
  },
  (error) => {                   // 错误回调
    console.error('Failed to load model:', error);
  }
);
```

### 使用 Draco 压缩

用于压缩的 GLB 文件（文件大小更小）：

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

**在哪里找到免费 3D 模型：**

- [Sketchfab](https://sketchfab.com/) — 数千个免费可下载模型
- [Poly Pizza](https://poly.pizza/) — 低多边形模型，CC0 许可证
- [Kenney Assets](https://kenney.nl/assets) — 游戏就绪素材包
- **Tripo3D**（黑客松赞助商）— 使用 AI 从文本或图像生成模型

---

## React Three Fiber 生态系统

如果你更喜欢 React，**React Three Fiber** 生态系统为你提供了一种声明式的方式来构建 Three.js 场景，并配有强大的辅助库。

### 安装

```bash
# 创建 React + Vite 项目
npm create vite@latest my-xr-app -- --template react
cd my-xr-app

# 安装 R3F 生态系统
npm install three @react-three/fiber @react-three/drei @react-three/xr
```

### @react-three/fiber (React Three Fiber)

核心库。将 Three.js 场景渲染为 React 组件。

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

一组实用的辅助工具：轨道控制、文本、环境贴图、加载器等。

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

为 React Three Fiber 添加 WebXR 支持——VR/AR 会话、控制器、手部追踪和命中测试。

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

## 快速启动模板

以下是一个完整的 React Three Fiber + XR 启动模板，你可以直接复制并立即开始构建：

### 第一步：创建项目

```bash
npm create vite@latest spatial-hack -- --template react
cd spatial-hack
npm install three @react-three/fiber @react-three/drei @react-three/xr
```

### 第二步：替换 `src/App.jsx`

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
          {/* 添加地面 */}
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

### 第三步：运行

```bash
npm run dev
```

打开浏览器，你将看到三个旋转的立方体。点击"Enter AR"或"Enter VR"开始沉浸式会话（需要兼容设备或 WebXR 模拟器扩展）。

---

## 黑客松技巧

- **从上面的 R3F 模板开始**——几分钟内即可获得可用的 XR 场景
- **使用 Tripo3D** 从文本提示生成 3D 模型，然后导出为 GLB
- **使用 `drei` 辅助工具**如 `useGLTF`、`Html`、`Text` 和 `Billboard` 来节省时间
- 如果没有头显，**使用 WebXR 模拟器**浏览器扩展进行测试
- **保持模型小巧**——GLB 文件尽量控制在 5MB 以内以实现快速加载
- **使用 drei 的 `<Environment preset="..." />`** 快速获得良好光照

---

## 资源和文档

### 官方文档

- [Three.js Documentation](https://threejs.org/docs/) — 完整 API 参考
- [Three.js Examples](https://threejs.org/examples/) — 数百个在线演示
- [Three.js Fundamentals](https://threejs.org/manual/) — 官方学习指南

### React Three Fiber

- [React Three Fiber Docs](https://r3f.docs.pmnd.rs/) — R3F 文档
- [Drei Docs](https://drei.docs.pmnd.rs/) — 辅助库文档
- [React Three XR Docs](https://github.com/pmndrs/xr) — XR 集成文档

### WebXR

- [WebXR Device API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API) — 浏览器 API 参考
- [Immersive Web (W3C)](https://immersiveweb.dev/) — WebXR 示例和规范
- [WebXR API Emulator](https://chromewebstore.google.com/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje) — 用于测试的 Chrome 扩展

### 黑客松资源

- [Three.js Skills & Patterns](https://github.com/cloudai-x/threejs-skills) — 精选的 Three.js 开发技能和模式（推荐用于本次黑客松）

### 学习资源

- [Three.js Journey](https://threejs-journey.com/) — 全面的视频课程（付费，优秀）
- [Discover Three.js](https://discoverthreejs.com/) — 免费在线书籍
- [Bruno Simon's Portfolio](https://bruno-simon.com/) — 创意 3D 网页项目的灵感来源
