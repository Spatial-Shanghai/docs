---
title: "JetBrains + Claude Code via Z.AI 设置指南"
description: "Spatial Shanghai 2026 推荐的 IDE 设置——在 PyCharm（或任意 JetBrains IDE）中使用 Claude Code 终端，通过 Z.AI API 驱动。"
---

## 推荐设置概览

本次黑客松的推荐 AI 开发环境为：

- **JetBrains IDE**（如 PyCharm）作为代码编辑器
- **Claude Code** 在集成终端中运行，通过 **Z.AI API** 驱动

这套组合能让你拥有一个强大的 AI 智能体助手，可以直接在 IDE 的终端中读取、编写并理解你的整个项目——无需 Anthropic 账户或 API 密钥。

> **为什么推荐这套设置？** 通过 Z.AI 使用 Claude Code 对本次黑客松的学生免费开放，功能强大，且完全融入现有的 JetBrains 工作流。

---

## 第一步：获取免费学生 JetBrains 许可证

JetBrains 为学生提供**所有 IDE 的免费许可证**。作为上海纽约大学的学生，你有资格申请。

1. 前往 [jetbrains.com/community/education/#students](https://www.jetbrains.com/community/education/#students) 并点击 **Apply Now**。
2. 使用你的 `@nyu.edu` 或 `@shanghai.nyu.edu` 邮箱——JetBrains 通过邮箱域名验证学生身份。
3. 如果还没有 JetBrains 账户，使用大学邮箱创建一个。
4. 检查收件箱中来自 JetBrains 的确认邮件，点击验证链接。
5. 从 [jetbrains.com/products](https://www.jetbrains.com/products/) 下载你的 IDE，启动后使用 JetBrains 账户登录以激活许可证。

> **提示：** 安装 **JetBrains Toolbox App** 可以在一个地方管理所有 IDE：[jetbrains.com/toolbox-app](https://www.jetbrains.com/toolbox-app/)。

本次黑客松推荐使用 **PyCharm**。如果你的项目是基于 TypeScript/Three.js 的 Web XR 项目，则推荐使用 **WebStorm**。

---

## 第二步：安装 Claude Code

Claude Code 是一个基于终端的 AI 智能体。使用 npm 全局安装。

### 前提条件

- **Node.js 18 或更新版本**
  - **macOS**：请使用 `nvm` 安装 Node.js，直接安装安装包可能会遇到权限问题。
  - **Windows**：除了 Node.js，还需要额外安装 [Git for Windows](https://gitforwindows.org/)。

### 安装

```bash
npm install -g @anthropic-ai/claude-code
```

---

## 第三步：配置 Claude Code 使用 Z.AI

需要将 Claude Code 指向 Z.AI 的 API，而不是 Anthropic 的服务器。通过编辑一个配置文件来完成。

### 3.1 找到或创建配置文件

- **Mac/Linux：** `~/.claude/settings.json`
- **Windows：** `%USERPROFILE%\.claude\settings.json`

如果文件不存在，请创建它。

### 3.2 粘贴配置内容

打开文件，将以下内容完整粘贴进去。将 `ANTHROPIC_AUTH_TOKEN` 中的 `.` 替换为你的 Z.AI API 密钥。

```json
{
  "model": "glm-5.1",
  "availableModels": ["glm-5.1", "glm-5v-turbo"],
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "在此填入你的Z.AI API密钥",
    "ANTHROPIC_BASE_URL": "https://open.bigmodel.cn/api/anthropic",
    "API_TIMEOUT_MS": "3000000",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": 1
  }
}
```

> **在哪里获取 Z.AI API 密钥？** 你将从黑客松组织者处获得，或者可以在 [bigmodel.cn](https://bigmodel.cn) 注册。

### 3.3 重启 Claude Code

关闭所有正在运行的 Claude Code 会话，重新打开终端后再运行 `claude`，使新配置生效。

---

## 第四步：设置视觉智能体（可选但推荐）

Z.AI 提供多模态模型（`glm-5v-turbo`），可以分析截图和 UI 图片。你可以将其设置为专用的 Claude Code 子智能体。

### 4.1 创建智能体目录

在 PyCharm 终端中运行：

```bash
mkdir -p .claude/agents
```

### 4.2 创建视觉智能体文件

打开 nano 编辑器：

```bash
nano .claude/agents/vision.agent.md
```

### 4.3 粘贴智能体配置

复制并粘贴以下内容：

```markdown
---
name: vision
description: Expert in analyzing screenshots and UI mockups.
model: glm-5v-turbo
---

You are the project's visual specialist. When the user provides an image, analyze it for UI/UX issues, layout bugs, or design-to-code translations. Provide clear, technical instructions back to the main agent so it can implement the code changes.
```

### 4.4 保存并退出 Nano

1. 按 `Ctrl + O` 写入文件。
2. 按 `Enter` 确认文件名。
3. 按 `Ctrl + X` 退出编辑器。

### 4.5 验证智能体文件

```bash
ls .claude/agents
```

你应该能看到 `vision.agent.md`。

### 4.6 测试视觉智能体

启动 Claude Code（`claude`）后输入：

```
@vision are you there?
```

如果它有回应，说明配置成功。现在你可以将图片拖入终端，并使用 `@vision` 来触发 `glm-5v-turbo` 模型处理该请求。

---

## 第五步：在 PyCharm 中运行 Claude Code

1. 在 PyCharm 中打开你的项目。
2. 打开集成终端：**View > Tool Windows > Terminal**（或按 `Alt+F12` / macOS 上按 `Option+F12`）。
3. 如有需要，切换到你的项目目录：
   ```bash
   cd your-project-directory
   ```
4. 启动 Claude Code：
   ```bash
   claude
   ```
5. 如果出现提示 **"Do you want to use this API key?"**，选择 **Yes**。

现在你就拥有了一个在 IDE 终端中运行的完整 AI 智能体助手。

---

## 故障排除

### Claude Code 未读取 Z.AI 配置

确保在编辑 `settings.json` 之前已关闭之前的会话。保存文件后在新的终端中运行 `claude`。

### 提示 `claude` 命令未找到

npm 全局 bin 目录可能不在你的 PATH 中。可以尝试：

```bash
npx @anthropic-ai/claude-code
```

或者检查 npm 全局路径：

```bash
npm config get prefix
```

然后将 `<prefix>/bin` 添加到你的 PATH 中。

### macOS 安装时出现权限错误

使用 `nvm` 管理 Node.js，而不是使用官方 macOS 安装包：

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 20
nvm use 20
npm install -g @anthropic-ai/claude-code
```

---

## 更多资源

- [Claude Code 文档](https://docs.anthropic.com/en/docs/claude-code) — 官方 Claude Code 文档
- [Z.AI / BigModel 平台](https://bigmodel.cn) — Z.AI API 控制台
- [JetBrains 学生许可证](https://www.jetbrains.com/community/education/#students) — 申请免费 IDE 访问
- [JetBrains Toolbox App](https://www.jetbrains.com/toolbox-app/) — 管理所有 JetBrains IDE

---

> **在黑客松需要帮助？** 找一位导师或组织者——我们会帮助你完成设置！
