---
noteId: "72793140664f11f0a3469bc4f2844c38"
tags: []

---

【四、字符串不可变特性】

🚫 “注意：字符串是‘不可变’的，像 `Replace()` 或 `Substring()` 并不会改原字符串，而是返回一个新的。”


### 2. **取子串 Substring()**

```csharp
string text = "HelloWorld";
string part = text.Substring(0, 5);
Console.WriteLine(part); // 输出 Hello
```

✂️ “`Substring(起始位置, 长度)` 用来剪下一部分字符串。”

---


在 C# 中，**字符串提取（String Extraction）** 是指从一段字符串中**获取指定的部分内容**，比如：

- 提取某个子字符串（substring）
- 提取文件名、扩展名、路径中的某部分
- 提取数字、日期、特定格式的内容
- 提取标签、关键字、日志中的字段
- 从字符串中分离出多个数据（如 CSV、命令行参数等）

字符串提取是日常开发中非常常见的操作，C# 提供了多种**灵活、强大且高效的方法**来满足各种提取需求。

---

## 一、C# 字符串提取的常见场景分类

| 场景类别 | 说明 | 常用方法/技术 |
|----------|------|---------------|
| **1. 提取子字符串（Substring）** | 获取字符串中某一段连续的内容 | `Substring()` |
| **2. 按分隔符拆分提取（Split）** | 按某个字符/字符串分割字符串，提取其中一部分 | `Split()` |
| **3. 查找后提取（IndexOf + Substring）** | 先找到位置，再提取子串 | `IndexOf()`, `LastIndexOf()`, `Substring()` |
| **4. 使用正则表达式提取（Regex）** | 使用模式匹配提取复杂内容（如邮箱、电话、标签等） | `System.Text.RegularExpressions.Regex` |
| **5. 提取开头/结尾部分** | 如文件扩展名、前缀、后缀 | `Substring()`, `Path.GetExtension()` |
| **6. 提取数字、日期等特定格式内容** | 从字符串中分析并提取结构化数据 | `Substring()` + 判断，或正则表达式 |
| **7. 使用字符串插值或格式化反向构造** | 不是提取，但常与提取逻辑配合使用 | `string.Format()` / `$""` |

---

## 二、1. 提取子字符串 —— `Substring()` 方法【最常用 ✅】

`Substring()` 是 C# 中用于**提取字符串中某一段连续字符（子串）** 的核心方法。

### 📘 语法：

```csharp
string Substring(int startIndex);
string Substring(int startIndex, int length);
```

- `startIndex`：子字符串的起始位置（从 0 开始）
- `length`（可选）：要提取的字符长度

---

### ✅ 示例 1：从指定位置提取到末尾

```csharp
string text = "Hello, World!";
string sub = text.Substring(7); // 从索引7开始到结尾
Console.WriteLine(sub); // 输出：World!
```

---

### ✅ 示例 2：提取指定位置 + 长度

```csharp
string text = "CSharp is cool";
string part = text.Substring(0, 6); // 从索引0开始，取6个字符
Console.WriteLine(part); // 输出：CSharp
```

---

### ✅ 示例 3：提取中间部分

```csharp
string log = "Error:404 at 12:30";
string code = log.Substring(6, 3); // 从索引6开始，取3个字符 → "404"
Console.WriteLine(code);
```

> ⚠️ 注意：`Substring()` 的索引不能越界，否则会抛出 `ArgumentOutOfRangeException`

---

## 三、2. 按分隔符拆分字符串 —— `Split()` 方法【提取多个部分 ✅】

当你想按某个**分隔符（如逗号、空格、冒号等）将字符串分割成多个部分，并提取其中某一部分时**，可以使用 `Split()` 方法。

### 📘 语法：

```csharp
string[] parts = str.Split(separator);
// 或者指定多个分隔符
string[] parts = str.Split(new char[] { ',', ' ', ':' }, StringSplitOptions.RemoveEmptyEntries);
```

---

### ✅ 示例 1：按空格分割提取单词

```csharp
string sentence = "C# is awesome";
string[] words = sentence.Split(' '); // 按空格分割

foreach (string word in words)
{
    Console.WriteLine(word);
}
// 输出：
// C#
// is
// awesome
```

---

### ✅ 示例 2：提取 CSV 中的某个字段

```csharp
string data = "Alice,25,Developer";
string[] fields = data.Split(',');

string name = fields[0];    // "Alice"
string age = fields[1];     // "25"
string job = fields[2];     // "Developer"

Console.WriteLine($"姓名：{name}，年龄：{age}");
```

---

### ✅ 示例 3：去除空项（高级用法）

```csharp
string input = "one,,two, ,three";
var items = input.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries);

foreach (var item in items)
{
    Console.WriteLine(item.Trim()); // 去掉多余空格
}
// 输出：one, two, three
```

---

## 四、3. 先查找位置，再提取 —— `IndexOf()` + `Substring()`

当你**不知道子串的具体位置，但知道要找的内容**时，可以先用 `IndexOf()` 找到位置，再用 `Substring()` 提取。

### 📘 常用方法：

- `IndexOf(string)`：查找子串第一次出现的位置
- `LastIndexOf(string)`：查找最后一次出现的位置
- `IndexOfAny(char[])`：查找多个字符中的任意一个

---

### ✅ 示例：提取 "Error:" 后面的错误码

```csharp
string log = "Error:500 at Server";
int index = log.IndexOf("Error:") + "Error:".Length; // 找到 "Error:" 的结束位置
string errorCode = log.Substring(index, 3); // 取后3位 "500"

Console.WriteLine(errorCode); // 输出：500
```

---

## 五、4. 使用正则表达式提取 —— `Regex` 类【提取复杂内容 ✅】

对于**非固定格式、有模式匹配需求**的字符串内容（如邮箱、电话、HTML标签、日志字段等），可以使用 **正则表达式（Regular Expression）** 进行高级提取。

### 引入命名空间：

```csharp
using System.Text.RegularExpressions;
```

---

### ✅ 示例 1：提取字符串中的数字

```csharp
string text = "订单号是：12345，价格是：99.99";
MatchCollection matches = Regex.Matches(text, @"\d+");

foreach (Match match in matches)
{
    Console.WriteLine(match.Value); // 12345, 99, 99
}
```

> 🎯 `\d+` 表示匹配一串连续的数字

---

### ✅ 示例 2：提取邮箱地址（简单示例）

```csharp
string input = "联系我：user@example.com 或 admin@test.org";
MatchCollection emails = Regex.Matches(input, @"[\w\.-]+@[\w\.-]+\.\w+");

foreach (Match email in emails)
{
    Console.WriteLine(email.Value);
}
// 输出：user@example.com, admin@test.org
```

---

## 六、5. 提取开头 / 结尾部分

### ✅ 获取文件扩展名（使用 `Substring` + `LastIndexOf`）

```csharp
string filename = "document.pdf";
int dotIndex = filename.LastIndexOf('.');
if (dotIndex >= 0)
{
    string ext = filename.Substring(dotIndex + 1); // "pdf"
    Console.WriteLine(ext);
}
```

---

### ✅ 使用 `Path` 类提取（推荐用于路径/文件名）

```csharp
using System.IO;

string path = @"C:\Data\file.txt";
string fileName = Path.GetFileName(path);     // "file.txt"
string extension = Path.GetExtension(path);   // ".txt"
string fileNameWithoutExt = Path.GetFileNameWithoutExtension(path); // "file"
```

> ✅ **推荐**：处理文件路径时优先使用 `System.IO.Path` 类的方法，更安全可靠

---

## 七、总结表格 ✅

| 方法/技术 | 说明 | 适用场景 | 是否推荐 |
|-----------|------|----------|----------|
| **`Substring()`** | 提取字符串的某一段连续内容 | 提取固定位置子串 | ✅ 推荐（基础方法） |
| **`Split()`** | 按分隔符拆分字符串并提取部分 | 拆分 CSV、空格分隔等 | ✅ 推荐 |
| **`IndexOf() + Substring()`** | 先查找再提取，适合提取动态内容 | 提取“Error:”后的代码等 | ✅ 推荐 |
| **正则表达式 `Regex`** | 模式匹配提取复杂、非固定格式内容 | 提取邮箱、电话、标签等 | ✅ 强大但稍复杂 |
| **`Path` 类** | 提取文件名、扩展名等路径信息 | 文件/目录路径处理 | ✅ 推荐 |
| **字符串开头/结尾提取** | 如获取前 N 位、后缀等 | 简单截取 | ✅ 常用 |

---

## ✅ 总结一句话：

> **C# 提供了多种灵活的字符串提取方法，包括 `Substring()`、`Split()`、`IndexOf()`、正则表达式 `Regex` 和 `Path` 类等，能够满足从简单子串提取到复杂模式匹配的各种需求。根据你的具体场景（如是否需要按分隔符拆分、是否要查找动态位置、是否处理复杂格式），选择最适合的方法可以提高代码的可读性与效率。**

---

### 🧠 想进一步学习？

- 如何用 `Substring` 实现字符串反转或部分替换
- 如何提取 HTML 标签中的内容（结合正则或第三方库）
- 如何从日志、JSON 字符串、命令行参数中提取字段
- 如何用 `Span<char>` 进行高性能字符串提取（.NET Core+）

欢迎继续提问！我可以为你提供详细示例 😊。


## 练习

### 1.提取字符串的前 3 个字符

题目

> 给定字符串 `"Hello"`，使用 `Substring(0, 3)` 提取前 3 个字符，并输出结果。

要求

- 使用 `Substring(int start, int length)`
- 输出：`Hel`

---

参考答案

```csharp
string str = "Hello";
string sub = str.Substring(0, 3);
Console.WriteLine(sub); // Hel
```

---

### 2.提取字符串从索引 3 开始到末尾的子串

题目

> 字符串 `"CSharp"`，提取从索引 3 开始到末尾的子串（即 `"arp"`）。

要求

- 使用 `Substring(int startIndex)`

---

参考答案

```csharp
string str = "CSharp";
string sub = str.Substring(3);
Console.WriteLine(sub); // arp
```

---

### 3.提取用户输入字符串的第 2 到第 4 个字符

题目

> 提示用户输入任意字符串，提取并输出该字符串的第 2 ~ 4 个字符（即索引 1 开始，取 3 个字符）。

> 🎯 假设用户输入足够长，不考虑越界（或可加简单判断）

---

参考答案

```csharp
Console.WriteLine("请输入一个字符串：");
string input = Console.ReadLine();

if (input.Length >= 4)
{
    string sub = input.Substring(1, 3);
    Console.WriteLine("第2~4个字符是：" + sub);
}
else
{
    Console.WriteLine("输入太短！");
}
```

---

### 4.提取字符串的最后 3 个字符

题目

> 给定字符串 `"abcdef"`，提取最后 3 个字符（即 `"def"`）。

要求

- 不直接写死 `"def"`，而是通过计算 `str.Length - 3` 作为起始索引，用 `Substring(int start)`
- 使用 `Substring(int startIndex)`

---

参考答案

```csharp
string str = "abcdef";
int start = str.Length - 3;
string last3 = str.Substring(start);
Console.WriteLine(last3); // def
```

---

### 5.提取字符串中间的 2 个字符（比如索引 2 和 3，共 2 个字符）

题目

> 给定字符串 `"abcdef"`，提取索引 2 开始，长度为 2 的子串，即 `"cd"`。

---

参考答案

```csharp
string str = "abcdef";
string mid = str.Substring(2, 2);
Console.WriteLine(mid); // cd
```

---

### 6.从用户输入中提取输入内容的前 N 个字符（比如前5个）

题目

> 提示用户输入任意字符串，并输入一个数字 `n`，提取并输出该字符串的前 `n` 个字符。

> 提示：可限制 n 不超过字符串长度，或做简单判断

---

参考答案

```csharp
Console.WriteLine("请输入一个字符串：");
string input = Console.ReadLine();

Console.WriteLine("请输入要提取的前几个字符数：");
int n = int.Parse(Console.ReadLine());

if (n <= input.Length && n > 0)
{
    string sub = input.Substring(0, n);
    Console.WriteLine($"前{n}个字符是：{sub}");
}
else
{
    Console.WriteLine("输入无效或超出范围！");
}
```

---

### 7.提取字符串中第 5 个字符开始之后的所有内容

题目

> 给定字符串 `"HelloWorld"`，提取从索引 4（即第 5 个字符 `'o'`）开始到末尾的子串，即 `"oWorld"`。

---

参考答案

```csharp
string str = "HelloWorld";
string sub = str.Substring(4);
Console.WriteLine(sub); // oWorld
```

---

### 8.提取两个指定位置之间的子串（比如从索引 1 开始，到索引 4 结束，共 3 个字符）

题目

> 给定字符串 `"abcdef"`，提取从索引 1（含）开始，取 3 个字符，即 `"bcd"`。

或者更一般化：从索引 `start` 开始，取 `length` 个字符

---

参考答案

```csharp
string str = "abcdef";
int start = 1;
int len = 3;
string sub = str.Substring(start, len);
Console.WriteLine(sub); // bcd
```

---

### 9.提取字符串中每个单词的前 2 个字母（简单版，固定字符串）

题目

> 给定字符串 `"AB CD EF"`（每个单词 2 个字母，用空格分隔），提取每个单词的前 2 个字符（其实就是整个单词 😄），或者更一般化：从 `"Hello World"` 中提取每个单词的前 2 个字符（即 `"He Wo"`）

> 简化版：仅提取 `"Hello"` 的前 2 字符 + `"World"` 的前 2 字符 → `"HeWo"`

---

参考答案

```csharp
string str = "Hello World";
string word1 = str.Substring(0, 2); // He
string word2 = str.Substring(6, 2); // Wo
string result = word1 + word2;
Console.WriteLine(result); // HeWo
```
