---
title: "Claude Code + Z.ai"
description: "Use Anthropic's agentic coding tool with free access via Z.ai for the Spatial Shanghai 2026 hackathon"
---

## What is Claude Code?

Claude Code is Anthropic's agentic coding tool that runs directly in your terminal. Unlike traditional AI assistants that operate through a chat window, Claude Code lives where you already work — your command line. It can read and edit files across your entire project, run terminal commands, search through codebases, manage git workflows, and perform complex multi-file refactoring — all through natural language conversation.

Think of Claude Code as a senior developer pair-programming with you directly in the terminal. You describe what you want, and it figures out which files to read, what changes to make, and which commands to run — then asks for your permission before executing.

---

## What is Z.ai?

Z.ai is a service that provides **free access to Claude** — including Claude Code. Normally, using Claude Code requires an Anthropic API key with a paid plan. For this hackathon, Z.ai is sponsoring access so that every participant can use Claude Code at no cost.

### How to Sign Up for Z.ai

1. **Visit [z.ai](https://z.ai)** and create an account using your email address.

2. **Verify your email** — check your inbox for a confirmation link and click it.

3. **Navigate to API Keys** — once logged in, go to your dashboard and find the API key section.

4. **Generate an API key** — create a new API key. Copy it and keep it safe; you will need it to configure Claude Code.

> **Note:** Z.ai provides free credits specifically for this hackathon. The API key from Z.ai works the same way as an Anthropic API key but is routed through Z.ai's infrastructure.

---

## Installation

### Prerequisites

You need **Node.js version 18 or higher** installed on your machine. To check your version:

```bash
node --version
```

If you do not have Node.js installed, download it from [nodejs.org](https://nodejs.org/) or use a version manager like `nvm`.

### Install Claude Code

Follow these steps to install Claude Code:

**Step 1: Run the Z.ai coding helper**

```bash
npx @z_ai/coding-helper
```

This will guide you through the setup process and help you configure Claude Code with Z.ai access.

**Step 2: Install Claude Code globally via npm**

```bash
npm install -g @anthropic-ai/claude-code
```

Verify the installation:

```bash
claude --version
```

You should see the version number printed in your terminal.

### Get Your API Key

After running the coding helper, you'll need to get your API key. Ask **Jesse** (the hackathon organizer) for your Z.ai API key. They will provide you with the credentials needed to access Claude Code for free during the hackathon.

Once you have your API key, the coding helper will guide you to set it up, or you can configure it manually by setting the following environment variable:

```bash
export ANTHROPIC_API_KEY="your-api-key-from-jesse"
export ANTHROPIC_BASE_URL="https://api.z.ai/v1"
```

---

## Connecting Claude Code with Z.ai

To use Claude Code with your free Z.ai access, you need to configure two environment variables: one for the API key and one for the API base URL (so Claude Code knows to route requests through Z.ai rather than directly to Anthropic).

### Option 1: Set Environment Variables per Session

```bash
export ANTHROPIC_API_KEY="your-zai-api-key-here"
export ANTHROPIC_BASE_URL="https://api.z.ai/v1"
```

Then launch Claude Code:

```bash
claude
```

### Option 2: Add to Your Shell Profile (Persistent)

Add the following lines to your `~/.zshrc` (macOS) or `~/.bashrc` (Linux):

```bash
export ANTHROPIC_API_KEY="your-zai-api-key-here"
export ANTHROPIC_BASE_URL="https://api.z.ai/v1"
```

Then reload your shell:

```bash
source ~/.zshrc   # or source ~/.bashrc
```

### Option 3: Inline When Launching

```bash
ANTHROPIC_API_KEY="your-zai-api-key-here" ANTHROPIC_BASE_URL="https://api.z.ai/v1" claude
```

### Verify the Connection

Once Claude Code starts, try a simple prompt to confirm everything is working:

```
> What files are in this directory?
```

If Claude Code responds with a list of files, you are connected and ready to go.

---

## Key Features

### File Editing

Claude Code can read, create, and edit files across your entire project. It understands the context of your codebase and makes precise, targeted changes.

```
> Add a loading spinner component to src/components/LoadingSpinner.tsx
> Fix the type error in utils/parser.ts
> Create a new API route for user authentication
```

Claude Code will show you exactly what changes it plans to make and ask for confirmation before writing to disk.

### Terminal Commands

Claude Code can run shell commands on your behalf — installing packages, running builds, starting dev servers, and more.

```
> Install three.js and @types/three as dependencies
> Run the test suite and fix any failing tests
> Start the development server
```

It will always show you the command it wants to run and wait for your approval.

### Git Integration

Claude Code has deep git integration. It can create commits, manage branches, resolve merge conflicts, and write pull request descriptions.

```
> Commit all my changes with an appropriate message
> Create a new branch called feature/vr-controls
> Show me what changed since the last commit
```

### Multi-File Refactoring

One of Claude Code's most powerful capabilities is refactoring code across multiple files simultaneously. It understands the relationships between files and ensures consistency.

```
> Rename the UserProfile component to PlayerProfile everywhere it's used
> Convert all class components to functional components with hooks
> Move the API logic from components into a separate services directory
```

### Codebase Search and Understanding

Claude Code can search through your project to understand architecture and find relevant code.

```
> How is the routing set up in this project?
> Find all places where we call the inventory API
> Explain what the SceneManager class does
```

---

## Tips for Hackathon Use

### Start with `/init`

When you first open Claude Code in your project directory, run the `/init` command. This creates a `CLAUDE.md` file that gives Claude Code context about your project — your tech stack, file structure, coding conventions, and key commands.

```
> /init
```

This is especially important at a hackathon where you are building from scratch. The `CLAUDE.md` file helps Claude Code give you better, more relevant suggestions throughout the event.

### Use Plan Mode for Complex Tasks

For larger features or architectural decisions, use **plan mode** by pressing `Shift+Tab` to toggle it on. In plan mode, Claude Code will think through the problem and lay out a step-by-step plan before writing any code.

This is great for:

- Designing the initial architecture of your hackathon project
- Planning how to integrate a new AR/VR library
- Breaking down a complex feature into manageable steps

### Write Specific, Detailed Prompts

The more context you give Claude Code, the better the results. Compare these prompts:

**Vague (less effective):**

```
> Make a 3D scene
```

**Specific (much better):**

```
> Create a Three.js scene in src/Scene.tsx with a WebXR-compatible renderer,
> a ground plane with grid texture, ambient and directional lighting,
> and orbit controls. Use React Three Fiber. The scene should support
> AR mode using the WebXR API.
```

### Iterate Rapidly

Claude Code excels at rapid iteration, which is exactly what you need during a hackathon. Do not try to get everything perfect in one prompt. Instead:

1. **Start with a working skeleton** — get the basic structure up and running first.

2. **Add features incrementally** — one feature per prompt keeps things manageable.

3. **Fix issues as they appear** — paste error messages directly to Claude Code and let it debug.

### Use Claude Code for Boilerplate

Hackathon time is precious. Let Claude Code handle the repetitive setup work:

```
> Set up a Vite + React + TypeScript project with Three.js and React Three Fiber
> Add ESLint, Prettier, and a basic folder structure for a VR application
```

```
> Create a WebSocket server with Express that broadcasts player positions
> to all connected clients
```

### Pass Error Messages Directly

When something breaks, copy the full error message and paste it directly into Claude Code:

```
> I'm getting this error when I try to start the AR session:
> DOMException: The requested session mode 'immersive-ar' is not supported
> by any available runtime. Fix this.
```

Claude Code will analyze the error, check your code, and propose a fix.

### Useful Keyboard Shortcuts

| Shortcut    | Action                     |
| ----------- | -------------------------- |
| `Shift+Tab` | Toggle plan mode           |
| `Ctrl+C`    | Cancel current response    |
| `Escape`    | Clear current input        |
| `/init`     | Initialize CLAUDE.md       |
| `/help`     | Show all commands          |
| `/clear`    | Clear conversation history |

### Work as a Team

If your team is working on separate parts of the project, each member can run their own Claude Code session in the terminal. Use git branches to avoid conflicts:

```
> Create and switch to a new branch called feature/my-feature
```

When you are ready to merge, Claude Code can help resolve any conflicts:

```
> Merge the main branch into my branch and resolve any conflicts
```

---

## Quick Start Checklist

- [ ] Sign up at [z.ai](https://z.ai) and get your API key
- [ ] Install Node.js 18+ if not already installed
- [ ] Run `npm install -g @anthropic-ai/claude-code`
- [ ] Set `ANTHROPIC_API_KEY` and `ANTHROPIC_BASE_URL` environment variables
- [ ] Navigate to your project directory and run `claude`
- [ ] Run `/init` to create your project's `CLAUDE.md`
- [ ] Start building!

---

## Troubleshooting

### "Authentication failed" or "Invalid API key"

Double-check that your `ANTHROPIC_API_KEY` environment variable is set correctly. Run:

```bash
echo $ANTHROPIC_API_KEY
```

If it is empty, set it again using the instructions in the connection section above.

### "Command not found: claude"

This usually means the npm global bin directory is not in your PATH. Try:

```bash
npx @anthropic-ai/claude-code
```

Or find where npm installs global packages and add that to your PATH:

```bash
npm config get prefix
# Add the /bin subdirectory of the output to your PATH
```

### Slow Responses

If Claude Code is responding slowly, it may be processing a large codebase. Try:

- Starting Claude Code in a smaller subdirectory
- Using more specific prompts so it does not need to search the entire project
- Running `/clear` to reset conversation context if it has grown too long

---

## Additional Resources

- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code) — Official Anthropic docs
- [Z.ai](https://z.ai) — Free Claude access for the hackathon
- [Anthropic Discord](https://discord.gg/anthropic) — Community support

Need help during the hackathon? Ask a mentor or visit the help desk!
