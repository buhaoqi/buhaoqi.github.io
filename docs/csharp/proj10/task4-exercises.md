---
title: 任务四 同步实验
description: 算法与程序设计《C#》项目十 C#文件操作 任务四 同步实验。通过2道实验题巩固File类、FileInfo类的文件管理操作。
keywords: [C#, 文件操作, 同步实验, File类, FileInfo类, 对口升学]
sidebar_label: 任务四 同步实验
sidebar_position: 4
slug: /csharp/proj10/task4-exercises
tags: [C#, 项目十, 任务四, 对口升学]
---

## 知识点

### 实验1：判断文件是否存在并创建

**题目**：编写一个程序，判断用户指定的文件是否存在，如果不存在，则创建它。

**涉及知识点**：File类的Exists方法和Create方法、FileInfo类的Exists属性和Create方法

**参考代码（使用File类）**：
```csharp
using System;
using System.IO;

class Program
{
    static void Main(string[] args)
    {
        Console.Write("请输入要判断的文件完整路径: ");
        string filePath = Console.ReadLine();
        if (File.Exists(filePath))
        {
            Console.WriteLine("文件已经存在，不用创建");
        }
        else
        {
            File.Create(filePath);
            Console.WriteLine("文件创建成功");
        }
        Console.ReadLine();
    }
}
```

**参考代码（使用FileInfo类）**：
```csharp
using System;
using System.IO;

class Program
{
    static void Main(string[] args)
    {
        Console.Write("请输入要判断的文件完整路径: ");
        string filePath = Console.ReadLine();
        FileInfo fileInfo = new FileInfo(filePath);
        if (fileInfo.Exists)
        {
            Console.WriteLine("文件已经存在，不用创建");
        }
        else
        {
            fileInfo.Create();
            Console.WriteLine("文件创建成功");
        }
        Console.ReadLine();
    }
}
```

### 实验2：显示文件信息

**题目**：使用打开对话框打开一个文件，将该文件的创建时间、访问时间、是否只读等文件信息以信息框的形式输出。

**涉及知识点**：FileInfo类的CreationTime、LastAccessTime、IsReadOnly、FullName、Length等属性

**参考代码**：
```csharp
using System;
using System.IO;
using System.Windows.Forms;

public partial class Form1 : Form
{
    private void button1_Click(object sender, EventArgs e)
    {
        openFileDialog1.Filter = "所有文件 (*.*)|*.*";
        if (openFileDialog1.ShowDialog() == DialogResult.OK)
        {
            FileInfo fileInfo = new FileInfo(openFileDialog1.FileName);
            string message = string.Format(
                "文件名: {0}\n完整路径: {1}\n创建时间: {2}\n最后访问时间: {3}\n是否只读: {4}\n文件大小: {5} 字节",
                fileInfo.Name,
                fileInfo.FullName,
                fileInfo.CreationTime,
                fileInfo.LastAccessTime,
                fileInfo.IsReadOnly,
                fileInfo.Length
            );
            MessageBox.Show(message, "文件信息");
        }
    }
}
```
