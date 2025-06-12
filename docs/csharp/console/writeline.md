---
noteId: "0f0e8a803fbf11f081f2eb75db5e372e"
tags: []

---

当然可以，下面是对 C# 中 `Console.WriteLine()` 方法的**详细讲解**，包括语法、用法、格式化、注意事项等内容，适合初学者系统掌握。

---

## ✅ 1. 什么是 `Console.WriteLine()`？

`Console.WriteLine()` 是 .NET 中用于**在控制台输出信息**并**自动换行**的一个方法。它属于：

```csharp
System.Console 类
```

---

## ✅ 2. 基本语法

```csharp
Console.WriteLine(要输出的内容);
```

* 自动在输出内容后添加换行符（`\n`）。
* `WriteLine()` 是重载方法，支持多种数据类型。

---

## ✅ 3. 示例用法

### 🔹 输出字符串：

```csharp
Console.WriteLine("Hello, World!");
```

输出：

```
Hello, World!
```

---

### 🔹 输出变量：

```csharp
int age = 25;
Console.WriteLine(age);         // 输出：25
Console.WriteLine("Age: " + age); // 输出：Age: 25
```

---

### 🔹 使用占位符格式化（推荐）：

```csharp
string name = "Alice";
int score = 95;
Console.WriteLine("Name: {0}, Score: {1}", name, score);
```

输出：

```
Name: Alice, Score: 95
```

---

### 🔹 使用字符串插值（C# 6.0+ 推荐）：

```csharp
Console.WriteLine($"Name: {name}, Score: {score}");
```

---

### 🔹 输出多个数据类型：

```csharp
Console.WriteLine("Sum: " + (5 + 3));
Console.WriteLine($"Today is {DateTime.Now}");
```

---

## ✅ 4. 支持的数据类型

你可以传入各种类型的参数，包括：

* 字符串：`string`
* 数值类型：`int`, `float`, `double`, `decimal`
* 布尔值：`bool`
* 对象类型（会调用 `.ToString()` 方法）

---

## ✅ 5. 和 `Console.Write()` 的区别

| 方法                    | 是否换行  | 用途        |
| --------------------- | ----- | --------- |
| `Console.Write()`     | ❌ 不换行 | 连续输出在同一行  |
| `Console.WriteLine()` | ✅ 换行  | 每次输出后自动换行 |

示例：

```csharp
Console.Write("A");
Console.Write("B");
Console.WriteLine("C");
Console.WriteLine("D");
```

输出：

```
ABC
D
```

---

## ✅ 6. 输出空行

```csharp
Console.WriteLine(); // 输出一个空行，相当于换行
```

---

## ✅ 7. 格式化输出（高级用法）

#### 浮点数保留小数位：

```csharp
double pi = 3.14159;
Console.WriteLine($"π ≈ {pi:F2}");  // 输出：π ≈ 3.14
```

#### 数字加千位分隔符：

```csharp
int money = 1234567;
Console.WriteLine($"{money:N0}"); // 输出：1,234,567
```

---

## ✅ 8. 控制台颜色（可选美化）

```csharp
Console.ForegroundColor = ConsoleColor.Green;
Console.WriteLine("Success");
Console.ResetColor();
```

---

## ✅ 总结一张表：

| 用法类型   | 示例代码                                     | 功能           |
| ------ | ---------------------------------------- | ------------ |
| 基本输出   | `Console.WriteLine("Hi")`                | 输出字符串并换行     |
| 输出变量   | `Console.WriteLine(score)`               | 输出变量值        |
| 拼接输出   | `Console.WriteLine("Score: " + score)`   | 字符串拼接        |
| 占位符输出  | `Console.WriteLine("Score: {0}", score)` | 位置参数格式化      |
| 插值输出   | `Console.WriteLine($"Score: {score}")`   | 推荐方式，易读      |
| 空行     | `Console.WriteLine()`                    | 输出一个空行       |
| 格式控制输出 | `Console.WriteLine($"{pi:F2}")`          | 输出小数保留位数等格式化 |

---

如果你希望我提供一个小项目或示例程序（如输出菜单、成绩表等），可以告诉我，我来为你写一个完整例子。是否需要？
