---
title: 任务三 DateTime类
description: 算法与程序设计《C#》项目九 C#常用类的属性和方法 任务三 DateTime类 知识点总结。掌握DateTime类的常见属性，获取年、月、日、小时、分、秒等信息。
keywords: [C#, DateTime类, 日期时间, 对口升学]
sidebar_label: 任务三 DateTime类
sidebar_position: 3
slug: /csharp/proj9/task3-datetime-class
tags: [C#, 项目九, 任务三, 对口升学]
---

## 知识点

C#中一般使用System.DateTime结构类来表示和处理日期。DateTime结构类位于System命名空间中，DateTime结构表示公元0001年1月1日午夜00:00:00到公元9999年12月31日晚上23:59:59之间的日期和时间。

### 1. 日期时间变量的定义

可以通过以下语法格式定义一个日期时间变量：

```csharp
DateTime 日期时间变量 = new DateTime(年, 月, 日, 时, 分, 秒)
```

例如，以下语句定义了两个日期时间变量：

```csharp
DateTime d1 = new DateTime(2015, 10, 1);
DateTime d2 = new DateTime(2015, 10, 1, 8, 15, 20);
```

- d1的值为2015年10月1日零点零分零秒
- d2的值为2015年10月1日8点15分20秒

### 2. DateTime结构的常见属性（表9-7）

| 属性 | 说明 |
|---|---|
| Today | 静态属性。获取当前日期 |
| Now | 静态属性。获取当前时间 |
| Date | 获取日期部分 |
| Day | 实例属性。获取日 |
| Month | 实例属性。获取月份 |
| Year | 实例属性。获取年份 |
| Hour | 实例属性。获取小时 |
| Minute | 实例属性。获取分钟 |
| Second | 实例属性。获取秒 |

### 3. Today属性

功能：获取系统的当前日期。

语法：`DateTime.Today`

说明：Today为静态属性。

示例：
```csharp
static void Main(string[] args)
{
    Console.WriteLine("当前日期为: {0}", DateTime.Today);
    Console.ReadLine();
}
```
运行结果（图9-23）：`当前日期为: 2023/11/8 9:00:00`

### 4. Now属性

功能：获取系统的当前时间。

语法：`DateTime.Now`

说明：Now为静态属性。

示例：
```csharp
static void Main(string[] args)
{
    Console.WriteLine("当前时间为: {0}", DateTime.Now);
    Console.ReadLine();
}
```
运行结果（图9-24）：`当前时间为: 2023/11/8 9:03:37`

### 5. Date属性

功能：获取实例的日期部分。

语法：`dt.Date`

说明：dt是日期实例。

示例：
```csharp
static void Main(string[] args)
{
    DateTime d2 = new DateTime(2015, 10, 1, 8, 15, 20);
    Console.WriteLine("日期为: {0}", d2.Date);
    Console.ReadLine();
}
```
运行结果（图9-25）：`日期为: 2015/10/1 0:00:00`

> **说明**：Date属性只返回日期部分，时间部分归零。

### 6. Year、Month、Day属性

功能：获取实例所表示日期的年份部分、月份部分、日部分。

语法：`dt.Year`、`dt.Month`、`dt.Day`

说明：dt是日期实例。

示例：
```csharp
static void Main(string[] args)
{
    DateTime d2 = new DateTime(2015, 10, 1, 8, 15, 20);
    Console.WriteLine("年、月、日分别为: {0},{1},{2}", d2.Year, d2.Month, d2.Day);
    Console.ReadLine();
}
```
运行结果（图9-26）：`年、月、日分别为: 2015, 10, 1`

### 7. Hour、Minute、Second属性

功能：获取实例所表示日期的小时部分、分钟部分、秒部分。

语法：`dt.Hour`、`dt.Minute`、`dt.Second`

说明：dt是日期实例。

示例：
```csharp
static void Main(string[] args)
{
    DateTime d2 = new DateTime(2015, 10, 1, 8, 15, 20);
    Console.WriteLine("小时、分钟、秒分别为: {0},{1},{2}", d2.Hour, d2.Minute, d2.Second);
    Console.ReadLine();
}
```
运行结果（图9-27）：`小时、分钟、秒分别为: 8, 15, 20`

### 8. 静态属性与实例属性对比

| 属性类型 | 属性名 | 调用方式 | 说明 |
|---|---|---|---|
| 静态属性 | Today | `DateTime.Today` | 通过类名直接调用，获取系统当前日期 |
| 静态属性 | Now | `DateTime.Now` | 通过类名直接调用，获取系统当前时间 |
| 实例属性 | Date | `d2.Date` | 通过实例对象调用，获取日期部分 |
| 实例属性 | Year | `d2.Year` | 通过实例对象调用，获取年份 |
| 实例属性 | Month | `d2.Month` | 通过实例对象调用，获取月份 |
| 实例属性 | Day | `d2.Day` | 通过实例对象调用，获取日 |
| 实例属性 | Hour | `d2.Hour` | 通过实例对象调用，获取小时 |
| 实例属性 | Minute | `d2.Minute` | 通过实例对象调用，获取分钟 |
| 实例属性 | Second | `d2.Second` | 通过实例对象调用，获取秒 |

> **要点**：静态属性（Today/Now）通过类名 `DateTime` 直接调用；实例属性（Date/Year/Month/Day/Hour/Minute/Second）必须先创建DateTime实例对象，再通过对象名调用。
