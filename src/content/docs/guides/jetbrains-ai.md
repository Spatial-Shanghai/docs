---
title: "JetBrains AI Assistant"
description: "Guide to using JetBrains AI Assistant for the Spatial Shanghai 2026 hackathon — free student license, setup, AI providers, and key features."
---

## What is JetBrains AI Assistant?

JetBrains AI Assistant is a built-in AI-powered coding companion available across the entire JetBrains IDE family — IntelliJ IDEA, PyCharm, WebStorm, CLion, Rider, GoLand, PhpStorm, RubyMine, and more. It is deeply integrated into the IDE, meaning it understands your project structure, open files, error context, and version control history to provide more relevant suggestions than standalone AI tools.

Unlike browser-based AI tools, JetBrains AI Assistant works directly inside your editor with full awareness of your codebase. It can read your current file, understand import chains, see compiler errors, and interact with your terminal and VCS — all without copy-pasting code into a separate window.

### Supported IDEs

| IDE | Primary Language |
|---|---|
| IntelliJ IDEA | Java, Kotlin |
| PyCharm | Python |
| WebStorm | JavaScript, TypeScript |
| CLion | C, C++ |
| Rider | C#, .NET |
| GoLand | Go |
| PhpStorm | PHP |
| RubyMine | Ruby |
| RustRover | Rust |

AI Assistant is available in all of these IDEs and works the same way regardless of which one you use.

---

## Getting JetBrains for Free as a Student

JetBrains offers **free licenses for all their IDEs** to students and educators. As an NYU Shanghai student, you are eligible for this program. The license includes every JetBrains IDE and is valid for one year, renewable as long as you remain a student.

### Step-by-Step: Apply for a Student License

**Step 1: Go to the JetBrains student page**

Navigate to [https://www.jetbrains.com/community/education/#students](https://www.jetbrains.com/community/education/#students) and click **Apply Now**.

**Step 2: Use your university email**

Use your `@nyu.edu` or `@shanghai.nyu.edu` email address. JetBrains will verify your student status through the email domain. This is the fastest verification method.

**Step 3: Create a JetBrains Account**

If you do not have a JetBrains Account, you will be asked to create one. Use your university email for this account.

**Step 4: Confirm your email**

Check your university inbox for a confirmation email from JetBrains. Click the verification link. Your license will typically be activated within minutes.

**Step 5: Download and activate**

Download your preferred IDE from [https://www.jetbrains.com/products/](https://www.jetbrains.com/products/). When you launch the IDE, sign in with your JetBrains Account to activate the license.

> **Tip:** You can also install **JetBrains Toolbox App** to manage all your IDEs in one place. Download it from [https://www.jetbrains.com/toolbox-app/](https://www.jetbrains.com/toolbox-app/).

---

## How to Enable AI Assistant

JetBrains AI Assistant comes bundled with JetBrains IDEs starting from version 2023.3 and later. However, it requires a separate AI subscription or a free trial to activate.

### Enabling the Built-in AI Assistant

**Step 1: Update your IDE**

Make sure you are running the latest version of your JetBrains IDE. Go to **Help > Check for Updates** (on macOS: **IntelliJ IDEA > Check for Updates**).

**Step 2: Open AI Assistant**

Look for the **AI Assistant** tool window on the right sidebar. You can also access it via **View > Tool Windows > AI Assistant** or use the search shortcut with **Shift+Shift** and type "AI Assistant".

**Step 3: Sign in and activate**

If prompted, sign in with your JetBrains Account. You may need to start a free trial or activate an AI Pro subscription. JetBrains offers a **7-day free trial** of AI Assistant for new users.

> **Hackathon Note:** For Spatial Shanghai 2026, sponsored JetBrains AI access may be provided. Check the hackathon organizer announcements for license details.

### Installing AI Assistant as a Plugin (Older IDEs)

If you are on an older IDE version (2023.2 or earlier), you can install AI Assistant as a plugin:

1. Go to **Settings/Preferences > Plugins** (Ctrl+Alt+S on Windows/Linux, Cmd+, on macOS).
2. Search for **"AI Assistant"** in the Marketplace tab.
3. Click **Install** and restart the IDE.

---

## Adding Other AI Providers

JetBrains AI Assistant uses JetBrains' own AI service by default, but you can also connect third-party AI providers for enhanced flexibility. This is especially useful if you have API keys for OpenAI, Anthropic, or access to local models.

### Connecting OpenAI or Anthropic

**Step 1: Open AI Settings**

Go to **Settings/Preferences > Tools > AI Assistant > Language Models**.

**Step 2: Add a new provider**

Click the **+** button or **Add Provider** to add a new model provider. Select the provider type (OpenAI API Compatible, Anthropic, etc.).

**Step 3: Enter your API key**

Enter your API key and endpoint URL. For common providers:

| Provider | Endpoint URL |
|---|---|
| OpenAI | `https://api.openai.com/v1` |
| Anthropic | `https://api.anthropic.com` |
| Azure OpenAI | Your Azure deployment URL |
| Local (Ollama) | `http://localhost:11434/v1` |

**Step 4: Select a model**

Choose the model you want to use (e.g., `gpt-4o`, `claude-sonnet-4-20250514`, `llama3`). You can configure different models for different tasks — for example, a faster model for code completion and a more capable model for chat.

### Using Local Models with Ollama

If you want to use AI without an internet connection or API costs, you can run models locally with Ollama:

1. Install Ollama from [https://ollama.com](https://ollama.com).
2. Pull a model: `ollama pull codellama` or `ollama pull llama3`.
3. Start the Ollama server: `ollama serve`.
4. In JetBrains, add a provider with the endpoint `http://localhost:11434/v1`.

> **Note:** Local models require significant RAM and GPU resources. For a hackathon, cloud-based providers are usually faster and more reliable.

---

## Key Features

### 1. Inline Code Completion

AI Assistant provides real-time code suggestions as you type. It predicts your next lines of code based on the context of your current file, open project files, and imported libraries.

**How to use:**

- Simply start typing and suggestions will appear as gray ghost text.
- Press **Tab** to accept a suggestion.
- Press **Alt+\\** (Windows/Linux) or **Option+\\** (macOS) to manually trigger a suggestion.
- Press **Escape** to dismiss a suggestion.

AI Assistant's code completion is context-aware and understands your entire project. It is particularly strong at completing boilerplate code, implementing interface methods, and writing repetitive patterns.

### 2. AI Chat

The AI Chat window allows you to have a conversation with the AI about your code. It can see your currently open files, selected code, and project structure.

**How to use:**

- Open the **AI Assistant** tool window from the right sidebar.
- Type a question or request in the chat input field.
- Select code in the editor, then right-click and choose **AI Actions > Ask AI** to ask about specific code.
- Use the **@** symbol to reference files, symbols, or documentation in your prompt.

**Useful prompts for hackathon projects:**

- "Explain this function and suggest improvements"
- "Write unit tests for the selected code"
- "How do I integrate Three.js with this React component?"
- "Find potential bugs in this file"

### 3. Refactoring Suggestions

AI Assistant can suggest and apply code refactorings that go beyond what traditional IDE refactoring tools offer.

**How to use:**

- Select a block of code in the editor.
- Right-click and choose **AI Actions > Suggest Refactoring**.
- Review the suggested changes in the diff view before applying.
- You can also ask the chat: "Refactor this code to use async/await" or "Extract this logic into a separate function."

### 4. Commit Message Generation

AI Assistant can automatically generate meaningful commit messages based on your staged changes.

**How to use:**

1. Stage your changes as usual (in the **Commit** tool window or via `git add`).
2. In the **Commit** tool window, click the **AI** icon (sparkle icon) next to the commit message field.
3. AI Assistant will analyze your diff and generate a descriptive commit message.
4. Edit the message if needed, then commit.

### 5. Code Explanation and Documentation

AI Assistant can explain unfamiliar code and generate documentation comments for your functions and classes.

**How to use:**

- Select code and right-click, then choose **AI Actions > Explain Code**.
- Place your cursor on a function/class and use **AI Actions > Generate Documentation** to create JSDoc, docstrings, or other documentation comments automatically.

### 6. Error Explanation and Fix Suggestions

When your code has errors or warnings, AI Assistant can explain them and suggest fixes.

**How to use:**

- Hover over a red/yellow squiggly underline in your code.
- Click **AI Actions > Explain Error** or **Suggest Fix** in the popup.
- The AI will analyze the error in context and propose a solution.

---

## Keyboard Shortcuts Reference

| Action | Windows/Linux | macOS |
|---|---|---|
| Trigger code completion | Alt+\\ | Option+\\ |
| Accept suggestion | Tab | Tab |
| Open AI Chat | Shift+Shift, type "AI" | Shift+Shift, type "AI" |
| AI Actions on selection | Right-click > AI Actions | Right-click > AI Actions |
| Generate commit message | Click AI icon in Commit window | Click AI icon in Commit window |
| Search Everywhere | Shift+Shift | Shift+Shift |

---

## Tips for Hackathon Use

### 1. Choose the Right IDE

Pick the JetBrains IDE that matches your primary language. For the Spatial Shanghai hackathon, **WebStorm** is ideal if you are building web-based AR/VR with Three.js or A-Frame. **PyCharm** is best if your backend is Python-based. If you are building a full-stack project, **IntelliJ IDEA Ultimate** supports all languages through plugins.

### 2. Set Up Before the Hackathon

Do not waste hackathon time installing and configuring your IDE. Before the event:

- Install the JetBrains IDE and activate your student license.
- Enable AI Assistant and verify it works.
- Configure any additional AI providers you want to use.
- Familiarize yourself with the keyboard shortcuts above.

### 3. Combine AI Assistant with Other Hackathon Tools

JetBrains AI Assistant works alongside other tools provided at the hackathon. For example:

- Use **JetBrains AI Chat** for project-level questions and refactoring, and **Claude Code** in the terminal for quick file generation.
- Use **v0 by Vercel** to scaffold UI, then bring the code into JetBrains for refinement with AI Assistant.
- Use **GitHub Copilot** (also available as a JetBrains plugin) alongside AI Assistant for a second opinion on code suggestions.

### 4. Use AI for Rapid Prototyping

During a 24-hour hackathon, speed matters. Use AI Assistant to:

- Generate boilerplate code for new files and components.
- Quickly implement API endpoints by describing them in the chat.
- Convert code between languages (e.g., Python prototype to TypeScript).
- Generate test cases to catch bugs early.
- Write configuration files (Docker, package.json, tsconfig) from descriptions.

### 5. Debug Faster with AI

When you hit a bug during the hackathon, do not spend 30 minutes reading Stack Overflow. Instead:

1. Select the problematic code.
2. Open the AI Chat and describe what you expected vs. what happened.
3. Paste any error messages into the chat.
4. Apply the suggested fix and test immediately.

### 6. Generate Commit Messages Consistently

During a hackathon, it is tempting to write "fix stuff" as every commit message. Use AI-generated commit messages to maintain a clean git history. This helps when you need to demo your project or if something goes wrong and you need to revert.

---

## Troubleshooting

### AI Assistant is not appearing

- Make sure your IDE is version 2023.3 or later.
- Check that the AI Assistant plugin is enabled: **Settings > Plugins > Installed** and search for "AI Assistant".
- Restart the IDE after enabling the plugin.

### AI features are grayed out

- You may need to sign in to your JetBrains Account: **Help > Register**.
- Verify that your AI subscription or trial is active at [https://account.jetbrains.com](https://account.jetbrains.com).

### Slow or no responses

- Check your internet connection.
- If using a local model via Ollama, make sure the Ollama server is running (`ollama serve`).
- Try switching to a different AI model in **Settings > Tools > AI Assistant**.

---

## Additional Resources

- [JetBrains AI Assistant Documentation](https://www.jetbrains.com/help/idea/ai-assistant.html)
- [JetBrains Student License](https://www.jetbrains.com/community/education/#students)
- [JetBrains Toolbox App](https://www.jetbrains.com/toolbox-app/)
- [Ollama (Local Models)](https://ollama.com)
