---
title: 任务四 同步实验
description: 算法与程序设计《C#》项目三 C#的语言基础 任务四 同步实验。通过海伦公式计算三角形面积和求圆面积两个实践练习，巩固C#数据类型、变量、运算符和表达式的应用。
keywords: [C#, 同步实验, 海伦公式, 三角形面积, 圆面积, 控制台输入, Console.ReadLine, Math.Sqrt, 对口升学]
sidebar_label: 任务四 同步实验
sidebar_position: 4
slug: /csharp/proj3/task4-exercises
tags: [C#, 项目三, 任务四, 对口升学]
---

## 知识点

### 同步实验

### 1.实验一：用海伦公式计算三角形面积

给定三角形的三条边长a、b、c，用海伦公式计算三角形的面积（假设给定的三条边能构成三角形）。

**海伦公式：**

```
s = (a + b + c) / 2
面积 = sqrt(s * (s-a) * (s-b) * (s-c))
```

**参考代码：**

```csharp
using System;

namespace proj3_1
{
    class Program
    {
        static void Main(string[] args)
        {
            double a, b, c, s, area;
            Console.Write("请输入第一条边长a：");
            a = double.Parse(Console.ReadLine());
            Console.Write("请输入第二条边长b：");
            b = double.Parse(Console.ReadLine());
            Console.Write("请输入第三条边长c：");
            c = double.Parse(Console.ReadLine());
            s = (a + b + c) / 2;
            area = Math.Sqrt(s * (s - a) * (s - b) * (s - c));
            Console.WriteLine("三角形的面积为：{0}", area);
            Console.ReadLine();
        }
    }
}
```

### 2.实验二：求圆面积

用控制台获取从键盘输入的半径，求圆面积。

**参考代码：**

```csharp
using System;

namespace proj3_2
{
    class Program
    {
        static void Main(string[] args)
        {
            const double PI = 3.1415926;
            double r, area;
            Console.Write("请输入圆的半径：");
            r = double.Parse(Console.ReadLine());
            area = PI * r * r;
            Console.WriteLine("圆的面积为：{0}", area);
            Console.ReadLine();
        }
    }
}
```
