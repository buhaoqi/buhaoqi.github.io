---
title: 任务五 同步实验
description: 算法与程序设计《C#》项目五 Windows应用程序开发 任务五 同步实验。包含3道实验题：交换两个文本框内容、模拟简单计算器、实时显示当前系统时间，培养Windows窗体应用程序开发综合能力。
keywords: [C#, 同步实验, 交换数据, 计算器, Timer, 系统时间, Windows应用程序, 对口升学]
sidebar_label: 任务五 同步实验
sidebar_position: 5
slug: /csharp/proj5/task5-exercises
tags: [C#, 项目五, 任务五, 对口升学]
---

## 知识点

### 实验一 交换两个文本框的内容

**题目要求：**

设计一个Windows应用程序，实现以下功能：单击"交换"按钮交换两个文本框的内容，单击"退出"按钮结束程序。

**参考代码：**

```csharp
private void button1_Click(object sender, EventArgs e)  // "交换"按钮
{
    string temp = textBox1.Text;
    textBox1.Text = textBox2.Text;
    textBox2.Text = temp;
}

private void button2_Click(object sender, EventArgs e)  // "退出"按钮
{
    Application.Exit();
}
```

**设计要点：**
- 使用一个临时变量 `temp` 来暂存第一个文本框的内容
- 通过字符串赋值实现两个文本框内容的互换
- 使用 `Application.Exit()` 退出程序

---

### 实验二 模拟简单的计算器功能

**题目要求：**

设计一个Windows应用程序，模拟简单的计算器功能。单击相应按钮时标签显示相应的运算符号，单击"结果"按钮，实现两个文本框内数据的相应运算，并将结果输出到结果文本框上。

**参考代码：**

```csharp
string op = "";  // 定义运算符变量

private void button_add_Click(object sender, EventArgs e)  // "+"按钮
{
    op = "+";
    label1.Text = "+";
}

private void button_sub_Click(object sender, EventArgs e)  // "-"按钮
{
    op = "-";
    label1.Text = "-";
}

private void button_mul_Click(object sender, EventArgs e)  // "×"按钮
{
    op = "*";
    label1.Text = "×";
}

private void button_div_Click(object sender, EventArgs e)  // "÷"按钮
{
    op = "/";
    label1.Text = "÷";
}

private void button_result_Click(object sender, EventArgs e)  // "结果"按钮
{
    double num1, num2, result;
    double.TryParse(textBox1.Text, out num1);
    double.TryParse(textBox2.Text, out num2);
    switch (op)
    {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 != 0)
                result = num1 / num2;
            else
            {
                MessageBox.Show("除数不能为零！");
                return;
            }
            break;
        default:
            MessageBox.Show("请选择运算符！");
            return;
    }
    textBox3.Text = result.ToString();
}
```

**设计要点：**
- 使用成员变量 `op` 存储当前选择的运算符
- 使用 `switch` 语句根据运算符执行不同运算
- 注意除法时要判断除数是否为零
- 使用 `TryParse` 防止输入非数字时程序崩溃

---

### 实验三 实时显示当前系统时间

**题目要求：**

设计一个Windows应用程序，实现实时显示当前系统时间的功能。

> 提示：需要使用Timer组件间隔性地获取系统时间。

**参考代码：**

```csharp
private void Form1_Load(object sender, EventArgs e)
{
    timer1.Interval = 1000;   // 设置时间间隔为1秒
    timer1.Enabled = true;    // 启动计时器
}

private void timer1_Tick(object sender, EventArgs e)
{
    label1.Text = DateTime.Now.ToString("yyyy年MM月dd日 HH:mm:ss");
}
```

**设计要点：**
- 使用Timer控件每隔1秒（Interval=1000）触发一次Tick事件
- 在Tick事件中获取 `DateTime.Now` 当前系统时间
- 使用 `ToString()` 格式化日期时间显示
- 时间格式说明：`yyyy` 年、`MM` 月、`dd` 日、`HH` 时（24小时制）、`mm` 分、`ss` 秒
