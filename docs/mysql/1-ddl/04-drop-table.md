---
noteId: "9243c9e0481311f0a6929b02b627d898"
tags: []

---

## 语法

```sql
DROP TABLE 表1, 表2, 表3;
```


当你想删除表时，可以这样操作：

语法

```sql
DROP TABLE 表名;
```

示例: 

```sql
DROP TABLE student;
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