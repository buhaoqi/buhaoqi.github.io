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