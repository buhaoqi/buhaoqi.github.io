---
noteId: "d0f11110333811f0ab03e5a28898bc4c"
tags: []

---

### MySQL 中 GROUP BY 语句详解

#### 1. **作用与基本语法**
**作用**：`GROUP BY` 用于将数据按指定列分组，并对每个分组进行聚合计算（如求和、计数、平均等）。

**基本语法**：
```sql
SELECT column1, aggregate_function(column2)
FROM table
GROUP BY column1;
```
- `column1`：分组依据的列。
- `aggregate_function`：聚合函数（如 `SUM()`、`COUNT()`、`AVG()` 等）。

#### 2. **聚合函数**
必须与聚合函数配合使用，否则分组无意义。常见聚合函数：
- `COUNT()`：统计行数。
- `SUM()`：求和。
- `AVG()`：平均值。
- `MAX()`/`MIN()`：最大/最小值。

**示例**：统计每个部门的员工数：
```sql
SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department;
```

---

#### 3. **多列分组**
按多列组合分组，仅当所有指定列的值相同时，数据归为同一组。

**示例**：统计每个部门、每个职位的平均工资：
```sql
SELECT department, job_title, AVG(salary)
FROM employees
GROUP BY department, job_title;
```

---

#### 4. **HAVING 子句**
- **WHERE**：在分组前过滤行（不可用聚合函数）。
- **HAVING**：在分组后过滤组（可使用聚合函数）。

**示例**：筛选出销售额超过 1000 的部门：
```sql
SELECT department, SUM(sales) AS total_sales
FROM orders
GROUP BY department
HAVING total_sales > 1000;
```

---

#### 5. **与 ORDER BY 结合**
分组后对结果排序：
```sql
SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department
ORDER BY employee_count DESC;
```

---

#### 6. **ROLLUP 生成汇总**
`WITH ROLLUP` 生成层次化汇总（如小计和总计）。

**示例**：按部门和职位统计工资，并生成汇总行：
```sql
SELECT department, job_title, SUM(salary)
FROM employees
GROUP BY department, job_title WITH ROLLUP;
```
结果中会包含：
- 每个部门、职位的工资总和。
- 每个部门的总工资（`job_title` 为 `NULL`）。
- 所有部门的总工资（`department` 和 `job_title` 均为 `NULL`）。

---

#### 7. **注意事项**
- **ONLY_FULL_GROUP_BY 模式**： 
  - 严格模式下，`SELECT` 中的非聚合列必须出现在 `GROUP BY` 中。
  - 若关闭此模式，可能导致未定义行为（如随机返回值）。
- **性能优化**：
  - 为分组列创建索引可提升性能。
  - 避免对大表进行复杂分组。
- **别名使用**：
  - `GROUP BY` 和 `HAVING` 中不可直接使用 `SELECT` 中的列别名（需用原始列名）。
  - 但 `ORDER BY` 可以使用别名。

---

#### 8. **示例场景**
**表结构**：`sales` 表包含 `product`（产品）、`region`（地区）、`amount`（销售额）。

1. **按产品统计总销售额**：
   ```sql
   SELECT product, SUM(amount) AS total
   FROM sales
   GROUP BY product;
   ```

2. **按地区和产品分组，筛选总销售额 > 5000 的组**：
   ```sql
   SELECT region, product, SUM(amount) AS total
   FROM sales
   GROUP BY region, product
   HAVING total > 5000;
   ```

3. **使用 ROLLUP 生成地区汇总**：
   ```sql
   SELECT region, product, SUM(amount)
   FROM sales
   GROUP BY region, product WITH ROLLUP;
   ```

---

#### 9. **常见错误**
- **错误1**：`SELECT` 包含未在 `GROUP BY` 中的非聚合列：
  ```sql
  -- 错误示例（若启用了 ONLY_FULL_GROUP_BY）
  SELECT product, region, SUM(amount)
  FROM sales
  GROUP BY product;
  ```
  - `region` 未参与分组，导致错误。

- **错误2**：在 `WHERE` 中使用聚合函数：
  ```sql
  -- 错误示例（应使用 HAVING）
  SELECT product, SUM(amount)
  FROM sales
  WHERE SUM(amount) > 1000
  GROUP BY product;
  ```

---

#### 10. **高级技巧**
- **GROUP_CONCAT**：将分组中的值合并为字符串。
  ```sql
  SELECT department, GROUP_CONCAT(employee_name) AS employees
  FROM employees
  GROUP BY department;
  ```

- **表达式分组**：按计算值分组。
  ```sql
  SELECT YEAR(order_date), SUM(amount)
  FROM orders
  GROUP BY YEAR(order_date);
  ```

---

### 总结
- `GROUP BY` 是数据分析的核心，用于分组统计。
- 结合聚合函数、`HAVING`、`ROLLUP` 可实现复杂分析。
- 注意严格模式下的语法限制及性能优化。