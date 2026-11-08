---
title: 任务一 Connection连接字符串
description: 算法与程序设计《C#》项目十二 数据库应用 任务一 Connection连接字符串 知识点总结。掌握数据库连接字符串常用参数、Connection对象连接MySQL数据库的语法格式。
keywords: [C#, 数据库应用, ADO.NET, Connection, 连接字符串, MySQL, 对口升学]
sidebar_label: 任务一 Connection连接字符串
sidebar_position: 1
slug: /csharp/proj12/task1-connection-string
tags: [C#, 项目十二, 任务一, 对口升学]
---

## 知识点

### 1. ADO.NET概述

ActiveX Data Objects（ADO）是Microsoft开发的面向对象的数据库访问库。ADO.NET是ADO的后续技术，并且做了非常大的改进。程序员利用ADO.NET可以非常简单、快速地访问数据库。

### 2. 关系型数据库

数据库用于存储结构化数据。数据组有多种数据模型，目前主要的数据模型是关系型模型，关系型模型以表的形式（即关系）组织数据。以关系型模型为基础的数据库就是关系数据库。

### 3. 数据库连接字符串

为了让连接对象知道欲访问的数据库文件在哪里，用户必须将这些信息用一个字符串加以描述。数据库连接字符串中需要提供的必要信息包括：
- 服务器的位置
- 数据库的名称
- 数据库的身份验证方式（Windows集成身份验证或SQL Server身份验证）
- 还可以指定其他信息（如连接超时等）

### 4. 连接字符串常用参数（表12-1）

| 参数 | 说明 |
|---|---|
| Provider | 设置或返回连接提供程序的名称，仅用于OleDbConnection对象 |
| Connection Timeout | 在终止尝试并产生异常前，等待连接到服务器的连接时间长度（以秒为单位），默认值是15秒 |
| Initial Catalog 或 Database | 数据库的名称 |
| Data Source 或 Server | 连接打开时使用的SQL Server名称，或者是Microsoft Access数据库的文件名 |
| Password 或 pwd | 账户的登录密码 |
| User ID 或 uid | 登录账户 |
| Integrated Security | 决定连接是否为安全连接。可能的值有True、False和SSPI（SSPI是True的同义词） |

### 5. Connection对象

Connection对象用于连接到数据库和管理对数据库的事务，它的一些属性描述数据源和用户身份验证。Connection对象还提供一些方法允许程序员与数据源建立连接，或者断开连接。

### 6. 在C#中连接MySQL数据库的步骤

#### 步骤1：引用工具包

要在C#中连接MySQL数据库，可以使用 `MySql.Data.dll` 工具包提供的功能。首先，下载并引用该工具包，将其放入项目的引用中。

#### 步骤2：添加命名空间

在代码中添加以下语句以引入MySQL相关的命名空间：

```csharp
using MySql.Data.MySqlClient;
```

#### 步骤3：编写连接字符串

连接MySQL数据库的语法格式如下：

```csharp
connectionStr = "server=服务器名; uid=用户名; password=密码; database=数据库名称"
```

各参数说明：
- `server`：服务器名（本机使用 `localhost`）
- `uid`（或 `user`）：MySQL账号（用户名）
- `password`（或 `pwd`）：MySQL密码
- `database`：数据库名称

### 7. ConnectionString属性

Connection对象最重要的属性为连接字符串 `ConnectionString`，也是Connection对象唯一的非只读属性。

> **要点总结**：
> - ADO.NET是ADO的后续技术，用于访问数据库
> - 连接字符串包含服务器位置、数据库名称、身份验证等信息
> - 连接MySQL需要引用 `MySql.Data.dll` 工具包
> - 连接字符串格式：`server=服务器名; uid=用户名; password=密码; database=数据库名`
> - ConnectionString是Connection对象唯一非只读属性
