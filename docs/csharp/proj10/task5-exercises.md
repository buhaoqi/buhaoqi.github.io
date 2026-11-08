---
title: 任务五 同步训练
description: 算法与程序设计《C#》项目十 C#文件操作 任务五 同步训练。5道选择题、5道填空题、5道思考题，巩固文件与流、FileStream、StreamReader、StreamWriter、BinaryReader、BinaryWriter等知识点。
keywords: [C#, 文件操作, 同步训练, 选择题, 填空题, 思考题, 对口升学]
sidebar_label: 任务五 同步训练
sidebar_position: 5
slug: /csharp/proj10/task5-exercises
tags: [C#, 项目十, 任务五, 对口升学]
---

## 知识点

### 一、选择题

**1.** 以下与文件操作相关的类中，（　　）类不是静态类。  
A. FileInfo　　B. Path　　C. File　　D. Directory

**2.** 以下类中，一般不用于读写二进制文件的是（　　）。  
A. FileStream　　B. BinaryReader　　C. BinaryWriter　　D. Stream

**3.** 下列（　　）类的文件流既可以写也可以读。  
A. FileStream　　B. StreamReader　　C. StreamWriter　　D. BinaryWrite

**4.** 在向文件流写入数据时，数据只是写入到文件缓冲区中，只有在缓冲区满时才真正写入到文件中去。所以写入数据后还应调用（　　）方法以便把缓冲区中的数据实际写入到文件中去。  
A. Open　　B. Seek　　C. Flush　　D. Close

**5.** 使用StreamReader对象的（　　）方法，可以一次性读取指定文件的全部内容。  
A. Read()　　B. ReadBlock()　　C. ReadLine()　　D. ReadToEnd()

---

### 二、填空题

**1.** File类用于判断指定文件是否存在的方法是________。

**2.** 在程序设计中，所谓流就是连续传输的信息序列，这是一种有序流，因此相对于某一对象，通常把对象接收外界的信息输入称为________，相应地从对象向外界输出的信息称为________。

**3.** StreamReader和StreamWriter不同于Stream的派生类，它们分别继承自抽象类的________类和________类，这两个类主要用于读写文本文件。

**4.** FileStream类中使用FileMode参数的成员中打开已经存在的文件并将其内容删除，如果不存在则抛出异常的是________。

**5.** 使用StreamReader类的________方法可返回下一个要读取的字符，如果没有更多的可用字符或此流不支持查找，则返回值为________。

---

### 三、思考题

**1.** 文件与流有哪些区别？

**2.** 流有哪几种基本操作？

**3.** 在C#.NET中，读写文本文件与二进制文件分别使用什么类？

**4.** 文本文件与二进制文件有何区别？

**5.** 在读写文本文件时可以使用哪些编码方案？

---

### 答案与解析

#### 一、选择题答案

**1.** **A. FileInfo**
> 解析：File、Path、Directory都是静态类，FileInfo需要实例化后使用。

**2.** **D. Stream**
> 解析：Stream是抽象基类，一般不直接用于读写二进制文件；FileStream、BinaryReader、BinaryWriter是专门用于二进制文件读写的类。

**3.** **A. FileStream**
> 解析：FileStream可以通过FileAccess.ReadWrite设置为既可读又可写；StreamReader只读，StreamWriter只写。

**4.** **C. Flush**
> 解析：Flush方法用于清除缓冲区，使所有缓冲数据写入数据源；Close方法也会清空缓冲区，但Flush可以在不关闭流的情况下强制写入。

**5.** **D. ReadToEnd**
> 解析：ReadToEnd()方法可以一次性读取从当前位置到文件结尾的全部内容。

#### 二、填空题答案

**1.** **Exists**

**2.** **输入流**；**输出流**

**3.** **TextReader**；**TextWriter**

**4.** **Truncate**
> 解析：Truncate打开已有文件并删除内容，若文件不存在则报异常。

**5.** **Read()**；**-1**
> 解析：Read()方法返回下一个字符的ASCII码值，到达流末尾时返回-1。

#### 三、思考题答案

**1.** 文件与流的区别：
- 文件是保存在存储介质上的一组相关信息的集合
- 流是连续传输的信息序列，提供了一种向后备存储写入字节和从后备存储读取字节的方式
- 文件是数据的静态存储形式，流是数据在程序与外部设备之间动态传输的方式

**2.** 流的基本操作：
- 读操作（输入流）：从外部设备读取数据到程序
- 写操作（输出流）：从程序写入数据到外部设备
- 定位操作：通过Seek方法改变流中的读写位置

**3.** 读写文本文件与二进制文件的类：
- 文本文件读取：StreamReader
- 文本文件写入：StreamWriter
- 二进制文件读写：FileStream、BinaryReader、BinaryWriter

**4.** 文本文件与二进制文件的区别：
- 文本流中数据以字符形式出现，每个字符对应一个字节（ASCII），可读可打印
- 二进制流中数据按二进制编码方式存放，内容与外部设备一一对应，不可直接读懂
- 二进制文件更节省空间、存取更快、精确数据不会丢失有效位

**5.** 读写文本文件可使用的编码方案：
- ASCII
- UTF-8（默认值）
- Unicode
- UTF-16
- UTF-32
- BigEndianUnicode
- UTF-7
