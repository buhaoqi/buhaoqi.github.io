---
# 这部分是关键！侧边栏显示名由这里决定
title: 概述  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 概述 # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  0  # 侧边栏中排在第1位
---


## 高考考点
七、C#的文件访问

1. 掌握文件、文件流FileStream的概念；
2. 掌握FileStream对文本文件和二进制文件的读写。

## 知识点

1. 如何使用File类
2. File类的六种常用方法是什么，要求默写
3. File.Create()方法的用途、语法、参数、返回值是什么
4. File.Delete()方法的用途、语法、参数、返回值是什么
5. File.Move()方法的用途、语法、参数、返回值是什么
6. File.Copy()方法的用途、语法、参数、返回值是什么
7. File.Replace()方法的用途、语法、参数、返回值是什么
8. File.Exists()方法的用途、语法、参数、返回值是什么
- 使用File类的Create方法创建文件
- 使用File类的Copy方法复制文件
- 使用File类的Move方法移动文件
- 使用File类的Delete方法删除文件
- 使用File类的Replace方法替换文件

1.FileInfo类是什么

2.如何使用FileInfo类

3.创建FileInfo对象的语法是什么

4.FileInfo类与File类的区别是什么

5.FileInfo类的主要属性有哪些

6.FileInfo类的主要方法有哪些

7.fileInfo.Create()方法的用途、语法、参数、返回值是什么

8.fileInfo.Delete()方法的用途、语法、参数、返回值是什么

9.FileInfo.MoveTo()方法的用途、语法、参数、返回值是什么

10.FileInfo.CopyTo方法的用途、语法、参数、返回值是什么

11.FileInfo.Open()方法的用途、语法、参数、返回值是什么

12.FileInfo.Replace()方法的用途、语法、参数、返回值是什么

13.FileInfo.Exists()方法的用途、语法、参数、返回值是什么

FileInfo类练习题

使用FileInfo类Create方法创建文件

使用FileInfo类的CopyTo方法复制文件

使用FileInfo类的MoveTo方法移动文件

使用FileInfo类的Delete方法删除文件

使用FileInfo类的Replace方法替换文件

如何判断文件是否存在

### FileStream类

1.“流”是什么

2.“流”分为几种类型

3.FileStream类是什么

4.如何使用FileStream类

5.FileMode是什么

6.FileAccess是什么

7.FileStream有哪几个方法

8.fs.WriteByte()方法的用途、语法、参数、返回值是什么

9.fs.WriteByte()方法的用途、语法、参数、返回值是什么

10.fs.ReadByte()方法的用途、语法、参数、返回值是什么

11.fs.Read()方法的用途、语法、参数、返回值是什么

### FileStream类练习题

[操作]使用FileStream类在D盘创建一个file2.txt文件

[操作]使用File类创建a.txt,使用FileInfo类创建b.txt，使用FileStream类创建c.txt文件

[操作]将0 ～ 9十个数字写入D盘Test文件夹下的test1.txt文件中

[操作]向D盘Test文件夹下的test2.txt文件中写入26个英文字母

[操作]从D盘Test文件夹下的test1.txt文件中读取所有数据并显示在控制台

[操作]将D盘Test文件夹下的Test2.txt文件中的数据读到二进制数组ByteArray中

### StreamReader类

1.文本流是什么

2.二进制流是什么

3.SteamReader类的用途是什么

4.如何使用SteamReader类？

5.SteamReader构造函数的语法是什么

6.sr.Read()方法的用途、语法、参数、返回值是什么

7.sr.ReadLine()方法的用途、语法、参数、返回值是什么

### StreamWriter类

1.SteamWriter类的用途是什么

2.如何使用SteamWriter类？

3.SteamWriter构造函数的语法是什么

4.sw.Writer()方法的用途、语法、参数、返回值是什么

5.sw.WriteLine()方法的用途、语法、参数、返回值是什么

6.sw.Close()方法的用途、语法、参数、返回值是什么

7.sw.Flush()方法的用途、语法、参数、返回值是什么

### BinaryReader类

1.BinaryReader类的用途是什么

2.如何使用BinaryReader类？

3.BinaryReader构造函数的语法是什么

4.br.PeekChar()方法的用途、语法、参数、返回值是什么

5.br.Read()方法的用途、语法、参数、返回值是什么

6.br.ReadBlooean()方法的用途、语法、参数、返回值是什么

7.br.ReadByte()方法的用途、语法、参数、返回值是什么

8.br.ReadBytes()方法的用途、语法、参数、返回值是什么

9.br.ReadChar()方法的用途、语法、参数、返回值是什么

10.br.ReadChars()方法的用途、语法、参数、返回值是什么

11.br.ReadInt32()方法的用途、语法、参数、返回值是什么

12.br.ReadString()方法的用途、语法、参数、返回值是什么

### Binary.Writer类

1.BinaryWriter类的用途是什么

2.如何使用BinaryWriter类？

3.BinaryWriter构造函数的语法是什么

4.bw.Write()方法的用途、语法、参数、返回值是什么
