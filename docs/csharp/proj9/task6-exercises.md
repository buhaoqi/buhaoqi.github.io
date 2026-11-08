---
title: 任务六 同步实验
description: 算法与程序设计《C#》项目九 C#常用类的属性和方法 任务六 同步实验。通过4道实验题巩固Math类、String类、Random类、DateTime类的使用。
keywords: [C#, 同步实验, Math类, String类, Random类, DateTime类, 对口升学]
sidebar_label: 任务六 同步实验
sidebar_position: 6
slug: /csharp/proj9/task6-exercises
tags: [C#, 项目九, 任务六, 对口升学]
---

## 知识点

### 实验1：求扇形周长及面积

**题目**：创建一个控制台应用程序，输入一扇形弧度数及半径，求该扇形周长及面积。

**涉及知识点**：Math类（Pow、Sqrt方法）、数学公式计算

**参考代码**：
```csharp
static void Main(string[] args)
{
    Console.Write("请输入扇形的弧度数: ");
    double radian = Convert.ToDouble(Console.ReadLine());
    Console.Write("请输入扇形的半径: ");
    double r = Convert.ToDouble(Console.ReadLine());
    // 扇形弧长 = 弧度 × 半径
    double arcLength = radian * r;
    // 扇形周长 = 弧长 + 2 × 半径
    double perimeter = arcLength + 2 * r;
    // 扇形面积 = 0.5 × 弧度 × 半径的平方
    double area = 0.5 * radian * Math.Pow(r, 2);
    Console.WriteLine("扇形周长为: {0}", perimeter);
    Console.WriteLine("扇形面积为: {0}", area);
    Console.ReadLine();
}
```

### 实验2：验证用户名和密码

**题目**：假设某网站的登录用户名和密码分别是"administrator"和"welcome"，请编程用Compare或Equals方法验证用户输入的用户名和密码是否正确，正确提示"密码正确，登陆成功"，错误提示"输入的用户名或密码错误！"

**涉及知识点**：String类的Equals方法和Compare方法

**参考代码**：
```csharp
static void Main(string[] args)
{
    Console.Write("请输入用户名: ");
    string userName = Console.ReadLine();
    Console.Write("请输入密码: ");
    string passWord = Console.ReadLine();
    // 使用Equals方法比较
    if (string.Equals(userName, "administrator") && string.Equals(passWord, "welcome"))
    {
        Console.WriteLine("密码正确，登陆成功");
    }
    else
    {
        Console.WriteLine("输入的用户名或密码错误！");
    }
    // 也可使用Compare方法
    // if (string.Compare(userName, "administrator") == 0 && string.Compare(passWord, "welcome") == 0)
    Console.ReadLine();
}
```

### 实验3：产生随机整数并按行显示

**题目**：创建一个控制台应用程序，产生20个10到100内的随机整数，并按照五个一行显示。

**涉及知识点**：Random类的Next方法、循环控制

**参考代码**：
```csharp
static void Main(string[] args)
{
    Random Ra = new Random();
    for (int i = 1; i <= 20; i++)
    {
        Console.Write("{0,5}", Ra.Next(10, 101));
        if (i % 5 == 0)
        {
            Console.WriteLine();
        }
    }
    Console.ReadLine();
}
```

> **注意**：题目要求10到100内的随机整数，即包含100，所以上界应设为101（Next的上界不含上界值）。

### 实验4：格式化显示当前日期

**题目**：创建一个控制台应用程序，将系统的当前日期按照"2021年1月26日"格式显示。

**涉及知识点**：DateTime类的Year、Month、Day属性、字符串拼接

**参考代码**：
```csharp
static void Main(string[] args)
{
    DateTime dt = DateTime.Today;
    Console.WriteLine("{0}年{1}月{2}日", dt.Year, dt.Month, dt.Day);
    Console.ReadLine();
}
```

> **扩展**：也可使用string.Format方法实现：
> ```csharp
> string dateStr = string.Format("{0}年{1}月{2}日", dt.Year, dt.Month, dt.Day);
> Console.WriteLine(dateStr);
> ```
