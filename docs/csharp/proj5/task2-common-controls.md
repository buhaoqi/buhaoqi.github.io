---
title: 任务二 常用控件
description: 算法与程序设计《C#》项目五 Windows应用程序开发 任务二 常用控件知识点总结。介绍控件基本操作（添加/对齐/删除/锁定）、控件共有属性（表5-4）、控件常用事件（表5-5），以及Label标签、TextBox文本框、Button按钮、RadioButton单选按钮、CheckBox复选框、GroupBox分组框、ListBox列表框、ComboBox组合框、DateTimePicker日期时间、HScrollBar/VScrollBar滚动条、ProgressBar进度条、Timer时钟、TabControl选项卡控件的属性与方法，含表5-6至表5-25、例5-10至例5-14完整代码示例。
keywords: [C#, 常用控件, Label, TextBox, Button, RadioButton, CheckBox, GroupBox, ListBox, ComboBox, DateTimePicker, HScrollBar, VScrollBar, ProgressBar, Timer, TabControl, 属性, 事件, 对口升学]
sidebar_label: 任务二 常用控件
sidebar_position: 2
slug: /csharp/proj5/task2-common-controls
tags: [C#, 项目五, 任务二, 对口升学]
---

## 知识点

### 1.什么是控件？

控件是构成用户界面的基本元素。控件包含在窗体对象中，具有自身的属性、事件和方法。它可以向用户显示信息，或响应用户的操作。控件的基类是 `System.Windows.Forms` 命名空间的Control类，其他控件类都派生自Control类。

### 2.对控件的基本操作有哪些？

（1）**添加控件**：三种方式——绘制控件（拖拽鼠标）、双击/拖拽控件（默认大小）、编程方式（ `new` 关键字实例化）。

**【例5-10】** 通过Button按钮的Click事件添加一个TextBox控件：

```csharp
private void button1_Click(object sender, EventArgs e)
{
    TextBox myText = new TextBox();   //实例化TextBox类
    this.Controls.Add(myText);        //将控件添加到当前窗体中
}
```

（2）**对齐控件**：选定多个控件后，通过"格式"—"对齐"命令选择对齐方式：左对齐、居中对齐、右对齐、顶端对齐、中间对齐、底部对齐。

（3）**删除控件**：右击控件选择"删除"命令，或选中控件后按Delete键。

（4）**锁定控件**：在属性面板中设置 `Locked` 属性为 `true`，或右击选择"锁定控件"命令。

### 3.控件的常用共有属性有哪些？

**表5-4 控件的常用共有属性**

| 属性 | 功能 |
|---|---|
| Name | 可通过此名称来引用这个控件 |
| Text | 获取或设置控件显示文本的属性 |
| Size | 用于设置控件的宽度Width和高度Height |
| Height | 获取或设置控件的高度 |
| Width | 获取或设置控件的宽度 |
| Location | 获取或设置控件相对于容器控件左上角的(X,Y)坐标值 |
| Top | 获取或设置控件左顶点距离容器上边界的距离 |
| Left | 获取或设置控件左顶点距离容器左边界的距离 |
| Font | 设置控件中文字的字体相关属性 |
| BackColor | 设置控件的背景颜色 |
| ForeColor | 设置控件显示的文字或图形的颜色 |
| Visible | 设置该控件在用户界面上是否可见 |
| Enabled | 设置控件能否被使用，false时变灰色不可操作 |
| BackgroundImage | 获取或设置在控件中显示的背景图像 |
| Dock | 获取或设置控件停靠的位置和方式（None/Top/Bottom/Left/Right/Fill） |
| TabIndex | 获取或设置控件在容器中的Tab键顺序 |
| TabStop | 获取或设置一个值，指示用户能否通过Tab键切换至该控件 |

### 4.控件的常用事件有哪些？

**表5-5 控件的常用事件**

| 事件 | 触发条件 |
|---|---|
| Click | 单击控件时引发 |
| DoubleClick | 双击控件时引发 |
| KeyDown | 当控件有焦点时，按下一个键时引发 |
| KeyPress | 当控件有焦点时，按一个键时引发 |
| KeyUp | 当控件有焦点时，释放一个键时引发 |
| MouseDown | 鼠标指针在控件上，按下鼠标键时发生 |
| MouseUp | 鼠标指针在控件上，释放鼠标键时发生 |
| MouseMove | 鼠标滑过控件时引发 |

---

### 子任务一 标签控件（Label）

### 5.Label控件的作用和属性是什么？

标签（Label）控件用于在窗体上显示文本。Label控件中的文本为**只读文本**，用户不能编辑，通常用来显示提示信息或为其他控件显示说明信息。

**表5-6 Label控件的常用属性**

| 属性 | 说明 |
|---|---|
| Text | 设置控件上显示的文本 |
| Font | 设置显示文本的字符格式 |
| AutoSize | 获取或设置是否自动调整标签控件的大小以完整显示其内容，默认为true |
| TextAlign | 获取或设置标签中文本的对齐方式，默认值为Top,Left |
| BorderStyle | 获取或设置标签的边框样式：None（默认）/FixedSingle/Fixed3D |
| Image | 获取或设置显示在标签上的图像 |
| Focused | 设置控件是否有输入焦点 |
| Anchor | 定位控件和其父窗口间的相对位置，默认值为Top,Left |
| CanFocus | 设置控件是否可以接收焦点 |

### 子任务二 文本框控件（TextBox）

### 6.TextBox控件的常用属性有哪些？

文本框（TextBox）控件用于获取用户输入的数据或显示文本，可编辑也可设为只读，可以显示多行，也可用于设置密码。

**表5-8 TextBox控件的常用属性**

| 属性 | 说明 |
|---|---|
| Text | 获取或设置文本框的显示内容 |
| TextLength | 获取或设置文本框中文本的长度 |
| MaxLength | 获取或设置可在文本框中手动输入的最大字符数 |
| Multiline | 设置是否可在文本框中输入多行文本 |
| PasswordChar | 用于指定文本框中显示的字符，例如输入密码显示为"*" |
| UseSystemPasswordChar | 控件中的文本是否使用系统默认密码字符"●"显示 |
| SelectedText | 表示文本框中被选定的文本内容 |
| ReadOnly | 设置文本框是否为只读，默认值为false |

### 7.TextBox的TextChanged事件

当文本框中的文本发生更改时，引发TextChanged事件，是文本框的默认事件。

**【例5-11】** 当文本框中的文本更改时，Label1控件中显示更改后的文本：

```csharp
private void textBox1_TextChanged(object sender, EventArgs e)
{
    label1.Text = textBox1.Text;
}
```

### 子任务三 按钮控件（Button）

### 8.Button控件的常用属性和事件是什么？

Button控件允许用户通过单击来执行操作，既可以显示文本也可以显示图像。

**表5-10 Button控件的常用属性**

| 属性 | 说明 |
|---|---|
| Text | 设置Button控件显示的文本，可使用"&"符号指定快捷键。例如 `&Copy`，运行时按Alt+C相当于单击该按钮 |
| Enabled | 设置Button控件是否可用，false时呈灰色显示，默认为true |
| Image | 获取或设置显示在按钮控件上的图像 |

Button控件的默认事件为**Click事件**。

### 9.如何设置"接受"按钮和"取消"按钮？

（1）**接受按钮**：设置窗体的 `AcceptButton` 属性，用户每次按Enter键相当于单击该按钮。

**【例5-12】** 将button1设置为Form1的"接受"按钮：

```csharp
private void Form1_Load(object sender, EventArgs e)
{
    this.AcceptButton = button1;
}
private void button1_Click(object sender, EventArgs e)
{
    MessageBox.Show("按了回车键");
}
```

（2）**取消按钮**：设置窗体的 `CancelButton` 属性，用户每次按Esc键相当于单击该按钮。

**【例5-13】** 将button1设置为Form1的"取消"按钮：

```csharp
private void Form1_Load(object sender, EventArgs e)
{
    this.CancelButton = button1;
}
private void button1_Click(object sender, EventArgs e)
{
    MessageBox.Show("按了Esc键");
}
```

### 子任务四 选择类控件及分组

### 10.GroupBox分组框控件的属性是什么？

分组框（GroupBox）控件用来对窗体上的控件进行分组，并为同一组控件添加边框和标题，是一个容器控件。

**表5-12 GroupBox控件的常用属性**

| 属性 | 说明 |
|---|---|
| Text | 设置分组框的标题 |
| Visible | 设置是否显示该控件，false时该分组框中的对象将一起隐藏 |

### 11.RadioButton单选按钮控件的属性是什么？

单选按钮（RadioButton）为用户提供由两个或多个互斥选项组成的选项集。同一分组框中的所有单选按钮构成一个选项组，同一时刻只能选择一个。

**表5-13 RadioButton控件的常用属性**

| 属性 | 说明 |
|---|---|
| Checked | 获取或设置是否已选中该控件，默认为false |
| Text | RadioButton控件的显示文本 |

常用事件有Click、CheckedChanged等。

### 12.CheckBox复选框控件的属性是什么？

复选框（CheckBox）允许在多个选项中选择多个。与单选按钮不同的是，单选按钮只能选一个，复选框可以选择多个。

**表5-14 CheckBox控件的常用属性**

| 属性 | 说明 |
|---|---|
| Text | CheckBox控件的显示文本 |
| Checked | 获取或设置是否已选中该控件，默认为false |
| CheckState | 获取或设置CheckBox的状态：Checked（选中）/Unchecked（未选中）/Indeterminate（不确定，灰色显示） |

常用事件为Click、CheckedChanged等。

### 13.选择类控件综合示例

设计用户基本信息统计窗体，输入姓名，选择性别、民族、爱好，单击"确定"按钮弹出信息确认消息框：

```csharp
private void button1_Click(object sender, EventArgs e)
{
    string name, sex = "男", mz = "汉族", ah = "";
    if (textBox1.Text == "")
    {
        MessageBox.Show("名字不能为空");
        textBox1.Focus();
        return;
    }
    else
    {
        name = textBox1.Text;
        if (radioButton2.Checked)
            sex = radioButton2.Text;
        if (radioButton4.Checked)
            mz = radioButton4.Text;
        if (checkBox1.Checked)
            ah += checkBox1.Text;
        if (checkBox2.Checked)
            if (ah == "")
                ah += checkBox2.Text;
            else
                ah = ah + "、" + checkBox2.Text;
        if (checkBox3.Checked)
            if (ah == "")
                ah += checkBox3.Text;
            else
                ah = ah + "、" + checkBox3.Text;
    }
    string info = string.Format("我叫{0}\n我是一个{1}{2}孩\n我喜欢{3}", name, mz, sex, ah);
    MessageBox.Show(info, "信息确认");
}
```

---

### 子任务五 列表类控件

### 14.ListBox列表框控件的常用属性有哪些？

列表框（ListBox）控件为用户提供选择的列表，用户可从中选取一个或多个选项。

**表5-16 ListBox控件的常用属性**

| 属性 | 说明 |
|---|---|
| Text | 当前选取的选项中第一个选项的文本 |
| Items | 获取或设置列表控件项的集合，下标从0开始 |
| SelectedItem | 获取或设置列表框中的当前选定项 |
| SelectedItems | 获取包含所有当前选定项的集合 |
| SelectedIndex | 获取或设置当前选定项从0开始的索引 |
| SelectedIndices | 获取包含所有当前选定项从0开始的索引集合 |
| SelectionMode | 选择模式：One（默认，只能选一项）/None（无法选择）/MultiSimple（可选多项）/MultiExtended（可扩展多选） |
| MultiColumn | 设置是否支持多列，默认为false |
| Sorted | 设置是否按字母顺序排序，默认为false |

### 15.ListBox控件的Items集合有哪些常用方法？

```csharp
// ① 添加一个列表项
listBox1.Items.Add("英语");

// ② 添加一组列表项
string[] s = new string[]{"数学", "语文", "英语"};
listBox1.Items.AddRange(s);

// ③ 插入一个列表项到指定位置
listBox1.Items.Insert(3, "C#程序设计");

// ④ 删除指定索引的列表项
listBox1.Items.RemoveAt(3);

// ⑤ 删除所有列表项
listBox1.Items.Clear();

// ⑥ 获取列表项个数
int count = listBox1.Items.Count;

// ⑦ 判断某项是否在集合中
listBox1.Items.Contains("C#");
```

### 16.ComboBox组合框控件的常用属性有哪些？

组合框（ComboBox）把文本框和列表框组合在一起，用户既可以从列表中选择项，也可以输入新文本。用法与ListBox大致相同，但不能同时选择多项。

**表5-17 ComboBox控件的常用属性**

| 属性 | 说明 |
|---|---|
| Text | 获取或设置当前组合框中被选定的文本 |
| Items | 获取组合框中所有项的集合 |
| SelectedItem | 获取或设置当前选定项 |
| SelectedIndex | 获取或设置当前选定项从0开始的索引 |
| SelectedText | 获取或设置当前选定项的文本 |
| DropDownStyle | 样式：Simple（可编辑，始终显示列表）/DropDown（默认，可编辑，需点下拉箭头）/DropDownList（不可编辑，需点下拉箭头） |
| Sorted | 设置是否排序 |
| DroppedDown | 组合框当前是否被下拉 |

常用事件有Click、KeyPress和SelectedIndexChanged等。

### 17.DateTimePicker日期时间控件的常用属性有哪些？

日期时间（DateTimePicker）控件用于选择日期和时间。单击下拉箭头会出现按月份显示的日历。

**表5-18 DateTimePicker控件的常用属性**

| 属性 | 说明 |
|---|---|
| MaxDate | 获取或设置可选择的最大日期 |
| MinDate | 获取或设置可选择的最小日期 |
| Text | 获取当前控件选择的日期 |
| Value | 获取当前控件选择的日期、时间。可使用Year()、Month()和Day()方法获取年、月、日 |

常用事件是ValueChanged，当选择的日期发生改变时引发。

**【例5-14】** 调用DateTimePicker控件的Text属性和Value属性：

```csharp
private void button1_Click(object sender, EventArgs e)
{
    textBox1.Text = dateTimePicker1.Text;
    //使用Text属性获取当前选择的日期
    textBox2.Text = dateTimePicker1.Value.Year.ToString();
    //使用Value属性的Year()方法获取年
    textBox3.Text = dateTimePicker1.Value.Month.ToString();
    //使用Value属性的Month()方法获取月
    textBox4.Text = dateTimePicker1.Value.Day.ToString();
    //使用Value属性的Day()方法获取日
    textBox5.Text = dateTimePicker1.Value.ToString();
    //使用Value属性获取当前选择的日期、时间
}
```

---

### 子任务六 滚动条控件

### 18.滚动条控件的常用属性和事件是什么？

滚动条控件分为水平滚动条（HScrollBar）和垂直滚动条（VScrollBar）。滚动条结构为两端各有一个箭头，中间有一个可移动的滚动块。

**表5-20 滚动条控件的常用属性**

| 属性 | 说明 |
|---|---|
| Maximum | 表示滚动条的最大值 |
| Minimum | 表示滚动条的最小值 |
| Value | 表示滚动块目前所在位置对应的值 |
| LargeChange | 设置滚动条的最大变动值 |
| SmallChange | 设置滚动条的最小变动值 |

常用事件包括：
- **Scroll事件**：滚动块移动时发生
- **ValueChanged事件**：改变Value属性值时发生

### 19.滚动条控件应用示例

通过三个水平滚动条改变文本框中文字的颜色（RGB）：

```csharp
private void hScrollBar1_ValueChanged(object sender, EventArgs e)
{
    int r = hScrollBar1.Value;
    int g = hScrollBar2.Value;
    int b = hScrollBar3.Value;
    textBox1.ForeColor = Color.FromArgb(r, g, b);
}
// hScrollBar2和hScrollBar3的ValueChanged事件代码相同
```

---

### 子任务七 状态显示控件

### 20.ProgressBar进度条控件的属性是什么？

进度条（ProgressBar）控件通过在水平方框中显示适当数目的矩形来指示工作进度。

**表5-22 ProgressBar控件的常用属性**

| 属性 | 说明 |
|---|---|
| Maximum | 设置进度条的最大值 |
| Minimum | 设置进度条的最小值 |
| Value | 表示操作过程中已完成的进度 |
| Step | 用于指定Value属性递增的值，通过PerformStep()方法递增 |

### 21.Timer时钟控件的属性、方法和事件是什么？

时钟（Timer）控件每隔一定的时间间隔自动执行一次计时器事件，是不可见的控件。

**表5-23 Timer控件的常用属性**

| 属性 | 说明 |
|---|---|
| Interval | 设置两个计时器事件之间的时间间隔，以毫秒为单位。1000ms=1s |
| Enabled | 设置是否启用计时器。false（默认）表示暂停，true表示启动 |

常用方法：
- `Start()`：启动计时器（也可通过设置Enabled为true）
- `Stop()`：停止计时器（也可通过设置Enabled为false）

时钟控件每隔Interval指定的时间间隔引发一次**Tick事件**。

### 22.ProgressBar与Timer综合示例

单击按钮后进度条开始显示加载进度，满格后停止：

```csharp
private void button1_Click(object sender, EventArgs e)
{
    timer1.Enabled = true;
}

private void timer1_Tick(object sender, EventArgs e)
{
    if (progressBar1.Value < 100)
    {
        progressBar1.PerformStep();
    }
    else
    {
        timer1.Enabled = false;
    }
}
```

---

### 子任务八 选项卡控件

### 23.TabControl选项卡控件的属性是什么？

选项卡（TabControl）控件用于管理相关的选项卡页集，可以把窗体设计成多页，使窗体功能划分为多个部分。

**表5-25 TabControl控件的常用属性**

| 属性 | 说明 |
|---|---|
| TabPages | 获取该选项卡控件中选项卡页的集合，可添加和删除TabPage对象 |
| Multiline | 获取或设置是否可以显示一行以上的选项卡 |
| SelectedTab | 获取或设置当前选定的选项卡页 |
