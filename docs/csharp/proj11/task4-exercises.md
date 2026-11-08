---
title: 任务四 同步实验
description: 算法与程序设计《C#》项目十一 C#图形操作 任务四 同步实验。通过图形验证码实验巩固Graphics类、Pen类、Brush类的综合应用。
keywords: [C#, 图形操作, 同步实验, 图形验证码, GDI+, 对口升学]
sidebar_label: 任务四 同步实验
sidebar_position: 4
slug: /csharp/proj11/task4-exercises
tags: [C#, 项目十一, 任务四, 对口升学]
---

## 知识点

### 实验：生成图形验证码

**题目**：新建一个Windows窗体应用程序，在窗体上添加一个PictureBox控件，用来显示图形验证码；添加一个Button控件，用来生成图形验证码。

**涉及知识点**：Graphics类、Pen类、Brush类、Font类、DrawString方法、Random类的综合应用

**实现思路**：
1. 创建Graphics对象，在Bitmap上绘图
2. 使用Random类生成随机验证码字符串（数字+字母）
3. 使用DrawString方法将验证码文本绘制到图片上
4. 使用Pen类绘制干扰线，增加识别难度
5. 将Bitmap赋值给PictureBox的Image属性显示

**参考代码**：
```csharp
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace ValidateCodeDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            // 创建Bitmap对象
            Bitmap bmp = new Bitmap(pictureBox1.Width, pictureBox1.Height);
            // 创建Graphics对象
            Graphics g = Graphics.FromImage(bmp);
            // 设置背景色
            g.Clear(Color.White);

            // 生成随机验证码
            string chars = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz";
            Random ra = new Random();
            string validateCode = "";
            for (int i = 0; i < 4; i++)
            {
                validateCode += chars[ra.Next(chars.Length)];
            }

            // 绘制验证码文本
            Font font = new Font("Arial", 20, FontStyle.Bold);
            Brush brush = new SolidBrush(Color.Blue);
            for (int i = 0; i < validateCode.Length; i++)
            {
                // 随机颜色
                Color color = Color.FromArgb(ra.Next(0, 256), ra.Next(0, 256), ra.Next(0, 256));
                SolidBrush b = new SolidBrush(color);
                // 随机角度（略）
                g.DrawString(validateCode[i].ToString(), font, b, 10 + i * 25, 5);
            }

            // 绘制干扰线
            for (int i = 0; i < 5; i++)
            {
                Pen pen = new Pen(Color.FromArgb(ra.Next(0, 256), ra.Next(0, 256), ra.Next(0, 256)), 1);
                Point p1 = new Point(ra.Next(bmp.Width), ra.Next(bmp.Height));
                Point p2 = new Point(ra.Next(bmp.Width), ra.Next(bmp.Height));
                g.DrawLine(pen, p1, p2);
            }

            // 绘制噪点
            for (int i = 0; i < 30; i++)
            {
                bmp.SetPixel(ra.Next(bmp.Width), ra.Next(bmp.Height), Color.FromArgb(ra.Next(0, 256), ra.Next(0, 256), ra.Next(0, 256)));
            }

            // 显示验证码图片
            pictureBox1.Image = bmp;
            g.Dispose();
        }
    }
}
```

> **说明**：验证码生成涉及以下GDI+知识点的综合运用：
> - Graphics.FromImage方法创建Graphics对象
> - Graphics.Clear方法设置背景色
> - Font类和DrawString方法绘制文本
> - Pen类和DrawLine方法绘制干扰线
> - Bitmap.SetPixel方法绘制噪点
> - Random类生成随机字符和颜色
