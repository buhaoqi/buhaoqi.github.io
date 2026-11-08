---
title: 任务四 文档程序设计
description: 算法与程序设计《C#》项目五 Windows应用程序开发 任务四 文档程序设计知识点总结。介绍菜单的分类与结构、MenuStrip下拉菜单控件设计、ContextMenuStrip弹出式菜单、菜单项ToolStripMenuItem属性（表5-33）、SDI单文档界面、MDI多文档界面（IsMdiContainer/MdiParent属性、LayoutMdi方法、MdiLayout枚举），含表5-33至表5-36、例5-17至例5-18完整代码示例。
keywords: [C#, 文档程序设计, 菜单, MenuStrip, ContextMenuStrip, ToolStripMenuItem, SDI, MDI, 多文档界面, IsMdiContainer, MdiParent, LayoutMdi, 对口升学]
sidebar_label: 任务四 文档程序设计
sidebar_position: 4
slug: /csharp/proj5/task4-document-program
tags: [C#, 项目五, 任务四, 对口升学]
---

## 知识点

### 1.菜单的作用和分类是什么？

菜单是用户界面中的重要组成部分，按使用形式可以分为两种：

- **下拉式菜单**：位于窗口顶部，通过单击菜单栏中的菜单标题（如"文件""编辑"等）打开。
- **弹出式菜单**：通过右键单击某一区域的方式打开，不同的区域所弹出的菜单内容不同。

### 2.菜单的基本结构是怎样的？

菜单的基本结构包含以下要素：

1. **菜单项右侧有"…"**：单击此菜单项时将打开一个对话框。
2. **菜单项右侧有黑色三角形▶**：表示该菜单项有子菜单。C#中最多可以设计出六级子菜单。
3. **热键**：打开菜单的情况下，用户可以直接按下相应的字母来执行对应命令。
4. **快捷键**：在任何时候用户按快捷键可以执行菜单项命令。

---

### 子任务一 菜单设计

### 3.MenuStrip控件的作用和设计方法是什么？

MenuStrip是C#提供的菜单控件，主要用于创建窗体的下拉菜单。

设计菜单的步骤：
1. **添加菜单和菜单项**：双击工具箱中的MenuStrip控件，窗体标题栏下面出现可视化菜单设计器，显示"请在此输入"，单击并输入菜单标题。
2. **输入子菜单**：输入一个菜单项后，右侧和下方会显示灰色文本框，右侧用于设置同级菜单项，下方用于设置子菜单项。
3. **插入分隔条**：在菜单项上右击，选择"插入Separator"命令。
4. **删除菜单项**：右击菜单项选择"删除"命令。
5. **更改菜单项文本**：单击菜单项使其变为可编辑状态，直接输入新文本。

### 4.ToolStripMenuItem对象的常用属性有哪些？

MenuStrip是一个包含了所有菜单项的对象集，每个菜单项是一个ToolStripMenuItem对象。每个菜单项的默认名称为菜单项文本加上ToolStripMenuItem。

**表5-33 菜单项ToolStripMenuItem对象的常用属性**

| 属性 | 说明 |
|---|---|
| Checked | 获取或设置选中标记是否出现在菜单项文本旁边，默认为false |
| Name | 获取或设置菜单项的名称 |
| Enabled | 用于控制菜单是否可用，false时呈灰色显示 |
| ShortcutKeys | 获取或设置与ToolStripMenuItem关联的快捷键 |
| ShowShortcutKeys | 获取或设置快捷键是否显示在ToolStripMenuItem旁边 |
| Text | 设置菜单项显示的文本 |
| Image | 获取或设置显示在ToolStripMenuItem上的图像 |
| Visible | 控制菜单项是否可见，默认为true |
| ToolTipText | 获取或设置菜单项的提示信息 |

### 5.菜单项的常用事件是什么？

菜单项常用的事件是**Click事件**。在设计菜单界面后，必须为菜单项编写事件过程，菜单命令才能发挥作用。

### 6.ContextMenuStrip弹出式菜单如何使用？

ContextMenuStrip是C#中提供的菜单控件，用于设计弹出式菜单，使用方法与下拉式菜单类似。

弹出式菜单设置完毕后，还需要将所属控件的 `ContextMenuStrip` 属性设置为设计好的弹出式菜单名称。这样在运行时只要在指定控件上右击，就会弹出指定的弹出式菜单。

### 7.菜单设计示例

模拟Visual Studio的"文件"菜单：

**表5-34 属性设置**

| 对象 | 属性 | 属性值 |
|---|---|---|
| 保存Form1csToolStripMenuItem | ShortcutKeys | Ctrl+S |
| | Image | "保存"图片 |
| 全部保存LToolStripMenuItem | ShortcutKeys | Ctrl+Shift+S |
| | Image | "全部保存"图片 |
| 打印PToolStripMenuItem | ShortcutKeys | Ctrl+P |
| 退出XToolStripMenuItem | ShortcutKeys | Alt+F4 |

```csharp
private void 打开OToolStripMenuItem_Click(object sender, EventArgs e)
{
    openFileDialog1.ShowDialog();
}

private void 全部保存LToolStripMenuItem_Click(object sender, EventArgs e)
{
    saveFileDialog1.ShowDialog();
}
```

---

### 子任务二 单文档界面（SDI）

### 8.什么是单文档界面（SDI）？

单文档界面（Single Document Interface，SDI）一次只能打开一个窗体，显示一个文档。前面创建的都是SDI应用程序。

---

### 子任务三 多文档界面（MDI）

### 9.什么是多文档界面（MDI）？

MDI应用程序由父窗体和子窗体构成，容器窗体称为父窗体，容器窗体内部的窗体称为子窗体。当关闭MDI父窗体时，所有子窗体会自动关闭。典型应用如Word、Excel等都是MDI应用程序。

### 10.如何设置MDI窗体？

- **设置父窗体**：将窗体的 `IsMdiContainer` 属性设置为 `true`。
- **设置子窗体**：通过设置窗体的 `MdiParent` 属性指定父窗体。

**【例5-17】** 将Form2窗体设置成当前窗体的子窗体：

```csharp
Form2 frm2 = new Form2();    //创建Form2
frm2.Show();                 //使用Show方法打开窗体
frm2.MdiParent = this;       //设置MdiParent属性，将当前窗体作为父窗体
```

### 11.MDI窗体的常用属性有哪些？

**表5-35 MDI窗体的常用属性及说明**

| 属性 | 说明 |
|---|---|
| IsMdiContainer | 指示窗体是否为MDI父窗体，true为父窗体，false为普通窗体 |
| IsMdiChild | 获取一个值，指示窗体是否为MDI子窗体 |
| MdiParent | 获取或设置此窗体的当前MDI父窗体 |

### 12.MDI相关方法有哪些？

（1）**ActivateMdiChild方法**：用于激活MDI子窗体。

**【例5-18】** 将Form2设置为激活的MDI子窗体：

```csharp
private void Form1_Load(object sender, EventArgs e)
{
    this.ActivateMdiChild(frm2);
}
```

（2）**LayoutMdi方法**：用于在MDI父窗体内排列MDI子窗体。

```csharp
父窗体名.LayoutMdi(MdiLayout.value)
```

参数value是MdiLayout枚举类型，有四个枚举成员：

| 枚举成员 | 说明 |
|---|---|
| ArrangeIcons | 所有MDI子窗体以图标形式排列 |
| Cascade | 所有MDI子窗体层叠排列 |
| TileHorizontal | 所有MDI子窗体水平平铺 |
| TileVertical | 所有MDI子窗体垂直平铺 |

### 13.MDI父窗体的常用事件是什么？

常用的MDI父窗体事件是**MdiChildActivate**，当激活MDI子窗体时触发该事件。

### 14.MDI多文档界面综合示例

创建父窗体Form1和子窗体Form2、Form3、Form4，在父窗体中添加菜单排列子窗体：

**表5-36 属性设置**

| 对象 | 属性 | 属性值 |
|---|---|---|
| Form1 | IsMdiContainer | true |

```csharp
private void Form1_Load(object sender, EventArgs e)
{
    Form2 frm2 = new Form2();
    frm2.Show();
    frm2.MdiParent = this;

    Form3 frm3 = new Form3();
    frm3.Show();
    frm3.MdiParent = this;

    Form4 frm4 = new Form4();
    frm4.Show();
    frm4.MdiParent = this;

    this.ActivateMdiChild(frm2);
}

private void 图标ToolStripMenuItem_Click(object sender, EventArgs e)
{
    this.LayoutMdi(MdiLayout.ArrangeIcons);    //以图标形式显示
}

private void 层叠ToolStripMenuItem_Click(object sender, EventArgs e)
{
    this.LayoutMdi(MdiLayout.Cascade);         //以层叠形式显示
}

private void 水平平铺ToolStripMenuItem_Click(object sender, EventArgs e)
{
    this.LayoutMdi(MdiLayout.TileHorizontal);  //以水平平铺形式显示
}

private void 垂直平铺ToolStripMenuItem_Click(object sender, EventArgs e)
{
    this.LayoutMdi(MdiLayout.TileVertical);    //以垂直平铺形式显示
}
```

### 15.SDI与MDI的对比

| 特性 | SDI（单文档界面） | MDI（多文档界面） |
|---|---|---|
| 窗体数量 | 一次只能打开一个窗体 | 可同时打开多个子窗体 |
| 父子关系 | 无父子关系 | 有父窗体和子窗体 |
| 关闭行为 | 关闭一个窗体不影响其他 | 关闭父窗体时所有子窗体自动关闭 |
| 典型应用 | 记事本 | Word、Excel |
