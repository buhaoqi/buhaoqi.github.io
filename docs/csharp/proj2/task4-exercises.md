---
title: 任务四 同步实验
description: 算法与程序设计《C#》项目二 C#概述 任务四 同步实验。通过创建控制台应用程序和Windows窗体应用程序的实践练习，巩固C#项目创建和基本编程技能。
keywords: [C#, 同步实验, 控制台应用程序, Windows窗体应用程序, Hello, 实践练习, 对口升学]
sidebar_label: 任务四 同步实验
sidebar_position: 4
slug: /csharp/proj2/task4-exercises
tags: [C#, 项目二, 任务四, 对口升学]
---

## 知识点

### 同步实验

### 1.实验一：创建控制台应用程序

创建一个控制台应用程序，输出字符串"Hello！"。

**参考代码：**

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello！");
            Console.ReadLine();
        }
    }
}
```

### 2.实验二：创建Windows窗体应用程序

创建一个Windows窗体应用程序，并在窗体中使用标签输出"Hello！"。

**步骤：**
1. 新建Windows窗体应用程序
2. 从工具箱拖入一个Button和一个Label
3. 将Button的Text属性设为"显示"，Label的Text属性清空
4. 双击Button，添加代码

**核心代码：**

```csharp
label1.Text = "Hello！";
```
