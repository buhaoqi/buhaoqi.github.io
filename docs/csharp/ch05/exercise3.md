---
# 这部分是关键！侧边栏显示名由这里决定
title: 练习：窗体程序设计  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 练习：窗体程序设计  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 7  # 侧边栏中排在第1位
---


## C# 窗体程序设计 —— 上机考试试卷（标准版）

**考试时间：90 分钟**
**满分：100 分**
**考试形式：上机操作**

---

## 一、考试环境说明（给学生看的）

* 开发环境：Visual Studio
* 项目类型：**Windows 窗体应用程序（WinForms）**
* 编程语言：C#
* 默认窗体：`Form1`

---

## 二、考试任务说明（大题一题型）

请在 `Form1` 中，**按要求完成窗体属性设置、方法调用及事件处理功能**。

---

## 三、操作题目（学生看到的题干）

### 【一】窗体属性设置（20 分）

在窗体加载时完成以下设置：

1. 将窗体名称设置为 `MainForm`
2. 将窗体标题设置为：`学生信息管理系统`
3. 设置窗体宽度为 `800`，高度为 `500`
4. 设置窗体背景颜色为浅蓝色
5. 设置窗体前景颜色为深蓝色
6. 设置窗体字体为：宋体，12 号
7. 设置窗体启动状态为最大化

---

### 【二】窗体方法操作（20 分）

在窗体上放置 5 个按钮，分别实现以下功能：

1. 单击“显示窗体”按钮，显示窗体
2. 单击“隐藏窗体”按钮，隐藏窗体
3. 单击“激活窗体”按钮，使窗体成为当前活动窗体
4. 单击“刷新窗体”按钮，刷新窗体界面
5. 单击“退出”按钮，关闭窗体

---

### 【三】窗体事件处理（40 分）

#### 1️⃣ 窗体加载事件（5 分）

* 窗体加载时，在标题栏显示“欢迎使用本系统”

---

#### 2️⃣ 窗体关闭事件（10 分）

* 关闭窗体前弹出确认框：“确定要退出吗？”
* 若选择“否”，取消关闭操作

---

#### 3️⃣ 键盘事件（10 分）

* 按下任意键时，在标题栏显示按下的键
* 按下 `Esc` 键时，关闭窗体

---

#### 4️⃣ 鼠标事件（10 分）

* 鼠标单击窗体时，弹出提示框：“鼠标单击”
* 鼠标双击窗体时，弹出提示框：“鼠标双击”
* 鼠标移动时，在标题栏显示当前鼠标坐标

---

#### 5️⃣ 窗体大小改变事件（5 分）

* 当窗体大小发生改变时，在标题栏显示当前宽度和高度

---

### 【四】拖拽反馈事件（20 分）

* 在窗体的 `GiveFeedback` 事件中，使用系统默认鼠标指针

---

---






太好了，这一步**就是老师手里真正能“落地”的东西了** 👍
下面我给你一份**【标准参考代码答案】**，**完全按河北中职对口 C# WinForms 考纲来写**，代码**规范、可直接运行、便于判分**。

> 说明

* 项目类型：**Windows 窗体应用程序（WinForms）**
* 默认窗体：`Form1`
* 只给**关键代码**，控件（按钮等）默认已拖到窗体上
* 所有事件 **双击自动生成即可**

---

# 一、窗体属性（Name / Size / Font / Color / Icon / WindowState）

📍 **Form_Load 事件中统一设置（推荐考试写法）**

```csharp
private void Form1_Load(object sender, EventArgs e)
{
    // Name
    this.Name = "MainForm";

    // 标题
    this.Text = "学生信息管理系统";

    // 大小
    this.Width = 800;
    this.Height = 500;
    // 或
    // this.Size = new Size(800, 500);

    // 字体
    this.Font = new Font("宋体", 12);

    // 背景色 / 前景色
    this.BackColor = Color.LightBlue;
    this.ForeColor = Color.DarkBlue;

    // 窗体状态
    this.WindowState = FormWindowState.Maximized;

    // 键盘事件必须
    this.KeyPreview = true;
}
```

📌 **Icon**
一般通过属性窗口设置，考试中默认不强制代码写。

---

# 二、窗体常用方法（Show / Hide / Close / Activate / Refresh）

## 1️⃣ 显示 / 隐藏窗体

```csharp
private void buttonShow_Click(object sender, EventArgs e)
{
    this.Show();
}

private void buttonHide_Click(object sender, EventArgs e)
{
    this.Hide();
}
```

---

## 2️⃣ 关闭窗体

```csharp
private void buttonClose_Click(object sender, EventArgs e)
{
    this.Close();
}
```

---

## 3️⃣ 激活与刷新

```csharp
private void buttonActivate_Click(object sender, EventArgs e)
{
    this.Activate();
}

private void buttonRefresh_Click(object sender, EventArgs e)
{
    this.Refresh();
}
```

---

# 三、窗体事件（重点必考）

---

## 1️⃣ FormClosing（关闭前确认）

```csharp
private void Form1_FormClosing(object sender, FormClosingEventArgs e)
{
    DialogResult result = MessageBox.Show(
        "确定要退出吗？",
        "提示",
        MessageBoxButtons.YesNo,
        MessageBoxIcon.Question);

    if (result == DialogResult.No)
    {
        e.Cancel = true; // 取消关闭
    }
}
```

---

## 2️⃣ FormClosed（关闭后）

```csharp
private void Form1_FormClosed(object sender, FormClosedEventArgs e)
{
    MessageBox.Show("窗体已关闭");
}
```

---

# 四、键盘事件（KeyDown / KeyPress / KeyUp）

⚠ **必须：KeyPreview = true**

---

## KeyDown（按键判断，ESC 退出）

```csharp
private void Form1_KeyDown(object sender, KeyEventArgs e)
{
    this.Text = "KeyDown：" + e.KeyCode.ToString();

    if (e.KeyCode == Keys.Escape)
    {
        this.Close();
    }
}
```

---

## KeyPress（获取字符）

```csharp
private void Form1_KeyPress(object sender, KeyPressEventArgs e)
{
    this.Text = "KeyPress：" + e.KeyChar.ToString();
}
```

---

## KeyUp（松开键）

```csharp
private void Form1_KeyUp(object sender, KeyEventArgs e)
{
    this.Text = "KeyUp：" + e.KeyCode.ToString();
}
```

---

# 五、鼠标事件（Mouse 系列）

---

## 1️⃣ 单击 / 双击

```csharp
private void Form1_MouseClick(object sender, MouseEventArgs e)
{
    MessageBox.Show("鼠标单击");
}

private void Form1_MouseDoubleClick(object sender, MouseEventArgs e)
{
    MessageBox.Show("鼠标双击");
}
```

---

## 2️⃣ 按下 / 移动 / 松开

```csharp
private void Form1_MouseDown(object sender, MouseEventArgs e)
{
    this.Text = "鼠标按下";
}

private void Form1_MouseMove(object sender, MouseEventArgs e)
{
    this.Text = $"鼠标坐标：X={e.X}, Y={e.Y}";
}

private void Form1_MouseUp(object sender, MouseEventArgs e)
{
    this.Text = "鼠标松开";
}
```

---

# 六、Resize（窗体大小改变）

```csharp
private void Form1_Resize(object sender, EventArgs e)
{
    this.Text = $"宽度：{this.Width}  高度：{this.Height}";
}
```

---

# 七、GiveFeedback（拖拽反馈事件）

```csharp
private void Form1_GiveFeedback(object sender, GiveFeedbackEventArgs e)
{
    e.UseDefaultCursors = true;
}
```

📌 考试记住一句话就行：
**GiveFeedback → 鼠标指针**

---

# 八、【终极综合】一题覆盖全部（标准答案版）

```csharp
private void Form1_Load(object sender, EventArgs e)
{
    this.Text = "欢迎使用本系统";
    this.BackColor = Color.LightYellow;
    this.KeyPreview = true;
}

private void Form1_KeyDown(object sender, KeyEventArgs e)
{
    if (e.KeyCode == Keys.F1)
    {
        MessageBox.Show("这是帮助信息");
    }
}

private void Form1_MouseMove(object sender, MouseEventArgs e)
{
    this.Text = $"X={e.X}, Y={e.Y}";
}

private void buttonToggle_Click(object sender, EventArgs e)
{
    if (this.Visible)
        this.Hide();
    else
        this.Show();
}

private void Form1_FormClosing(object sender, FormClosingEventArgs e)
{
    if (MessageBox.Show("确定退出？", "提示",
        MessageBoxButtons.YesNo) == DialogResult.No)
    {
        e.Cancel = true;
    }
}
```

---

# 九、给你一个**“判卷老师级总结”**

| 考点     | 是否全部覆盖 |
| ------ | ------ |
| 窗体属性   | ✅      |
| 窗体方法   | ✅      |
| 窗体事件   | ✅      |
| 符合中职对口 | ✅      |
| 可直接抄写  | ✅      |

---

如果你愿意，我可以下一步帮你做三件**非常“教学实战”的事**：

1️⃣ 把这些代码 **压缩成“考试速背版”**
2️⃣ 给你一份 **【评分点对照表】（写一句给几分）**
3️⃣ 出一套 **完整上机考试卷 + 标准评分标准**



---

# 一、题目整体设计思路（先给你吃个定心丸）

* 每题都是 **“在已有窗体上完成指定功能”**
* 不搞花里胡哨，**完全符合中职考试风格**
* 所有考点：

  * ✅ 窗体属性
  * ✅ 窗体方法
  * ✅ 窗体事件
* **可拆开单独出题，也可合成一套上机大题**

---

# 二、基础操作题（属性为主）

## 题目一：窗体基本属性设置（必考送分题）

### 【题目要求】

新建一个窗体程序，完成以下要求：

1. 设置窗体名称为 `MainForm`
2. 设置窗体标题为“学生信息管理系统”
3. 设置窗体高度为 `500`，宽度为 `800`
4. 设置窗体背景颜色为 **浅蓝色**
5. 设置窗体前景颜色为 **深蓝色**
6. 设置窗体字体为 **宋体，12号**
7. 为窗体设置一个图标
8. 设置窗体启动后为 **最大化状态**

### 【考点覆盖】

| 知识点         | 是否覆盖 |
| ----------- | ---- |
| Name        | ✅    |
| Height      | ✅    |
| Width       | ✅    |
| Size        | ✅    |
| BackColor   | ✅    |
| ForeColor   | ✅    |
| Font        | ✅    |
| Icon        | ✅    |
| WindowState | ✅    |

---

## 题目二：窗体大小控制

### 【题目要求】

程序运行后，将窗体大小修改为：

* 宽度：`600`
* 高度：`400`

请使用代码完成。

### 【考点】

* `Size`
* `Width`
* `Height`

---

# 三、方法操作题（Show / Hide / Close 等）

## 题目三：窗体显示与隐藏

### 【题目要求】

在窗体上放置两个按钮：

* 按钮1：显示窗体
* 按钮2：隐藏窗体

要求：

* 单击“显示窗体”按钮时，调用窗体的 **Show()** 方法
* 单击“隐藏窗体”按钮时，调用窗体的 **Hide()** 方法

### 【考点】

| 方法     | 覆盖 |
| ------ | -- |
| Show() | ✅  |
| Hide() | ✅  |

---

## 题目四：关闭窗体

### 【题目要求】

在窗体上放置一个“退出”按钮，单击该按钮时关闭当前窗体。

### 【考点】

* `Close()`

---

## 题目五：窗体刷新与激活

### 【题目要求】

在窗体上放置两个按钮：

1. “激活窗体”：单击后使窗体成为当前活动窗体
2. “刷新窗体”：单击后刷新窗体界面

### 【考点】

| 方法         | 覆盖 |
| ---------- | -- |
| Activate() | ✅  |
| Refresh()  | ✅  |

---

# 四、事件操作题（考试最容易丢分的部分）

## 题目六：窗体加载事件

### 【题目要求】

当窗体加载时，在窗体标题中显示：

> “欢迎使用本系统”

### 【考点】

* `Form.Load`

---

## 题目七：窗体关闭确认

### 【题目要求】

当用户关闭窗体时：

* 弹出提示框：“确定要退出吗？”
* 若选择“否”，取消关闭操作

### 【考点】

| 事件          | 覆盖    |
| ----------- | ----- |
| FormClosing | ✅     |
| FormClosed  | （可顺带） |

---

## 题目八：键盘事件综合应用

### 【题目要求】

实现以下功能：

1. 按下任意键时，在窗体标题中显示按下的键
2. 按下 **Esc 键** 时关闭窗体

### 【考点】

| 事件       | 覆盖 |
| -------- | -- |
| KeyDown  | ✅  |
| KeyPress | ✅  |
| KeyUp    | ✅  |

📌 提示学生：
要设置 `KeyPreview = true`

---

# 五、鼠标事件操作题（高频考点）

## 题目九：鼠标单击与双击

### 【题目要求】

1. 鼠标单击窗体时，弹出提示：“鼠标单击”
2. 鼠标双击窗体时，弹出提示：“鼠标双击”

### 【考点】

| 事件               | 覆盖 |
| ---------------- | -- |
| MouseClick       | ✅  |
| MouseDoubleClick | ✅  |

---

## 题目十：鼠标按下、移动、松开

### 【题目要求】

1. 鼠标按下时，在标题中显示“鼠标按下”
2. 鼠标移动时，实时显示鼠标坐标
3. 鼠标松开时，在标题中显示“鼠标松开”

### 【考点】

| 事件        | 覆盖 |
| --------- | -- |
| MouseDown | ✅  |
| MouseMove | ✅  |
| MouseUp   | ✅  |

---

# 六、窗体大小变化与拖拽反馈

## 题目十一：窗体大小改变事件

### 【题目要求】

当窗体大小发生改变时，在标题中显示当前窗体的宽度和高度。

### 【考点】

* `Resize`

---

## 题目十二：GiveFeedback 事件（考纲冷门但必须覆盖）

### 【题目要求】

当在窗体中执行拖拽操作时：

* 在 `GiveFeedback` 事件中，将鼠标指针设置为默认样式

### 【考点】

* `GiveFeedback`

📌 **这是典型“知道就能得分”的题**

---

# 七、终极综合操作题（整卷压轴）

## 题目十三：综合窗体功能实现

### 【题目要求】

设计一个窗体程序，实现以下功能：

1. 窗体加载时设置标题和背景颜色
2. 按下键盘 `F1` 弹出帮助提示
3. 鼠标在窗体中移动时显示坐标
4. 单击按钮可隐藏窗体
5. 再次点击按钮显示窗体
6. 关闭窗体时弹出确认对话框

### 【覆盖情况】

✅ **所有属性 / 方法 / 事件全部覆盖**

---

# 八、给你一个“出题老师级”总结

> 这套题的特点是：

* ✔ 每题**独立可考**
* ✔ 操作目标明确，**不拼理解深度**
* ✔ 非常符合 **河北中职对口计算机 C# 高考**风格
* ✔ 改卷时**一眼能判对错**

---

如果你愿意，下一步我可以帮你：

* ✅ 把这些题 **整理成“上机考试试卷”版**
* ✅ 给出 **标准参考代码答案**
* ✅ 给你一份 **“考前 30 分钟突击清单”**

你更想要哪一个？


太好了，这一步**就是老师手里真正能“落地”的东西了** 👍
下面我给你一份**【标准参考代码答案】**，**完全按河北中职对口 C# WinForms 考纲来写**，代码**规范、可直接运行、便于判分**。

> 说明

* 项目类型：**Windows 窗体应用程序（WinForms）**
* 默认窗体：`Form1`
* 只给**关键代码**，控件（按钮等）默认已拖到窗体上
* 所有事件 **双击自动生成即可**

---

# 一、窗体属性（Name / Size / Font / Color / Icon / WindowState）

📍 **Form_Load 事件中统一设置（推荐考试写法）**

```csharp
private void Form1_Load(object sender, EventArgs e)
{
    // Name
    this.Name = "MainForm";

    // 标题
    this.Text = "学生信息管理系统";

    // 大小
    this.Width = 800;
    this.Height = 500;
    // 或
    // this.Size = new Size(800, 500);

    // 字体
    this.Font = new Font("宋体", 12);

    // 背景色 / 前景色
    this.BackColor = Color.LightBlue;
    this.ForeColor = Color.DarkBlue;

    // 窗体状态
    this.WindowState = FormWindowState.Maximized;

    // 键盘事件必须
    this.KeyPreview = true;
}
```

📌 **Icon**
一般通过属性窗口设置，考试中默认不强制代码写。

---

# 二、窗体常用方法（Show / Hide / Close / Activate / Refresh）

## 1️⃣ 显示 / 隐藏窗体

```csharp
private void buttonShow_Click(object sender, EventArgs e)
{
    this.Show();
}

private void buttonHide_Click(object sender, EventArgs e)
{
    this.Hide();
}
```

---

## 2️⃣ 关闭窗体

```csharp
private void buttonClose_Click(object sender, EventArgs e)
{
    this.Close();
}
```

---

## 3️⃣ 激活与刷新

```csharp
private void buttonActivate_Click(object sender, EventArgs e)
{
    this.Activate();
}

private void buttonRefresh_Click(object sender, EventArgs e)
{
    this.Refresh();
}
```

---

# 三、窗体事件（重点必考）

---

## 1️⃣ FormClosing（关闭前确认）

```csharp
private void Form1_FormClosing(object sender, FormClosingEventArgs e)
{
    DialogResult result = MessageBox.Show(
        "确定要退出吗？",
        "提示",
        MessageBoxButtons.YesNo,
        MessageBoxIcon.Question);

    if (result == DialogResult.No)
    {
        e.Cancel = true; // 取消关闭
    }
}
```

---

## 2️⃣ FormClosed（关闭后）

```csharp
private void Form1_FormClosed(object sender, FormClosedEventArgs e)
{
    MessageBox.Show("窗体已关闭");
}
```

---

# 四、键盘事件（KeyDown / KeyPress / KeyUp）

⚠ **必须：KeyPreview = true**

---

## KeyDown（按键判断，ESC 退出）

```csharp
private void Form1_KeyDown(object sender, KeyEventArgs e)
{
    this.Text = "KeyDown：" + e.KeyCode.ToString();

    if (e.KeyCode == Keys.Escape)
    {
        this.Close();
    }
}
```

---

## KeyPress（获取字符）

```csharp
private void Form1_KeyPress(object sender, KeyPressEventArgs e)
{
    this.Text = "KeyPress：" + e.KeyChar.ToString();
}
```

---

## KeyUp（松开键）

```csharp
private void Form1_KeyUp(object sender, KeyEventArgs e)
{
    this.Text = "KeyUp：" + e.KeyCode.ToString();
}
```

---

# 五、鼠标事件（Mouse 系列）

---

## 1️⃣ 单击 / 双击

```csharp
private void Form1_MouseClick(object sender, MouseEventArgs e)
{
    MessageBox.Show("鼠标单击");
}

private void Form1_MouseDoubleClick(object sender, MouseEventArgs e)
{
    MessageBox.Show("鼠标双击");
}
```

---

## 2️⃣ 按下 / 移动 / 松开

```csharp
private void Form1_MouseDown(object sender, MouseEventArgs e)
{
    this.Text = "鼠标按下";
}

private void Form1_MouseMove(object sender, MouseEventArgs e)
{
    this.Text = $"鼠标坐标：X={e.X}, Y={e.Y}";
}

private void Form1_MouseUp(object sender, MouseEventArgs e)
{
    this.Text = "鼠标松开";
}
```

---

# 六、Resize（窗体大小改变）

```csharp
private void Form1_Resize(object sender, EventArgs e)
{
    this.Text = $"宽度：{this.Width}  高度：{this.Height}";
}
```

---

# 七、GiveFeedback（拖拽反馈事件）

```csharp
private void Form1_GiveFeedback(object sender, GiveFeedbackEventArgs e)
{
    e.UseDefaultCursors = true;
}
```

📌 考试记住一句话就行：
**GiveFeedback → 鼠标指针**

---

# 八、【终极综合】一题覆盖全部（标准答案版）

```csharp
private void Form1_Load(object sender, EventArgs e)
{
    this.Text = "欢迎使用本系统";
    this.BackColor = Color.LightYellow;
    this.KeyPreview = true;
}

private void Form1_KeyDown(object sender, KeyEventArgs e)
{
    if (e.KeyCode == Keys.F1)
    {
        MessageBox.Show("这是帮助信息");
    }
}

private void Form1_MouseMove(object sender, MouseEventArgs e)
{
    this.Text = $"X={e.X}, Y={e.Y}";
}

private void buttonToggle_Click(object sender, EventArgs e)
{
    if (this.Visible)
        this.Hide();
    else
        this.Show();
}

private void Form1_FormClosing(object sender, FormClosingEventArgs e)
{
    if (MessageBox.Show("确定退出？", "提示",
        MessageBoxButtons.YesNo) == DialogResult.No)
    {
        e.Cancel = true;
    }
}
```

---

# 九、给你一个**“判卷老师级总结”**

| 考点     | 是否全部覆盖 |
| ------ | ------ |
| 窗体属性   | ✅      |
| 窗体方法   | ✅      |
| 窗体事件   | ✅      |
| 符合中职对口 | ✅      |
| 可直接抄写  | ✅      |

---

如果你愿意，我可以下一步帮你做三件**非常“教学实战”的事**：

1️⃣ 把这些代码 **压缩成“考试速背版”**
2️⃣ 给你一份 **【评分点对照表】（写一句给几分）**
3️⃣ 出一套 **完整上机考试卷 + 标准评分标准**

你想先要哪一个？



## 附加：标准评分标准

> **原则：功能实现即可得分，不要求写法唯一**

---

## （一）窗体属性（20 分）

| 评分点             | 分值 |
| --------------- | -- |
| Name = MainForm | 2  |
| Text 设置正确       | 2  |
| Width 设置        | 3  |
| Height 设置       | 3  |
| BackColor       | 3  |
| ForeColor       | 3  |
| Font            | 2  |
| WindowState     | 2  |

---

## （二）窗体方法（20 分）

| 功能   | 方法         | 分值 |
| ---- | ---------- | -- |
| 显示窗体 | Show()     | 4  |
| 隐藏窗体 | Hide()     | 4  |
| 激活窗体 | Activate() | 4  |
| 刷新窗体 | Refresh()  | 4  |
| 关闭窗体 | Close()    | 4  |

---

## （三）窗体事件（40 分）

### 1️⃣ Load（5 分）

| 评分点        | 分值 |
| ---------- | -- |
| 使用 Load 事件 | 3  |
| 标题显示正确     | 2  |

---

### 2️⃣ FormClosing（10 分）

| 评分点               | 分值 |
| ----------------- | -- |
| 使用 FormClosing 事件 | 3  |
| MessageBox 提示     | 3  |
| e.Cancel = true   | 4  |

---

### 3️⃣ 键盘事件（10 分）

| 评分点               | 分值 |
| ----------------- | -- |
| KeyPreview = true | 3  |
| 键盘事件处理            | 4  |
| Esc 键关闭窗体         | 3  |

---

### 4️⃣ 鼠标事件（10 分）

| 评分点              | 分值 |
| ---------------- | -- |
| MouseClick       | 3  |
| MouseDoubleClick | 3  |
| MouseMove 显示坐标   | 4  |

---

### 5️⃣ Resize（5 分）

| 评分点          | 分值 |
| ------------ | -- |
| 使用 Resize 事件 | 3  |
| 显示宽高         | 2  |

---

## （四）GiveFeedback（20 分）

| 评分点                      | 分值 |
| ------------------------ | -- |
| 使用 GiveFeedback 事件       | 10 |
| UseDefaultCursors = true | 10 |

---