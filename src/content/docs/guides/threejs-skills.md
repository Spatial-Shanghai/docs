---
title: "Three.js AI Coding Skills"
description: "Use pre-made Three.js skills to supercharge your AI coding tools at the Spatial Shanghai 2026 hackathon"
---

## What Are AI Coding Skills?

AI coding tools like GitHub Copilot, Cursor, and Claude Code work best when they have domain-specific knowledge. **Skills** are structured reference documents that teach your AI assistant the patterns, APIs, and best practices for a particular topic — in this case, Three.js and 3D web development.

We have prepared **10 Three.js skills** covering the most important topics you will need during the hackathon. When loaded into your AI tool, these skills dramatically improve the quality of generated Three.js code — correct API usage, proper patterns, and fewer hallucinated methods.

---

## Available Skills

All skills are hosted at `https://spatial-shanghai.ritsdev.top/skills/` and cover the following topics:

| Skill | File | What It Covers |
|-------|------|----------------|
| Fundamentals | `threejs-fundamentals.md` | Scene setup, cameras, renderer, Object3D hierarchy |
| Geometry | `threejs-geometry.md` | Built-in shapes, BufferGeometry, custom geometry, instancing |
| Materials | `threejs-materials.md` | PBR, basic, phong, shader materials |
| Textures | `threejs-textures.md` | Texture types, UV mapping, environment maps |
| Lighting | `threejs-lighting.md` | Light types, shadows, environment lighting |
| Animation | `threejs-animation.md` | Keyframe, skeletal, morph targets, animation mixing |
| Interaction | `threejs-interaction.md` | Raycasting, controls, mouse/touch input |
| Loaders | `threejs-loaders.md` | GLTF, textures, async loading patterns |
| Shaders | `threejs-shaders.md` | GLSL, ShaderMaterial, uniforms, custom effects |
| Post-Processing | `threejs-postprocessing.md` | EffectComposer, bloom, DOF, screen effects |

---

## Quick Setup

Use these one-liners to download all 10 skills into your project in the correct format for your AI tool.

### For GitHub Copilot

```bash
mkdir -p .github/skills && for skill in threejs-fundamentals threejs-geometry threejs-materials threejs-textures threejs-lighting threejs-animation threejs-interaction threejs-loaders threejs-shaders threejs-postprocessing; do curl -sL "https://spatial-shanghai.ritsdev.top/skills/${skill}.md" -o ".github/skills/${skill}.md"; done
```

### For Cursor

```bash
mkdir -p .cursor/rules && for skill in threejs-fundamentals threejs-geometry threejs-materials threejs-textures threejs-lighting threejs-animation threejs-interaction threejs-loaders threejs-shaders threejs-postprocessing; do curl -sL "https://spatial-shanghai.ritsdev.top/skills/${skill}.md" -o ".cursor/rules/${skill}.mdc"; done
```

### For Claude Code

```bash
for skill in threejs-fundamentals threejs-geometry threejs-materials threejs-textures threejs-lighting threejs-animation threejs-interaction threejs-loaders threejs-shaders threejs-postprocessing; do curl -sL "https://spatial-shanghai.ritsdev.top/skills/${skill}.md" >> CLAUDE.md && echo -e "\n\n" >> CLAUDE.md; done
```

---

## Tool-by-Tool Setup

### GitHub Copilot

GitHub Copilot automatically discovers skill files placed in your repository's `.github/skills/` directory. Each skill should be a Markdown file.

**Setup:**

1. Create the skills directory in your project:
   ```bash
   mkdir -p .github/skills
   ```

2. Download the skills you need (or use the one-liner above to get all of them):
   ```bash
   curl -sL https://spatial-shanghai.ritsdev.top/skills/threejs-fundamentals.md \
     -o .github/skills/threejs-fundamentals.md
   ```

3. Commit the files to your repository. Copilot will automatically pick them up and use them when generating Three.js code.

**How it works:** When you write Three.js code, Copilot reads the skill files for relevant context. You do not need to reference them manually — Copilot discovers and applies them automatically.

---

### Cursor

Cursor supports custom rules that provide context to the AI. You can either add local rule files or point Cursor to a URL.

**Option A: Local rule files (recommended)**

1. Create the rules directory:
   ```bash
   mkdir -p .cursor/rules
   ```

2. Download skills as `.mdc` files (or use the one-liner above):
   ```bash
   curl -sL https://spatial-shanghai.ritsdev.top/skills/threejs-fundamentals.md \
     -o .cursor/rules/threejs-fundamentals.mdc
   ```

3. Cursor automatically loads `.mdc` files from `.cursor/rules/` and uses them as context.

**Option B: Fetch from URL with @docs**

1. In Cursor's chat, use the `@docs` feature to add a documentation source.
2. Point it to the skill URL, for example:
   ```
   @docs https://spatial-shanghai.ritsdev.top/skills/threejs-fundamentals.md
   ```
3. Cursor will fetch and index the content for use in your conversations.

---

### Claude Code

Claude Code can use skills in several ways, depending on your preference.

**Option A: Reference in CLAUDE.md**

Add skill URLs to your project's `CLAUDE.md` file so Claude Code knows where to find them:

```markdown
## Three.js Reference Skills

When working on Three.js code, fetch these skills for reference:

- https://spatial-shanghai.ritsdev.top/skills/threejs-fundamentals.md
- https://spatial-shanghai.ritsdev.top/skills/threejs-geometry.md
- https://spatial-shanghai.ritsdev.top/skills/threejs-materials.md
- https://spatial-shanghai.ritsdev.top/skills/threejs-textures.md
- https://spatial-shanghai.ritsdev.top/skills/threejs-lighting.md
- https://spatial-shanghai.ritsdev.top/skills/threejs-animation.md
- https://spatial-shanghai.ritsdev.top/skills/threejs-interaction.md
- https://spatial-shanghai.ritsdev.top/skills/threejs-loaders.md
- https://spatial-shanghai.ritsdev.top/skills/threejs-shaders.md
- https://spatial-shanghai.ritsdev.top/skills/threejs-postprocessing.md
```

**Option B: Fetch on demand with /fetch**

During a Claude Code session, use the `/fetch` command to load a specific skill into context:

```
/fetch https://spatial-shanghai.ritsdev.top/skills/threejs-shaders.md
```

This is useful when you only need a specific topic. You can fetch multiple skills in sequence as your needs change.

**Option C: Append to CLAUDE.md**

Use the quick setup one-liner above to append all skill content directly into your `CLAUDE.md` file. This makes the knowledge permanently available without needing to fetch URLs during your session.

---

### Any LLM (ChatGPT, Gemini, local models, etc.)

These skills work with any LLM that accepts text input. You have two options:

**Option A: Copy individual skill content**

1. Open any skill URL in your browser, for example:
   ```
   https://spatial-shanghai.ritsdev.top/skills/threejs-fundamentals.md
   ```
2. Copy the content and paste it into your LLM's context or system prompt.

**Option B: Use llms.txt**

The docs site provides an `llms.txt` file that indexes all available content, including all skills:

```
https://spatial-shanghai.ritsdev.top/llms.txt
```

Point your LLM to this URL or paste its contents to give it an overview of all available resources. The `llms.txt` file follows the [llms.txt standard](https://llmstxt.org/) and includes links to every skill and guide on the site.

---

## Tips for Using Skills Effectively

- **Load only what you need.** If you are working on shaders, load the shaders skill. Loading all 10 at once may exceed your tool's context window.
- **Combine with the Three.js guide.** The [Three.js Guide](/guides/threejs/) covers project setup and WebXR integration. Use it alongside these skills for the full picture.
- **Skills improve code generation, not replace learning.** Skim the skill content yourself so you can evaluate what your AI tool produces.
- **Update during the hackathon.** Skills may be updated during the event. Re-download them if you notice improvements announced on the hackathon channel.
