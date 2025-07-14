---
noteId: "f3ac408045fd11f08a53dd9fb031ea51"
tags: []

---

**C# 开发环境的完整搭建教程**，适合初学者和入门开发者，适用于 Windows 和 macOS。

---

## 一、搭建开发环境的目标

为了开始学习和编写 C# 程序，你需要配置以下基本环境：

1. 安装 .NET SDK（C# 编译器 + 运行时）
2. 安装一个开发工具（推荐 Visual Studio 或 Visual Studio Code）
3. 验证环境是否配置成功

---

## 二、安装 .NET SDK

> 注意：如果你在安装 Visual Studio 时勾选了“.NET 桌面开发”或“.NET Web 开发”等相关工作负载，通常会自动安装所需的 .NET 8 SDK 和 Runtime，不需要你手动安装。

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

## 三、.NET SDK VS .NET Runtime

`.NET 9 SDK` 和 `.NET 9 Runtime` 虽然名称相近，但用途和组成是不同的。下面是详细区别说明：

一句话区分

| 名称                 | 作用                      |
| ------------------ | ----------------------- |
| **.NET 9 SDK**     | 开发工具包（包含编译器、模板、Runtime） |
| **.NET 9 Runtime** | 仅用于**运行**已编译好的 .NET 程序  |


举个例子：

| 场景                 | 安装哪个？                                         |
| ------------------ | --------------------------------------------- |
| 你是开发者，要写 C# 程序     | 安装 `.NET 9 SDK` ✅                             |
| 你只运行别人写的 .NET 9 应用 | 安装 `.NET 9 Runtime` ✅                         |
| 你要部署 ASP.NET 网站    | 安装 `.ASP.NET Core Runtime`（包含 .NET Runtime） ✅ |

### .NET 9 SDK（开发工具包）

* 全称：`.NET 9 Software Development Kit`
* 用途：**开发** .NET 应用程序所需的工具
* 包含内容：

    * 编译器（如 `csc`、Roslyn）
    * 项目模板（如 `dotnet new console`）
    * 命令行工具（`dotnet` CLI）
    * 调试支持
    * .NET 9 Runtime（开发时也要运行）

✅ **开发者需要安装 SDK**

---

### .NET 9 Runtime(运行时环境)

* 全称：`.NET 9 Runtime`
* 用途：**运行** 用 SDK 编译好的 .NET 程序
* 包含内容：

    * .NET CLR（公共语言运行时）
    * 基础类库（如 `System.*`）
    * 没有编译器或模板

✅ **最终用户只需要安装 Runtime**

图示：

```
             .NET 9 SDK
         ┌────────────────┐
         │ 编译器（csc）    │
         │ 模板（dotnet new）│
         │ CLI 工具        │
         │ .NET 9 Runtime │ ← 用于开发时运行
         └────────────────┘

             .NET 9 Runtime
         ┌────────────────┐
         │ CLR + 类库      │
         │ 仅运行程序      │
         └────────────────┘
```

如需下载推荐：

* [✅ SDK 下载地址](https://dotnet.microsoft.com/en-us/download/dotnet/9.0)
* [✅ Runtime 下载地址](https://dotnet.microsoft.com/en-us/download/dotnet/9.0/runtime)

---

## 四、查看.NET版本


| 想查看的版本类型            | 方法                                       |
| ------------------- | ---------------------------------------- |
| .NET 5/6/7/8（现代版）   | `dotnet --list-sdks` 和 `--list-runtimes` |
| .NET Framework（老版本） | 查看注册表或使用 Visual Studio                   |
| 当前默认版本              | `dotnet --version`                       |

命令对比：

```bash
dotnet --list-sdks      # 显示已安装的 SDK
dotnet --list-runtimes  # 显示已安装的 Runtime
```

---

## 五、安装Visual Studio（IDE）

1. 下载地址：[https://visualstudio.microsoft.com/](https://visualstudio.microsoft.com/)

2. 推荐选择版本：

   * Windows 用户：安装 **Visual Studio Community 2022**
   * macOS 用户：安装 **Visual Studio for Mac**（或选择 VS Code）

3. 安装时勾选 `.NET 桌面开发` 工作负载。

4. 安装完成后，打开 Visual Studio → 新建项目 → 选择 `控制台应用程序`（Console App） → 编写你的第一个程序。


| 你的需求                   | 建议操作                                  |
| ---------------------- | ------------------------------------- |
| 只写控制台 / 桌面 WinForms 程序 | 安装 VS 时勾选“`.NET 桌面开发`”                |
| 想做网站（ASP.NET）          | 勾选“`ASP.NET 和 Web 开发`”                |
| 想开发多平台（手机/桌面）应用        | 勾选“.NET MAUI”                         |
| 已装好 VS，但没有 .NET 8      | 运行 `dotnet --list-sdks` 检查，如无则手动装 SDK |


---


## 六、验证环境是否配置成功

创建并运行第一个 C# 程序

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

开发环境结构简介

```
HelloWorld/         <-- 项目目录
├── Program.cs      <-- 主程序入口
├── HelloWorld.csproj <-- 项目配置文件
```

