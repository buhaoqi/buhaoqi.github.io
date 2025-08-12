---
noteId: "e289f580482411f0a6929b02b627d898"
tags: []

---

## 语法

```sql
DELETE [LOW_PRIORITY] [QUICK] [IGNORE] FROM 表名
[WHERE 条件] 
[ORDER BY ...] 
[LIMIT 行数];

-- 删除全部数据
DELETE FROM 表名;  -- 逐行删除，可回滚，不重置自增
TRUNCATE TABLE 表名;  -- 快速清空，不可回滚，重置自增

-- 删除指定数据
DELETE FROM 表名 WHERE 条件;
DELETE FROM users WHERE id = 1;
DELETE FROM users WHERE age < 18;
DELETE FROM users WHERE name='张三' AND age='18';
```

## 2.删除数据

删除数据库表中的数据记录有两种方法，一种使用`DELETE` ，另一种使用`TRUNCATE`。

**方法 1：使用 `TRUNCATE` 清空数据（推荐）**

适用场景：保留表结构，快速清空数据（自增主键会重置）。

语法

```sql
TRUNCATE TABLE 表名;  -- 快速清空，不可回滚，重置自增
```

示例

```sql
TRUNCATE TABLE students;   
```

**方法 2：使用 `DELETE` 删除数据**

适用场景：需要彻底清空表结构和数据（需提前备份表结构）。

语法

```sql
DELETE FROM 表名;  -- 逐行删除，可回滚，不重置自增
```

示例

```sql
DELETE FROM students;  
```


## 删：数据 (DELETE)

```sql
# 语法
DELETE [LOW_PRIORITY] [QUICK] [IGNORE] FROM 表名
[WHERE 条件] 
[ORDER BY ...] 
[LIMIT 行数];

-- 删除全部数据
DELETE FROM 表名;  -- 逐行删除，可回滚，不重置自增
TRUNCATE TABLE 表名;  -- 快速清空，不可回滚，重置自增

-- 删除指定数据
DELETE FROM 表名 WHERE 条件;
DELETE FROM users WHERE id = 1;
DELETE FROM users WHERE age < 18;
DELETE FROM users WHERE name='张三' AND age='18';
```