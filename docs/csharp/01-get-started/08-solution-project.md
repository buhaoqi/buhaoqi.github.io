---
noteId: "57360ba05b0111f0bf02afdcc74f2df0"
tags: []

---

JetBrains Rider 中的 **Solution** 和 **Project** 是 C# 工程管理的两个核心概念，理解它们的关系就像理解一个“学校”如何管理“班级”。

---

## 🧠 用比喻理解：学校与班级

| 概念                 | 类比 | 说明                               |
| ------------------ | -- | -------------------------------- |
| **Solution**（解决方案） | 学校 | 包含多个班级（项目），统一管理                  |
| **Project**（项目）    | 班级 | 每个班级（项目）独立上课（编译、运行），但也可能互相合作（引用） |

---

## 🧩 一、什么是 Solution？

### ✅ 定义：

* `.sln` 文件代表一个 **解决方案（Solution）**。
* 是一个 **顶层容器**，可以包含一个或多个 **项目（Project）**。
* **统一管理**：构建顺序、依赖关系、配置等。

### 🧰 功能：

* 打开/关闭整个项目组。
* 一次构建所有项目。
* 定义项目之间的依赖关系。

---

## 📦 二、什么是 Project？

### ✅ 定义：

* 每个 `.csproj` 文件就是一个 **项目（Project）**。
* 是编译的最小单元（比如生成一个 `.exe` 或 `.dll`）。
* 包含代码、资源、引用、依赖项等。

### 🧰 类型：

* 控制台应用程序
* 类库项目
* Web 项目（ASP.NET Core）
* 测试项目（xUnit、NUnit）
* 工具项目等

---

## 🔗 三、Solution 与 Projects 的关系图示

```
MySolution.sln  ← Solution 文件
│
├── MyApp.csproj          ← 主应用程序项目（可运行）
│
├── MyApp.Models.csproj   ← 模型项目（类库）
│
└── MyApp.Tests.csproj    ← 单元测试项目
```

在 Rider 中，它们会被展示在 **Solution Explorer**（解决方案资源管理器）中，层次清晰。

---

## 🔄 四、项目之间可以引用

例如：

* `MyApp.csproj` 可以引用 `MyApp.Models.csproj`。
* `MyApp.Tests.csproj` 可以同时引用 `MyApp` 和 `MyApp.Models`，用于测试。

这就像数学班的学生可以去物理班借书一样，只要允许“访问”。

---

## ✅ 五、Rider 中使用技巧

| 操作     | 说明                                       |
| ------ | ---------------------------------------- |
| 创建新项目  | 右键 Solution → Add → New Project          |
| 添加已有项目 | 右键 Solution → Add → Add Existing Project |
| 设置启动项目 | 右键 Project → Set as Startup Project      |
| 构建解决方案 | 快捷键 `Ctrl + Shift + B`                   |

---

## 📌 小结

| 项目结构元素   | 对应文件      | 含义                 |
| -------- | --------- | ------------------ |
| Solution | `.sln`    | 包含多个 Project 的容器   |
| Project  | `.csproj` | 单独的编译单元，生成可执行文件或类库 |

---

太好了！我来为你整理一个**标准的多项目 Solution 示例结构**，并教你如何在 JetBrains Rider 中**添加类库项目并建立引用**。这对你构建**模块化、可维护的 C# 项目架构**非常重要。

---

## 🏗️ 一、标准多项目 Solution 示例结构

我们以一个项目叫做 `MyApp` 为例，它包含：

* 一个控制台主程序项目
* 一个类库项目（业务逻辑或数据模型）
* 一个单元测试项目

### 📁 文件结构：

```
MyAppSolution/                  ← 解决方案根目录（MyAppSolution.sln）
│
├── MyApp/                      ← 控制台应用项目
│   ├── Program.cs
│   └── MyApp.csproj
│
├── MyApp.Core/                 ← 类库项目（业务逻辑/模型）
│   ├── User.cs
│   └── MyApp.Core.csproj
│
├── MyApp.Tests/                ← 测试项目
│   ├── UserTests.cs
│   └── MyApp.Tests.csproj
│
└── MyAppSolution.sln           ← 解决方案文件
```

---

## 🔧 二、在 JetBrains Rider 中创建这个结构

### 步骤 1：创建解决方案

1. 打开 Rider，选择 **New Solution**
2. 选择 **Console Application (.NET Core / .NET 6/7/8)**
3. 项目名称输入：`MyApp`
4. 创建后，Rider 会生成一个包含 `MyApp.csproj` 的解决方案。

### 步骤 2：添加类库项目

1. 右键解决方案 → `Add` → `New Project`
2. 选择 **Class Library (.NET)**，命名为：`MyApp.Core`
3. 创建成功后，在 Solution 中你会看到新项目出现。

### 步骤 3：添加测试项目（可选）

1. 同上，选择：**xUnit Test Project**
2. 命名为：`MyApp.Tests`
3. 勾选目标框架和测试框架后完成创建。

---

## 🔗 三、建立项目之间的引用关系

1. 右键 `MyApp` 项目 → `Add` → `Project Reference`

2. 勾选：`MyApp.Core`，点击 OK
   ✅ 表示主程序可以使用类库中的类

3. 同理，右键 `MyApp.Tests`，添加对 `MyApp` 和 `MyApp.Core` 的引用，以便测试它们的功能。

---

## ✅ 四、使用类库中的类（示例）

```csharp
// 文件：MyApp.Core/User.cs
namespace MyApp.Core;

public class User
{
    public string Name { get; set; }
}
```

```csharp
// 文件：MyApp/Program.cs
using MyApp.Core;

class Program
{
    static void Main()
    {
        var user = new User { Name = "张三" };
        Console.WriteLine($"用户姓名：{user.Name}");
    }
}
```

---

## 📌 五、命名空间建议

* 每个项目使用独立命名空间，推荐结构如下：

| 项目          | 命名空间前缀        |
| ----------- | ------------- |
| MyApp       | `MyApp`       |
| MyApp.Core  | `MyApp.Core`  |
| MyApp.Tests | `MyApp.Tests` |

---

## 🧪 六、运行与调试

* 在 Rider 中，**右键 `MyApp` 项目 → Set as Startup Project**
* 点击绿色三角形 ▶️ 启动主程序

---

## 📂 七、最终效果（Rider 界面结构）

```
📦 Solution: MyAppSolution
├── 📄 MyApp.csproj (Startup Project)
│   └── Program.cs
├── 📄 MyApp.Core.csproj
│   └── User.cs
└── 📄 MyApp.Tests.csproj
    └── UserTests.cs
```

---
好的！以下是一个完整的 **多项目 C# 解决方案模板**，包括：

1. `.sln` 文件结构说明
2. 每个项目的 `.csproj` 文件内容
3. 示例代码：类库、主程序、单元测试
4. ✅ 你可以复制这些内容直接在本地 Rider 中还原项目结构

---

## 🗂️ 目录结构（推荐）

```
MyAppSolution/
├── MyAppSolution.sln             ← 解决方案文件
├── MyApp/                        ← 控制台项目
│   ├── MyApp.csproj
│   └── Program.cs
├── MyApp.Core/                   ← 类库项目
│   ├── MyApp.Core.csproj
│   └── User.cs
└── MyApp.Tests/                  ← 单元测试项目
    ├── MyApp.Tests.csproj
    └── UserTests.cs
```

---

## 1️⃣ MyApp.csproj（控制台项目）

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net8.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
  </PropertyGroup>

  <ItemGroup>
    <ProjectReference Include="..\MyApp.Core\MyApp.Core.csproj" />
  </ItemGroup>

</Project>
```

---

## 2️⃣ MyApp.Core.csproj（类库项目）

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
  </PropertyGroup>

</Project>
```

---

## 3️⃣ MyApp.Tests.csproj（测试项目）

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <IsPackable>false</IsPackable>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="xunit" Version="2.5.0" />
    <PackageReference Include="xunit.runner.visualstudio" Version="2.5.0" />
    <PackageReference Include="Microsoft.NET.Test.Sdk" Version="17.10.0" />
  </ItemGroup>

  <ItemGroup>
    <ProjectReference Include="..\MyApp\MyApp.csproj" />
    <ProjectReference Include="..\MyApp.Core\MyApp.Core.csproj" />
  </ItemGroup>

</Project>
```

---

## ✅ 示例代码

### 📄 MyApp/Program.cs

```csharp
using MyApp.Core;

Console.WriteLine("控制台主程序启动...");
var user = new User { Name = "张三" };
Console.WriteLine($"用户名称：{user.Name}");
```

---

### 📄 MyApp.Core/User.cs

```csharp
namespace MyApp.Core;

public class User
{
    public string Name { get; set; } = string.Empty;
}
```

---

### 📄 MyApp.Tests/UserTests.cs

```csharp
using MyApp.Core;
using Xunit;

namespace MyApp.Tests;

public class UserTests
{
    [Fact]
    public void User_Name_ShouldBeSetCorrectly()
    {
        var user = new User { Name = "李四" };
        Assert.Equal("李四", user.Name);
    }
}
```

---

## 🧰 最后一步：创建 `.sln` 文件

在命令行中进入 `MyAppSolution/` 目录：

```bash
dotnet new sln -n MyAppSolution
dotnet sln add MyApp/MyApp.csproj
dotnet sln add MyApp.Core/MyApp.Core.csproj
dotnet sln add MyApp.Tests/MyApp.Tests.csproj
```

然后在 Rider 中打开 `MyAppSolution.sln`，设置 `MyApp` 为启动项目即可。

---

✅ 已为你生成完整的多项目 C# 解决方案模板。

你可以点击下面链接下载 `.zip` 文件并在 JetBrains Rider 中打开使用：

👉 [点击下载 MyAppSolution.zip](sandbox:/mnt/data/MyAppSolution.zip)

解压后，你将看到：

* 控制台项目 `MyApp`
* 类库项目 `MyApp.Core`
* 测试项目 `MyApp.Tests`
* 已配置好的 `.sln` 和项目引用
