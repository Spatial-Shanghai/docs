---
title: "JetBrains AI 助手"
description: "Spatial Shanghai 2026 黑客松 JetBrains AI 助手使用指南——免费学生许可证、设置、AI 提供商和核心功能。"
---

## 什么是 JetBrains AI 助手？

JetBrains AI 助手是一款内置的 AI 编程伴侣，适用于整个 JetBrains IDE 系列——IntelliJ IDEA、PyCharm、WebStorm、CLion、Rider、GoLand、PhpStorm、RubyMine 等。它深度集成在 IDE 中，能够理解你的项目结构、打开的文件、错误上下文和版本控制历史，从而提供比独立 AI 工具更相关的建议。

与基于浏览器的 AI 工具不同，JetBrains AI 助手直接在你的编辑器内工作，完全了解你的代码库。它可以读取你当前的文件、理解导入链、查看编译器错误，并与你的终端和版本控制系统交互——所有这些都无需将代码复制粘贴到单独的窗口中。

### 支持的 IDE

| IDE | 主要语言 |
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

AI 助手适用于所有这些 IDE，并且无论你使用哪一个，工作方式都相同。

---

## 学生免费获取 JetBrains

JetBrains 为学生和教育者提供**所有 IDE 的免费许可证**。作为上海纽约大学的学生，你有资格参加此计划。该许可证包括每个 JetBrains IDE，有效期为一年，只要你仍是学生就可以续期。

### 分步指南：申请学生许可证

**第一步：访问 JetBrains 学生页面**

访问 [https://www.jetbrains.com/community/education/#students](https://www.jetbrains.com/community/education/#students) 并点击 **Apply Now**（立即申请）。

**第二步：使用你的大学邮箱**

使用你的 `@nyu.edu` 或 `@shanghai.nyu.edu` 邮箱地址。JetBrains 将通过邮箱域名验证你的学生身份。这是最快的验证方式。

**第三步：创建 JetBrains 账户**

如果你还没有 JetBrains 账户，系统会要求你创建一个。请使用你的大学邮箱注册此账户。

**第四步：确认你的邮箱**

检查你的大学邮箱中来自 JetBrains 的确认邮件。点击验证链接。你的许可证通常会在几分钟内激活。

**第五步：下载并激活**

从 [https://www.jetbrains.com/products/](https://www.jetbrains.com/products/) 下载你喜欢的 IDE。启动 IDE 时，使用你的 JetBrains 账户登录以激活许可证。

> **提示：** 你也可以安装 **JetBrains Toolbox App** 来在一个地方管理所有 IDE。从 [https://www.jetbrains.com/toolbox-app/](https://www.jetbrains.com/toolbox-app/) 下载。

---

## 如何启用 AI 助手

JetBrains AI 助手从 2023.3 版本开始随 JetBrains IDE 捆绑提供。但是，它需要单独的 AI 订阅或免费试用才能激活。

### 启用内置 AI 助手

**第一步：更新你的 IDE**

确保你正在运行最新版本的 JetBrains IDE。转到 **Help > Check for Updates**（在 macOS 上：**IntelliJ IDEA > Check for Updates**）。

**第二步：打开 AI 助手**

在右侧边栏中查找 **AI Assistant** 工具窗口。你也可以通过 **View > Tool Windows > AI Assistant** 访问它，或使用 **Shift+Shift** 搜索快捷键并输入 "AI Assistant"。

**第三步：登录并激活**

如果出现提示，请使用你的 JetBrains 账户登录。你可能需要开始免费试用或激活 AI Pro 订阅。JetBrains 为新用户提供 **7 天免费试用** AI 助手。

> **黑客松提示：** Spatial Shanghai 2026 可能会提供赞助的 JetBrains AI 访问权限。请查看黑客松组织者的公告以获取许可证详情。

### 作为插件安装 AI 助手（旧版 IDE）

如果你使用的是较旧的 IDE 版本（2023.2 或更早），可以将 AI 助手作为插件安装：

1. 转到 **Settings/Preferences > Plugins**（Windows/Linux 上按 Ctrl+Alt+S，macOS 上按 Cmd+,）。
2. 在 Marketplace 标签中搜索 **"AI Assistant"**。
3. 点击 **Install**（安装）并重启 IDE。

---

## 添加其他 AI 提供商

JetBrains AI 助手默认使用 JetBrains 自己的 AI 服务，但你也可以连接第三方 AI 提供商以获得更大的灵活性。如果你有 OpenAI、Anthropic 的 API 密钥或可以访问本地模型，这将特别有用。

### 连接 OpenAI 或 Anthropic

**第一步：打开 AI 设置**

转到 **Settings/Preferences > Tools > AI Assistant > Language Models**。

**第二步：添加新的提供商**

点击 **+** 按钮或 **Add Provider**（添加提供商）来添加新的模型提供商。选择提供商类型（OpenAI API Compatible、Anthropic 等）。

**第三步：输入你的 API 密钥**

输入你的 API 密钥和端点 URL。对于常见的提供商：

| 提供商 | Endpoint URL |
|---|---|
| OpenAI | `https://api.openai.com/v1` |
| Anthropic | `https://api.anthropic.com` |
| Azure OpenAI | 你的 Azure 部署 URL |
| Local (Ollama) | `http://localhost:11434/v1` |

**第四步：选择模型**

选择你要使用的模型（例如 `gpt-4o`、`claude-sonnet-4-20250514`、`llama3`）。你可以为不同的任务配置不同的模型——例如，使用更快的模型进行代码补全，使用更强大的模型进行聊天。

### 使用 Ollama 运行本地模型

如果你想在没有互联网连接或 API 成本的情况下使用 AI，可以使用 Ollama 在本地运行模型：

1. 从 [https://ollama.com](https://ollama.com) 安装 Ollama。
2. 拉取模型：`ollama pull codellama` 或 `ollama pull llama3`。
3. 启动 Ollama 服务器：`ollama serve`。
4. 在 JetBrains 中，添加端点为 `http://localhost:11434/v1` 的提供商。

> **注意：** 本地模型需要大量的 RAM 和 GPU 资源。对于黑客松，基于云的提供商通常更快、更可靠。

---

## 核心功能

### 1. 内联代码补全

AI 助手在你输入时提供实时代码建议。它根据你当前文件的上下文、打开的项目文件和导入的库来预测你的下一行代码。

**使用方法：**

- 只需开始输入，建议就会以灰色虚影文本的形式出现。
- 按 **Tab** 接受建议。
- 按 **Alt+\\**（Windows/Linux）或 **Option+\\**（macOS）手动触发建议。
- 按 **Escape** 取消建议。

AI 助手的代码补全具有上下文感知能力，能够理解你的整个项目。它在补全样板代码、实现接口方法和编写重复模式方面特别强大。

### 2. AI 聊天

AI 聊天窗口允许你与 AI 就你的代码进行对话。它可以看到你当前打开的文件、选中的代码和项目结构。

**使用方法：**

- 从右侧边栏打开 **AI Assistant** 工具窗口。
- 在聊天输入字段中输入问题或请求。
- 在编辑器中选择代码，然后右键单击并选择 **AI Actions > Ask AI** 以询问有关特定代码的问题。
- 使用 **@** 符号在你的提示中引用文件、符号或文档。

**黑客松项目的实用提示：**

- "解释这个函数并建议改进"
- "为选中的代码编写单元测试"
- "如何将 Three.js 与这个 React 组件集成？"
- "查找此文件中的潜在 bug"

### 3. 重构建议

AI 助手可以建议并应用超越传统 IDE 重构工具的代码重构。

**使用方法：**

- 在编辑器中选择一个代码块。
- 右键单击并选择 **AI Actions > Suggest Refactoring**。
- 在应用之前在差异视图中查看建议的更改。
- 你也可以在聊天中询问："将这段代码重构为使用 async/await" 或 "将此逻辑提取到单独的函数中。"

### 4. 提交消息生成

AI 助手可以根据你暂存的更改自动生成有意义的提交消息。

**使用方法：**

1. 像往常一样暂存你的更改（在 **Commit** 工具窗口或通过 `git add`）。
2. 在 **Commit** 工具窗口中，点击提交消息字段旁边的 **AI** 图标（星形图标）。
3. AI 助手将分析你的差异并生成描述性的提交消息。
4. 如果需要可以编辑消息，然后提交。

### 5. 代码解释和文档

AI 助手可以解释不熟悉的代码，并为你的函数和类生成文档注释。

**使用方法：**

- 选中代码并右键单击，然后选择 **AI Actions > Explain Code**（解释代码）。
- 将光标放在函数/类上，使用 **AI Actions > Generate Documentation**（生成文档）来自动创建 JSDoc、docstring 或其他文档注释。

### 6. 错误解释和修复建议

当你的代码有错误或警告时，AI 助手可以解释它们并建议修复。

**使用方法：**

- 将鼠标悬停在代码中的红色/黄色波浪下划线上。
- 在弹出窗口中点击 **AI Actions > Explain Error**（解释错误）或 **Suggest Fix**（建议修复）。
- AI 将在上下文中分析错误并提出解决方案。

---

## 快捷键参考

| 操作 | Windows/Linux | macOS |
|---|---|---|
| 触发代码补全 | Alt+\\ | Option+\\ |
| 接受建议 | Tab | Tab |
| 打开 AI 聊天 | Shift+Shift, 输入 "AI" | Shift+Shift, 输入 "AI" |
| 对选中代码执行 AI 操作 | Right-click > AI Actions | Right-click > AI Actions |
| 生成提交消息 | 在 Commit 窗口中点击 AI 图标 | 在 Commit 窗口中点击 AI 图标 |
| 全局搜索 | Shift+Shift | Shift+Shift |

---

## 黑客松使用技巧

### 1. 选择合适的 IDE

选择与你的主要语言匹配的 JetBrains IDE。对于 Spatial Shanghai 黑客松，如果你使用 Three.js 或 A-Frame 构建基于 Web 的 AR/VR，**WebStorm** 是理想的选择。如果你的后端基于 Python，**PyCharm** 最好。如果你正在构建全栈项目，**IntelliJ IDEA Ultimate** 通过插件支持所有语言。

### 2. 黑客松前完成设置

不要浪费黑客松时间来安装和配置你的 IDE。在活动之前：

- 安装 JetBrains IDE 并激活你的学生许可证。
- 启用 AI 助手并验证它是否正常工作。
- 配置你想使用的任何额外 AI 提供商。
- 熟悉上面的快捷键。

### 3. 将 AI 助手与其他黑客松工具结合使用

JetBrains AI 助手可以与黑客松提供的其他工具配合使用。例如：

- 使用 **JetBrains AI 聊天** 解答项目级别的问题和进行重构，使用终端中的 **Claude Code** 快速生成文件。
- 使用 **v0 by Vercel** 搭建 UI 脚手架，然后将代码导入 JetBrains 中使用 AI 助手进行优化。
- 使用 **GitHub Copilot**（也作为 JetBrains 插件提供）与 AI 助手一起使用，获得代码建议的第二意见。

### 4. 使用 AI 进行快速原型开发

在 24 小时黑客松中，速度很重要。使用 AI 助手来：

- 为新文件和组件生成样板代码。
- 通过在聊天中描述 API 端点来快速实现它们。
- 在语言之间转换代码（例如，Python 原型转换为 TypeScript）。
- 生成测试用例以尽早发现 bug。
- 从描述中编写配置文件（Docker、package.json、tsconfig）。

### 5. 使用 AI 更快地调试

当你在黑客松中遇到 bug 时，不要花 30 分钟阅读 Stack Overflow。而是：

1. 选择有问题的代码。
2. 打开 AI 聊天，描述你期望的结果和实际发生的情况。
3. 将任何错误消息粘贴到聊天中。
4. 应用建议的修复并立即测试。

### 6. 一致地生成提交消息

在黑客松中，很容易每次都写 "fix stuff" 作为提交消息。使用 AI 生成的提交消息来保持干净的 git 历史。当你需要演示项目或出现问题需要回滚时，这会很有帮助。

---

## 故障排除

### AI 助手没有出现

- 确保你的 IDE 是 2023.3 或更高版本。
- 检查 AI 助手插件是否已启用：**Settings > Plugins > Installed**，搜索 "AI Assistant"。
- 启用插件后重启 IDE。

### AI 功能显示为灰色

- 你可能需要登录你的 JetBrains 账户：**Help > Register**。
- 在 [https://account.jetbrains.com](https://account.jetbrains.com) 验证你的 AI 订阅或试用是否处于活动状态。

### 响应缓慢或没有响应

- 检查你的互联网连接。
- 如果通过 Ollama 使用本地模型，请确保 Ollama 服务器正在运行（`ollama serve`）。
- 尝试在 **Settings > Tools > AI Assistant** 中切换到不同的 AI 模型。

---

## 更多资源

- [JetBrains AI 助手文档](https://www.jetbrains.com/help/idea/ai-assistant.html)
- [JetBrains 学生许可证](https://www.jetbrains.com/community/education/#students)
- [JetBrains Toolbox 应用](https://www.jetbrains.com/toolbox-app/)
- [Ollama（本地模型）](https://ollama.com)
