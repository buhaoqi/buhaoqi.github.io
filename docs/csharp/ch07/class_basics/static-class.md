---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务七 静态类  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务七 静态类  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  6  # 侧边栏中排在第1位
---

 

## 📌 课程目标
学完本课后，你将能够：
1. 理解静态类的定义与核心特点。
2. 区分静态类与普通类。
3. 正确使用静态类中的静态方法、字段与属性。
4. 了解静态构造函数的作用。
5. 认识静态类在 .NET 中的常见应用（如 `Math`、`Console`）。
6. 知道如何通过静态类实现简单的工具类。

---

## 1️⃣ 什么是静态类？

**静态类** 是使用 `static` 关键字修饰的类。  
它只能包含 **静态成员**（静态方法、静态字段、静态属性、静态事件等），**不能被实例化**。

```csharp
public static class MyUtility
{
    public static void SayHello()
    {
        Console.WriteLine("Hello from static class!");
    }
}
```

使用方式：**直接通过类名访问成员**。

```csharp
MyUtility.SayHello();  // 无需创建对象
```

---

## 2️⃣ 静态类的主要特点

| 特点 | 说明 |
|------|------|
| 🔒 不能实例化 | `new` 关键字会导致编译错误 |
| 🧩 只包含静态成员 | 若包含实例成员，编译器报错 |
| 📦 默认密封（sealed） | 不能被继承 |
| 🧠 不能实现接口 | 静态类不允许实现任何接口 |
| 📁 可以包含静态构造函数 | 用于初始化静态成员 |

> ✅ 静态类可以包含：静态方法、静态字段、静态属性、静态构造函数、常量（本质 static readonly）、事件。

---

## 3️⃣ 静态类与普通类的对比

```csharp
// 普通类
public class Calculator
{
    public int Add(int a, int b) => a + b;   // 实例方法
}

// 静态类
public static class MathHelper
{
    public static int Multiply(int a, int b) => a * b;   // 静态方法
}
```

**使用区别：**

```csharp
// 普通类需要先创建对象
Calculator calc = new Calculator();
int sum = calc.Add(3, 4);

// 静态类直接使用类名
int product = MathHelper.Multiply(3, 4);
```

| 比较项 | 普通类 | 静态类 |
|--------|--------|--------|
| 实例化 | ✔️ 可以 `new` | ❌ 禁止 |
| 包含实例成员 | ✔️ 可以 | ❌ 不可以 |
| 继承 | ✔️ 可以继承其他类（单继承） | ❌ 自动密封，无法继承 |
| 实现接口 | ✔️ 可以 | ❌ 不可以 |
| 构造函数 | 实例构造函数（可重载） | 只允许静态构造函数（无参） |
| 适用场景 | 表示有状态的对象 | 纯工具函数、全局辅助方法 |

---

## 4️⃣ 静态成员回顾（静态类的基础）

静态类中的所有成员都必须是 **静态成员**。

```csharp
public static class FileHelper
{
    // 静态字段
    private static int _callCount = 0;

    // 静态属性
    public static int CallCount => _callCount;

    // 静态方法
    public static void WriteLog(string msg)
    {
        _callCount++;
        Console.WriteLine($"[{CallCount}] {msg}");
    }
}
```

调用：
```csharp
FileHelper.WriteLog("Start");
FileHelper.WriteLog("End");
Console.WriteLine(FileHelper.CallCount);  // 输出 2
```

> 💡 静态成员属于 **类本身**，所有调用共享同一份数据（需要小心线程安全）。

---

## 5️⃣ 静态构造函数

- 用于初始化静态类中的静态成员。
- 无参数、无访问修饰符（默认 `private`）。
- 在第一次访问静态类的任何成员之前 **自动且只执行一次**。

```csharp
public static class Config
{
    public static string AppName { get; private set; }

    static Config()  // 静态构造函数
    {
        AppName = "MyStaticApp";
        Console.WriteLine("静态构造函数执行了一次");
    }
}
```

测试：
```csharp
Console.WriteLine(Config.AppName);  // 会触发静态构造函数
Console.WriteLine(Config.AppName);  // 不会再执行
```

> ⚠️ 不能手动调用静态构造函数，也无法传递参数。

---

## 6️⃣ 静态类的典型应用场景

### ✅ 1. 工具类 / 辅助类
不依赖对象状态，只提供通用功能。  
例如：`Math`（数学计算）、`File`（文件操作）、`Convert`（类型转换）。

### ✅ 2. 全局访问点 / 常量集合
```csharp
public static class AppConstants
{
    public const string Version = "1.0.0";
    public static readonly string Copyright = "© 2025";
}
```

### ✅ 3. 扩展方法容器
扩展方法必须定义在静态类中。

```csharp
public static class StringExtensions
{
    public static bool IsNullOrEmpty(this string str)
    {
        return string.IsNullOrEmpty(str);
    }
}
// 使用： "hello".IsNullOrEmpty();
```

### ✅ 4. 单例模式的简单替代（无状态）
当不需要继承和多态时，静态类比单例更简单。

---

## 7️⃣ .NET 中的静态类举例

| 类名 | 作用 |
|------|------|
| `System.Math` | 数学函数（`Sqrt`、`Pow`、`Abs`） |
| `System.Console` | 控制台输入输出 |
| `System.Environment` | 获取系统/环境信息 |
| `System.BitConverter` | 字节与基础类型转换 |
| `System.IO.File` | 文件操作（静态方法） |

```csharp
double result = Math.Pow(2, 10);        // 1024
Console.WriteLine(result);
string path = Environment.GetFolderPath(Environment.SpecialFolder.Desktop);
```

---

## 8️⃣ 注意事项与常见错误

❌ **错误1：试图在静态类中声明实例成员**
```csharp
public static class Wrong
{
    public int Number;   // 编译错误！静态类不能包含实例字段
}
```

❌ **错误2：试图继承静态类**
```csharp
public class MyClass : MyStaticClass { }  // 错误！静态类是密封的
```

❌ **错误3：将静态类用于需要多态或接口的场景**
```csharp
public interface ILogger { void Log(string msg); }
public static class FileLogger : ILogger { }   // 错误！静态类不能实现接口
```

❌ **错误4：过度使用静态类导致代码难以测试**  
静态方法天然难以 Mock/替换，依赖全局状态会降低可测试性。

> 📌 最佳实践：  
> - 无状态、纯函数式逻辑 → 静态类  
> - 需要依赖注入、多态、状态管理 → 普通类

---

## 9️⃣ 课堂练习

### 练习1：创建数学工具静态类
定义一个 `MathUtilities` 静态类，包含：
- `Add(int a, int b)` 返回和
- `IsEven(int n)` 返回是否为偶数
- `PI` 常量（值为 3.14159）

并在 `Main` 中调用测试。

<details>
<summary>参考代码</summary>

```csharp
public static class MathUtilities
{
    public const double PI = 3.14159;
    public static int Add(int a, int b) => a + b;
    public static bool IsEven(int n) => n % 2 == 0;
}

// 测试
Console.WriteLine(MathUtilities.Add(5, 3));      // 8
Console.WriteLine(MathUtilities.IsEven(10));     // True
Console.WriteLine(MathUtilities.PI);
```
</details>

---

### 练习2：实现字符串工具静态类
创建 `StringHelper`，包含：
- `FirstLetterUpper(string input)` – 首字母大写，其余小写
- `WordCount(string input)` – 返回单词数量（按空格分割）

<details>
<summary>参考代码</summary>

```csharp
public static class StringHelper
{
    public static string FirstLetterUpper(string input)
    {
        if (string.IsNullOrEmpty(input)) return input;
        return char.ToUpper(input[0]) + input.Substring(1).ToLower();
    }

    public static int WordCount(string input)
    {
        if (string.IsNullOrWhiteSpace(input)) return 0;
        return input.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries).Length;
    }
}

// 测试
Console.WriteLine(StringHelper.FirstLetterUpper("hello WORLD")); // Hello world
Console.WriteLine(StringHelper.WordCount("C# static class is useful")); // 5
```
</details>

---

### 练习3：设计一个“应用程序设置”静态类
包含：
- 静态属性 `AppVersion`（只读，初始值 "1.0"）
- 静态方法 `ShowInfo()` 输出版本及当前时间
- 使用静态构造函数初始化版本号（可设默认值）

<details>
<summary>参考代码</summary>

```csharp
public static class AppSettings
{
    public static string AppVersion { get; private set; }

    static AppSettings()
    {
        AppVersion = "2.1.0";
    }

    public static void ShowInfo()
    {
        Console.WriteLine($"Version: {AppVersion}, Current Time: {DateTime.Now}");
    }
}

AppSettings.ShowInfo();
```
</details>

---

### 思考题
> 为什么 C# 不允许静态类继承其他类或实现接口？  
> *提示：从静态类的设计初衷（工具类/无状态全局服务）以及多态需要实例成员的角度思考。*

---

## 🔟 小结

| 知识点 | 总结 |
|--------|------|
| 定义 | `public static class 类名 { }` |
| 核心限制 | 不能实例化、不能包含实例成员、不能继承/实现接口 |
| 静态构造函数 | 只执行一次，用于初始化静态成员 |
| 常见用途 | 工具类、扩展方法容器、常量集合 |
| .NET 示例 | `Math`、`Console`、`File` |
| 注意事项 | 避免滥用，防止可测试性下降 |

---

## 📚 课后作业

1. 写一个 `TemperatureConverter` 静态类，提供 `CelsiusToFahrenheit` 和 `FahrenheitToCelsius` 两个方法。
2. 写一个 `ArrayHelper` 静态类，实现 `FindMax`、`FindMin`、`Reverse` 三个方法（处理 `int[]`）。
3. （挑战）使用静态类为 `string` 添加扩展方法 `IsEmail()`，用简单规则判断字符串是否像 Email 地址（包含 @ 和 .）。

提交方式：写出完整代码并运行测试。

---

✅ 本课件到此结束。通过理论 + 示例 + 练习，你应该已经掌握了 C# 静态类的核心知识。如果有疑问，请多动手编码，在实践中加深理解。


### 示例5：定义“计算器”类

特点：带静态成员的类（区分实例成员 vs 静态成员）

**要求**：

1. 类的定义
2. 静态属性
3. 构造函数（无参/有参）
3. 静态方法
4. 无需实例化即可调用

```csharp
using System;

// 计算器类（以静态成员为主，适合工具类）
public class Calculator
{
    // 静态属性：记录计算次数（所有对象共享）
    public static int CalculateCount { get; set; } = 0;

    // 静态方法：加法
    public static int Add(int a, int b)
    {
        CalculateCount++; // 每次计算，次数+1
        return a + b;
    }

    // 静态方法：乘法
    public static int Multiply(int a, int b)
    {
        CalculateCount++;
        return a * b;
    }

    // 实例方法：对比（需要实例化才能调用）
    public void ShowTip()
    {
        Console.WriteLine("这是计算器的实例方法～");
    }
}

public class Program
{
    public static void Main()
    {
        // 1. 调用静态方法：无需new，直接“类名.方法名”
        int sum = Calculator.Add(5, 10);
        Console.WriteLine($"5+10={sum}");

        int product = Calculator.Multiply(6, 8);
        Console.WriteLine($"6×8={product}");

        // 2. 访问静态属性：所有调用共享同一个值
        Console.WriteLine($"累计计算次数：{Calculator.CalculateCount}"); // 输出2

        // 3. 调用实例方法：必须先实例化对象
        Calculator calc = new Calculator();
        calc.ShowTip();
    }
}
```
#### 运行结果：
```
5+10=15
6×8=48
累计计算次数：2
这是计算器的实例方法～
```
#### 知识点：
- 静态成员：用`static`修饰，属于“类本身”，所有实例共享，无需`new`即可调用；
- 实例成员：非静态，属于“具体对象”，必须实例化后才能调用；
- 工具类（如计算器、数学工具）通常用静态方法，方便直接调用。

---