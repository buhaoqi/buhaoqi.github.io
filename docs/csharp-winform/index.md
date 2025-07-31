---
noteId: "85811e105ef711f0a138bb2f2278db69"
tags: []

---

科目: Windows应用程序设计(WinForms)

1．掌握窗体及控件的概念、属性、方法、事件；

2．掌握窗体的属性：Name、Height、Width、Visible、WindowState、Dock、Font、BackColor、ForeColor、Icon、Size；

3．掌握窗体的常用方法：Activate、Close、Refresh、Show、Hide；

4．掌握窗体的事件：FormClosed、FormClosing、KeyDown、KeyPress、KeyUp、 Load、MouseClick、MouseDoubleClick、MouseDown、MouseMove、MouseUp、Resize、GiveFeedback

5．掌握C#窗体的创建和使用方法；

6．掌握标签(Label)属性：AutoSize、Text、Focused、Font、Height、Size、Visible、Width、Text Align、Name、Image、Anchor、BorderStyle、CanFocus；

7．掌握文本框(TextBox)的属性：Text、TextLength、MaxLength、Multiline、PasswordChar、SelectedText、ReadOnly、TabIndex；

8．掌握文本框(TextBox)的事件：TextChanged；

9．掌握按钮（Button）的属性：Name、Enabled、Text、TabIndex；

10．掌握按钮（Button）的事件：Click、Enter、MouseUp、TextChanged；

11．掌握组合框(ComboBox)的属性：DroppedDown、Items、SelectedIndex、SelectedItem、SelectedText、Sorted、Text；

12．掌握列表框(ListBox)的属性：Items、MultiColumn、SelectedItems、Sorted、Text；

13．掌握单选按钮(RadioButton)的属性：Checked、Text；

14．掌握复选框(CheckBox)的属性：Checked、CheckState、Text；

15．掌握滚动条(HScrollBar、VScrollBar)的属性：Value、SmallChange、LargeChange；

16．掌握时钟控件(Timer)的属性：Interval；

17．掌握时钟控件的Tick事件；

18．了解分组框(GroupBox)的属性：Text、Visible；

19．了解选项卡(TabControl)的属性：SelectedTab、TabPages、Multiline；

20．了解多文档界面窗体；

21．了解多窗体间的调用的功能实现方法；

22．了解菜单(MainMenu)控件、ToolTip控件、对话框控件、消息框。

## 资源

- [Windows 窗体文档](https://learn.microsoft.com/zh-cn/dotnet/desktop/winforms/)
- [官网教程：使用 .NET 创建 Windows 窗体应用](https://learn.microsoft.com/zh-cn/dotnet/desktop/winforms/get-started/create-app-visual-studio)

## C# WinForms 控件学习计划

---

### 阶段一：基础控件与窗体操作

目标：掌握窗体、Label、TextBox、Button 的基本属性和事件处理。

| 控件/知识点    | 重点内容                                     | 练习建议           |
| --------- | ---------------------------------------- | -------------- |
| `Form`    | `Text`、`Name`、`StartPosition`、事件（`Load`） | 创建窗体，设置标题与大小   |
| `Label`   | `Text`、`Font`、`ForeColor`                | 显示欢迎语，修改颜色、字体  |
| `TextBox` | `Text`、`Multiline`、`ReadOnly`            | 输入姓名，输出问候语     |
| `Button`  | `Text`、`Click` 事件                        | 点击按钮触发事件，输出提示语 |

🔨 **实践项目：**

> 登录窗体（输入用户名+密码，点击登录，显示提示）

---

### 阶段二：常用控件进阶

目标：掌握选择、分组、输入限制类控件，理解控件嵌套和事件响应。

| 控件/知识点        | 重点内容                         | 练习建议              |
| ------------- | ---------------------------- | ----------------- |
| `CheckBox`    | `Checked`、多选状态               | 选择爱好（如编程、运动等）     |
| `RadioButton` | `Checked`、`GroupBox`分组       | 选择性别、学历（分组互斥）     |
| `GroupBox`    | 分组容器                         | 搭配 RadioButton 使用 |
| `ComboBox`    | 下拉列表 `Items`、`SelectedItem`  | 下拉选择城市            |
| `ListBox`     | 多项选择 `Items`、`SelectedItems` | 选择喜欢的课程           |

🔨 **实践项目：**

> 课程报名窗体（选择课程、确认提交、显示结果）

---

### 阶段三：定时、布局与菜单控件

目标：掌握 Timer、菜单控件、TabControl 和状态栏的使用，提升窗体交互能力。

| 控件/知识点        | 重点内容                        | 练习建议                 |
| ------------- | --------------------------- | -------------------- |
| `Timer`       | `Interval`、`Tick`           | 每秒更新时间或倒计时           |
| `ProgressBar` | `Value`、`Maximum`、`Minimum` | 显示任务进度               |
| `TrackBar`    | 滑块控件，调整音量等                  | 滑动调整音量值              |
| `TabControl`  | 多页内容布局                      | 设置学生信息与成绩页签          |
| `MenuStrip`   | 主菜单栏、子菜单项事件                 | 创建“文件”-“保存”、“退出”等菜单栏 |
| `StatusStrip` | 状态栏信息                       | 显示应用状态、当前时间等         |

🔨 **实践项目：**

> 记事本（包含菜单、计时器、字体设置等）

---

## 学习计划总结表（可打印）

| 周次  | 内容                 | 控件示例                            | 实战练习            |
| --- | ------------------ | ------------------------------- | --------------- |
| 第1周 | 窗体 + 基础控件          | Label, TextBox, Button          | 登录窗体、问候语程序      |
| 第2周 | 选择控件 + 分组          | CheckBox, RadioButton, ComboBox | 报名系统、调查问卷       |
| 第3周 | Timer + 菜单 + 标签页控件 | Timer, MenuStrip, TabControl    | 时钟应用、记事本、小型表单应用 |

---

## ✅ 辅助工具推荐：

* 使用 **Visual Studio 2019/2022 社区版**（免费）
* 熟练使用“属性窗口”“事件窗口”
* 利用“工具箱”拖拽控件快速构建界面

---

## 📦 Bonus：附带练习题（可按阶段提供）

* 每控件配套 3\~5 道练习题（判断题 + 编程题）
* 各阶段配套实战小项目（含参考答案）
* 如需，我可以提供 👉 控件练习题文档 + 示例项目源代码
