---
noteId: "b4db5920682811f0b38abb3f8df447a5"
tags: []

---


## 🎙️Day17：Dictionary 字典的使用与实战

大家好，欢迎来到《C#入门教程》第17课。

今天我们要学习的是一个非常实用的集合类型：**Dictionary（字典）**。
它允许你通过“键”来快速查找“值”——就像查字典一样方便！

---

## 一、什么是 Dictionary？

Dictionary 是一种 **键值对（Key → Value）** 的集合。

* 键（Key）是唯一的；
* 值（Value）可以重复。

使用前，需引入命名空间：

```csharp
using System.Collections.Generic;
```

---

## 二、声明和初始化 Dictionary

```csharp
Dictionary<string, int> scores = new Dictionary<string, int>();
```

添加数据：

```csharp
scores.Add("小明", 90);
scores.Add("小红", 85);
scores.Add("小刚", 100);
```

---

## 三、常用方法一览

| 方法 / 属性                | 功能说明    |
| ---------------------- | ------- |
| `Add(key, value)`      | 添加键值对   |
| `Remove(key)`          | 删除某个键   |
| `ContainsKey(key)`     | 是否包含某个键 |
| `ContainsValue(value)` | 是否包含某个值 |
| `Count`                | 元素个数    |
| `Clear()`              | 清空全部元素  |

---

## 四、访问与遍历

访问单个元素：

```csharp
Console.WriteLine(scores["小刚"]);  // 输出 100
```

遍历所有键值对：

```csharp
foreach (KeyValuePair<string, int> pair in scores)
{
    Console.WriteLine(pair.Key + " 的成绩是 " + pair.Value);
}
```

或者使用解构写法：

```csharp
foreach (var (name, grade) in scores)
{
    Console.WriteLine(name + "：" + grade);
}
```

---

## 五、实战案例：学生成绩管理系统（简易版）

```csharp
Dictionary<string, int> grades = new Dictionary<string, int>();

while (true)
{
    Console.Write("请输入学生姓名（输入end结束）：");
    string name = Console.ReadLine();

    if (name == "end") break;

    Console.Write("请输入 " + name + " 的成绩：");
    int score = int.Parse(Console.ReadLine());

    grades[name] = score;  // 自动添加或更新
}

Console.WriteLine("\n成绩汇总：");
foreach (var (name, score) in grades)
{
    Console.WriteLine(name + "：" + score);
}
```

---

## 六、判断与删除

```csharp
if (grades.ContainsKey("小明"))
{
    grades.Remove("小明");
    Console.WriteLine("已删除小明的成绩");
}
```

---

## ✅ 小练习题（视频结尾引导）

**题目：**

1. 让用户输入 5 位同学的“姓名”和“成绩”；
2. 用户可输入一个姓名，查询该同学是否存在，并输出成绩；
3. 如果不存在，输出提示信息。

---

## 📌 总结

| 技术点                  | 功能说明         |
| -------------------- | ------------ |
| Dictionary\<k, v>    | 创建键值对集合      |
| Add / Remove / Count | 增删查基础操作      |
| ContainsKey / Value  | 判断是否存在       |
| 遍历字典                 | foreach 循环方式 |

---


## 练习

### ✅ C# 练习题：遍历字符串并统计字符出现次数（含 `Console.ReadLine()`）

---

## 🎯 题目：统计用户输入字符串中每个字符出现的次数

### **题目描述：**

编写一个 C# 控制台程序，要求：

1. 提示用户通过键盘输入一个字符串（使用 `Console.ReadLine()` 获取输入）。
2. 遍历该字符串中的每一个字符。
3. 统计每个字符（区分大小写，如 `'A'` 和 `'a'` 算不同字符）出现的次数。
4. 最后将统计结果输出到控制台，格式如下：

```
字符 'A' 出现了 2 次
字符 'b' 出现了 3 次
字符 '1' 出现了 1 次
...
```

> 🧠 **提示：** 可以使用 `foreach` 循环遍历字符串中的每个 `char`，并用 `Dictionary<char, int>` 来记录每个字符出现的次数。

---

## ✅ 示例运行效果

### 输入（用户通过键盘输入）：
```
Hello, C# 123
```

### 输出（程序打印统计结果）：
```
字符 'H' 出现了 1 次
字符 'e' 出现了 1 次
字符 'l' 出现了 2 次
字符 'o' 出现了 1 次
字符 ',' 出现了 1 次
字符 ' ' 出现了 2 次
字符 'C' 出现了 1 次
字符 '#' 出现了 1 次
字符 '1' 出现了 1 次
字符 '2' 出现了 1 次
字符 '3' 出现了 1 次
```

> 🎯 注意：空格、标点、数字、字母都会被统计，区分大小写。

---

## 🧩 解题思路与步骤

### 步骤 1：使用 `Console.ReadLine()` 获取用户输入的字符串

```csharp
string input = Console.ReadLine();
```

### 步骤 2：创建一个字典，用于存储字符及其出现次数

```csharp
Dictionary<char, int> charCount = new Dictionary<char, int>();
```

### 步骤 3：遍历字符串中的每个字符（使用 `foreach`）

```csharp
foreach (char c in input)
{
    if (charCount.ContainsKey(c))
    {
        charCount[c]++; // 如果字符已存在，次数 +1
    }
    else
    {
        charCount[c] = 1; // 如果字符不存在，初始化为 1
    }
}
```

### 步骤 4：遍历字典，输出每个字符及其次数

```csharp
foreach (var pair in charCount)
{
    Console.WriteLine($"字符 '{pair.Key}' 出现了 {pair.Value} 次");
}
```

---

## ✅ 完整代码示例

```csharp
using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        // 提示用户输入字符串
        Console.WriteLine("请输入一个字符串：");
        string input = Console.ReadLine(); // ✅ 使用 Console.ReadLine() 获取输入

        // 创建字典，用于存储每个字符出现的次数
        Dictionary<char, int> charCount = new Dictionary<char, int>();

        // 遍历字符串中的每一个字符
        foreach (char c in input)
        {
            if (charCount.ContainsKey(c))
            {
                charCount[c]++; // 该字符已存在，计数加一
            }
            else
            {
                charCount[c] = 1; // 该字符第一次出现，初始化为1
            }
        }

        // 输出统计结果
        Console.WriteLine("\n字符出现次数统计结果：");
        foreach (var pair in charCount)
        {
            Console.WriteLine($"字符 '{pair.Key}' 出现了 {pair.Value} 次");
        }
    }
}
```

---

## 🧠 学习目标

通过本题，你将掌握以下 C# 知识点：

| 知识点 | 说明 |
|--------|------|
| **`Console.ReadLine()`** | 从控制台读取用户输入的一行字符串 |
| **字符串遍历（foreach）** | 遍历字符串中的每个字符（`char`） |
| **`Dictionary<char, int>`** | 使用字典统计每个字符出现的次数 |
| **条件判断与键值操作** | 判断字典中是否已包含某个键，并更新值 |
| **字符串格式化输出** | 使用 `Console.WriteLine($"...")` 输出格式化结果 |

---

## 💡 拓展挑战（可选）

1. **不区分大小写统计**：把所有字母先转成大写或小写，再统计（使用 `char.ToUpper(c)`）
2. **只统计字母或数字**：在遍历时用 `char.IsLetter(c)` 或 `char.IsDigit(c)` 过滤
3. **按出现次数排序输出**：将字典按值排序后输出，更直观
4. **图形化界面输入**（如 WPF / WinForms），但本题目专注于控制台

---

## ✅ 总结一句话：

> **本题通过结合 `Console.ReadLine()` 获取用户输入字符串，再利用 `foreach` 遍历每个字符并使用字典统计出现次数，是一个非常经典的 C# 字符串与集合操作入门练习，适合巩固基础语法与逻辑思维。**

---

如你想要该题的 **拓展版本（如不区分大小写、只统计字母、排序输出等）**，或者想换成 **数组遍历、数字处理、文件读取** 等其他练习，欢迎继续提问！我可以为你定制 😊。

## 练习

### 1.统计字符串中每个字符出现的次数

**题目：**

>编写一个 C# 控制台程序，接收用户输入的一个字符串（使用 `Console.ReadLine()`），然后**遍历该字符串的每个字符，统计每个字符出现的次数，并输出结果**。

- 区分大小写（即 `'A'` 和 `'a'` 是不同的字符）
- 输出格式：`字符 'A' 出现了 3 次`

要求：

- 使用 `foreach` 遍历字符串
- 使用 `Dictionary<char, int>` 来统计次数

---

### 2.找出字符串中出现次数最多的字符

**题目：**

>编写程序，接收用户输入的一个字符串，**遍历该字符串，统计每个字符的出现次数，然后找出并输出出现次数最多的那个字符及其次数**。

- 如果有多个字符出现次数相同且最多，输出其中一个即可
- 区分大小写

### 🎯 要求：

- 使用 `foreach` 遍历
- 使用字典统计
- 找出最大值并输出对应字符

> 💡 提示：遍历字典，比较每个键值对的 Value，记录最大值。

---


## 答案

1.统计字符串中每个字符出现的次数

解题思路：

- 使用 `Console.ReadLine()` 获取输入
- 遍历字符串中的每个字符（用 `foreach`）
- 使用 `Dictionary<char, int>` 记录每个字符出现的次数
- 遍历字典，按格式输出统计结果

---

完整代码：

```csharp
using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        Console.WriteLine("请输入一个字符串：");
        string input = Console.ReadLine();

        Dictionary<char, int> charCounts = new Dictionary<char, int>();

        foreach (char c in input)
        {
            if (charCounts.ContainsKey(c))
            {
                charCounts[c]++;
            }
            else
            {
                charCounts[c] = 1;
            }
        }

        Console.WriteLine("\n字符出现次数统计：");
        foreach (var pair in charCounts)
        {
            Console.WriteLine($"字符 '{pair.Key}' 出现了 {pair.Value} 次");
        }
    }
}
```

---

示例运行：

**输入：**
```
Hello
```

**输出：**
```
字符出现次数统计：
字符 'H' 出现了 1 次
字符 'e' 出现了 1 次
字符 'l' 出现了 2 次
字符 'o' 出现了 1 次
```

---


2.找出字符串中出现次数最多的字符

解题思路：

- 先按 **练习题1** 的方式统计每个字符出现的次数（用字典）
- 然后遍历字典，找出 `Value`（次数）最大的那个键值对
- 输出该字符及其次数

完整代码：

```csharp
using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        Console.WriteLine("请输入一个字符串：");
        string input = Console.ReadLine();

        Dictionary<char, int> charCounts = new Dictionary<char, int>();

        foreach (char c in input)
        {
            if (charCounts.ContainsKey(c))
                charCounts[c]++;
            else
                charCounts[c] = 1;
        }

        char maxChar = ' ';
        int maxCount = 0;

        foreach (var pair in charCounts)
        {
            if (pair.Value > maxCount)
            {
                maxCount = pair.Value;
                maxChar = pair.Key;
            }
        }

        Console.WriteLine($"出现次数最多的字符是 '{maxChar}'，出现了 {maxCount} 次");
    }
}
```

---

示例运行：

**输入：**
```
Mississippi
```

**输出：**
```
出现次数最多的字符是 'i'，出现了 4 次
```
> 或 `'s'`，取决于哪个先被判定为最大（如果有多个一样多，只输出第一个遇到的）

---