---
title: 任务五 同步训练
description: 算法与程序设计《C#》项目十一 C#图形操作 任务五 同步训练。5道填空题、5道选择题、5道简答题，巩固GDI+、Graphics类、Pen类、Brush类、Font类、绘图方法等知识点。
keywords: [C#, 图形操作, 同步训练, 填空题, 选择题, 简答题, GDI+, 对口升学]
sidebar_label: 任务五 同步训练
sidebar_position: 5
slug: /csharp/proj11/task5-exercises
tags: [C#, 项目十一, 任务五, 对口升学]
---

## 知识点

### 一、填空题

**1.** 创建Graphics对象有三种方法，分别是在窗体或控件的________事件中创建、调用控件或窗体的________方法和从Image继承的任何对象创建Graphics对象，调用________方法即可。

**2.** 使用Graphics对象绘制矩形的方法是________，绘制直线的方法是________，绘制扇形的方法是________，绘制多边形的方法是________。

**3.** 定义一个颜色为蓝色，宽度为3的画笔对象myPen的语句是________。

**4.** 定义一个填充色为红色的实心画刷对象mybs的语句是________。

**5.** 定义一个宋体，14号字，粗体的对象myfont的语句是________。

---

### 二、单选题

**1.** 在GDI+的所有类中，（　　）类是核心，在绘制任何图形之前，一定要先用它创建一个对象。  
A. Brush　　B. Pen　　C. Graphics　　D. Font

**2.** 在设置字体对象时，设置粗体的FontStyle成员是（　　）。  
A. Bold　　B. Regular　　C. Italic　　D. Strikeout

**3.** 绘制圆弧的方法是（　　）。  
A. DrawPie　　B. DrawArc　　C. DrawPolygon　　D. DrawLine

**4.** 关于语句 `myGraphics.DrawString("你好", myFont, myBrush, 100, 100);` 说法正确的是（　　）。  
A. 画图是在图片框中完成的，故该语句是将"你好"显示在图片框中  
B. 该语句中的myBrush是定义好的一个画笔对象  
C. 通过该语句知道Graphics的对象为myGraphics  
D. 该文字显示在高度和宽度均为100的一个矩形区域内

**5.** 在窗体上绘制各种样式的直线或曲线等图形时，下列命名空间可以不引用的是（　　）。  
A. System.Drawing　　B. System.Drawing.Drawing2D　　C. System.Windows.Form　　D. System.IO

---

### 三、简答题

**1.** 绘制一个图形需要哪些基本步骤？

**2.** 在窗体上绘制图形有哪些方法？

**3.** 如何设置画笔的颜色？

**4.** 打开图像有哪些方法？

**5.** 如何转换图像格式？

---

### 答案与解析

#### 一、填空题答案

**1.** **Paint**；**CreateGraphics()**；**Graphics.FromImage**
> 解析：创建Graphics对象的三种方法分别为Paint事件、CreateGraphics()方法和Graphics.FromImage方法

**2.** **DrawRectangle**；**DrawLine**；**DrawPie**；**DrawPolygon**
> 解析：Graphics类中以Draw开头的方法用于绘制图形轮廓

**3.** `Pen myPen = new Pen(Color.Blue, 3);`

**4.** `Brush mybs = new SolidBrush(Color.Red);`
> 解析：SolidBrush是Brush的子类，用于创建单色画刷

**5.** `Font myfont = new Font("宋体", 14, FontStyle.Bold);`
> 解析：Font构造函数三个参数依次为字体名称、字号、字形样式

#### 二、单选题答案

**1.** **C. Graphics**
> 解析：Graphics类是GDI+的核心，是进行一切GDI+操作的基础类

**2.** **A. Bold**
> 解析：FontStyle.Bold表示加粗文本；Regular为普通文本，Italic为倾斜，Strikeout为删除线

**3.** **B. DrawArc**
> 解析：DrawArc绘制圆弧，DrawPie绘制扇形，DrawPolygon绘制多边形，DrawLine绘制直线

**4.** **C. 通过该语句知道Graphics的对象为myGraphics**
> 解析：DrawString方法的调用对象是myGraphics，说明Graphics对象为myGraphics；myBrush是画刷对象不是画笔；文本显示在坐标(100,100)处，不是在矩形区域内

**5.** **D. System.IO**
> 解析：System.IO是文件操作命名空间，与图形绘制无关；System.Drawing和System.Drawing.Drawing2D是图形处理必需的，System.Windows.Form是窗体应用程序必需的

#### 三、简答题答案

**1.** 绘制图形的基本步骤：
1. 创建Graphics对象
2. 创建绘图工具（Pen画笔或Brush画刷），定义颜色、线条等
3. 使用Graphics类的方法（DrawLine、DrawRectangle等）绘制图形
4. 清空Graphics对象（Clear方法）
5. 释放资源（Dispose方法）

**2.** 在窗体上绘制图形的方法：
- Paint事件中创建Graphics对象：`Graphics g = e.Graphics`
- CreateGraphics()方法：`Graphics g = this.CreateGraphics()`
- Graphics.FromImage方法：`Graphics g = Graphics.FromImage(image)`

**3.** 设置画笔颜色的方法：
- 使用Color结构的预定义颜色：`new Pen(Color.Red, 3)`
- 使用FromArgb自定义颜色：`new Pen(Color.FromArgb(255, 0, 0), 3)`（RGB方式）
- 使用FromArgb带透明度：`new Pen(Color.FromArgb(128, 255, 0, 0), 3)`（ARGB方式）

**4.** 打开图像的方法：
- 使用Image.FromFile方法：`Image img = Image.FromFile(@"d:\image1.bmp")`
- 使用Bitmap构造函数：`Bitmap bmp = new Bitmap(@"d:\image1.bmp")`
- 使用FileStream读取后创建Image

**5.** 转换图像格式的方法：
- 使用Bitmap对象的Save方法指定格式：
  ```csharp
  Bitmap bmp = new Bitmap("image.bmp");
  bmp.Save("image.jpg", System.Drawing.Imaging.ImageFormat.Jpeg);
  ```
- 支持的格式包括：Bmp、Jpeg、Gif、Png、Tiff、Icon等（通过ImageFormat枚举指定）
