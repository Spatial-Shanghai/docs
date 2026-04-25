---
title: "Claude Code 技能文件夹"
description: "如何使用 Claude Code 的 .claude/skills/ 文件夹结构来组织你的 Three.js 技能文件"
---

## 技能文件夹结构

Claude Code 支持专用的 `.claude/skills/` 目录来组织技能文件。每个技能存放在独立的命名子文件夹中，且必须包含一个名为 `SKILL.md` 的文件。

```
.claude/
└── skills/
    ├── three-js-animation/
    │   └── SKILL.md
    └── three-lighting/
        └── SKILL.md
```

文件夹名称用于标识技能，`SKILL.md` 是 Claude Code 读取领域专属上下文的文件。文件名必须严格为 `SKILL.md`，其他名称将被忽略。

---

## 设置技能文件夹

### 第一步：创建技能目录

```bash
mkdir -p .claude/skills
```

### 第二步：创建技能文件夹并放入 SKILL.md

对于每个需要添加的技能，创建一个子文件夹并在其中放置 `SKILL.md`：

```bash
mkdir -p .claude/skills/three-js-animation
curl -sL https://spatial-shanghai.ritsdev.top/skills/threejs-animation.md \
  -o .claude/skills/three-js-animation/SKILL.md
```

### 第三步：重复以上步骤添加其他技能

```bash
mkdir -p .claude/skills/three-lighting
curl -sL https://spatial-shanghai.ritsdev.top/skills/threejs-lighting.md \
  -o .claude/skills/three-lighting/SKILL.md
```

### 一键下载所有技能

```bash
for skill in fundamentals geometry materials textures lighting animation interaction loaders shaders postprocessing; do
  mkdir -p ".claude/skills/three-$skill"
  curl -sL "https://spatial-shanghai.ritsdev.top/skills/threejs-${skill}.md" \
    -o ".claude/skills/three-$skill/SKILL.md"
done
```

---

## 最终结构

完成设置后，你的项目应该如下所示：

```
.claude/
└── skills/
    ├── three-fundamentals/
    │   └── SKILL.md
    ├── three-geometry/
    │   └── SKILL.md
    ├── three-materials/
    │   └── SKILL.md
    ├── three-textures/
    │   └── SKILL.md
    ├── three-lighting/
    │   └── SKILL.md
    ├── three-animation/
    │   └── SKILL.md
    ├── three-interaction/
    │   └── SKILL.md
    ├── three-loaders/
    │   └── SKILL.md
    ├── three-shaders/
    │   └── SKILL.md
    └── three-postprocessing/
        └── SKILL.md
```

Claude Code 在你处理 Three.js 代码时，会自动发现并使用这些技能文件。

---

## 注意事项

- **文件夹名称**可以自由命名——选择描述性强、便于记忆的名称即可。
- **`SKILL.md` 是必须的**——文件名必须严格为 `SKILL.md`（区分大小写）。
- **每个文件夹只放一个技能**——不要在同一子文件夹中放置多个技能文件。
- **将文件夹提交到仓库**，这样团队成员可以自动获得相同的技能配置。
