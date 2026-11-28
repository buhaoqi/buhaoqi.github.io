---
title: 数据库权限管理
description: 介绍 MySQL 权限的基本概念与分类，以及授予权限（GRANT）、查看权限（SHOW GRANTS）和回收权限（REVOKE）的方法。
keywords: [MySQL, 权限管理, GRANT, REVOKE, SHOW GRANTS, ALL PRIVILEGES, SELECT, INSERT, FLUSH PRIVILEGES, 对口升学]
sidebar_label: 7.3 数据库权限管理
sidebar_position: 3
slug: /mysql/ch07/3-privilege-management
tags: [MySQL, 第七章, 数据库安全管理, 对口升学]
---

## 知识点

### 1. 权限的基本概念

**权限**是允许用户执行特定操作的许可。MySQL 通过权限控制用户对数据库对象的访问，实现**访问控制**。

- 权限信息存储在 `mysql` 数据库的 `user`、`db`、`tables_priv`、`columns_priv` 等授权表中；
- 遵循**最小权限原则**：只授予用户完成工作所必需的最小权限；
- 权限按层级可分为：全局级、数据库级、表级、列级、存储例程级。

### 2. 权限的分类

| 类别 | 典型权限 | 说明 |
| --- | --- | --- |
| **数据权限** | `SELECT`、`INSERT`、`UPDATE`、`DELETE` | 对表数据的查询与增删改 |
| **结构权限（DDL）** | `CREATE`、`ALTER`、`DROP`、`INDEX`、`REFERENCES` | 创建、修改、删除数据库对象 |
| **管理权限** | `GRANT OPTION`、`SUPER`、`SHUTDOWN`、`RELOAD`、`PROCESS`、`FILE` | 系统管理与维护操作 |
| **特殊权限** | `ALL PRIVILEGES`、`USAGE` | 所有权限 / 无任何权限（仅能登录） |

> 权限级别写法：
> - `*.*`：所有数据库的所有对象（全局级）
> - `db_name.*`：指定数据库的所有对象
> - `db_name.table_name`：指定表
> - `db_name.table_name(column_name)`：指定列

### 3. 授予权限：`GRANT`

```sql
GRANT 权限列表 ON 对象 TO '用户名'@'主机名'
    [WITH GRANT OPTION];
```

**示例**：

```sql
-- 授予查询、插入权限（指定数据库）
GRANT SELECT, INSERT ON school.* TO 'user1'@'localhost';

-- 授予某表的查询权限
GRANT SELECT ON school.students TO 'user2'@'localhost';

-- 授予所有权限（全局）
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost';

-- 允许被授权者再授权给他人
GRANT SELECT ON school.* TO 'user3'@'localhost' WITH GRANT OPTION;
```

- `WITH GRANT OPTION` 表示被授权用户可将权限转授他人；
- 授权后用户**重新连接**才能使用新权限（或执行 `FLUSH PRIVILEGES;`）。

### 4. 查看权限：`SHOW GRANTS`

```sql
-- 查看当前用户权限
SHOW GRANTS;

-- 查看指定用户权限
SHOW GRANTS FOR 'user1'@'localhost';
```

输出示例：

```sql
GRANT SELECT, INSERT ON `school`.* TO 'user1'@'localhost'
```

### 5. 回收权限：`REVOKE`

```sql
REVOKE 权限列表 ON 对象 FROM '用户名'@'主机名';
```

```sql
-- 回收指定权限
REVOKE INSERT ON school.* FROM 'user1'@'localhost';

-- 回收所有权限
REVOKE ALL PRIVILEGES ON *.* FROM 'admin'@'localhost';

-- 回收转授权
REVOKE GRANT OPTION ON school.* FROM 'user3'@'localhost';
```

```sql
FLUSH PRIVILEGES;   -- 使权限变更立即生效
```

## 考点提示

- 高频考点：`GRANT 权限 ON 对象 TO 用户`、`REVOKE 权限 ON 对象 FROM 用户`、`SHOW GRANTS FOR 用户`。
- 易错点：`*.*` 表示所有库的所有表；`ALL PRIVILEGES` 可简写为 `ALL`；`USAGE` 表示无权限。
- `WITH GRANT OPTION` 允许转授权，是常考选择题干扰项。
