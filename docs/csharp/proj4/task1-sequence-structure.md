---
title: 任务一 顺序结构语句
description: 算法与程序设计《C#》项目四 C#的控制结构 任务一 顺序结构语句知识点总结。介绍赋值语句、输入语句（Console.Read/ReadLine/ReadKey）、输出语句（Console.WriteLine/Write及占位符）、复合语句与复合赋值运算符，含完整代码示例。
keywords: [C#, 顺序结构, 赋值语句, Console.Read, Console.ReadLine, Console.ReadKey, Console.WriteLine, Console.Write, 占位符, 复合语句, 复合赋值运算符, 串联赋值, 对口升学]
sidebar_label: 任务一 顺序结构语句
sidebar_position: 1
slug: /csharp/proj4/task1-sequence-structure
tags: [C#, 项目四, 任务一, 对口升学]
---

## 知识点

### 1.什么是顺序结构语句？

顺序结构语句是指所有语句按照顺序执行，每一条语句只执行一遍，不重复执行，也没有不执行的语句，是最基本的程序运行结构，按照从头到尾的顺序来运行程序。

### 子任务一 赋值语句

### 2.赋值语句的语法格式是什么？

```
变量名 = 表达式
```

先求出右侧表达式的值，然后将结果赋值给左边的变量。

> 注意：赋值号 `=` 和等号意义不同，赋值号具有方向性，只能把赋值号右边的值赋给左边的变量。

**示例：**

```csharp
int A = 26;
```

### 子任务二 输入语句

### 3.Console.Read()方法的作用是什么？

`Console.Read()` 用于返回用户从控制台上输入数据的首字符的ASCII码。

```csharp
int a = Console.Read();
Console.WriteLine(a);
```

> 输入"abcd"，显示结果为第一个字符"a"的ASCII码97。

### 4.Console.ReadLine()方法的作用是什么？

`Console.ReadLine()` 把用户输入的一行信息用string类型的字符串返回（最常用的输入语句）。

```csharp
string name = Console.ReadLine();
Console.WriteLine(name);
```

### 5.Console.ReadKey()方法的作用是什么？

`Console.ReadKey()` 用于让程序在某个地方暂停，观察程序运行效果。输入任一字符，程序就会继续。

```csharp
string name = Console.ReadLine();
Console.ReadKey();        // 暂停，等待用户按下任意键继续
Console.WriteLine(name);
Console.ReadKey();        // 暂停，等待用户按下任意键结束程序
```

### 6.Console.ReadLine()与Console.Read()的区别是什么？

- `Console.ReadLine()`：等待直到用户按下回车，一次读入一行
- `Console.Read()`：等待用户按下任意键，一次读入一个字符

### 子任务三 输出语句

### 7.Console.WriteLine()和Console.Write()的区别是什么？

- `Console.WriteLine()`：输出以后自动换行
- `Console.Write()`：输出以后不会自动换行

```csharp
Console.Write("好好学习");
Console.Write("（不换行）");
Console.WriteLine("好好学习");
Console.WriteLine("（换行输出）");
```

### 8.如何在输出语句中使用加运算？

```csharp
string name = "张三";
int age = 18;
Console.WriteLine("你好，我叫" + name + "我今年" + age + "岁。");
```

### 9.如何在输出语句中使用占位符？

占位符从左往右为 `{0}`、`{1}`、`{2}`...

```csharp
string name = "李四";
int age = 20;
Console.WriteLine("你好，我叫{0}我今年{1}岁。", name, age);
```

### 子任务四 复合语句

### 10.什么是复合赋值运算符？

复合赋值运算符用于简化 `a = a op b` 的写法为 `a op= b`。

**表4-1 复合赋值运算符：**

| 符号 | 意义 | 示例 |
|---|---|---|
| `+=` | 加赋值 | `a += b` 等价于 `a = a+b` |
| `-=` | 减赋值 | `a -= b` 等价于 `a = a-b` |
| `*=` | 乘赋值 | `a *= b` 等价于 `a = a*b` |
| `/=` | 除赋值 | `a /= b` 等价于 `a = a/b` |
| `%=` | 取模赋值 | `a %= b` 等价于 `a = a%b` |
| `<<=` | 左移赋值 | `a <<= b` 等价于 `a = a<<b` |
| `>>=` | 右移赋值 | `a >>= b` 等价于 `a = a>>b` |
| `&=` | 与赋值 | `a &= b` 等价于 `a = a&b` |
| `^=` | 异或赋值 | `a ^= b` 等价于 `a = a^b` |
| `\|=` | 或赋值 | `a \|= b` 等价于 `a = a\|b` |

### 11.a = a + 1、a += 1 和 a++ 有什么区别？

三者没有语义上的区别（都是增大一个单位）：
- `a++` 是 `a += 1` 的简写
- `a += 1` 又是 `a = a + 1` 的简写

### 12.什么是串联赋值？

赋值运算符具有右结合性，可以串联多个赋值语句：

```csharp
int a, b, c;
a = b = c = 3;
// 等价于 a = (b = (c = 3))
// 先将 c = 3 赋值完成后，将 c 的结果赋值给 b，最后把 b 的结果赋值给 a
```

**串联复合赋值示例：**

```csharp
int a = 1, b = 2, c = 3, d;
d = a *= b += c;
// 等价于 d = (a *= (b += c))
// b += c → b = 2+3 = 5
// a *= 5 → a = 1*5 = 5
// d = 5
```

> 运行结果：d 最后是5。
