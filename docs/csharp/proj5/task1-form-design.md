---
title: 任务一 窗体设计
description: 算法与程序设计《C#》项目五 Windows应用程序开发 任务一 窗体设计知识点总结。介绍Windows应用程序开发步骤、窗体结构、窗体常用属性（表5-1）、Font属性（表5-2）、窗体方法（Show/Hide/Close/Activate/Refresh）、窗体事件（Click/DoubleClick/Load/KeyDown/KeyPress/MouseClick等）、多窗体间调用（Show/ShowDialog），含例5-1至例5-9完整代码示例。
keywords: [C#, Windows应用程序, 窗体设计, Form, 属性, 方法, 事件, Show, Hide, Close, ShowDialog, Load, Click, KeyDown, KeyPress, MouseClick, 多窗体, 对口升学]
sidebar_label: 任务一 窗体设计
sidebar_position: 1
slug: /csharp/proj5/task1-form-design
tags: [C#, 项目五, 任务一, 对口升学]
---

## 知识点

### 1.什么是窗体？

窗体是用户与计算机交互的图形化界面，是Windows窗体应用程序的基本单元，可以存放各种控件，是一种容器类对象。C#用 `System.Windows.Forms` 命名空间定义Form类。每实例化一个窗体类，就产生一个窗体。在C#中通过窗体设计器设计窗体，可以实现"所见即所得"的设计效果。

### 子任务一 窗体的创建

### 2.Windows应用程序的开发步骤是什么？

使用C#开发应用程序时，一般包括以下步骤：

1. **创建项目**：启动Visual Studio 2010，在"文件"菜单上选择"新建项目"命令，选择"Windows窗体应用程序"，输入项目名称、指定位置，然后单击"确定"按钮。
2. **界面设计**：系统自动生成一个空白窗体Form1。从工具箱中选择控件添加到窗体。
3. **属性设置**：通过"属性"窗口设置窗体和控件的属性。
4. **编写代码**：Windows应用程序采用事件驱动机制，打开代码编辑器编写相应代码。
5. **运行调试**：按F5或"调试"菜单—"启动调试"命令。
6. **保存程序**："文件"—"全部保存"命令。

### 3.向窗体添加控件的方法有哪些？

- **绘制控件**：在工具箱中选择控件，在窗体上以对角线方向拖动鼠标到合适大小松开。既可选择位置也可设置大小。
- **双击控件**：在工具箱中双击控件，在窗体默认位置创建默认尺寸的控件。
- **编程方式**：通过 `new` 关键字实例化控件并添加到窗体中。

### 4.打开代码编辑器的方法有哪些？

- 双击窗体或控件，进入该对象的默认事件。
- 使用"属性"窗口中的事件列表，双击需要编写代码的事件名。

### 5.窗体的结构由哪几部分组成？

刚创建Windows窗体应用程序项目时自动添加的窗体Form1由以下四部分组成：

1. **标题栏**：显示窗体标题，内容由窗体的 `Text` 属性指定。
2. **控制按钮**：提供窗体最大化、最小化以及关闭的按钮。
3. **边界**：用于限制窗体的大小和边界样式。
4. **窗口区**：窗体的主要部分，可以放置其他对象。

### 子任务二 窗体外观样式

### 6.窗体的常用属性有哪些？

窗体的常用属性见表5-1。

**表5-1 窗体的常用属性**

| 属性 | 说明 |
|---|---|
| **设计属性** | |
| Name | 指定对象名称 |
| **布局属性** | |
| Location | 获取或设置窗体左上角在桌面上的坐标。有X和Y两个值，默认值为坐标原点(0,0)，单位是像素 |
| Size | 获取或设置窗体的大小，有Height和Width两个值 |
| StartPosition | 获取或设置执行时窗体的起始位置：①Manual：由Location属性确定 ②CenterScreen：屏幕居中 ③WindowsDefaultLocation：Windows默认位置（默认值） ④WindowsDefaultBounds：Windows默认位置和边界 ⑤CenterParent：在父窗体中居中 |
| WindowState | 获取或设置窗体的窗口状态：①Normal：默认大小（默认值） ②Minimized：最小化 ③Maximized：最大化 |
| Dock | 获取或设置子窗体在父窗体中停靠的位置和方式，DockStyle枚举：None（默认）/Top/Bottom/Left/Right/Fill |
| **窗体样式属性** | |
| ControlBox | 设置标题栏中是否显示控制按钮 |
| HelpButton | 设置是否在标题栏中显示"帮助"按钮 |
| Icon | 设置窗体标题栏中的图标（格式只能是.ico） |
| MaximizeBox | 设置是否显示"最大化"按钮 |
| MinimizeBox | 设置是否显示"最小化"按钮 |
| ShowIcon | 设置是否在标题栏中显示图标 |
| **外观样式属性** | |
| BackColor | 设置窗体的背景色 |
| BackgroundImage | 设置窗体的背景图像 |
| Font | 设置窗体中显示文字的字体相关属性（见表5-2） |
| ForeColor | 设置窗体的前景色 |
| FormBorderStyle | 设置窗体的边框样式：①None ②FixedSingle ③Fixed3D ④FixedDialog ⑤Sizable（默认值） ⑥FixedToolWindow ⑦SizableToolWindow |
| Text | 窗体标题栏中的标题内容 |
| **行为属性** | |
| Enabled | 是否可以对用户交互做出响应 |
| Visible | 是否显示窗体 |

### 7.Font的常用属性有哪些？

**表5-2 Font的常用属性及其说明**

| Font的属性 | 说明 |
|---|---|
| Name | 字体名称 |
| Size | 字体大小，单位采用Unit属性指定的单位 |
| Unit | 度量单位 |
| Bold | 是否为粗体 |
| Italic | 是否为斜体 |
| Strikeout | 是否有贯穿字体的横线 |
| Underline | 是否有下划线 |

### 8.窗体外观样式设置示例

设置窗体标题为"窗体实例"，起始位置为屏幕居中，大小为宽500高500，不显示最大化、最小化按钮，加载背景图像。属性设置见表5-3。

**表5-3 "窗体实例"的属性设置**

| 属性名 | 属性值 | 属性名 | 属性值 |
|---|---|---|---|
| Text | 窗体实例 | StartPosition | CenterScreen |
| Size | (500,500) | MaximizeBox | false |
| BackgroundImage | C#背景.jpeg | MinimizeBox | false |

### 子任务三 窗体的常用方法与事件

### 9.窗体有哪些常用方法？

（1）**Activate方法**：将窗口置于前台并激活它。

```csharp
窗体名.Activate()
```

（2）**Show方法**：显示非模式窗体。非模式窗体弹出后仍然可以对其他窗体进行操作。

```csharp
窗体名.Show()
```

**【例5-1】** 单击按钮显示Form2窗体：

```csharp
private void button1_Click(object sender, EventArgs e)
{
    Form2 frm2 = new Form2();
    frm2.Show();
}
```

（3）**Hide方法**：隐藏窗体。窗体并没有从内存中释放，可以随时调用Show方法将其显示出来。

```csharp
窗体名.Hide()
```

**【例5-2】** 单击按钮隐藏Form2窗体：

```csharp
private void button2_Click(object sender, EventArgs e)
{
    Form2 frm2 = new Form2();
    frm2.Hide();
}
```

（4）**Close方法**：关闭窗体。窗体从内存中释放，之后无法对窗体进行任何操作。

```csharp
窗体名.Close()
```

**【例5-3】** 单击按钮关闭Form2窗体：

```csharp
private void button3_Click(object sender, EventArgs e)
{
    Form2 frm2 = new Form2();
    frm2.Close();
}
```

（5）**Refresh方法**：强制控件使其工作区无效并重绘自己和任何子控件（刷新窗体）。

```csharp
窗体名.Refresh()
```

### 10.窗体有哪些常用事件？

Windows应用程序的特点是事件驱动的。选择窗体事件时，可以通过选中窗体或控件，然后单击其"属性"窗口中的事件图标来实现。

（1）**Click事件**：单击窗体时引发。

**【例5-4】** 单击窗体，窗体上的按钮向右移动100：

```csharp
private void Form1_Click(object sender, EventArgs e)
{
    button1.Left += 100;
}
```

（2）**DoubleClick事件**：双击窗体时触发。

**【例5-5】** 双击窗体，窗体上的按钮向下移动100：

```csharp
private void Form1_DoubleClick(object sender, EventArgs e)
{
    button1.Top += 100;
}
```

> 注意：当同一对象的Click和DoubleClick事件都存在时，双击该对象会先执行单击事件，再执行双击事件。

（3）**FormClosing、FormClosed事件**：
- FormClosing事件在窗体关闭时引发，通常进行关闭前的确认和资源释放操作。
- FormClosed事件在窗体关闭后引发，通常用于处理保存窗口信息等操作。

**【例5-6】** 关闭窗体前进行确认：

```csharp
private void Form1_FormClosing(object sender, FormClosingEventArgs e)
{
    DialogResult dr = MessageBox.Show("是否关闭窗体？", "提示",
        MessageBoxButtons.YesNo, MessageBoxIcon.Warning);
    if (dr == DialogResult.Yes)
        e.Cancel = false;
    else
        e.Cancel = true;
}
```

（4）**KeyDown、KeyPress、KeyUp事件**：
- KeyDown：按下键盘上的键触发
- KeyPress：按下键盘上的键触发（主要捕获主键盘上的键，辅助键和编辑键区除外）
- KeyUp：释放按键时触发
- 三个事件若同时存在，执行顺序为：KeyDown → KeyPress → KeyUp

> 注意：窗体上有其他控件时，需要将窗体的 `KeyPreview` 属性设置为 `true`，才能接收KeyDown、KeyPress、KeyUp事件。

**【例5-7】** 分别通过KeyDown事件和KeyPress事件在标签中显示按键：

```csharp
private void Form1_KeyDown(object sender, KeyEventArgs e)
{
    label1.Text = e.KeyCode.ToString();
}

private void Form1_KeyPress(object sender, KeyPressEventArgs e)
{
    label2.Text = e.KeyChar.ToString();
}
```

（5）**Load事件**：窗体加载时触发，是窗体的默认事件。通常在Load事件处理程序中进行初始化操作。

（6）**MouseClick、MouseDoubleClick、MouseDown、MouseMove、MouseUp事件**：
- MouseClick：鼠标单击窗体时触发
- MouseDoubleClick：鼠标双击窗体时触发
- MouseDown：鼠标键按下时触发
- MouseMove：鼠标在窗体中移动时触发
- MouseUp：鼠标键释放时触发

> 注意：MouseDown、MouseClick、MouseUp三个事件同时存在时，执行顺序为：MouseDown → MouseClick → MouseUp。

**【例5-8】** 单击鼠标左键，观察在标签中显示的相应信息：

```csharp
private void Form1_MouseDown(object sender, MouseEventArgs e)
{
    if (e.Button == MouseButtons.Left)
    {
        label1.Text = "按下了鼠标左键";
    }
}

private void Form1_MouseUp(object sender, MouseEventArgs e)
{
    if (e.Button == MouseButtons.Left)
    {
        label1.Text = label1.Text + "释放鼠标键";
    }
}

private void Form1_MouseClick(object sender, MouseEventArgs e)
{
    label1.Text = label1.Text + "单击";
}
```

（7）**Resize事件**：调整窗体大小时触发。

**【例5-9】** 调整窗体大小，保持Label1在窗体水平方向上居中：

```csharp
private void Form1_Resize(object sender, EventArgs e)
{
    int x = (int)(0.5 * (this.Width - label1.Width));
    int y = label1.Location.Y;
    label1.Location = new System.Drawing.Point(x, y);
}
```

### 11.Load事件设置窗体属性示例

在窗体的Load事件中设置窗体标题为"登录系统"，背景色为蓝色，窗体显示在屏幕中央：

```csharp
private void Form1_Load(object sender, EventArgs e)
{
    this.Text = "登录系统";
    this.Font = new Font("宋体", 16, FontStyle.Bold);
    this.BackColor = Color.Blue;
    this.StartPosition = FormStartPosition.CenterScreen;
}
```

### 子任务四 多窗体间的调用

### 12.如何添加和删除窗体？

- **添加窗体**：在解决方案资源管理器中，在项目名称上右击，选择"添加"—"Windows窗体"或"添加"—"新建项"命令。在"添加新项"对话框中选择"Windows窗体"选项，输入窗体名称后单击"添加"按钮。
- **删除窗体**：在解决方案资源管理器中，在窗体名称上右击，选择"删除"命令。

> 注意：设置窗体名称时，不要使用C#关键字。

### 13.如何设置启动窗体？

多窗体的应用程序必须设置哪个窗体先运行，在Program.cs文件中通过改变 `Run()` 方法的参数可设置启动窗体：

```csharp
Application.Run(new Form1())
```

### 14.多窗体间如何调用？

若想从当前窗体显示另一个窗体，必须在当前窗体中创建另一个窗体的实例：

```csharp
新窗体类 窗体实例名 = new 新窗体类()
```

然后调用方法显示窗体：

- `窗体实例名.Show()`：以**非模式**对话框方式显示，主窗体和子窗体之间可以任意切换。
- `窗体实例名.ShowDialog()`：以**模式**对话框方式显示，必须关闭子窗体后才能操作主窗体。

### 15.模式窗体与非模式窗体的区别是什么？

| 特性 | 模式窗体（ShowDialog） | 非模式窗体（Show） |
|---|---|---|
| 操作限制 | 必须关闭后才能操作其他窗体 | 可以在多个窗体间自由切换 |
| 内存释放 | 关闭后窗体从内存中释放 | 窗体隐藏后仍在内存中 |
| 使用场景 | 确认对话框、登录窗口 | 多文档界面、工具窗口 |
