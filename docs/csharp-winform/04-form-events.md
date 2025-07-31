---
noteId: "85792fd05eec11f0a138bb2f2278db69"
tags: []

---

> 掌握窗体的属性：Name、Height、Width、Visible、WindowState、Dock、Font、BackColor、ForeColor、Icon、Size；


---


## 事件概述
- 事件是在代码中可以响应或处理的”操作“。
- 事件可以是用户发出的，也可以是代码或系统发出的。



## 🎯 一、常用窗体事件汇总

| 事件名称                 | 触发时机      | 用途说明              |
| -------------------- | --------- | ----------------- |
| **Load**             | 窗体加载完成后   | 初始化操作、控件赋值        |
| **FormClosing**      | 用户关闭窗体之前  | 可取消关闭、保存数据        |
| **FormClosed**       | 窗体关闭之后    | 释放资源、显示退出信息       |
| **Resize**           | 窗体大小变化时   | 自适应布局、重绘控件        |
| **KeyDown**          | 键盘按键被按下时  | 检测快捷键（支持组合键）      |
| **KeyPress**         | 键盘按下字符键时  | 获取字符输入（如 'a'、'1'） |
| **KeyUp**            | 按键释放时     | 实现连按控制逻辑          |
| **MouseDown**        | 鼠标按键按下    | 拖动、绘图、选择开始        |
| **MouseUp**          | 鼠标按键松开    | 拖动、绘图、选择结束        |
| **MouseMove**        | 鼠标在窗体内移动时 | 坐标追踪、绘图           |
| **MouseClick**       | 单击鼠标按钮时   | 响应点击（单击）          |
| **MouseDoubleClick** | 双击鼠标按钮时   | 打开窗口、编辑文本等        |
| **GiveFeedback**     | 拖放操作时提供反馈 | 显示拖动图标或提示         |

---

## 🧪 二、示例讲解（关键事件代码）

### ✅ 1. `Form_Load`

```csharp
private void MainForm_Load(object sender, EventArgs e)
{
    MessageBox.Show("窗体加载完成");
}
```

### ✅ 2. `Form_FormClosing`

```csharp
private void MainForm_FormClosing(object sender, FormClosingEventArgs e)
{
    var result = MessageBox.Show("确定要退出吗？", "提示", MessageBoxButtons.YesNo);
    if (result == DialogResult.No)
    {
        e.Cancel = true; // 取消关闭
    }
}
```

### ✅ 3. `Form_FormClosed`

```csharp
private void MainForm_FormClosed(object sender, FormClosedEventArgs e)
{
    MessageBox.Show("程序已关闭，再见！");
}
```

---

### ✅ 4. `Form_KeyDown`、`KeyPress`、`KeyUp`

```csharp
private void MainForm_KeyDown(object sender, KeyEventArgs e)
{
    if (e.KeyCode == Keys.F1)
        MessageBox.Show("你按下了 F1 键");
}
```

```csharp
private void MainForm_KeyPress(object sender, KeyPressEventArgs e)
{
    MessageBox.Show("你输入了字符：" + e.KeyChar);
}
```

```csharp
private void MainForm_KeyUp(object sender, KeyEventArgs e)
{
    Console.WriteLine("释放键：" + e.KeyCode);
}
```

> ⚠️ 提示：要让窗体接收键盘事件，请设置 `this.KeyPreview = true;`

---

### ✅ 5. 鼠标相关事件

```csharp
private void MainForm_MouseClick(object sender, MouseEventArgs e)
{
    MessageBox.Show("你点击了窗体，坐标：" + e.X + "," + e.Y);
}

private void MainForm_MouseDoubleClick(object sender, MouseEventArgs e)
{
    MessageBox.Show("你双击了窗体！");
}

private void MainForm_MouseDown(object sender, MouseEventArgs e)
{
    this.Text = "鼠标按下：" + e.Button.ToString();
}

private void MainForm_MouseMove(object sender, MouseEventArgs e)
{
    this.Text = $"鼠标位置：X={e.X}, Y={e.Y}";
}

private void MainForm_MouseUp(object sender, MouseEventArgs e)
{
    this.Text = "鼠标松开：" + e.Button.ToString();
}
```

---

### ✅ 6. `Form_Resize`

```csharp
private void MainForm_Resize(object sender, EventArgs e)
{
    this.Text = "窗体大小变化：" + this.Width + " x " + this.Height;
}
```

---

### ✅ 7. `GiveFeedback`（高级，了解即可）

这个事件通常用于“拖放操作”，改变鼠标指针：

```csharp
private void MainForm_GiveFeedback(object sender, GiveFeedbackEventArgs e)
{
    e.UseDefaultCursors = false;
    Cursor.Current = Cursors.Hand;
}
```

---

## 📌 三、考试重点与理解建议

| 考点    | 建议理解                                  |
| ----- | ------------------------------------- |
| 加载类事件 | `Load`：初始化程序设置                        |
| 关闭类事件 | `FormClosing` 和 `FormClosed`：保存数据、防误关 |
| 键盘事件  | `KeyDown` 和 `KeyPress`：快捷键与输入响应       |
| 鼠标事件  | 单击、双击、拖动（Down/Move/Up）                |
| 特殊事件  | `Resize` 和 `GiveFeedback` 用于动态变化和拖放反馈 |

---

## 🧠 巩固练习题（选择题）

**1. 哪个事件在窗体显示前触发？**

A. FormClosed

B. Load

C. FormClosing

✅ 答案：B

**2. 如何阻止窗体被关闭？**

A. FormClosed 取消

B. Resize 禁止

C. 在 FormClosing 里设置 `e.Cancel = true`

✅ 答案：C

**3. 鼠标移动时触发哪个事件？**

A. MouseDown

B. MouseClick

C. MouseMove

✅ 答案：C

---
