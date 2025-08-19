---
noteId: "1bf005d062ab11f0a138bb2f2278db69"
tags: []

---

序列的意思是有序排列。字符串中的每个字符都有固定位置，自左至右依次是：0、1、2...，我们称它为下标。



### 1. **获取字符串长度**

```csharp
string word = "Hello";
Console.WriteLine(word.Length); // 输出 5
```

🧠 “`.Length` 表示字符串的长度，也就是字符的个数。”

---



在 C# 中，**字符串遍历（String Traversal / Iteration）** 是指**逐个访问字符串中的每一个字符**，这是处理字符串内容时非常常见的需求，比如：

- 统计某个字符出现的次数
- 查找特定字符或子串的位置
- 对每个字符进行转换、过滤、判断等操作
- 解析字符串内容（比如解析 CSV、表达式、命令等）

C# 中的字符串本质上是 **只读的 Unicode 字符序列（即 `char` 类型的数组）**，因此你可以像遍历数组一样遍历字符串中的每一个字符。

---

## 一、字符串的本质

在 C# 中：

```csharp
string str = "Hello";
```

- `str` 是一个 **不可变的（immutable）Unicode 字符串**
- 它本质上可以看作是一个 **`char` 类型的只读集合**
- 每个字符都是 `char` 类型（UTF-16 编码，固定 2 字节）

所以，**遍历字符串，其实就是逐个访问这些字符**。

---

## 二、C# 中字符串遍历的常见方式

| 方式 | 说明 | 适用场景 | 示例 |
|------|------|----------|------|
| **1. 使用 `for` 循环（通过索引）** | 通过字符串的索引 `[i]` 访问每个字符 | 需要索引时（比如同时访问位置和字符） | ✅ 常用 |
| **2. 使用 `foreach` 循环** | 直接遍历字符串中的每一个 `char` 字符 | 只读遍历，不需要索引 | ✅ 推荐，简洁 |
| **3. 将字符串转为 `char[]` 数组再遍历** | 使用 `ToCharArray()` 转为字符数组后遍历 | 需要操作字符数组时 | ⚠️ 适用于特殊需求 |
| **4. 使用 LINQ 遍历/处理字符** | 使用 `Select()`、`Where()` 等操作字符序列 | 函数式编程、复杂筛选/投影 | ✅ 高级用法 |
| **5. 使用 `foreach` 遍历字符串索引（不推荐）** | 一般不直接遍历索引，而是通过 `for` 控制索引 | - | ⚠️ 不常用 |

---

## 三、各种字符串遍历方式的详细用法

---

### ✅ 示例 1：使用 `for` 循环遍历（通过索引访问字符）

字符串支持索引器访问：`str[i]` → 返回该位置上的 `char` 字符。

```csharp
string str = "Hello";

for (int i = 0; i < str.Length; i++)
{
    char c = str[i]; // 获取第 i 个字符
    Console.WriteLine($"字符 {i}: {c}");
}
```

**输出：**
```
字符 0: H
字符 1: e
字符 2: l
字符 3: l
字符 4: o
```

🔍 **说明：**
- `str.Length` 是字符串的字符个数（不是字节数）
- `str[i]` 返回的是 `char` 类型，表示该索引处的字符
- 适用于需要**知道字符位置（索引）**的场景，比如统计、替换、查找等

---

### ✅ 示例 2：使用 `foreach` 循环遍历（推荐 ✅）

字符串可以直接在 `foreach` 中遍历，它会**逐个返回字符串中的 `char` 字符**，无需关心索引。

```csharp
string str = "World";

foreach (char c in str)
{
    Console.WriteLine(c);
}
```

**输出：**
```
W
o
r
l
d
```

🔍 **说明：**
- 更简洁，更易读，适用于**只需要字符本身，不需要索引**的情况
- **推荐在大多数只读遍历场景下使用**

---

### ✅ 示例 3：将字符串转为 `char[]` 后遍历

你可以使用 `ToCharArray()` 方法将字符串转换为 `char` 数组，然后像操作普通数组一样遍历：

```csharp
string str = "CSharp";

char[] chars = str.ToCharArray();

foreach (char c in chars)
{
    Console.WriteLine(c);
}

// 或者用 for 循环
for (int i = 0; i < chars.Length; i++)
{
    Console.WriteLine($"索引 {i}: {chars[i]}");
}
```

🔍 **说明：**
- `ToCharArray()` 会生成一个新的 `char[]` 数组，占用额外的内存
- 适用于需要**对字符数组进行复杂操作**的场景（排序、过滤等）
- 一般情况下**不需要显式转换**，直接用 `foreach` 遍历字符串更高效

---

### ✅ 示例 4：使用 LINQ 遍历/处理字符（高级用法）

借助 `System.Linq`，你可以对字符串中的字符进行更灵活的操作，比如筛选、投影、转换等。

```csharp
using System;
using System.Linq;

string str = "Hello, 123";

// 筛选出所有的字母字符
var letters = str.Where(c => char.IsLetter(c));

foreach (char c in letters)
{
    Console.WriteLine(c);
}

// 或者转成大写形式
var upperLetters = str.Select(c => char.ToUpper(c));
Console.WriteLine(string.Concat(upperLetters));
```

**输出（筛选字母）：**
```
H
e
l
l
o
```

**输出（转大写后拼接）：**
```
HELLO, 123
```

> ✅ LINQ 提供了强大的功能，适合做**字符过滤、映射、统计等高级操作**

---

## 四、遍历字符串的常见应用场景

| 场景 | 说明 | 常用方法 |
|------|------|----------|
| **统计某个字符出现次数** | 遍历字符串并计数 | `for` / `foreach` + 计数器 |
| **查找某个字符或子串** | 遍历判断是否存在目标 | `foreach` 或 `IndexOf()` |
| **字符串转换（如大小写、编码）** | 遍历每个字符并处理 | `foreach` + `char.ToUpper()` 等 |
| **解析字符串（如 CSV、命令行参数）** | 按规则提取内容 | `for` / `foreach` + 判断逻辑 |
| **过滤/移除某些字符** | 如去掉空格、特殊符号 | `foreach` + 条件过滤 |
| **字符映射/替换** | 如加密、编码转换 | 遍历并构建新字符串 |

---

## 五、示例：统计字符串中每个字符出现的次数

```csharp
using System;
using System.Collections.Generic;

string str = "hello";

Dictionary<char, int> freq = new Dictionary<char, int>();

foreach (char c in str)
{
    if (freq.ContainsKey(c))
        freq[c]++;
    else
        freq[c] = 1;
}

foreach (var pair in freq)
{
    Console.WriteLine($"字符 '{pair.Key}' 出现了 {pair.Value} 次");
}
```

**输出：**
```
字符 'h' 出现了 1 次
字符 'e' 出现了 1 次
字符 'l' 出现了 2 次
字符 'o' 出现了 1 次
```

---

## 六、总结表格 ✅

| 方式 | 说明 | 是否推荐 | 适用场景 |
|------|------|----------|----------|
| **`for` 循环 + `str[i]`** | 通过索引访问每个字符，可获取位置信息 | ✅ 推荐 | 需要索引/位置时 |
| **`foreach` 循环** | 直接遍历每个 `char` 字符，代码简洁 | ✅ **推荐（最常用）** | 只读遍历字符 |
| **`ToCharArray()` + 遍历** | 转为 `char[]` 后再遍历或操作 | ⚠️ 特殊情况使用 | 需要操作字符数组 |
| **LINQ（`Select` / `Where`）** | 函数式处理字符序列 | ✅ 高级用法 | 过滤、投影、统计等 |
| **`foreach` 遍历索引（不常见）** | 一般不直接遍历索引，而是用 `for` | ❌ 不推荐 | - |

---

## ✅ 总结一句话：

> **在 C# 中，字符串遍历是指逐个访问字符串中的字符，最常用的方法是使用 `foreach` 循环直接遍历每个 `char`，也可以通过 `for` 循环按索引访问，或者转为 `char[]` 后处理。根据是否需要索引、是否要过滤/转换，可以选择最适合的遍历方式，其中 `foreach` 是最简洁和推荐的方式。**

---

### 🧠 想进一步学习？

- 如何遍历字符串并**提取单词、句子、数字等**
- 如何用 `for` 循环实现字符串反转
- 如何统计字符串中的元音、辅音、空格、标点等
- 如何结合 `Span<char>` 或 `ReadOnlySpan<char>` 进行**高性能字符串处理（.NET Core+）**

欢迎继续提问！我可以为你提供详细代码示例 😊。


## 练习

### 1.提取字符串中的所有数字字符并拼接成新字符串

**题目：**
>编写程序，让用户输入一个包含数字和字母的字符串（如 `"A1B23C4"`），**遍历该字符串，提取出所有的数字字符（'0' ~ '9'），并将它们拼接成一个新的字符串输出**。

示例：

- 输入：`"A1B23C4"`
- 输出：`"1234"`

要求：

- 使用 `foreach` 遍历字符串的每个字符
- 判断是否是数字：`char.IsDigit(c)`
- 拼接符合条件的字符

---

### 2.反转字符串（通过遍历实现）

**题目：**

> 编写程序，接收用户输入的一个字符串，**不使用 `Reverse()` 方法，而是通过遍历字符串，将字符倒序拼接或存储，最终输出反转后的字符串**。

示例：

- 输入：`"Hello"`
- 输出：`"olleH"`

要求：

- 使用 `for` 循环从字符串最后一个字符开始遍历
- 或者用 `foreach` 反向收集字符（需先转为数组或使用索引）

> ✅ 可以使用 `for (int i = str.Length - 1; i >= 0; i--)` 反向遍历，或者先存到 `char[]` / `List<char>` 再反转

---


### 3.找出字符串中所有大写字母的位置与字符

**题目：**

编写程序，接收用户输入的字符串，**遍历该字符串，找出所有大写字母，并输出它们的索引位置和对应的字符**。

示例：

- 输入：`"HeLLo WOrLd"`
- 输出：

```
大写字母 'H' 出现在索引 0
大写字母 'L' 出现在索引 2
大写字母 'L' 出现在索引 3
大写字母 'W' 出现在索引 6
大写字母 'O' 出现在索引 7
大写字母 'L' 出现在索引 9
```
  
要求：

- 使用 `foreach` 或 `for` 遍历字符串
- 判断是否是大写字母：`char.IsUpper(c)`
- 输出格式：`大写字母 'X' 出现在索引 Y`

> ✅ 可使用 `str[i]` 通过索引访问，或 `foreach` 配合索引计数

---

## 答案

1.提取字符串中的所有数字字符并拼接成新字符串

解题思路：

- 遍历字符串的每个字符
- 判断是否为数字：`char.IsDigit(c)`
- 如果是数字，拼接到结果字符串中

完整代码：

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("请输入一个包含数字和字母的字符串：");
        string input = Console.ReadLine();

        string digits = "";

        foreach (char c in input)
        {
            if (char.IsDigit(c))
            {
                digits += c;
            }
        }

        Console.WriteLine("提取的数字字符为：" + digits);
    }
}
```

示例运行：

**输入：**
```
A1B23C4
```

**输出：**
```
提取的数字字符为：1234
```

---

2.反转字符串（通过遍历实现）

解题思路：

- 方法 1：使用 `for` 循环从最后一个字符开始遍历，依次拼接
- 方法 2：将字符串转为 `char[]`，倒序遍历后拼接

这里展示 **方法 1（for 倒序遍历）**

完整代码：

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("请输入一个字符串：");
        string input = Console.ReadLine();

        string reversed = "";

        for (int i = input.Length - 1; i >= 0; i--)
        {
            reversed += input[i];
        }

        Console.WriteLine("反转后的字符串为：" + reversed);
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
反转后的字符串为：olleH
```

---


3.找出字符串中所有大写字母的位置与字符

解题思路：

- 使用 `foreach` 或 `for` 遍历字符串
- 判断是否是大写字母：`char.IsUpper(c)`
- 如果是，输出其索引和字符
- 可使用 `for (int i = 0; ...)` 方便获取索引

---

完整代码：

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("请输入一个字符串：");
        string input = Console.ReadLine();

        for (int i = 0; i < input.Length; i++)
        {
            char c = input[i];
            if (char.IsUpper(c))
            {
                Console.WriteLine($"大写字母 '{c}' 出现在索引 {i}");
            }
        }
    }
}
```

---

示例运行：

**输入：**
```
HeLLo WOrLd
```

**输出：**
```
大写字母 'H' 出现在索引 0
大写字母 'L' 出现在索引 2
大写字母 'L' 出现在索引 3
大写字母 'W' 出现在索引 6
大写字母 'O' 出现在索引 7
大写字母 'L' 出现在索引 9
```

---