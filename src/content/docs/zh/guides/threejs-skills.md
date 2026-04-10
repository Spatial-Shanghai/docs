---
title: "Three.js AI 技能指南"
description: "将 Three.js 技能文件集成到 AI 编程工具中，让 GitHub Copilot、Cursor、Claude Code 等为你编写更好的 3D 代码"
---

## 什么是 Three.js AI 技能？

本网站提供了 **10 个精心编写的 Three.js 技能文件**，涵盖 Three.js 开发的核心知识领域。这些技能文件专为 AI 编程助手设计——当你将它们提供给 AI 工具时，AI 能够更准确地理解 Three.js API，生成更高质量的 3D 和 WebXR 代码。

### 可用技能

| 技能文件 | 内容 |
|---------|------|
| `threejs-fundamentals.md` | 场景设置、相机、渲染器、Object3D 层级 |
| `threejs-geometry.md` | 内置形状、BufferGeometry、自定义几何体、实例化 |
| `threejs-materials.md` | PBR、基础、Phong、着色器材质 |
| `threejs-textures.md` | 纹理类型、UV 映射、环境贴图 |
| `threejs-lighting.md` | 灯光类型、阴影、环境光照 |
| `threejs-animation.md` | 关键帧、骨骼、变形目标、动画混合 |
| `threejs-interaction.md` | 射线检测、控制器、鼠标/触摸输入 |
| `threejs-loaders.md` | GLTF、纹理、异步加载模式 |
| `threejs-shaders.md` | GLSL、ShaderMaterial、uniforms、自定义效果 |
| `threejs-postprocessing.md` | EffectComposer、泛光、景深、屏幕效果 |

所有技能文件托管在本文档站点的 `/skills/` 路径下，例如：

```
https://spatial-shanghai.pages.dev/skills/threejs-fundamentals.md
https://spatial-shanghai.pages.dev/skills/threejs-geometry.md
...
```

---

## GitHub Copilot

GitHub Copilot 支持通过 `.github/skills/` 目录加载自定义技能文件，让 Copilot 在生成代码时参考这些知识。

### 快速设置

```bash
# 在项目根目录下创建技能目录
mkdir -p .github/skills/threejs-fundamentals
mkdir -p .github/skills/threejs-geometry
mkdir -p .github/skills/threejs-materials
mkdir -p .github/skills/threejs-textures
mkdir -p .github/skills/threejs-lighting
mkdir -p .github/skills/threejs-animation
mkdir -p .github/skills/threejs-interaction
mkdir -p .github/skills/threejs-loaders
mkdir -p .github/skills/threejs-shaders
mkdir -p .github/skills/threejs-postprocessing

# 下载所有技能文件
BASE_URL="https://spatial-shanghai.pages.dev/skills"
for skill in fundamentals geometry materials textures lighting animation interaction loaders shaders postprocessing; do
  curl -L "$BASE_URL/threejs-$skill.md" -o ".github/skills/threejs-$skill/SKILL.md"
done
```

### 使用方式

设置完成后，当你在 VS Code 中使用 GitHub Copilot 编写 Three.js 代码时，Copilot 会自动参考这些技能文件。你可以：

- 直接编写代码，Copilot 会根据技能文件提供更准确的补全
- 在 Copilot Chat 中提问 Three.js 相关问题，获得基于技能文件的回答
- 根据需要只下载你用到的技能（例如只下载 `threejs-fundamentals` 和 `threejs-materials`）

---

## Cursor

Cursor 支持通过 `.cursor/rules/` 目录加载自定义规则文件（`.mdc` 格式），让 AI 在生成代码时遵循这些规则和知识。

### 快速设置

```bash
# 创建 Cursor 规则目录
mkdir -p .cursor/rules

# 下载所有技能文件为 .mdc 格式
BASE_URL="https://spatial-shanghai.pages.dev/skills"
for skill in fundamentals geometry materials textures lighting animation interaction loaders shaders postprocessing; do
  curl -L "$BASE_URL/threejs-$skill.md" -o ".cursor/rules/threejs-$skill.mdc"
done
```

### 使用方式

技能文件放入 `.cursor/rules/` 后，Cursor 会在以下场景中自动加载：

- **Tab 补全**：编写 Three.js 代码时获得更准确的自动补全
- **Cmd+K 编辑**：选中代码后按 Cmd+K，AI 会参考技能文件进行编辑
- **Chat 对话**：在侧边栏 Chat 中提问时，AI 会基于技能文件回答

:::tip
你可以只下载当前需要的技能文件。例如，如果你主要做着色器开发，只需下载 `threejs-shaders.mdc` 和 `threejs-materials.mdc`。
:::

---

## Claude Code

Claude Code 可以通过 `CLAUDE.md` 项目文件引用技能 URL，或使用 `/fetch` 命令实时加载技能内容。

### 方法一：在 CLAUDE.md 中引用

在项目根目录的 `CLAUDE.md` 文件中添加技能 URL 引用：

```markdown
# CLAUDE.md

## Three.js 技能参考

本项目使用 Three.js 进行 3D 开发。以下技能文件包含核心知识：

- 基础: https://spatial-shanghai.pages.dev/skills/threejs-fundamentals.md
- 几何体: https://spatial-shanghai.pages.dev/skills/threejs-geometry.md
- 材质: https://spatial-shanghai.pages.dev/skills/threejs-materials.md
- 纹理: https://spatial-shanghai.pages.dev/skills/threejs-textures.md
- 灯光: https://spatial-shanghai.pages.dev/skills/threejs-lighting.md
- 动画: https://spatial-shanghai.pages.dev/skills/threejs-animation.md
- 交互: https://spatial-shanghai.pages.dev/skills/threejs-interaction.md
- 加载器: https://spatial-shanghai.pages.dev/skills/threejs-loaders.md
- 着色器: https://spatial-shanghai.pages.dev/skills/threejs-shaders.md
- 后处理: https://spatial-shanghai.pages.dev/skills/threejs-postprocessing.md
```

### 方法二：使用 /fetch 实时加载

在 Claude Code 会话中，使用 `/fetch` 命令按需加载技能：

```
/fetch https://spatial-shanghai.pages.dev/skills/threejs-fundamentals.md
```

加载后，Claude Code 会将技能内容纳入当前会话的上下文中，为你提供更精准的 Three.js 代码生成和问题解答。

### 方法三：下载到本地

```bash
# 创建技能目录
mkdir -p skills

# 下载所有技能文件
BASE_URL="https://spatial-shanghai.pages.dev/skills"
for skill in fundamentals geometry materials textures lighting animation interaction loaders shaders postprocessing; do
  curl -L "$BASE_URL/threejs-$skill.md" -o "skills/threejs-$skill.md"
done
```

然后在 `CLAUDE.md` 中引用本地文件路径即可。

---

## 任何 LLM

这些技能文件是标准的 Markdown 文档，可以与任何支持上下文输入的 LLM 工具一起使用。

### 直接访问 URL

所有技能文件都可以通过以下 URL 直接访问：

```
https://spatial-shanghai.pages.dev/skills/threejs-fundamentals.md
https://spatial-shanghai.pages.dev/skills/threejs-geometry.md
https://spatial-shanghai.pages.dev/skills/threejs-materials.md
https://spatial-shanghai.pages.dev/skills/threejs-textures.md
https://spatial-shanghai.pages.dev/skills/threejs-lighting.md
https://spatial-shanghai.pages.dev/skills/threejs-animation.md
https://spatial-shanghai.pages.dev/skills/threejs-interaction.md
https://spatial-shanghai.pages.dev/skills/threejs-loaders.md
https://spatial-shanghai.pages.dev/skills/threejs-shaders.md
https://spatial-shanghai.pages.dev/skills/threejs-postprocessing.md
```

### 使用方式

- **ChatGPT / Claude Web**：将技能文件内容复制粘贴到对话中，或上传为附件
- **Windsurf**：将文件放入项目目录，AI 会自动索引
- **Cody (Sourcegraph)**：将文件放入项目中，Cody 会作为上下文参考
- **自定义 API 调用**：在 system prompt 或 user message 中包含技能文件内容

### 一键下载所有技能

```bash
# 下载全部 10 个技能文件到当前目录
BASE_URL="https://spatial-shanghai.pages.dev/skills"
for skill in fundamentals geometry materials textures lighting animation interaction loaders shaders postprocessing; do
  curl -L "$BASE_URL/threejs-$skill.md" -o "threejs-$skill.md"
done
```

---

## 推荐组合

根据你的开发方向，选择最相关的技能文件组合：

### 入门开发

刚接触 Three.js 的开发者，建议从这些基础技能开始：

- `threejs-fundamentals.md` — 必备基础
- `threejs-geometry.md` — 创建 3D 形状
- `threejs-materials.md` — 让物体好看
- `threejs-lighting.md` — 正确的光照

### WebXR / 交互式体验

构建 AR/VR 或交互式 3D 应用：

- `threejs-fundamentals.md` — 必备基础
- `threejs-interaction.md` — 用户输入和控制
- `threejs-loaders.md` — 加载 3D 模型
- `threejs-animation.md` — 动画效果

### 视觉效果 / 高级渲染

追求高质量视觉效果：

- `threejs-shaders.md` — 自定义着色器
- `threejs-materials.md` — PBR 材质
- `threejs-textures.md` — 纹理和贴图
- `threejs-postprocessing.md` — 后处理效果

---

## 黑客松技巧

:::tip
**快速启动建议**：先下载 `threejs-fundamentals.md` 和 `threejs-loaders.md` 两个技能文件。结合 [Tripo3D](/zh/guides/tripo3d/) 生成 3D 模型并用 Three.js 加载，几分钟内就能搭建出原型。
:::

- 不需要下载全部 10 个技能文件——选择与你项目最相关的即可
- 技能文件会持续更新，建议在黑客松当天重新下载最新版本
- 可以将技能文件提交到你的项目仓库中，方便团队成员共享
