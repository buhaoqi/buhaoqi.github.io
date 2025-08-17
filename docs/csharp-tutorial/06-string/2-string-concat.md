---
noteId: "796bf090669611f0a3469bc4f2844c38"
tags: []

---


## **开场**  

> 🎙️ “大家好！欢迎观看《C#初学者实例教程》的第9课《字符串的基础操作》。
> 
> 我是张杰。
>
> 上节课我们认识了**字符串（string）**，本节课我们来学习字符串的基础操作，基础操作主要包括：如何定义字符串变量、拼接字符串、访问字符串、查询字符串长度。

---

## 定义字符串变量

使用 string 关键字（System.String 的别名）直接赋值

## 拼接字符串

## 访问字符串

## 查询字符串长度

### ✂️ 一、拼接字符串（+ 与插值）

字符串的最基本操作就是拼接。C#提供了几种方式：

**1）使用 + 拼接**

```csharp
string name = "小明";
string greeting = "你好，" + name + "！";
Console.WriteLine(greeting);
```

**2）使用插值字符串（推荐）**

```csharp
Console.WriteLine($"你好，{name}！");
```

👍 插值方式更清晰、更优雅！

---

### 📏 二、获取字符串长度（Length）

你可以使用 `.Length` 获取字符串的字符数：

```csharp
string text = "Hello";
Console.WriteLine(text.Length); // 输出：5
```

---

### 🔍 三、访问字符串中的字符（索引）

字符串是字符的集合，可以通过下标访问：

```csharp
string s = "CSharp";
Console.WriteLine(s[0]); // 输出：C
Console.WriteLine(s[5]); // 输出：p
```

⚠️ 注意：索引从 **0** 开始。

---

### ✂️ 四、常见字符串方法

这些是你编程中一定会用到的方法：

| 方法            | 用途       | 示例                                   |
| ------------- | -------- | ------------------------------------ |
| `ToUpper()`   | 转为大写     | `"abc".ToUpper()` → `"ABC"`          |
| `ToLower()`   | 转为小写     | `"ABC".ToLower()` → `"abc"`          |
| `Trim()`      | 去除首尾空格   | `" hello ".Trim()` → `"hello"`       |
| `Contains()`  | 是否包含某字符串 | `"apple".Contains("pp")` → true      |
| `Replace()`   | 替换内容     | `"黑夜".Replace("黑", "白")`             |
| `Substring()` | 提取子串     | `"abcdef".Substring(2, 3)` → `"cde"` |

---

### 🎯 五、实战小练习

```csharp
string raw = "   Hello C#   ";
string result = raw.Trim().ToUpper();
Console.WriteLine(result); // 输出：HELLO C#
```

📌 小技巧：多个方法可以链式调用！

---

### 📦 总结

* 字符串拼接推荐使用插值方式
* `.Length` 属性和索引访问可以帮助你读取内容
* 掌握 `Trim`、`ToUpper`、`Replace` 等常用方法，让你处理字符串更得心应手！

---

### 🔚 结尾

今天的内容就到这里。

这里是不好奇编程，我是张杰。

下节预告：《逻辑运算与比较运算符》，帮你写出更聪明的判断语句！

慢慢学，一点点进步就很好！

---

需要我为这节课配上**教学PPT结构图**或**课后练习题**，随时告诉我！

## 🧩 什么是 `String.Concat()` ?

`String.Concat()` 是 C# 提供的一个 **静态方法**，用于将 **两个或多个字符串（或可转换为字符串的对象）拼接成一个字符串**。

### 基本语法：

```csharp
string result = string.Concat(str1, str2);
string result = string.Concat(str1, str2, str3);
string result = string.Concat(new string[] { str1, str2, str3 }); // 拼接数组
```

- 它**不会自动添加分隔符**
- 它**支持任意数量参数**，也支持传入字符串数组
- 它**支持所有类型**，因为会自动调用 `.ToString()`

---




## 总结

本节课我们主要学习了：

- 字符串是什么
- 字符串分为：基本字符串、空字符串、转义字符串、多行字符串
- 转义字符串使用"\"引导
- 多行字符串使用"@"引导

## 结束语

本节课就到这里，这里是不好奇编程，我是张杰。感谢你的认真学习，我们下节课见！

下节预告：《字符串的基础操作》。

慢慢学，一点点进步就很好！



在 C# 中，`String.Concat()` 是一个 **用于拼接多个字符串（或其他可转换为字符串的对象）的方法**，属于 `System.String` 类的**静态方法**。它的主要作用是**将两个或多个字符串连接（拼接）成一个完整的字符串**，是一个非常基础和常用的字符串操作工具。

---

## 一、`String.Concat()` 的作用

| 功能 | 说明 |
|------|------|
| 🧩 **拼接多个字符串** | 将多个字符串对象合并为一个字符串 |
| ✅ **支持多种类型** | 不仅支持 `string` 类型，还支持其他类型（如 `int`, `double` 等），会自动调用 `.ToString()` |
| ⚙️ **静态方法** | 属于 `System.String` 类，通过 `string.Concat(...)` 或 `String.Concat(...)` 调用 |
| 🔄 **不修改原字符串** | 字符串在 C# 中是不可变的（immutable），`Concat` 会返回一个新的字符串 |

---

## 二、方法签名（常用重载）

C# 提供了多个 `String.Concat()` 的重载方法，最常用的包括：

### 1. 拼接两个字符串

```csharp
public static string Concat(string str0, string str1);
```

### 2. 拼接多个字符串（固定数量）

```csharp
public static string Concat(string str0, string str1, string str2);
public static string Concat(string str0, string str1, string str2, string str3);
```

### 3. 拼接字符串数组（最灵活、最常用）

```csharp
public static string Concat(params string[] values);
// 或
public static string Concat(IEnumerable<string> values);
```

> ✅ `params` 关键字允许你传入**任意数量的字符串参数**，背后实际上是传入了一个字符串数组。

---

## 三、`String.Concat()` 的详细用法与示例

---

### ✅ 示例 1：拼接两个字符串

```csharp
string str1 = "Hello";
string str2 = "World";

string result = string.Concat(str1, str2);
Console.WriteLine(result); // 输出：HelloWorld
```

🔧 如果你想要有空格或其他分隔符，需要**手动添加**：

```csharp
string result = string.Concat(str1, " ", str2); // "Hello World"
Console.WriteLine(result);
```

---

### ✅ 示例 2：拼接多个字符串（使用多个参数）

```csharp
string a = "A";
string b = "B";
string c = "C";

string combined = string.Concat(a, b, c);
Console.WriteLine(combined); // 输出：ABC
```

或者带分隔符：

```csharp
string combinedWithSpace = string.Concat(a, " ", b, " ", c);
Console.WriteLine(combinedWithSpace); // A B C
```

---

### ✅ 示例 3：拼接字符串数组（最灵活的用法 ✅）

```csharp
string[] words = { "Apple", "Banana", "Cherry" };

// 使用 params string[] 拼接数组中的所有字符串
string result = string.Concat(words);
Console.WriteLine(result); // 输出：AppleBananaCherry
```

🔧 如果你想要加分隔符，比如逗号，需要手动处理：

```csharp
string withCommas = string.Concat(string.Join(", ", words)); // 先用 String.Join 拼接带分隔符，再 Concat（其实可以直接用 Join）
// 或者更推荐直接使用 String.Join：
string better = string.Join(", ", words); // "Apple, Banana, Cherry"
Console.WriteLine(better);
```

> ⚠️ 注意：`String.Concat()` **不会自动添加分隔符**，如果需要分隔符，请使用 `String.Join()`，这是更合适的工具。

---

### ✅ 示例 4：拼接不同类型（自动调用 `.ToString()`）

`String.Concat()` 不仅支持字符串，还支持任何类型，因为它会**自动调用对象的 `.ToString()` 方法**。

```csharp
int number = 123;
double pi = 3.14;
bool isActive = true;

// 自动调用 number.ToString(), pi.ToString(), isActive.ToString()
string result = string.Concat("数字：", number, "，PI：", pi, "，状态：", isActive);
Console.WriteLine(result);
```

**输出（可能类似）：**
```
数字：123，PI：3.14，状态：True
```

---

### ✅ 示例 5：拼接集合中的字符串（如 `List<string>`）

```csharp
using System;
using System.Collections.Generic;

List<string> fruits = new List<string> { "Apple", "Banana", "Cherry" };

// 将 List<string> 转为数组或直接使用 Concat 的重载
string combined = string.Concat(fruits.ToArray()); // 或者直接传入 IEnumerable<string>
Console.WriteLine(combined); // AppleBananaCherry
```

或者更推荐的方式（带分隔符）：

```csharp
string withSeparator = string.Join(", ", fruits); // 使用 String.Join 更合适！
Console.WriteLine(withSeparator); // Apple, Banana, Cherry
```

> 🎯 **注意：`String.Concat()` 只是拼接，不会添加任何分隔符。如果需要分隔，请用 `String.Join()`！**

---

## 四、`String.Concat()` vs `+` 拼接 vs 字符串插值

| 方法 | 说明 | 适用场景 | 是否推荐 |
|------|------|----------|----------|
| **`String.Concat(str1, str2, ...)`** | 静态方法，拼接多个字符串对象 | 适合已知少量字符串组合 | ✅ 可用，但不如插值直观 |
| **`+` 拼接** | 使用 `+` 运算符连接字符串 | 简单少量的拼接 | ⚠️ 简单场景可用，但在循环中性能差 |
| **字符串插值 `$"..."`** | `"文本 {变量}"`，直接嵌入变量/表达式 | 现代 C# 推荐，可读性高 | ✅ **强烈推荐（C# 6.0+）** |
| **`String.Join()`** | 拼接集合中的字符串，可带分隔符 | 拼接数组、列表等，带分隔符时首选 | ✅ **推荐，特别是需要分隔符时** |

---

## 五、`String.Concat()` 的特点总结

| 特性 | 说明 |
|------|------|
| **静态方法** | 通过 `string.Concat(...)` 调用，无需创建字符串对象 |
| **支持任意数量参数** | 最常用的是 `params string[]` 形式，可传多个字符串 |
| **支持所有类型** | 非字符串类型会自动调用 `.ToString()` 方法 |
| **不添加分隔符** | 若需要分隔符，应使用 `String.Join()` |
| **返回新字符串** | 字符串不可变，每次拼接都生成新对象 |
| **性能注意** | 在循环或大量拼接时性能不如 `StringBuilder` 或 `String.Join()` |

---

## 六、什么时候使用 `String.Concat()`？

### ✅ 推荐使用场景：

- 你有一个 **字符串数组** 或 **List<string>**，想快速拼接它们 **且不需要分隔符**
- 想用**静态方法方式**拼接多个已知字符串，代码更函数化
- 拼接少量固定字符串，逻辑简单清晰

### ❌ 不推荐场景：

- **需要分隔符**（比如逗号、空格）→ 应使用 `String.Join()`
- **在循环中大量拼接字符串** → 应使用 `StringBuilder`
- **为了代码可读性** → 推荐使用 **字符串插值 `$""`**，更直观

---

## 七、总结表格 ✅

| 项目 | 说明 |
|------|------|
| **方法名** | `string.Concat(...)` 或 `String.Concat(...)` |
| **作用** | 拼接两个或多个字符串（或其他类型的 `.ToString()` 结果）为一个字符串 |
| **重载支持** | 支持多个字符串参数，也支持 `params string[]`（字符串数组） |
| **是否自动加分隔符** | ❌ 不会自动添加，需手动处理或使用 `String.Join()` |
| **返回值** | 返回一个新的拼接后的字符串 |
| **适用场景** | 拼接字符串数组、少量字符串组合、与其它类型组合输出等 |
| **推荐程度** | ⚠️ 可用，但在大多数情况下有更好的替代方案（如插值、Join） |

---

## ✅ 总结一句话：

> **C# 中的 `String.Concat()` 是一个用于将多个字符串（或可转换为字符串的对象）拼接成一个新字符串的静态方法，适用于简单的字符串组合场景，但在需要分隔符或高性能拼接时，推荐使用 `String.Join()` 或 `StringBuilder`，而在追求代码可读性时，字符串插值 `$""` 是更优雅的选择。**

---

### 🧠 想进一步学习？

- `String.Concat()` 与 `String.Join()` 的对比与选择
- 如何高效拼接大量字符串（使用 `StringBuilder`）
- 字符串插值 `$""` 的高级用法与格式化
- 字符串拼接在日志、SQL 构造、UI 输出中的应用

欢迎继续提问！我可以为你提供详细示例 😊。

## 练习

覆盖了 `String.Concat()` 的常见用法，包括：

- 基本的字符串拼接
- 拼接多个字符串变量
- 拼接字符串数组
- 拼接不同类型（隐式调用 `.ToString()`）
- 与其它字符串操作结合使用

每道题都旨在帮助你**熟练掌握 `String.Concat()` 的语法与适用场景**，并理解它与 `+` 拼接、`string.Join()` 等方法的区别与联系。

---

### 1.拼接两个字符串变量

**题目：**

声明两个字符串变量 `str1 = "Hello"` 和 `str2 = "World"`，使用 `String.Concat()` 方法将它们拼接成一个字符串，并输出结果。

要求：

- 使用 `string.Concat(str1, str2)`
- 输出拼接后的字符串

参考答案

```csharp
using System;

class Program
{
    static void Main()
    {
        string str1 = "Hello";
        string str2 = "World";

        string result = string.Concat(str1, str2);
        Console.WriteLine(result); // 输出：HelloWorld
    }
}
```

### 2.拼接三个字符串（含数字转字符串）

**题目：**

声明三个变量：  
- `string name = "Alice"`  
- `int age = 25`  
- `string city = "New York"`

使用 `String.Concat()` 将这三个变量拼接成一个完整的句子，如：`"Alice25New York"`（不要求加空格，仅拼接）

然后升级：在它们之间**手动添加空格或连接词**，比如 `"Alice 25 岁，来自 New York"`（用 `+` 或手动拼接，自由发挥，主要考察 Concat 的用法）

示例代码（带简单格式，手动加空格）：

```csharp
string result = string.Concat(name, " ", age.ToString(), " 岁，来自 ", city);
Console.WriteLine(result); // Alice 25 岁，来自 New York
```

> 🧠 注意：数字类型不会自动加空格，需要手动处理，或者调用 `.ToString()`


参考答案

```csharp
using System;

class Program
{
    static void Main()
    {
        string name = "Alice";
        int age = 25;
        string city = "New York";

        string result = string.Concat(name, age, city);
        Console.WriteLine(result); // 输出：Alice25New York
    }
}
```

---

### 3.拼接字符串数组

**题目：**

声明一个字符串数组：  
```csharp
string[] words = { "CSharp", "is", "cool" };
```
使用 `String.Concat()` 方法将该数组中的所有字符串拼接成一个完整的字符串，并输出结果。

> ⚠️ 不使用 `string.Join()`，仅使用 `String.Concat()`

参考答案

```csharp
using System;

class Program
{
    static void Main()
    {
        string[] words = { "CSharp", "is", "cool" };

        string result = string.Concat(words);
        Console.WriteLine(result); // 输出：CSharpiscool
    }
}
```

---


### 4.拼接不同类型的数据（混合类型）

**题目：**

声明如下变量：

```csharp
string product = "Laptop";
int price = 999;
bool inStock = true;
double rating = 4.8;
```

使用 `String.Concat()` 将它们拼接成一个字符串，例如：`"Laptop999True4.8"`  
（不要求格式化，仅考察 Concat 能拼接任意类型）

然后（可选挑战）：手动添加描述，如 `"产品：Laptop，价格：999，有货：True，评分：4.8"`（需调用 `.ToString()` 或手动拼接）

示例代码（带简单描述，手动拼接）：

```csharp
string desc = string.Concat("产品：", product, "，价格：", price, "，有货：", inStock, "，评分：", rating);
Console.WriteLine(desc);
// 输出：产品：Laptop，价格：999，有货：True，评分：4.8
```

> 🧠 注意：数字、布尔等类型会被自动调用 `.ToString()`，但为了可读性，建议手动添加文字说明

参考答案

```csharp
using System;

class Program
{
    static void Main()
    {
        string product = "Laptop";
        int price = 999;
        bool inStock = true;
        double rating = 4.8;

        string result = string.Concat(product, price, inStock, rating);
        Console.WriteLine(result); // 输出：Laptop999True4.8
    }
}
```

---


### 5.从用户输入中读取多个字符串并拼接

**题目：**

>编写程序，提示用户依次输入 **3 个字符串**（比如名字、爱好、城市），分别用 `Console.ReadLine()` 获取，然后使用 `String.Concat()` 将这三个字符串拼接成一个完整的句子，如 `"名字爱好城市"`，最后输出结果。

> 🎯 不要求加空格，仅考察 `Concat` 的用法。如果想更友好，可以手动添加空格或连接词（加分项）

---

参考答案

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("请输入您的名字：");
        string name = Console.ReadLine();

        Console.WriteLine("请输入您的爱好：");
        string hobby = Console.ReadLine();

        Console.WriteLine("请输入您所在的城市：");
        string city = Console.ReadLine();

        // 使用 String.Concat 拼接
        string result = string.Concat(name, hobby, city);
        Console.WriteLine("拼接结果：" + result); // 如：TomReadingBeijing
    }
}
```

参考答案(进阶版)

```csharp
string friendly = string.Concat(name, " 的爱好是 ", hobby, "，来自 ", city);
Console.WriteLine(friendly);
// 如：Tom 的爱好是 Reading，来自 Beijing
```

---

### 6.动态拼接用户输入的多行内容

**题目：**

> 编写程序，提示用户输入多行内容（比如 3 行），每行通过 `Console.ReadLine()` 获取，将这些行**使用 `String.Concat()` 拼接成一个完整的字符串**，中间**不添加任何额外字符**，最后输出拼接结果。

> 🎯 目标是练习循环输入 + 动态内容拼接，考察 `Concat()` 在动态构建字符串时的用法


示例运行：

**输入：**
```
第1行：Hello
第2行：World
第3行：!
```

**输出：**
```
拼接后的内容：
HelloWorld!
```

> 🧠 想加换行？请手动用 `\n` 或环境换行符拼接（但本题不要求）

参考答案

```csharp
using System;

class Program
{
    static void Main()
    {
        string result = "";
        int n = 3; // 假设输入 3 行

        for (int i = 0; i < n; i++)
        {
            Console.WriteLine($"请输入第 {i + 1} 行：");
            string line = Console.ReadLine();
            result = string.Concat(result, line);
        }

        Console.WriteLine("拼接后的内容：\n" + result);
    }
}
```

---