---
noteId: "33b3aff02ef311f0bd6a5936cc431f19"
tags: []

---

---

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