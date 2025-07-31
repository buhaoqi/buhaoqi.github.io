---
noteId: "ac2ca1706d5111f085edc39629fab101"
tags: []

---

`System.Drawing` 是 .NET 框架中的一个**命名空间**，它提供了一系列用于处理**图形、图像、颜色和字体**的类和功能。它主要用于在 Windows 桌面应用程序（如 WinForms、WPF）中进行**绘图、图像处理、颜色管理**等操作。

---

## **1. `System.Drawing` 的主要功能**
`System.Drawing` 命名空间包含了许多类，用于：

- **绘图**（如 `Graphics` 类用于在窗体或控件上绘制线条、形状、文本等）。
- **颜色管理**（如 `Color` 结构用于定义颜色）。
- **图像处理**（如 `Bitmap`、`Image` 类用于加载、保存和操作图片）。
- **字体和文本渲染**（如 `Font`、`StringFormat` 类用于控制文本的显示方式）。

---

## **2. `System.Drawing` 的核心类**
| 类/结构 | 用途 |
|----------|------|
| `Color` | 定义颜色（如 `Color.Red`、`Color.Blue`）。 |
| `Graphics` | 用于在窗体或控件上绘制图形（线条、矩形、文本等）。 |
| `Bitmap` | 表示位图图像，用于加载、保存和编辑图片。 |
| `Image` | 抽象基类，表示图像（如 `Bitmap`、`Metafile`）。 |
| `Pen` | 定义画笔，用于绘制线条和形状的轮廓。 |
| `Brush` | 定义画刷，用于填充形状（如纯色、渐变、纹理）。 |
| `Font` | 定义字体样式（如 `new Font("Arial", 12)`）。 |
| `Rectangle` / `Point` | 表示矩形区域或坐标点。 |

---

## **3. `System.Drawing` 在 WinForms 中的应用**
在 Windows 窗体（WinForms）应用程序中，`System.Drawing` 主要用于：

- **设置控件颜色**（如 `button1.BackColor = Color.Blue`）。
- **在窗体上绘制图形**（如重写 `OnPaint` 方法使用 `Graphics` 绘制线条）。
- **加载和显示图片**（如 `pictureBox1.Image = Image.FromFile("test.jpg")`）。

---

## **4. `System.Drawing` 的依赖**
- **Windows 平台**：`System.Drawing` 是 Windows 特有的库，依赖于 GDI+（Graphics Device Interface Plus），因此它**不能直接在 .NET Core 或跨平台环境（如 Linux、macOS）中使用**。

- **替代方案**：
  - 在 .NET Core / .NET 5+ 中，可以使用 `SkiaSharp` 或 `SixLabors.ImageSharp` 进行跨平台图形处理。
  - 在 Web 应用中，通常使用 JavaScript（如 Canvas API）或服务器端图像处理库。

---

## **5. 示例代码**
### **(1) 设置控件颜色**
```csharp
// 设置窗体背景色为红色
this.BackColor = System.Drawing.Color.Red;

// 设置按钮背景色为蓝色
button1.BackColor = System.Drawing.Color.Blue;
```

### **(2) 在窗体上绘制图形**
```csharp
private void Form1_Paint(object sender, PaintEventArgs e)
{
    // 获取 Graphics 对象用于绘图
    Graphics g = e.Graphics;

    // 画一条红色直线
    Pen redPen = new Pen(Color.Red, 2); // 红色画笔，宽度 2px
    g.DrawLine(redPen, 10, 10, 100, 100);

    // 画一个蓝色矩形
    Brush blueBrush = new SolidBrush(Color.Blue);
    g.FillRectangle(blueBrush, 50, 50, 100, 80);
}
```

### **(3) 加载并显示图片**
```csharp
private void LoadImage()
{
    // 从文件加载图片
    Image img = Image.FromFile("test.jpg");

    // 显示在 PictureBox 控件中
    pictureBox1.Image = img;
}
```

---

## **6. 注意事项**
1. **`System.Drawing` 是 Windows 特有的**，不能用于跨平台开发（如 .NET Core 的 Linux/macOS 应用）。
2. **GDI+ 的局限性**：
   - 性能不如现代图形库（如 Direct2D、OpenGL）。
   - 不支持硬件加速（依赖 CPU 渲染）。
3. **替代方案**：
   - **.NET Core / .NET 5+**：推荐使用 `SkiaSharp` 或 `SixLabors.ImageSharp`。
   - **Web 开发**：使用 JavaScript（Canvas、SVG）或服务器端图像处理库（如 ImageMagick）。

---

## **7. 总结**
- `System.Drawing` 是 .NET 中用于**图形、图像、颜色处理**的命名空间。
- 主要用于 **WinForms** 应用程序，提供 `Color`、`Graphics`、`Bitmap` 等类。
- **不适用于跨平台**，在 .NET Core / .NET 5+ 中建议使用 `SkiaSharp` 或 `SixLabors.ImageSharp`。

如果你正在开发 Windows 桌面应用（WinForms/WPF），`System.Drawing` 是一个简单易用的选择；如果是跨平台或高性能需求，则需要考虑其他库。