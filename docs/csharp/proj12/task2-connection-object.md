---
title: 任务二 使用Connection对象
description: 算法与程序设计《C#》项目十二 数据库应用 任务二 使用Connection对象 知识点总结。掌握Connection对象的构造函数、Open和Close方法以及Connection类常用属性。
keywords: [C#, ADO.NET, Connection对象, Open, Close, ConnectionString, 对口升学]
sidebar_label: 任务二 使用Connection对象
sidebar_position: 2
slug: /csharp/proj12/task2-connection-object
tags: [C#, 项目十二, 任务二, 对口升学]
---

## 知识点

### 1. 数据库连接的基本流程

所有对数据库的访问操作都是从建立数据库连接开始的。在打开数据库之前，必须先设置好连接字符串（Connection），再调用Open方法打开连接，此时便可以对数据库进行访问，最后调用Close方法关闭连接。

在数据库的访问中必须首先建立到数据库的物理连接。

### 2. 创建并使用连接对象

Connection对象的构造函数有两个版本：有参和无参。

```csharp
// 有参版本（传入连接字符串）
using (SqlConnection conn = new SqlConnection(ConnString))
// using表示释放资源

// 无参版本
using (SqlConnection conn = new SqlConnection())
```

> **说明**：使用 `using` 语句可以确保在代码块结束时自动释放资源（调用Dispose方法）。

### 3. 数据库连接的两个方法

Connection对象提供两个核心方法：

| 方法 | 说明 |
|---|---|
| `Open()` | 打开数据库的连接 |
| `Close()` | 关闭与数据库的连接 |

```csharp
conn.Open();    // 打开数据库的连接
conn.Close();   // 关闭与数据库的连接
```

### 4. Connection类的常见属性（表12-2）

| 属性 | 说明 |
|---|---|
| ConnectionString | 获取或设置用于打开数据库的字符串 |
| ConnectionTimeout | 获取在尝试建立连接时终止尝试并生成错误之前所等待的时间 |
| Database | 获取当前数据库或连接打开后要使用的数据库的名称 |
| DataSource | 获取数据源的服务器或文件名 |

### 5. 数据库连接操作流程

```
设置连接字符串 → 创建Connection对象 → 调用Open()打开连接 → 数据库操作 → 调用Close()关闭连接
```

### 6. 使用MySQL连接对象示例

```csharp
// 创建连接字符串
string mysqlcon = "server=localhost; database=student; user=root; password=abc123456";

// 创建MySQL连接对象
MySqlConnection conn = new MySqlConnection(mysqlcon);

// 打开连接
conn.Open();

// 数据库操作...
Console.WriteLine("连接成功");

// 关闭连接
conn.Close();
```

> **要点总结**：
> - Connection构造函数有有参和无参两个版本
> - Open()方法打开数据库连接，Close()方法关闭连接
> - ConnectionString是连接对象最核心的属性
> - 建议使用using语句确保资源被正确释放
> - 操作流程：设置连接字符串 → 创建对象 → Open → 操作 → Close
