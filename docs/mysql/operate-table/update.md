---
noteId: "b28c5980743011f0ac7f012540a4f7e6"
tags: []

---



## 改：数据（UPDATE）

```sql
# 语法
UPDATE [LOW_PRIORITY] [IGNORE] 表名
SET 字段1 = 值1, 字段2 = 值2, ...
[WHERE 条件]
[ORDER BY ...]
[LIMIT 行数];

-- 更新单条记录
UPDATE 表名 SET 字段1 = '新值' WHERE id = 1;

-- 更新多条记录
UPDATE 表名 SET price = price * 0.9 WHERE category = '电子产品';
```