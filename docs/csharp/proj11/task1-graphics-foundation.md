---
title: 任务一 图形设计基础
description: 算法与程序设计《C#》项目十一 C#图形操作 任务一 图形设计基础 知识点总结。掌握GDI和GDI+的概念、图形图像处理命名空间以及绘制图形的基本步骤。
keywords: [C#, GDI, GDI+, 图形设计, 命名空间, 绘图步骤, 对口升学]
sidebar_label: 任务一 图形设计基础
sidebar_position: 1
slug: /csharp/proj11/task1-graphics-foundation
tags: [C#, 项目十一, 任务一, 对口升学]
---

## 知识点

### 1. GDI与GDI+的概念

**GDI**（Graphics Device Interface，图形设备接口）是Windows的子系统，负责在视讯显示器和打印机上显示图形。

**GDI+** 是GDI的后继者和改进者，是Windows 2000及以后版本的一个子系统。同原有的GDI一样，主要负责对显示器和打印机进行管理，它是C#.NET为操作图形提供的应用程序编程接口（API）。GDI+主要用于在窗体上绘制各种图形图像，也可以用于绘制各种数据图形、数字仿真等。

### 2. GDI+的三个组成部分

GDI+主要由以下三部分组成：

| 组成部分 | 说明 |
|---|---|
| 二维矢量图形 | 使用GDI+处理2D的图形和图像 |
| 图像处理 | 提供高级GDI+图像处理功能 |
| 版式 | 使用各种字体、字号和样式来显示文本 |

> **注意**：使用GDI+处理二维（2D）的图形和图像，使用DirectX处理三维（3D）的图形图像。

### 3. 图形图像处理常用命名空间

| 命名空间 | 说明 |
|---|---|
| System | 包括常用基础数据类型和24个子名称空间 |
| System.Drawing | 提供对GDI+基本图形功能的访问，主要有Graphics类、Bitmap类、从Brush类继承的类、Icon类、Image类、Pen类等 |
| System.Drawing.Drawing2D | 提供高级的二维和矢量图形功能，主要有梯度型画刷、Matrix类（用于定义几何变换）和GraphicsPath类等 |
| System.Drawing.Imaging | 提供高级GDI+图像处理功能 |
| System.WinForms | 提供许多与数据处理相关的结构的类 |
| System.Timers | 提供精确的计时操作 |
| System.Drawing.Text | 提供高级GDI+字体和文本排版功能 |

### 4. 绘制图形的基本步骤

绘制图形需要按照以下五个步骤进行：

**步骤1**：创建Graphics对象

**步骤2**：创建绘图工具，即创建画笔（Pen）或画刷（Brush）来定义画图用的颜色、线条等

**步骤3**：用Graphics类提供的方法画点、画线、画矩形、画圆等绘图

**步骤4**：清空Graphics对象

**步骤5**：释放资源

### 5. Graphics对象的作用

Graphics对象与特定的设备上下文关联，是用于创建图形图像的对象。Graphics类封装了绘制直线、曲线、图形、图像和文本的方法，是进行一切GDI+操作的基础类。

> **要点**：不能直接建立Graphics类的对象，必须通过特定方法创建。创建Graphics对象有三种方法，将在任务二中详细学习。
