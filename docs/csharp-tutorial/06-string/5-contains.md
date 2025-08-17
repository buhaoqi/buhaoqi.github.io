---
noteId: "2ff6f5f079b911f096197f4ef3b2c3fb"
tags: []

---

当然！以下是 **10 道关于 C# 中 `string.Contains()` 方法的基础语法练习题**，涵盖了该方法的核心用法，非常适合用来：

- ✅ **巩固字符串包含性判断的基础知识点**
- ✅ **熟悉 `Contains()` 的语法与返回值逻辑**
- ✅ **结合用户输入、固定字符串、条件语句进行实战练习**
- ✅ **为后续学习字符串搜索、过滤、关键字匹配等打下基础**

---

## 🔍 `string.Contains()` 方法回顾

`Contains()` 是 C# 字符串类 (`System.String`) 提供的一个方法，用于**判断当前字符串中是否包含指定的子字符串**。

### 📘 语法：

```csharp
bool contains = str.Contains("子字符串");
```

### ✅ 返回值：
- **`true`**：如果字符串中包含指定的子串
- **`false`**：如果不包含

> ⚠️ **区分大小写**（默认情况下，`Contains()` 是大小写敏感的）
>
> 如果需要**不区分大小写**，可以使用：
> ```csharp
> bool containsIgnoreCase = str.IndexOf("子串", StringComparison.OrdinalIgnoreCase) != -1;
> ```
> 或者 .NET 5+ 中某些重载支持明确指定比较方式（如 `Contains("a", StringComparison.OrdinalIgnoreCase)`）

---

# ✅ 练习题 1：判断字符串中是否包含字母 "a"

### 题目：
给定字符串 `"apple"`，使用 `Contains("a")` 判断其中是否包含字母 `"a"`，并输出结果（true 或 false）。

---

### 示例代码：
```csharp
string str = "apple";
bool hasA = str.Contains("a");
Console.WriteLine(hasA); // True
```

---

# ✅ 练习题 2：判断句子中是否包含单词 "the"

### 题目：
字符串：`"The quick brown fox"`，判断其中是否包含子字符串 `"the"`（注意大小写，默认区分大小写）。

---

### 示例代码：
```csharp
string sentence = "The quick brown fox";
bool hasThe = sentence.Contains("the");
Console.WriteLine(hasThe); // False，因为 T 是大写
```

> 🧠 想忽略大小写？请看挑战题或使用 `IndexOf` 替代

---

# ✅ 练习题 3：判断用户输入的字符串中是否包含 "hello"

### 题目：
提示用户输入任意字符串，判断其中是否包含子串 `"hello"`，并输出 `"包含"` 或 `"不包含"`。

---

### 示例代码：
```csharp
Console.WriteLine("请输入一段文字：");
string input = Console.ReadLine();
if (input.Contains("hello"))
{
    Console.WriteLine("包含");
}
else
{
    Console.WriteLine("不包含");
}
```

---

# ✅ 练习题 4：判断字符串中是否包含数字字符 "7"

### 题目：
给定字符串 `"A1B2C3D4E5F6G7"`，判断其中是否包含字符 `"7"`。

---

### 示例代码：
```csharp
string str = "A1B2C3D4E5F6G7";
bool hasSeven = str.Contains("7");
Console.WriteLine(hasSeven); // True
```

---

# ✅ 练习题 5：判断文件名是否包含扩展名 ".txt"

### 题目：
给定文件名 `"notes.txt"`，判断其中是否包含子串 `".txt"`，用来简单判断是否为文本文件。

---

### 示例代码：
```csharp
string filename = "notes.txt";
bool isTextFile = filename.Contains(".txt");
Console.WriteLine(isTextFile); // True
```

---

# ✅ 练习题 6：判断长句子中是否包含某个关键词，如 "C#"

### 题目：
字符串：`"I love programming in C# and .NET"`，判断是否包含 `"C#"`。

---

### 示例代码：
```csharp
string sentence = "I love programming in C# and .NET";
bool hasCSharp = sentence.Contains("C#");
Console.WriteLine(hasCSharp); // True
```

---

# ✅ 练习题 7：判断字符串中是否包含空字符串 `""`

### 题目：
任意字符串调用 `Contains("")`，判断结果是什么？为什么？

---

### 示例代码：
```csharp
string str = "abc";
bool result = str.Contains("");
Console.WriteLine(result); // True
```

> 🧠 **解释**：在 C# 中，**任何字符串都包含空字符串 `""`**，这是一个合法的边界情况。

---

# ✅ 练习题 8：判断用户输入的密码中是否包含特殊字符 "@" 或 "#"

### 题目（简化版）：
提示用户输入一个密码字符串，判断其中是否包含 `"@"`，并输出是否包含特殊符号。

---

### 示例代码：
```csharp
Console.WriteLine("请输入密码：");
string password = Console.ReadLine();
if (password.Contains("@"))
{
    Console.WriteLine("密码包含特殊字符 @");
}
else
{
    Console.WriteLine("密码不包含 @");
}
```

> ✅ 可扩展为同时判断 `"@"` 或 `"#"`：`password.Contains("@") || password.Contains("#")`

---

# ✅ 练习题 9：判断 URL 字符串中是否包含 "https"

### 题目：
给定一个 URL，如 `"https://example.com"`，判断其中是否包含子串 `"https"`，以简单判断是否为加密链接。

---

### 示例代码：
```csharp
string url = "https://example.com";
bool isHttps = url.Contains("https");
Console.WriteLine(isHttps); // True
```

---

# ✅ 练习题 10：判断一个句子中是否包含某个用户指定的关键词

### 题目：
提示用户输入一段文字，再提示输入一个“关键词”，然后判断该句子中是否包含这个关键词，并输出结果。

---

### 示例代码：
```csharp
Console.WriteLine("请输入一段文字：");
string sentence = Console.ReadLine();

Console.WriteLine("请输入要查找的关键词：");
string keyword = Console.ReadLine();

if (sentence.Contains(keyword))
{
    Console.WriteLine($"句子中包含关键词 '{keyword}'");
}
else
{
    Console.WriteLine($"句子中不包含关键词 '{keyword}'");
}
```

---

## 📚 总结表格：10道 `Contains()` 基础练习题

| 题号 | 题目要点 | 是否使用用户输入 | 核心目标 |
|------|----------|------------------|-----------|
| 1 | 判断字符串是否包含 `"a"` | ❌ | 基础用法 |
| 2 | 判断句子是否包含 `"the"`（区分大小写） | ❌ | 大小写敏感 |
| 3 | 判断用户输入是否包含 `"hello"` | ✅ | 结合 `Console.ReadLine()` |
| 4 | 判断字符串是否包含 `"7"` | ❌ | 数字字符判断 |
| 5 | 判断文件名是否包含 `".txt"` | ❌ | 扩展名简单判断 |
| 6 | 判断句子中是否包含 `"C#"` | ❌ | 关键技术关键词 |
| 7 | 判断任意字符串是否包含空字符串 `""` | ❌ | 边界情况理解 |
| 8 | 判断密码是否包含 `"@"` | ✅ | 安全相关字符判断 |
| 9 | 判断 URL 是否包含 `"https"` | ❌ | 简单协议判断 |
| 10 | 判断用户输入句子中是否包含自定义关键词 | ✅ | 动态内容匹配 |

---

## 🎁 想进一步挑战？

- ✅ **不区分大小写判断是否包含（结合 `IndexOf` 或 .NET 5+ 的 `Contains(StringComparison)`）**
- ✅ **判断是否包含多个关键词中的任意一个（如 `"error"` 或 `"fail"`）**
- ✅ **提取包含某个关键词的句子（如日志分析）**
- ✅ **结合循环，批量判断多个字符串是否包含某个子串**
- ✅ **实现一个简易的“敏感词过滤器”**

---

## ✅ 附：不区分大小写判断（拓展方法）

从 **.NET 5 开始**，`string.Contains()` 支持传入 `StringComparison` 参数：

```csharp
bool containsIgnoreCase = str.Contains("hello", StringComparison.OrdinalIgnoreCase);
```

🔧 如果你使用的是 **低于 .NET 5 的版本**，可以用以下替代方案：

```csharp
bool containsIgnoreCase = str.IndexOf("hello", StringComparison.OrdinalIgnoreCase) != -1;
```

---

如你希望我为任意一题提供：

✅ 更详细的解题步骤  
✅ 扩展为多个关键词、正则匹配、过滤等高级功能  
✅ 图形界面或控制台菜单集成版本

欢迎继续提问！我可以为你定制更多练习与实战案例 😊。