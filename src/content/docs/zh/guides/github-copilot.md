---
title: "GitHub Copilot 设置指南"
description: "如何免费获取学生版GitHub Copilot，在VS Code中安装并在黑客松中高效使用。"
---

## 什么是GitHub Copilot？

GitHub Copilot是由GitHub和OpenAI开发的AI编程助手。它直接集成到你的代码编辑器中，根据项目的上下文提供实时代码建议——从补全单行代码到生成整个函数。你可以把它看作一个理解你的代码并帮助你更快编写代码的AI结对编程伙伴。

### 主要功能

- **代码补全**：在你输入时建议完整的代码行或代码块。
- **聊天**：在编辑器中直接向Copilot提问关于代码的问题。
- **多语言支持**：支持Python、JavaScript、TypeScript、C#、Go、Rust等多种语言。
- **上下文感知**：理解你打开的文件、项目结构和注释，提供相关建议。

---

## 第一步：通过学生开发者包免费获取GitHub Copilot

作为学生，你可以通过GitHub学生开发者包**完全免费**获取GitHub Copilot。以下是具体步骤。

### 1.1 创建GitHub账户（如果还没有的话）

1. 前往 [github.com](https://github.com) 并点击 **Sign up**。
2. 使用你的**大学邮箱地址**（例如 `yourname@nyu.edu`）——这会让验证过程更快。
3. 完成账户创建流程。

> **提示**：如果你已经有一个使用个人邮箱的GitHub账户，可以在 [Settings > Emails](https://github.com/settings/emails) 中添加你的大学邮箱作为辅助邮箱。

### 1.2 申请GitHub学生开发者包

1. 前往 [education.github.com/pack](https://education.github.com/pack)。
2. 点击 **"Sign up for Student Developer Pack"**（或 **"Get your Pack"**）。
3. 选择 **"Student"** 作为你的学术身份。
4. 从下拉菜单中选择你的**大学邮箱**。如果添加了 `.edu` 邮箱，请选择那个。
5. 输入你的**学校名称**（例如 "New York University Shanghai" 或 "NYU Shanghai"）。
6. 描述**你打算如何使用GitHub**——简短的一句话即可，例如 "For coursework, hackathon projects, and learning software development."

### 1.3 验证你的学生身份

GitHub会要求你证明你是学生。你有两种选择：

**选项A：学术邮箱验证（最快）**

如果你使用了 `.edu` 邮箱，GitHub可能会自动验证你。检查你的大学邮箱中的验证链接并点击它。

**选项B：上传在读证明（如果需要）**

如果自动验证不起作用，你需要上传文件。可接受的文件包括：

- 学生证（正反面照片）
- 官方在读证明
- 带有当前日期的成绩单
- 学费账单或注册确认

> **重要**：文件必须显示你的**姓名**、**学校名称**和**当前日期**（或包含当前学期的日期范围）。过期文件将被拒绝。

### 1.4 等待审批

- 如果使用了 `.edu` 邮箱，审批通常是**即时到几分钟**。
- 如果上传了文件，审批可能需要**几天到两周**。
- 审批通过后你会收到邮件通知。

> **黑客松提示**：如果你还没有申请，请**现在就申请**。不要等到黑客松当天！

### 1.5 确认Copilot访问权限

一旦你的学生开发者包获批：

1. 前往 [github.com/settings/copilot](https://github.com/settings/copilot)。
2. 你应该看到GitHub Copilot已经为你的账户**免费启用**。
3. 如果提示你设置订阅，请确保你登录的是拥有学生开发者包的账户。

---

## 第二步：在VS Code中安装GitHub Copilot

### 2.1 安装VS Code

如果你还没有安装Visual Studio Code：

1. 从 [code.visualstudio.com](https://code.visualstudio.com/) 下载。
2. 根据你的操作系统（Windows、macOS或Linux）进行安装。

### 2.2 安装GitHub Copilot扩展

1. 打开VS Code。
2. 点击左侧栏的**扩展**图标（或按 `Ctrl+Shift+X` / macOS上按 `Cmd+Shift+X`）。
3. 搜索 **"GitHub Copilot"**。
4. 点击由 **GitHub** 发布的扩展的 **Install**。这也会自动安装 **GitHub Copilot Chat**。

> **直接安装链接**：你也可以直接从VS Code扩展市场安装：[GitHub Copilot Extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)。

### 2.3 登录GitHub

1. 安装扩展后，你会看到一个登录GitHub的提示。点击 **"Sign in to GitHub"**。
2. 浏览器窗口会打开。使用拥有学生开发者包的GitHub账户登录。
3. 当提示时授权VS Code扩展。
4. 返回VS Code——你应该在底部状态栏看到Copilot图标。

### 2.4 验证是否正常工作

1. 创建一个新文件，例如 `test.py`。
2. 输入注释，如 `# function to calculate fibonacci numbers`，然后按回车。
3. Copilot应该会以灰色文字显示代码建议。按 `Tab` 接受建议。

如果你看到建议出现，恭喜——GitHub Copilot已经可以正常工作了！

---

## 第三步：如何使用GitHub Copilot

### 行内代码建议

当你输入时，Copilot会自动以灰色文字建议代码补全：

- **接受**：按 `Tab` 接受完整建议。
- **忽略**：按 `Esc` 或继续输入来忽略。
- **查看其他建议**：按 `Alt+]`（macOS上按 `Option+]`）切换其他建议。
- **逐词接受**：按 `Ctrl+Right Arrow`（macOS上按 `Cmd+Right Arrow`）逐词接受。

### Copilot 聊天

打开Copilot Chat获取更多交互式帮助：

- 按 `Ctrl+Shift+I`（macOS上按 `Cmd+Shift+I`）打开聊天面板。
- 你可以提问，例如：
  - "How do I set up a Three.js scene with WebXR?"（如何搭建一个支持WebXR的Three.js场景？）
  - "Explain this function"（解释这个函数）
  - "Fix the bug in this code"（修复这段代码中的bug）
  - "Write unit tests for this class"（为这个类编写单元测试）

### 行内聊天

在代码中直接进行快速编辑：

1. 选中一段代码。
2. 按 `Ctrl+I`（macOS上按 `Cmd+I`）。
3. 输入你的指令，例如 "refactor this to use async/await" 或 "add error handling"。
4. Copilot会在行内生成修改。点击 **Accept** 或 **Discard**。

---

## 第四步：黑客松中高效使用Copilot的技巧

### 先写清晰的注释

当Copilot理解你的意图时，它会生成更好的代码。在写任何函数之前，先写一个详细的注释：

```python
# Create a WebXR-compatible Three.js scene with:
# - A perspective camera at position (0, 1.6, 3)
# - An ambient light and a directional light
# - A ground plane with grid helper
# - VR controller support with ray casting
```

注释越具体，建议就越好。

### 使用Copilot Chat搭建项目骨架

在黑客松开始时，使用Copilot Chat快速搭建项目：

- "Create a basic Three.js project with TypeScript and Vite"
- "Set up a WebXR scene with hand tracking"
- "Generate a React component for a 3D model viewer"

这可以为你节省30分钟以上的初始设置时间。

### 通过打开文件提供上下文

Copilot会读取你打开的标签页作为上下文。当你开发某个功能时：

- 保持相关文件打开（类型、接口、工具函数）。
- 打开 `package.json` 让Copilot知道你使用了哪些库。
- 打开示例文件或文档文件作为参考。

### 在聊天中使用斜杠命令

Copilot Chat支持特殊的斜杠命令：

| 命令 | 功能 |
|---|---|
| `/explain` | 解释选中的代码 |
| `/fix` | 建议修复问题 |
| `/tests` | 为选中的代码生成测试 |
| `/doc` | 生成文档 |
| `/new` | 搭建新项目 |

### 使用 `@workspace` 进行项目级别的提问

在Copilot Chat中，在问题前输入 `@workspace` 让Copilot在整个项目中搜索：

- `@workspace How is the VR scene initialized?`
- `@workspace Where is the API endpoint for user authentication?`
- `@workspace Find all files that use Three.js`

### 不要盲目信任——审查代码

Copilot很强大但并不完美。在黑客松期间：

- 接受之前**始终阅读生成的代码**。有时它会编造不存在的API。
- **经常测试**。不要让Copilot生成几百行代码却不运行它们。
- **检查导入**。Copilot有时会从错误的包或已弃用的模块导入。

### 快捷键速查表

| 操作 | Windows/Linux | macOS |
|---|---|---|
| 接受建议 | `Tab` | `Tab` |
| 忽略建议 | `Esc` | `Esc` |
| 下一个建议 | `Alt+]` | `Option+]` |
| 上一个建议 | `Alt+[` | `Option+[` |
| 打开Copilot聊天 | `Ctrl+Shift+I` | `Cmd+Shift+I` |
| 行内聊天 | `Ctrl+I` | `Cmd+I` |

---

## 故障排除

### Copilot不显示建议

1. 检查底部状态栏的Copilot图标。如果有一条线穿过它，点击它并启用Copilot。
2. 确保你登录了正确的GitHub账户（有学生开发者包的那个）。
3. 尝试重新加载VS Code：`Ctrl+Shift+P`（或 `Cmd+Shift+P`）然后输入 "Developer: Reload Window"。

### 学生开发者包尚未获批

如果你的申请仍在审核中而黑客松就在明天：

- GitHub Copilot提供有限补全次数的**免费版**——无需学生包即可使用。前往 [github.com/settings/copilot](https://github.com/settings/copilot) 激活免费计划。
- 询问黑客松组织者——我们可能有额外的访问码。

### 扩展冲突

如果你安装了其他AI代码补全扩展（如Tabnine或Codeium），它们可能与Copilot冲突。在使用Copilot时禁用其他AI补全扩展。

---

## 其他资源

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot) — 官方文档
- [GitHub Student Developer Pack](https://education.github.com/pack) — 在此申请
- [Copilot Tips & Tricks (GitHub Blog)](https://github.blog/developer-skills/github/how-to-use-github-copilot-in-your-ide-tips-tricks-and-best-practices/) — GitHub的最佳实践
- [VS Code + Copilot Quickstart](https://docs.github.com/en/copilot/quickstart) — 入门指南

---

> **在黑客松需要帮助？** 找一位导师或组织者——我们会帮助你完成设置！
