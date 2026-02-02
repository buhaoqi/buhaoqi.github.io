---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务一 创建数据库  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务一 创建数据库  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 1  # 侧边栏中排在第1位
---

## 创建数据库的含义是什么
创建数据库就是在数据库系统中划分一块存储数据的空间，用于存储数据对象。

## 创建数据库的方法
常见创建数据库的方法有两种：

- 通过命令行客户端
- 通过图形化管理工具

## 创建数据库的语法

```sql
CREATE {DATABASE|SCHEMA} [IF NOT EXISTS] <数据库名>
    [DEFAULT] CHARACTER SET [=] <字符集名>
    [DEFAULT] COLLATE [=] <排序规则名>
```

## IF NOT EXISTS是什么

### 定义
1.  `IF NOT EXISTS`是`CREATE`语句的可选子句，直译是“如果不存在”。
2.  核心作用是“不存在才创建，存在则跳过且不报错”。
3.  核心使用场景是`CREATE DATABASE`和`CREATE TABLE`，能避免重复创建报错，提升脚本健壮性。
4.  仅支持创建语句，只判断对象是否存在，不判断结构是否一致，语法位置不可颠倒。
5.  与之相对的是 `IF EXISTS`（用于`DROP`系列语句，判断对象存在才删除）

### IF NOT EXISTS的优点
1.  **避免重复创建报错**：如果没有这个子句，重复创建已存在的数据库/表，MySQL会抛出明确错误（如创建数据库报`1007`，创建表报`1050`），中断操作；
2.  **提升语句健壮性**：在批量执行脚本（如项目部署、数据初始化）时，不会因为某个对象已存在而导致整个脚本中断，保证脚本顺利执行到底。

### 场景1：创建数据库时使用
#### 1. 语法格式
```sql
CREATE DATABASE IF NOT EXISTS 数据库名;
-- 带字符集的完整格式（推荐）
CREATE DATABASE IF NOT EXISTS 数据库名
DEFAULT CHARACTER SET utf8mb4
DEFAULT COLLATE utf8mb4_general_ci;
```

#### 示例1:对比（直观看到效果）
| 无`IF NOT EXISTS`（不推荐） | 有`IF NOT EXISTS`（推荐） |
|------------------------------|----------------------------|
| 语句：`CREATE DATABASE school_db;` | 语句：`CREATE DATABASE IF NOT EXISTS school_db;` |
| 第一次执行：成功创建`school_db` | 第一次执行：成功创建`school_db`（和左侧效果一致） |
| 第二次执行：抛出错误 `ERROR 1007 (HY000): Can't create database 'school_db'; database exists`，操作中断 | 第二次执行：不报错，仅返回提示 `Query OK, 1 row affected, 1 warning (0.00 sec)`，不中断后续操作 |

### 场景2：创建表时使用
这是你后续创建表的必备优化，避免重复创建表报错。

#### 1. 语法格式
```sql
CREATE TABLE IF NOT EXISTS 表名(
    字段1 数据类型 [约束],
    字段2 数据类型 [约束],
    ...
);
```

#### 2. 示例（以你之前的`Course`表为例）
```sql
-- 带IF NOT EXISTS的创建表语句（推荐）
CREATE TABLE IF NOT EXISTS course(
    Cno CHAR(5) PRIMARY KEY,
    Cname VARCHAR(40) NOT NULL,
    Ccredit SMALLINT,
    Cpno CHAR(5) REFERENCES course(Cno)
) DEFAULT CHARACTER SET utf8mb4;
```
### 场景 3：创建索引
创建索引时，也会用到`IF NOT EXISTS`，格式：
```sql
-- 给course表的Cname字段创建索引，避免重复创建
CREATE INDEX IF NOT EXISTS idx_course_cname ON course(Cname);
```
