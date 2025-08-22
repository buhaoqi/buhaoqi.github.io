---
noteId: "266b9ef0483111f0a6929b02b627d898"
tags: []

---

# 数据备份

## 如何导出数据库

导出数据库，可以使用MySQL官方提供的数据库备份工具：mysqldump.exe

第一步：打开C盘，进入`mysqldump.exe`文件所在的bin目录：

```sql
"C:\Program Files\MySQL\MySQL Server 8.4\bin"
```

第二步：按住Shift键，在bin目录下的空白处单击右键选择“在此处打开命令行窗口”

第三步：输入备份数据库的语句

```sql
-- 语法
mysqldump -u 用户名 -p 数据库名 > 目标路径
-- 示例
mysqldump -u root -p student_db > D:\student_db_copy.sql
```

注意：执行备份语句后，需要输入密码

## 如何导入数据库

第一步：创建数据库

```sql
-- 语法
CREATE DATABASE 数据库名; 
-- 示例
CREATE DATABASE student_db;
```

第二步：声明使用数据库

```sql
-- 语法
USE 数据库名;
-- 示例
use student_db;
```

第三步：导入外部备份数据库文件

```sql
-- 语法
source 导入文件.sql;
--示例
source C:\Users\zjson\student_db_copy.sql
```


数据的导出与导入

## 1. mysqldump工具

是MySQL官方的数据备份工具。`mysqldump` 是一个独立的系统级命令行工具，需要在操作系统的终端或命令提示符中运行，而非在 MySQL 的交互式命令行环境（如 `mysql>`）中执行。如果希望在 MySQL 命令行环境中间接触发备份，可以使用 `system` 或 `\!` 命令调用操作系统的 shell（需客户端支持）。

## 2.导出数据库

导出数据库，可以使用MySQL官方提供的数据库备份工具：mysqldump.exe

第一步：打开C盘，进入`mysqldump.exe`文件所在的bin目录：

```sql
"C:\Program Files\MySQL\MySQL Server 8.4\bin"
```

第二步：按住Shift键，在bin目录下的空白处单击右键选择“在此处打开命令行窗口”

第三步：输入备份数据库的语句

```sql
-- 语法
mysqldump -u 用户名 -p 数据库名 > 目标路径
-- 示例
mysqldump -u 用户名 -p student_db > D:\student_db_copy.sql
```

注意：1. 执行备份语句后，需要输入密码

2. 如果遇到“拒绝访问”说明是权限问题，尝试把路径修改为`C:\Users\zjson\student_db_copy.sql`

## 3. 导入数据库

第一步：创建数据库

```sql
-- 语法
CREATE DATABASE 数据库名; 
-- 示例
CREATE DATABASE student_db;
```

第二步：声明使用数据库

```sql
-- 语法
USE 数据库名;
-- 示例
use student_db;
```

第三步：导入外部备份数据库文件

```sql
-- 语法
source 导入文件.sql;
--示例
source C:\Users\zjson\student_db_copy.sql
```