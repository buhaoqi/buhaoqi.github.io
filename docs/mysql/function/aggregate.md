---
noteId: "681678d02eef11f0bd6a5936cc431f19"
tags: []

---

在 MySQL 中，**聚合函数（Aggregate Functions）** 是一种对一组值执行计算并返回单一汇总值的函数。它们通常用于统计、分组和数据分析场景，帮助用户快速获取数据的整体特征（如总和、平均值、最大值等）。

---

## **常见聚合函数**
以下是 MySQL 中最常用的聚合函数：

| 函数          | 作用                   | 示例                              |
|---------------|------------------------|-----------------------------------|
| `COUNT()`     | 统计行数               | `SELECT COUNT(*) FROM orders;`    |
| `SUM()`       | 计算数值列的总和       | `SELECT SUM(amount) FROM sales;`  |
| `AVG()`       | 计算数值列的平均值     | `SELECT AVG(salary) FROM staff;`  |
| `MAX()`       | 返回列中的最大值       | `SELECT MAX(price) FROM products;`|
| `MIN()`       | 返回列中的最小值       | `SELECT MIN(age) FROM users;`     |
| `GROUP_CONCAT()`| 将多行数据合并为字符串 | `SELECT GROUP_CONCAT(name) FROM students;` |

---

## **核心特点**
1. **输入多行，输出单值**  
   聚合函数将多行数据压缩为单一结果，例如：
   ```sql
   -- 计算员工表中的平均年龄
   SELECT AVG(age) FROM employees;
   ```

2. **常与 `GROUP BY` 结合使用**  
   按分组统计时，聚合函数为每个分组返回结果：
   ```sql
   -- 统计每个部门的平均薪资
   SELECT department, AVG(salary) 
   FROM employees 
   GROUP BY department;
   ```

3. **自动忽略 `NULL` 值（除 `COUNT(*)`）**  
   ```sql
   -- 统计非空邮箱数量
   SELECT COUNT(email) FROM users;  -- 忽略 NULL
   ```

---

## **使用场景示例**
### **场景 1：统计订单总金额**
```sql
SELECT SUM(total_price) AS total_revenue 
FROM orders 
WHERE order_date >= '2023-01-01';
```
**结果**：  
```
+---------------+
| total_revenue |
+---------------+
|   1250000.50  |
+---------------+
```

---

### **场景 2：查找最畅销商品**
```sql
SELECT product_id, COUNT(*) AS sales_count 
FROM order_details 
GROUP BY product_id 
ORDER BY sales_count DESC 
LIMIT 1;
```
**结果**：  
```
+------------+-------------+
| product_id | sales_count |
+------------+-------------+
|        101 |         892 |
+------------+-------------+
```

---

### **场景 3：计算学生成绩分布**
```sql
SELECT 
    AVG(score) AS avg_score,
    MAX(score) AS max_score,
    MIN(score) AS min_score 
FROM exam_results;
```
**结果**：  
```
+------------+-----------+-----------+
| avg_score  | max_score | min_score |
+------------+-----------+-----------+
|   78.5     |    99     |    42     |
+------------+-----------+-----------+
```

---

## **注意事项**
1. **与非聚合字段混用时必须分组**  
   ```sql
   -- 错误写法（department 是非聚合字段）
   SELECT department, AVG(salary) FROM employees;

   -- 正确写法
   SELECT department, AVG(salary) 
   FROM employees 
   GROUP BY department;
   ```

2. **`COUNT(*)` vs `COUNT(列名)`**  
   - `COUNT(*)`：统计所有行数（包括 `NULL`）。  
   - `COUNT(列名)`：统计该列非 `NULL` 的行数。

3. **`HAVING` 过滤分组结果**  
   ```sql
   -- 筛选平均薪资 > 10000 的部门
   SELECT department, AVG(salary) 
   FROM employees 
   GROUP BY department 
   HAVING AVG(salary) > 10000;
   ```

---

## **总结**
聚合函数是 SQL 数据分析的核心工具，用于快速汇总数据特征。结合 `GROUP BY` 和 `HAVING` 可实现复杂的分组统计逻辑，是报表生成、业务分析的基础技能。




## **1. `COUNT()` 的作用**
`COUNT()` 是一个 **聚合函数**，用于统计满足条件的行数。它可以：
- 统计表中所有行的数量。
- 统计某列非 `NULL` 值的数量。
- 结合 `DISTINCT` 统计唯一值的数量。

---

## **2. 基本语法**
```sql
SELECT COUNT(表达式) FROM 表名 [WHERE 条件];
```
- **表达式**：可以是 `*`、列名、`DISTINCT 列名` 或具体值（如 `1`）。

---

## **3. 常见用法及区别**

### **(1) `COUNT(*)`**
- **统计所有行的数量**，包括 `NULL` 行。
- **不关心列值**，即使所有列均为 `NULL`，也会被计数。
- **示例**：
  ```sql
  SELECT COUNT(*) FROM users;  -- 返回 users 表的总行数
  ```

### **(2) `COUNT(列名)`**
- **统计该列非 `NULL` 值的行数**。
- 如果列中有 `NULL`，则这些行会被忽略。
- **示例**：
  ```sql
  SELECT COUNT(email) FROM users;  -- 统计 email 列非空的行数
  ```

### **(3) `COUNT(1)` 或 `COUNT(0)`**
- 与 `COUNT(*)` 效果相同，直接统计行数，不依赖列值。
- 优化器可能将其简化为 `COUNT(*)`。
- **示例**：
  ```sql
  SELECT COUNT(1) FROM users;  -- 等价于 COUNT(*)
  ```

### **(4) `COUNT(DISTINCT 列名)`**
- **统计某列的唯一非 `NULL` 值的数量**。
- **示例**：
  ```sql
  SELECT COUNT(DISTINCT city) FROM users;  -- 统计不同城市的数量
  ```

---

## **4. 结合 `WHERE` 条件**
可以配合 `WHERE` 子句筛选特定行：
```sql
SELECT COUNT(*) FROM orders WHERE amount > 100;  -- 统计金额大于 100 的订单数
```

---

## **5. 与 `GROUP BY` 结合**
按分组统计行数：
```sql
SELECT department, COUNT(*) FROM employees 
GROUP BY department;  -- 统计每个部门的员工数量
```

---

## **6. 性能优化**
### **(1) InnoDB 引擎的 `COUNT(*)`**
- **InnoDB** 不会直接存储总行数，执行 `COUNT(*)` 时需要遍历索引（优先选择较小的二级索引）。
- 对超大表统计行数可能较慢，可考虑以下优化：
  - 使用近似值（如 `EXPLAIN` 的 `rows` 字段）。
  - 维护一个统计表（实时更新行数）。
  - 利用缓存（如 Redis 存储总行数）。

### **(2) 避免全表扫描**
- 对带条件的 `COUNT()`，确保查询条件列有索引：
  ```sql
  SELECT COUNT(*) FROM users WHERE status = 'active';  -- status 列需有索引
  ```

---

## **7. 常见问题**
### **(1) `COUNT(*)` vs `COUNT(列名)`**
- `COUNT(*)`：统计所有行，无论列值是否为 `NULL`。
- `COUNT(列名)`：仅统计该列非 `NULL` 的行。

### **(2) `COUNT(DISTINCT)` 的性能**
- 对大数据量的列，`COUNT(DISTINCT)` 可能较慢，需权衡精确性与效率。

---

## **8. 示例**
### **表结构（`employees`）**
| id | name   | department | salary | hire_date  |
|----|--------|------------|--------|------------|
| 1  | Alice  | Sales      | 5000   | 2020-01-01 |
| 2  | Bob    | HR         | NULL   | 2021-05-01 |
| 3  | Charlie| Sales      | 6000   | NULL       |

### **查询示例**
```sql
-- 统计总员工数（结果为 3）
SELECT COUNT(*) FROM employees;

-- 统计有工资记录的员工数（结果为 2，Bob 的 salary 为 NULL）
SELECT COUNT(salary) FROM employees;

-- 统计唯一部门数量（结果为 2：Sales 和 HR）
SELECT COUNT(DISTINCT department) FROM employees;

-- 按部门统计员工数
SELECT department, COUNT(*) 
FROM employees 
GROUP BY department;
```

---

## **总结**
`COUNT()` 是 MySQL 中最常用的聚合函数，核心要点：
- 根据需求选择 `COUNT(*)`、`COUNT(列名)` 或 `COUNT(DISTINCT)`。
- 注意 `NULL` 值的处理逻辑。
- 对大数据量场景需优化查询（索引、近似值、缓存）。