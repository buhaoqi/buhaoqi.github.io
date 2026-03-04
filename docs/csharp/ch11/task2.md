---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务二 绘图工具   # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务二 绘图工具   # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  2  # 侧边栏中排在第1位
---


## 教材示例(P289)

### 绘制线和几何图形

新建一个 Windows 窗体应用程序，在窗体上添加六个命令按钮，双击命令按钮，在各个命令按钮单击事件中输入以下代码：

```csharp
using System;
using System.Drawing;
using System.Windows.Forms;

namespace GDIDrawingDemo
{
    // 主窗体类
    public partial class DrawingForm : Form
    {
        // 构造函数，初始化窗体和控件
        public DrawingForm()
        {
            InitializeComponent();
        }

        // 手动初始化控件（如果不使用设计器，可直接用这段代码）
        private void InitializeComponent()
        {
            // 设置窗体基本属性
            this.Text = "GDI+ 绘图演示";
            this.Size = new Size(500, 400);
            this.StartPosition = FormStartPosition.CenterScreen;

            // 创建6个按钮并设置属性
            Button btnLine = new Button { Text = "画直线", Size = new Size(70, 30), Location = new Point(20, 20) };
            Button btnRectangle = new Button { Text = "画矩形", Size = new Size(70, 30), Location = new Point(100, 20) };
            Button btnEllipse = new Button { Text = "画椭圆", Size = new Size(70, 30), Location = new Point(180, 20) };
            Button btnArc = new Button { Text = "画弧线", Size = new Size(70, 30), Location = new Point(260, 20) };
            Button btnPie = new Button { Text = "画扇形", Size = new Size(70, 30), Location = new Point(340, 20) };
            Button btnPolygon = new Button { Text = "画多边形", Size = new Size(70, 30), Location = new Point(420, 20) };

            // 绑定按钮点击事件
            btnLine.Click += button1_Click;
            btnRectangle.Click += button2_Click;
            btnEllipse.Click += button3_Click;
            btnArc.Click += button4_Click;
            btnPie.Click += button5_Click;
            btnPolygon.Click += button6_Click;

            // 将按钮添加到窗体
            this.Controls.Add(btnLine);
            this.Controls.Add(btnRectangle);
            this.Controls.Add(btnEllipse);
            this.Controls.Add(btnArc);
            this.Controls.Add(btnPie);
            this.Controls.Add(btnPolygon);
        }

        #region 绘图功能方法
        /// <summary>
        /// 按钮1点击事件：绘制直线
        /// </summary>
        private void button1_Click(object sender, EventArgs e)
        {
            // 1. 创建Graphics对象（画布），基于当前窗体
            Graphics g = this.CreateGraphics();
            // 2. 创建画笔：红色，线宽3像素
            Pen mypen = new Pen(Color.Red, 3);
            // 3. 绘制直线：参数(画笔, 起点X, 起点Y, 终点X, 终点Y)
            g.DrawLine(mypen, 10, 50, 10, 150);
            // 4. 释放Graphics资源（重要，避免内存泄漏）
            g.Dispose();
            // 释放画笔资源
            mypen.Dispose();
        }

        /// <summary>
        /// 按钮2点击事件：绘制矩形
        /// </summary>
        private void button2_Click(object sender, EventArgs e)
        {
            Graphics g = this.CreateGraphics();
            Pen mypen = new Pen(Color.Red, 3);
            // 绘制矩形：参数(画笔, 左上角X, 左上角Y, 宽度, 高度)
            g.DrawRectangle(mypen, 50, 50, 150, 100);
            g.Dispose();
            mypen.Dispose();
        }

        /// <summary>
        /// 按钮3点击事件：绘制椭圆
        /// </summary>
        private void button3_Click(object sender, EventArgs e)
        {
            Graphics g = this.CreateGraphics();
            Pen mypen = new Pen(Color.Red, 3);
            // 创建矩形区域（椭圆的外接矩形）
            Rectangle myrec = new Rectangle(250, 50, 150, 100);
            // 绘制椭圆：基于外接矩形绘制
            g.DrawEllipse(mypen, myrec);
            g.Dispose();
            mypen.Dispose();
        }

        /// <summary>
        /// 按钮4点击事件：绘制弧线
        /// </summary>
        private void button4_Click(object sender, EventArgs e)
        {
            Graphics g = this.CreateGraphics();
            Pen mypen = new Pen(Color.Magenta, 3);
            Rectangle myrec = new Rectangle(10, 200, 100, 100);
            // 绘制弧线：参数(画笔, 外接矩形, 起始角度, 扫过角度)
            // 角度说明：0度是右侧水平方向，负数为顺时针，正数为逆时针
            g.DrawArc(mypen, myrec, 0, -180);
            g.Dispose();
            mypen.Dispose();
        }

        /// <summary>
        /// 按钮5点击事件：绘制扇形
        /// </summary>
        private void button5_Click(object sender, EventArgs e)
        {
            Graphics g = this.CreateGraphics();
            Pen mypen = new Pen(Color.Magenta, 3);
            Rectangle myrec = new Rectangle(150, 200, 100, 100);
            // 绘制扇形：参数与DrawArc一致，但会连接圆心和弧的两端
            g.DrawPie(mypen, myrec, 0, -180);
            g.Dispose();
            mypen.Dispose();
        }

        /// <summary>
        /// 按钮6点击事件：绘制多边形（五角星）
        /// </summary>
        private void button6_Click(object sender, EventArgs e)
        {
            Graphics g = this.CreateGraphics();
            Pen mypen = new Pen(Color.Magenta, 3);
            // 定义多边形的各个顶点坐标
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
            // 将顶点存入数组
            Point[] pts = { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10 };
            // 绘制多边形：自动连接所有顶点并闭合
            g.DrawPolygon(mypen, pts);
            g.Dispose();
            mypen.Dispose();
        }
        #endregion

        // 程序入口
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new DrawingForm());
        }
    }
}
```

### 使用说明
1. **环境准备**：
   - 打开Visual Studio（推荐2019/2022）
   - 创建新项目 → 选择「Windows 窗体应用（.NET Framework）」
   - 框架版本选择.NET Framework 4.5及以上

2. **替换代码**：
   - 删除默认生成的 `Form1.cs` 中的所有代码
   - 粘贴上面的完整代码

3. **运行程序**：
   - 按F5启动程序，窗体上会显示6个功能按钮
   - 点击不同按钮，即可在窗体上绘制对应的图形

### 关键优化说明
我在原始代码基础上做了2个重要优化，更符合C#开发最佳实践：
- 增加了 `mypen.Dispose()`：画笔也是非托管资源，使用后必须释放
- 新增了 `InitializeComponent()` 手动创建控件：无需依赖设计器，代码可直接运行

### 总结
1. **核心流程**：创建Graphics画布 → 创建Pen画笔 → 调用绘图方法 → 释放资源，这是GDI+绘图的通用流程。
2. **关键方法**：`DrawLine`（直线）、`DrawRectangle`（矩形）、`DrawEllipse`（椭圆）、`DrawArc`（弧线）、`DrawPie`（扇形）、`DrawPolygon`（多边形）是最常用的基础绘图方法。
3. **资源管理**：Graphics和Pen都是非托管资源，使用后必须调用`Dispose()`释放，避免内存泄漏。


## 二、画笔 (Pen类)的用途
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **核心用途** | 绘制**图形边框/轮廓**（如直线、矩形边框、椭圆边框），仅绘制线条，不填充区域 |
| **核心属性** | 1. `Color`：画笔颜色；<br />2. `Width`：线条宽度（像素）；<br />3. `DashStyle`：线条样式（实线、虚线、点线等）；<br />4. `StartCap/EndCap`：线条首尾样式（箭头、圆形等） |
| **创建语法** | `Pen pen = new Pen(Color.Red);`（默认宽度1）<br />`Pen pen = new Pen(Color.Blue, 3);`（指定宽度） |
| **资源释放** | 使用后需调用`pen.Dispose()`释放资源 |


### Pen类构造函数及核心参数含义表
| 类别         | 语法/参数名       | 数据类型                | 核心含义                                                                 |
|--------------|-------------------|-------------------------|--------------------------------------------------------------------------|
| 构造函数     | Pen(Color color)  | Color                   | 最基础的构造方式，仅指定画笔颜色，线条宽度默认1像素                      |
| 构造函数     | Pen(Color color, float width) | Color + float | 指定画笔颜色和线条宽度（像素），宽度需大于0                              |
| 核心属性     | Color             | Color                   | 设置/获取画笔的颜色，支持系统预定义颜色（如Color.Red）或自定义RGB颜色    |
| 核心属性     | Width             | float                   | 设置/获取线条宽度（单位：像素），取值范围>0，支持小数（如1.5f）          |
| 样式属性     | DashStyle         | DashStyle（枚举）       | 设置线条样式，如实线、虚线、点线、点划线等                               |
| 端点属性     | StartCap          | LineCap（枚举）         | 设置线条起始端的样式，如圆形、方形、箭头、菱形等                         |
| 端点属性     | EndCap            | LineCap（枚举）         | 设置线条结束端的样式，与StartCap参数类型一致                             |

### 完整使用示例
以下示例涵盖了表格中所有核心参数的使用场景，你可以直接复制到之前的GDI+绘图项目中测试：

```csharp
private void DrawCustomPenDemo(object sender, EventArgs e)
{
    Graphics g = this.CreateGraphics();
    
    // 1. 基础用法：仅指定颜色（宽度默认1）
    Pen pen1 = new Pen(Color.Blue);
    g.DrawLine(pen1, 20, 50, 300, 50); // 蓝色实线，宽度1像素

    // 2. 指定颜色+宽度
    Pen pen2 = new Pen(Color.Green, 5);
    g.DrawLine(pen2, 20, 80, 300, 80); // 绿色实线，宽度5像素

    // 3. 自定义线条样式（虚线）
    Pen pen3 = new Pen(Color.Orange, 3);
    pen3.DashStyle = System.Drawing.Drawing2D.DashStyle.Dash; // 虚线样式
    g.DrawLine(pen3, 20, 110, 300, 110); // 橙色虚线，宽度3像素

    // 4. 自定义线条样式（点线）
    Pen pen4 = new Pen(Color.Purple, 2);
    pen4.DashStyle = System.Drawing.Drawing2D.DashStyle.Dot; // 点线样式
    g.DrawLine(pen4, 20, 140, 300, 140); // 紫色点线，宽度2像素

    // 5. 带箭头的线条（起始端圆形，结束端箭头）
    Pen pen5 = new Pen(Color.Red, 4);
    pen5.StartCap = System.Drawing.Drawing2D.LineCap.Round; // 起始端圆形
    pen5.EndCap = System.Drawing.Drawing2D.LineCap.ArrowAnchor; // 结束端箭头
    g.DrawLine(pen5, 20, 170, 300, 170); // 红色带箭头线条，宽度4像素

    // 释放所有资源
    pen1.Dispose();
    pen2.Dispose();
    pen3.Dispose();
    pen4.Dispose();
    pen5.Dispose();
    g.Dispose();
}
```

### 补充说明


### 总结
1. `Pen`类最常用的构造方式是`Pen(Color)`和`Pen(Color, float)`，分别对应“仅指定颜色”和“颜色+宽度”两种场景。
2. `DashStyle`用于控制线条的显示样式（实线/虚线等），`StartCap/EndCap`用于自定义线条端点形态（箭头/圆形等）。
3. 使用Pen后必须调用`Dispose()`释放资源，避免内存泄漏，这是GDI+开发的核心规范。



## 三、Pen类代码示例

### 1.画实线

| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **核心方法** | `Graphics.DrawLine(Pen pen, float x1, float y1, float x2, float y2)` |
| **参数说明** | - pen：画笔（指定颜色、宽度）；<br />- x1/y1：起点坐标；<br />- x2/y2：终点坐标 |


#### 示例 1：

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


#### 示例 2
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

### 2.如何绘制矩形
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **绘制边框** | `Graphics.DrawRectangle(Pen pen, float x, float y, float width, float height)` |
| **填充矩形** | `Graphics.FillRectangle(Brush brush, float x, float y, float width, float height)` |
| **参数说明** | - x/y：矩形左上角坐标；<br />- width/height：矩形宽/高 |

代码示例

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

### 3.如何绘制椭圆
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **绘制边框** | `Graphics.DrawEllipse(Pen pen, float x, float y, float width, float height)` |
| **填充椭圆** | `Graphics.FillEllipse(Brush brush, float x, float y, float width, float height)` |
| **参数说明** | - x/y：椭圆外接矩形的左上角坐标；<br />- width/height：外接矩形的宽/高（宽=高时为圆形） |

代码示例

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

### 4.如何绘制圆弧
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **核心方法** | `Graphics.DrawArc(Pen pen, float x, float y, float width, float height, float startAngle, float sweepAngle)` |
| **参数说明** | - x/y/width/height：圆弧所在椭圆的外接矩形；<br />- startAngle：起始角度（0°=右侧水平向右，顺时针为正）；<br />- sweepAngle：扫过角度（如90°=四分之一圆弧） |

代码示例

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

### 5.如何绘制扇形
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **绘制边框** | `Graphics.DrawPie(Pen pen, float x, float y, float width, float height, float startAngle, float sweepAngle)` |
| **填充扇形** | `Graphics.FillPie(Brush brush, float x, float y, float width, float height, float startAngle, float sweepAngle)` |
| **参数说明** | 同DrawArc，sweepAngle为扫过角度（360°为整圆） |

代码示例

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

### 6.如何绘制多边形
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **绘制边框** | `Graphics.DrawPolygon(Pen pen, Point[] points)` |
| **填充多边形** | `Graphics.FillPolygon(Brush brush, Point[] points)` |
| **参数说明** | points：多边形顶点坐标数组（按顺序连接，最后自动闭合） |

代码示例

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



## 四、画刷 (Brush类)的用途
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

