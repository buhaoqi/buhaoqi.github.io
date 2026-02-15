---
# 这部分是关键！侧边栏显示名由这里决定
title: 控件概述  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 控件概述  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 0  # 侧边栏中排在第1位
---

本节高考考点

1. 掌握控件的概念、属性、方法、事件；
2. 掌握标签(Label)属性：AutoSize、Text、Focused、Font、Height、Size、Visible、Width、Text Align、Name、Image、Anchor、BorderStyle、CanFocus；
3. 掌握文本框(TextBox)的属性：Text、TextLength、MaxLength、Multiline、PasswordChar、SelectedText、ReadOnly、TabIndex；
4. 掌握文本框(TextBox)的事件：TextChanged；
5. 掌握按钮（Button）的属性：Name、Enabled、Text、TabIndex；
6. 掌握按钮（Button）的事件：Click、Enter、MouseUp、TextChanged；
7. 掌握组合框(ComboBox)的属性：DroppedDown、Items、SelectedIndex、SelectedItem、SelectedText、Sorted、Text；
8. 掌握列表框(ListBox)的属性：Items、MultiColumn、SelectedItems、Sorted、Text；
9. 掌握单选按钮(RadioButton)的属性：Checked、Text；
10. 掌握复选框(CheckBox)的属性：Checked、CheckState、Text；
11. 掌握滚动条(HScrollBar、VScrollBar)的属性：Value、SmallChange、LargeChange；
12. 掌握时钟控件(Timer)的属性：Interval；
13. 掌握时钟控件的Tick事件；
14. 了解分组框(GroupBox)的属性：Text、Visible；
15. 了解选项卡(TabControl)的属性：SelectedTab、TabPages、Multiline；


## 一、控件是什么
定义：
1. 控件是构成用户界面的基本元素(零件)。


特点：
- 控件有控制能力。NET提前预设好的功能。
    - 控制输入
    - 控制状态
    - 控制流程
    - 控制选择
- 控件特定的外观。

用途：通过控件可以实现数据展示、用户交互。

2. 控件本质上是一个“类”
```csharp
// 控件本质上是一个“类”(Class)
public class Button : ButtonBase, IButtonControl
{
    // 属性：描述控件的状态
    public string Text { get; set; }
    public bool Enabled { get; set; }
    
    // 方法：控件能执行的操作
    public void PerformClick();
    public void Focus();
    
    // 事件：用户与控件的交互
    public event EventHandler Click;
}

// 实际使用时：
Button btn = new Button();  // 创建按钮控件实例
btn.Text = "确定";          // 设置属性
btn.Click += Btn_Click;     // 订阅事件
```

**从层次结构看**
```
System.Object
    └── System.MarshalByRefObject
        └── System.ComponentModel.Component
            └── System.Windows.Forms.Control  ← 所有控件的基类
                ├── Button                    ← 按钮控件
                ├── TextBox                  ← 文本框控件
                ├── Label                    ← 标签控件
                └── ...                      ← 其他控件
```

## 二、**控件的三大要素**

### **1. 属性（Properties）—— “是什么”**
```csharp
// 外观属性
button1.Text = "点击我";       // 显示的文字
button1.BackColor = Color.Red; // 背景颜色
button1.Size = new Size(100, 30); // 尺寸

// 行为属性
button1.Enabled = true;        // 是否可用
button1.Visible = true;        // 是否可见
button1.TabStop = true;        // 是否可以用Tab键选中
```

### **2. 方法（Methods）—— “能做什么”**
```csharp
// 控件操作自己的方法
button1.Focus();           // 让按钮获得焦点
button1.Show();            // 显示控件
button1.Hide();            // 隐藏控件
button1.Refresh();         // 强制重绘

// 控件操作其他控件的方法
textBox1.Clear();          // 清空文本框内容
listBox1.Items.Add("新项"); // 向列表添加项
```

### **3. 事件（Events）—— “对什么反应”**
```csharp
// 用户交互事件
button1.Click += Button1_Click;        // 鼠标点击
textBox1.TextChanged += TextBox1_TextChanged; // 文本变化

// 键盘事件
textBox1.KeyPress += TextBox1_KeyPress;       // 按键
textBox1.KeyDown += TextBox1_KeyDown;         // 键按下
textBox1.KeyUp += TextBox1_KeyUp;             // 键释放

// 鼠标事件
button1.MouseMove += Button1_MouseMove;       // 鼠标移动
button1.MouseClick += Button1_MouseClick;     // 鼠标点击
```
## 三、**控件分类（按功能）**

> 记忆口诀：显输交选控定布，控件分类不糊涂

|口诀字|对应分类|核心控件|
|---|---|---|
|显|显示类|Label（标签）|
|输|输入类|TextBox（文本框）|
|交|交互类|Button（按钮）|
|选|选择类|ComboBox、ListBox、RadioButton、CheckBox|
|控|控制类|HScrollBar、VScrollBar（滚动条）|
|定|定时类|Timer（时钟控件）|
|布|布局类|GroupBox、TabControl（容器 / 布局控件）|






