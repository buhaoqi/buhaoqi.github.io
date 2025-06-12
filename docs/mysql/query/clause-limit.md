---
noteId: "f2a309a0334011f0b8091965526edeaf"
tags: []

---

### MySQL 中 LIMIT 子句详解

#### 1. **基本语法与作用**
**作用**：`LIMIT` 用于限制查询结果的返回行数，常用于分页查询或快速预览数据。  
**基本语法**：
```sql
SELECT column1, column2, ...
FROM table
LIMIT [offset,] row_count;  -- 或 LIMIT row_count OFFSET offset
```
- **offset**（可选）：跳过的行数（默认从 0 开始）。
- **row_count**：返回的最大行数。

**示例**：返回前 5 条记录：
```sql
SELECT * FROM employees LIMIT 5;
```

---

#### 2. **分页查询**
通过 `LIMIT` 和 `OFFSET` 实现分页，公式：  
**第 n 页的数据** = `LIMIT (n-1)*page_size, page_size`  
**示例**：每页 10 条，获取第 3 页的数据：
```sql
SELECT * FROM employees
ORDER BY hire_date
LIMIT 20, 10;  -- 跳过前 20 条，取接下来的 10 条
```

---

#### 3. **与 ORDER BY 结合**
确保结果按指定顺序返回后再限制行数。  
**示例**：获取工资最高的前 3 名员工：
```sql
SELECT name, salary
FROM employees
ORDER BY salary DESC
LIMIT 3;
```

---

#### 4. **双参数语法与 OFFSET 关键字**
两种写法等效：
```sql
LIMIT offset, row_count     -- 写法1
LIMIT row_count OFFSET offset  -- 写法2（更清晰）
```
**示例**：跳过前 5 行，返回接下来的 3 行：
```sql
SELECT * FROM products LIMIT 5, 3;
-- 或
SELECT * FROM products LIMIT 3 OFFSET 5;
```

---

#### 5. **性能优化：避免大偏移量**
- **问题**：当 `offset` 很大时（如 `LIMIT 100000, 10`），MySQL 需扫描前 `offset + row_count` 行，导致性能下降。
- **优化方案**：
  1. **使用 WHERE 替代 OFFSET**：记录上一页最后一条数据的 ID，直接定位起始点。
     ```sql
     SELECT * FROM products
     WHERE id > 100000  -- 假设上一页最后一条的 ID 是 100000
     ORDER BY id
     LIMIT 10;
     ```
  2. **覆盖索引**：确保查询的列和排序条件均包含在索引中。

---

#### 6. **在 UPDATE/DELETE 中使用 LIMIT**
限制修改或删除的行数（需谨慎！）：  
**示例**：删除最旧的 10 条日志：
```sql
DELETE FROM logs
ORDER BY created_at ASC
LIMIT 10;
```

---

#### 7. **注意事项与常见错误**
- **参数顺序混淆**：`LIMIT a, b` 中 `a` 是偏移量，`b` 是行数（不是范围）。
- **偏移量从 0 开始**：`LIMIT 0, 5` 返回第 1~5 行。
- **结果不确定性**：若未使用 `ORDER BY`，多次查询的返回顺序可能不同。
- **严格模式限制**：在 `ONLY_FULL_GROUP_BY` 模式下，`LIMIT` 可能影响分组结果。

**错误示例**：误解参数为范围：
```sql
-- 错误：意图获取第 5~10 行，实际跳过前 5 行，返回 10 行（即 6~15 行）
SELECT * FROM table LIMIT 5, 10;
```

---

#### 8. **实战示例**
**表结构**：`orders` 表包含 `order_id`、`amount`、`order_date`。

1. **快速查看最新 5 条订单**：
   ```sql
   SELECT * FROM orders
   ORDER BY order_date DESC
   LIMIT 5;
   ```

2. **分页查询（每页 20 条，第 4 页）**：
   ```sql
   SELECT order_id, amount
   FROM orders
   ORDER BY order_id
   LIMIT 60, 20;  -- 跳过前 60 条（3 页 × 20 条/页）
   ```

3. **删除重复数据（保留最新一条）**：
   ```sql
   DELETE FROM duplicates
   WHERE id NOT IN (
     SELECT id
     FROM (SELECT id FROM duplicates ORDER BY created_at DESC LIMIT 1) AS tmp
   );
   ```

---

#### 9. **高级技巧**
- **动态分页**：通过程序变量传递 `offset` 和 `row_count`（需防范 SQL 注入）。
- **联合查询分页**：复杂查询中使用子查询先限制数据量。
  ```sql
  SELECT *
  FROM (
    SELECT id, name FROM employees WHERE department = 'Sales' LIMIT 100
  ) AS sales_emps
  ORDER BY name
  LIMIT 10;
  ```

---

### 总结
- `LIMIT` 是控制结果集大小的核心子句，支持分页和性能优化。
- 结合 `ORDER BY` 确保结果顺序，避免随机性。
- 避免大偏移量导致的性能问题，优先使用索引或 WHERE 条件优化。
- 在更新/删除操作中谨慎使用 `LIMIT`，建议先验证查询结果。