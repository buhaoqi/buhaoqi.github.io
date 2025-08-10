---
noteId: "1777e57075d611f08787c9dafe86ffae"
tags: []

---

# 在订单表中增加折扣率字段并计算折后价（完整实战案例）

在实际电商或销售业务中，**订单常常会有折扣活动**，比如：

- 🎫 会员折扣
- 🛒 满减优惠后折算的折扣率
- 🎁 促销活动统一折扣（如 8 折、9 折）
- 📉 针对不同用户/订单的个性化折扣

为了支持这类业务需求，我们可以在订单表中增加一个 **`discount_rate`（折扣率）字段**，并基于该字段计算每个订单的 **折后价（实际支付金额）**，即：

> ✅ **折后价 = 原始金额 × 折扣率**

其中：
- `amount` 是订单原始金额（如未打折的价格）
- `discount_rate` 是折扣率，通常为 **0 ~ 1 之间的小数**（如 0.9 表示 9 折，0.8 表示 8 折）

---

## 一、完整实战案例步骤

### ✅ 步骤 1：创建订单表（含折扣率字段）

我们创建一张 `orders` 表，包含以下字段：

- `id`: 订单ID（主键）
- `user_id`: 用户ID
- `amount`: 订单原始金额（未打折）
- `discount_rate`: 折扣率（如 0.9 表示 9折，范围建议 0 ~ 1）
- `final_amount`: 折后价（可通过计算得到，也可存入表中）
- `order_time`: 下单时间

> 🎯 注意：`discount_rate` 一般为 **小数（如 0.8 表示 8 折）**，不是百分比（不是 80）

```sql
-- 创建订单表（包含折扣率字段）
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,            -- 原始金额，如 100.00
    discount_rate DECIMAL(3, 2) DEFAULT 1.00,  -- 折扣率，如 0.9 表示9折；默认不打折 1.00
    final_amount DECIMAL(10, 2),               -- 折后价 = amount * discount_rate（可实时计算或存储）
    order_time DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

> 📌 说明：
> - `discount_rate` 使用 `DECIMAL(3,2)`，支持 0.01 ~ 9.99，一般控制在 0.0 ~ 1.0 范围表示打折，超过 1.0 表示加价（不常见）
> - `final_amount` 可以**实时计算**，也可以**存入表中作为实际支付金额**
> - 本例将展示 **如何通过 SQL 实时计算折后价**，并支持查询展示

---

### ✅ 步骤 2：插入模拟订单数据

插入多条订单记录，包含不同的原始金额和折扣率，用于测试计算折后价。

```sql
-- 插入测试订单数据
INSERT INTO orders (user_id, amount, discount_rate, order_time) VALUES
(1, 100.00, 1.00, '2024-06-01 10:00:00'),   -- 无折扣，折后价 = 100.00
(1, 200.00, 0.90, '2024-06-01 11:00:00'),   -- 9折，折后价 = 200.00 * 0.90 = 180.00
(2, 150.00, 0.80, '2024-06-01 12:00:00'),   -- 8折，折后价 = 150.00 * 0.80 = 120.00
(3, 300.00, 0.75, '2024-06-01 13:00:00'),   -- 7.5折，折后价 = 300.00 * 0.75 = 225.00
(2, 50.00, 1.00, '2024-06-01 14:00:00');    -- 无折扣
```

---

### ✅ 步骤 3：查询订单并实时计算折后价

使用公式：

```sql
final_amount = amount * discount_rate
```

在查询时**实时计算折后价**，无需存储该字段（灵活，适应折扣率变化）

```sql
-- 查询所有订单，并计算折后价（实时计算）
SELECT 
    id,
    user_id,
    amount AS original_amount,
    discount_rate,
    amount * discount_rate AS final_amount,  -- 实时计算折后价
    order_time
FROM orders;
```

### 🧾 查询结果示例：

| id | user_id | original_amount | discount_rate | final_amount | order_time          |
|----|---------|------------------|----------------|---------------|---------------------|
| 1  | 1       | 100.00           | 1.00           | 100.00        | 2024-06-01 10:00:00 |
| 2  | 1       | 200.00           | 0.90           | 180.00        | 2024-06-01 11:00:00 |
| 3  | 2       | 150.00           | 0.80           | 120.00        | 2024-06-01 12:00:00 |
| 4  | 3       | 300.00           | 0.75           | 225.00        | 2024-06-01 13:00:00 |
| 5  | 2       | 50.00            | 1.00           | 50.00         | 2024-06-01 14:00:00 |

> ✅ 其中 `final_amount = amount * discount_rate` 就是我们要的**折后价 / 实际支付金额**

---

### ✅ 步骤 4（可选）：将折后价存储到字段中

如果你的业务中**折后价是固定不变的（如已结算订单）**，也可以直接将该值存入表中，避免每次查询计算，提升性能。

#### 修改表结构，加入 `final_amount` 字段（上面已经包含，此处为提醒）
```sql
ALTER TABLE orders ADD COLUMN final_amount DECIMAL(10, 2);
```

#### 插入数据时直接计算并插入折后价
```sql
INSERT INTO orders (user_id, amount, discount_rate, final_amount, order_time) VALUES
(1, 100.00, 1.00, 100.00, '2024-06-01 10:00:00'),
(1, 200.00, 0.90, 180.00, '2024-06-01 11:00:00'),
(2, 150.00, 0.80, 120.00, '2024-06-01 12:00:00'),
(3, 300.00, 0.75, 225.00, '2024-06-01 13:00:00'),
(2, 50.00, 1.00, 50.00, '2024-06-01 14:00:00');
```

#### 查询时直接使用存储的 final_amount
```sql
SELECT 
    id,
    user_id,
    amount AS original_amount,
    discount_rate,
    final_amount,
    order_time
FROM orders;
```

> ✅ 推荐：如果折扣率是固定的（如订单已结算），可将 `final_amount` 存入数据库；如果折扣可能变化或需要动态计算，建议每次查询时实时计算 `amount * discount_rate`

---

## 二、扩展功能实战

### ✅ 1. 查询所有享受折扣的订单（折扣率 < 1.0）

```sql
SELECT 
    id,
    user_id,
    amount,
    discount_rate,
    amount * discount_rate AS final_amount
FROM orders
WHERE discount_rate < 1.0;
```

---

### ✅ 2. 查询折后价最低的 3 笔订单

```sql
SELECT 
    id,
    user_id,
    amount,
    discount_rate,
    amount * discount_rate AS final_amount
FROM orders
ORDER BY final_amount ASC
LIMIT 3;
```

---

### ✅ 3. 统计平均折扣率与平均折后金额

```sql
SELECT 
    AVG(discount_rate) AS avg_discount_rate,
    AVG(amount * discount_rate) AS avg_final_amount
FROM orders;
```

---

## ✅ 总结

| 功能 | 实现方式 | 说明 |
|------|----------|------|
| **增加折扣率字段** | `discount_rate DECIMAL(3,2)` | 通常取值 0 ~ 1，如 0.9 表示 9 折 |
| **计算折后价公式** | `amount * discount_rate` | 实时计算或存入字段 `final_amount` |
| **实时查询折后价** | 在 SELECT 中计算 `amount * discount_rate AS final_amount` | 灵活，推荐用于动态折扣 |
| **存储折后价** | 增加字段 `final_amount` 并插入计算结果 | 适合折扣固定、用于结算与报表 |
| **筛选折扣订单** | `WHERE discount_rate < 1.0` | 找出享受优惠的订单 |
| **排序/统计** | 按折后价排序、计算平均折扣等 | 用于分析用户行为、营销效果 |

---

## 📌 下一步建议

你可以继续扩展以下功能：

1. ✅ 增加 **折扣类型字段**（如 'percent', 'fixed', 'coupon'）
2. ✅ 支持 **多种优惠叠加逻辑**
3. ✅ 在订单更新时自动重新计算 `final_amount`
4. ✅ 结合 **用户等级、优惠券、满减规则** 实现更复杂的折扣计算

---

如你希望获取：

- ✅ 包含 **折扣类型、优惠券、满减逻辑** 的完整订单系统设计
- ✅ 折后价计算的 **存储过程 / 触发器 实现**
- ✅ 或者与 **用户表、商品表 JOIN 的综合实战**

欢迎继续提问！我可以为你提供更复杂的 SQL 实战模板与业务逻辑设计。