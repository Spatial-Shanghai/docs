---
title: "JetBrains + Claude Code via Z.AI Setup Guide"
description: "Recommended IDE setup for Spatial Shanghai 2026 — use PyCharm (or any JetBrains IDE) with Claude Code in the terminal, powered by the Z.AI API."
---

## Recommended Setup Overview

For this hackathon, the recommended AI development setup is:

- **JetBrains IDE** (e.g. PyCharm) as your code editor
- **Claude Code** running in the integrated terminal, powered by the **Z.AI API**

This gives you a powerful agentic AI assistant that can read, write, and reason about your entire project — directly from the terminal inside your IDE, without needing an Anthropic account or API key.

> **Why this setup?** Claude Code via Z.AI is free for students at this hackathon, deeply capable, and works entirely within your existing JetBrains workflow.

---

## Step 1: Get a Free Student JetBrains License

JetBrains offers **free licenses for all their IDEs** to students. As an NYU Shanghai student, you are eligible.

1. Go to [jetbrains.com/community/education/#students](https://www.jetbrains.com/community/education/#students) and click **Apply Now**.
2. Use your `@nyu.edu` or `@shanghai.nyu.edu` email — JetBrains verifies via email domain.
3. Create a JetBrains Account if you don't have one, using your university email.
4. Check your inbox for a confirmation email and click the verification link.
5. Download your IDE from [jetbrains.com/products](https://www.jetbrains.com/products/). Sign in with your JetBrains Account to activate.

> **Tip:** Install the **JetBrains Toolbox App** to manage all your IDEs in one place: [jetbrains.com/toolbox-app](https://www.jetbrains.com/toolbox-app/).

For this hackathon, **PyCharm** is recommended. If you are building a web-based XR project with TypeScript/Three.js, use **WebStorm** instead.

---

## Step 2: Install Claude Code

Claude Code is a terminal-based AI agent. Install it globally with npm.

### Prerequisites

- **Node.js 18 or newer**
  - **macOS**: Use `nvm` to install Node.js. Installing directly from the package may cause permission issues.
  - **Windows**: Install [Git for Windows](https://gitforwindows.org/) in addition to Node.js.

### Install

```bash
npm install -g @anthropic-ai/claude-code
```

---

## Step 3: Configure Claude Code to Use Z.AI

Claude Code needs to be pointed at the Z.AI API instead of Anthropic's servers. This is done by editing a settings file.

### 3.1 Locate or Create the Settings File

- **Mac/Linux:** `~/.claude/settings.json`
- **Windows:** `%USERPROFILE%\.claude\settings.json`

If the file doesn't exist, create it.

### 3.2 Paste the Configuration

Open the file and paste in the following structure exactly. Replace the `.` in `ANTHROPIC_AUTH_TOKEN` with your Z.AI API key.

```json
{
  "model": "glm-5.1",
  "availableModels": ["glm-5.1", "glm-5v-turbo"],
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "your-zai-api-key-here",
    "ANTHROPIC_BASE_URL": "https://open.bigmodel.cn/api/anthropic",
    "API_TIMEOUT_MS": "3000000",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": 1
  }
}
```

> **Where do I get my Z.AI API key?** You'll receive it from the hackathon organizers, or you can sign up at [bigmodel.cn](https://bigmodel.cn).

### 3.3 Restart Claude Code

Close any running Claude Code session and reopen your terminal. Run `claude` again to pick up the new configuration.

---

## Step 4: Set Up the Vision Agent (Optional but Recommended)

Z.AI provides a multimodal model (`glm-5v-turbo`) that can analyze screenshots and UI images. You can set this up as a dedicated Claude Code sub-agent.

### 4.1 Create the Agent Directory

In your PyCharm terminal, run:

```bash
mkdir -p .claude/agents
```

### 4.2 Create the Vision Agent File

Open the nano editor:

```bash
nano .claude/agents/vision.agent.md
```

### 4.3 Paste the Agent Configuration

Copy and paste the following:

```markdown
---
name: vision
description: Expert in analyzing screenshots and UI mockups.
model: glm-5v-turbo
---

You are the project's visual specialist. When the user provides an image, analyze it for UI/UX issues, layout bugs, or design-to-code translations. Provide clear, technical instructions back to the main agent so it can implement the code changes.
```

### 4.4 Save and Exit Nano

1. Press `Ctrl + O` to write the file.
2. Press `Enter` to confirm the filename.
3. Press `Ctrl + X` to exit.

### 4.5 Verify the Agent

```bash
ls .claude/agents
```

You should see `vision.agent.md` listed.

### 4.6 Test the Vision Agent

Start Claude Code (`claude`) and type:

```
@vision are you there?
```

If it responds, you're set. You can now drag images into the terminal and mention `@vision` to trigger the `glm-5v-turbo` model for that request.

---

## Step 5: Run Claude Code in PyCharm

1. Open your project in PyCharm.
2. Open the integrated terminal: **View > Tool Windows > Terminal** (or `Alt+F12` / `Option+F12` on macOS).
3. Navigate to your project directory if needed:
   ```bash
   cd your-project-directory
   ```
4. Start Claude Code:
   ```bash
   claude
   ```
5. If prompted with **"Do you want to use this API key?"**, select **Yes**.

You now have a fully agentic AI assistant running inside your IDE terminal.

---

## Troubleshooting

### Claude Code not picking up the Z.AI config

Make sure you closed the previous session before editing `settings.json`. Run `claude` in a fresh terminal after saving.

### `claude` command not found

The npm global bin directory may not be in your PATH. Try:

```bash
npx @anthropic-ai/claude-code
```

Or check your npm global prefix:

```bash
npm config get prefix
```

Then add `<prefix>/bin` to your PATH.

### Permission errors on macOS when installing

Use `nvm` to manage your Node.js installation instead of the official macOS installer:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 20
nvm use 20
npm install -g @anthropic-ai/claude-code
```

---

## Additional Resources

- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code) — Official Claude Code docs
- [Z.AI / BigModel Platform](https://bigmodel.cn) — Z.AI API dashboard
- [JetBrains Student License](https://www.jetbrains.com/community/education/#students) — Apply for free IDE access
- [JetBrains Toolbox App](https://www.jetbrains.com/toolbox-app/) — Manage all JetBrains IDEs

---

> **Need help at the hackathon?** Find a mentor or organizer — we're here to help you get set up!
