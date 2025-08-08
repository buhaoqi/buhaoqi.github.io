---
noteId: "c0c6adf0481311f0a6929b02b627d898"
tags: []

---

```sql
-- 查询数据库中所有的表
SHOW TABLES FROM 数据库名;

-- 查询列（表结构）
SHOW COLUMNS FROM 表名;
 
```

```sql
-- 查询建库语句
SHOW CREATE DATABASE db_name;  

```


创建好表之后，如果你想查看表名或表结构，可以这样操作：

语法

```sql
-- 查看表名
SHOW TABLES;
-- 查看表结构
SHOW COLUMNS FROM 表名;
```

示例: 

```sql
-- 查看表名
SHOW TABLES;
-- 查看表结构
SHOW COLUMNS FROM student;
```
## 查：数据结构（SHOW）

```sql
-- 查询全部数据库
SHOW DATABASES;

-- 查询数据库中所有的表
SHOW TABLES FROM 数据库名;

-- 查询列（表结构）
SHOW COLUMNS FROM 表名;

-- 查询建库语句
SHOW CREATE DATABASE db_name;     
```