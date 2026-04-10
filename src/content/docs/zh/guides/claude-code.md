---
title: "Claude Code + Z.ai 使用指南"
description: "使用 Anthropic 的智能编程工具，通过 Z.ai 免费使用，助力 Spatial Shanghai 2026 黑客松"
---

## 什么是 Claude Code？

Claude Code 是 Anthropic 推出的智能编程工具，直接在终端中运行。与通过聊天窗口操作的传统 AI 助手不同，Claude Code 存在于你已经工作的地方——命令行。它可以读取和编辑整个项目中的文件、运行终端命令、搜索代码库、管理 git 工作流，以及执行复杂的多文件重构——所有这些都通过自然语言对话完成。

可以把 Claude Code 想象成一位资深开发者在终端中与你结对编程。你描述你想要的东西，它会找出需要读取哪些文件、需要做哪些更改、需要运行哪些命令——然后在执行之前征求你的许可。

---

## 什么是 Z.ai？

Z.ai 是一个提供**免费 Claude 访问**的服务——包括 Claude Code。通常，使用 Claude Code 需要一个付费计划的 Anthropic API 密钥。在本次黑客松中，Z.ai 赞助了访问权限，让每位参赛者都可以免费使用 Claude Code。

### 如何注册 Z.ai

1. **访问 [z.ai](https://z.ai)**，使用你的电子邮件地址创建账户。

2. **验证你的邮箱**——检查收件箱中的确认链接并点击。

3. **进入 API 密钥页面**——登录后，进入你的仪表板，找到 API 密钥部分。

4. **生成 API 密钥**——创建一个新的 API 密钥。复制并妥善保管；你需要用它来配置 Claude Code。

> **注意：** Z.ai 专门为本次黑客松提供免费额度。Z.ai 的 API 密钥与 Anthropic API 密钥的使用方式相同，但通过 Z.ai 的基础设施进行路由。

---

## 安装

### 前提条件

你的机器上需要安装 **Node.js 18 或更高版本**。检查你的版本：

```bash
node --version
```

如果你没有安装 Node.js，请从 [nodejs.org](https://nodejs.org/) 下载，或使用版本管理器如 `nvm`。

### 安装 Claude Code

通过 npm 全局安装 Claude Code：

```bash
npm install -g @anthropic-ai/claude-code
```

验证安装：

```bash
claude --version
```

你应该在终端中看到版本号输出。

---

## 将 Claude Code 连接到 Z.ai

要使用 Z.ai 的免费访问来运行 Claude Code，你需要配置两个环境变量：一个用于 API 密钥，一个用于 API 基础 URL（这样 Claude Code 就知道通过 Z.ai 而不是直接向 Anthropic 发送请求）。

### 选项 1：每次会话设置环境变量

```bash
export ANTHROPIC_API_KEY="your-zai-api-key-here"
export ANTHROPIC_BASE_URL="https://api.z.ai/v1"
```

然后启动 Claude Code：

```bash
claude
```

### 选项 2：添加到 Shell 配置文件（持久化）

将以下行添加到你的 `~/.zshrc`（macOS）或 `~/.bashrc`（Linux）中：

```bash
export ANTHROPIC_API_KEY="your-zai-api-key-here"
export ANTHROPIC_BASE_URL="https://api.z.ai/v1"
```

然后重新加载你的 shell：

```bash
source ~/.zshrc   # or source ~/.bashrc
```

### 选项 3：启动时内联设置

```bash
ANTHROPIC_API_KEY="your-zai-api-key-here" ANTHROPIC_BASE_URL="https://api.z.ai/v1" claude
```

### 验证连接

Claude Code 启动后，尝试一个简单的提示来确认一切正常：

```
> What files are in this directory?
```

如果 Claude Code 回复了文件列表，你就已经连接成功，可以开始使用了。

---

## 核心功能

### 文件编辑

Claude Code 可以读取、创建和编辑整个项目中的文件。它理解代码库的上下文，并进行精确、有针对性的更改。

```
> Add a loading spinner component to src/components/LoadingSpinner.tsx
> Fix the type error in utils/parser.ts
> Create a new API route for user authentication
```

Claude Code 会向你展示它计划做的确切更改，并在写入磁盘之前征求确认。

### 终端命令

Claude Code 可以代替你运行 shell 命令——安装包、运行构建、启动开发服务器等。

```
> Install three.js and @types/three as dependencies
> Run the test suite and fix any failing tests
> Start the development server
```

它总是会向你展示它想要运行的命令，并等待你的批准。

### Git 集成

Claude Code 有深度的 git 集成。它可以创建提交、管理分支、解决合并冲突和编写 pull request 描述。

```
> Commit all my changes with an appropriate message
> Create a new branch called feature/vr-controls
> Show me what changed since the last commit
```

### 多文件重构

Claude Code 最强大的功能之一是同时重构多个文件中的代码。它理解文件之间的关系并确保一致性。

```
> Rename the UserProfile component to PlayerProfile everywhere it's used
> Convert all class components to functional components with hooks
> Move the API logic from components into a separate services directory
```

### 代码库搜索与理解

Claude Code 可以搜索你的项目以理解架构并找到相关代码。

```
> How is the routing set up in this project?
> Find all places where we call the inventory API
> Explain what the SceneManager class does
```

---

## 黑客松使用技巧

### 从 `/init` 开始

当你第一次在项目目录中打开 Claude Code 时，运行 `/init` 命令。这会创建一个 `CLAUDE.md` 文件，为 Claude Code 提供关于你项目的上下文——你的技术栈、文件结构、编码规范和关键命令。

```
> /init
```

这在黑客松中尤其重要，因为你是从零开始构建的。`CLAUDE.md` 文件帮助 Claude Code 在整个活动中给你更好、更相关的建议。

### 使用计划模式处理复杂任务

对于较大的功能或架构决策，按 `Shift+Tab` 切换到**计划模式**。在计划模式下，Claude Code 会先思考问题并制定分步计划，然后再编写任何代码。

这适用于：

- 设计黑客松项目的初始架构
- 规划如何集成新的 AR/VR 库
- 将复杂功能分解为可管理的步骤

### 编写具体、详细的提示

你给 Claude Code 提供的上下文越多，结果就越好。比较以下提示：

**模糊（效果差）：**
```
> Make a 3D scene
```

**具体（好得多）：**
```
> Create a Three.js scene in src/Scene.tsx with a WebXR-compatible renderer,
> a ground plane with grid texture, ambient and directional lighting,
> and orbit controls. Use React Three Fiber. The scene should support
> AR mode using the WebXR API.
```

### 快速迭代

Claude Code 擅长快速迭代，这正是你在黑客松中所需要的。不要试图在一个提示中把所有事情都做完美。相反：

1. **从一个可运行的骨架开始**——先搭建基本结构并让它运行起来。

2. **逐步添加功能**——每个提示添加一个功能，保持可控。

3. **及时修复问题**——将错误信息直接粘贴给 Claude Code，让它调试。

### 使用 Claude Code 生成样板代码

黑客松的时间很宝贵。让 Claude Code 处理重复的设置工作：

```
> Set up a Vite + React + TypeScript project with Three.js and React Three Fiber
> Add ESLint, Prettier, and a basic folder structure for a VR application
```

```
> Create a WebSocket server with Express that broadcasts player positions
> to all connected clients
```

### 直接传递错误信息

当出现问题时，复制完整的错误信息并直接粘贴到 Claude Code 中：

```
> I'm getting this error when I try to start the AR session:
> DOMException: The requested session mode 'immersive-ar' is not supported
> by any available runtime. Fix this.
```

Claude Code 会分析错误、检查你的代码并提出修复方案。

### 有用的键盘快捷键

| 快捷键 | 操作 |
|---|---|
| `Shift+Tab` | 切换计划模式 |
| `Ctrl+C` | 取消当前响应 |
| `Escape` | 清除当前输入 |
| `/init` | 初始化 CLAUDE.md |
| `/help` | 显示所有命令 |
| `/clear` | 清除对话历史 |

### 团队合作

如果你的团队在项目的不同部分工作，每个成员可以在终端中运行自己的 Claude Code 会话。使用 git 分支来避免冲突：

```
> Create and switch to a new branch called feature/my-feature
```

当你准备合并时，Claude Code 可以帮助解决任何冲突：

```
> Merge the main branch into my branch and resolve any conflicts
```

---

## 快速入门清单

- [ ] 在 [z.ai](https://z.ai) 注册并获取你的 API 密钥
- [ ] 如果尚未安装，安装 Node.js 18+
- [ ] 运行 `npm install -g @anthropic-ai/claude-code`
- [ ] 设置 `ANTHROPIC_API_KEY` 和 `ANTHROPIC_BASE_URL` 环境变量
- [ ] 进入你的项目目录并运行 `claude`
- [ ] 运行 `/init` 创建项目的 `CLAUDE.md`
- [ ] 开始构建！

---

## 故障排除

### "认证失败"或"无效的 API 密钥"

仔细检查 `ANTHROPIC_API_KEY` 环境变量是否正确设置。运行：

```bash
echo $ANTHROPIC_API_KEY
```

如果为空，请使用上面连接部分的说明重新设置。

### "找不到命令：claude"

这通常意味着 npm 全局 bin 目录不在你的 PATH 中。尝试：

```bash
npx @anthropic-ai/claude-code
```

或者找到 npm 安装全局包的位置并将其添加到你的 PATH：

```bash
npm config get prefix
# 将输出的 /bin 子目录添加到你的 PATH
```

### 响应缓慢

如果 Claude Code 响应缓慢，可能是在处理大型代码库。尝试：

- 在较小的子目录中启动 Claude Code
- 使用更具体的提示，这样它不需要搜索整个项目
- 如果对话上下文太长，运行 `/clear` 重置

---

## 其他资源

- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code) — 官方 Anthropic 文档
- [Z.ai](https://z.ai) — 黑客松免费 Claude 访问
- [Anthropic Discord](https://discord.gg/anthropic) — 社区支持

在黑客松期间需要帮助？请询问导师或前往帮助台！
