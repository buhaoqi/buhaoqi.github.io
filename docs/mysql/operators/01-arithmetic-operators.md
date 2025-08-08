---
noteId: "603eee30740911f0ac7f012540a4f7e6"
tags: []

---

# MySQL 算术运算符实例详解

MySQL 提供了多种算术运算符用于数值计算，下面我将通过具体实例详细说明每种算术运算符的用法。

## 一、基本算术运算符

| 运算符 | 描述     | 示例                | 结果 |
|--------|----------|---------------------|------|
| `+`    | 加法     | `SELECT 5 + 3;`      | 8    |
| `-`    | 减法     | `SELECT 10 - 4;`     | 6    |
| `*`    | 乘法     | `SELECT 6 * 7;`      | 42   |
| `/`    | 除法     | `SELECT 15 / 3;`     | 5    |
| `%`    | 取模     | `SELECT 11 % 4;`     | 3    |

### 实际表数据示例

```sql
-- 创建示例表
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    price DECIMAL(10,2),
    quantity INT
);

-- 插入数据
INSERT INTO products VALUES
(1, 'Apple', 5.50, 10),
(2, 'Banana', 3.20, 15),
(3, 'Orange', 4.80, 8);

-- 使用算术运算符查询
SELECT 
    name,
    price,
    quantity,
    price * quantity AS total_value
FROM products;
```

结果：
```
+--------+-------+----------+-------------+
| name   | price | quantity | total_value |
+--------+-------+----------+-------------+
| Apple  | 5.50  | 10       | 55.00       |
| Banana | 3.20  | 15       | 48.00       |
| Orange | 4.80  | 8        | 38.40       |
+--------+-------+----------+-------------+
```

## 二、除法运算的特殊情况

1. **整数除法**：
   ```sql
   SELECT 5 / 2;  -- 结果为2.5000（默认转为DECIMAL）
   SELECT 5 DIV 2; -- 结果为2（整数除法）
   ```

2. **除数为0**：
   ```sql
   SELECT 5 / 0;  -- 返回NULL（不会报错）
   ```

## 三、取模运算的用途

1. **判断奇偶**：
   ```sql
   SELECT id, name FROM products WHERE id % 2 = 0; -- 偶数ID
   ```

2. **分页计算**：
   ```sql
   -- 每页10条，计算第3页的起始位置
   SELECT (3 - 1) * 10; -- 结果为20
   ```

## 四、运算符优先级

MySQL 算术运算符遵循标准数学优先级：

1. 括号 `()`
2. 乘 `*`、除 `/`、取模 `%`
3. 加 `+`、减 `-`

```sql
SELECT 2 + 3 * 4;    -- 14（先乘后加）
SELECT (2 + 3) * 4;  -- 20（先括号）
```

## 五、UPDATE语句中的算术运算

```sql
-- 商品涨价10%
UPDATE products SET price = price * 1.1;

-- 商品数量减1
UPDATE products SET quantity = quantity - 1 WHERE id = 1;
```

## 六、注意事项

1. **NULL处理**：任何与NULL的算术运算结果都是NULL
   ```sql
   SELECT 5 + NULL;  -- 结果为NULL
   ```

2. **类型转换**：运算时会自动进行类型转换
   ```sql
   SELECT '5' + 3;  -- 结果为8（字符串转数字）
   ```

3. **精度问题**：DECIMAL类型可避免浮点数精度问题
   ```sql
   SELECT 0.1 + 0.2;  -- 0.30000000000000004（浮点误差）
   SELECT CAST(0.1 AS DECIMAL(10,2)) + CAST(0.2 AS DECIMAL(10,2)); -- 0.30
   ```

通过合理使用这些算术运算符，可以高效地进行各种数值计算和数据处理。