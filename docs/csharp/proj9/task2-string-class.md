---
title: 任务二 String类
description: 算法与程序设计《C#》项目九 C#常用类的属性和方法 任务二 String类 知识点总结。掌握String类的常见属性及方法，包括字符串比较、连接、查找、替换、拆分、格式化等操作。
keywords: [C#, String类, 字符串操作, 字符串格式化, 对口升学]
sidebar_label: 任务二 String类
sidebar_position: 2
slug: /csharp/proj9/task2-string-class
tags: [C#, 项目九, 任务二, 对口升学]
---

## 知识点

String类位于System命名空间中，用于处理字符串。使用String类的属性和方法会为字符串的处理带来极大的方便。

### 1. String类的常见属性（表9-3）

| 属性 | 说明 |
|---|---|
| Chars | 获取此字符串中位于指定字符位置的字符 |
| Length | 获取此字符串中的字符数 |

### 2. String类的常见方法（表9-4）

| 方法 | 说明 |
|---|---|
| Equals | 主要用于比较两个字符串是否相同 |
| Compare | 用来比较两个字符串是否相等 |
| Contains | 用于检查子字符串是否出现在给定的字符串内 |
| Concat | 用于将一个或多个字符串连接到一起，并返回一个新的字符串 |
| Copy | 用于创建一个与指定字符串具有相同值的新字符串 |
| Format | 用于将对象格式化指定的格式 |
| IndexOf | 用于返回搜索的字符或字符串首次出现的索引位置 |
| Insert | 用于向字符串的指定位置插入新的子字符串 |
| Remove | 用于从一个字符串的指定位置开始删除指定数量的字符 |
| Replace | 用于将字符串中的某个字符或字符串替换成其他的字符或字符串 |
| IsNullOrEmpty | 用于检查指定的字符串是否为空字符串或NULL |
| Join | 用于在指定String数组的每个元素之间串联指定的分隔符String，从而产生单个串联的字符串 |
| Split | 用于将字符串基于指定的分隔符拆分成一个字符串数组 |
| ToLower | 用于将字符串转换为小写 |
| ToUpper | 用于将字符串转换为大写 |
| ToCharArray | 用于将指定字符串内的字符复制到字符数组 |
| Trim | 用于从当前String对象移除所有前导空白字符和尾部空白字符 |
| Substring | 从当前字符串中的指定位置开始截取指定长度的字符串 |

### 3. Length属性

功能：获取指定字符串的长度。

语法：`public int Length { get; }`

示例：
```csharp
static void Main(string[] args)
{
    string zhuanye = "jisuanjiyingyong";
    int n = zhuanye.Length;
    Console.WriteLine("字符串长度为: {0}", n);
    Console.ReadLine();
}
```
显示结果：`16`

### 4. Equals方法

功能：比较两个字符串是否相同。

语法：`public bool Equals(string a, string b)`

- 返回值：相同返回True，不同返回False

示例：
```csharp
static void Main(string[] args)
{
    string strA = "C#程序设计";
    string strB = "C#程序";
    bool b = string.Equals(strA, strB);
    Console.WriteLine(b);
    Console.ReadLine();
}
```
显示结果：`False`

### 5. Compare方法

功能：比较两个字符串是否相等。

语法：`public static int Compare(string strA, string strB)`

- 返回值：相等返回0；strA `>` strB返回1；strA `<` strB返回-1

示例：
```csharp
static void Main(string[] args)
{
    string strA = "C#程序设计";
    string strB = "C#程序";
    Console.WriteLine(String.Compare(strA, strB));
    Console.WriteLine(String.Compare(strB, strA));
    Console.ReadLine();
}
```
显示结果：`1`、`-1`

### 6. Contains方法

功能：检查子字符串是否出现在给定的字符串内。

语法：`public bool Contains(string value)`

- 返回值：包含返回True，不包含返回False

示例：
```csharp
static void Main(string[] args)
{
    string str1 = "C#程序设计";
    bool b = str1.Contains("程序");
    Console.WriteLine(b);
    Console.ReadLine();
}
```
显示结果：`True`

### 7. Concat方法

功能：将一个或多个字符串连接到一起，并返回一个新的字符串。

语法：`public static string Concat(string str0, string str1)`

示例：
```csharp
static void Main(string[] args)
{
    string str1 = "C#";
    string str2 = "程序设计";
    Console.WriteLine(string.Concat(str1, str2));
    Console.ReadLine();
}
```
显示结果：`C#程序设计`

### 8. Copy方法

功能：创建一个与指定字符串具有相同值的新字符串。

语法：`public static string Copy(string str)`

示例：
```csharp
static void Main(string[] args)
{
    string str1 = "C#程序设计";
    string str2 = string.Copy(str1);
    Console.WriteLine(str2);
    Console.ReadLine();
}
```
显示结果：`C#程序设计`

### 9. Format方法

功能：将对象格式化为指定的格式。

语法：`public static string Format(string format, object arg0)`

#### 标准数值格式规范（表9-5）

| 格式规范符 | 说明 | 示例 | 结果 |
|---|---|---|---|
| C 或 c | 货币格式 | `string.Format("{0:C}", 10000)` | ￥10,000.00 |
| D 或 d | 十进制格式 | `string.Format("{0:D4}", 60)` | 0060 |
| E 或 e | 科学记数法格式 | `string.Format("{0:E}", 10000/3)` | 3.333000E+003 |
| F 或 f | 浮点数格式 | `string.Format("{0:F4}", Math.PI)` | 3.1416 |
| G 或 g | 常规格式 | — | 根据类型自动选择 |
| N 或 n | 数字格式（千分位） | `string.Format("{0:N}", 670008)` | 670,008.00 |
| X 或 x | 十六进制格式 | `string.Format("{0:X4}", 60)` | 003C |

数值类型格式化示例：
```csharp
static void Main(string[] args)
{
    Console.WriteLine(string.Format("一万元写成货币形式为:{0:C}", 10000));
    Console.WriteLine(string.Format("60转换为16进制结果为:{0:X4}", 60));
    Console.WriteLine(string.Format("一万除以三结果为(科学记数法形式):{0:E}", 10000/3));
    Console.WriteLine(string.Format("670008以分隔符数字显示的结果是:{0:N}", 670008));
    Console.WriteLine(string.Format("π取四位小数点:{0:F4} ", Math.PI));
    Console.ReadLine();
}
```
运行结果（图9-9）：
```
一万元写成货币形式为:￥10,000.00
60转换为16进制结果为:003C
一万除以三结果为(科学记数法形式):3.333000E+003
670008以分隔符数字显示的结果是:670,008.00
π取四位小数点:3.1416
```

#### 日期时间类型的格式规范（表9-6）

| 格式规范符 | 说明 |
|---|---|
| d | 简短日期格式（YYYY-MM-dd） |
| D | 完整日期格式（YYYY年MM月dd日） |
| t | 简短时间格式（hh:mm） |
| T | 完整时间格式（hh:mm:ss） |
| f | 简短的日期/时间格式（YYYY-MM-dd hh:mm） |
| F | 完整的日期/时间格式（YYYY年-MM月-dd日 hh:mm:ss） |
| g | 简短的可排序的日期/时间格式（YYYY-MM-dd hh:mm） |
| G | 完整的可排序的日期/时间格式（YYYY年-MM月-dd日 hh:mm:ss） |
| M 或 m | 月/日格式（MM月dd日） |
| Y 或 y | 年/月格式（YYYY年MM月） |

日期时间格式化示例：
```csharp
static void Main(string[] args)
{
    DateTime strDate = DateTime.Now;
    Console.WriteLine(string.Format("当前日期的短日期格式表示: {0:d}", strDate));
    Console.WriteLine(string.Format("当前日期的长日期格式表示: {0:D}", strDate));
    Console.WriteLine(string.Format("当前日期时间的完整日期/时间格式(短时间)表示: {0:f}", strDate));
    Console.WriteLine(string.Format("当前日期时间的完整日期/时间格式(长时间)表示: {0:F}", strDate));
    Console.WriteLine(string.Format("当前日期时间的常规日期/时间格式(短时间)表示: {0:g}", strDate));
    Console.WriteLine(string.Format("当前日期时间的常规日期/时间格式(长时间)表示: {0:G}", strDate));
    Console.WriteLine(string.Format("当前时间的短时间格式表示: {0:t}", strDate));
    Console.WriteLine(string.Format("当前时间的长时间格式表示: {0:T}", strDate));
    Console.WriteLine(string.Format("当前日期的月/日格式表示: {0:M}", strDate));
    Console.WriteLine(string.Format("当前日期的年/月格式表示: {0:Y}", strDate));
    Console.ReadLine();
}
```
运行结果（图9-10）：
```
当前日期的短日期格式表示: 2023/11/2
当前日期的长日期格式表示: 2023年11月2日
当前日期时间的完整日期/时间格式(短时间)表示: 2023年11月2日 10:28
当前日期时间的完整日期/时间格式(长时间)表示: 2023年11月2日 10:28:18
当前日期时间的常规日期/时间格式(短时间)表示: 2023/11/2 10:28
当前日期时间的常规日期/时间格式(长时间)表示: 2023/11/2 10:28:18
当前时间的短时间格式表示: 10:28
当前时间的长时间格式表示: 10:28:18
当前日期的月/日格式表示: 11月2日
当前日期的年/月格式表示: 2023年11月
```

### 10. IndexOf方法

功能：返回搜索的字符或字符串首次出现的索引位置。

语法：
```csharp
public int IndexOf(char value, int startIndex)
public int IndexOf(string value, int startIndex)
```

- value：要搜寻的字符或字符串
- startIndex：搜索起始位置，可选参数，默认值为0
- 返回值：找到则返回首个出现位置；未找到返回-1

示例：
```csharp
static void Main(string[] args)
{
    string str = "we are the world";
    int firstIndex = str.IndexOf("w");
    int secondIndex = str.IndexOf("w", 3);
    Console.WriteLine("第一次出现的索引位置是: " + firstIndex);
    Console.WriteLine("第二次出现的索引位置是: " + secondIndex);
    Console.ReadLine();
}
```
运行结果（图9-11）：`第一次出现的索引位置是: 0`、`第二次出现的索引位置是: 11`

### 11. Insert方法

功能：向字符串的任意位置插入新的子字符串。

语法：`public string Insert(int startIndex, string value)`

- startIndex：指定插入位置，索引从0开始
- value：指定要插入的字符串

示例：
```csharp
static void Main(string[] args)
{
    string strOld = "I a student";
    string strNew = strOld.Insert(2, "am");
    Console.WriteLine("原字符串为: {0}", strOld);
    Console.WriteLine("新字符串为: {0}", strNew);
    Console.ReadLine();
}
```
运行结果（图9-12）：`原字符串为: I a student`、`新字符串为: I am a student`

### 12. Remove方法

功能：从一个字符串的指定位置开始，删除指定数量的字符。

语法：`public string Remove(int startIndex, int count)`

- startIndex：开始删除的位置，索引从0开始
- count：删除的字符数量，省略则删除到最后

示例：
```csharp
static void Main(string[] args)
{
    string strOld = "I am a student.";
    string strNew1 = strOld.Remove(8);
    string strNew2 = strOld.Remove(8, 3);
    string strNew3 = strOld.Remove(8, 8);
    Console.WriteLine("删除第8个字符后面所有字符后新字符串为{0}", strNew1);
    Console.WriteLine("删除第8个字符后面3个字符后新字符串为{0}", strNew2);
    Console.WriteLine("删除第8个字符后面8个字符后新字符串为{0}", strNew3);
    Console.ReadLine();
}
```
运行结果（图9-13）：
```
删除第8个字符后面所有字符后新字符串为: I am a
删除第8个字符后面3个字符后新字符串为: I am a dent.
删除第8个字符后面8个字符后新字符串为: I am a
```

### 13. Replace方法

功能：将字符串中的某个字符或字符串替换成其他的字符或字符串。

语法：
```csharp
// 替换字符
public string Replace(char OChar, char NChar)
// 替换字符串
public string Replace(string Ostr, string Nstr)
```

- OChar/Ostr：待替换的字符/字符串
- NChar/Nstr：替换后的新字符/字符串

示例：
```csharp
static void Main(string[] args)
{
    string a = "i are a student.";
    Console.WriteLine("原字符串为: {0}", a);
    string b = a.Replace("i", "I");
    Console.WriteLine("i变大写后字符串为: {0}", b);
    string c = b.Replace("are", "am");
    Console.WriteLine("are变am后字符串为: {0}", c);
    Console.ReadLine();
}
```
运行结果（图9-14）：
```
原字符串为: i are a student.
i变大写后字符串为: I are a student.
are变am后字符串为: I am a student.
```

### 14. IsNullOrEmpty方法

功能：检查指定的字符串是否为空字符串或NULL。

语法：`public static bool IsNullOrEmpty(string str)`

- 返回值：True或False

示例：
```csharp
static void Main(string[] args)
{
    string s1 = "Hello C#";
    string s2 = "";
    bool b1 = string.IsNullOrEmpty(s1);
    bool b2 = string.IsNullOrEmpty(s2);
    Console.WriteLine(b1);
    Console.WriteLine(b2);
    Console.ReadLine();
}
```
运行结果（图9-15）：`False`、`True`

### 15. Join方法

功能：在指定String数组的每个元素之间串联指定的分隔符String，产生单个串联的字符串。

语法：`public static string Join(string separator, string[] str)`

- separator：指定的分隔符
- str：字符串数组

示例：
```csharp
static void Main(string[] args)
{
    string[] name = { "小张", "小李", "小王" };
    string newStr = string.Join("&", name);
    Console.WriteLine(newStr);
    Console.ReadLine();
}
```
运行结果（图9-16）：`小张&小李&小王`

### 16. Split方法

功能：将字符串基于指定的分隔符拆成一个字符串数组。

语法：`public string[] Split(char separator)`

- separator：指定的分隔符

示例：
```csharp
static void Main(string[] args)
{
    string str1 = "1a,2b,3c,4d,5e,6f";
    string[] newName = str1.Split(',');
    Console.WriteLine(newName[1]);
    Console.ReadLine();
}
```
运行结果（图9-17）：`2b`

### 17. ToLower方法

功能：将字符串转换为小写。

语法：`public string ToLower()`

示例：
```csharp
static void Main(string[] args)
{
    string s1 = "Hello C#";
    string s2 = s1.ToLower();
    Console.WriteLine(s2);
    Console.ReadLine();
}
```
运行结果（图9-18）：`hello c#`

### 18. ToUpper方法

功能：将字符串转换为大写。

语法：`public string ToUpper()`

示例：
```csharp
static void Main(string[] args)
{
    string s1 = "Hello C#";
    string s2 = s1.ToUpper();
    Console.WriteLine(s2);
    Console.ReadLine();
}
```
运行结果（图9-19）：`HELLO C#`

### 19. ToCharArray方法

功能：将指定字符串内的字符复制到字符数组。

语法：`public char[] ToCharArray(int startIndex, int length)`

- startIndex：子字符串的起始位置
- length：子字符串的长度
- 若都省略，则将整个字符串复制到字符数组

示例：
```csharp
static void Main(string[] args)
{
    string s1 = "Hello C#";
    char[] ch = s1.ToCharArray();
    foreach (char c in ch)
    {
        Console.WriteLine(c);
    }
    Console.ReadLine();
}
```
运行结果（图9-20）：逐行输出 `H`、`e`、`l`、`l`、`o`、（空格）、`C`、`#`

### 20. Trim方法

功能：从当前String对象移除所有前导空白字符和尾部空白字符。

语法：`public string Trim()`

示例：
```csharp
static void Main(string[] args)
{
    string s1 = "  Hello C#  ";
    Console.WriteLine("原字符串: {0}", s1);
    string s2 = s1.Trim();
    Console.WriteLine("删除前后空格后字符串: {0}", s2);
    Console.ReadLine();
}
```
运行结果（图9-21）：
```
原字符串:   Hello C#  
删除前后空格后字符串: Hello C#
```

### 21. Substring方法

功能：从当前字符串中的startIndex位置开始截取指定长度的字符串。

语法：`public string Substring(int startIndex, int length)`

- startIndex：开始截取的索引位置
- length：截取的长度，省略则截取到最后

示例：
```csharp
static void Main(string[] args)
{
    string s1 = "Hello C Sharp";
    string s2 = s1.Substring(5, 5);
    string s3 = s1.Substring(5);
    Console.WriteLine(s2);
    Console.WriteLine(s3);
    Console.ReadLine();
}
```
运行结果（图9-22）：`C Sh`、`C Sharp`
