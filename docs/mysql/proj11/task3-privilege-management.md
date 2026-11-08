---
title: 任务三 权限管理
description: 数据库原理与应用技术《MySQL》项目十一 数据库安全 任务三 权限管理知识点总结。涵盖MySQL权限的五个层级（全局/数据库/表/列/存储过程级）、常用权限类型、GRANT语句分配权限、SHOW GRANTS查看权限、REVOKE语句收回权限等核心知识点。
keywords: [MySQL, 权限管理, GRANT, REVOKE, SHOW GRANTS, 权限层级, ALL PRIVILEGES, FLUSH PRIVILEGES, 对口升学]
sidebar_label: 任务三 权限管理
sidebar_position: 3
slug: /mysql/proj11/task3-privilege-management
tags: [MySQL, 项目十一, 任务三, 对口升学]
---

## 知识点

### 1. 什么是权限？MySQL的用户权限存储在哪里？

答：权限是指登录到MySQL服务器的用户，能够对数据库对象执行何种操作的规则集合。所有的用户权限都存储在MySQL数据库的6个权限表中，在MySQL启动时，服务器会将数据库中的各种权限信息读入到内存，以确定用户能进行的操作。为用户合理分配权限可以有效保证数据库的安全性，不合理的授权会给数据库带来安全隐患。

### 2. MySQL权限分为哪几个层级？

答：根据权限的范围，MySQL权限分为五个层级：
1. **全局层级**：使用 `ON *.*` 语法授予权限，作用于所有数据库
2. **数据库层级**：使用 `ON 数据库名.*` 语法授予权限，作用于指定数据库
3. **表层级**：使用 `ON 数据库名.表名` 语法授予权限，作用于指定表
4. **列层级**：使用 `SELECT(列1,列2,...)` 等语法授予权限，作用于指定列
5. **存储过程、函数级**：使用 `EXECUTE ON PROCEDURE` 或 `EXECUTE ON FUNCTION` 语法授予权限

### 3. MySQL常用的权限有哪些？

答：MySQL常用的权限包括：
- **ALL / ALL PRIVILEGES**：所有权限
- **SELECT**：查询表
- **INSERT**：插入表
- **UPDATE**：更新表
- **DELETE**：删除表中的数据
- **CREATE**：创建数据库/表/索引
- **DROP**：删除数据库/表
- **ALTER**：修改表
- **GRANT OPTION**：授权权限
- **CREATE VIEW**：创建视图
- **SHOW VIEW**：查看视图
- **CREATE ROUTINE**：创建存储过程或函数
- **ALTER ROUTINE**：修改存储过程或函数
- **EXECUTE**：执行存储过程或函数
- **FILE**：加载服务器主机上的文件
- **CREATE USER**：创建用户
- **SUPER**：超级权限

### 4. GRANT语句分配权限的语法格式是什么？

答：GRANT语句分配权限的语法格式：

```sql
GRANT 权限类型 ON 数据库名.表名 TO '用户名'@'主机名';
```

例如：`GRANT SELECT, INSERT, UPDATE, DELETE ON student.* TO 'liming'@'%';` 授予用户liming对student数据库所有表的查询、插入、更新和删除权限。

### 5. 如何查看用户的权限？

答：使用SHOW GRANTS语句查看用户权限，语法格式：

```sql
SHOW GRANTS FOR '用户名'@'主机名';
```

例如：`SHOW GRANTS FOR 'liming'@'%';` 显示用户liming拥有的所有权限信息。

### 6. REVOKE语句收回权限的语法格式是什么？

答：REVOKE语句收回权限的语法格式：

```sql
REVOKE 权限列表 ON 数据库名.表名 FROM '用户名'@'主机名';
```

例如：`REVOKE DELETE ON student.* FROM 'liming'@'%';` 收回用户liming对student数据库所有表的DELETE权限。

### 7. 如何收回用户的所有权限？

答：使用REVOKE语句加上ALL PRIVILEGES关键字收回所有权限，语法格式：

```sql
REVOKE ALL PRIVILEGES, GRANT OPTION FROM '用户名'@'主机名';
```

例如：`REVOKE ALL PRIVILEGES, GRANT OPTION FROM 'liming'@'%';` 收回用户liming的所有权限。

### 8. 授权和收回权限后需要做什么？

答：在使用GRANT授权或REVOKE收回权限后，都必须使用 `FLUSH PRIVILEGES;` 语句重新加载权限表，否则无法立即生效。这是因为权限信息在MySQL启动时读入内存，直接修改权限表后需要刷新才能使更改生效。

### 9. 拥有GRANT权限的用户有什么特殊能力？

答：拥有GRANT权限的用户可以为其他用户设置权限。拥有REVOKE权限的用户可以收回自己设置的权限。GRANT OPTION权限允许用户将自己拥有的权限授予其他用户，这是一种高级权限，需要谨慎授予。

### 10. 如何授予用户对特定列的权限？

答：使用列层级的权限授予语法，在权限类型后面用括号指定列名：

```sql
GRANT SELECT(列1, 列2), INSERT(列1, 列2), UPDATE(列1, 列2) ON 数据库名.表名 TO '用户名'@'主机名';
```

例如：`GRANT SELECT(StuID, Stuname), UPDATE(Stuname) ON student.student TO 'user1'@'localhost';` 授予用户对student表中学号和姓名列的查询权限，以及对姓名列的更新权限。

### 11. 如何授予用户全局权限？

答：使用 `ON *.*` 语法授予全局权限，作用于所有数据库的所有表：

```sql
GRANT SELECT ON *.* TO '用户名'@'主机名';
```

例如：`GRANT SELECT ON *.* TO 'user4'@'localhost' IDENTIFIED BY '111222';` 创建user4用户并授予对所有数据库所有表的SELECT权限。
