---
noteId: "78166040481911f0a6929b02b627d898"
tags: []

---

## 数据库的构成

在操作数据库之前，你首先要清楚数据库的构成：

- 数据结构：组织数据的方式
- 数据：就是记录。一个记录由多个项目构成，一个记录就是一条数据。

操作数据库，就是指操作数据结构和数据。

MySQL的数据结构：

- 数据库：由多个表组成。
- 表：多条记录构成了一个表。一个表包含多条记录。
- 列：包括字段和值。
- 记录：一条记录包括多个项目的值。

## 操作数据结构的关键词

1.创建数据结构：CREATE
2.修改数据结构：ALTER
3.删除数据结构：DROP
4.查询数据结构：SHOW



## 创建数据库表

数据库由多个表组成。表的形式如下：

| id   | 姓名(name) | 年龄(age) | 性别(gender) | 入学日期(the_date) |
| ---- | ---------- | --------- | ------------ | ------------------ |
| 1    | 张三       | 16        | 男           | 2024-09-01         |
| 2    | 李四       | 17        | 女           | 2024-09-01         |
| 3    | 王五       | 16        | 男           | 2024-08-31         |

创建表的过程就是定义列的过程。一个列由以下三部分构成：

```sql
列名1 数据类型 [约束条件],
列名2 数据类型 [约束条件]
```

说明：

- 列名：建议小写，不能以数字开头
- 数据类型：用来存储不同类型的数据。比如：字符串、整数、日期
- 约束条件：用来对存储的数据进行约束。比如：不能为空、必须唯一等

语法

```sql
CREATE TABLE 表名 (
	  列名1 数据类型 [约束条件],
    列名2 数据类型 [约束条件],
    列名3 数据类型 [约束条件]
);
```

示例

```sql
CREATE TABLE student(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    age INT,
    gender ENUM('男','女'),
    the_date DATE
);
```

说明

1. 说明：数据库名、表明、列名全部建议小写，并且不能以数字开头。
2. 所有的SQL语句不区分大小写，但建议大写。
3. SQL语句中出现的所有标点符号必须是英文输入法下的符号。如：圆括号`()`、逗号`,`、分号`;`
4. `INT`: 表示整数类型，用于创建整数存储。
5. `VARCHAR(20)`: 表示变长字符串类型，用于创建字符串存储。
6. `ENUM('男','女')` ：表示字符串值列表，用于创建字符串存储。
7. `DATE`: 表示日期类型，用于创建日期存储。
8. `PRIMARY KEY`:   主键，用于标识一行，具有唯一性。
9. `AUTO_INCREMENT` ：自动增长，约束整数类型自动递增，无需再手动输入。
10. `NOT NULL`：非空，不允许填写空值。

## 创建数据库基本语法

```sql
CREATE DATABASE 数据库名;
```
**数据库名命名规则**：

- 数据库名最长64个字符
- 可以包含字母、数字、下划线和$
- 区分大小写（取决于操作系统）

## 示例：创建数据库

创建一个名为"mydb"的数据库

```sql
-- 创建一个学生信息管理数据库student_db
CREATE DATABASE mydb;
```

说明：

1. 数据库名建议全部小写
2. 所有数据库名建议以“_db"结尾
3. `--`表示注释。注释用来说明语句的，不会被mysql解析。


## 完整语法

```sql
CREATE DATABASE [IF NOT EXISTS] database_name
[CHARACTER SET charset_name]
[COLLATE collation_name];
```

1. 必选部分
      - `CREATE DATABASE`：创建数据库的关键字
      - `database_name`：要创建的数据库名称（需遵循MySQL命名规则）

2. 可选部分
      - `IF NOT EXISTS`：条件判断，仅在数据库不存在时创建（避免报错）
      - `CHARACTER SET`：指定数据库字符集（如utf8mb4）字符集选择：
          - utf8mb4（推荐）：完整支持4字节Unicode字符（如emoji）
          - utf8：只支持3字节Unicode字符
      - `COLLATE`：指定排序规则（如utf8mb4_general_ci）


## 示例：带条件判断的创建

```sql
CREATE DATABASE IF NOT EXISTS mydb;
```
只有当"mydb"不存在时才会创建，避免重复创建报错


## 示例：指定字符集和排序规则
```sql
CREATE DATABASE mydb 
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
```
创建一个使用UTF-8MB4字符集和Unicode排序规则的数据库（推荐用于多语言支持）

## 选择数据库

创建数据库后，通常需要选择使用它：

```sql
USE mydb;
```

## 查看数据库的创建语句

包含字符集等信息

```sql
SHOW CREATE DATABASE mydb;
```

## 示例：创建数据库完整工作流

```sql
-- 1. 查看现有数据库
SHOW DATABASES;

-- 2. 创建新数据库（带完整选项）
CREATE DATABASE IF NOT EXISTS school_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- 3. 使用新创建的数据库
USE school_db;

-- 4. 验证数据库信息
SHOW CREATE DATABASE school_db;
```


## 练习1:强化训练

第一组：建库删库（敲三遍）

```sql
-- 查看数据库列表
SHOW DATABASES;
-- 创建数据库student_db
CREATE DATABASE student_db;
SHOW DATABASES;
-- 删除数据库student_db
DROP DATABASE student_db;
SHOW DATABASES;
```