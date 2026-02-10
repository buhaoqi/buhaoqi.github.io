---
# 这部分是关键！侧边栏显示名由这里决定
title: 概述  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 概述  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 1  # 侧边栏中排在第1位
---

## 高考考点

### 任务一 窗体设计
1. 掌握窗体的概念、属性、方法、事件；
2. 掌握C#窗体的创建和使用方法；
3. 掌握窗体的属性：Name、Height、Width、<strike>Visible</strike>、WindowState、<strike>Dock</strike>、Font、BackColor、ForeColor、Icon、Size；
4. 掌握窗体的常用方法：Activate、Close、Refresh、Show、Hide；
5. 掌握窗体的事件：FormClosed、FormClosing、KeyDown、KeyPress、KeyUp、 Load、MouseClick、MouseDoubleClick、MouseDown、MouseMove、MouseUp、Resize、**GiveFeedback**
6. 了解多窗体间的调用的功能实现方法；
### 任务二 常用控件
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

### 任务三 对话框
1. 了解对话框控件、消息框。

### 任务四 文档程序设计
1. 了解多文档界面窗体；
2. 了解菜单(MainMenu)控件、ToolTip控件

## 一、窗体应用程序的项目结构

```
MyWindowsApp/                         ← 解决方案文件夹
├── MyWindowsApp.sln                  ← 解决方案文件
└── MyWindowsApp/                     ← 项目文件夹
    ├── Properties/                   ← 项目属性文件夹
    │   ├── AssemblyInfo.cs          ← 程序集信息
    │   ├── Resources.resx           ← 资源文件
    │   ├── Settings.settings        ← 设置文件
    │   └── Resources.Designer.cs    ← 资源设计器文件
    ├── bin/                         ← 编译输出文件夹
    │   ├── Debug/                   ← 调试版本
    │   └── Release/                 ← 发布版本
    ├── obj/                         ← 临时编译文件夹
    ├── Form1.cs                     ← 主窗体代码文件
    ├── Form1.Designer.cs            ← 窗体设计器文件
    ├── Program.cs                   ← 程序入口点
    └── MyWindowsApp.csproj          ← 项目文件
```
可以手动修改 VS 不要手动修改
```csharp
✅ 可以安全修改：
1. Form1.cs - 写你的业务逻辑
2. Program.cs - 修改启动逻辑
3. Properties/Resources.resx - 添加资源
4. Properties/Settings.settings - 添加设置

❌ 不要手动修改：
1. Form1.Designer.cs - VS自动生成
2. Properties/Resources.Designer.cs - 自动生成
3. Properties/Settings.Designer.cs - 自动生成
4. bin/ 和 obj/ 文件夹 - 编译生成
```
