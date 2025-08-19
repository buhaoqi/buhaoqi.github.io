---
noteId: "6dd8c13079a211f096197f4ef3b2c3fb"
tags: []

---


当然！以下是 **10 道关于 C# 中 `string.Replace()` 方法的基础语法练习题**，涵盖了该方法的核心用法，适合用来：

- ✅ **掌握字符串内容替换的基础操作**
- ✅ **理解 `Replace()` 的不可变性（返回新字符串）**
- ✅ **结合固定字符串、用户输入、特殊字符进行替换练习**
- ✅ **为后续学习文本处理、数据清洗、格式转换等打下基础**

---

## 🔁 `string.Replace()` 方法回顾

`Replace()` 是 C# 字符串类 (`System.String`) 提供的一个方法，用于**将字符串中的某个字符或子字符串替换为另一个字符或子字符串**。

### 📘 基本语法：

```csharp
string newStr = str.Replace(旧值, 新值);
```

- **参数：**
  - 第一个参数：要被替换的 **字符（char）或子字符串（string）**
  - 第二个参数：用来**替换的新字符或子字符串**
- **返回值：** 返回一个新的字符串，原字符串 **不会被修改**（因为字符串在 C# 中是不可变的）

> ⚠️ **注意：`Replace()` 是区分大小写的！** 如 `"A"` 和 `"a"` 被认为是不同的字符。

---

# ✅ 练习题 1：将字符串中的字母 `'a'` 替换为 `'X'`

### 题目：
给定字符串 `"apple"`，使用 `Replace('a', 'X')` 将所有小写字母 `'a'` 替换为 `'X'`，并输出结果。

---

### 示例代码：
```csharp
string str = "apple";
string result = str.Replace('a', 'X');
Console.WriteLine(result); // "Xpple"
```

---

# ✅ 练习题 2：将字符串中的子串 `"ll"` 替换为 `"rr"`

### 题目：
字符串 `"Hello"`，将其中的 `"ll"` 替换为 `"rr"`，输出新字符串。

---

### 示例代码：
```csharp
string str = "Hello";
string result = str.Replace("ll", "rr");
Console.WriteLine(result); // "Herro"
```

---

# ✅ 练习题 3：将字符串中的所有空格替换为下划线 `'_'`

### 题目：
给定字符串 `"Hello World CSharp"`，将所有空格替换为 `_`，输出结果如 `"Hello_World_CSharp"`。

---

### 示例代码：
```csharp
string str = "Hello World CSharp";
string result = str.Replace(" ", "_");
Console.WriteLine(result); // Hello_World_CSharp
```

---

# ✅ 练习题 4：将字符串中的字符 `'o'` 替换为数字 `'0'`

### 题目：
字符串 `"Hello"`，将所有 `'o'` 替换为 `'0'`，输出 `"Hell0"`。

---

### 示例代码：
```csharp
string str = "Hello";
string result = str.Replace('o', '0');
Console.WriteLine(result); // Hell0
```

---

# ✅ 练习题 5：将用户输入的字符串中的 `"bad"` 替换为 `"good"`

### 题目：
提示用户输入任意文字，将其中的子串 `"bad"` 替换为 `"good"`，并输出结果字符串。

---

### 示例代码：
```csharp
Console.WriteLine("请输入一段文字：");
string input = Console.ReadLine();
string result = input.Replace("bad", "good");
Console.WriteLine("替换后：" + result);
```

---

# ✅ 练习题 6：将字符串中的所有逗号 `','` 替换为分号 `';'`

### 题目：
给定字符串 `"A,B,C,D"`，将所有逗号替换为分号，输出如 `"A;B;C;D"`。

---

### 示例代码：
```csharp
string str = "A,B,C,D";
string result = str.Replace(",", ";");
Console.WriteLine(result); // A;B;C;D
```

---

# ✅ 练习题 7：将字符串中的 `"C#"` 替换为 `"CSharp"`（注意大小写）

### 题目：
字符串 `"I love C#"`，将其中的 `"C#"` 替换为 `"CSharp"`，输出 `"I love CSharp"`。

---

### 示例代码：
```csharp
string str = "I love C#";
string result = str.Replace("C#", "CSharp");
Console.WriteLine(result); // I love CSharp
```

> ⚠️ 注意：`Replace()` 是**区分大小写**的，`"c#"` 和 `"C#"` 是不同的！

---

# ✅ 练习题 8：将字符串中的数字 `"1"` 替换为字母 `"A"`

### 题目：
字符串 `"12345"`，将所有的 `'1'` 替换为 `'A'`，输出 `"A2345"`。

---

### 示例代码：
```csharp
string str = "12345";
string result = str.Replace("1", "A");
Console.WriteLine(result); // A2345
```

> 🧠 也可以替换为字符形式：`str.Replace('1', 'A')`，但注意参数类型匹配

---

# ✅ 练习题 9：将字符串中的多个空格（连续空格）替换为单个空格

### 题目（简化版）：
给定字符串 `"Hello   World"`（中间有多个空格），将**多个连续空格替换为一个空格**。

> ⚠️ 提示：`Replace()` 本身无法直接处理“多个”的情况，但你可以先替换两个空格为一个，多次调用（或者用正则表达式，未来挑战题）

这里我们做简化版：将 **两个空格 `"  "` 替换为一个空格 `" "`**

---

### 示例代码：
```csharp
string str = "Hello   World"; // 实际是多个空格，这里用两个演示
string result = str.Replace("  ", " "); // 两个空格变一个
Console.WriteLine(result); // "Hello World"（如果输入是两个空格）
```

> 🧠 想处理任意多个空格？未来可以尝试 `Regex.Replace()` 或循环 + 判断

---

# ✅ 练习题 10：将用户输入字符串中的敏感词 `"error"` 替换为 `"***"`

### 题目：
提示用户输入一段文字，将其中的 `"error"` 替换为 `"***"`（模拟敏感词屏蔽），并输出处理后的字符串。

---

### 示例代码：
```csharp
Console.WriteLine("请输入一段文字：");
string input = Console.ReadLine();
string result = input.Replace("error", "***");
Console.WriteLine("屏蔽后：" + result);
```

---

## 📚 总结表格：10道 `string.Replace()` 基础练习题

| 题号 | 题目要点 | 替换类型 | 是否使用用户输入 | 核心目标 |
|------|----------|-----------|------------------|-----------|
| 1 | 将 `'a'` 替换为 `'X'` | 字符替换 | ❌ | 基础字符替换 |
| 2 | 将 `"ll"` 替换为 `"rr"` | 子串替换 | ❌ | 子字符串替换 |
| 3 | 将空格 `' '` 替换为 `'_'` | 字符串替换 | ❌ | 分隔符替换 |
| 4 | 将 `'o'` 替换为 `'0'` | 字符替换 | ❌ | 字符映射 |
| 5 | 将 `"bad"` 替换为 `"good"` | 子串替换 | ✅ | 动态内容替换 |
| 6 | 将 `','` 替换为 `';'` | 字符替换 | ❌ | 符号替换 |
| 7 | 将 `"C#"` 替换为 `"CSharp"` | 带特殊字符子串 | ❌ | 关键词替换 |
| 8 | 将 `'1'` 替换为 `'A'` | 字符/字符串替换 | ❌ | 数字字母映射 |
| 9 | 将多个空格替换为一个（简化） | 字符串替换 | ❌ | 空格处理（基础） |
| 10 | 将 `"error"` 替换为 `"***"` | 敏感词屏蔽 | ✅ | 实际应用模拟 |

---

## 🎁 想进一步挑战？

- ✅ **将多个不同子串一次性替换（如构建字典映射，遍历替换）**
- ✅ **移除字符串中的所有指定字符（如把 `'a'` 替换为空 `""`）**
- ✅ **不区分大小写替换（结合 `IndexOf` 或正则表达式，因为 `Replace()` 本身区分大小写）**
- ✅ **替换 HTML 标签、特殊符号、转义字符**
- ✅ **结合用户输入实现简易“文本过滤”或“敏感词屏蔽系统”**

---

## ✅ 附：用空字符串删除某个字符（特殊替换）

如果你想**删除某个字符或子串**，只需将其替换为空字符串 `""`：

```csharp
string str = "Hello";
string noL = str.Replace("l", ""); // 删除所有 l → "Heo"
Console.WriteLine(noL);
```

或者删除空格：

```csharp
string noSpaces = "A B C".Replace(" ", ""); // "ABC"
```

---

如你希望我为任意一题提供：

✅ 更详细的解题思路  
✅ 扩展为多个替换规则、正则表达式版本  
✅ 图形界面或控制台菜单集成  
✅ 批量处理文件内容、日志过滤等实战场景

欢迎继续提问！我可以为你定制更多练习与案例 😊。