---
title: 任务六 同步训练
description: 算法与程序设计《C#》项目五 Windows应用程序开发 任务六 同步训练。包含20道选择题和5道填空题，覆盖窗体属性、控件属性与事件、列表框操作、计时器、滚动条、菜单、MDI窗体等知识点，附答案与解析。
keywords: [C#, 同步训练, 选择题, 填空题, 窗体, 控件, 属性, 事件, 对口升学]
sidebar_label: 任务六 同步训练
sidebar_position: 6
slug: /csharp/proj5/task6-exercises
tags: [C#, 项目五, 任务六, 对口升学]
---

## 知识点

### 一、选择题

**1.** 在C#中最基本的对象是（ ），是其他控件的容器。
- A. 命令按钮
- B. 文本框
- C. 窗体
- D. 标签

> **答案：C**。窗体是Windows窗体应用程序的基本单元，可以存放各种控件，是一种容器类对象。

**2.** 要使Form1窗体的标题栏显示"欢迎使用C#"，应设置窗体的（ ）属性。
- A. Caption
- B. Enabled
- C. Text
- D. Visible

> **答案：C**。窗体标题栏的内容由Text属性指定。

**3.** 确定控件在窗体上位置的属性是（ ）。
- A. Top和Left
- B. Width和Top
- C. Width和Height
- D. Top和Height

> **答案：A**。Top获取或设置控件距容器上边界的距离，Left获取或设置控件距容器左边界的距离。

**4.** 要改变Label控件中文字的颜色，可以设置Label控件的（ ）属性。
- A. FontColor
- B. FillColor
- C. ForeColor
- D. BackColor

> **答案：C**。ForeColor设置控件显示文字或图形的颜色（前景色）。

**5.** 要把一个命令按钮设置成不可见，应设置其Visible属性值为（ ）。
- A. True
- B. False
- C. Default
- D. Cancel

> **答案：B**。Visible属性设置为false时控件不可见。

**6.** 复选框的CheckState属性值为Checked时表示（ ）。
- A. 未被选中
- B. 被选中
- C. 无效
- D. 操作错误

> **答案：B**。CheckState的三个枚举成员：Checked（选中）、Unchecked（未选中）、Indeterminate（不确定）。

**7.** 若要显示列表框中列表项的数目，可通过访问（ ）方法来实现。
- A. Insert
- B. Count
- C. ListCount
- D. Clear

> **答案：B**。通过 `listBox1.Items.Count` 获取列表项个数。

**8.** 将数据项"C#"添加到列表框ListBox1中成为第三项，下列语句正确的是（ ）。
- A. `ListBox1.Items.Add("C#");`
- B. `ListBox1.Items.Insert(3, "C#");`
- C. `ListBox1.Items.AddRange("C#");`
- D. `ListBox1.Items.Insert(2, "C#");`

> **答案：D**。列表项索引从0开始，第三项的索引为2，使用Insert方法插入。

**9.** 计时器控件中要求每隔0.1秒触发一次Tick事件，那么计时器控件的Interval属性应该设置为（ ）。
- A. 1
- B. 10
- C. 100
- D. 1000

> **答案：C**。Interval以毫秒为单位，0.1秒=100毫秒。

**10.** 单击滚动条的滚动箭头时，产生的事件是（ ）。
- A. Click事件
- B. Scroll事件
- C. Move事件
- D. ValueChanged事件

> **答案：D**。单击滚动箭头时Value属性值改变，触发ValueChanged事件。滚动块移动时触发Scroll事件。

**11.** 若要获得列表框所选项的内容除了ListBox1.Text，另一种表达方式是（ ）。
- A. `ListBox1.SelectIndex`
- B. `ListBox1.Items`
- C. `ListBox1.SelectedItem`
- D. 以上都不对

> **答案：C**。SelectedItem获取或设置列表框中的当前选定项。

**12.** 假定Lbk1是列表框，下面表示删除列表框第二项的语句是（ ）。
- A. `ListBox1.Items.RemoveAt(2)`
- B. `ListBox1.Items.RemoveAt(1)`
- C. `Lbk1.Items.RemoveAt(2)`
- D. `Lbk1.Items.RemoveAt(1)`

> **答案：D**。列表项索引从0开始，第二项的索引为1。控件名称为Lbk1。

**13.** 下面属性可以控制菜单项可见或不可见的是（ ）。
- A. Hide
- B. Checked
- C. Visible
- D. Enabled

> **答案：C**。Visible属性控制菜单项是否可见，默认为true。

**14.** 菜单控件默认事件是（ ）。
- A. Click
- B. MouseUp
- C. Dblclick
- D. KeyPress

> **答案：A**。菜单项常用的事件是Click事件。

**15.** 若要求在文本框中输入密码时只显示*号，则应在该文本框的属性窗口中设置（ ）属性。
- A. PasswordChar属性值为*
- B. SelectedText属性值为*
- C. Text属性值为*
- D. UseSystemPasswordChar属性值为True

> **答案：A**。PasswordChar用于指定文本框中显示的字符，设为"*"后输入密码时显示星号。

**16.** 若要使标签框的大小自动与所显示的文本相适应，则可通过设置（ ）属性的值为True来实现。
- A. AutoSize
- B. Alignment
- C. Anchor
- D. Visible

> **答案：A**。AutoSize获取或设置是否自动调整标签控件的大小以完整显示其内容，默认为true。

**17.** C#程序中，文本框控件的（ ）属性用来设置其是否为只读的。
- A. ReadOnly
- B. Locked
- C. Lock
- D. Style

> **答案：A**。ReadOnly设置文本框是否为只读，默认值为false。若为true则不能编辑文本框中的内容。

**18.** 在C#程序中为使变量myForm引用的窗体对象显示为对话框，必须（ ）。
- A. 使用myForm.ShowDialog()方法显示对话框
- B. 将myForm对象的isDialog属性设为true
- C. 将myForm对象的FormBorderStyle枚举属性设置为FixedDialog
- D. 将变量myForm改为引用System.Windows.Dialog类的对象

> **答案：A**。ShowDialog()方法以模式对话框方式显示窗体。

**19.** 在Windows应用程序中，可以通过以下（ ）方法使一个窗体成为MDI窗体。
- A. 改变窗体的标题信息
- B. 在工程的选项中设置启动窗体
- C. 设置窗体的IsMdiContainer属性为true
- D. 设置窗体的ImeMode属性

> **答案：C**。将窗体的IsMdiContainer属性设置为true，即可使其成为MDI父窗体。

**20.** 设置Form2为启动窗体的语句为（ ）。
- A. `Application.Open(new Form2())`
- B. `Application.Run(new Form2())`
- C. `(new Form2()).Open()`
- D. `(new Form2()).Run()`

> **答案：B**。在Program.cs文件中通过 `Application.Run(new Form2())` 设置启动窗体。

---

### 二、填空题

**1.** 要使文本框可以显示多行文本，需设置 ________ 属性为true。

> **答案：Multiline**。Multiline属性设置为true时，文本框可以输入和显示多行文本。

**2.** 能显示窗体的方法是 ________。

> **答案：Show()**（或ShowDialog()）。Show()显示非模式窗体，ShowDialog()显示模式窗体。

**3.** 通过 ________ 属性可以启动或暂停计时器控件。

> **答案：Enabled**。Enabled为true时启动计时器，为false时暂停计时器。

**4.** 确定单选按钮是否被选中的属性是 ________。

> **答案：Checked**。Checked属性获取或设置是否已选中该控件。

**5.** 滚动条控件表示滑块当前值的属性为 ________。

> **答案：Value**。Value属性表示滚动块目前所在位置对应的值。
