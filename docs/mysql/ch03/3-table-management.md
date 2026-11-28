---
title: 数据表的定义与管理
description: 介绍 MySQL 中数据表的创建、查看、修改、重命名、复制与删除操作，包括 CREATE TABLE、SHOW TABLES、DESCRIBE、ALTER TABLE、RENAME TABLE、DROP TABLE 等语句。
keywords: [MySQL, DDL, CREATE TABLE, SHOW TABLES, DESCRIBE, ALTER TABLE, RENAME TABLE, DROP TABLE, 数据表管理, 对口升学]
sidebar_label: 3.3 数据表的定义与管理
sidebar_position: 3
slug: /mysql/ch03/3-table-management
tags: [MySQL, 第三章, DDL, 对口升学]
---

## 知识点

### 3.3.1 创建数据表：`CREATE TABLE`

**语法**：

```sql
CREATE TABLE [IF NOT EXISTS] 表名 (
    字段名1 数据类型 [约束],
    字段名2 数据类型 [约束],
    ...
    [表级约束]
) [ENGINE=引擎] [DEFAULT CHARSET=字符集];
```

**示例**：

```sql
CREATE TABLE students (
    sno   CHAR(10)    PRIMARY KEY,
    sname VARCHAR(20) NOT NULL,
    sage  INT,
    ssex  CHAR(2)     DEFAULT '男'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

- 表名在数据库中必须唯一；
- 字段名后的属性包括：数据类型、`NOT NULL`、`DEFAULT`、`PRIMARY KEY`、`UNIQUE`、`AUTO_INCREMENT`、`COMMENT` 等；
- `AUTO_INCREMENT` 用于自动生成递增编号，常用于主键，且该字段必须为**整数类型且为键**。

### 3.3.2 查看数据表

| 操作 | 语句 |
| --- | --- |
| 查看所有表 | `SHOW TABLES;` |
| 查看表的创建语句 | `SHOW CREATE TABLE 表名;` |
| 查看列信息（一） | `SHOW COLUMNS FROM 表名;` |
| 查看列信息（二） | `DESCRIBE 表名;` 或简写 `DESC 表名;` |

`DESC` 输出结果各列含义：

| 列名 | 含义 |
| --- | --- |
| `Field` | 字段名 |
| `Type` | 数据类型 |
| `Null` | 是否允许为空（`YES`/`NO`） |
| `Key` | 是否为键（`PRI` 主键、`UNI` 唯一键、`MUL` 普通索引） |
| `Default` | 默认值 |
| `Extra` | 额外信息（如 `auto_increment`） |

### 3.3.3 修改数据表结构：`ALTER TABLE`

```sql
ALTER TABLE 表名 操作 [操作 ...];
```

**常用操作**：

```sql
-- 添加字段
ALTER TABLE students ADD COLUMN sphone CHAR(11);
ALTER TABLE students ADD COLUMN sage INT AFTER sname;   -- 指定位置（AFTER / FIRST）

-- 修改字段类型
ALTER TABLE students MODIFY COLUMN sage SMALLINT;

-- 修改字段名和类型
ALTER TABLE students CHANGE COLUMN sage age INT;

-- 删除字段
ALTER TABLE students DROP COLUMN sphone;

-- 修改字段非空/默认值
ALTER TABLE students MODIFY COLUMN sname VARCHAR(30) NOT NULL DEFAULT '未知';
```

> `MODIFY` 只能改类型/属性，`CHANGE` 既能改名又能改类型。

### 3.3.4 重命名数据表：`RENAME TABLE`

```sql
RENAME TABLE 旧表名 TO 新表名;
RENAME TABLE students TO stu;
```

等价写法：

```sql
ALTER TABLE students RENAME TO stu;
```

### 3.3.5 复制数据表

**（1）复制表结构（不复制数据）**：

```sql
CREATE TABLE 新表名 LIKE 原表名;
CREATE TABLE students_copy LIKE students;
```

**（2）复制表结构和数据**：

```sql
CREATE TABLE 新表名 AS SELECT * FROM 原表名;
CREATE TABLE students_copy AS SELECT * FROM students;
```

> 区别：`LIKE` 会完整复制列属性、索引和约束（但复制数据需再 `INSERT INTO ... SELECT`）；`AS SELECT` 只复制列和数据，不复制主键、索引、约束等属性。

### 3.3.6 删除数据表：`DROP TABLE`

```sql
DROP TABLE [IF EXISTS] 表名1 [, 表名2, ...];
```

```sql
DROP TABLE IF EXISTS students, teachers;
```

> ⚠️ `DROP TABLE` 会删除表结构及全部数据，且一般不可恢复。与 `TRUNCATE TABLE`（清空数据但保留结构）不同。

## 考点提示

- 高频考点：`CREATE TABLE` 语法、`ALTER TABLE ADD/MODIFY/CHANGE/DROP COLUMN`、`DESC` 各列含义。
- 易错点：`MODIFY` 与 `CHANGE` 的区别；`CREATE TABLE ... LIKE`（仅结构）与 `CREATE TABLE ... AS SELECT`（结构 + 数据）的区别。
- `DROP TABLE` 删表结构与数据；`DELETE FROM` 删记录；`TRUNCATE TABLE` 清空表数据并保留结构。
