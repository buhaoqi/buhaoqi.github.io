---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务二 用户管理  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务二 用户管理  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 2  # 侧边栏中排在第1位
---

## 考点

熟悉数据库的用户管理；

## 一、用户管理是什么

用户管理就是管理用户。主要包括：
- 创建用户
- 删除用户
- 密码管理

## 二、MySQL用户分类

- root用户：超级管理员，具备操作数据库的所有权限，是数据库系统内置的操作用户。
- 普通用户：只拥有部分权限

## 三、语法1：查看系统用户

语法
```sql
SELECT host,user,authentication_string FROM mysql.user;
```
或
```sql
use mysql;
SELECT host,user FROM user;
```
输出
```sql
+-------------+------------------+
| host        | user             |
+-------------+------------------+
| localhost   | mysql.infoschema | -- 非操作用户
| localhost   | mysql.session    | -- 非操作用户
| localhost   | mysql.sys        | -- 非操作用户
| localhost   | root             | -- 操作用户:具有操作数据库功能的用户
+-------------+------------------+
```
## 四、标识用户
MySQL中，通过`用户名@主机名`（而非仅用户名）标识唯一的用户，主机名用于限制用户的登录来源，常见取值：
- `'user'@'localhost'`：仅允许本地（数据库所在服务器）登录；
- `'user'@'192.168.1.100'`：仅允许指定IP登录；
- `'user'@'192.168.1.%'`：允许指定网段（192.168.1开头）登录；
- `'user'@'%'`：允许任意主机登录（生产环境慎用，风险较高）。

主机名含义：

- localhost：仅允许本地登录
- %： 允许任意主机登录
- IP地址：允许指定 IP 登录
- 192.168.1.%：允许指定网段登录

## 五、语法2：查看用户权限
语法
```sql
SHOW GRANTS FOR '用户名'@'主机名';
```
示例
```sql
SHOW GRANTS FOR 'root'@'localhost';
```
输出
```sql
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, 
DROP, RELOAD, SHUTDOWN, PROCESS, FILE, REFERENCES, 
INDEX, ALTER, SHOW DATABASES, SUPER, CREATE TEMPORARY TABLES,
LOCK TABLES, EXECUTE, REPLICATION SLAVE, REPLICATION CLIENT,
CREATE VIEW, SHOW VIEW, CREATE ROUTINE, ALTER ROUTINE, 
CREATE USER, EVENT, TRIGGER, CREATE TABLESPACE, CREATE ROLE, 
DROP ROLE ON *.* TO `root`@`localhost` WITH GRANT OPTION
```
## 六、语法3：创建用户

### 方法1：CREATE USER
```sql
CREATE USER 用户名@主机名 IDENTIFIED BY '密码'  -- 设置登录密码
```
示例:
```sql
-- 1. 创建一个用户
CREATE USER 'user1'@'localhost' IDENTIFIED BY '111111';

-- 2. 创建多个用户
CREATE USER 'user2'@'localhost' IDENTIFIED BY '222222','user3'@'%' IDENTIFIED BY '333333'; 

```
### 方法2：INSERT INTO
```sql
INSERT INTO mysql.user(host, user,authentication_string) 
VALUES ('主机名', '用户名',PASSWORD('密码'));
```
**示例**：
```sql
-- 1. 创建一个用户
INSERT INTO 
mysql.user(host, user, authentication_string) 
VALUES ('192.168.10.5', 'user4', PASSWORD('654321'));
```
创建完用户后，需刷新权限，用户才能登录。
```sql
FLUSH PRIVILEGES;
```

## 七、语法4：赋予用户权限

```sql
GRANT 权限类型 
ON 数据库名.表名 
TO 用户1 [IDENTIFIED BY [PASSWORD] '密码1'] [,
   用户2 [IDENTIFIED BY [PASSWORD] '密码2'] ];
```
**示例**
```sql
GRANT SELECT ON *.* TO 'user5'@'localhost' IDENTIFIED BY '555555';
```
## 八、语法5：修改用户名
**语法格式**：
```sql
RENAME USER '旧用户名'@'旧主机名' TO '新用户名'@'新主机名';
```
**示例**：
```sql
RENAME USER 'user1'@'localhost' TO 'liming'@'%', 'user2'@'localhost' TO 'wangwei'@'localhost';
```

## 九、语法6：修改用户密码
### **方法1：`mysqladmin`命令**

说明：`mysqladmin`命令是Windows命令行，需要退出 MySQL 后在命令行中运行。

语法格式：
```cmd
mysqladmin -u 用户名 [-h 主机名] -p password 新密码
```
说明：新密码须符合安全性要求

示例：
```cmd
mysqladmin -u root -p password root123
```
输出
```cmd
Enter password: 输入 root 用户的旧密码
```

### **方法2：`SET`语句**
语法格式：
```sql
SET PASSWORD [FOR '用户名'@'主机名']=PASSWORD('新密码'); -- PASSWORD()已被MySQL8.0废弃 
SET PASSWORD [FOR '用户名'@'主机名'] = '新密码'; -- 明文密码赋值即可
```
示例：修改`liming@%`密码为`ming123`
```sql
SET PASSWORD FOR 'liming'@'%' = PASSWORD('ming123'); -- PASSWORD()已被MySQL8.0废弃
SET PASSWORD FOR 'root'@'localhost' = 'Convert.ToInt32()';
```
### **方法3：`ALTER USER`语句**
语法格式：
```sql
ALTER USER '用户名'@'主机名' IDENTIFIED BY '新密码';
```
示例：修改`root@localhost`密码为`Convert.ToInt32()`
```sql
ALTER USER 'root'@'localhost' IDENTIFIED BY 'Convert.ToInt32()';
```
### 方法4：`UPDATE`语句
语法格式：
```sql
UPDATE mysql.user 
SET authentication_string = PASSWORD('新密码')  -- PASSWORD()已被MySQL8.0废弃
WHERE user = '用户名' and host = '主机名';
```

示例：修改`user3@%`密码为`user333`
```sql
UPDATE mysql.user
SET authentication_string = PASSWORD('user333') -- PASSWORD()已被MySQL8.0废弃
WHERE user = 'user3' and host = '%';
```
注意：执行后需用`FLUSH PRIVILEGES;`刷新权限。

## 十、语法7：删除用户
通过2种方法删除用户，需拥有全局`CREATE USER`或`DELETE`权限。

### 方法1. 使用`DROP USER`语句

删除用户
**语法格式**：
```sql
DROP USER '用户名1'@'主机名1' [, '用户名2'@'主机名2' [,...] ];
```
**示例**（例11-9）：删除`user4@localhost`和`user5@192.168.10.5`
```sql
DROP USER 'user4'@'localhost', 'user5'@'192.168.10.5';
```

### 方法2. 使用`DELETE`语句

删除`mysql.user`表记录
**语法格式**：
```sql
DELETE FROM mysql.user WHERE user = '用户名' and host = '主机名';
```
**示例**：删除`user3@%`
```sql
DELETE FROM mysql.user
WHERE user = 'user3' and host = '%';
```
注意：执行后需用`FLUSH PRIVILEGES;`刷新权限。

