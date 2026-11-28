---
title: MySQL 用户管理
description: 介绍 MySQL 用户账户的基本概念，以及创建用户、查看用户、修改用户和删除用户的语句与方法。
keywords: [MySQL, 用户管理, CREATE USER, ALTER USER, DROP USER, mysql.user, 用户账户, 对口升学]
sidebar_label: 7.2 MySQL用户管理
sidebar_position: 2
slug: /mysql/ch07/2-user-management
tags: [MySQL, 第七章, 数据库安全管理, 对口升学]
---

## 知识点

### 1. 用户账户的基本概念

MySQL 的用户账户由**用户名**和**主机名**共同组成，格式为：`'用户名'@'主机名'`。

- 主机名可以是：
  - `localhost`：仅允许本机登录；
  - 具体 IP：如 `'192.168.1.100'`；
  - `%`（通配符）：允许从任意主机登录；
  - 网段：如 `'192.168.1.%'`；
- 用户信息存储在系统数据库 `mysql` 的 **`user` 表**中；
- 用户账户与权限分离：创建用户后需另行授权。

> 注意：`'root'@'localhost'` 与 `'root'@'%'` 是**两个不同的账户**。

### 2. 创建用户：`CREATE USER`

```sql
CREATE USER [IF NOT EXISTS] '用户名'@'主机名'
    [IDENTIFIED BY '密码']
    [, '用户名2'@'主机名2' ...];
```

```sql
-- 创建仅本机登录的用户
CREATE USER 'user1'@'localhost' IDENTIFIED BY '123456';

-- 创建可远程登录的用户
CREATE USER 'user2'@'%' IDENTIFIED BY '123456';

-- 一次创建多个用户
CREATE USER 'u1'@'localhost', 'u2'@'localhost' IDENTIFIED BY '123456';
```

> MySQL 8.0 起 `CREATE USER` 不再支持直接 `GRANT` 授权，必须分开执行。

### 3. 查看用户

```sql
-- 查看所有用户及主机
SELECT user, host FROM mysql.user;

-- 查看当前登录用户
SELECT USER();
SELECT CURRENT_USER();
```

### 4. 修改用户：`ALTER USER`

```sql
-- 修改密码（推荐写法）
ALTER USER 'user1'@'localhost' IDENTIFIED BY '新密码';

-- 修改当前用户密码
ALTER USER USER() IDENTIFIED BY '新密码';

-- 修改账户属性（如锁定/解锁）
ALTER USER 'user1'@'localhost' ACCOUNT LOCK;    -- 锁定
ALTER USER 'user1'@'localhost' ACCOUNT UNLOCK;  -- 解锁

-- 重命名用户
RENAME USER 'old'@'localhost' TO 'new'@'localhost';
```

旧版写法 `SET PASSWORD FOR 'user'@'host' = PASSWORD('...')` 在 MySQL 8.0 中已废弃（了解）。

### 5. 删除用户：`DROP USER`

```sql
DROP USER [IF EXISTS] '用户名'@'主机名' [, '用户名2'@'主机名2'];
```

```sql
DROP USER IF EXISTS 'user1'@'localhost';
```

> 删除用户会同时删除该用户的所有权限。若省略主机名，默认为 `'%'`。

**权限刷新**：修改用户或权限后，通常需要：

```sql
FLUSH PRIVILEGES;
```

## 考点提示

- 高频考点：用户账户格式 `'用户名'@'主机名'`；`CREATE USER`、`ALTER USER`、`DROP USER` 语法。
- 易错点：`'%'` 表示允许任意主机连接；`CREATE USER` 只创建账户，**不会自动授予任何权限**。
- 用户信息存放在 `mysql` 数据库的 `user` 表中——常考选择题。
