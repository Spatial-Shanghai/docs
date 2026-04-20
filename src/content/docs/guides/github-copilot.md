---
title: "GitHub Copilot Setup Guide"
description: "How to get GitHub Copilot free as a student, install it in VS Code, and use it effectively during the Spatial Shanghai 2026 hackathon."
---

## What is GitHub Copilot?

GitHub Copilot is an AI-powered coding assistant developed by GitHub and OpenAI. It integrates directly into your code editor and provides real-time code suggestions — from completing single lines to generating entire functions — based on the context of your project. Think of it as an AI pair programmer that understands your code and helps you write it faster.

### Key Features

- **Code Completion**: Suggests entire lines or blocks of code as you type.
- **Chat**: Ask Copilot questions about your code directly in the editor.
- **Multi-language Support**: Works with Python, JavaScript, TypeScript, C#, Go, Rust, and many more.
- **Context-Aware**: Understands your open files, project structure, and comments to provide relevant suggestions.

---

## Step 1: Get GitHub Copilot Free via the Student Developer Pack

As a student, you can get GitHub Copilot **completely free** through the GitHub Student Developer Pack. Here is exactly how to do it.

### 1.1 Create a GitHub Account (if you don't have one)

1. Go to [github.com](https://github.com) and click **Sign up**.
2. Use your **university email address** (e.g., `yourname@nyu.edu`) — this makes verification much faster.
3. Complete the account creation process.

> **Tip**: If you already have a GitHub account with a personal email, you can add your university email as a secondary email in [Settings > Emails](https://github.com/settings/emails).

### 1.2 Apply for the GitHub Student Developer Pack

1. Go to [education.github.com/pack](https://education.github.com/pack).
2. Click **"Sign up for Student Developer Pack"** (or **"Get your Pack"**).
3. Select **"Student"** as your academic status.
4. Select your **university email** from the dropdown. If you added your `.edu` email, choose that one.
5. Enter the **name of your school** (e.g., "New York University Shanghai" or "NYU Shanghai").
6. Describe **how you plan to use GitHub** — a short sentence is fine, e.g., "For coursework, hackathon projects, and learning software development."

### 1.3 Verify Your Student Status

GitHub will ask you to prove you are a student. You have two options:

**Option A: Academic email verification (fastest)**

If you used your `.edu` email, GitHub may verify you automatically. Check your university email for a verification link and click it.

**Option B: Upload proof of enrollment (if needed)**

If automatic verification does not work, you will need to upload a document. Acceptable documents include:

- Student ID card (photo of both sides)
- Official enrollment letter
- Transcript with current date
- Tuition bill or enrollment confirmation

> **Important**: The document must show your **name**, your **school name**, and a **current date** (or date range that includes the current semester). Expired documents will be rejected.

> **Network Tip**: The school Wi-Fi routes traffic through a VPN, which can cause GitHub's verification to fail or behave unexpectedly. If you run into issues during sign-up or verification, **switch to your mobile phone's hotspot** instead. This gives you a direct internet connection that GitHub can verify without VPN interference.

### 1.4 Wait for Approval

- If you used an `.edu` email, approval is usually **instant to a few minutes**.
- If you uploaded documents, approval can take **a few days to two weeks**.
- You will receive an email notification when approved.

> **Hackathon Tip**: Apply **NOW** if you haven't already. Don't wait until the day of the hackathon!

### 1.5 Verify Copilot Access

Once your Student Developer Pack is approved:

1. Go to [github.com/settings/copilot](https://github.com/settings/copilot).
2. You should see that GitHub Copilot is **enabled** for your account at no cost.
3. If prompted to set up a subscription, make sure you are logged into the account that has the Student Developer Pack.

---

## Step 2: Install GitHub Copilot in VS Code

### 2.1 Install VS Code

If you don't have Visual Studio Code installed:

1. Download it from [code.visualstudio.com](https://code.visualstudio.com/).
2. Install it for your operating system (Windows, macOS, or Linux).

### 2.2 Install the GitHub Copilot Extension

1. Open VS Code.
2. Click the **Extensions** icon in the left sidebar (or press `Ctrl+Shift+X` / `Cmd+Shift+X` on macOS).
3. Search for **"GitHub Copilot"**.
4. Click **Install** on the extension published by **GitHub**. This will also install **GitHub Copilot Chat** automatically.

> **Direct install link**: You can also install it directly from the VS Code Marketplace: [GitHub Copilot Extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot).

### 2.3 Sign In to GitHub

1. After installing the extension, you will see a prompt to sign in to GitHub. Click **"Sign in to GitHub"**.
2. A browser window will open. Log in with the GitHub account that has the Student Developer Pack.
3. Authorize the VS Code extension when prompted.
4. Return to VS Code — you should see the Copilot icon in the bottom status bar.

### 2.4 Verify It Works

1. Create a new file, for example `test.py`.
2. Type a comment like `# function to calculate fibonacci numbers` and press Enter.
3. Copilot should suggest code in gray text. Press `Tab` to accept the suggestion.

If you see suggestions appearing, congratulations — GitHub Copilot is working!

---

## Step 3: How to Use GitHub Copilot

### Inline Code Suggestions

As you type, Copilot will automatically suggest code completions in gray text:

- **Accept**: Press `Tab` to accept the full suggestion.
- **Reject**: Press `Esc` or just keep typing to ignore it.
- **See alternatives**: Press `Alt+]` (or `Option+]` on macOS) to cycle through other suggestions.
- **Accept partially**: Press `Ctrl+Right Arrow` (or `Cmd+Right Arrow` on macOS) to accept word by word.

### Copilot Chat

Open Copilot Chat for more interactive help:

- Press `Ctrl+Shift+I` (or `Cmd+Shift+I` on macOS) to open the chat panel.
- You can ask questions like:
  - "How do I set up a Three.js scene with WebXR?"
  - "Explain this function"
  - "Fix the bug in this code"
  - "Write unit tests for this class"

### Inline Chat

For quick edits directly in your code:

1. Select a block of code.
2. Press `Ctrl+I` (or `Cmd+I` on macOS).
3. Type your instruction, e.g., "refactor this to use async/await" or "add error handling".
4. Copilot will generate the changes inline. Click **Accept** or **Discard**.

---

## Step 4: Hackathon Tips for Using Copilot Effectively

### Write Clear Comments First

Copilot generates better code when it understands your intent. Before writing any function, write a detailed comment:

```python
# Create a WebXR-compatible Three.js scene with:
# - A perspective camera at position (0, 1.6, 3)
# - An ambient light and a directional light
# - A ground plane with grid helper
# - VR controller support with ray casting
```

The more specific your comment, the better the suggestion.

### Use Copilot Chat for Scaffolding

At the start of the hackathon, use Copilot Chat to quickly scaffold your project:

- "Create a basic Three.js project with TypeScript and Vite"
- "Set up a WebXR scene with hand tracking"
- "Generate a React component for a 3D model viewer"

This can save you 30+ minutes of initial setup.

### Provide Context with Open Files

Copilot reads your open tabs for context. When working on a feature:

- Keep related files open (types, interfaces, utilities).
- Open your `package.json` so Copilot knows which libraries you are using.
- Open example files or documentation files for reference.

### Use Slash Commands in Chat

Copilot Chat supports special slash commands:

| Command | What it does |
|---|---|
| `/explain` | Explain selected code |
| `/fix` | Suggest a fix for problems |
| `/tests` | Generate tests for selected code |
| `/doc` | Generate documentation |
| `/new` | Scaffold a new project |

### Use `@workspace` for Project-Wide Questions

In Copilot Chat, type `@workspace` before your question to let Copilot search across your entire project:

- `@workspace How is the VR scene initialized?`
- `@workspace Where is the API endpoint for user authentication?`
- `@workspace Find all files that use Three.js`

### Don't Trust Blindly — Review the Code

Copilot is powerful but not perfect. During the hackathon:

- **Always read the generated code** before accepting. Sometimes it hallucinates APIs that don't exist.
- **Test frequently**. Don't let Copilot generate hundreds of lines without running them.
- **Check imports**. Copilot sometimes imports from wrong packages or deprecated modules.

### Keyboard Shortcuts Cheat Sheet

| Action | Windows/Linux | macOS |
|---|---|---|
| Accept suggestion | `Tab` | `Tab` |
| Dismiss suggestion | `Esc` | `Esc` |
| Next suggestion | `Alt+]` | `Option+]` |
| Previous suggestion | `Alt+[` | `Option+[` |
| Open Copilot Chat | `Ctrl+Shift+I` | `Cmd+Shift+I` |
| Inline Chat | `Ctrl+I` | `Cmd+I` |

---

## Troubleshooting

### Copilot not showing suggestions

1. Check the Copilot icon in the bottom status bar. If it has a line through it, click it and enable Copilot.
2. Make sure you are signed in to the correct GitHub account (the one with Student Developer Pack).
3. Try reloading VS Code: `Ctrl+Shift+P` (or `Cmd+Shift+P`) then type "Developer: Reload Window".

### Student Developer Pack not approved yet

If your application is still pending and the hackathon is tomorrow:

- GitHub Copilot offers a **free tier** with limited completions per month — you can use this without the Student Pack. Go to [github.com/settings/copilot](https://github.com/settings/copilot) and activate the free plan.
- Ask a hackathon organizer — we may have additional access codes available.

### Extension conflicts

If you have other AI code completion extensions installed (like Tabnine or Codeium), they may conflict with Copilot. Disable other AI completion extensions while using Copilot.

---

## Additional Resources

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot) — Official docs
- [GitHub Student Developer Pack](https://education.github.com/pack) — Apply here
- [Copilot Tips & Tricks (GitHub Blog)](https://github.blog/developer-skills/github/how-to-use-github-copilot-in-your-ide-tips-tricks-and-best-practices/) — Best practices from GitHub
- [VS Code + Copilot Quickstart](https://docs.github.com/en/copilot/quickstart) — Getting started guide

---

> **Need help at the hackathon?** Find a mentor or organizer — we're here to help you get set up!
