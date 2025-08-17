---
noteId: "9094398079b511f096197f4ef3b2c3fb"
tags: []

---

## 🔍 `string.IndexOf()` 方法回顾

`IndexOf()` 用于**查找某个字符或子字符串在字符串中第一次出现的位置（索引）**。

### 基本语法：

```csharp
int index = str.IndexOf(char);                    // 查找字符
int index = str.IndexOf(string);                  // 查找子字符串
int index = str.IndexOf(char, int startIndex);    // 从指定位置开始查找字符
int index = str.IndexOf(string, int startIndex);  // 从指定位置开始查找子串
int index = str.IndexOf(char, int startIndex, int count); // 限定查找范围
```

- 返回值：
  - 找到：返回**第一次出现的索引（从 0 开始）**
  - 未找到：返回 **-1**

> ⚠️ 索引从 `0` 开始，如 `"A"` 的索引是 `0`，`"B"` 是 `1`，依此类推。

---



在 **C# 中，并没有直接叫做 `string.find()` 的方法**。

你可能是想了解以下两种常见的字符串查找方法之一：

---

## 一、你可能想找的方法是：

### ✅ **`string.IndexOf()`** —— 查找子字符串首次出现的位置（最常用，相当于其他语言中的 `find()`）

或者

### ✅ **`string.Contains()`** —— 判断字符串中是否包含某个子串

---

## 二、C# 中字符串查找的正确方法

在 C# 的 `string` 类中，**没有 `Find()` 方法**，但是有以下几种常用的方法用于**查找子字符串、判断是否存在、获取位置等**：

| 方法 | 说明 | 类似其他语言中的什么？ |
|------|------|------------------------|
| **`IndexOf()`** | 返回子字符串**第一次出现的位置索引**，未找到返回 `-1` | 类似于 Python 的 `find()`、Java 的 `indexOf()` |
| **`LastIndexOf()`** | 返回子字符串**最后一次出现的位置索引** | 类似于 Python 的 `rfind()` |
| **`Contains()`** | 判断字符串中是否**包含某个子串**，返回 `true/false` | 类似于 Python 的 `in` 操作符 |
| **`StartsWith()`** | 判断字符串是否以某子串**开头** | |
| **`EndsWith()`** | 判断字符串是否以某子串**结尾** | |

> ✅ **C# 中字符串查找的核心方法是 `IndexOf()`，它就是你可能想找的 `find()` 的等价方法！**

---

## 三、1. `IndexOf()` 方法详解【相当于 find()】

### 📘 方法签名：

```csharp
public int IndexOf(string value);
public int IndexOf(string value, int startIndex);
public int IndexOf(string value, int startIndex, int count);
```

- **value**：要查找的子字符串
- **startIndex**（可选）：从哪个索引位置开始查找
- **count**（可选）：查找的字符数范围
- **返回值**：
  - 找到：返回子字符串**第一次出现的索引位置（从 0 开始）**
  - 未找到：返回 **-1**

---

### ✅ 示例 1：基本用法 —— 查找子串位置

```csharp
string text = "Hello, World!";
int index = text.IndexOf("World"); // 查找 "World" 第一次出现的位置

Console.WriteLine(index); // 输出：7
```

- 字符串索引从 `0` 开始
- `"Hello, "` 是索引 0~6，`"World"` 从索引 **7** 开始

---

### ✅ 示例 2：查找不存在的子串

```csharp
string str = "CSharp Programming";
int pos = str.IndexOf("Java");

Console.WriteLine(pos); // 输出：-1 （未找到）
```

> 🧠 你可以用这个特性来判断某个子串是否存在：
```csharp
if (str.IndexOf("Java") != -1)
{
    Console.WriteLine("找到了");
}
else
{
    Console.WriteLine("未找到"); // 会执行这里
}
```

但更推荐直接用 `Contains()` 方法，见下文👇。

---

### ✅ 示例 3：从指定位置开始查找

```csharp
string text = "apple apple apple";
int idx = text.IndexOf("apple", 6); // 从索引6开始查找

Console.WriteLine(idx); // 输出：7（第二个 "apple"）
```

---

### ✅ 示例 4：查找最后一次出现的位置 —— `LastIndexOf()`

```csharp
string str = "hello hello world";
int last = str.LastIndexOf("hello"); // 查找最后一个 "hello"

Console.WriteLine(last); // 输出：6
```

---

## 四、2. `Contains()` 方法 —— 判断是否包含子串【更直观】

如果你只是想判断字符串中**是否包含某个子串**（而不关心具体位置），推荐使用更直观的：

```csharp
bool contains = str.Contains("子串");
```

### ✅ 示例：

```csharp
string text = "C# is awesome";
bool hasCSharp = text.Contains("C#");
bool hasJava = text.Contains("Java");

Console.WriteLine(hasCSharp); // True
Console.WriteLine(hasJava);   // False
```

> ✅ **推荐在只需要判断“是否存在”时使用 `Contains()`，代码更可读**

---

## 五、3. `StartsWith()` 和 `EndsWith()` 方法

| 方法 | 说明 | 示例 |
|------|------|------|
| **`StartsWith("前缀")`** | 判断字符串是否以某子串开头 | `"Hello".StartsWith("He")` → `true` |
| **`EndsWith("后缀")`** | 判断字符串是否以某子串结尾 | `"file.txt".EndsWith(".txt")` → `true` |

### ✅ 示例：

```csharp
string file = "data.csv";
Console.WriteLine(file.StartsWith("data")); // True
Console.WriteLine(file.EndsWith(".csv"));  // True
```

---

## 六、总结对比表 ✅

| 方法 | 作用 | 返回值 | 是否推荐 | 类似其他语言 |
|------|------|--------|----------|--------------|
| **`IndexOf(string)`** | 查找子串**第一次出现的位置索引** | 找到：索引（≥0），未找到：`-1` | ✅ **推荐，功能强大** | 类似 Python 的 `find()`、Java 的 `indexOf()` |
| **`LastIndexOf(string)`** | 查找子串**最后一次出现的位置** | 同上 | ✅ 适用于查找末尾内容 | 类似 Python 的 `rfind()` |
| **`Contains(string)`** | 判断是否包含某子串 | `true` / `false` | ✅ 推荐，用于存在性判断 | 类似 Python 的 `in` 操作符 |
| **`StartsWith(string)`** | 是否以某子串开头 | `true` / `false` | ✅ | - |
| **`EndsWith(string)`** | 是否以某子串结尾 | `true` / `false` | ✅ | - |

> ❌ **C# 中没有 `string.find()` 方法！你想找的可能是 `IndexOf()`**

---

## 七、正确用法总结 ✅

### 如果你想实现类似其他语言中的 `find()`（查找子串位置）：

👉 **使用：`string.IndexOf("子串")`**

```csharp
string text = "Hello, C# World!";
int pos = text.IndexOf("C#"); // 返回 7
if (pos != -1)
{
    Console.WriteLine($"找到了，位置在索引 {pos}");
}
else
{
    Console.WriteLine("未找到");
}
```

### 如果你只是想判断是否存在某个子串：

👉 **使用：`string.Contains("子串")`**

```csharp
if (text.Contains("C#"))
{
    Console.WriteLine("字符串中包含 C#");
}
```

---

## 八、附加：大小写敏感问题

默认情况下，`IndexOf()` 和 `Contains()` 是**大小写敏感**的：

```csharp
string s = "Hello";
Console.WriteLine(s.IndexOf("hello")); // -1，因为 H ≠ h
```

### 如何进行**不区分大小写**的查找？

可以使用 `IndexOf()` 的重载，指定 `StringComparison.OrdinalIgnoreCase`：

```csharp
string s = "Hello";
int idx = s.IndexOf("hello", StringComparison.OrdinalIgnoreCase);
Console.WriteLine(idx); // 0 （找到了，不区分大小写）
```

或者对于 `Contains()`，也可以使用类似的方式（需要结合 `IndexOf`）：

```csharp
bool containsIgnoreCase = s.IndexOf("hello", StringComparison.OrdinalIgnoreCase) != -1;
```

---

## ✅ 总结一句话：

> **C# 中没有 `string.find()` 方法，但你可以通过 `IndexOf()` 方法实现类似功能（查找子串位置，找不到返回 -1），这是最常用且功能最接近的。如果你只是想判断字符串是否包含某内容，推荐使用更直观的 `Contains()` 方法。两者都是字符串查找的核心方法，根据需求选择即可。**

---

### 🧠 想进一步学习？

- 如何实现**不区分大小写的查找**
- 如何用 `IndexOf` 提取某个关键字后面的内容
- 如何查找多个关键字 / 正则匹配提取
- 如何在文件、日志、用户输入中查找特定内容

欢迎继续提问！我可以为你提供详细代码示例 


### 3. **替换 Replace()**

```csharp
string str = "I love Java";
string result = str.Replace("Java", "C#");
Console.WriteLine(result); // 输出 I love C#
```

🔄 “`.Replace()` 就像替换拼图，可以把字符串中的某部分换掉。”

---

## 练习
### 1.查找字符 `'a'` 在字符串中的位置

题目：

> 给定字符串 `"apple"`，使用 `IndexOf('a')` 查找字符 `'a'` 出现的索引位置，并输出结果。

例代码：

```csharp
string str = "apple";
int index = str.IndexOf('a');
Console.WriteLine(index); // 0
```

---

### 2.查找子字符串 `"ll"` 在 `"Hello"` 中的位置

题目：

> 字符串 `"Hello"`，查找其中子串 `"ll"` 第一次出现的位置。

例代码：

```csharp
string str = "Hello";
int idx = str.IndexOf("ll");
Console.WriteLine(idx); // 2
```

---

### 3.查找字符 `'z'` 是否存在（未找到返回 -1）

题目：

> 给定字符串 `"abcde"`，查找字符 `'z'` 出现的位置，输出其索引（应该为 -1，因为不存在）。

例代码：

```csharp
string str = "abcde";
int idx = str.IndexOf('z');
Console.WriteLine(idx); // -1
```

> 🧠 可以用来判断是否存在：`if (str.IndexOf('z') != -1)`

---

### 4.查找字符串 `"the"` 在句子中的位置

题目：

> 给定句子：`"The quick brown fox"`，查找子字符串 `"the"` 出现的索引。

---

参考答案

```csharp
string sentence = "The quick brown fox";
int idx = sentence.IndexOf("the"); // 大小写敏感，找不到
Console.WriteLine(idx); // -1

// 如果希望不区分大小写，后面会拓展
```

---

### 5.从索引 3 开始查找字符 `'l'` 在 `"Hello"` 中的位置

题目：

> 字符串 `"Hello"`，从索引位置 3 开始查找字符 `'l'`，应该找到第 3 个 `'l'`（即索引 3）。

例代码：
```csharp

string str = "Hello";
int idx = str.IndexOf('l', 3);
Console.WriteLine(idx); // 3
```

---

### 6.查找第二个空格在字符串中的位置

题目：

> 给定字符串 `"Hello World CSharp"`，查找**第二个空格**出现的位置。

---

参考答案

```csharp
string str = "Hello World CSharp";
int firstSpace = str.IndexOf(' ');
int secondSpace = str.IndexOf(' ', firstSpace + 1);
Console.WriteLine(secondSpace); // 6
```

---

### 7.查找字符 `'o'` 在 `"Hello, World!"` 中第一次出现的位置

题目：

> 字符串：`"Hello, World!"`，查找字符 `'o'` 第一次出现的位置（应该为 4）

例代码：
```csharp
string str = "Hello, World!";

int idx = str.IndexOf('o');
Console.WriteLine(idx); // 4
```

---

### 8.查找子串 `"C#"` 在技术字符串中的位置

题目：

> 字符串：`"I love C# and .NET"`，查找 `"C#"` 出现的索引位置。

例代码：
```csharp
string str = "I love C# and .NET";

int idx = str.IndexOf("C#");
Console.WriteLine(idx); // 7
```

---

### 9.判断字符串中是否包含某个子串（通过 IndexOf）

题目：


---


参考答案

```csharp
string str = "Programming is fun";
int idx = str.IndexOf("fun");
if (idx != -1)
{
    Console.WriteLine("找到了子串 'fun'，位置在：" + idx); // 找到了子串 'fun'，位置在：19
}
else
{
    Console.WriteLine("未找到");
}
```

> 🧠 这是 `Contains()` 的底层实现原理之一！

---

### 10.查找数字字符 `'5'` 在一个混合字符串中的位置

题目：

> 给定字符串 `"A1B2C3D4E5"`，查找字符 `'5'` 出现的索引位置。

参考答案

```csharp
string str = "A1B2C3D4E5";
int idx = str.IndexOf('5');

Console.WriteLine(idx); // 9
```

> 🧠 可拓展：遍历查找所有数字字符的位置（未来挑战题）

---

### 11.获取文件扩展名（使用 Substring+ LastIndexOf）

```csharp
string filename = "document.pdf";
int dotIndex = filename.LastIndexOf('.');
if (dotIndex >= 0)
{
    string ext = filename.Substring(dotIndex + 1); // "pdf"
    Console.WriteLine(ext);
}
```

### 12. **查找字符串 IndexOf()**

```csharp
string str = "programming";
int pos = str.IndexOf("gram");
Console.WriteLine(pos); // 输出 3
```

🔍 “`.IndexOf()` 用来查某个子串第一次出现的位置，找不到就返回 -1。”
