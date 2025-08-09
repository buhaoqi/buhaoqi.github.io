---
noteId: "8597b280752011f082d9bbd061b73fc2"
tags: []

---

# MySQL 中的 DML（数据操作语言）详解

DML（Data Manipulation Language，数据操作语言）是 SQL 的一个子集，用于对数据库中的数据进行增删改操作。MySQL 中的 DML 主要包括以下四种基本操作：

## 一、DML 主要语句

| 语句      | 功能               | 基本语法格式                     |
|-----------|--------------------|----------------------------------|
| `INSERT`  | 向表中插入新记录   | `INSERT INTO 表名 VALUES(...)`   |
| `UPDATE`  | 修改表中的现有记录 | `UPDATE 表名 SET 列=值 WHERE...` |
| `DELETE`  | 删除表中的记录     | `DELETE FROM 表名 WHERE...`      |
| `REPLACE` | 替换记录           | `REPLACE INTO 表名 VALUES(...)`  |

## 二、INSERT 语句详解

### 1. 基本插入

```sql
-- 插入完整行（所有列）
INSERT INTO customers 
VALUES (NULL, '张三', 'zhangsan@example.com', '13800138000');

-- 插入指定列
INSERT INTO customers (name, email) 
VALUES ('李四', 'lisi@example.com');
```

### 2. 批量插入

```sql
-- 单条语句插入多行
INSERT INTO products (name, price, stock) 
VALUES 
  ('商品A', 99.9, 100),
  ('商品B', 199.9, 50),
  ('商品C', 299.9, 20);
```

### 3. 从查询结果插入

```sql
-- 将查询结果插入到表中
INSERT INTO high_value_customers (customer_id, total_orders)
SELECT customer_id, COUNT(*) 
FROM orders 
GROUP BY customer_id 
HAVING COUNT(*) > 5;
```

## 三、UPDATE 语句详解

### 1. 基本更新

```sql
-- 更新单列
UPDATE employees 
SET salary = 8000 
WHERE id = 1001;

-- 更新多列
UPDATE products 
SET price = price * 0.9, 
    stock = stock - 1 
WHERE id = 5;
```

### 2. 使用表达式更新

```sql
-- 基于当前值的更新
UPDATE accounts 
SET balance = balance - 100 
WHERE user_id = 123;

-- 使用函数更新
UPDATE articles 
SET update_time = NOW() 
WHERE id = 42;
```

### 3. 多表更新

```sql
-- 使用JOIN更新
UPDATE orders o
JOIN customers c ON o.customer_id = c.id
SET o.status = 'VIP'
WHERE c.level = 'PLATINUM';
```

## 四、DELETE 语句详解

### 1. 基本删除

```sql
-- 删除特定记录
DELETE FROM logs 
WHERE create_time < '2023-01-01';

-- 删除所有记录（慎用！）
DELETE FROM temp_table;
```

### 2. 多表删除

```sql
-- 删除满足条件的关联记录
DELETE o FROM orders o
JOIN customers c ON o.customer_id = c.id
WHERE c.country = 'US';
```

### 3. TRUNCATE 与 DELETE 区别

| 特性          | DELETE                      | TRUNCATE                   |
|---------------|----------------------------|----------------------------|
| 语法          | `DELETE FROM 表名`         | `TRUNCATE TABLE 表名`      |
| 性能          | 较慢（逐行删除）           | 极快（直接删除表数据文件） |
| 可回滚        | 支持（事务内）             | 不支持                     |
| 触发器        | 会触发                     | 不会触发                   |
| 自增ID        | 不重置                     | 重置为初始值               |

## 五、REPLACE 语句详解

```sql
-- 存在则替换，不存在则插入（基于主键或唯一索引）
REPLACE INTO users (id, name, email) 
VALUES (1, '王五', 'wangwu@example.com');
```

## 六、DML 高级特性

### 1. 事务处理

```sql
START TRANSACTION;
INSERT INTO orders (customer_id, amount) VALUES (123, 99.9);
UPDATE accounts SET balance = balance - 99.9 WHERE user_id = 123;
COMMIT;  -- 或 ROLLBACK;
```

### 2. 返回修改结果（MySQL 8.0+）

```sql
-- 插入后返回生成的ID
INSERT INTO products (name, price) 
VALUES ('新品', 199.9);
SELECT LAST_INSERT_ID();

-- 更新后返回影响行数
UPDATE employees SET salary = salary * 1.1 
WHERE department = 'IT';
SELECT ROW_COUNT();
```

### 3. ON DUPLICATE KEY UPDATE

```sql
-- 如果记录存在则更新，不存在则插入
INSERT INTO inventory (product_id, quantity) 
VALUES (1001, 10)
ON DUPLICATE KEY UPDATE quantity = quantity + 10;
```

## 七、DML 性能优化

1. **批量操作**：使用多值INSERT代替多个单行INSERT
2. **限制事务大小**：大事务拆分为小事务
3. **适当使用索引**：WHERE条件列应有索引
4. **避免全表更新**：UPDATE/DELETE一定要带WHERE条件
5. **考虑使用TRUNCATE**：清空表时比DELETE更快

## 八、DML 安全注意事项

1. 执行UPDATE/DELETE前先使用SELECT验证条件
2. 生产环境操作前备份数据
3. 使用事务保证数据一致性
4. 考虑使用外键约束保护数据完整性
5. 限制应用账号的DML权限

DML 是 MySQL 数据库操作的核心部分，合理使用这些语句可以高效安全地管理数据库中的数据。