---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务一 文件的种类   # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务一 文件的种类   # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  1  # 侧边栏中排在第1位
---

## 高考考点
C#的文件访问

1. 掌握文件、文件流FileStream的概念；
2. 掌握FileStream对文本文件和二进制文件的读写。

## 一、System.IO是什么

System.IO是一个管理文件和流的命名空间，

## 二、System.IO的常用类

### 文件操作类

```csharp
//文件操作
File(静), FileInfo //文件创建、删除、复制、移动等
FileStream   //文件读写的基础类
​
//目录操作
Directory(静), DirectoryInfo  //目录创建、删除、遍历等
DriveInfo  //驱动器信息
  
//路径操作
Path(静)
```

### 数据流操作类

```csharp
//基础流
Stream
FileStream //文件流
MemoryStream //内存流
  
//文本数据读写
StreamReader, StreamWriter //文本文件读写
StringReader, StringWriter // 字符串读写
  
//二进制数据读写
BinaryReader, BinaryWriter

```



## 三、文件是什么

文件是保存在存储介质上的一组相关信息的集合。

文件是以计算机存储设备为载体存储在计算机上的信息的集合。

文件可以是：文本文件、数据文件、图片文件、程序文件等。

## 四、文件管理是什么

文件管理是指对文件的存储、读取、修改、复制、移动、删除等操作。

## 五、文件分类

### 1.根据数据性质
- 程序文件
- 数据文件

### 2.根据文件的存取方式
- 顺序文件
- 随机文件
- 二进制文件


## 六、二进制文件的好处是什么


