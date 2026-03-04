---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务一 图形设计基础   # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务一 图形设计基础   # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  1  # 侧边栏中排在第1位
---

## 任务一 图形设计基础
### 1. GDI与GDI+的区别（核心概念）
| 对比项       | GDI（图形设备接口）| GDI+（升级版）|
|--------------|---------------------------------------------|---------------------------------------------|
| 定位         | Windows底层老旧接口，.NET早期版本使用        | .NET核心2D绘图类库，WinForm绘图首选          |
| 特点         | 功能少、无抗锯齿、面向过程                  | 面向对象、支持抗锯齿/渐变/透明、功能丰富     |
| 适用场景     | 仅兼容老旧程序                              | WinForm界面绘制、报表/图片处理、打印预览等  |

### 2. 核心命名空间（必记）
| 命名空间                | 核心作用                  | 关键类                  |
|-------------------------|---------------------------|-------------------------|
| `System.Drawing`        | 基础绘图（必须引用）| Graphics、Pen、Brush、Font |
| `System.Drawing.Drawing2D` | 高级2D绘图（渐变/纹理）| LinearGradientBrush、DashStyle |
| `System.Drawing.Imaging` | 图像处理                  | Image、Bitmap           |

## 任务二 绘图工具及使用
### 子任务一 Graphics类（画布）
`Graphics`是GDI+的核心，相当于“画画的画布”，所有绘图操作都基于它完成。

#### 1. 核心特点
- 不能直接`new`创建，必须通过3种方式获取
- 使用后需释放资源（除Paint事件外）
- 提供绘制直线、矩形、文本、图片等方法

#### 2. 获取Graphics对象的3种方式（重点）
| 方式                | 语法示例                                                                 | 适用场景                | 注意事项                  |
|---------------------|--------------------------------------------------------------------------|-------------------------|---------------------------|
| Paint事件（推荐）| `private void Form1_Paint(object sender, PaintEventArgs e) { Graphics g = e.Graphics; }` | 窗体/控件持久绘制       | 无需手动释放，系统管理    |
| CreateGraphics      | `Graphics g = this.CreateGraphics();`                                    | 按钮点击等临时绘制      | 绘制内容会被刷新覆盖，需`g.Dispose()` |
| FromImage           | `Bitmap bmp = new Bitmap(200,200); Graphics g = Graphics.FromImage(bmp);` | 绘制到图片文件（验证码） | 必须手动释放资源          |

#### 3. Graphics常用方法（分类记忆）
| 方法类型   | 方法名                | 作用                  |
|------------|-----------------------|-----------------------|
| 绘制轮廓   | DrawLine/DrawRectangle | 画直线/矩形边框       |
| 填充区域   | FillEllipse/FillPie    | 填充椭圆/扇形内部     |
| 文本/图片  | DrawString/DrawImage   | 绘制文字/图片         |
| 辅助       | Clear()/Dispose()      | 清空画布/释放资源     |

### 子任务二 笔（Pen类）—— 画轮廓/线条
#### 1. 核心作用
绘制图形的边框、线条，可设置颜色、宽度、样式（实线/虚线/箭头）。

#### 2. 构造函数与核心属性
| 类别       | 语法/参数名               | 说明                                  |
|------------|---------------------------|---------------------------------------|
| 构造函数   | `Pen(Color color)`        | 仅指定颜色，宽度默认1像素             |
| 构造函数   | `Pen(Color color, float width)` | 指定颜色+宽度（宽度>0，如3f）      |
| 核心属性   | Color                     | 画笔颜色（如Color.Red、Color.FromArgb(255,0,0)） |
| 核心属性   | Width                     | 线条宽度（单位：像素，支持小数1.5f）  |
| 样式属性   | DashStyle                 | 线条样式：`Solid`（实线，默认）、`Dash`（虚线）、`Dot`（点线）、`DashDot`（点划线）、`DashDotDot`（双点划线） |
| 端点属性   | StartCap/EndCap           | 线条首尾样式：`Round`（圆形）、`Square`（方形）、`ArrowAnchor`（箭头）、`DiamondAnchor`（菱形）、`Flat`（平切，默认）。 |

#### 3. 代码示例（Pen类）
```csharp
private void Form1_Paint(object sender, PaintEventArgs e)
{
    Graphics g = e.Graphics;
    // 1. 红色实线（宽度2）
    Pen pen1 = new Pen(Color.Red, 2);
    g.DrawLine(pen1, 20, 20, 200, 20);
    
    // 2. 蓝色虚线
    Pen pen2 = new Pen(Color.Blue, 1);
    pen2.DashStyle = System.Drawing.Drawing2D.DashStyle.Dash;
    g.DrawRectangle(pen2, 20, 50, 100, 50);
    
    // 3. 绿色带箭头线条
    Pen pen3 = new Pen(Color.Green, 2);
    pen3.EndCap = System.Drawing.Drawing2D.LineCap.ArrowAnchor;
    g.DrawLine(pen3, 20, 110, 200, 110);
    
    // 释放资源（必写）
    pen1.Dispose();
    pen2.Dispose();
    pen3.Dispose();
}
```

### 子任务三 画刷（Brush类）—— 填充内部区域
#### 1. 核心作用
填充图形内部、设置文字颜色，是抽象类，需用派生类。

#### 2. 常用画刷类型
| 画刷类型          | 语法示例                                          | 作用                  |
|-------------------|---------------------------------------------------|-----------------------|
| 纯色画刷（最常用） | `SolidBrush brush = new SolidBrush(Color.LightBlue);` | 单一颜色填充          |
| 线性渐变画刷      | `LinearGradientBrush brush = new LinearGradientBrush(new Point(0,0), new Point(100,100), Color.Red, Color.Yellow);` | 渐变颜色填充          |
| 纹理画刷          | `HatchBrush brush = new HatchBrush(HatchStyle.Cross, Color.Green, Color.White);` | 图案填充（十字/网格） |

#### 3. 代码示例（Brush类）
```csharp
private void Form1_Paint(object sender, PaintEventArgs e)
{
    Graphics g = e.Graphics;
    // 1. 纯色填充矩形
    SolidBrush solidBrush = new SolidBrush(Color.LightBlue);
    g.FillRectangle(solidBrush, 20, 20, 100, 50);
    
    // 2. 渐变填充椭圆
    LinearGradientBrush gradientBrush = new LinearGradientBrush(
        new Point(130,20), new Point(230,70), 
        Color.Orange, Color.Yellow);
    g.FillEllipse(gradientBrush, 130, 20, 100, 50);
    
    // 释放资源
    solidBrush.Dispose();
    gradientBrush.Dispose();
}
```

### 子任务四 绘制图形（基础图形）
#### 1. 绘制直线
```csharp
// 语法：g.DrawLine(画笔, 起点X, 起点Y, 终点X, 终点Y)
private void Form1_Paint(object sender, PaintEventArgs e)
{
    Graphics g = e.Graphics;
    Pen pen = new Pen(Color.Red, 2);
    g.DrawLine(pen, 20, 20, 200, 20); // 水平线
    g.DrawLine(pen, 20, 40, 200, 100); // 斜线
    pen.Dispose();
}
```

#### 2. 绘制矩形（含填充）
```csharp
// 绘制边框：g.DrawRectangle(画笔, 左上角X, 左上角Y, 宽, 高)
// 填充内部：g.FillRectangle(画刷, 左上角X, 左上角Y, 宽, 高)
private void Form1_Paint(object sender, PaintEventArgs e)
{
    Graphics g = e.Graphics;
    // 画边框
    Pen pen = new Pen(Color.Blue, 2);
    g.DrawRectangle(pen, 20, 20, 150, 80);
    // 填充
    SolidBrush brush = new SolidBrush(Color.LightGreen);
    g.FillRectangle(brush, 200, 20, 150, 80);
    
    pen.Dispose();
    brush.Dispose();
}
```

#### 3. 绘制椭圆（圆形）
```csharp
// 语法：g.DrawEllipse(画笔, 外接矩形X, 外接矩形Y, 宽, 高)
// 宽=高时为圆形
private void Form1_Paint(object sender, PaintEventArgs e)
{
    Graphics g = e.Graphics;
    Pen pen = new Pen(Color.Purple, 2);
    g.DrawEllipse(pen, 20, 20, 100, 100); // 圆形
    g.DrawEllipse(pen, 150, 20, 150, 100); // 椭圆
    pen.Dispose();
}
```

#### 4. 综合绘图示例（按钮触发）
```csharp
// 新建WinForm项目，窗体自动生成6个按钮，点击绘制对应图形
private void button1_Click(object sender, EventArgs e) // 画直线
{
    Graphics g = this.CreateGraphics();
    Pen pen = new Pen(Color.Red, 3);
    g.DrawLine(pen, 10, 50, 10, 150);
    pen.Dispose();
    g.Dispose();
}

private void button2_Click(object sender, EventArgs e) // 画矩形
{
    Graphics g = this.CreateGraphics();
    Pen pen = new Pen(Color.Red, 3);
    g.DrawRectangle(pen, 50, 50, 150, 100);
    pen.Dispose();
    g.Dispose();
}
```

## 任务三 字体和图像处理（Font/Image）
### 1. Font类——设置文字样式
#### 核心语法
```csharp
// 语法：new Font(字体名, 大小, 样式)
// 样式：FontStyle.Bold（粗体）、Italic（斜体）、Underline（下划线）
private void Form1_Paint(object sender, PaintEventArgs e)
{
    Graphics g = e.Graphics;
    // 抗锯齿（文字更清晰）
    g.TextRenderingHint = System.Drawing.Text.TextRenderingHint.AntiAlias;
    
    // 常规文字
    Font font1 = new Font("宋体", 12);
    SolidBrush brush1 = new SolidBrush(Color.Black);
    g.DrawString("常规文字", font1, brush1, 20, 20);
    
    // 粗体+斜体
    Font font2 = new Font("微软雅黑", 14, FontStyle.Bold | FontStyle.Italic);
    SolidBrush brush2 = new SolidBrush(Color.Red);
    g.DrawString("粗体+斜体", font2, brush2, 20, 50);
    
    // 释放资源
    font1.Dispose();
    font2.Dispose();
    brush1.Dispose();
    brush2.Dispose();
}
```

### 2. 绘制图像
```csharp
private void Form1_Paint(object sender, PaintEventArgs e)
{
    Graphics g = e.Graphics;
    // 替换为自己的图片路径
    string imgPath = "test.png";
    if (System.IO.File.Exists(imgPath))
    {
        Image img = Image.FromFile(imgPath);
        g.DrawImage(img, 20, 20); // 原尺寸绘制
        g.DrawImage(img, 200, 20, img.Width/2, img.Height/2); // 缩放绘制
        img.Dispose();
    }
    else
    {
        g.DrawString("图片不存在", new Font("宋体", 12), Brushes.Red, 20, 20);
    }
}
```

### 核心总结（必背）
1. **绘图核心流程**：获取Graphics画布 → 创建Pen/Brush/Font工具 → 调用绘制方法 → 释放资源（Dispose）；
2. **工具分工**：Pen画轮廓、Brush填内部、Font定文字样式；
3. **资源管理**：Pen/Brush/Font/Image使用后必须Dispose，避免内存泄漏；
4. **坐标规则**：画布左上角是原点(0,0)，X向右递增，Y向下递增；
5. **小技巧**：添加`g.SmoothingMode = SmoothingMode.AntiAlias`可让图形更平滑。

### 学习提示
- 所有代码可直接复制到Visual Studio的WinForm项目中运行；
- 先掌握“Paint事件+Pen+Brush”的基础组合，再学高级功能；
- 练习时优先实现“画直线→矩形→椭圆→文字”的顺序，循序渐进。