---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务三 权限管理  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务三 权限管理  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 3  # 侧边栏中排在第1位
---

## 考点
掌握权限的授予、查看和回收

## 一、权限是什么
权限是指登录到 MySQL 服务器的用户能够对数据库对象执行哪种操作的规则集合。

- 所有用户权限都存储在 MySQL 数据库的 6 个权限表中
- MySQL 启动时，服务器将数据库中的各种权限信息读入到内存

## 二、权限分级

在MySQL数据库中，根据权限的范围，可以将权限分为多个层级。

1. 全局层级：使用`ON *.*`语法授予权限。
2. 数据库层级：使用`ON 数据库名.*`语法授予权限。
3. 表层级：使用`ON 数据库名.表名`语法授予权限。
4. 列层级：使用`SELECT（列1，列2，…）`、`INSERT（列1，列2，…）`和`UPDATE（列1，列2，…）`语法授予权限。
5. 存储过程、函数级：使用`EXECUTE ON PROCEDURE`或`EXECUTE ON FUNCTION`语法授予权限。

## 三、语法1：分配用户权限

```sql
GRANT 权限类型 ON 数据库名.表名 TO '用户名'@'主机名';
```
示例
```sql
GRANT select,create ON *.* TO 'zhangsan'@'localhost';
```
说明：`*.*`表示所有数据库中的所有数据表。

## 四、语法 2：查看用户权限

查看用户已获得的权限，支持查看「当前用户」或「指定用户」的权限。

语法：
```sql
-- 查看当前登录用户的权限
SHOW GRANTS;

-- 查看指定用户的权限
SHOW GRANTS FOR '用户名'@'主机名';
```

## 五、语法 3：收回用户权限

```sql
-- 收回指定用户的指定权限
REVOKE  权限列表 ON 数据库名.表名 FROM 用户名@主机名;
-- 收回指定用户的所有权限
REVOKE ALL PRIVILEGES, GRANT OPTION FROM 用户名@主机名;
```

示例

```sql
-- 收回指定用户的delete权限
REVOKE DELETE ON student.* FROM liming@%;
-- 收回指定用户的所有权限
REVOKE ALL PRIVILEGES, GRANT OPTION FROM liming@%;
```