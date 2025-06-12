---
noteId: "7bd336a0321f11f088738f916b56a5b6"
tags: []

---

在 MySQL 中，`ON` 是一个多功能关键字，主要用于定义关联条件、约束规则或指定操作对象。以下是其核心用法及示例详解：

---

### **一、JOIN 操作中的连接条件**
**作用**：在多表关联查询时，`ON` 用于指定两个表之间的连接条件，筛选匹配的行。

#### **语法示例**
```sql
SELECT *
FROM table1
JOIN table2 
    ON table1.id = table2.foreign_key_id;
```

#### **使用场景**
- **等值连接**：关联两个表的字段值相等。
  ```sql
  SELECT orders.order_id, customers.name
  FROM orders
  JOIN customers 
      ON orders.customer_id = customers.customer_id;
  ```
- **非等值连接**：使用比较运算符（如 `>`、`BETWEEN`）。
  ```sql
  SELECT e1.name, e2.name
  FROM employees e1
  JOIN employees e2 
      ON e1.salary > e2.salary;
  ```

#### **注意事项**
- **与 `WHERE` 的区别**：`ON` 在 JOIN 时过滤关联行，`WHERE` 在关联后过滤最终结果。
- **性能优化**：复杂的 `ON` 条件可能影响查询效率，建议优先使用索引字段。

---

### **二、外键约束中的级联规则**
**作用**：定义主表与从表之间的数据一致性规则，指定删除或更新时的级联操作。

#### **语法示例**
```sql
CREATE TABLE child (
    id INT PRIMARY KEY,
    parent_id INT,
    FOREIGN KEY (parent_id) 
        REFERENCES parent(id)
        ON DELETE CASCADE
        ON UPDATE SET NULL
);
```

#### **常用级联动作**
| **动作**       | **描述**                               |
|----------------|----------------------------------------|
| `CASCADE`      | 主表操作时，从表关联记录同步执行。       |
| `SET NULL`     | 主表操作时，从表外键字段设为 `NULL`。    |
| `RESTRICT`     | 阻止主表操作（默认行为）。               |
| `NO ACTION`    | 与 `RESTRICT` 等效。                    |

#### **示例**
```sql
-- 主表删除时，从表级联删除
DELETE FROM parent WHERE id = 1;  -- 自动删除 child 中 parent_id=1 的记录
```

---

### **三、触发器定义中指定关联表**
**作用**：声明触发器所依附的表及触发时机（`BEFORE`/`AFTER`）和事件（`INSERT`/`UPDATE`/`DELETE`）。

#### **语法示例**
```sql
CREATE TRIGGER trigger_name
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
    -- 触发器逻辑
END;
```

#### **使用场景**
- **数据校验**：插入前检查字段有效性。
- **自动填充**：更新时自动记录修改时间。
  ```sql
  CREATE TRIGGER update_timestamp
  BEFORE UPDATE ON orders
  FOR EACH ROW
  SET NEW.updated_at = NOW();
  ```

---

### **四、权限管理中的对象指定**
**作用**：在 `GRANT` 或 `REVOKE` 语句中，定义权限的作用范围（库、表、列）。

#### **语法示例**
```sql
-- 授予用户对某表的 SELECT 权限
GRANT SELECT ON database.table TO 'user'@'host';

-- 授予全局权限
GRANT CREATE USER ON *.* TO 'admin'@'localhost';
```

#### **权限层级**
| **作用对象**        | **语法**               | **示例**                     |
|---------------------|------------------------|------------------------------|
| 全局权限            | `ON *.*`               | `GRANT SELECT ON *.* TO ...` |
| 数据库权限          | `ON database.*`        | `GRANT INSERT ON db.* TO ...`|
| 表权限              | `ON database.table`    | `GRANT DELETE ON db.orders TO ...` |

---

### **五、其他用法**
#### **1. 窗口函数中的 `PARTITION BY` 和 `ORDER BY`**
在窗口函数中，`ON` 不直接使用，但需注意窗口子句的语法：
```sql
SELECT 
    name, 
    salary,
    RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rank
FROM employees;
```

#### **2. 分区表定义**
定义表分区时，`ON` 用于指定分区键：
```sql
CREATE TABLE logs (
    log_date DATE,
    message TEXT
)
PARTITION BY RANGE (YEAR(log_date)) (
    PARTITION p0 VALUES LESS THAN (2020),
    PARTITION p1 VALUES LESS THAN (2021)
);
```

---

### **总结**
`ON` 关键字在 MySQL 中贯穿多个核心功能：
1. **数据关联**：通过 `JOIN ... ON` 实现多表关联。
2. **数据一致性**：外键约束中的 `ON DELETE/UPDATE` 确保级联操作。
3. **自动化逻辑**：触发器中的 `ON table` 定义事件响应。
4. **权限控制**：`GRANT ... ON` 精确管理访问权限。

**关键注意事项**：
- 在 `JOIN` 中优先使用 `ON` 明确连接条件，避免歧义。
- 外键的级联操作需谨慎设计，防止意外数据丢失。
- 触发器逻辑应保持高效，避免复杂操作影响性能。