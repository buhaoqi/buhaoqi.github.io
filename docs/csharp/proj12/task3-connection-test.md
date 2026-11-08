---
title: 任务三 连接的测试
description: 算法与程序设计《C#》项目十二 数据库应用 任务三 连接的测试 知识点总结。用C#代码连接MySQL数据库并检测连接是否成功，包括引用插件、创建连接、打开连接、检测输出、关闭连接。
keywords: [C#, MySQL, 连接测试, MySql.Data, MySqlConnection, VS2010, 对口升学]
sidebar_label: 任务三 连接的测试
sidebar_position: 3
slug: /csharp/proj12/task3-connection-test
tags: [C#, 项目十二, 任务三, 对口升学]
---

## 知识点

### 1. 前置准备

在C#中连接MySQL数据库前，需要完成以下准备工作：

#### （1）安装MySQL数据库

确保本机已安装MySQL数据库，并能够正常登录使用。

#### （2）测试MySQL登录

按 Windows+R 键，输入 `cmd`，进入命令行界面，然后登录MySQL：

```
mysql -u root -p
Enter password: *********
```

登录成功后会显示MySQL版本信息，例如：
```
Welcome to the MySQL monitor. Commands end with ; or \g.
Your MySQL connection id is 8
Server version: 8.0.35 MySQL Community Server - GPL
```

#### （3）下载.NET连接插件

下载与本机MySQL相应版本的.NET连接插件（`MySql.Data.dll`）。

### 2. 在VS 2010中添加引用

#### 步骤1：创建新项目

打开C#创建一个新项目，创建成功后在"解决方案资源管理器"中找到"引用"节点。

#### 步骤2：添加引用

右键点击"引用" → 选择"添加引用" → 单击"浏览" → 找到下载的 `MySql.Data.dll` 文件位置 → 选中后点击"确定"。

添加成功后，在解决方案资源管理器的"引用"节点下可以看到 `MySql.Data` 条目。

### 3. 连接测试代码

完整的C#连接MySQL数据库并测试连接的代码：

```csharp
using MySql.Data.MySqlClient;  // 第一步：引入MySQL命名空间

string mysqlcon = "server=localhost; database=student; user=root; password=abc123456";
// 第二步：创建连接字符串
// server = 本机服务器名
// database = 数据库名
// user = MySQL账号
// password = MySQL密码

MySqlConnection conn = new MySqlConnection(mysqlcon);
// 第三步：创建MySQL连接对象

conn.Open();
// 第四步：打开连接

Console.WriteLine("连接成功");
// 第五步：检测是否连接成功，进行输出

Console.ReadKey();

conn.Close();
// 第六步：关闭连接
```

### 4. 连接成功的输出结果

运行程序后，如果连接成功，控制台输出：

```
连接成功
请按任意键继续. . .
```

### 5. 连接步骤总结

| 步骤 | 代码 | 说明 |
|---|---|---|
| 第一步 | `using MySql.Data.MySqlClient;` | 引入MySQL命名空间 |
| 第二步 | `string mysqlcon = "server=...; database=...; user=...; password=...";` | 创建连接字符串 |
| 第三步 | `MySqlConnection conn = new MySqlConnection(mysqlcon);` | 创建连接对象 |
| 第四步 | `conn.Open();` | 打开连接 |
| 第五步 | `Console.WriteLine("连接成功");` | 检测并输出 |
| 第六步 | `conn.Close();` | 关闭连接 |

> **要点总结**：
> - 连接MySQL需要先下载并引用 `MySql.Data.dll` 插件
> - 使用 `using MySql.Data.MySqlClient` 引入命名空间
> - MySqlConnection是MySQL专用的连接类
> - 连接字符串参数：server（服务器）、database（数据库名）、user（用户名）、password（密码）
> - 连接完成后必须调用Close()方法关闭连接
