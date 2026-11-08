---
title: 任务五 Convert类
description: 算法与程序设计《C#》项目九 C#常用类的属性和方法 任务五 Convert类 知识点总结。掌握Convert类的常见方法完成常见数据类型的转换。
keywords: [C#, Convert类, 类型转换, ToBoolean, ToChar, ToDateTime, ToDecimal, ToDouble, ToString, 对口升学]
sidebar_label: 任务五 Convert类
sidebar_position: 5
slug: /csharp/proj9/task5-convert-class
tags: [C#, 项目九, 任务五, 对口升学]
---

## 知识点

Convert类位于System命名空间中，用于将数据从一个类型转换成另一个类型。这些方法都是静态方法，可通过 `Convert.方法名(参数)` 来使用。

### 1. Convert类的常见方法（表9-9）

| 方法 | 说明 |
|---|---|
| ToBoolean | 将数据转换成布尔型（Boolean） |
| ToChar | 将数据转换成字符型（Char） |
| ToDateTime | 将数据转换成日期型（DateTime） |
| ToDecimal | 将数据转换成高精度小数类型（Decimal） |
| ToDouble | 将数据转换成双精度浮点型（Double） |
| ToSingle | 将数据转换成单精度浮点型（Single） |
| ToString | 将数据转换成字符串型（String） |

### 2. ToBoolean方法

功能：将给定的数值类型的对象转换为bool类型。

语法：`Convert.ToBoolean(object value)`

说明：value是数值类型数据或具有逻辑类型格式的字符串。当数值为0时返回false，当数值非0时返回true。

示例：
```csharp
static void Main(string[] args)
{
    double a1 = 0;
    int a2 = 6;
    string a3 = "true";
    bool b1 = Convert.ToBoolean(a1);
    bool b2 = Convert.ToBoolean(a2);
    bool b3 = Convert.ToBoolean(a3);
    Console.WriteLine(b1);
    Console.WriteLine(b2);
    Console.WriteLine(b3);
    Console.Read();
}
```
运行结果（图9-32）：`False`、`True`、`True`

> **转换规则**：数值0 → False，非0数值 → True，字符串"true" → True

### 3. ToChar方法

功能：将指定的对象的值转换为Char类型。

语法：`Convert.ToChar(object value)`

说明：value能作为某一字符ASCII码的数值，其范围为0~255。

示例：将数值65和66转换为ASCII码对应的字符。
```csharp
static void Main(string[] args)
{
    string d1 = "a";
    int a1 = 65;
    int a2 = 66;
    char b1 = Convert.ToChar(a1);
    char b2 = Convert.ToChar(a2);
    char b3 = Convert.ToChar(d1);
    Console.WriteLine(b1);
    Console.WriteLine(b2);
    Console.WriteLine(b3);
    Console.Read();
}
```
运行结果（图9-33）：`A`、`B`、`a`

> **说明**：ASCII码65对应大写字母A，66对应大写字母B。

### 4. ToDateTime方法

功能：将日期格式字符串转换为日期型。

语法：`Convert.ToDateTime(object value)`

说明：value是具有日期格式的字符串。

示例：
```csharp
static void Main(string[] args)
{
    string a = "01/02/09";
    DateTime b = Convert.ToDateTime(a);
    Console.Write(b);
    Console.ReadLine();
}
```
运行结果（图9-34）：`2001/2/9 0:00:00`

### 5. ToDecimal方法

功能：将数字格式字符串或者其他可转换为数字的对象变量转换为Decimal类型。

语法：`Convert.ToDecimal(object value)`

说明：value是数字格式字符串或逻辑类型。逻辑假转换为0，逻辑真转换为1。

示例：
```csharp
static void Main(string[] args)
{
    bool b1 = false;
    bool b2 = true;
    string str = "33.66666666667";
    decimal a1 = Convert.ToDecimal(b1);
    decimal a2 = Convert.ToDecimal(b2);
    decimal a3 = Convert.ToDecimal(str);
    Console.WriteLine(a1);
    Console.WriteLine(a2);
    Console.WriteLine(a3);
    Console.ReadLine();
}
```
运行结果（图9-35）：`0`、`1`、`33.66666666667`

### 6. ToDouble方法

功能：将数字格式字符串或者其他可转换为数字的对象变量转换为Double类型。

语法：`Convert.ToDouble(object value)`

说明：value是数字格式字符串或逻辑类型。逻辑假转换为0，逻辑真转换为1。

示例：
```csharp
static void Main(string[] args)
{
    bool b1 = false;
    bool b2 = true;
    string str = "33.66666666667";
    double a1 = Convert.ToDouble(b1);
    double a2 = Convert.ToDouble(b2);
    double a3 = Convert.ToDouble(str);
    Console.WriteLine(a1);
    Console.WriteLine(a2);
    Console.WriteLine(a3);
    Console.ReadLine();
}
```
运行结果（图9-36）：`0`、`1`、`33.66666666667`

### 7. ToSingle方法

功能：将数字格式字符串或者其他可转换为数字的对象变量转换为float类型。

语法：`Convert.ToSingle(object value)`

说明：value是数字格式字符串或逻辑类型。逻辑假转换为0，逻辑真转换为1。

示例：
```csharp
static void Main(string[] args)
{
    bool b1 = false;
    bool b2 = true;
    string str = "33.66666666667";
    float a1 = Convert.ToSingle(b1);
    float a2 = Convert.ToSingle(b2);
    float a3 = Convert.ToSingle(str);
    Console.WriteLine(a1);
    Console.WriteLine(a2);
    Console.WriteLine(a3);
    Console.ReadLine();
}
```
运行结果（图9-37）：`0`、`1`、`33.66667`

> **注意**：float类型精度低于double和decimal，所以33.66666666667被截断为33.66667。

### 8. ToString方法

功能：将数据转换为String类型。

语法：`Convert.ToString(object value)`

说明：value是待转换类型数据。

示例：
```csharp
static void Main(string[] args)
{
    int num1 = 123;
    string str1 = Convert.ToString(num1);
    Console.WriteLine("num1转换为字符串结果为:" + str1);
    Console.ReadLine();
}
```
运行结果（图9-38）：`num1转换为字符串结果为:123`

### 9. Convert类方法总结

| 方法 | 目标类型 | 常用场景 |
|---|---|---|
| ToBoolean | bool | 数值0→False，非0→True；字符串"true"→True |
| ToChar | char | ASCII码数值（0~255）→对应字符 |
| ToDateTime | DateTime | 日期格式字符串→日期型 |
| ToDecimal | decimal | 高精度小数转换，适合财务计算 |
| ToDouble | double | 双精度浮点转换 |
| ToSingle | float | 单精度浮点转换（精度较低） |
| ToString | string | 任意类型→字符串 |

> **要点总结**：
> - Convert类所有方法都是**静态方法**，通过 `Convert.方法名(参数)` 调用
> - 逻辑类型转换规律：false → 0，true → 1
> - 数值转布尔：0 → false，非0 → true
> - ToChar的数值参数范围为0~255（ASCII码范围）
> - ToSingle精度最低，ToDecimal精度最高
> - ToString是最常用的转换方法，可将任意类型转为字符串
