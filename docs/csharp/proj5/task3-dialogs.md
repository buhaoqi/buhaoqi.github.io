---
title: 任务三 对话框
description: 算法与程序设计《C#》项目五 Windows应用程序开发 任务三 对话框知识点总结。介绍MessageBox消息框（Show方法、MessageBoxButton枚举表5-26、MessageBoxIcon枚举表5-27、DialogResult返回值表5-28）、ToolTip提示框、模式对话框与非模式对话框（ShowDialog/Show）、通用对话框（OpenFileDialog/SaveFileDialog/ColorDialog/FontDialog），含表5-26至表5-32、例5-15至例5-16完整代码示例。
keywords: [C#, 对话框, MessageBox, Show, ToolTip, 模式对话框, 非模式对话框, ShowDialog, OpenFileDialog, SaveFileDialog, ColorDialog, FontDialog, DialogResult, 对口升学]
sidebar_label: 任务三 对话框
sidebar_position: 3
slug: /csharp/proj5/task3-dialogs
tags: [C#, 项目五, 任务三, 对口升学]
---

## 知识点

### 1.什么是对话框？

对话框是Windows人机交互的常用窗口，可以向用户进行信息提示，也可以提供选项供用户选择或等待用户输入，以便更好地执行应用程序。

### 子任务一 消息框（MessageBox）

### 2.MessageBox消息框的作用和语法格式是什么？

消息框对话框是一个预定义对话框，用来向用户显示应用程序的一些消息提示，如程序执行结果、出错信息等。在C#中，MessageBox位于 `System.Windows.Forms` 命名空间中。

MessageBox只提供一个方法 `Show()` 来显示消息对话框：

```csharp
public static DialogResult MessageBox.Show(string text, string title,
    MessageBoxButtons buttons, MessageBoxIcon icon)
```

参数说明：
- **text**：在消息框中提示的信息
- **title**：消息框标题栏中的文本
- **buttons**：MessageBoxButton枚举值之一，指定显示哪些按钮
- **icon**：MessageBoxIcon枚举值之一，指定显示哪个图标
- **返回值**：DialogResult枚举类型

### 3.MessageBoxButton枚举值有哪些？

**表5-26 MessageBoxButton枚举值及说明**

| 成员名称 | 说明 |
|---|---|
| OK | 提供"确定"按钮 |
| OKCancel | 提供"确定"和"取消"两个按钮 |
| AbortRetryIgnore | 提供"中止""重试"和"忽略"三个按钮 |
| YesNoCancel | 提供"是""否"和"取消"三个按钮 |
| YesNo | 提供"是"和"否"两个按钮 |
| RetryCancel | 提供"重试"和"取消"两个按钮 |

### 4.MessageBoxIcon枚举值有哪些？

**表5-27 MessageBoxIcon枚举值及说明**

| 成员名称 | 说明 |
|---|---|
| None | 消息框未包含符号 |
| Hand | 红色背景圆圈中有白色× |
| Question | 圆圈中有一个问号 |
| Exclamation | 黄色背景三角形中有感叹号 |
| Asterisk | 圆圈中有小写字母i |
| Stop | 红色背景圆圈中有白色× |
| Error | 红色背景圆圈中有白色× |
| Warning | 黄色背景三角形中有感叹号 |
| Information | 圆圈中有小写字母i |

### 5.DialogResult返回值有哪些？

**表5-28 DialogResult枚举值及说明**

| 返回值 | 说明 |
|---|---|
| None | 从对话框返回了Nothing，表明模式对话框继续运行 |
| OK | 对话框的返回值是OK（从"确定"按钮发送） |
| Cancel | 对话框的返回值是Cancel（从"取消"按钮发送） |
| Abort | 对话框的返回值是Abort（从"中止"按钮发送） |
| Retry | 对话框的返回值是Retry（从"重试"按钮发送） |
| Ignore | 对话框的返回值是Ignore（从"忽略"按钮发送） |
| Yes | 对话框的返回值是Yes（从"是"按钮发送） |
| No | 对话框的返回值是No（从"否"按钮发送） |

### 6.MessageBox应用示例

单击按钮后弹出消息框，根据用户单击的不同按钮显示不同的提示：

```csharp
private void button1_Click(object sender, EventArgs e)
{
    DialogResult d;
    d = MessageBox.Show("测试一下消息对话框", "测试",
        MessageBoxButtons.YesNoCancel,
        MessageBoxIcon.Warning,
        MessageBoxDefaultButton.Button1);
    if (d == DialogResult.Yes)
        MessageBox.Show("你单击的为'是'按钮");
    else if (d == DialogResult.No)
        MessageBox.Show("你单击的为'否'按钮");
    else if (d == DialogResult.Cancel)
        MessageBox.Show("你单击的为'取消'按钮");
    else
        MessageBox.Show("你没有进行任何的操作！");
}
```

### 子任务二 提示框（ToolTip）

### 7.ToolTip提示框的作用是什么？

ToolTip控件是当用户将鼠标悬停在控件上时显示简短的提示信息。如果在程序设计窗体中添加了ToolTip组件，则程序设计窗体中的所有控件的属性中将自动增加一个ToolTip属性，用于为控件添加提示信息。

### 8.ToolTip应用示例

为按钮和文本框设置提示信息：

**表5-29 属性设置**

| 对象 | 属性 | 属性值 |
|---|---|---|
| Button1 | tooltip | "这是一个按钮" |
| TextBox1 | tooltip | "这是一个文本框" |

### 子任务三 模式对话框

### 9.模式窗体和非模式窗体的区别是什么？

根据Windows窗体的显示状态，可以分为模式窗体和非模式窗体：

- **模式窗体**：该窗体显示时，其他窗体不可用，只有关闭模式窗体后其他窗体才能恢复可用。使用 `ShowDialog()` 方法显示。
- **非模式窗体**：多个窗体可以同时操作，用户可以单击任何一个窗体。使用 `Show()` 方法显示。

### 10.模式窗体和非模式窗体的代码示例

**【例5-15】** 以模式窗体显示Form2：

```csharp
Form2 frm = new Form2();    //实例化窗体对象
frm.ShowDialog();           //以模式窗体显示Form2
```

**【例5-16】** 以非模式窗体显示Form2：

```csharp
Form2 frm = new Form2();    //实例化窗体对象
frm.Show();                 //以非模式窗体显示Form2
```

### 11.模式对话框与非模式对话框对比

**表5-30 属性设置示例**

| 对象 | 属性 | 属性值 |
|---|---|---|
| Form1 | Text | 模式与非模式 |
| Button1 | Text | 打开模式对话框 |
| Button2 | Text | 打开非模式对话框 |
| Form2 | Text | 我是模式对话框 |
| Form3 | Text | 我是非模式对话框 |

```csharp
private void button1_Click(object sender, EventArgs e)
{
    Form2 frm = new Form2();
    frm.ShowDialog();    //模式窗体
}

private void button2_Click(object sender, EventArgs e)
{
    Form3 frm = new Form3();
    frm.Show();          //非模式窗体
}
```

### 子任务四 通用对话框

### 12.通用对话框有哪些类型？

通用对话框是.NET框架提供的一组基于Windows的标准对话框，都是**模式对话框**，具有通用的方法 `ShowDialog()`。主要包括：

| 控件 | 说明 |
|---|---|
| OpenFileDialog | 标准"打开"对话框，选择要打开的文件 |
| SaveFileDialog | 标准"另存为"对话框，指定保存路径和文件名 |
| ColorDialog | 标准"颜色"对话框，选择标准颜色或自定义颜色 |
| FontDialog | 标准"字体"对话框，设置字体、字形、字号、颜色等 |

### 13.OpenFileDialog控件的常用属性有哪些？

**表5-31 OpenFileDialog控件常用属性及说明**

| 属性 | 说明 |
|---|---|
| Filter | 获取或设置文件名筛选器。格式为"筛选器\|筛选器模式"，如 `"Word文档(*.doc)\|*.doc\|图片文件(*.jpg;*.gif;*.bmp)\|*.jpg;*.gif;*.bmp"` |
| InitialDirectory | 获取或设置文件对话框显示的初始目录 |
| Multiselect | 获取或设置是否允许选择多个文件，默认为false |

### 14.SaveFileDialog控件的特有属性有哪些？

SaveFileDialog控件常用属性大多与OpenFileDialog相同，但没有Multiselect属性。特有属性：

- **CreatePrompt**：当用户指定的文件不存在时，是否提示用户允许创建该文件，默认为false。
- **OverwritePrompt**：当用户指定的文件名已存在时，是否提示用户允许替换该文件，默认为true。

### 15.四种通用对话框应用示例

**表5-32 属性设置**

| 对象 | 属性 | 属性值 |
|---|---|---|
| Button1 | Text | "打开"对话框 |
| Button2 | Text | "另存为"对话框 |
| Button3 | Text | "颜色"对话框 |
| Button4 | Text | "字体"对话框 |

```csharp
private void button1_Click(object sender, EventArgs e)
{
    openFileDialog1.InitialDirectory = "D:\\";    //设置初始目录
    openFileDialog1.Filter = "bmp文件(*.bmp)|*.bmp|gif文件(*.gif)|*.gif|jpg文件(*.jpg)|*.jpg";
    //设置只能选择图片文件
    openFileDialog1.ShowDialog();
}

private void button2_Click(object sender, EventArgs e)
{
    saveFileDialog1.ShowDialog();
}

private void button3_Click(object sender, EventArgs e)
{
    colorDialog1.ShowDialog();
}

private void button4_Click(object sender, EventArgs e)
{
    fontDialog1.ShowDialog();
}
```
