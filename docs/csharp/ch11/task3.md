---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务字体和图像处理   # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务字体和图像处理   # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  3  # 侧边栏中排在第1位
---


## 16. Font类的用途
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **核心用途** | 定义绘制文本的字体样式（字体名称、大小、样式），是绘制文本的必备参数   |
| **核心属性** | 1. `Name`：字体名称（如“宋体”、“微软雅黑”）；<br />2. `Size`：字体大小（像素/磅）；<br />3. `Style`：字体样式（Regular/粗体Bold/斜体Italic/下划线Underline等）；<br />4. `Unit`：尺寸单位（默认Point，磅） |
| **创建语法** | `Font font = new Font("微软雅黑", 12);`（默认常规样式）<br />`Font font = new Font("宋体", 14, FontStyle.Bold | FontStyle.Italic);`（粗体+斜体） |
| **资源释放** | 使用后需调用`font.Dispose()`释放资源 |

## 17. 如何绘制文本
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **核心方法** | `Graphics.DrawString(string text, Font font, Brush brush, float x, float y)` |
| **参数说明** | - text：要绘制的文本；<br />- font：字体样式；<br />- brush：文本填充画刷；<br />- x/y：文本左上角坐标 |

### 代码示例
```csharp
private void Form1_Paint(object sender, PaintEventArgs e)
{
    Graphics g = e.Graphics;
    // 抗锯齿（让文字更清晰）
    g.TextRenderingHint = System.Drawing.Text.TextRenderingHint.AntiAlias;

    // 1. 常规文本
    Font font1 = new Font("宋体", 12);
    SolidBrush brush1 = new SolidBrush(Color.Black);
    g.DrawString("常规文本：Hello C# GDI+", font1, brush1, 20, 20);

    // 2. 粗体+斜体文本
    Font font2 = new Font("微软雅黑", 14, FontStyle.Bold | FontStyle.Italic);
    SolidBrush brush2 = new SolidBrush(Color.Red);
    g.DrawString("粗体+斜体文本", font2, brush2, 20, 50);

    // 3. 下划线文本
    Font font3 = new Font("Arial", 16, FontStyle.Underline);
    SolidBrush brush3 = new SolidBrush(Color.Blue);
    g.DrawString("Underline Text", font3, brush3, 20, 80);

    // 释放资源
    font1.Dispose();
    font2.Dispose();
    font3.Dispose();
    brush1.Dispose();
    brush2.Dispose();
    brush3.Dispose();
}
```

## 18. 如何绘制图像
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **核心方法** | 1. `Graphics.DrawImage(Image image, float x, float y)`（原尺寸绘制）；<br />2. `Graphics.DrawImage(Image image, float x, float y, float width, float height)`（缩放绘制） |
| **参数说明** | - image：要绘制的图像（Bitmap/Image对象）；<br />- x/y：图像左上角坐标；<br />- width/height：缩放后的宽/高 |

### 代码示例
```csharp
private void Form1_Paint(object sender, PaintEventArgs e)
{
    Graphics g = e.Graphics;
    g.SmoothingMode = System.Drawing.Drawing2D.SmoothingMode.AntiAlias;

    // 1. 加载图片（替换为你的图片路径）
    string imgPath = "test.png";
    if (File.Exists(imgPath))
    {
        Image img = Image.FromFile(imgPath);
        
        // 2. 原尺寸绘制
        g.DrawImage(img, 20, 20);
        
        // 3. 缩放绘制（宽高减半）
        g.DrawImage(img, 200, 20, img.Width / 2, img.Height / 2);
        
        // 释放资源
        img.Dispose();
    }
    else
    {
        // 图片不存在时绘制提示文本
        g.DrawString("图片不存在", new Font("宋体", 12), Brushes.Red, 20, 20);
    }
}
```

---

### 总结（核心关键点）
1. **核心流程**：GDI+绘图 = 获取Graphics对象 + 创建Pen/Brush/Font工具 + 调用绘制方法 + 释放资源；
2. **资源管理**：Pen/Brush/Font/Image/Graphics（除Paint事件外）必须手动Dispose，避免内存泄漏；
3. **抗锯齿**：设置`g.SmoothingMode = SmoothingMode.AntiAlias`让图形更平滑，`g.TextRenderingHint = AntiAlias`让文字更清晰；
4. **坐标规则**：GDI+坐标原点在左上角，x向右递增，y向下递增；
5. **工具分工**：Pen绘轮廓、Brush填区域、Font定文字样式，三者配合完成绘图。


## **本章内容**

1. 图形操作基础：GDI和GDI+
2. 绘图工具：Graphics类
3. 处理字体和图像：Font类和Image类