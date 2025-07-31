---
noteId: "7e3c28d05eec11f0a138bb2f2278db69"
tags: []

---


根据考试大纲要求

> **“掌握窗体及控件的概念、属性、方法、事件”**

是 Windows 应用开发（尤其是 WinForms 或 WPF）中的重要基础。

---

## 什么是“窗体”（Form）

* 窗体是 Windows 程序的**主界面**，类似你看到的每一个 Windows 程序窗口。
* 在 C# WinForms 中，窗体是一个类，继承自 `System.Windows.Forms.Form`。
* 窗体本身也是一个“控件”，但它可以容纳其他控件，比如按钮、文本框。

- **窗体(Form)**：Windows应用程序的基本界面单元
- **主窗体**：应用程序启动时显示的第一个窗口
- **对话框**：特殊窗体（如MessageBox，OpenFileDialog）
- **MDI窗体**：多文档界面（父窗体包含子窗体）

**示例代码：**

```csharp
public partial class MainForm : Form
{
    public MainForm()
    {
        InitializeComponent(); // 初始化窗体
    }
}
```

---

## 什么是“控件”（Control）

* 控件是窗体上的各种元素，用来显示信息或与用户交互。
* 常见控件有：

  * `Button`（按钮）
  * `Label`（标签）
  * `TextBox`（文本框）
  * `ListBox`（列表框）
  * `ComboBox`（下拉框）
  * `PictureBox`（图片框）

控件是可重用组件。

用于封装用户界面功能。

在基于Windows的客户端应用程序中使用。

---

## 控件的“属性”（Properties）

属性用来描述控件的**外观**、**内容**和**行为特征**。

| 属性名         | 作用            |
| ----------- | ------------- |
| `Text`      | 控件上显示的文字      |
| `Name`      | 控件的名字，用于代码中引用 |
| `BackColor` | 背景颜色          |
| `Enabled`   | 控件是否可用        |
| `Visible`   | 控件是否可见        |
| `Location`  | 控件的位置（X，Y）    |
| `Size`      | 控件的大小（宽，高）    |

**示例：**

```csharp
button1.Text = "点击我";
textBox1.BackColor = Color.LightYellow;
```

---

## 控件的“方法”（Methods）

方法是控件可以执行的动作。

| 方法名       | 功能               |
| --------- | ---------------- |
| `Show()`  | 显示窗体或控件          |
| `Hide()`  | 隐藏窗体或控件          |
| `Focus()` | 把焦点设定到控件上        |
| `Clear()` | 清除内容（比如 TextBox） |

**示例：**

```csharp
textBox1.Clear(); // 清空文本框内容
```

---

## 控件的“事件”（Events）

事件是控件在某些操作时触发的“信号”，程序可以响应这些事件。

| 常见事件          | 说明        |
| ------------- | --------- |
| `Click`       | 用户点击控件    |
| `TextChanged` | 控件内容变化时触发 |
| `Load`        | 窗体加载时触发   |
| `KeyPress`    | 用户按键时触发   |

**示例（按钮点击事件）：**

```csharp
private void button1_Click(object sender, EventArgs e)
{
    MessageBox.Show("你点击了按钮！");
}
```

---
## ✅ 总结一句话：

> 窗体是界面，控件是部件，属性是外形和行为特征，方法是操作动作，事件是用户交互的入口。

---

## 考试复习重点建议

| 知识点 | 掌握目标                             |
| --- | -------------------------------- |
| 窗体  | 知道它是程序的主界面，继承自 Form              |
| 控件  | 能说出常见控件的名字与用途                    |
| 属性  | 能说出常用属性的功能（Text、Name、BackColor等） |
| 方法  | 能举出控件常用方法并简单使用                   |
| 事件  | 理解事件响应的含义，知道 `Click` 是最常用事件之一    |

---

## 🧠 课堂小练习（模拟题）

**题目 1：以下哪个属性可以设置按钮上的文字？**

A. Name

B. Text

C. Click

D. Show

✅ 答案：B

**题目 2：如果要让一个按钮响应点击，应该使用哪个事件？**

A. Load

B. Focus

C. Click

D. Clear

✅ 答案：C

**题目 3：用代码设置 `label1` 显示“你好”：**

```csharp
label1.____ = "你好";
```

✅ 正确填空：`Text`

---



