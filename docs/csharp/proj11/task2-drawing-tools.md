---
title: 任务二 绘图工具及使用
description: 算法与程序设计《C#》项目十一 C#图形操作 任务二 绘图工具及使用 知识点总结。掌握Graphics对象创建的三种方法、Pen类、Brush类（SolidBrush/HatchBrush/LinearGradientBrush）以及绘制直线、矩形、椭圆、圆弧、扇形、多边形的方法。
keywords: [C#, Graphics类, Pen, Brush, SolidBrush, HatchBrush, LinearGradientBrush, DrawLine, DrawRectangle, DrawEllipse, 对口升学]
sidebar_label: 任务二 绘图工具及使用
sidebar_position: 2
slug: /csharp/proj11/task2-drawing-tools
tags: [C#, 项目十一, 任务二, 对口升学]
---

## 知识点

绘制图形时要先创建Graphics对象，然后再使用画笔、画刷或Font类来初始化其环境，最后使用Graphics提供的方法进行绘制。

## 子任务一 Graphics类

### 1. Graphics类的概念

Graphics类是GDI+的核心，在绘图之前，必须在指定的窗体上创建一个Graphics对象，才能调用Graphics类的方法画图。Graphics对象与特定的设备上下文关联，封装了绘制直线、曲线、图形、图像和文本的方法，是进行一切GDI+操作的基础类。

### 2. 创建Graphics对象的三种方法

#### 方法1：Paint事件

在窗体或控件的Paint事件中创建，将其作为PaintEventArgs的一部分。

```csharp
private void Form1_Paint(object sender, PaintEventArgs e)
{
    Graphics g = e.Graphics;
}
```

#### 方法2：CreateGraphics()方法

在已经存在的窗体或控件上绘图，使用 `CreateGraphics()` 方法获取对Graphics对象的引用。

```csharp
private void Form1_Load(object sender, EventArgs e)
{
    Graphics g = this.CreateGraphics();
}
```

#### 方法3：Graphics.FromImage方法

由从Image继承的任何对象创建Graphics对象，调用 `Graphics.FromImage` 方法。

```csharp
private void Form1_Load(object sender, EventArgs e)
{
    Bitmap mbit = new Bitmap(@"C:\1s.bmp");
    Graphics g = Graphics.FromImage(mbit);
}
```

### 3. Graphics类的常用方法（表11-1）

| 方法 | 功能描述 |
|---|---|
| Clear | 清除整个绘图画面并以指定的背景色填充 |
| Dispose | 释放Graphics对象使用的所有资源 |
| DrawArc | 绘制一段弧线 |
| DrawBezier | 绘制贝赛尔样条 |
| DrawCurve | 绘制基数样条 |
| DrawEllipse | 绘制椭圆 |
| DrawImage | 在指定位置按原始大小绘制Image对象 |
| DrawLine | 绘制一条连接两个指定坐标的线条 |
| DrawLines | 绘制一系列连接一组Point结构的线段 |
| DrawPath | 绘制Graphics路径对象 |
| DrawPie | 绘制扇形 |
| DrawPolygon | 绘制多边形 |
| DrawRectangle | 绘制矩形 |
| DrawRectangles | 绘制一系列矩形 |
| DrawString | 在指定位置用指定的Brush和Font对象绘制文本字符串 |
| FillEllipse | 填充椭圆 |
| FillPath | 填充Graphics路径对象的内部 |
| FillPie | 填充扇形区内部 |
| FillPolygon | 填充多边形内部 |
| FillRectangle | 填充矩形内部 |
| FromImage | 从指定的Image对象创建新Graphics对象 |
| Save | 保存Graphics对象的当前状态 |

### 4. 绘制直线示例

```csharp
private void button1_Click(object sender, EventArgs e)
{
    Graphics g = this.CreateGraphics();
    Pen mypen = new Pen(Color.Blue, 3);
    Point pt1 = new Point(100, 100);
    Point pt2 = new Point(400, 100);
    g.DrawLine(mypen, pt1, pt2);
    g.Dispose();
}
```

## 子任务二 笔（Pen）

### 1. Pen类的概念

笔又称为画笔，使用Pen类表示，主要用于设置绘制图形的线条、颜色样式等环境。

### 2. Pen类构造函数

语法格式：`public Pen(Color color, float width)`

- `color`：用于设置Pen的颜色
- `width`：用于设置Pen的宽度

### 3. Color结构常用属性（表11-2）

| 属性 | 说明 | 属性 | 说明 | 属性 | 说明 |
|---|---|---|---|---|---|
| Black | 黑色 | Green | 绿色 | Pink | 粉红色 |
| Blue | 蓝色 | LightGray | 浅灰色 | Red | 红色 |
| Cyan | 青色 | Magenta | 洋红色 | White | 白色 |
| Gray | 灰色 | Orange | 橘黄色 | Yellow | 黄色 |

### 4. FromArgb自定义颜色

除了使用固定符号常量来表示颜色外，还可以使用 `FromArgb` 函数来自定义颜色。四种重载形式：

| 格式 | 说明 |
|---|---|
| `Color.FromArgb(int)` | 从32位ARGB值创建颜色 |
| `Color.FromArgb(int, Color)` | 从指定的Color结构创建，使用新指定的alpha值 |
| `Color.FromArgb(int, int, int)` | 从RGB值创建，alpha默认255（不透明） |
| `Color.FromArgb(int, int, int, int)` | 从ARGB四个分量创建 |

### 5. Pen对象创建示例

```csharp
Pen mypen = new Pen(Color.Red, 5);  // 红色，宽度5
```

## 子任务三 画刷（Brush）

### 1. Brush类的概念

画刷用Brush类表示，用指定的颜色填充指定形状的几何图形。Brush类是一个**抽象类**，不能直接实例化，需使用从Brush类派生出的子类。

### 2. SolidBrush类（单色画刷）

用于定义单色画笔，以填充指定的图形形状（矩形、椭圆、扇形、多边形和封闭路径）。

语法：`public SolidBrush(Color color)`

### 3. HatchBrush类（阴影画刷）

提供特定样式的图形，用来填满整个封闭区域。位于 `System.Drawing.Drawing2D` 命名空间下。

语法：`public HatchBrush(HatchStyle hatchstyle, Color foreColor)`

- `hatchstyle`：HatchStyle枚举值，共56种图案（如BackwardDiagonal、Cross、DarkDownwardDiagonal等）
- `foreColor`：前景色

### 4. LinearGradientBrush类（线性渐变画刷）

提供渐变色彩的特效，填满图形的内部区域。位于 `System.Drawing.Drawing2D` 命名空间。

语法：`public LinearGradientBrush(Point point1, Point point2, Color color1, Color color2)`

- `point1`：渐变开始点坐标
- `point2`：渐变结束点坐标
- `color1`：渐变开始色彩
- `color2`：渐变结束色彩

### 5. 三种画刷使用示例

```csharp
// 需在文件顶部添加：using System.Drawing.Drawing2D;

// SolidBrush填充矩形
private void button1_Click(object sender, EventArgs e)
{
    Graphics g = this.CreateGraphics();
    Pen mypen = new Pen(Color.Red, 3);
    g.DrawRectangle(mypen, 10, 10, 100, 100);
    Brush mybs = new SolidBrush(Color.Green);
    g.FillRectangle(mybs, 11, 11, 99, 99);  // 填充区域要比绘图区域稍小
    g.Dispose();
}

// HatchBrush填充矩形
private void button2_Click(object sender, EventArgs e)
{
    Graphics g = this.CreateGraphics();
    Pen mypen = new Pen(Color.FromArgb(255, 0, 0), 3);
    g.DrawRectangle(mypen, 150, 10, 100, 100);
    Brush mybs2 = new HatchBrush(HatchStyle.BackwardDiagonal, Color.Green);
    g.FillRectangle(mybs2, 151, 11, 99, 99);
    g.Dispose();
}

// LinearGradientBrush填充矩形
private void button3_Click(object sender, EventArgs e)
{
    Graphics g = this.CreateGraphics();
    Pen mypen = new Pen(Color.Black, 5);
    g.DrawRectangle(mypen, 300, 10, 100, 100);
    Point p1 = new Point(100, 100);
    Point p2 = new Point(150, 150);
    LinearGradientBrush mylgb = new LinearGradientBrush(p1, p2, Color.Red, Color.Green);
    mylgb.WrapMode = WrapMode.Tile;
    g.FillRectangle(mylgb, 300, 10, 100, 100);
    g.Dispose();
}
```

## 子任务四 绘制图形

### 1. 绘制直线（DrawLine）

格式1：`public void DrawLine(Pen pen, Point pt1, Point pt2)`

格式2：`public void DrawLine(Pen pen, int x1, int y1, int x2, int y2)`

Point定义方法：`Point pt1 = new Point(int x, int y)`

### 2. 绘制矩形（DrawRectangle）

语法：`public void DrawRectangle(Pen pen, int x, int y, int width, int height)`

- `pen`：Pen对象，确定矩形的颜色和线条宽度
- `x, y`：矩形左上角的坐标
- `width`：矩形宽度
- `height`：矩形高度

### 3. 绘制椭圆（DrawEllipse）

语法：`public void DrawEllipse(Pen pen, int x, int y, int width, int height)`

- 通过指定边框（外接矩形）来绘制椭圆
- 将椭圆的高宽比设为1:1可画出正圆

### 4. 绘制圆弧（DrawArc）

语法：`public void DrawArc(Pen pen, Rectangle rect, float startAngle, float sweepAngle)`

- `rect`：Rectangle结构，定义圆弧的边界
- `startAngle`：从x轴到弧线起始点沿顺时针方向度量的角（度为单位）
- `sweepAngle`：从startAngle到弧线结束点沿顺时针方向度量的角度

Rectangle定义方法：`Rectangle rect = new Rectangle(int x, int y, int width, int height)`

### 5. 绘制扇形（DrawPie）

语法：`public void DrawPie(Pen pen, float x, float y, float width, float height, float startAngle, float sweepAngle)`

### 6. 绘制多边形（DrawPolygon）

语法：`public void DrawPolygon(Pen pen, Point[] points)`

- `points`：Point结构数组，表示多边形的顶点
- 如果第一个点和最后一个点不重合，则这两个点指定多边形的最后一条边

### 7. 六种图形绘制综合示例

```csharp
// 画直线
private void button1_Click(object sender, EventArgs e)
{
    Graphics g = this.CreateGraphics();
    Pen mypen = new Pen(Color.Red, 3);
    g.DrawLine(mypen, 10, 50, 10, 150);
    g.Dispose();
}

// 画矩形
private void button2_Click(object sender, EventArgs e)
{
    Graphics g = this.CreateGraphics();
    Pen mypen = new Pen(Color.Red, 3);
    g.DrawRectangle(mypen, 50, 50, 150, 100);
    g.Dispose();
}

// 画椭圆
private void button3_Click(object sender, EventArgs e)
{
    Graphics g = this.CreateGraphics();
    Pen mypen = new Pen(Color.Red, 3);
    Rectangle myrec = new Rectangle(250, 50, 150, 100);
    g.DrawEllipse(mypen, myrec);
    g.Dispose();
}

// 画弧线
private void button4_Click(object sender, EventArgs e)
{
    Graphics g = this.CreateGraphics();
    Pen mypen = new Pen(Color.Magenta, 3);
    Rectangle myrec = new Rectangle(10, 200, 100, 100);
    g.DrawArc(mypen, myrec, 0, -180);
    g.Dispose();
}

// 画扇形
private void button5_Click(object sender, EventArgs e)
{
    Graphics g = this.CreateGraphics();
    Pen mypen = new Pen(Color.Magenta, 3);
    Rectangle myrec = new Rectangle(150, 200, 100, 100);
    g.DrawPie(mypen, myrec, 0, -180);
    g.Dispose();
}

// 画多边形
private void button6_Click(object sender, EventArgs e)
{
    Graphics g = this.CreateGraphics();
    Pen mypen = new Pen(Color.Magenta, 3);
    Point p1 = new Point(340, 200);
    Point p2 = new Point(320, 240);
    Point p3 = new Point(285, 240);
    Point p4 = new Point(315, 265);
    Point p5 = new Point(295, 300);
    Point p6 = new Point(340, 280);
    Point p7 = new Point(385, 300);
    Point p8 = new Point(365, 265);
    Point p9 = new Point(395, 240);
    Point p10 = new Point(360, 240);
    Point[] pts = { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10 };
    g.DrawPolygon(mypen, pts);
    g.Dispose();
}
```

### 8. Draw与Fill方法对比

| 类型 | 方法前缀 | 用途 | 需要的工具 |
|---|---|---|---|
| 绘制（描边） | Draw | 绘制图形轮廓 | Pen（画笔） |
| 填充 | Fill | 填充图形内部 | Brush（画刷） |

> **要点**：Draw系列方法需要Pen对象，Fill系列方法需要Brush对象。
