---
title: 数据库的定义与管理
description: 介绍 MySQL 中创建、查看、选择、修改和删除数据库的语句，包括 CREATE DATABASE、SHOW DATABASES、USE、ALTER DATABASE、DROP DATABASE。
keywords: [MySQL, DDL, CREATE DATABASE, SHOW DATABASES, USE, ALTER DATABASE, DROP DATABASE, 数据库管理, 对口升学]
sidebar_label: 3.1 数据库的定义与管理
sidebar_position: 1
slug: /mysql/ch03/1-database-management
tags: [MySQL, 第三章, DDL, 对口升学]
---

## 知识点

### 1. 创建数据库：`CREATE DATABASE`

**语法**：

```sql
CREATE DATABASE [IF NOT EXISTS] 数据库名
    [CHARACTER SET 字符集] [COLLATE 排序规则];
```

**示例**：

```sql
CREATE DATABASE school;
CREATE DATABASE IF NOT EXISTS school CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
```

- `IF NOT EXISTS`：若数据库已存在则不报错，仅给出警告（推荐使用）；
- `CHARACTER SET`（可简写为 `CHARSET`）：指定默认字符集；
- `COLLATE`：指定默认排序规则。

> MySQL 中 `SCHEMA`（模式）与 `DATABASE`（数据库）是同义词。

### 2. 查看数据库：`SHOW DATABASES`

```sql
SHOW DATABASES;    -- 查看所有数据库
SHOW SCHEMAS;      -- 与 SHOW DATABASES 等价
```

MySQL 安装后默认包含的系统数据库：

| 数据库 | 作用 |
| --- | --- |
| `mysql` | 存储用户账户、权限等系统信息 |
| `information_schema` | 存储数据库元数据（库、表、列等信息） |
| `performance_schema` | 存储性能监控数据 |
| `sys` | 简化性能数据的视图集合 |

### 3. 选择数据库：`USE`

```sql
USE 数据库名;
USE school;
```

- 使用 `USE` 后，后续的 SQL 语句默认作用于该数据库；
- 也可在表名前加"数据库名."前缀直接访问，无需先 `USE`：`SELECT * FROM school.students;`；
- 查看当前使用的数据库：`SELECT DATABASE();`。

### 4. 修改数据库：`ALTER DATABASE`

主要用于修改数据库的字符集和排序规则：

```sql
ALTER DATABASE 数据库名
    [CHARACTER SET 字符集] [COLLATE 排序规则];
```

```sql
ALTER DATABASE school CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

> 注意：已存在表中数据的字符集不会因修改数据库默认字符集而自动改变。

### 5. 删除数据库：`DROP DATABASE`

```sql
DROP DATABASE [IF EXISTS] 数据库名;
```

```sql
DROP DATABASE IF EXISTS school;
```

> ⚠️ **危险操作**：删除数据库会删除其中所有表和数据，且通常不可恢复，执行前务必确认并做好备份。

## 考点提示

- 高频考点：`CREATE DATABASE`、`SHOW DATABASES`、`USE`、`DROP DATABASE` 的语法书写。
- 易错点：`DROP DATABASE` 删除的是整个数据库（含所有数据），与 `DROP TABLE`（删表）、`DELETE`（删记录）不同。
- 常考 `IF NOT EXISTS` / `IF EXISTS` 的作用：避免报错。
