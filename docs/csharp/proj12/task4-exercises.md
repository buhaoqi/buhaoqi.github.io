---
title: 任务四 同步实验
description: 算法与程序设计《C#》项目十二 数据库应用 任务四 同步实验。创建Windows窗体应用程序，通过界面输入数据库用户名和密码与MySQL数据库建立连接。
keywords: [C#, 数据库应用, 同步实验, MySQL连接, Windows窗体, 登录界面, 对口升学]
sidebar_label: 任务四 同步实验
sidebar_position: 4
slug: /csharp/proj12/task4-exercises
tags: [C#, 项目十二, 任务四, 对口升学]
---

## 知识点

### 实验：MySQL数据库登录连接

**题目**：创建一个Windows窗体应用程序，添加两个标签和两个文本框，还有一个登录按钮，输入数据库用户名和密码，与MySQL数据库建立连接。

**涉及知识点**：MySql.Data.dll引用、MySqlConnection连接对象、Open/Close方法、Windows窗体界面设计

**界面设计**：
- 两个Label控件：分别显示"用户名"和"密码"
- 两个TextBox控件：分别用于输入用户名和密码（密码框设置PasswordChar为'*'）
- 一个Button控件：显示"登录"，点击后连接数据库

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
using MySql.Data.MySqlClient;  // 引入MySQL命名空间

namespace MySQLLoginDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            // 获取用户输入的用户名和密码
            string user = textBox1.Text.Trim();
            string password = textBox2.Text.Trim();

            // 创建连接字符串
            string mysqlcon = "server=localhost; database=student; user=" + user + "; password=" + password;

            // 创建MySQL连接对象
            MySqlConnection conn = new MySqlConnection(mysqlcon);

            try
            {
                // 打开连接
                conn.Open();
                // 连接成功提示
                MessageBox.Show("数据库连接成功！", "提示", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
            catch (MySqlException ex)
            {
                // 连接失败提示
                MessageBox.Show("数据库连接失败！错误信息：" + ex.Message, "错误", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
            finally
            {
                // 无论成功或失败都关闭连接
                conn.Close();
            }
        }
    }
}
```

> **说明**：
> - 使用 try-catch-finally 结构确保连接异常时能正确处理
> - MySqlConnection.Open() 可能抛出 MySqlException 异常
> - 在 finally 块中调用 Close() 确保连接被关闭
> - 密码文本框应设置 `textBox2.PasswordChar = '*'` 隐藏输入内容
> - 实际开发中密码不应直接拼接在字符串中，应使用参数化方式防止SQL注入
