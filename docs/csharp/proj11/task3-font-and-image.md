---
title: 任务三 字体和图像处理
description: 算法与程序设计《C#》项目十一 C#图形操作 任务三 字体和图像处理 知识点总结。掌握Font类设置字体、字形、字号，DrawString方法绘制文本，DrawImage方法绘制图像。
keywords: [C#, Font类, DrawString, DrawImage, 字体, 图像处理, FontStyle, 对口升学]
sidebar_label: 任务三 字体和图像处理
sidebar_position: 3
slug: /csharp/proj11/task3-font-and-image
tags: [C#, 项目十一, 任务三, 对口升学]
---

## 知识点

### 1. 绘制文本概述

通过Graphics类中的 `DrawString` 方法可以按指定位置以指定的Brush和Font对象绘制指定的文本。在输出文本前需要先设置画刷和字体。

### 2. Font类

Font类用来定义文本的格式，包括字体、字形和字号等。

#### Font类构造函数

语法格式：`public Font(FontFamily family, float emSize, FontStyle style)`

说明：
- `family`：Font的FontFamily，用来设置字体（如"宋体"、"仿宋体"等）
- `emSize`：用磅值为单位表示的字体大小
- `style`：字体的样式，使用FontStyle枚举表示

#### FontStyle枚举成员

| 成员 | 说明 |
|---|---|
| Regular | 普通文本 |
| Bold | 加粗文本 |
| Italic | 倾斜文本 |
| Underline | 带下划线的文本 |
| Strikeout | 中间带删除线的文本 |

### 3. DrawString方法

设置好画刷和字体后，可以在指定位置使用DrawString方法输出文本。

语法格式：`public void DrawString(string s, Font font, Brush brush, float x, float y)`

说明：
- `s`：需要输出的文本
- `font`：使用Font类定义的文本格式
- `brush`：由Brush子类定义的画刷
- `x, y`：文本输出的起始坐标位置

### 4. DrawImage方法

通过Graphics类中的DrawImage方法，可以在指定位置以图像的原始大小或指定大小绘制图像。

常用语法格式：

格式1：`public void DrawImage(Image image, int x, int y)`

格式2：`public void DrawImage(Image image, int x, int y, int width, int height)`

说明：
- `image`：由Image类定义的图像，如果图像来自文件可以包含路径
- `x, y`：所绘制图像的左上角坐标
- `width, height`：所绘制图像的宽度和高度（格式2指定大小，格式1使用原始大小）

### 5. 绘制图像和文本综合示例

**任务**：将D盘下的image1.bmp图像输出到窗体，并在图像下方用文字对图像做说明。

```csharp
// 输出图像
private void button1_Click(object sender, EventArgs e)
{
    Graphics g = this.CreateGraphics();
    Image myimage = Image.FromFile(@"d:\image1.bmp");
    g.DrawImage(myimage, 100, 25, 200, 200);
    g.Dispose();
}

// 输出文本
private void button2_Click(object sender, EventArgs e)
{
    Graphics g = this.CreateGraphics();
    Font myfont = new Font("仿宋体", 16, FontStyle.Bold);
    Brush mybr = new SolidBrush(Color.Red);
    string str = "这是一幅好作品";
    g.DrawString(str, myfont, mybr, 110, 250);
    g.Dispose();
}
```

### 6. Image.FromFile方法

使用 `Image.FromFile(string path)` 方法可以从文件加载图像：

```csharp
Image myimage = Image.FromFile(@"d:\image1.bmp");
```

- `path`：包含完整路径的图像文件名
- 支持的格式包括：.bmp、.jpg、.png、.gif等

### 7. 绘制文本和图像的方法对比

| 操作 | 方法 | 需要的参数 |
|---|---|---|
| 绘制文本 | DrawString | string, Font, Brush, x, y |
| 绘制图像（原始大小） | DrawImage | Image, x, y |
| 绘制图像（指定大小） | DrawImage | Image, x, y, width, height |

> **要点总结**：
> - 绘制文本需要Font对象（定义字体格式）和Brush对象（定义颜色）
> - 绘制图像使用Image.FromFile从文件加载图像
> - DrawString和DrawImage都是Graphics类的方法
> - 使用完毕后调用Dispose()释放资源
