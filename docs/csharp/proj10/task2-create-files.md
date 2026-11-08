---
title: 任务二 创建文件
description: 算法与程序设计《C#》项目十 C#文件操作 任务二 创建文件 知识点总结。掌握File类和FileInfo类的Create、Copy、Delete、Move、Exists、Replace等方法，以及FileStream类构造函数、FileMode和FileAccess枚举成员。
keywords: [C#, 文件操作, File类, FileInfo类, FileStream类, FileMode, FileAccess, 对口升学]
sidebar_label: 任务二 创建文件
sidebar_position: 2
slug: /csharp/proj10/task2-create-files
tags: [C#, 项目十, 任务二, 对口升学]
---

## 知识点

### 1. System.IO命名空间

在C#.NET中，文件系统操作的类大多位于 `System.IO` 命名空间中，常用的类有：`DriveInfo`、`Directory`、`DirectoryInfo`、`Path`、`File`、`FileInfo`、`FileStream` 等。通过这些类可以浏览文件和执行相关操作，如移动、复制和删除文件等。

### 2. File类与FileInfo类的区别

File类和FileInfo类都是C#.NET提供的用于文件管理的类，它们在功能上非常相似。使用File类和FileInfo类，可以完成对文件的创建、删除、移动和打开等操作，也可以获取和设置文件的相关信息，还可以协助创建FileStream流对象。

**两者的核心区别**：
- `File` 类提供**静态方法**
- `FileInfo` 类提供**实例方法**

### 3. File类常用方法

File类是一个静态类，通过一系列静态方法来提供对磁盘文件的操作功能，如创建、复制、删除、移动和打开文件，并协助创建FileStream对象。

#### （1）Create方法

格式：`File.Create(string path)`

功能：在指定的路径上创建新文件，如果文件已经存在则覆盖旧文件。

说明：`string path` 为一个包含完整路径和文件名的字符串，如果不包含路径则默认文件与应用程序在同一文件夹下。注意 `"\"` 为转置字符，在路径中要用 `"\\"` 表示；如果想使用单 `"\"` 则需在字符串前使用 `"@"` 标志以提示编译器不将 `"\"` 视为转置字符。

示例：
```csharp
// 使用双反斜杠
File.Create("C:\\MyDoc\\test.txt");
// 或使用 @ 前缀
File.Create(@"C:\MyDoc\test.txt");
```

> **注意**：MyDoc文件夹必须存在，否则提示"未能找到路径"错误信息。

#### （2）Copy方法

格式：`File.Copy(string sourceFileName, string destFileName [, bool overwrite])`

功能：将包含路径的源文件复制到指定的目标文件夹下。

说明：
- 目标文件可以与源文件同名，也可以重新命名
- 目标文件所在的文件夹必须存在，否则提示"未能找到路径"错误信息
- `bool overwrite` 为布尔型，可选。如果取值为 `true` 则允许覆盖已经存在的文件；如果取值为 `false` 或省略则不允许覆盖已经存在的文件

示例：将C盘MyDoc文件夹下的test.txt复制到D盘Targ文件夹下，并改名为testb.txt。
```csharp
File.Copy("C:\\MyDoc\\test.txt", "D:\\Targ\\testb.txt");
```

#### （3）Move方法

格式：`File.Move(string sourceFileName, string destFileName)`

功能：将包含路径的源文件移动到指定的目标文件夹下。

说明：
- 目标文件可以与源文件同名，也可以重新命名
- 目标文件在目标文件夹下不能存在，否则报"目标文件已经存在"错误信息

示例：将C盘MyDoc文件夹下的test.txt移动到D盘Targ文件夹下，文件名不变。
```csharp
File.Move("C:\\MyDoc\\test.txt", "D:\\Targ\\test.txt");
```

#### （4）Delete方法

格式：`File.Delete(string path)`

功能：删除指定文件夹下的文件。

说明：`string path` 为一个包含完整路径和文件名的字符串。

示例：删除D盘Targ文件夹下的testb.txt文件。
```csharp
File.Delete("D:\\Targ\\testb.txt");
```

#### （5）Exists方法

格式：`File.Exists(string path)`

功能：判断指定的文件是否存在。

说明：如果文件存在则返回 `true` 值，否则返回 `false` 值。

示例：判断D盘Targ文件下testb.txt是否存在，如果存在则提示"文件已经存在，不用创建"，如果不存在则创建testb.txt文件。
```csharp
if (File.Exists("D:\\Targ\\testb.txt"))
{
    Console.WriteLine("文件已经存在，不用创建");
    Console.ReadLine();
}
else
{
    File.Create("D:\\Targ\\testb.txt");
}
```

#### （6）Replace方法

格式：`File.Replace(string sourceFileName, string destinationFileName, string destinationBackFileName)`

功能：使用其他文件的内容替换指定文件的内容，这一过程将删除原始文件，并创建被替换文件的备份。

说明：
- `sourceFileName`：源文件名，包含路径和文件名的字符串，该文件的内容将替换目标文件的内容，同时将该文件删除
- `destinationFileName`：目标文件名，包含路径和文件名的字符串，该文件的内容将被源文件的内容替换
- `destinationBackFileName`：目标文件的备份文件名。该文件如果存在则删除原内容而保存目标文件的内容；如果不存在则创建新文件并保存目标文件内容。注意备份文件名不要与源文件和目标文件重名

示例：使用C盘MyDoc文件夹下的test.txt的内容替换D盘Targ文件夹下的testb.txt的内容，并将testb.txt的内容备份到D盘Targ文件夹下的testc.txt文件中。
```csharp
File.Replace("C:\\MyDoc\\test.txt", "D:\\Targ\\testb.txt", "D:\\Targ\\testc.txt");
```

### 4. FileInfo类

与File类不同，FileInfo类仅可用于实例化的对象。如果使用同一个对象执行多个操作时，使用FileInfo类就比较有效，因为在构造FileInfo类的对象时将读取合适文件的身份认证和其他信息，无论对每个对象调用了多少方法，都不需要再次读取这些信息。而File类在调用每个静态方法时，需要多次检查文件的内容。

#### FileInfo类的常见属性（表10-1）

| 属性 | 说明 |
|---|---|
| Name | 仅返回文件的名称，而不是完整的文件位置路径 |
| Attributes | 获取或设置文件的属性 |
| CreationTime | 获取或设置当前FileInfo对象的创建时间 |
| DirectoryName | 获取或设置文件的完整路径 |
| Exists | 判断文件是否存在 |
| FullName | 获取文件的完整路径 |
| IsReadOnly | 获取或设置当前文件是否为只读属性 |
| Length | 获取文件的大小 |

#### FileInfo类的主要方法

FileInfo类的主要方法成员有：
- `Create`：创建文件
- `CopyTo`：复制文件
- `Delete`：删除文件
- `MoveTo`：移动文件
- `Open`：打开文件
- `Replace`：替换文件

其用法格式与File类的方法相似，不同点是在使用方法成员前必须先创建一个FileInfo类对象。

示例：创建一个Windows窗体应用程序，在窗体上创建一个文本框和一个命令按钮，在文本框中输入文件的完整文件名，然后判断该文件是否存在，如果存在则报提示信息，如果不存在则创建该文件。

```csharp
private void button1_Click(object sender, EventArgs e)
{
    if (textBox1.Text == string.Empty)
    {
        MessageBox.Show("文件名不能为空!");
    }
    else
    {
        FileInfo file1 = new FileInfo(textBox1.Text);  // 创建FileInfo类对象
        if (file1.Exists)  // 使用FileInfo对象的Exists属性判断要创建的文件是否存在
        {
            MessageBox.Show("该文件已经存在");
        }
        else
        {
            file1.Create();
        }
    }
}
```

### 5. 流与FileStream类

在C#.NET程序设计中，为了便于实现对文件的读写等操作引入了流的概念。所谓的流（Stream）就是连续传输的信息序列。它是一种有序流，把对象接收外界的信息输入（Input）称为输入流，相应地，从对象向外界输出（Output）的信息称为输出流，合称输入/输出流（I/O Streams）。

在C#.NET中，使用System.IO命名空间的抽象基类 `Stream` 来代表流，其他表示流的类如 `FileStream` 类是从 `Stream` 类继承来的。FileStream类是Stream类的派生类，使用它可以创建一个文件流。FileStream类可以对文件系统上的文件进行读取、写入、打开和关闭等操作。

#### FileStream类常用构造函数

格式1：`FileStream(string path, FileMode mode)`

功能：使用指定的路径和创建模式初始化FileStream类的新实例。

格式2：`FileStream(string path, FileMode mode, FileAccess access)`

功能：使用指定的路径、创建模式和读/写权限初始化FileStream类的新实例。

#### FileMode枚举成员（表10-2）

两种构造函数中都要求提供一个 `FileMode` 参数，该参数是一个枚举型参数，指定了操作系统如何打开文件，以及把文件指针定位在哪里来完成后续的读写操作。

| 成员 | 说明 |
|---|---|
| Append | 打开现有文件并将插入点移动到文件尾，或创建新文件；`FileMode.Append` 只能同 `FileAccess.Write` 一起使用，任何读尝试将失败并引发 `ArgumentException` 异常 |
| Create | 指定操作系统创建新文件，如果文件不存在则等效于 `CreateNew`，如果存在则等效于 `Truncate` |
| CreateNew | 指定操作系统创建新文件，如果文件已经存在将引发 `IOException` 异常 |
| Open | 指定操作系统打开现有文件，如果该文件不存在则引发 `FileNotFoundException` 异常 |
| OpenOrCreate | 操作系统打开文件，如果文件不存在则创建新文件 |
| Truncate | 打开一个已有的文件，删除文件内容，并把文件指针定位在文件开始处，但保留文件的初始创建日期，如果文件不存在，将报异常 |

#### FileAccess枚举成员

第一种构造函数默认以只读方式打开文件，若需要不同的访问级别，则需要使用第二种构造函数，这种构造函数中需要 `FileAccess` 类型参数。FileAccess也是一种枚举型参数，其成员包括：
- `Read`：对文件进行读操作
- `ReadWrite`：对文件进行读操作和写操作
- `Write`：对文件进行写操作

示例：使用FileStream类在D盘创建一个file2.txt文件。
```csharp
FileStream fs1 = new FileStream(@"D:\file2.txt", FileMode.CreateNew);
```

### 6. 创建文件任务实施

启动Microsoft Visual Studio 2010并创建一个控制台应用程序，项目名称为"CreateFile.sln"。在 `Main()` 函数中输入如下代码，用File类来创建A.TXT，使用FileInfo类来创建B.TXT，使用FileStream类创建C.TXT。

```csharp
File.Create("D:\\Test\\A.TXT");  // 直接使用File类创建A.TXT文件

FileInfo fs1 = new FileInfo("D:\\Test\\B.TXT");  // 创建FileInfo类对象
fs1.Create();  // 使用FileInfo类对象的Create方法来创建B.TXT文件

FileStream fs2 = new FileStream("D:\\Test\\C.TXT", FileMode.CreateNew);
// 使用FileStream类的CreateNew来创建C.TXT文件
```

按F5键运行程序，在D盘Test文件夹下会创建三个文件：A.TXT、B.TXT、C.TXT。
