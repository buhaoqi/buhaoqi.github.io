---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务二 绘图工具   # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务二 绘图工具   # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  2  # 侧边栏中排在第1位
---

## 8. 画笔 (Pen类)的用途
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **核心用途** | 绘制**图形边框/轮廓**（如直线、矩形边框、椭圆边框），仅绘制线条，不填充区域 |
| **核心属性** | 1. `Color`：画笔颜色；<br />2. `Width`：线条宽度（像素）；<br />3. `DashStyle`：线条样式（实线、虚线、点线等）；<br />4. `StartCap/EndCap`：线条首尾样式（箭头、圆形等） |
| **创建语法** | `Pen pen = new Pen(Color.Red);`（默认宽度1）<br />`Pen pen = new Pen(Color.Blue, 3);`（指定宽度） |
| **资源释放** | 使用后需调用`pen.Dispose()`释放资源 |

### 代码示例（Pen类）
```csharp
private void Form1_Paint(object sender, PaintEventArgs e)
{
    Graphics g = e.Graphics;
    // 创建红色实线画笔（宽度2）
    Pen pen1 = new Pen(Color.Red, 2);
    g.DrawLine(pen1, 10, 10, 200, 10);

    // 创建蓝色虚线画笔
    Pen pen2 = new Pen(Color.Blue, 1);
    pen2.DashStyle = System.Drawing.Drawing2D.DashStyle.Dash;
    g.DrawRectangle(pen2, 10, 30, 100, 50);

    // 创建带箭头的画笔
    Pen pen3 = new Pen(Color.Green, 2);
    pen3.EndCap = System.Drawing.Drawing2D.LineCap.ArrowAnchor;
    g.DrawLine(pen3, 10, 100, 200, 100);

    // 释放资源
    pen1.Dispose();
    pen2.Dispose();
    pen3.Dispose();
}
```

## 9. 画刷 (Brush类)的用途
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **核心用途** | 填充**图形内部区域**（如矩形、椭圆、扇形），也用于绘制文本的填充色       |
| **类型** | 1. `SolidBrush`：纯色画刷；<br />2. `LinearGradientBrush`：线性渐变画刷；<br />3. `HatchBrush`：纹理画刷；<br />4. `TextureBrush`：图片纹理画刷 |
| **创建语法** | `SolidBrush brush = new SolidBrush(Color.Yellow);`（纯色）<br />`LinearGradientBrush brush = new LinearGradientBrush(new Point(0,0), new Point(100,100), Color.Red, Color.Yellow);`（渐变） |
| **资源释放** | 使用后需调用`brush.Dispose()`释放资源 |

### 代码示例（Brush类）
```csharp
private void Form1_Paint(object sender, PaintEventArgs e)
{
    Graphics g = e.Graphics;
    // 1. 纯色画刷填充矩形
    SolidBrush solidBrush = new SolidBrush(Color.LightBlue);
    g.FillRectangle(solidBrush, 10, 10, 100, 50);

    // 2. 线性渐变画刷填充椭圆
    LinearGradientBrush gradientBrush = new LinearGradientBrush(
        new Point(120, 10), new Point(220, 60), 
        Color.Orange, Color.Yellow);
    g.FillEllipse(gradientBrush, 120, 10, 100, 50);

    // 3. 纹理画刷填充扇形
    HatchBrush hatchBrush = new HatchBrush(HatchStyle.Cross, Color.Green, Color.White);
    g.FillPie(hatchBrush, 230, 10, 100, 50, 0, 180);

    // 释放资源
    solidBrush.Dispose();
    gradientBrush.Dispose();
    hatchBrush.Dispose();
}
```

## 10. 如何绘制直线
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **核心方法** | `Graphics.DrawLine(Pen pen, float x1, float y1, float x2, float y2)` |
| **参数说明** | - pen：画笔（指定颜色、宽度）；<br />- x1/y1：起点坐标；<br />- x2/y2：终点坐标 |

### 代码示例
```csharp
private void Form1_Paint(object sender, PaintEventArgs e)
{
    Graphics g = e.Graphics;
    // 设置抗锯齿（可选，让线条更平滑）
    g.SmoothingMode = System.Drawing.Drawing2D.SmoothingMode.AntiAlias;
    
    // 创建画笔
    Pen pen = new Pen(Color.Red, 2);
    // 绘制直线：起点(20,20)，终点(200,20)
    g.DrawLine(pen, 20, 20, 200, 20);
    // 绘制斜线：起点(20,40)，终点(200, 100)
    g.DrawLine(pen, 20, 40, 200, 100);
    
    pen.Dispose();
}
```

## 11. 如何绘制矩形
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **绘制边框** | `Graphics.DrawRectangle(Pen pen, float x, float y, float width, float height)` |
| **填充矩形** | `Graphics.FillRectangle(Brush brush, float x, float y, float width, float height)` |
| **参数说明** | - x/y：矩形左上角坐标；<br />- width/height：矩形宽/高 |

### 代码示例
```csharp
private void Form1_Paint(object sender, PaintEventArgs e)
{
    Graphics g = e.Graphics;
    g.SmoothingMode = System.Drawing.Drawing2D.SmoothingMode.AntiAlias;

    // 1. 绘制矩形边框
    Pen pen = new Pen(Color.Blue, 2);
    g.DrawRectangle(pen, 20, 20, 150, 80);

    // 2. 填充矩形
    SolidBrush brush = new SolidBrush(Color.LightGreen);
    g.FillRectangle(brush, 200, 20, 150, 80);

    pen.Dispose();
    brush.Dispose();
}
```

## 12. 如何绘制椭圆
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **绘制边框** | `Graphics.DrawEllipse(Pen pen, float x, float y, float width, float height)` |
| **填充椭圆** | `Graphics.FillEllipse(Brush brush, float x, float y, float width, float height)` |
| **参数说明** | - x/y：椭圆外接矩形的左上角坐标；<br />- width/height：外接矩形的宽/高（宽=高时为圆形） |

### 代码示例
```csharp
private void Form1_Paint(object sender, PaintEventArgs e)
{
    Graphics g = e.Graphics;
    g.SmoothingMode = System.Drawing.Drawing2D.SmoothingMode.AntiAlias;

    // 1. 绘制圆形（宽=高）
    Pen pen = new Pen(Color.Purple, 2);
    g.DrawEllipse(pen, 20, 20, 100, 100);

    // 2. 填充椭圆
    SolidBrush brush = new SolidBrush(Color.Orange);
    g.FillEllipse(brush, 150, 20, 150, 100);

    pen.Dispose();
    brush.Dispose();
}
```

## 13. 如何绘制圆弧
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **核心方法** | `Graphics.DrawArc(Pen pen, float x, float y, float width, float height, float startAngle, float sweepAngle)` |
| **参数说明** | - x/y/width/height：圆弧所在椭圆的外接矩形；<br />- startAngle：起始角度（0°=右侧水平向右，顺时针为正）；<br />- sweepAngle：扫过角度（如90°=四分之一圆弧） |

### 代码示例
```csharp
private void Form1_Paint(object sender, PaintEventArgs e)
{
    Graphics g = e.Graphics;
    g.SmoothingMode = System.Drawing.Drawing2D.SmoothingMode.AntiAlias;

    Pen pen = new Pen(Color.Green, 2);
    // 绘制圆弧：起始角度0°，扫过180°（半圆）
    g.DrawArc(pen, 20, 20, 150, 100, 0, 180);
    // 绘制圆弧：起始角度90°，扫过90°（四分之一圆）
    g.DrawArc(pen, 200, 20, 100, 100, 90, 90);

    pen.Dispose();
}
```

## 14. 如何绘制扇形
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **绘制边框** | `Graphics.DrawPie(Pen pen, float x, float y, float width, float height, float startAngle, float sweepAngle)` |
| **填充扇形** | `Graphics.FillPie(Brush brush, float x, float y, float width, float height, float startAngle, float sweepAngle)` |
| **参数说明** | 同DrawArc，sweepAngle为扫过角度（360°为整圆） |

### 代码示例
```csharp
private void Form1_Paint(object sender, PaintEventArgs e)
{
    Graphics g = e.Graphics;
    g.SmoothingMode = System.Drawing.Drawing2D.SmoothingMode.AntiAlias;

    // 1. 绘制扇形边框
    Pen pen = new Pen(Color.Brown, 2);
    g.DrawPie(pen, 20, 20, 120, 120, 0, 90);

    // 2. 填充扇形
    SolidBrush brush = new SolidBrush(Color.Pink);
    g.FillPie(brush, 150, 20, 120, 120, 90, 180);

    pen.Dispose();
    brush.Dispose();
}
```

## 15. 如何绘制多边形
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **绘制边框** | `Graphics.DrawPolygon(Pen pen, Point[] points)` |
| **填充多边形** | `Graphics.FillPolygon(Brush brush, Point[] points)` |
| **参数说明** | points：多边形顶点坐标数组（按顺序连接，最后自动闭合） |

### 代码示例
```csharp
private void Form1_Paint(object sender, PaintEventArgs e)
{
    Graphics g = e.Graphics;
    g.SmoothingMode = System.Drawing.Drawing2D.SmoothingMode.AntiAlias;

    // 定义五边形顶点
    Point[] points = new Point[]
    {
        new Point(100, 20),
        new Point(150, 50),
        new Point(130, 100),
        new Point(70, 100),
        new Point(50, 50)
    };

    // 1. 绘制多边形边框
    Pen pen = new Pen(Color.DarkBlue, 2);
    g.DrawPolygon(pen, points);

    // 2. 填充多边形（偏移位置）
    Point[] points2 = new Point[]
    {
        new Point(200, 20),
        new Point(250, 50),
        new Point(230, 100),
        new Point(170, 100),
        new Point(150, 50)
    };
    SolidBrush brush = new SolidBrush(Color.LightCyan);
    g.FillPolygon(brush, points2);

    pen.Dispose();
    brush.Dispose();
}
```