---
title: SQL 结构化查询语言
description: 介绍 SQL 语言的基本概念、作用、主要特点以及组成（DDL、DML、DCL，并补充 DQL 与 TCL）。
keywords: [MySQL, SQL, 结构化查询语言, DDL, DML, DCL, DQL, TCL, 对口升学]
sidebar_label: 2.5 SQL结构化查询语言
sidebar_position: 5
slug: /mysql/ch02/5-sql-language
tags: [MySQL, 第二章, MySQL数据库管理基础, 对口升学]
---

## 知识点

### 1. SQL 语言的基本概念

SQL（Structured Query Language，**结构化查询语言**）是**用于管理和操作关系型数据库的标准语言**。

- 1974 年由 Boyce 和 Chamberlin 提出，1986 年成为 ANSI 标准，后被 ISO 采纳；
- MySQL、Oracle、SQL Server 等主流 DBMS 均支持 SQL；
- 虽然名为"查询语言"，但 SQL 能完成数据定义、操纵、控制等全部数据库操作。

### 2. SQL 语言的作用

1. **定义数据库对象**：创建、修改、删除数据库、表、视图、索引等；
2. **操纵数据**：查询、插入、修改、删除表中的数据；
3. **控制访问权限**：授予或回收用户权限；
4. **保证数据完整性与事务控制**：设置约束、提交或回滚事务。

### 3. SQL 语言的主要特点

1. **综合性**：集数据定义、数据操纵、数据控制于一体；
2. **非过程化**：只需说明"做什么"，不必说明"怎么做"，存取路径由 DBMS 自动选择；
3. **面向集合**：操作对象和结果都是元组的集合，一次可处理多条记录；
4. **语法简单、易学易用**：关键字接近自然英语；
5. **标准统一**：不同数据库产品的 SQL 基本通用（但各有方言扩展）；
6. **两种使用方式**：既可作为**交互式语言**单独使用，也可作为**嵌入式语言**嵌入高级程序中使用。

### 4. SQL 语言的组成

| 类别 | 全称 | 作用 | 典型语句 |
| --- | --- | --- | --- |
| **DDL** | Data Definition Language（数据定义语言） | 定义数据库对象（库、表、视图、索引等） | `CREATE`、`ALTER`、`DROP`、`RENAME`、`TRUNCATE` |
| **DML** | Data Manipulation Language（数据操纵语言） | 对表中数据进行增、删、改 | `INSERT`、`UPDATE`、`DELETE` |
| **DCL** | Data Control Language（数据控制语言） | 管理用户权限与事务控制 | `GRANT`、`REVOKE`、`COMMIT`、`ROLLBACK` |

> 说明：部分教材将 `SELECT` 单独划为 **DQL（数据查询语言）**，将 `COMMIT`、`ROLLBACK` 划为 **TCL（事务控制语言）**。考纲中 DML 包含数据查询，本教程按考纲口径组织，将在第 3、4 章分别讲解 DDL 与 DML。

**示例**：

```sql
-- DDL：创建表
CREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(20));

-- DML：插入数据
INSERT INTO students VALUES (1, '张三');

-- DQL / DML：查询数据
SELECT * FROM students;

-- DCL：授权
GRANT SELECT ON students TO 'user1'@'localhost';
```

## 考点提示

- 高频考点：SQL 的四大特点（综合、非过程化、面向集合、两种使用方式）与三类语言的划分。
- 易错点：`SELECT` 在不同教材中归属不同（DQL 或 DML），需按本题库采用的口径作答。
- DDL 针对**结构**（表结构），DML 针对**数据**（记录内容），常以选择题区分。
