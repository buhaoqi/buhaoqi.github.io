---
noteId: "bd13c520333811f0ab03e5a28898bc4c"
tags: []

---

### MySQL 中 ORDER BY 子句详解

#### 1. **基本语法与作用**
**作用**：`ORDER BY` 用于对查询结果按照指定列或表达式进行排序。  
**基本语法**：
```sql
SELECT column1, column2, ...
FROM table
ORDER BY column1 [ASC|DESC], column2 [ASC|DESC], ...;
```
- **ASC**（默认）：升序（从小到大）。
- **DESC**：降序（从大到小）。

**示例**：按工资升序排列员工表：
```sql
SELECT name, salary
FROM employees
ORDER BY salary ASC;
```

---

#### 2. **多列排序**
可以指定多个排序列，优先级从左到右依次降低。  
**示例**：先按部门升序，再按工资降序：
```sql
SELECT department, name, salary
FROM employees
ORDER BY department ASC, salary DESC;
```

---

#### 3. **使用表达式或函数排序**
可以按计算后的值排序，例如对字段进行运算或调用函数。  
**示例**：按员工姓名的长度排序：
```sql
SELECT name, LENGTH(name) AS name_length
FROM employees
ORDER BY name_length DESC;
```

---

#### 4. **处理 NULL 值**
- **默认行为**：在升序排序中，NULL 视为最小值（排在最前）；降序排序中，NULL 排在最后。
- **控制 NULL 的位置**：通过条件判断或函数调整。  
**示例**：将 NULL 的工资排在最后：
```sql
SELECT name, salary
FROM employees
ORDER BY 
    CASE WHEN salary IS NULL THEN 1 ELSE 0 END,  -- 非 NULL 优先
    salary ASC;
```

---

#### 5. **使用列别名或位置编号排序**
- **别名**：`ORDER BY` 可以直接使用 `SELECT` 中的别名。  
- **位置编号**：通过列在 `SELECT` 中的位置（从 1 开始）排序。  

**示例**：
```sql
SELECT name, salary * 12 AS annual_salary
FROM employees
ORDER BY annual_salary DESC;  -- 使用别名

-- 或按 SELECT 中的第二个列排序（salary * 12）：
ORDER BY 2 DESC;
```

---

#### 6. **性能优化与索引**
- **索引的作用**：如果排序的列有索引，MySQL 可能直接利用索引避免全表扫描（避免 `Using filesort`）。
- **避免文件排序**：若未使用索引，MySQL 需在内存或磁盘进行排序，影响性能。
  
**示例**：为 `salary` 列添加索引：
```sql
ALTER TABLE employees ADD INDEX idx_salary (salary);
```

---

#### 7. **与 LIMIT 结合实现分页**
常用于分页查询，先排序后限制返回的行数。  
**示例**：获取工资最高的前 10 名员工：
```sql
SELECT name, salary
FROM employees
ORDER BY salary DESC
LIMIT 10;
```

---

#### 8. **注意事项与常见错误**
- **GROUP BY 后的排序**：在 `GROUP BY` 后使用 `ORDER BY` 时，需确保排序列在分组或聚合函数中。  
- **子查询中的 ORDER BY**：若子查询无 `LIMIT`，可能被优化器忽略排序。  
- **避免混合排序方向**：多列排序时，尽量统一方向以利用索引（如 `(a ASC, b ASC)`）。  

**错误示例**：在未分组的查询中使用非聚合列排序：
```sql
-- 假设启用了 ONLY_FULL_GROUP_BY 模式
SELECT department, AVG(salary)
FROM employees
GROUP BY department
ORDER BY name;  -- 错误！name 未参与分组或聚合
```

---

#### 9. **实战示例**
**表结构**：`orders` 表包含 `order_id`、`order_date`、`amount`。

1. **按日期降序查看订单**：
   ```sql
   SELECT order_id, order_date, amount
   FROM orders
   ORDER BY order_date DESC;
   ```

2. **按金额和日期排序，优先高金额**：
   ```sql
   SELECT order_id, amount, order_date
   FROM orders
   ORDER BY amount DESC, order_date ASC;
   ```

3. **分页查询（每页 20 条，第 3 页）**：
   ```sql
   SELECT order_id, amount
   FROM orders
   ORDER BY order_id
   LIMIT 40, 20;  -- 跳过前 40 条，取接下来的 20 条
   ```

---

#### 10. **高级技巧**
- **动态排序**：通过程序变量动态指定排序列和方向（需防范 SQL 注入）。  
- **自定义排序规则**：使用 `FIELD()` 函数指定特定值的排序顺序。  
  **示例**：按部门自定义顺序排序（'HR' 优先，'IT' 其次）：
  ```sql
  SELECT department, name
  FROM employees
  ORDER BY FIELD(department, 'HR', 'IT', 'Finance');
  ```

---

### 总结
- `ORDER BY` 是控制查询结果顺序的核心子句，支持单列、多列、表达式排序。
- 合理使用索引可大幅提升排序性能，避免 `filesort`。
- 注意 NULL 值的处理及与 `GROUP BY`、`LIMIT` 的配合使用。
- 在复杂场景中，灵活运用函数或条件表达式实现定制化排序需求。