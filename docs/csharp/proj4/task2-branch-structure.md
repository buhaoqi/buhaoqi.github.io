---
title: 任务二 分支结构语句
description: 算法与程序设计《C#》项目四 C#的控制结构 任务二 分支结构语句知识点总结。介绍if...else语句的语法格式、嵌套使用规则、switch...case多分支结构的语法与执行流程，含判断偶数和成绩等级评定两个完整代码示例。
keywords: [C#, 分支结构, if语句, if...else, 嵌套if, switch, case, break, default, 多分支结构, 条件表达式, 对口升学]
sidebar_label: 任务二 分支结构语句
sidebar_position: 2
slug: /csharp/proj4/task2-branch-structure
tags: [C#, 项目四, 任务二, 对口升学]
---

## 知识点

### 1.什么是分支结构？

生活中经常能遇到有多种选择的情况，有好几条分支摆在面前，需要进行分支选择，在程序代码中就叫作分支结构。C#中提供了两种分支结构：

- **if...else** 分支结构
- **switch** 分支结构

根据条件的真假值，来判断执行哪个分支的语句。

### 子任务一 if...else语句

### 2.if...else语句的语法格式是什么？

```
if (条件表达式)
    语句1;
else
    语句2;
```

- 若条件表达式结果为 `true`，执行语句1
- 若条件表达式的计算结果为 `false`，执行语句2

### 3.if...else语句如何嵌套使用？

if...else语句可以进行多次嵌套使用。C#中规定：**else与最近的、没有else与之匹配的if进行匹配**。

### 4.【示例】判断用户输入的x值是不是偶数

```csharp
static void Main(string[] args)
{
    Console.WriteLine("请输入x的值：");
    int x = int.Parse(Console.ReadLine());
    if (x % 2 == 0)
        Console.WriteLine(x + "是偶数");
    else
        Console.WriteLine("{0}不是偶数", x);
    Console.ReadKey();
}
```

> 以x=5为例，运行结果输出"5不是偶数"。

### 子任务二 switch...case语句

### 5.switch...case语句的语法格式是什么？

```
switch (表达式)
{
    case 常量表达式1: 语句1; break;
    case 常量表达式2: 语句2; break;
    ...
    case 常量表达式n: 语句n; break;
    default: 语句n+1; break;
}
```

### 6.switch分支结构的执行流程是什么？

1. 先计算表达式的值
2. 按顺序在case中选择与之相匹配的情况
3. 执行该case之后对应的语句
4. 如果没有匹配的case，执行default对应的语句
5. 如果没有default语句，执行该分支结构之后的语句

### 7.switch语句中break语句的作用是什么？

在每一个case块（包括default块）之后，都必须有一个跳转语句（通常是 `break`），因为C#不支持case块之间的跳转。

> 例外：当case语句中没有代码时，可以不包含跳转语句，用于一次判断多个条件。如果满足这些条件中的任何一个，就会执行后面的代码。

### 8.【示例】成绩等级评定

录入成绩：
- 100分 → 满分
- 90~100分 → 优秀
- 80~90分 → 良好
- 60~80分 → 及格
- 不够60分 → 不及格

```csharp
static void Main(string[] args)
{
    Console.WriteLine("请输入学生成绩（0-100的整数）：");
    int cj = Convert.ToInt16(Console.ReadLine());
    switch (cj / 10)
    {
        case 10:
            Console.WriteLine("该生为满分");
            break;
        case 9:
            Console.WriteLine("该生被判定为优秀");
            break;
        case 8:
            Console.WriteLine("该生被判定为良好");
            break;
        case 7:
        case 6:
            Console.WriteLine("该生被判定及格");
            break;
        default:
            Console.WriteLine("该生不及格");
            break;
    }
    Console.ReadKey();
}
```

> 以输入99为例，`cj / 10` 结果为9，输出"该生被判定为优秀"。
>
> 注意：case 7和case 6合并处理（case 7没有代码，不包含break，直接 fall-through 到 case 6 的语句）。
