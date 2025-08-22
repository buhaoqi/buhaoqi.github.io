---
noteId: "6baaeca0752c11f082d9bbd061b73fc2"
tags: []

---

# MySQL 中常见数学函数的用法详解

在 MySQL 中，**数学函数（Mathematical Functions）** 是用于对**数值进行数学计算与处理**的内置函数，它们在数据计算、统计分析、业务逻辑处理等场景中非常常用。

掌握这些函数可以让你在 SQL 查询中轻松实现：

- 基本运算（绝对值、取整、四舍五入等）
- 数学计算（幂、平方根、对数等）
- 随机数生成
- 数值比较与处理

---



# 一、MySQL 常见数学函数分类与详解

下面为你分类介绍 **MySQL 中最常用的数学函数**，包括语法、作用、示例及结果说明。

---

## 🔢 一、基本数学运算函数

### 1. `ABS(x)` —— 求绝对值

**作用：** 返回数值 `x` 的绝对值（非负数）

```sql
SELECT ABS(-10);    -- 结果：10
SELECT ABS(5 - 20); -- 结果：15 （表达式也可以）
```

---

### 2. `CEIL(x)` 或 `CEILING(x)` —— 向上取整

**作用：** 返回大于或等于 x 的最小整数（向上取整）

```sql
SELECT CEIL(3.14);    -- 结果：4
SELECT CEILING(9.001); -- 结果：10
```

---

### 3. `FLOOR(x)` —— 向下取整

**作用：** 返回小于或等于 x 的最大整数（向下取整）

```sql
SELECT FLOOR(3.99);   -- 结果：3
SELECT FLOOR(5.999);  -- 结果：5
```

---

### 4. `ROUND(x)` / `ROUND(x, d)` —— 四舍五入

**作用：** 对数值 x 进行四舍五入  
- `ROUND(x)`：四舍五入到整数  
- `ROUND(x, d)`：四舍五入到小数点后 d 位

```sql
SELECT ROUND(3.14159);        -- 结果：3
SELECT ROUND(3.14159, 2);     -- 结果：3.14
SELECT ROUND(3.678, 1);       -- 结果：3.7
```

---

### 5. `TRUNCATE(x, d)` 或 `TRUNC(x, d)` —— 截断小数位（不四舍五入）

**作用：** 保留 x 的 d 位小数，直接截断，不四舍五入

```sql
SELECT TRUNCATE(3.6789, 2);   -- 结果：3.67
SELECT TRUNCATE(9.999, 0);    -- 结果：9
```

> ✅ 与 ROUND 不同，TRUNCATE **不会进行四舍五入**

---

## 🧮 二、数学计算函数

### 6. `POW(x, y)` 或 `POWER(x, y)` —— 求 x 的 y 次幂

```sql
SELECT POW(2, 3);     -- 结果：8 （2的3次方）
SELECT POWER(3, 2);   -- 结果：9 （3的平方）
```

---

### 7. `SQRT(x)` —— 求平方根

```sql
SELECT SQRT(16);      -- 结果：4
SELECT SQRT(25);      -- 结果：5
```

> ⚠️ 注意：x 必须为非负数，否则返回 NULL

---

### 8. `MOD(x, y)` 或 `x % y` —— 求余数（取模）

```sql
SELECT MOD(10, 3);    -- 结果：1
SELECT 10 % 3;        -- 结果：1 （与 MOD() 等价）
```

> ✅ 常用于判断奇偶性：`x % 2 = 0` 表示偶数

---

### 9. `RAND()` —— 生成 0 到 1 之间的随机浮点数

```sql
SELECT RAND();        -- 结果如：0.123456789（每次不同）
```

**应用场景：**
- 随机排序：`ORDER BY RAND()`
- 抽奖、随机推荐等

---

### 10. `LEAST(value1, value2, ...)` —— 返回一组值中的最小值

```sql
SELECT LEAST(10, 5, 8, 3);   -- 结果：3
```

---

### 11. `GREATEST(value1, value2, ...)` —— 返回一组值中的最大值

```sql
SELECT GREATEST(10, 5, 8, 3);   -- 结果：10
```

---

## 🔢 三、数学常量（部分版本支持）

> ⚠️ 注意：部分数学常量如 PI() 是支持的，但像 E（自然常数）在 MySQL 中没有直接函数，但可以手动定义或计算

### 12. `PI()` —— 返回圆周率 π 的近似值

```sql
SELECT PI();   -- 结果：3.141593（近似）
```

---

## 四、数学函数使用场景举例

---

### ✅ 示例 1：商品价格计算（四舍五入、取整）

假设有商品价格 `price = 19.888`，需要：

- 四舍五入到两位小数
- 向上取整到应付金额
- 向下取整为优惠价

```sql
SELECT 
    price,
    ROUND(price, 2) AS rounded_price,
    CEIL(price) AS ceil_price,
    FLOOR(price) AS floor_price
FROM products
WHERE id = 1;
```

---

### ✅ 示例 2：计算平方与开方（几何或物理相关业务）

```sql
SELECT 
    5 AS number,
    POW(5, 2) AS square,     -- 5的平方
    SQRT(25) AS square_root; -- 25的平方根
```

---

### ✅ 示例 3：计算余数（如判断奇偶）

```sql
SELECT 
    user_id,
    user_id % 2 AS remainder,
    CASE WHEN user_id % 2 = 0 THEN '偶数' ELSE '奇数' END AS parity
FROM users;
```

---

### ✅ 示例 4：随机推荐（如抽奖、随机排序）

```sql
-- 随机排序查询用户
SELECT * FROM users ORDER BY RAND() LIMIT 5;

-- 生成一个 0~1 的随机小数
SELECT RAND();
```

---

### ✅ 示例 5：取最大值和最小值

```sql
SELECT 
    LEAST(100, 200, 150) AS min_value,
    GREATEST(10, 30, 20) AS max_value;
```

---

# ✅ 常用数学函数速查表

| 函数 | 说明 | 示例 | 结果 |
|------|------|------|------|
| `ABS(x)` | 绝对值 | `ABS(-10)` | 10 |
| `CEIL(x)` / `CEILING(x)` | 向上取整 | `CEIL(3.1)` | 4 |
| `FLOOR(x)` | 向下取整 | `FLOOR(3.9)` | 3 |
| `ROUND(x, d)` | 四舍五入到 d 位小数 | `ROUND(3.14159, 2)` | 3.14 |
| `TRUNCATE(x, d)` | 截断到 d 位小数（不四舍五入） | `TRUNCATE(3.678, 2)` | 3.67 |
| `POW(x,y)` / `POWER(x,y)` | x 的 y 次幂 | `POW(2,3)` | 8 |
| `SQRT(x)` | 平方根 | `SQRT(16)` | 4 |
| `MOD(x,y)` 或 `x % y` | 取余数 | `MOD(10,3)` | 1 |
| `RAND()` | 0~1 随机浮点数 | `RAND()` | 如 0.123456 |
| `LEAST(a,b,...)` | 返回最小值 | `LEAST(5,3,8)` | 3 |
| `GREATEST(a,b,...)` | 返回最大值 | `GREATEST(5,3,8)` | 8 |
| `PI()` | 圆周率 π | `PI()` | 3.141593 |

---

# 📌 总结

| 类别 | 常用函数 | 用途 |
|------|----------|------|
| **基本运算** | `ABS()`, `CEIL()`, `FLOOR()`, `ROUND()`, `TRUNCATE()` | 取绝对值、取整、四舍五入等 |
| **数学计算** | `POW()`, `SQRT()`, `MOD()` | 幂运算、开方、取余 |
| **随机数** | `RAND()` | 生成随机数，用于随机排序、抽奖等 |
| **极值函数** | `LEAST()`, `GREATEST()` | 求一组值中的最小或最大值 |
| **常量** | `PI()` | 返回圆周率 π |

---

## ✅ 下一步建议

你可以尝试以下练习来巩固数学函数的使用：

1. ✅ 对商品价格进行**四舍五入到两位小数**
2. ✅ 使用 `CEIL` 或 `FLOOR` 模拟**支付金额向上取整**
3. ✅ 用 `MOD()` 判断用户 ID 是否为**偶数/奇数**
4. ✅ 用 `RAND()` 实现**随机排序或抽取**
5. ✅ 使用 `POW()` 和 `SQRT()` 处理**几何相关计算**

---

如你希望获取这些函数的：

- ✅ **实际建表 + 数据 + 查询示例**
- ✅ **与聚合函数（如 SUM、AVG）结合使用**
- ✅ **在存储过程或触发器中的应用**
- 完整的 SQL 实战案例。