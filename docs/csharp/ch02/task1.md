---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务一 C#语言简介  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务一 C#语言简介  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 2  # 侧边栏中排在第1位
---
## 一、C#是什么

C#读音为“C Sharp”。

C#是一种现代的、面向对象的、类型安全的编程语言。

C#是由微软的 Anders Hejlsberg（他也是 Turbo Pascal 和 Delphi 之父）团队在 .NET initiative 下开发的。

C#的名字灵感来自于音乐中的“升号”（♯），意味着它是 C 语言的“更高一级”的演进。

## 二、简述C#的发展过程

- 1998 C#第一版发布
- 2000 标准化
- 2002 正式发布

## 三、C#的特点是什么

总结为“四性2机制”：

- 简洁性：去掉了指针。
- 彻底性：撑地的面向对象设计。
- 安全性：.NET提供了垃圾回收器，帮助开发管理内存。
- 兼容性：与其他语言开发的组件兼容。
- web（网页）机制：支持大多数web标准。
- 错误机制：C#提供了完善的错误处理机制，使程序更健壮。

## 四、.NET是什么

.NET 是一个(免费的、开源的、跨平台的)开发者平台，用于构建(多种类型的)应用程序。

## 五、.NET的组成部分是什么

为了更好地理解 .NET，我们可以将其分解为几个关键部分：

- .NET 运行时 (CLR - Common Language Runtime)
- .NET 类库 (Base Class Library - BCL 和 FCL)
- 多种编程语言（C#、F#、VB.NET)
- 多种应用框架（ASP.NET Core、Windows Desktop、MAUI、Blazor等）

## 六、.NET的发展过程

.NET 的发展经历了几个重要阶段，形成了不同的实现版本：

- .NET Framework (2002)：最初的版本。仅限 Windows。它非常成熟且被广泛使用，但微软已不再为其添加新功能（仅进行安全更新）。
- .NET Core (2016)：跨平台的现代重写版本。它被设计为开源、高性能且模块化，可以运行在 Windows、Linux 和 macOS 上。主要用于构建服务器端应用和 Web 服务。
- .NET 5 及更高版本 (2020+)：这是 .NET 的未来。微软将 .NET Core 和 .NET Framework 的精华部分（以及 Xamarin 的 Mono）统一到一个平台上，简称为 “.NET”（没有“Core”后缀）。例如，.NET 6, .NET 7, .NET 8 等。我们现在通常所说的 .NET，指的就是这个统一的平台。

## 七、.NET的用途

- 桌面软件
- 游戏
- 网站
- 云服务
- API
- 手机App

## 八、C#和.NET的关系是什么

这是一个非常重要的概念，经常被混淆：

- C# 是一种编程语言。它定义了代码的语法和规则。
- .NET 是一个运行平台。它提供了执行代码所需的运行时环境（CLR）和庞大的标准类库（BCL/FCL）。

你可以这样理解：C# 是“语法和词汇”，就像英语的语法和单词。.NET 是“引擎和工具库”，就像给你一个强大的发动机和一整个工具箱，让你能用英语写的说明书去造车、造船、造飞机。

C# 代码被编译成一种叫做 IL（中间语言） 的格式，然后在 .NET 运行时（CLR） 上运行。.NET 平台也支持其他语言，如 F# 和 VB.NET，但 C# 是其最主要和最流行的语言。

---

## 扩展：.NET SDK是什么

.NET SDK的全称是:.NET Software Development Kit，也就是“.NET开发工具包”。

除了编译C#代码之外，.NET SDK还提供了：C#的运行环境和一些开发工具。

安装.NET SDK，是学习C#的第一步。

.NET SDK的下载地址：https://dotnet.microsoft.com/en-us/download/dotnet

如果你是开发者，要编写 C# 程序,那就安装.NET开发工具包( .NET 9 SDK )。

如果你只运行别人写的 .NET 9 程序，你只需要安装.NET运行环境（ .NET 9 Runtime）

不过，通常情况下，你不需要手动安装.NET SDK，因为如果你安装了Visual Studio之后，会自动安装.NET SDK。




