---
noteId: "c37efd30333811f0ab03e5a28898bc4c"
tags: []

---
## SQL查询语句语法

```sql
SELECT [DISTINCT] 列名或表达式 [AS] 别名  -- SELECT子句
FROM 表名                               -- FROM子句
[WHERE 条件]                            -- WHERE子句
[GROUP BY 分组列]                        -- GROUP子句 
[HAVING 分组条件]                       -- HAVING子句
[ORDER BY 排序列 [ASC|DESC]]            -- ORDER子句
[LIMIT [偏移量,] 行数];                   -- LIMIT子句
```

## **用途**

指定要查询的列或表达式。是SQL中最核心的命令之一。

**语法**
```sql
SELECT [DISTINCT] 列名或表达式  [AS] 别名;
```
注意：SELECT子句必须是查询语句的第一个子句。

**可选修饰符**

- DISTINCT（去重）
- AS（别名）
- 聚合函数（如 SUM()、AVG()）

**用法1：选择所有列**
```sql
SELECT * FROM employees;
```
- 说明：返回`employees`表中所有列的数据。
- 注意：`*`会降低查询效率，建议明确指定所需列。

**用法2：选择特定列**
```sql
SELECT first_name, salary FROM employees;
```
- 说明：仅返回`first_name`和`salary`列的数据。

**用法3：选择表达式**
```sql
SELECT 1 + 1;
```

