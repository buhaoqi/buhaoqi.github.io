---
noteId: "bf3c0da0338b11f08c28b53ca771472d"
tags: []

---


#### **使用别名（AS）**
```sql
SELECT first_name AS '姓名', salary * 12 AS '年薪' FROM employees;
```
- **说明**：为列名或计算字段指定别名，增强可读性。

---

### **2. 条件过滤（WHERE）**
```sql
SELECT * FROM employees 
WHERE department = '技术部' AND salary > 8000;
```
- **运算符**：
  - 比较：`=`, `<>`, `>`, `<`, `>=`, `<=`
  - 逻辑：`AND`, `OR`, `NOT`
  - 范围：`BETWEEN`, `IN`
  - 模糊匹配：`LIKE`（`%`匹配任意字符，`_`匹配单个字符）
- **示例**：
  ```sql
  SELECT * FROM products 
  WHERE price BETWEEN 50 AND 100 
     OR product_name LIKE '%手机%';
  ```

---

### **3. 排序（ORDER BY）**
```sql
SELECT name, hire_date FROM employees
ORDER BY hire_date DESC, name ASC;
```
- **说明**：按`hire_date`降序排列，相同日期按`name`升序排列。
- **默认排序**：`ASC`（升序）。

---

### **4. 限制结果集（LIMIT）**
```sql
SELECT * FROM orders 
LIMIT 10 OFFSET 20; -- 跳过前20条，取10条（即第21-30条）
```
- **简写**：`LIMIT 20, 10`（等效于`LIMIT 10 OFFSET 20`）。

---

### **5. 聚合函数与分组（GROUP BY）**
#### **常用聚合函数**
| 函数       | 说明                |
|------------|---------------------|
| `COUNT()`  | 统计行数            |
| `SUM()`    | 求和                |
| `AVG()`    | 平均值              |
| `MAX()`    | 最大值              |
| `MIN()`    | 最小值              |

#### **示例**
```sql
SELECT department, COUNT(*) AS '人数', AVG(salary) AS '平均薪资'
FROM employees
GROUP BY department
HAVING AVG(salary) > 5000;
```
- **说明**：按部门分组，筛选平均薪资超过5000的部门。
- **HAVING vs WHERE**：
  - `WHERE`：过滤原始数据（分组前）。
  - `HAVING`：过滤分组后的数据（分组后）。

---

### **6. 多表连接（JOIN）**
#### **连接类型**
| 类型                | 说明                                     |
|---------------------|------------------------------------------|
| `INNER JOIN`        | 返回两个表匹配的行（交集）               |
| `LEFT JOIN`         | 返回左表所有行 + 右表匹配的行            |
| `RIGHT JOIN`        | 返回右表所有行 + 左表匹配的行            |
| `FULL OUTER JOIN`   | 返回所有行（MySQL需用`UNION`模拟）       |

#### **示例**
```sql
SELECT e.name, d.department_name
FROM employees e
INNER JOIN departments d 
    ON e.department_id = d.id;
```

---

### **7. 子查询**
#### **嵌套在WHERE中**
```sql
SELECT name FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```
- **说明**：选出薪资高于平均值的员工。

#### **嵌套在FROM中**
```sql
SELECT dept, avg_salary 
FROM (SELECT department AS dept, AVG(salary) AS avg_salary
      FROM employees
      GROUP BY department) AS temp
WHERE avg_salary > 7000;
```

---

### **8. 去重（DISTINCT）**
```sql
SELECT DISTINCT department FROM employees;
```
- **说明**：列出所有不重复的部门名称。

---

### **9. 联合查询（UNION）**
```sql
SELECT name FROM employees
UNION
SELECT name FROM contractors;
```
- **UNION ALL**：保留重复记录。
- **UNION**：自动去重。

---

### **10. 使用函数处理数据**
#### **字符串函数**
```sql
SELECT CONCAT(first_name, ' ', last_name) AS full_name 
FROM employees;
```

#### **日期函数**
```sql
SELECT name, DATE_FORMAT(hire_date, '%Y-%m') AS hire_month 
FROM employees;
```

#### **数值函数**
```sql
SELECT product, ROUND(price * 0.9, 2) AS discounted_price 
FROM products;
```

---

### **性能优化建议**
1. **避免`SELECT *`**：明确指定所需列。
2. **索引优化**：为`WHERE`、`JOIN`、`ORDER BY`涉及的列创建索引。
3. **分页优化**：使用`WHERE id > 1000 LIMIT 10`替代`LIMIT 1000,10`。
4. **分析执行计划**：使用`EXPLAIN`查看查询优化路径。
   ```sql
   EXPLAIN SELECT * FROM employees WHERE department = '技术部';
   ```

---

通过灵活组合这些子句和功能，可以高效地从MySQL数据库中提取所需数据。建议通过实际案例练习以加深理解。