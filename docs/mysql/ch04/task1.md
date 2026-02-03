---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务一 创建数据库  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务一 创建数据库  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 1  # 侧边栏中排在第1位
---

## 考点
- 掌握数据库的创建、查看、选择、修改和删除等操作；
- 掌握数据库的建立命令：CREATE DATABASE；
- 掌握选择数据库的命令：USE db_name；
- 掌握查看数据库的命令：`SHOW { DATABASES|SCHEMAS}`；
- 掌握修改数据库的命令：`ALTER { DATABASES|SCHEMAS}`；
- 掌握删除数据库的命令：`DROP { DATABASES|SCHEMAS}`。

## 一、创建数据库的含义是什么
创建数据库就是在数据库系统中划分一块存储数据的空间，用于存储数据对象。

## 二、创建数据库的方法
常见创建数据库的方法有两种：

- 通过命令行客户端
- 通过图形化管理工具

## 三、创建数据库的语法

```sql
CREATE {DATABASE|SCHEMA} [IF NOT EXISTS] <数据库名>
[DEFAULT] CHARACTER SET [=] <字符集名>
[DEFAULT] COLLATE [=] <排序规则名>;
```

## 四、IF NOT EXISTS是什么

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

#### 2. 示例
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

## 五、数据库名
`<数据库名>`：指定要创建的数据库名称。需遵循以下规则：
- 合法字符：
    - 数字（0-9）(不可以以纯数字命名，数字放开头需加引号)
    - 字母（a-z, A-Z）
    - 下划线（_）
    - 美元符号（$）（不建议使用）
- 区分大小写
    - Windows：不区分大小写
    - Linux：区分大小写
- 不能使用关键字作为数据库名

## 六、字符集
字符集，即字符的编码规则。

### 1.常见字符集

| 字符集   | 单字符最大长度 | 说明                                                         |
|----------|---------------|--------------------------------------------------------------|
| ASCII    | 7 bit（位）   | 计算机发展早期西文编码，最多可表示128个西文字符。不支持汉字。  |
| Latin1   | 1字节         | 支持西欧字符、希腊字符等。                                    |
| gb2312   | 2字节         | 早期汉字编码标准。                                           |
| gbk      | 2字节         | 是gb2312的扩展，支持简体繁体中文、日文、韩文等。              |
| utf8     | 3字节         | 世界上大部分国家的文字。                                     |
| utf8mb4  | 4字节         | 不仅支持中文，还支持表情包、emoji表情。推荐使用  |
### 2.语法：查看支持的字符集
```sql
-- 查看所有可用字符集
SHOW CHARACTER SET;

-- 查看排序规则
SHOW COLLATION;

-- 查看特定字符集的排序规则
SHOW COLLATION LIKE 'utf8mb4%';
```

### 3.语法：指定字符集

```sql
-- 设置数据库默认字符集
CREATE DATABASE mydb 
  DEFAULT CHARACTER SET utf8mb4 
  COLLATE utf8mb4_unicode_ci;

-- 修改已有数据库
ALTER DATABASE mydb 
  CHARACTER SET utf8mb4 
  COLLATE utf8mb4_unicode_ci;

-- 设置表字符集
CREATE TABLE mytable (
  id INT PRIMARY KEY,
  name VARCHAR(100)
) DEFAULT CHARACTER SET utf8mb4 
  COLLATE utf8mb4_unicode_ci;
```
- `DEFAULT CHARACTER SET`：为创建的数据库指定字符集。
    - 以该数据库创建的表的字符集默认认为数据库的字符集；
    - 表中各字段的字符集也会默认为数据库的字符集；
    - 若仅指定字符集不指定校对规则，表示使用该字符集默认的校对规则。
- `DEFAULT COLLATE`：为创建的数据库指定校对规则。
    - 若仅指定校对规则不指定字符集，表示使用该校对规则对应的字符集。

## 七、校对规则（Collation）

### 1.定义
校对规则，即在同一个字符集内字符之间的比较规则。一个字符集可能有一个校对规则，也可能有多个校对规则。

### 2.查看校对规则
```sql
-- 查看所有校对规则
SHOW COLLATION;

-- 查看特定字符集的校对规则
SHOW COLLATION LIKE 'utf8mb4%';

-- 创建表时指定校对规则
CREATE TABLE users (
    id INT,
    name VARCHAR(100)
) CHARACTER SET utf8mb4 
  COLLATE utf8mb4_unicode_ci;

-- 查询时区分大小写
SELECT * FROM users WHERE name = 'John' COLLATE utf8mb4_bin;
```
### 3.校对规则名称的组成
校对集的名称由“_”分隔的 3 部分组成：
1. **开头**：对应的字符集
2. **中间**：国家名或 general
3. **结尾**：ci、cs 或 bin

其中：
- **_ci**：表示不区分大小写（case insensitive）
- **_cs**：表示区分大小写（case sensitive）  
- **_bin**：表示以二进制方式比较

例如，校对规则 "utf8_general_ci" 下，字符 "m" 和 "M" 是一样的。

### 4.常见校对规则示例：
- **utf8mb4_general_ci**：通用规则，不区分大小写
- **utf8mb4_unicode_ci**：基于Unicode标准，更准确的多语言排序
- **utf8mb4_bin**：二进制比较，区分大小写
- **utf8mb4_0900_ai_ci**：MySQL 8.0默认，基于Unicode 9.0标准

