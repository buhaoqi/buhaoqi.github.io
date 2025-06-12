---
noteId: "b38972c0333811f0ab03e5a28898bc4c"
tags: []

---

以下是 MySQL 中 `HAVING` 子句的详细用法解析，结合其核心功能、使用场景及与 `WHERE` 子句的对比：

---

### **一、HAVING 子句的作用**
`HAVING` 子句用于 **对分组后的结果进行过滤**，通常与 `GROUP BY` 结合使用。  
它允许在分组后应用条件，主要针对聚合函数的结果进行筛选。

---

### **二、基本语法**
```sql
SELECT 列名, 聚合函数(列名)
FROM 表名
GROUP BY 分组列
HAVING 分组过滤条件;
```

---

### **三、核心使用场景**

#### **1. 过滤分组后的数据**
**示例**：统计各部门平均工资超过 8000 的部门  
```sql
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING avg_salary > 8000;
```

#### **2. 结合聚合函数使用**
**示例**：筛选订单数量超过 100 的客户  
```sql
SELECT customer_id, COUNT(order_id) AS order_count
FROM orders
GROUP BY customer_id
HAVING order_count > 100;
```

#### **3. 多条件组合筛选**
**示例**：筛选销售额超过 50000 且平均订单额大于 1000 的产品  
```sql
SELECT product_id, 
       SUM(amount) AS total_sales,
       AVG(amount) AS avg_order
FROM sales
GROUP BY product_id
HAVING total_sales > 50000 AND avg_order > 1000;
```

---

### **四、HAVING 与 WHERE 的对比**
| **特性**          | **WHERE**                          | **HAVING**                        |
|--------------------|------------------------------------|-----------------------------------|
| **执行顺序**       | 在分组前过滤数据                   | 在分组后过滤数据                   |
| **适用对象**       | 单行数据（原始数据）               | 分组后的聚合结果                   |
| **聚合函数**       | 不可直接使用聚合函数               | 必须使用聚合函数或分组列           |
| **性能影响**       | 高效（减少分组处理的数据量）       | 相对低效（需先分组再过滤）         |
| **索引利用**       | 可以利用索引优化                   | 通常无法利用索引                   |

---

### **五、常见错误与解决方法**

#### **错误 1：在 HAVING 中使用非聚合列**
```sql
-- 错误示例
SELECT department, AVG(salary)
FROM employees
GROUP BY department
HAVING salary > 5000;  -- salary 未在 GROUP BY 中，且未聚合
```
**修正**：  
```sql
-- 正确用法：过滤分组后的聚合结果
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING avg_salary > 5000;
```

#### **错误 2：混淆 WHERE 与 HAVING 的作用**
```sql
-- 错误示例：尝试在 WHERE 中使用聚合函数
SELECT department, AVG(salary)
FROM employees
WHERE AVG(salary) > 5000  -- 不允许
GROUP BY department;
```
**修正**：  
```sql
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING avg_salary > 5000;
```

---

### **六、最佳实践**

#### **1. 优先使用 WHERE 过滤原始数据**
```sql
-- 先过滤再分组（更高效）
SELECT department, AVG(salary) AS avg_salary
FROM employees
WHERE salary > 3000  -- 先筛选掉低薪员工
GROUP BY department
HAVING avg_salary > 8000;
```

#### **2. 明确别名或聚合表达式**
```sql
-- 推荐写法（清晰明确）
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 8000;  -- 直接使用聚合函数
```

#### **3. 结合 ORDER BY 排序结果**
```sql
SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department
HAVING employee_count > 10
ORDER BY employee_count DESC;
```

---

### **七、综合示例**
**场景**：统计 2023 年每个客户的订单总额，筛选出总额超过 10000 且订单数超过 5 的客户，按总额降序排列  
```sql
SELECT 
    customer_id,
    SUM(amount) AS total_amount,
    COUNT(order_id) AS order_count
FROM orders
WHERE order_date BETWEEN '2023-01-01' AND '2023-12-31'
GROUP BY customer_id
HAVING total_amount > 10000 AND order_count > 5
ORDER BY total_amount DESC;
```

---

### **八、总结**
- **`HAVING` 的核心作用**：对分组后的聚合结果进行过滤。  
- **与 `WHERE` 的协作**：先用 `WHERE` 减少原始数据量，再用 `HAVING` 过滤分组结果。  
- **适用场景**：涉及聚合函数（如 `SUM()`、`AVG()`、`COUNT()`）的条件筛选。  

通过合理使用 `HAVING`，可以高效实现复杂的分组数据筛选需求。