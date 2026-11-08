---
title: 任务五 同步训练
description: 算法与程序设计《C#》项目十二 数据库应用 任务五 同步训练。6道选择题，涵盖连接字符串参数、Connection对象方法与属性、关系型数据库等知识点。
keywords: [C#, 数据库应用, 同步训练, 选择题, Connection, 连接字符串, 对口升学]
sidebar_label: 任务五 同步训练
sidebar_position: 5
slug: /csharp/proj12/task5-exercises
tags: [C#, 项目十二, 任务五, 对口升学]
---

## 知识点

### 选择题

**1.** 数据库连接字符串 `"server=(local); Database=Northwind; Uid=sa; Pwd="` 中，server指的是（　　）。  
A. 数据库名　　B. 数据库服务器名　　C. 用户表名　　D. 用户计算机名

**2.** 在ADO.NET中，用来和数据源建立连接的对象是（　　）。  
A. Connection对象　　B. Command对象　　C. DataAdapter对象　　D. DataSet对象

**3.** 应用ADO.NET访问数据库时，Connection对象连接字符串中 Initial Catalog 字符串含义是（　　）。  
A. Connection对象连接到数据库名称  
B. Connection对象身份验证信息  
C. Connection对象最大连接时间  
D. Connection对象使用缓存大小

**4.** 使用Connection对象的（　　）方法关闭数据库。  
A. Open　　B. CreateCommand　　C. Close　　D. ChangeDatabase

**5.** 使用Connection对象的（　　）属性获取或设置用于打开数据库的字符串。  
A. ConnectionTimeout　　B. ServerVersion　　C. ConnectionString　　D. State

**6.** 关系型数据库（　　）存储数据。  
A. 以库的形式　　B. 以表的形式　　C. 以行的形式　　D. 以列的形式

---

### 答案与解析

**1.** **B. 数据库服务器名**
> 解析：在连接字符串中，`server` 参数指定的是数据库服务器的名称或地址。`(local)` 表示本机服务器。数据库名由 `Database` 参数指定，用户表名是数据库内部结构，用户计算机名与server不同。

**2.** **A. Connection对象**
> 解析：Connection对象专门用于和数据源建立连接。Command对象用于执行SQL命令，DataAdapter对象用于填充DataSet和更新数据库，DataSet对象用于在内存中存储数据。

**3.** **A. Connection对象连接到数据库名称**
> 解析：`Initial Catalog` 和 `Database` 都是连接字符串中用于指定数据库名称的参数。身份验证由uid/pwd参数控制，连接时间由Connection Timeout控制。

**4.** **C. Close**
> 解析：`Close()` 方法用于关闭数据库连接。`Open()` 是打开连接，`CreateCommand()` 是创建命令对象，`ChangeDatabase()` 是切换数据库。

**5.** **C. ConnectionString**
> 解析：`ConnectionString` 属性用于获取或设置用于打开数据库的字符串。ConnectionTimeout获取等待时间，ServerVersion获取服务器版本，State获取连接状态。

**6.** **B. 以表的形式**
> 解析：关系型模型以表的形式（即关系）组织数据。一个数据库可以包含多张表，每张表由行和列组成，但数据的基本组织形式是表。
