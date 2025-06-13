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


### **MySQL 中 `GROUP BY` 分组的用法详解**

`GROUP BY` 是 SQL 中用于对查询结果按指定列分组的核心语句，通常与聚合函数（如 `COUNT`、`SUM`、`AVG` 等）结合使用，实现数据的分组统计和分析。以下是其用法详解：

---

#### **一、基础语法**

```sql
SELECT 列1, 列2, 聚合函数(列3)
FROM 表名
WHERE 过滤条件
GROUP BY 列1, 列2
HAVING 分组后过滤条件
ORDER BY 排序字段;
```

---

#### **二、核心作用**
1. **数据分组**  
   将表中数据按指定列的值分组，相同值的行归为一组。
2. **分组统计**  
   对每组数据应用聚合函数，计算汇总值（如总和、平均值、最大值等）。

---

#### **三、典型应用场景**
##### **1. 单列分组**
统计每个部门的员工数量：

```sql
SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department;
```
**结果示例**：

| department | employee_count |
|------------|----------------|
| 财务部     | 8              |
| 开发部     | 12             |
| 市场部     | 10             |

---

##### **2. 多列分组**
统计每个部门中不同职位的员工数量：

```sql
SELECT department, job, COUNT(*) AS count
FROM employees
GROUP BY department, job;
```
**结果示例**：

| department | job       | count |
|------------|-----------|-------|
| 开发部     | Java开发  | 5     |
| 开发部     | 前端开发  | 3     |
| 市场部     | 市场策划  | 4     |

---

##### **3. 结合聚合函数**
计算每个部门的平均薪资和最高薪资：

```sql
SELECT 
    department,
    ROUND(AVG(salary), 2) AS avg_salary,
    MAX(salary) AS max_salary
FROM employees
GROUP BY department;
```
**结果示例**：

| department | avg_salary | max_salary |
|------------|------------|------------|
| 财务部     | 8500.00    | 12000.00   |
| 开发部     | 14500.00   | 20000.00   |

---

##### **4. 分组后过滤（HAVING）**
筛选员工数量超过 5 人的部门：

```sql
SELECT department, COUNT(*) AS count
FROM employees
GROUP BY department
HAVING count > 5;
```
**结果示例**：

| department | count |
|------------|-------|
| 开发部     | 12    |
| 市场部     | 10    |

---

#### **四、关键注意事项**
1. **`SELECT` 列的合法性**  
   - `SELECT` 中的列必须是聚合函数或包含在 `GROUP BY` 子句中。  
   - **错误示例**：`SELECT name, department FROM employees GROUP BY department;`（`name` 未聚合或分组）。

2. **`WHERE` vs `HAVING`**  
   - `WHERE`：在分组前过滤数据，作用于原始数据行。  
   - `HAVING`：在分组后过滤数据，作用于分组结果。
    
   ```sql
   -- 查询财务部中平均薪资超过 10000 的职位
   SELECT job, AVG(salary) AS avg_salary
   FROM employees
   WHERE department = '财务部'
   GROUP BY job
   HAVING avg_salary > 10000;
   ```

3. **分组顺序与性能**  
   - 分组的字段顺序会影响结果，但不影响统计值（如 `GROUP BY A, B` 和 `GROUP BY B, A` 结果不同）。  
   - 为分组字段添加索引可提升性能（如 `CREATE INDEX idx_department ON employees(department)`）。

4. **`WITH ROLLUP` 小计功能**  
   生成分组汇总的小计行（需 MySQL 8.0+ 支持）：

   ```sql
   SELECT department, COUNT(*) AS count
   FROM employees
   GROUP BY department WITH ROLLUP;
   ```
   **结果示例**：

   | department | count |
   |------------|-------|
   | 财务部     | 8     |
   | 开发部     | 12    |
   | NULL       | 20    |  -- 总计行

---

#### **五、常见错误及解决方案**
##### **错误 1：非聚合字段未包含在 GROUP BY 中**
```sql
-- 错误：name 未分组或聚合
SELECT name, department, COUNT(*) 
FROM employees 
GROUP BY department;
```
**修复**：  
```sql
SELECT department, COUNT(*) 
FROM employees 
GROUP BY department;
```

##### **错误 2：分组字段与聚合字段混淆**
```sql
-- 错误：salary 未聚合，但未分组
SELECT department, salary 
FROM employees 
GROUP BY department;
```
**修复**：  
```sql
SELECT department, MAX(salary) 
FROM employees 
GROUP BY department;
```

---

#### **六、性能优化建议**
1. **索引优化**  
   - 为分组字段（如 `department`）和过滤字段（如 `hiredate`）添加复合索引：  
     ```sql
     CREATE INDEX idx_department_hiredate ON employees(department, hiredate);
     ```

2. **减少分组字段数量**  
   分组字段越多，性能开销越大，需按业务需求精简。

3. **使用覆盖索引**  
   若查询只需索引字段和聚合结果，可避免回表：  
   ```sql
   -- 假设存在索引 (department, salary)
   SELECT department, AVG(salary) 
   FROM employees 
   GROUP BY department;
   ```

---

#### **七、综合示例**
统计 2020 年后入职的员工中，各部门不同学历的平均薪资（仅显示平均薪资 > 10000 的组）：
```sql
SELECT 
    department, 
    education,
    ROUND(AVG(salary), 2) AS avg_salary
FROM employees
WHERE hiredate >= '2020-01-01'
GROUP BY department, education
HAVING avg_salary > 10000
ORDER BY department;
```

**结果示例**：

| department | education | avg_salary |
|------------|-----------|------------|
| 开发部     | 研究生    | 15000.00   |
| 市场部     | 本科      | 12000.00   |

---

### **总结**
- **核心作用**：按列分组并统计汇总数据。
- **常用组合**：`GROUP BY` + 聚合函数（`COUNT`、`SUM`、`AVG` 等）。
- **过滤时机**：`WHERE` 分组前过滤，`HAVING` 分组后过滤。
- **优化关键**：索引设计、减少分组字段、避免不必要计算。


在 SQL 中，**`SELECT` 是一个子句（clause）**，属于整个查询语句的核心组成部分。以下是详细解释：

---

### **1. SQL 语句的结构**
一个完整的 SQL 查询语句由多个子句（clauses）组成，每个子句以关键字开头并完成特定功能。例如：
```sql
SELECT name, salary    -- SELECT 子句（定义要返回的列）
FROM employees         -- FROM 子句（指定数据来源）
WHERE salary > 5000    -- WHERE 子句（过滤条件）
ORDER BY salary DESC;  -- ORDER BY 子句（排序规则）
```

### **2. `SELECT` 子句的作用**
- **核心功能**：指定查询要返回的列或表达式。
- **语法位置**：必须是查询语句的**第一个子句**（紧跟在 `SELECT` 关键字后）。
- **可选修饰符**：  
  - `DISTINCT`（去重）  
  - `AS`（别名）  
  - 聚合函数（如 `SUM()`、`AVG()`）  

### **3. 术语澄清**
- **子句（Clause）**：以关键字开头的语法单元（如 `SELECT`, `FROM`, `WHERE`）。  
- **主句**：这一术语在 SQL 中并不常用。通常将整个查询语句视为由多个子句构成，没有“主句”与“从句”的严格区分。

### **4. 总结**
| 术语      | 定义                                                                 |
|-----------|--------------------------------------------------------------------|
| **子句**  | 由关键字引导的语法单元（如 `SELECT`, `FROM`），每个子句负责特定功能。        |
| `SELECT`  | 核心子句之一，定义要返回的数据列或表达式，是查询语句的起点。                   |

因此，**`SELECT` 是子句**，而非“主句”。整个 SQL 查询语句通过多个子句协作完成数据检索。



MySQL 查询的知识体系可以概括为以下核心模块，涵盖了从基础语法到高级优化的全流程内容：

---

### **知识体系总结图**
```
基础查询 → 多表关联 → 聚合分组 → 排序分页 → 组合查询
      │          │           │           │          │
      ↓          ↓           ↓           ↓          ↓
    SELECT     JOIN       GROUP BY    ORDER BY    UNION
    WHERE     Subquery    HAVING      LIMIT       UNION ALL
    DISTINCT            聚合函数                
```

### **一、基础查询结构**
1. **SELECT 语句**
   - **作用**：从表中检索数据。
   - **核心子句**：
  
```sql
SELECT [列名|表达式|聚合函数] 
FROM 表名 
WHERE 过滤条件 
GROUP BY 分组字段 
HAVING 分组后过滤 
ORDER BY 排序字段 
LIMIT 分页;
```
   - **示例**：

```sql
SELECT name, AVG(score) FROM students 
WHERE class = 'A' 
GROUP BY gender 
HAVING AVG(score) > 80 
ORDER BY name 
LIMIT 10;
```

---

### **二、多表关联查询**
1. **JOIN 类型**
   - **INNER JOIN**：仅返回匹配条件的行。
   - **LEFT/RIGHT JOIN**：保留左/右表所有行，未匹配字段为 `NULL`。
   - **FULL OUTER JOIN**（MySQL 通过 `UNION` 模拟）：返回两表所有行。
   - **CROSS JOIN**：笛卡尔积（慎用）。
   - **自连接**：同一表通过别名关联。

   **示例**：
   ```sql
   SELECT a.name, b.order_id 
   FROM customers a
   LEFT JOIN orders b ON a.id = b.customer_id;
   ```

2. **子查询（Subquery）**
   - **标量子查询**：返回单个值（用于 `WHERE` 或 `SELECT`）。
   - **行子查询**：返回单行多列。
   - **列子查询**：返回单列多行（常与 `IN` 结合）。
   - **表子查询**：返回多行多列（用于 `FROM` 或 `JOIN`）。

   **示例**：
   ```sql
   SELECT * FROM products 
   WHERE price > (SELECT AVG(price) FROM products);
   ```

---

### **三、数据聚合与分组**
1. **聚合函数**
   - `COUNT()`、`SUM()`、`AVG()`、`MAX()`、`MIN()`。
   - **注意**：`COUNT(*)` 统计所有行，`COUNT(列名)` 忽略 `NULL`。

2. **GROUP BY**
   - 按指定字段分组，常与聚合函数联用。
   - **示例**：
     ```sql
     SELECT department, AVG(salary) FROM employees 
     GROUP BY department;
     ```

3. **HAVING**
   - 对分组后的结果过滤（`WHERE` 过滤原始数据，`HAVING` 过滤分组结果）。
   - **示例**：
     ```sql
     SELECT department, AVG(salary) 
     FROM employees 
     GROUP BY department 
     HAVING AVG(salary) > 5000;
     ```

---

### **四、数据排序与分页**
1. **ORDER BY**
   - 按字段排序：`ASC`（默认升序）、`DESC`（降序）。
   - **示例**：
     ```sql
     SELECT * FROM products 
     ORDER BY price DESC, stock ASC;
     ```

2. **LIMIT & OFFSET**
   - 分页查询：`LIMIT n` 限制返回行数，`OFFSET m` 跳过前 `m` 行。
   - **示例**：
     ```sql
     SELECT * FROM logs 
     LIMIT 10 OFFSET 20; -- 第3页（每页10条）
     ```

---

### **五、组合查询**
1. **UNION** 与 **UNION ALL**
   - 合并多个 `SELECT` 的结果集（`UNION` 去重，`UNION ALL` 保留重复）。
   - **示例**：
     ```sql
     SELECT name FROM employees 
     UNION ALL
     SELECT name FROM contractors;
     ```

---

### **六、查询执行顺序**
理解执行顺序是优化查询的关键：
1. **FROM** → 确定数据来源（包括 JOIN）
2. **WHERE** → 过滤原始数据
3. **GROUP BY** → 分组
4. **HAVING** → 过滤分组结果
5. **SELECT** → 选择字段并计算表达式
6. **ORDER BY** → 排序
7. **LIMIT** → 分页

---

### **七、性能优化核心**
1. **索引使用**
   - 为 `WHERE`、`JOIN`、`ORDER BY` 的字段创建索引。
   - 避免对索引字段使用函数（如 `YEAR(date)`）。
2. **EXPLAIN 分析**
   - 使用 `EXPLAIN` 查看执行计划，关注 `type`（扫描方式）、`key`（使用的索引）、`rows`（扫描行数）。
3. **避免全表扫描**
   - 减少 `SELECT *`，明确指定所需字段。
   - 优化复杂子查询，改用 `JOIN` 或临时表。

---

### **八、常用工具与技巧**
1. **临时表与 CTE（Common Table Expressions）**
   - **CTE**（MySQL 8.0+ 支持）：
     ```sql
     WITH cte AS (SELECT ...) 
     SELECT * FROM cte;
     ```
2. **窗口函数**（MySQL 8.0+）
   - 实现复杂分析：`ROW_NUMBER()`、`RANK()`、`LEAD()` 等。
   - **示例**：
     ```sql
     SELECT name, salary, 
            RANK() OVER (ORDER BY salary DESC) AS rank 
     FROM employees;
     ```

---



掌握以上知识体系后，可应对大多数业务场景的查询需求，并通过优化技巧提升数据库性能。
