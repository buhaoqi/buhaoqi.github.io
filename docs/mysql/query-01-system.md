---
noteId: "cd1ead302d6211f0965ee5785546709e"
tags: []

---

---

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
