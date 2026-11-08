---
title: 任务五 同步实验
description: 算法与程序设计《C#》项目四 C#的控制结构 任务五 同步实验。通过5道编程实验题练习if...else判断、switch...case星期判定、for循环阶乘、while回文数判断、do...while九九乘法表，巩固C#控制结构编程能力。
keywords: [C#, 同步实验, if...else, switch, for循环, 阶乘, while, 回文数, do...while, 九九乘法表, 对口升学]
sidebar_label: 任务五 同步实验
sidebar_position: 5
slug: /csharp/proj4/task5-exercises
tags: [C#, 项目四, 任务五, 对口升学]
---

## 知识点

### 同步实验

### 1.实验一：判断是否成年（if...else语句）

编写一个程序，使用if...else语句实现功能：判断用户输入的信息是否成年，若未成年，输出"您还未成年！"，成年人输出这个人的姓名、性别和年龄。

**参考代码：**

```csharp
static void Main(string[] args)
{
    Console.Write("请输入姓名：");
    string name = Console.ReadLine();
    Console.Write("请输入性别：");
    string sex = Console.ReadLine();
    Console.Write("请输入年龄：");
    int age = int.Parse(Console.ReadLine());
    if (age >= 18)
        Console.WriteLine("姓名：{0}，性别：{1}，年龄：{2}", name, sex, age);
    else
        Console.WriteLine("您还未成年！");
    Console.ReadKey();
}
```

### 2.实验二：判断星期几（switch...case语句）

编写一个程序，使用switch...case语句实现功能：用户输入1~7的数值，判定对应的是星期几。

**参考代码：**

```csharp
static void Main(string[] args)
{
    Console.Write("请输入1-7的数字：");
    int day = int.Parse(Console.ReadLine());
    switch (day)
    {
        case 1: Console.WriteLine("星期一"); break;
        case 2: Console.WriteLine("星期二"); break;
        case 3: Console.WriteLine("星期三"); break;
        case 4: Console.WriteLine("星期四"); break;
        case 5: Console.WriteLine("星期五"); break;
        case 6: Console.WriteLine("星期六"); break;
        case 7: Console.WriteLine("星期日"); break;
        default: Console.WriteLine("输入有误"); break;
    }
    Console.ReadKey();
}
```

### 3.实验三：计算阶乘（for循环语句）

编写一个程序，使用for循环语句计算 `1*2*3*...*9` 的阶乘结果。

**参考代码：**

```csharp
static void Main(string[] args)
{
    int result = 1;
    for (int i = 1; i <= 9; i++)
    {
        result *= i;
    }
    Console.WriteLine("1到9的阶乘结果为：{0}", result);
    Console.ReadKey();
}
```

### 4.实验四：判断回文数（while循环语句）

编写一个程序，使用while循环语句判断一个数是不是回文数。

**参考代码：**

```csharp
static void Main(string[] args)
{
    Console.Write("请输入一个整数：");
    int n = int.Parse(Console.ReadLine());
    int original = n, reversed = 0;
    while (n > 0)
    {
        reversed = reversed * 10 + n % 10;
        n = n / 10;
    }
    if (original == reversed)
        Console.WriteLine("{0}是回文数", original);
    else
        Console.WriteLine("{0}不是回文数", original);
    Console.ReadKey();
}
```

### 5.实验五：九九乘法表（do...while循环语句）

编写一个程序，使用do...while循环语句输出九九乘法表。

**参考代码：**

```csharp
static void Main(string[] args)
{
    int i = 1;
    do
    {
        int j = 1;
        do
        {
            Console.Write("{0}×{1}={2}\t", j, i, j * i);
            j++;
        } while (j <= i);
        Console.WriteLine();
        i++;
    } while (i <= 9);
    Console.ReadKey();
}
```
