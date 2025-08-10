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



在 **MySQL** 中，`SELECT` 语句是 **最核心、最常用** 的 SQL 语句，它用于从数据库表中 **查询（检索）数据**。

可以说：**学会 SELECT，你就学会了 MySQL 数据查询的基础！**

---

## 数据查询是什么

将数据存储在数据库中的最主要目的就是在需要数据的时候能方便有效的对数据进行查询检索、统计或组织输出。这种操作就是数据查询。


## SELECT语句的概念

> **SELECT 语句用于从数据库的一个或多个表中查询数据，并将结果以临时表格形式返回。**

简单说，SELECT语句用于根据指定条件对数据进行检索。你可以用它来：

- 查询表中的全部或部分字段
- 检索满足某些条件的记录
- 对查询结果排序、分组、限制数量
- 对数据进行计算、拼接、函数处理等

---

## SELECT 语句的基本语法

```sql
SELECT [ALL | DISTINCT] 输出列表达式1,输出列表达式2, ...
[FROM 表名]                          /*FROM子句*/
[WHERE 条件]                         /*WHERE子句*/
[GROUP BY 列名]                      /*GROUP BY子句*/
        [ASC | DESC]
[HAVING 群组后条件]                   /*HAVING子句*/
[ORDER BY 列名|表达式｜列编号 ]        /*ORDER BY子句*/
        [ASC|DESC]
[LIMIT 偏移量 行｜列数 OFFSET 偏移量];  /*LIMIT子句*/
```



---

## **知识体系总结图**
```
基础查询 → 多表关联 → 聚合群组 → 排序分页 → 组合查询
      │          │           │           │          │
      ↓          ↓           ↓           ↓          ↓
    SELECT     JOIN       GROUP BY    ORDER BY    UNION
    WHERE     Subquery    HAVING      LIMIT       UNION ALL
    DISTINCT            聚合函数                
```

## 语法说明

| 关键字 | 作用 | 是否必填 |
|--------|------|----------|
| `SELECT` | 指定要查询的列（字段） | ✅ 必须 |
| `FROM` | 指定数据来源的表 | ❌ 可选 |
| `WHERE` | 指定筛选条件，只返回符合条件的记录 | ❌ 可选 |
| `GROUP BY` | 按某个字段分组，常与聚合函数一起使用 | ❌ 可选 |
| `HAVING` | 对分组后的结果进行筛选（类似 WHERE，但用于 GROUP BY 后） | ❌ 可选 |
| `ORDER BY` | 对查询结果排序（升序/降序） | ❌ 可选 |
| `LIMIT` | 限制返回的记录条数 | ❌ 可选 |

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

---

## 示例表结构

我们以一个简单的表 `students` 为例：

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    gender VARCHAR(10),
    score DECIMAL(5,2)
);

INSERT INTO students (id, name, age, gender, score) VALUES
(1, '小明', 18, '男', 88.5),
(2, '小红', 19, '女', 92.0),
(3, '小刚', 18, '男', 76.5),
(4, '小丽', 20, '女', 85.0),
(5, '小华', 19, '男', 90.0);
```

---

## SELECT 语句的核心要点

| 功能 | 关键词 | 说明 |
|------|--------|------|
| 查询所有列 | `SELECT * FROM 表` | 查询全部字段 |
| 查询指定列 | `SELECT 列1, 列2 FROM 表` | 只查需要的列 |
| 条件筛选 | `WHERE 条件` | 如 `age > 18` |
| 排序 | `ORDER BY 列 [ASC|DESC]` | 升序或降序 |
| 限制条数 | `LIMIT 数量` | 如 `LIMIT 5` |
| 计算/表达式 | `SELECT 列 + 1, ...` | 支持运算与函数 |
| 别名 | `AS 别名` | 让列名或表名更易读 |
| 组合使用 | 多个子句组合 | 如 `WHERE + ORDER BY + LIMIT` |

---



---


😊 **掌握 SELECT，你就掌握了 MySQL 数据世界的大门！**
