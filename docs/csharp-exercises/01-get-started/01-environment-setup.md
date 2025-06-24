---
noteId: "f3ac408045fd11f08a53dd9fb031ea51"
tags: []

---

**C# 开发环境的完整搭建教程**，适合初学者和入门开发者，适用于 Windows 和 macOS。

---

## ✅ 一、开发环境搭建的目标

为了开始学习和编写 C# 程序，你需要配置以下基本环境：

1. 安装 .NET SDK（C# 编译器 + 运行时）
2. 安装一个开发工具（推荐 Visual Studio 或 Visual Studio Code）
3. 验证环境是否配置成功

---

## ✅ 二、安装 .NET SDK（Windows / macOS 通用）

### ✅ 1. 访问官网

官网地址：[https://dotnet.microsoft.com/download](https://dotnet.microsoft.com/download)

选择最新的 `.NET SDK`（不是 Runtime），并选择你的操作系统进行下载。

例如：

* Windows：`dotnet-sdk-8.0.x-win-x64.exe`
* macOS：`dotnet-sdk-8.0.x-osx-x64.pkg`

### ✅ 2. 安装 SDK

* 双击安装程序，按照提示一路“下一步”直到完成。
* 安装完成后，打开命令行/终端，输入：

```bash
dotnet --version
```

如果输出版本号（如 `8.0.100`），说明安装成功！

---

## ✅ 三、安装开发工具（IDE）

### 选项 1：Visual Studio（功能强大，适合全面开发）

#### ✅ 安装步骤（Windows / macOS）：

1. 下载地址：[https://visualstudio.microsoft.com/](https://visualstudio.microsoft.com/)

2. 推荐选择版本：

   * Windows 用户：安装 **Visual Studio Community 2022**
   * macOS 用户：安装 **Visual Studio for Mac**（或选择 VS Code）

3. 安装时勾选 `.NET 桌面开发` 工作负载。

4. 安装完成后，打开 Visual Studio → 新建项目 → 选择 `控制台应用程序`（Console App） → 编写你的第一个程序。

---

### 选项 2：Visual Studio Code（轻量级，跨平台）

#### ✅ 安装步骤：

1. 下载地址：[https://code.visualstudio.com/](https://code.visualstudio.com/)

2. 安装后打开 VS Code，进入扩展（Extensions）：

   * 搜索并安装：`C# Dev Kit`（或 Microsoft 出品的 C# 插件）

3. 配置终端支持：

   * 打开终端，输入 `dotnet --version`，确保 .NET SDK 已安装

4. 创建你的第一个项目：

```bash
dotnet new console -o MyFirstApp
cd MyFirstApp
code .
```

5. 然后在 `Program.cs` 中写代码，按 `F5` 或点击 `Run` 运行程序。

---

## ✅ 四、创建并运行第一个 C# 程序

在命令行执行：

```bash
dotnet new console -o HelloWorld
cd HelloWorld
dotnet run
```

输出：

```
Hello, World!
```

你可以修改 `Program.cs` 文件，尝试更多的 C# 编程。

---

## ✅ 五、开发环境结构简介

```
HelloWorld/         <-- 项目目录
├── Program.cs      <-- 主程序入口
├── HelloWorld.csproj <-- 项目配置文件
```

---

## ✅ 六、常见问题

| 问题                  | 解决办法                        |
| ------------------- | --------------------------- |
| dotnet 命令未找到        | 需重启系统，或检查环境变量是否包含 .NET 安装路径 |
| VS Code 中运行报错       | 确保安装了 `.NET SDK` 和 C# 插件    |
| 安装 Visual Studio 太慢 | 可以选择 VS Code + CLI 工具，启动更快  |

---

## ✅ 七、推荐学习路线（附带环境支持）

| 学习内容            | 所需环境                    |
| --------------- | ----------------------- |
| 控制台应用开发         | VS / VS Code + .NET SDK |
| 窗体应用（WinForms）  | Visual Studio           |
| Web 开发（ASP.NET） | Visual Studio / VS Code |
| 跨平台工具           | Visual Studio Code      |

