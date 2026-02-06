---
# 这部分是关键！侧边栏显示名由这里决定
title: 练习：窗体程序设计  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 练习：窗体程序设计  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 5  # 侧边栏中排在第1位
---

## 一、操作题目

### 1.窗体属性设置（20 分）

在窗体加载时完成以下设置：

1. 将窗体名称设置为 `MainForm`
2. 将窗体标题设置为：`学生信息管理系统`
3. 设置窗体宽度为 `800`，高度为 `500`
4. 设置窗体背景颜色为浅蓝色
5. 设置窗体前景颜色为深蓝色
6. 设置窗体字体为：宋体，12 号
7. 设置窗体启动状态为最大化

---

## 二、参考答案

### 1.窗体属性设置（20 分）
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