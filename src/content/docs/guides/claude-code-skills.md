---
title: "Claude Code Skills Folder"
description: "How to organize your Three.js skills using Claude Code's .claude/skills/ folder structure"
---

## Skills Folder Structure

Claude Code supports a dedicated `.claude/skills/` directory for organizing skill files. Each skill lives in its own named subfolder and must contain a file literally named `SKILL.md`.

```
.claude/
└── skills/
    ├── three-js-animation/
    │   └── SKILL.md
    └── three-lighting/
        └── SKILL.md
```

The folder name identifies the skill, and `SKILL.md` is the file Claude Code reads for domain-specific context. The filename must be exactly `SKILL.md` — other names are ignored.

---

## Setting Up Your Skills

### Step 1: Create the skills directory

```bash
mkdir -p .claude/skills
```

### Step 2: Create a skill folder and SKILL.md

For each skill you want to add, create a subfolder and place a `SKILL.md` inside it:

```bash
mkdir -p .claude/skills/three-js-animation
curl -sL https://spatial-shanghai.ritsdev.top/skills/threejs-animation.md \
  -o .claude/skills/three-js-animation/SKILL.md
```

### Step 3: Repeat for other skills

```bash
mkdir -p .claude/skills/three-lighting
curl -sL https://spatial-shanghai.ritsdev.top/skills/threejs-lighting.md \
  -o .claude/skills/three-lighting/SKILL.md
```

### One-liner: Download all skills

```bash
for skill in fundamentals geometry materials textures lighting animation interaction loaders shaders postprocessing; do
  mkdir -p ".claude/skills/three-$skill"
  curl -sL "https://spatial-shanghai.ritsdev.top/skills/threejs-${skill}.md" \
    -o ".claude/skills/three-$skill/SKILL.md"
done
```

---

## Result

After running the setup, your project should look like this:

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

Claude Code will automatically discover and use these skills when you work on Three.js code.

---

## Tips

- **Folder names** can be anything — pick names that are descriptive and easy to remember.
- **`SKILL.md` is required** — the file must be named exactly `SKILL.md` (case-sensitive).
- **One skill per folder** — do not place multiple skill files inside a single subfolder.
- **Commit the folder** to your repository so teammates get the same skills automatically.
