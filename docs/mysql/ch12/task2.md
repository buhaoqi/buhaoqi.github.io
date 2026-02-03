---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务二 使用MySQLDUMP备份  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务二 使用MySQLDUMP备份  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 2  # 侧边栏中排在第1位
---

## 一、MYSQLDUMP工具的核心概述
### 1. 基本定义
MYSQLDUMP是MySQL官方提供的**逻辑备份工具**，采用SQL级别的备份机制，将数据表导出为包含`CREATE`（建表）和`INSERT`（插入数据）语句的SQL脚本文件。

### 2. 关键特点
- **跨版本友好**：不同MySQL版本升级时使用该工具备份适配性较好，是最常用的备份方法。
- **执行方式**：在Windows控制台的命令行窗口中执行，文件存放在MySQL安装目录的`bin`文件夹下，**无需登录MySQL数据库即可直接运行**。
- **备份灵活性**：支持备份单个数据库、多个数据库、所有数据库，或数据库中的单个/多个表。

---

## 二、MYSQLDUMP常用选项
MYSQLDUMP提供了丰富的参数，可通过`MYSQLDUMP--help`查看完整列表，以下是核心常用选项：

| 选项 | 功能说明 |
|------|----------|
| `--all-databases` | 备份服务器上的**所有数据库**。 |
| `--databases dbname` | 备份指定的单个/多个数据库（多个库名用空格分隔）。 |
| `--lock-tables` | 锁定当前备份的表，保证备份一致性。 |
| `--lock-all-tables` | 锁定所有数据库的所有表。 |
| `--no-data` | 仅备份表结构（DDL语句），不备份数据。 |
| `--single-transaction` | 实现**热备份**（InnoDB引擎适用），备份时不锁表，保证事务一致性。 |
| `--routines` | 备份存储过程和存储函数。 |
| `--triggers` | 备份触发器。 |
| `--master-data=n` | 备份时导出二进制日志位置，`n=1`生成`CHANGE MASTER`语句，`n=2`生成注释掉的该语句（用于主从复制场景）。 |

---

## 三、核心备份场景与语法
### 1. 备份一个完整的数据库
```bash
MYSQLDUMP -u用户名 -h主机名 -p[密码] [--databases] 数据库名 > 备份文件名.sql
```
- **语法说明**：
  - `-p`后可直接写密码（无空格），或留空后续交互输入。
  - 若不加`--databases`参数，备份文件中不包含`CREATE DATABASE`语句，还原时需先手动创建目标数据库。
  - 若添加`--databases`，备份文件会包含创建数据库的语句，还原时可直接执行脚本。

### 2. 备份多个数据库
```bash
MYSQLDUMP -u用户名 -h主机名 -p[密码] --databases 数据库名1 数据库名2 … > 备份文件名.sql
```
- 需通过`--databases`指定多个库名，备份文件包含所有指定库的创建和数据插入语句。

### 3. 备份所有数据库
```bash
MYSQLDUMP -u用户名 -h主机名 -p[密码] --all-databases > 备份文件名.sql
```
- 备份文件包含所有数据库的`CREATE DATABASE`和`USE`语句，还原时无需提前创建数据库。

### 4. 备份数据库中的一个或多个表
```bash
MYSQLDUMP -u用户名 -h主机名 -p[密码] 数据库名 表名1 [表名2…] > 备份文件名.sql
```
- 直接指定“库名+表名”，仅备份目标表的结构和数据。

---

## 四、典型示例
### 示例1：备份单个库的指定表
备份`student`库的`Score`和`Course`表，保存到D盘根目录：
```bash
MYSQLDUMP -uroot -hlocalhost -p student Score Course > D:\stuDB_sql
```
- 备份文件包含两张表的`CREATE TABLE`和`INSERT`语句。

### 示例2：备份多个数据库
备份`student`和`book`两个库，保存到D盘根目录：
```bash
MYSQLDUMP -uroot -hlocalhost -p --databases student book > D:\db.sql
```
- 备份文件包含两个数据库的创建语句及所有表的结构和数据。

### 示例3：备份所有数据库
备份服务器上所有数据库，保存到D盘根目录：
```bash
MYSQLDUMP -uroot -hlocalhost -p --all-databases > D:\alldb.sql
```
- 备份文件包含所有数据库的完整创建和数据插入语句。

