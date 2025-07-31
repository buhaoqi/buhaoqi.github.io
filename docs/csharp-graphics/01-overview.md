---
noteId: "8d4875406d5111f085edc39629fab101"
tags: []

---



## **1. 考点要求**  
**了解C#绘图常用类**，包括：  
- `Graphics`（图形绘制类）  
- `Pen`（画笔类，用于绘制线条和轮廓）  
- `Brush`（画刷类，用于填充形状）  
- `Font`（字体类，用于文本绘制）  

## **2. 核心知识点**  

### **(1) `Graphics` 类**  
- **作用**：负责在窗体或控件上绘制图形（如线条、矩形、圆、文本等）。  
- **获取方式**：通常通过 `Paint` 事件中的 `PaintEventArgs.Graphics` 获取。  
- **常用方法**：  
  - `DrawLine(Pen pen, int x1, int y1, int x2, int y2)`：绘制直线。  
  - `DrawRectangle(Pen pen, int x, int y, int width, int height)`：绘制矩形。  
  - `FillRectangle(Brush brush, int x, int y, int width, int height)`：填充矩形。  
  - `DrawString(string text, Font font, Brush brush, float x, float y)`：绘制文本。  

### **(2) `Pen` 类**  
- **作用**：定义画笔，用于绘制线条和形状的轮廓（如颜色、宽度、线型）。  
- **常用属性**：  
  - `Color`：设置画笔颜色（如 `Color.Red`）。  
  - `Width`：设置画笔宽度（如 `2` 表示 2 像素宽）。  
- **创建方式**：  
  ```csharp
  Pen pen = new Pen(Color.Blue, 2); // 蓝色，2像素宽
  ```

### **(3) `Brush` 类**  
- **作用**：定义画刷，用于填充形状（如纯色、渐变、纹理）。  
- **常用子类**：  
  - `SolidBrush`：纯色画刷（如 `new SolidBrush(Color.Red)`）。  
  - `LinearGradientBrush`：渐变画刷（需额外学习）。  
- **创建方式**：  
  ```csharp
  Brush brush = new SolidBrush(Color.Yellow); // 黄色填充
  ```

### **(4) `Font` 类**  
- **作用**：定义字体样式，用于文本绘制（如字体名称、大小、加粗等）。  
- **常用构造函数**：  
  ```csharp
  Font font = new Font("Arial", 12, FontStyle.Bold); // Arial字体，12号，加粗
  ```
- **常用属性**：  
  - `Name`：字体名称（如 `"Arial"`）。  
  - `Size`：字体大小（如 `12`）。  
  - `Style`：字体样式（如 `FontStyle.Bold`、`FontStyle.Italic`）。  

## **3. 典型应用场景**  
- 在 `Form` 的 `Paint` 事件中使用 `Graphics` 绘制图形。  
- 结合 `Pen` 和 `Brush` 绘制带颜色的线条和填充形状。  
- 使用 `Font` 控制文本的显示样式。  

## **4. 考试可能涉及的题型**  
- **选择题**：考查 `Graphics`、`Pen`、`Brush`、`Font` 的基本作用。  
- **填空题**：填写绘图方法的参数（如 `DrawLine` 的参数顺序）。  
- **简单编程题**：要求编写代码绘制简单图形（如矩形、直线）或显示文本。  

## **5. 学习建议**  
- 掌握 `Graphics` 的基本绘图方法（如 `DrawLine`、`FillRectangle`）。  
- 理解 `Pen` 和 `Brush` 的区别（轮廓 vs 填充）。  
- 熟悉 `Font` 的字体设置方式。  

---

### **总结**  
本考点主要考查对 C# 绘图基础类的认识，重点在于理解 `Graphics` 如何结合 `Pen`、`Brush`、`Font` 实现简单绘图功能。考试难度较低，但需熟悉基本概念和代码示例。