---
noteId: "9a0b92b075dc11f08787c9dafe86ffae"
tags: []

---

# MySQL 中 JOIN 关键词的用法详解

在 MySQL 中，**JOIN** 是 SQL 查询中用于**从多个表中联合查询数据**的核心关键词，它允许你基于表与表之间的关联关系，将多个表中的数据**合并成一个结果集**返回。

---

## 一、为什么要用 JOIN？

在实际开发中，数据往往不是存在一张表里的，而是按照**业务逻辑拆分存储在不同的表中**，比如：

- `users` 表：存用户基本信息
- `orders` 表：存订单信息
- `products` 表：存商品信息

这些表之间通常通过某个字段关联，比如：

- `orders.user_id` → 关联到 `users.id`
- `orders.product_id` → 关联到 `products.id`

如果我们想查询：

> “某个用户的所有订单信息，包括订单对应的商品详情”

就需要用到 **JOIN**，把多个表按照关联字段连接起来，一次性查出来。

---

## 二、JOIN 的作用

> ✅ **JOIN 用于将多个表中的数据基于某些关联条件合并查询，返回包含多个表字段的结果集。**

简单来说：

- 把多张表的数据“**关联在一起**”
- 通过**共同的字段（通常是主键与外键）**进行匹配
- 返回一个**组合后的结果**，可以同时访问多个表的字段

---

## 三、JOIN 的基本语法

```sql
SELECT 
    表1.字段, 表2.字段, ...
FROM 
    表1
JOIN 表2 ON 表1.字段 = 表2.字段
```

> ✅ 说明：
> - `JOIN` 是关键字，表示连接
> - `ON` 后面是连接条件，通常是两个表的关联字段（如外键 = 主键）
> - 你可以 JOIN 两个表、三个表，甚至更多

---

## 四、JOIN 的类型（重点！）

MySQL 支持多种类型的 JOIN，主要分为以下几类：

| JOIN 类型 | 关键字 | 说明 | 是否保留不匹配的行 |
|----------|--------|------|------------------|
| **内连接** | `INNER JOIN` 或 `JOIN` | 只返回两个表中**匹配的行** | ❌ 不匹配的不返回 |
| **左连接（左外连接）** | `LEFT JOIN` 或 `LEFT OUTER JOIN` | 返回**左表所有行**，右表无匹配则为 NULL | ✅ 左表全保留 |
| **右连接（右外连接）** | `RIGHT JOIN` 或 `RIGHT OUTER JOIN` | 返回**右表所有行**，左表无匹配则为 NULL | ✅ 右表全保留 |
| **全外连接** | `FULL OUTER JOIN` | 返回左右表所有行，无匹配则为 NULL | ✅ 左右都保留（但 MySQL **不支持**，可用 LEFT + RIGHT 模拟） |

> ⚠️ 注意：在 MySQL 中，**`JOIN` 是 `INNER JOIN` 的简写，默认就是内连接**  
> ✅ 推荐显式地写成 `INNER JOIN` 或 `LEFT JOIN` 等，提高代码可读性

---

## 五、各类 JOIN 的用法详解与示例

---

### ✅ 1. 内连接（INNER JOIN）—— 只返回匹配的行

#### 🎯 场景：
查询 **有订单的用户及其订单信息**（只返回那些在 users 和 orders 表中都有匹配的记录）

---

#### ✅ 示例表结构：

- `users` 表：

| id | name   |
|----|--------|
| 1  | 张三   |
| 2  | 李四   |
| 3  | 王五   |

- `orders` 表：

| id | user_id | amount |
|----|---------|--------|
| 1  | 1       | 100    |
| 2  | 1       | 200    |
| 3  | 2       | 150    |

> 🔗 关联字段：`orders.user_id = users.id`

---

#### ✅ 示例 SQL（使用 INNER JOIN）：

```sql
SELECT 
    users.name, 
    orders.id AS order_id, 
    orders.amount
FROM 
    users
INNER JOIN orders ON users.id = orders.user_id;
```

🧾 **结果：只返回 users 和 orders 都有匹配的记录**

| name | order_id | amount |
|------|----------|--------|
| 张三 | 1        | 100    |
| 张三 | 2        | 200    |
| 李四 | 3        | 150    |

> ❗ 用户 3（王五）没有订单，所以不会出现在结果中

---

### ✅ 2. 左连接（LEFT JOIN）—— 返回左表所有行，右表无匹配则为 NULL

#### 🎯 场景：
查询 **所有用户，以及他们的订单（如果有的话）**，包括**没有订单的用户**

---

#### ✅ 示例 SQL（使用 LEFT JOIN）：

```sql
SELECT 
    users.name, 
    orders.id AS order_id, 
    orders.amount
FROM 
    users
LEFT JOIN orders ON users.id = orders.user_id;
```

🧾 **结果：包含所有用户，没有订单的显示为 NULL**

| name | order_id | amount |
|------|----------|--------|
| 张三 | 1        | 100    |
| 张三 | 2        | 200    |
| 李四 | 3        | 150    |
| 王五 | NULL     | NULL   |

> ✅ 用户 3（王五）没有订单，order_id 和 amount 显示为 NULL，但用户信息仍然显示

---

### ✅ 3. 右连接（RIGHT JOIN）—— 返回右表所有行，左表无匹配则为 NULL

#### 🎯 场景：
查询 **所有订单，以及下单的用户（如果有的话）**，包括那些**没有对应用户的订单（理论上不应该有，但可用于数据校验）**

---

#### ✅ 示例 SQL（使用 RIGHT JOIN）：

```sql
SELECT 
    users.name, 
    orders.id AS order_id, 
    orders.amount
FROM 
    users
RIGHT JOIN orders ON users.id = orders.user_id;
```

🧾 **结果：包含所有订单，没有匹配用户的显示为 NULL**

| name | order_id | amount |
|------|----------|--------|
| 张三 | 1        | 100    |
| 张三 | 2        | 200    |
| 李四 | 3        | 150    |

> ✅ 如果某订单的 `user_id` 在 users 表中不存在，则 name 显示为 NULL  
> ⚠️ 实际业务中很少用 RIGHT JOIN，一般用 LEFT JOIN 更直观

---

### ❌ 4. 全外连接（FULL OUTER JOIN）—— MySQL 不支持！

> ✅ MySQL **不支持 `FULL OUTER JOIN`**，但可以通过 **LEFT JOIN + RIGHT JOIN + UNION** 的方式模拟

---

## 六、JOIN 的多表连接（连接多个表）

你不仅可以连接 **两张表**，还可以通过多次 JOIN 连接 **三张、四张甚至更多表**，比如：

- 用户（users）
- 订单（orders）
- 商品（products）

#### ✅ 示例：查询用户、其订单、以及订单中的商品信息

```sql
SELECT 
    users.name,
    orders.id AS order_id,
    products.name AS product_name
FROM 
    users
INNER JOIN orders ON users.id = orders.user_id
INNER JOIN products ON orders.product_id = products.id;
```

> ✅ 说明：通过多个 `JOIN` 把多张表按关联关系连在一起，返回组合数据

---

## 七、JOIN 使用的注意事项

| 注意事项 | 说明 |
|---------|------|
| **明确关联字段** | 通常是一个表的外键 = 另一个表的主键，如 `user_id = id` |
| **推荐使用表别名** | 多表查询时，使用别名（如 `u`, `o`）提高可读性 |
| **JOIN 与 WHERE 的区别** | `JOIN` 是连接表，`WHERE` 是过滤行，二者可以一起使用 |
| **INNER JOIN 只返回匹配行** | 如果只想查有关系的数据，用 INNER JOIN |
| **LEFT JOIN 常用于“主表查询 + 关联表可选”场景** | 如“所有用户 + 他们的订单（可能没有）” |
| **避免多表 JOIN 导致性能问题** | 大表 JOIN 时注意索引、查询优化 |

---

## ✅ 总结：JOIN 类型速查表

| JOIN 类型 | 关键字 | 是否返回匹配行 | 是否返回不匹配行 | 说明 |
|----------|--------|----------------|------------------|------|
| **内连接** | `INNER JOIN` 或 `JOIN` | ✅ 只返回匹配的行 | ❌ 不返回 | 最常用，只查有关联的数据 |
| **左连接** | `LEFT JOIN` / `LEFT OUTER JOIN` | ✅ 左表全返回 | ✅ 右表无匹配则为 NULL | 常用于“主表 + 关联表（可选）” |
| **右连接** | `RIGHT JOIN` / `RIGHT OUTER JOIN` | ✅ 右表全返回 | ✅ 左表无匹配则为 NULL | 较少使用，可用 LEFT JOIN 替代 |
| **全外连接** | `FULL OUTER JOIN` | ✅ 左右表都返回 | ✅ 无匹配为 NULL | **MySQL 不支持**，可用 LEFT + RIGHT 模拟 |

---

## 📌 下一步建议

你可以继续尝试以下练习来巩固 JOIN 的使用：

1. ✅ 使用 `INNER JOIN` 查询有订单的用户及订单详情
2. ✅ 使用 `LEFT JOIN` 查询所有用户及其订单（包括没有订单的用户）
3. ✅ 多表 JOIN：查询用户、订单、商品信息
4. ✅ 使用表别名简化 SQL（如 `u` 代表 users，`o` 代表 orders）
5. ✅ 结合 WHERE、ORDER BY、LIMIT 与 JOIN 实现复杂查询

---

如你希望获取：

- ✅ 带有 **实际建表 + 数据 + 多表 JOIN 查询示例**
- ✅ 如何在 **分页查询、数据统计、报表生成** 中使用 JOIN
- ✅ 或者 JOIN 与 **子查询、聚合函数、GROUP BY** 联合使用的实战技巧

欢迎继续提问！我可以为你提供详细的 SQL 实战代码与讲解。