---
noteId: "5cf41a30752011f082d9bbd061b73fc2"
tags: []

---

# MySQL 中的 DQL（数据查询语言）详解

DQL（Data Query Language，数据查询语言）是 SQL 的一个子集，专门用于从数据库中查询数据而不修改数据。在 MySQL 中，DQL 的核心是 `SELECT` 语句。以下是 DQL 的全面介绍：

## 一、DQL 基础结构

基本语法格式：
```sql
-- 这是一个完整的 SELECT 语句
SELECT [DISTINCT] 列名或表达式   --SELECT子句
[FROM 表名]                     --FROM子句
[WHERE 条件]                    --WHERE子句
[GROUP BY 分组列 [ASC|DESC]]    --GROUP BY子句
[HAVING 分组条件]                --HAVING子句
[ORDER BY 排序列 [ASC|DESC]]    --ORDER BY子句
[LIMIT [偏移量,] 行数];          --LIMIT子句
```
⚠️ 注意

> 1. 方括号 `[ ]` 表示这部分是**可选的**，不是必须的。
> 2. 所有子句必须按语法说明的顺序严格排序，例如HAVING子句必须位于GROUP BY子句后，ORDER BY子句前

## 二、DQL 核心组成部分

### 1. 选择列（SELECT 子句）

```sql
-- 选择特定列
SELECT id, name, price FROM products;

-- 使用通配符选择所有列
SELECT * FROM employees;

-- 使用表达式
SELECT name, price*0.9 AS discounted_price FROM products;

-- 使用函数
SELECT UPPER(name), LENGTH(description) FROM items;

-- 使用 DISTINCT 去重
SELECT DISTINCT department_id FROM employees;
```

### 2. 数据源（FROM 子句）

```sql
-- 单表查询
SELECT * FROM customers;

-- 多表连接
SELECT o.order_id, c.customer_name
FROM orders o JOIN customers c ON o.customer_id = c.id;

-- 子查询作为数据源
SELECT * FROM (SELECT id, name FROM products WHERE price > 100) AS expensive_products;
```

### 3. 条件过滤（WHERE 子句）

```sql
-- 基本比较
SELECT * FROM products WHERE price > 50;

-- 逻辑运算
SELECT * FROM employees WHERE salary > 5000 AND department = 'IT';

-- 模糊匹配
SELECT * FROM customers WHERE name LIKE 'J%';

-- IN 操作符
SELECT * FROM orders WHERE status IN ('shipped', 'completed');

-- BETWEEN
SELECT * FROM products WHERE price BETWEEN 10 AND 100;

-- NULL 检查
SELECT * FROM employees WHERE manager_id IS NULL;
```

### 4. 分组聚合（GROUP BY 和 HAVING）

```sql
-- 基本分组
SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department;

-- 多列分组
SELECT department, gender, AVG(salary) AS avg_salary
FROM employees
GROUP BY department, gender;

-- 分组后过滤
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 5000;
```

### 5. 结果排序（ORDER BY）

```sql
-- 单列排序
SELECT * FROM products ORDER BY price DESC;

-- 多列排序
SELECT * FROM employees
ORDER BY department ASC, salary DESC;

-- 使用表达式排序
SELECT *, (score1 + score2) AS total_score
FROM students
ORDER BY total_score DESC;
```

### 6. 结果限制（LIMIT）

```sql
-- 限制返回行数
SELECT * FROM logs LIMIT 10;

-- 分页查询
SELECT * FROM products LIMIT 20, 10;  -- 跳过20行，取10行
```

## 三、DQL 高级特性

### 1. 多表连接查询

```sql
-- 内连接
SELECT e.name, d.department_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.id;

-- 左外连接
SELECT c.name, o.order_date
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id;

-- 自连接
SELECT e1.name AS employee, e2.name AS manager
FROM employees e1
LEFT JOIN employees e2 ON e1.manager_id = e2.id;
```

### 2. 子查询

```sql
-- WHERE 子句中的子查询
SELECT * FROM products
WHERE price > (SELECT AVG(price) FROM products);

-- FROM 子句中的子查询
SELECT dept.name, emp_count.count
FROM departments dept
JOIN (SELECT department_id, COUNT(*) AS count 
      FROM employees 
      GROUP BY department_id) emp_count
ON dept.id = emp_count.department_id;

-- SELECT 子句中的子查询
SELECT name, 
       (SELECT COUNT(*) FROM orders WHERE customer_id = c.id) AS order_count
FROM customers c;
```

### 3. 集合操作

```sql
-- 并集（UNION，自动去重）
SELECT product_id FROM current_products
UNION
SELECT product_id FROM discontinued_products;

-- 并集（UNION ALL，保留重复）
SELECT name FROM employees
UNION ALL
SELECT name FROM contractors;

-- MySQL 8.0+ 支持的 INTERSECT 和 EXCEPT
-- (注意：MySQL 5.7及以下版本不支持)
```

### 4. 窗口函数（MySQL 8.0+）

```sql
-- 排名函数
SELECT name, salary,
       RANK() OVER (ORDER BY salary DESC) AS salary_rank
FROM employees;

-- 分区计算
SELECT department, name, salary,
       AVG(salary) OVER (PARTITION BY department) AS dept_avg_salary
FROM employees;
```

## 四、DQL 性能优化建议

1. **只查询需要的列**：避免 `SELECT *`
2. **合理使用索引**：确保 WHERE、JOIN、ORDER BY 涉及的列有索引
3. **限制结果集大小**：使用 LIMIT 分页
4. **避免全表扫描**：对大表使用适当的 WHERE 条件
5. **使用 EXPLAIN 分析**：理解查询执行计划
   ```sql
   EXPLAIN SELECT * FROM orders WHERE customer_id = 100;
   ```
6. **注意 JOIN 性能**：限制 JOIN 的表数量和结果集大小

## 五、DQL 执行顺序

理解 DQL 的逻辑执行顺序有助于编写高效查询：

1. FROM 子句（包括 JOIN）
2. WHERE 子句
3. GROUP BY 子句
4. HAVING 子句
5. SELECT 子句（包括窗口函数）
6. ORDER BY 子句
7. LIMIT 子句

DQL 是 MySQL 中最常用的语言，掌握其各种用法对于数据库查询和数据分析至关重要。

## 推荐学习路径

| 阶段 | 学习内容 |
|------|----------|
| 初级 | `SELECT * FROM 表`、查询指定列、WHERE 条件、ORDER BY、LIMIT |
| 中级 | 计算字段、别名、聚合函数（COUNT, AVG...）、GROUP BY |
| 高级 | 多表查询（JOIN）、子查询、UNION、索引优化等 |