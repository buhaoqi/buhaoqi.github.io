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