---
title: 数据库角色管理
description: 介绍 MySQL 中角色的基本概念，以及创建角色、为角色授权、将角色授予用户、查看角色权限、回收角色和删除角色的方法。
keywords: [MySQL, 角色管理, CREATE ROLE, GRANT, SET ROLE, SHOW GRANTS, REVOKE, DROP ROLE, 对口升学]
sidebar_label: 7.4 数据库角色管理
sidebar_position: 4
slug: /mysql/ch07/4-role-management
tags: [MySQL, 第七章, 数据库安全管理, 对口升学]
---

## 知识点

### 1. 角色的基本概念

**角色（Role）**是**一组权限的集合**，是 MySQL 8.0 引入的权限管理机制。

- 角色本质上是一种特殊的用户账户（没有登录密码）；
- 可以先为角色授予权限，再把角色赋予多个用户，简化权限管理；
- 修改角色权限后，所有拥有该角色的用户权限同步变化；
- 角色信息同样存储在 `mysql.user` 表中。

**优点**：简化授权管理、便于批量授权和权限回收、降低管理出错率。

> MySQL 5.7 及更早版本不支持角色（了解即可）。

### 2. 创建角色：`CREATE ROLE`

```sql
CREATE ROLE [IF NOT EXISTS] '角色名'@'主机名' [, '角色2'@'主机名' ...];
```

```sql
CREATE ROLE 'app_read'@'localhost', 'app_write'@'localhost';
-- 主机名可省略，默认为 '%'
CREATE ROLE 'app_admin';
```

### 3. 为角色授权：`GRANT`

```sql
GRANT 权限列表 ON 对象 TO '角色名'@'主机名';
```

```sql
GRANT SELECT ON school.* TO 'app_read'@'localhost';
GRANT SELECT, INSERT, UPDATE, DELETE ON school.* TO 'app_write'@'localhost';
```

### 4. 将角色授予用户

```sql
GRANT '角色名'@'主机名' TO '用户名'@'主机名';
```

```sql
GRANT 'app_read'@'localhost' TO 'user1'@'localhost';
GRANT 'app_read', 'app_write' TO 'user2'@'localhost';
```

**设置默认角色**（用户登录时自动激活）：

```sql
SET DEFAULT ROLE ALL TO 'user1'@'localhost';
```

**临时激活角色**：

```sql
SET ROLE 'app_read';        -- 激活指定角色
SET ROLE ALL;               -- 激活全部角色
SET ROLE NONE;              -- 停用所有角色
```

> ⚠️ 用户被授予角色后，默认**不自动激活**，需要 `SET DEFAULT ROLE` 或 `SET ROLE` 才生效——常考易错点。

### 5. 查看角色权限

```sql
SHOW GRANTS FOR 'app_read'@'localhost';
SHOW GRANTS FOR 'user1'@'localhost' USING 'app_read'@'localhost';  -- 含角色权限
SELECT * FROM mysql.user WHERE user = 'app_read';
```

### 6. 回收角色：`REVOKE`

```sql
-- 收回用户的角色
REVOKE '角色名'@'主机名' FROM '用户名'@'主机名';

-- 收回角色的权限
REVOKE 权限列表 ON 对象 FROM '角色名'@'主机名';
```

```sql
REVOKE 'app_read'@'localhost' FROM 'user1'@'localhost';
REVOKE INSERT ON school.* FROM 'app_write'@'localhost';
```

### 7. 删除角色：`DROP ROLE`

```sql
DROP ROLE [IF EXISTS] '角色名'@'主机名' [, '角色2'@'主机名'];
```

```sql
DROP ROLE IF EXISTS 'app_read'@'localhost';
```

> 删除角色后，所有拥有该角色的用户自动失去相应权限。

## 考点提示

- 高频考点：角色是**权限的集合**，`CREATE ROLE` → `GRANT 权限 TO 角色` → `GRANT 角色 TO 用户` 的三步流程。
- 易错点：角色授予用户后**默认不激活**，需 `SET DEFAULT ROLE ALL` 或 `SET ROLE`。
- 角色管理语句与用户管理语句语法相似，注意区分 `DROP ROLE` 与 `DROP USER`。
