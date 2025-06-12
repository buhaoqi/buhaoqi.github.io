---
noteId: "b80bc690333811f0ab03e5a28898bc4c"
tags: []

---

在 MySQL 中，`WHERE` 子句用于从表中筛选符合条件的记录，是 SQL 查询中最核心的过滤机制。以下是其用法详解及实用示例：

---

### **一、基本语法**
```sql
SELECT 列名
FROM 表名
WHERE 条件表达式;
```

---

### **二、核心功能与操作符**

#### **1. 比较运算符**
| 运算符       | 说明                  | 示例                                    |
|--------------|-----------------------|----------------------------------------|
| `=`          | 等于                  | `WHERE salary = 5000`                  |
| `<>` 或 `!=` | 不等于                | `WHERE department <> '行政部'`          |
| `>`          | 大于                  | `WHERE age > 30`                       |
| `<`          | 小于                  | `WHERE hire_date < '2020-01-01'`       |
| `>=`         | 大于等于              | `WHERE score >= 60`                    |
| `<=`         | 小于等于              | `WHERE price <= 100.00`                |

**示例**：
```sql
SELECT * FROM employees
WHERE salary > 8000 AND department = '技术部';
```

---

#### **2. 逻辑运算符**
| 运算符       | 说明                  | 示例                                    |
|--------------|-----------------------|----------------------------------------|
| `AND`        | 同时满足多个条件       | `WHERE age > 25 AND salary > 5000`     |
| `OR`         | 满足任意一个条件       | `WHERE department = '销售部' OR department = '市场部'` |
| `NOT`        | 否定条件               | `WHERE NOT country = '中国'`           |

**示例**：
```sql
SELECT * FROM products
WHERE price < 50 OR stock > 100;
```

---

#### **3. 特殊操作符**
| 操作符              | 说明                                  | 示例                                     |
|---------------------|-------------------------------------|-----------------------------------------|
| `BETWEEN ... AND ...` | 范围匹配（闭区间）                   | `WHERE age BETWEEN 20 AND 30`           |
| `IN (值列表)`        | 匹配列表中的任意值                   | `WHERE department IN ('技术部', '市场部')` |
| `LIKE`              | 模糊匹配（`%`匹配任意字符，`_`匹配单个字符） | `WHERE name LIKE '张%'`（姓张的名字）     |
| `IS NULL`           | 匹配空值                             | `WHERE email IS NULL`                   |

**示例**：
```sql
SELECT * FROM orders
WHERE order_date BETWEEN '2023-01-01' AND '2023-12-31'
  AND status IN ('已发货', '已完成');
```

---

### **三、高级用法**

#### **1. 子查询**
在 `WHERE` 子句中嵌套查询：
```sql
SELECT name FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

#### **2. EXISTS / NOT EXISTS**
检查子查询是否返回结果：
```sql
SELECT * FROM departments d
WHERE EXISTS (
  SELECT 1 FROM employees e 
  WHERE e.department_id = d.id
);
```

#### **3. 正则表达式（REGEXP）**
使用正则表达式匹配文本：
```sql
SELECT * FROM contacts
WHERE phone REGEXP '^1[3-9]\\d{9}$'; -- 匹配中国手机号
```

---

### **四、注意事项与最佳实践**

#### **1. NULL 值的处理**
- 使用 `IS NULL` 或 `IS NOT NULL`，而非 `= NULL`：
  ```sql
  SELECT * FROM users WHERE address IS NULL; -- 正确
  SELECT * FROM users WHERE address = NULL;  -- 错误（无法匹配）
  ```

#### **2. 性能优化**
- **索引生效条件**：
  - 避免对列进行函数操作：  
    ```sql
    -- 不推荐（索引可能失效）
    WHERE YEAR(hire_date) = 2023;
    
    -- 推荐（使用范围查询）
    WHERE hire_date BETWEEN '2023-01-01' AND '2023-12-31';
    ```
  - 避免在列上使用数学运算：  
    ```sql
    -- 不推荐
    WHERE salary * 1.1 > 10000;
    
    -- 推荐
    WHERE salary > 10000 / 1.1;
    ```

#### **3. 条件顺序**
- 将高选择性条件（过滤更多数据的条件）放在前面，减少计算量：
  ```sql
  -- 假设 department='技术部' 过滤掉90%的数据，age>30过滤10%
  SELECT * FROM employees
  WHERE department = '技术部' AND age > 30; -- 更高效
  ```

---

### **五、综合示例**
```sql
-- 查询2023年技术部工资高于平均薪资的员工
SELECT name, salary, department
FROM employees
WHERE department = '技术部'
  AND hire_date BETWEEN '2023-01-01' AND '2023-12-31'
  AND salary > (
    SELECT AVG(salary) 
    FROM employees 
    WHERE department = '技术部'
  )
ORDER BY salary DESC;
```

---

### **总结**
- `WHERE` 子句是 SQL 的过滤核心，支持多种操作符和复杂逻辑。
- 合理使用索引、避免全表扫描是优化关键。
- 注意 `NULL` 值的特殊处理及条件顺序对性能的影响。
