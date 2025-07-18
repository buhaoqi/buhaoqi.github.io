---
noteId: "f3ac408045fd11f08a53dd9fb031ea51"
tags: []

---

C#就是一种编译型语言，在学习和编写C#程序之前，首先要在你的电脑上安装C#编译器。

---
## 编译器
“编译”是指将人类用英语编写的代码【人类能读懂的高级语言】（如 C#、Java、C++）翻译成计算机能理解的机器语言（也就是0和1）的过程。

这个过程由一个专门的程序——**编译器（compiler）**来完成。

## 安装.NET SDK

- .NET SDK就是C#的编译器。
- .NET SDK的全称是:.NET Software Development Kit，也就是“.NET开发工具包”。
- 安装.NET SDK，是学习C#的第一步。
- 安装Visual Studio 2022，会自动安装对应的 .NET SDK​​。无需手动下载安装。

.NET SDK的下载地址：[https://dotnet.microsoft.com/en-us/download/dotnet](https://dotnet.microsoft.com/en-us/download/dotnet)

## **.NET SDK核心组件**
.NET SDK不仅仅是C#的编译器，除此之外，还提供了运行环境、基础类库、项目模板等。

版本：.NET SDK 9.0.302

| 组件类型          | 包含内容  | 作用说明    |
|-------------------|--------------------|-------------------------|
| **编译器**        | Roslyn 编译器 (C# 13 / F# 8)                                             | 支持最新语法（如**集合字面量**、**扩展属性**）                             |
| **运行时**        | .NET Runtime 9.0.2                                                       | 执行环境（含GC/JIT/AOT）                                                |
| **基础库**        | .NET 9 Base Class Libraries (BCL)                                        | 提供`System.*`核心API（文件/网络/加密等）                               |
| **开发工具**      | CLI命令 / MSBuild / NuGet                                                | 项目构建/包管理/模板引擎                                                |
| **调试器**        | 跨平台调试引擎                                                          | 支持VS/VSCode远程调试                                                   |
| **模板库**        | 50+项目模板（控制台/WEB/API等）                                          | `dotnet new`快速创建项目                                                |

## 运行环境分类

.NET Runtime、ASP.NET Core Runtime 和 .NET Desktop Runtime 是 .NET 平台的不同运行时组件，它们分别支持不同的应用类型。

|运行时 |依赖关系 |典型应用
|---|---|---|
|.NET Runtime |基础运行时，其他运行时依赖它 |控制台应用、类库|
|ASP.NET Core |Runtime 依赖 .NET Runtime |Web 应用（MVC、API、Blazor Server）|
|.NET Desktop |Runtime 依赖 .NET Runtime| WPF、WinForms 桌面应用|


## .NET FrameWork

- .NET Framework是传统的 .NET 运行环境。
- .NET Core Runtime 是现代的 .NET 运行环境。

> .NET Framework	微软在 2002 年发布的经典 .NET 平台，只适用于 Windows，用于运行早期的 WinForms、WPF、ASP.NET WebForm 等应用。

> .NET Core Runtime	微软在 2016 年推出的跨平台 .NET 平台运行时，支持 Windows、Linux、macOS，是 .NET 的“新一代运行环境”

兼容性

.NET Framework和.NET Core Runtime二者是彼此不兼容的，通常都需要安装。

但通常情况下，Windows 10和11系统通常默认带有 .NET Framework 4，不需额外安装。

历史版本

| 版本                   | 说明                    |
| -------------------- | --------------------- |
| .NET Framework 2.0   | 早期广泛使用版本（C# 2.0）      |
| .NET Framework 4.0   | 引入 TPL 并发库、WCF 改进     |
| .NET Framework 4.5   | 异步编程 async/await 支持   |
| .NET Framework 4.8 | 最新&最后一个版本（仍有维护，但不再升级） |


## 安装Visual Studio（IDE）

- Visual Studio是一款微软出品的编程工具.
- Visual Studio是在Windows操作系统上编写C#程序的不二选择。
- Visual Studio是一个IDE(**Integrated Development Environment**)

> IDE指集成开发环境，一个IDE即是代码编辑器，又自带编译环境的工具，我们称之为IDE。

打开bing.com,搜索“visual studio”，演示安装过程。

安装过程

1. 下载地址：[https://visualstudio.microsoft.com/](https://visualstudio.microsoft.com/)

2. 选择版本：

      * Windows 用户：安装 **Visual Studio Community 2022**
      * macOS 用户：不推荐安装Visual Studio，推荐安装JetBrains Rider。

3. 安装时勾选 `.NET 桌面开发` 工作负载。

| 你的需求                   | 建议操作                                  |
| ---------------------- | ------------------------------------- |
| 只写控制台 / 桌面 WinForms 程序 | 安装 VS 时勾选“`.NET 桌面开发`”                |
| 想做网站（ASP.NET）          | 勾选“`ASP.NET 和 Web 开发`”                |
| 想开发多平台（手机/桌面）应用        | 勾选“.NET MAUI”                         |
| 已装好 VS，但没有 .NET 8      | 运行 `dotnet --list-sdks` 检查，如无则手动装 SDK |


---


## 发展演变图

```
.NET Framework →（功能老旧，停留在 4.8）

.NET Core 1.x → 2.x → 3.1 → 🆕 统一平台
                                  ↓
                             .NET 5
                             .NET 6 (LTS)
                             .NET 7
                             .NET 8 (LTS)
                             .NET 9 （2025 预期）
```

> 📌 LTS = 长期支持版本（Long Term Support）

---