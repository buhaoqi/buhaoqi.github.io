---
title: 任务二 用户管理
description: 数据库原理与应用技术《MySQL》项目十一 数据库安全 任务二 用户管理知识点总结。涵盖查看用户、创建用户（CREATE USER/GRANT/INSERT三种方法）、修改用户（RENAME USER重命名/修改密码三种方式）、删除用户（DROP USER/DELETE）等核心知识点。
keywords: [MySQL, 用户管理, CREATE USER, GRANT, INSERT, RENAME USER, DROP USER, mysqladmin, SET PASSWORD, FLUSH PRIVILEGES, mysql.user表, 对口升学]
sidebar_label: 任务二 用户管理
sidebar_position: 2
slug: /mysql/proj11/task2-user-management
tags: [MySQL, 项目十一, 任务二, 对口升学]
---

## 知识点

### 1. MySQL用户分为哪两类？

答：MySQL用户分为root用户和普通用户：
- **root用户**：超级管理员，具备操作MySQL数据库的所有权限
- **普通用户**：只拥有部分被赋予的权限

在MySQL数据库中，只有一个root用户无法管理众多数据，因此需要创建多个普通用户来管理不同类型的数据。

### 2. 如何查看MySQL服务器中的用户？

答：通过SELECT语句查看mysql.user表，查看当前MySQL服务器中有哪些用户：

```sql
SELECT host, user, authentication_string FROM mysql.user;
```

MySQL中所有用户的信息都保存在mysql.user表中。host值为"localhost"表示允许从本机登录，host值为"%"表示允许从任意主机登录。

### 3. 创建用户有哪几种方法？

答：创建用户有三种方法：
1. 使用 **CREATE USER** 语句创建新用户（推荐）
2. 使用 **GRANT** 语句创建新用户（创建同时授权）
3. 使用 **INSERT** 语句直接向mysql.user表插入记录

不推荐使用INSERT直接操作user表，建议采用CREATE USER和GRANT语句创建用户。

### 4. CREATE USER语句的语法格式是什么？

答：CREATE USER语句的语法格式：

```sql
CREATE USER '用户名1'@'主机名1' [IDENTIFIED BY [PASSWORD] '密码1']
[, '用户名2'@'主机名2' [IDENTIFIED BY [PASSWORD] '密码2']][, ...];
```

参数说明：
- 主机名可以省略，省略时默认为"%"，表示对所有主机开放权限
- IDENTIFIED BY用来设置用户密码，可以省略
- PASSWORD表示密码存储时是加密过的
- 可以同时创建多个用户
- 新用户可以没有初始密码（但不推荐空密码）
- 必须拥有CREATE USER权限才能执行

例如：`CREATE USER 'user1'@'localhost' IDENTIFIED BY '123456';`

### 5. 使用GRANT语句创建用户的语法格式是什么？

答：GRANT语句在创建用户的同时还可以为用户授权，语法格式：

```sql
GRANT 权限类型 ON 数据库名.表名
TO 用户1 [IDENTIFIED BY [PASSWORD] '密码1']
[, 用户2 [IDENTIFIED BY [PASSWORD] '密码2']];
```

例如：`GRANT SELECT ON *.* TO 'user4'@'localhost' IDENTIFIED BY '111222';` 创建user4用户并授予对所有数据库所有表的SELECT权限。必须拥有GRANT权限才能执行。

### 6. 使用INSERT语句创建用户需要注意什么？

答：使用INSERT语句直接向mysql.user表插入记录来创建用户，语法格式：

```sql
INSERT INTO mysql.user(host, user, authentication_string, ssl_type, ssl_cipher, x509_issuer, x509_subject)
VALUES ('hostname', 'username', PASSWORD('密码'), '', '', '', '');
```

注意事项：
- ssl_type、ssl_cipher、x509_issuer、x509_subject这4个字段不允许为空且没有默认值，必须设置为空字符串
- 使用PASSWORD()函数对明文密码进行哈希运算
- **创建后不能立即登录**，必须执行 `FLUSH PRIVILEGES;` 重新加载权限才能生效

### 7. FLUSH PRIVILEGES语句的作用是什么？

答：`FLUSH PRIVILEGES;` 语句用于从MySQL数据库中的user表中重新加载权限，使新添加或修改的用户信息立即生效。执行该命令需要RELOAD权限。使用INSERT或UPDATE语句直接修改mysql.user表后，必须执行FLUSH PRIVILEGES才能使更改生效。

### 8. 如何修改用户名称？

答：使用RENAME USER语句修改用户名称，语法格式：

```sql
RENAME USER '旧用户名'@'旧主机名' TO '新用户名'@'新主机名';
```

可以同时修改多个用户名称，用逗号分隔。例如：

```sql
RENAME USER 'user1'@'localhost' TO 'liming'@'%',
'user2'@'localhost' TO 'wangwei'@'localhost';
```

### 9. 修改用户密码有哪几种方法？

答：修改用户密码有三种方法：
1. 使用 **mysqladmin命令**：`mysqladmin -u 用户名 [-h 主机名] -p password 新密码`
2. 使用 **SET语句**：`SET PASSWORD [FOR '用户名'@'主机名'] = PASSWORD('密码');`
3. 使用 **UPDATE语句**：直接修改mysql.user表中的authentication_string字段

### 10. mysqladmin命令修改密码的语法和特点是什么？

答：mysqladmin是MySQL服务器的管理工具，在操作系统命令行下运行，语法格式：

```
mysqladmin -u 用户名 [-h 主机名] -p password 新密码
```

参数说明：-u指定用户名，-h指定主机名（默认localhost），-p提示输入旧密码。执行后会提示输入旧密码，验证通过后修改为新密码。

### 11. SET语句修改密码的语法和注意事项是什么？

答：SET语句修改密码的语法格式：

```sql
SET PASSWORD [FOR '用户名'@'主机名'] = PASSWORD('密码');
```

注意事项：
- 由于SET语句没有对密码加密的功能，必须使用PASSWORD()函数对明文密码进行哈希运算
- 只有root用户才可以设置或修改当前用户或其他特定用户的密码
- 例如：`SET PASSWORD FOR 'liming'@'%' = PASSWORD('ming123');`

### 12. UPDATE语句修改密码后需要注意什么？

答：使用UPDATE语句直接修改mysql.user表中的authentication_string字段来修改密码：

```sql
UPDATE mysql.user
SET authentication_string = PASSWORD('新密码')
WHERE user = '用户名' AND host = '主机名';
```

由于UPDATE语句不能刷新权限表，因此**必须执行 `FLUSH PRIVILEGES;` 语句重新加载用户权限**，修改后的密码才会生效。

### 13. 删除用户有哪几种方法？

答：删除用户有两种方法：
1. 使用 **DROP USER** 语句：`DROP USER '用户名'@'主机名' [, ...];`
2. 使用 **DELETE** 语句：直接从mysql.user表中删除记录

例如：`DROP USER 'user4'@'localhost', 'user5'@'192.168.10.5';` 同时删除两个用户。

### 14. DROP USER和DELETE删除用户有什么区别？

答：
- **DROP USER**：MySQL提供的标准语句删除用户，删除后自动刷新权限，推荐使用。必须拥有CREATE USER权限或DELETE权限
- **DELETE**：直接从mysql.user表中删除记录，删除后**必须执行 `FLUSH PRIVILEGES;`** 重新加载权限才能生效。语法：`DELETE FROM mysql.user WHERE user = '用户名' AND host = '主机名';`

### 15. 用户管理操作中对权限有什么要求？

答：用户管理操作需要相应的权限：
- **创建用户**：必须拥有CREATE USER权限或INSERT权限
- **使用GRANT创建用户**：必须拥有GRANT权限
- **修改用户名称**：需要相应的管理权限
- **修改密码**：SET PASSWORD只有root用户可以执行
- **删除用户**：必须拥有CREATE USER权限或DELETE权限
- **FLUSH PRIVILEGES**：需要RELOAD权限
