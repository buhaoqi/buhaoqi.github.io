---
noteId: "fe90fcf0482511f0a6929b02b627d898"
tags: []

---


```sql
# 语法
SELECT [DISTINCT] 列1, 列2, ...
FROM 表名
[WHERE 条件]
[ORDER BY 列 [ASC|DESC]]
[LIMIT 行数];

-- 查询所有字段
SELECT * FROM 表名;

-- 查询指定字段
SELECT 字段1, 字段2 FROM 表名;

-- 条件查询
SELECT * FROM 表名 WHERE 条件; 
-- 查询年龄大于21岁的学生（比较运算符）
SELECT name, age FROM students WHERE age > 21;  
-- 查询部门为'Sales'且薪资≥5000的员工（逻辑运算符）
SELECT * FROM employees 
WHERE department = 'Sales' AND salary >= 5000;

-- 查询排序（ASC升序/DESC降序）
SELECT * FROM 表名 ORDER BY 字段1 DESC;

-- 分页查询
SELECT * FROM 表名 LIMIT 10 OFFSET 20;  -- 返回第21-30条记录

-- 查询当前数据库名
SELECT DATABASE();
```