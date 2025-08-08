---
noteId: "fe90fcf0482511f0a6929b02b627d898"
tags: []

---

## SELECT语句的概念

SELECT语句是查询语句。SELECT语句用于根据指定条件对数据进行检索。

## SELECT语句的语法

语法结构

```sql
SELECT [DISTINCT] 列名1, 列名2, ...
FROM 表名
[WHERE 条件]
[GROUP BY 分组列]
[HAVING 分组条件]
[ORDER BY 排序列 [ASC|DESC]]
[LIMIT [偏移量,] 行数];
```
解析：

1. **`SELECT` 是核心查询语句（Statement）**  
2. `SELECT...FROM...WHERE...` 构成一个基本的 **SELECT 语句结构**
3. **`FROM`/`WHERE`/`GROUP BY` 等是子句（Clause）**  它们是构成 SELECT 语句的 **组成部分**，每个子句有特定功能：
     - `FROM`：指定数据来源的表
     - `WHERE`：过滤行数据
     - `GROUP BY`：分组聚合
     - 等等...
4. **类比理解**  
   ```sql
   SELECT 列名        -- 相当于"要显示什么"
   FROM 表名          -- 相当于"从哪取数据"
   WHERE 条件         -- 相当于"筛选哪些行"
   ```
6. 注意：**`DISTINCT` 是关键字（Keyword）**，不是子句，它修饰 SELECT 的行为。 
7. **SELECT语句的执行顺序**与书写顺序不同：
  
```sql
FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT
```

## 简单查询

简单查询就是基于简单条件进行数据检索的过程。不涉及复杂的逻辑判断。

### 全部查询

定义：查询全部指从数据表中检索所有字段的所有记录。

语法

```sql
-- 查询所有字段
SELECT * FROM 表名;
```

说明

- `*`表示所有字段
- 表名：要查询的数据表的名称。

示例

```sql

```

### 字段查询

定义：字段全部指从数据表中查询特定的字段的全部记录。

语法

```sql
-- 查询所有字段
SELECT 字段1, 字段2 FROM 表名;
```

说明

- 多个字段使用英文逗号分隔
- 表名：要查询的数据表的名称。

示例

```sql

```




## 复杂查询


### 条件查询
-- 条件查询
SELECT * FROM 表名 WHERE 条件; 
-- 查询年龄大于21岁的学生（比较运算符）
SELECT name, age FROM students WHERE age > 21;  
-- 查询部门为'Sales'且薪资≥5000的员工（逻辑运算符）
SELECT * FROM employees 

### 逻辑查询

WHERE department = 'Sales' AND salary >= 5000;

### 范围查询


### 匹配查询

### 检测查询

### 空值查询

