---
noteId: "880336105eec11f0a138bb2f2278db69"
tags: []

---

下面是针对中职对口升学考试要求——**掌握 C# 窗体的创建和使用方法**——的详细知识点讲解，适合用作教学脚本或教材内容：

---

## 🎓 课程主题：掌握 C# 窗体的创建和使用方法

---

### 🧱 一、什么是窗体（Form）？

* **窗体（Form）** 是 Windows 桌面程序中用户与程序交互的“界面窗口”。
* 可以看作是一个“容器”，用来放置各种控件（按钮、文本框等）。

---

### 🧰 二、如何创建一个窗体？

#### 方法一：使用 Visual Studio 创建窗体项目

1. 打开 Visual Studio。
2. 选择【创建新项目】→【Windows 窗体应用 (.NET Framework)】。
3. 命名项目并点击【创建】。
4. 系统自动创建一个包含 `Form1.cs` 的项目，代表主窗体。

#### 方法二：手动添加新窗体

* 右击项目 → 添加 → 窗体（Windows 窗体）→ 命名如 `CalculatorForm.cs`。

---

### 📐 三、窗体的基本结构

```csharp
public partial class CalculatorForm : Form
{
    public CalculatorForm()
    {
        InitializeComponent(); // 初始化窗体组件
    }
}
```

* `: Form` 表示这个类继承自 `Form` 类。
* `InitializeComponent()` 用于加载窗体中控件和界面的定义。

---

### 🧾 四、窗体的常用属性

| 属性                | 作用                 |
| ----------------- | ------------------ |
| `Text`            | 设置窗体标题栏上的文字        |
| `Name`            | 窗体的名称（在代码中使用）      |
| `StartPosition`   | 窗体的启动位置（如居中）       |
| `Size`            | 窗体的宽高大小            |
| `BackColor`       | 背景颜色               |
| `Icon`            | 设置窗体图标             |
| `FormBorderStyle` | 控制窗体边框样式（如固定、无边框等） |

---

### 🖱️ 五、窗体的常用方法

| 方法名            | 作用             |
| -------------- | -------------- |
| `Show()`       | 显示窗体（非模态）      |
| `ShowDialog()` | 以对话框形式显示窗体（模态） |
| `Close()`      | 关闭窗体           |
| `Hide()`       | 隐藏窗体           |

---

### 🧠 六、窗体常用事件

| 事件            | 说明        |
| ------------- | --------- |
| `Load`        | 窗体加载时触发   |
| `FormClosing` | 窗体即将关闭时触发 |
| `FormClosed`  | 窗体关闭后触发   |
| `KeyDown`     | 用户按下键盘按键  |
| `MouseClick`  | 鼠标点击      |
| `Resize`      | 窗体大小调整    |

💡 这些事件可以在设计器界面双击窗体生成，或手动添加事件处理方法：

```csharp
private void CalculatorForm_Load(object sender, EventArgs e)
{
    MessageBox.Show("窗体加载完成！");
}
```

---

### 💻 七、运行主窗体

程序入口在 `Program.cs` 文件中：

```csharp
Application.Run(new CalculatorForm()); // 运行你的窗体
```

---

### 🧪 八、一个完整的示例

```csharp
public partial class HelloForm : Form
{
    public HelloForm()
    {
        InitializeComponent();
        this.Text = "我的第一个窗体";
        this.Load += HelloForm_Load;
    }

    private void HelloForm_Load(object sender, EventArgs e)
    {
        MessageBox.Show("欢迎使用 C# 窗体应用！");
    }
}
```

---

## 📌 总结

| 内容   | 要点                                    |
| ---- | ------------------------------------- |
| 创建窗体 | 新建项目或添加窗体                             |
| 属性设置 | Text、Size、BackColor 等                 |
| 常用方法 | Show、ShowDialog、Close                 |
| 常用事件 | Load、FormClosing、KeyDown、MouseClick 等 |

---



## 练习题

### ✅ **练习题 1：创建一个新窗体**

**题目：**
请在 Visual Studio 中创建一个新的 Windows 窗体应用程序项目，并完成以下操作：

* 修改窗体的 `Text` 属性为 “我的第一个窗体”；
* 设置窗体的背景色为浅蓝色；
* 设置窗体初始大小为 800x600；
* 运行程序，观察窗体显示效果。

**要求：** 手动修改窗体属性或通过设计器设置。

---

### ✅ **练习题 2：添加控件并设置属性**

**题目：**
在窗体中添加以下控件，并设置其基本属性：

| 控件类型    | 属性设置示例                       |
| ------- | ---------------------------- |
| Label   | Text = "请输入姓名："              |
| TextBox | Name = txtName               |
| Button  | Text = "提交"，Name = btnSubmit |

**补充：** 设置控件的位置，使它们垂直对齐美观。

---

### ✅ **练习题 3：注册并响应按钮点击事件**

**题目：**
为 “提交” 按钮添加点击事件，要求点击按钮后：

* 从 `TextBox` 中读取用户输入的姓名；
* 弹出消息框，显示：“你好，XXX！”

**提示：** 使用 `MessageBox.Show()` 显示信息。

---

### ✅ **练习题 4：窗体的生命周期事件应用**

**题目：**
为窗体注册以下事件，并观察程序运行时的触发顺序：

* `Load`
* `FormClosing`
* `FormClosed`

**任务：**
在每个事件中使用 `MessageBox.Show()` 显示一条提示信息，内容例如 “窗体加载完毕”、“窗体即将关闭”等。

---

### ✅ **练习题 5：键盘事件与窗体交互**

**题目：**
为窗体注册 `KeyDown` 事件，要求：

* 如果用户按下 `Enter` 键，则弹出提示框：“你按下了回车键”；
* 如果用户按下 `Escape` 键，则关闭窗体。

**提示：**

* 设置 `KeyPreview = true` 以便窗体接收键盘事件；
* 判断按键可以用 `e.KeyCode == Keys.Enter`。

---

