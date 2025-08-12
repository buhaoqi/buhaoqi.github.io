---
noteId: "52400e7075dc11f08787c9dafe86ffae"
tags: []

---

# MySQL 中 DQL 的 FROM 子句详解

在 MySQL 中，**DQL（Data Query Language，数据查询语言）** 是用于**查询和检索数据**的核心语言，而 **`FROM` 子句** 是 DQL（尤其是 `SELECT` 查询语句）中**必不可少的一部分**，它用于**指定要从哪个表或哪些表中获取数据**。

可以说：

> 🎯 **没有 `FROM` 子句，就没有数据来源，查询就无从谈起。**

---

## 一、什么是 DQL 和 FROM 子句？

### 🔍 DQL（Data Query Language）：数据查询语言

DQL 是 SQL 的四大子语言之一（其他为 DML、DDL、DCL），**专门用于查询数据**，不修改数据。其最常用的形式就是：

```sql
SELECT ... FROM ...
```

### 🎯 FROM 子句

`FROM` 子句用于**指定查询的数据来源**，即告诉 MySQL：

> “我要从哪个表、哪些表、或者哪个查询结果中获取数据？”

它是 `SELECT` 查询的**数据基础**，决定了查询的数据“从哪里来”。

---

## 二、FROM 子句的基本语法

```sql
SELECT column1, column2, ...
FROM table_name
[WHERE condition]
[GROUP BY ...]
[HAVING ...]
[ORDER BY ...]
[LIMIT ...];
```

> ✅ 其中，`FROM table_name` 是查询数据的基础，指明数据来自哪个表。

---

## 三、FROM 子句的核心功能与用法详解

---

### 1️⃣ 基础用法：从单个表查询数据

这是 `FROM` 子句最基本、最常用的用法 —— **从一个表中查询数据**。

#### 🎯 语法：
```sql
SELECT column1, column2, ...
FROM table_name;
```

#### ✅ 示例：

假设有一个 `users` 表：

```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    email VARCHAR(100)
);
```

查询所有用户的姓名和年龄：

```sql
SELECT name, age FROM users;
```

> 🧾 说明：`FROM users` 表示数据来源于 `users` 这张表

---

### 2️⃣ 从多个表查询数据（多表查询基础）

在复杂查询中，我们经常需要**从多个表中联合查询数据**，比如查询“用户及其订单信息”、“商品及其分类信息”等。

此时，`FROM` 子句可以指定**多个表**，通常与 `JOIN` 子句配合使用（但不是必须）。

#### ✅ 示例：从两个表中查询（需结合 JOIN，见扩展）

```sql
SELECT users.name, orders.order_date
FROM users, orders
WHERE users.id = orders.user_id;
```

> ⚠️ 这是早期的**隐式连接写法**（通过 WHERE 实现表关联），现代推荐使用显式的 `JOIN` 语法，更清晰安全。

推荐写法（显式 JOIN，FROM 依然指明数据表来源）：

```sql
SELECT users.name, orders.order_date
FROM users
JOIN orders ON users.id = orders.user_id;
```

> ✅ 说明：`FROM users` 和 `JOIN orders` 表明数据来自两张表，并通过关联条件连接

---

### 3️⃣ 使用表别名（Alias）简化 FROM 子句

为了提高 SQL 的可读性，尤其是在多表查询时，我们可以为表指定一个简短的别名，然后在 `SELECT`、`WHERE`、`JOIN` 等子句中使用该别名。

#### 🎯 语法：
```sql
FROM table_name AS alias
-- 或简写为
FROM table_name alias
```

#### ✅ 示例：

```sql
SELECT u.name, o.order_date
FROM users AS u
JOIN orders AS o ON u.id = o.user_id;
```

或者省略 `AS`：

```sql
SELECT u.name, o.order_date
FROM users u
JOIN orders o ON u.id = o.user_id;
```

> ✅ 说明：
> - `u` 是 `users` 表的别名
> - `o` 是 `orders` 表的别名
> - 使用别名可以让 SQL 更简洁，尤其在多表查询时非常实用

---

### 4️⃣ 从子查询（派生表）中查询数据

`FROM` 子句不仅可以接**实际的表名**，还可以接一个 **子查询（SELECT 语句）**，此时该子查询的结果集被视为一个**临时表（派生表）**，你可以从这个临时结果中进一步查询数据。

#### 🎯 语法：
```sql
FROM (subquery) AS alias
```

#### ✅ 示例：查询平均年龄以上的用户

```sql
SELECT u.*
FROM users u
WHERE u.age > (
    SELECT AVG(age)
    FROM users
);
```

更复杂的例子 —— 从子查询作为表来源：

```sql
SELECT temp.user_id, temp.avg_order_amount
FROM (
    SELECT user_id, AVG(amount) AS avg_order_amount
    FROM orders
    GROUP BY user_id
) AS temp
WHERE temp.avg_order_amount > 100;
```

> ✅ 说明：
> - 子查询 `(SELECT user_id, AVG(amount)...)` 返回每个用户的平均订单金额
> - `FROM (...) AS temp` 表示从这个子查询的结果集中查询数据
> - 子查询结果被当作一张临时表（派生表）使用

---

### 5️⃣ 从多个表联合查询（多表 FROM，不推荐）

虽然不常见，但你也可以在 `FROM` 子句后直接跟多个表名（逗号分隔），然后通过 `WHERE` 指定关联条件 —— 这是早期的**隐式连接语法**，**不推荐在新代码中使用**，而是应该用显式的 `JOIN ... ON` 语法。

#### ❌ 不推荐的写法（隐式连接）：
```sql
SELECT users.name, orders.order_date
FROM users, orders
WHERE users.id = orders.user_id;
```

#### ✅ 推荐写法（显式 JOIN）：
```sql
SELECT users.name, orders.order_date
FROM users
JOIN orders ON users.id = orders.user_id;
```

> ✅ 说明：`FROM` 后可以跟多个表，但一定要配合明确的关联条件，否则会产生**笛卡尔积（大量无效数据）**

---

## 四、FROM 子句的常见使用场景总结

| 场景 | 说明 | 示例 |
|------|------|------|
| **单表查询** | 从一张表中查询字段 | `SELECT * FROM users;` |
| **多表查询（JOIN）** | 从多个表中联合查询，通常配合 JOIN 使用 | `FROM users JOIN orders ON ...` |
| **表别名** | 给表起别名，简化 SQL，提高可读性 | `FROM users u` |
| **子查询作为表** | FROM 后跟一个子查询，将其结果作为临时表使用 | `FROM (SELECT ...) AS temp` |
| **多表列表（不推荐）** | FROM 后跟多个表名，用 WHERE 实现连接（隐式连接，不推荐） | `FROM users, orders WHERE ...` |

---

## 五、FROM 子句的注意事项

| 注意事项 | 说明 |
|---------|------|
| **必选子句（在 SELECT 查询中）** | 在标准 `SELECT ... FROM ...` 查询中，`FROM` 子句是必须的（除非使用特定函数如 `SELECT NOW()` 不查表） |
| **数据来源** | 它指明查询的数据来自哪个物理表、视图、子查询或派生表 |
| **与 JOIN 配合使用** | 在多表查询中，`FROM` 通常与 `JOIN`（如 `INNER JOIN`, `LEFT JOIN`）一起使用，通过 `ON` 指定关联条件 |
| **别名提升可读性** | 使用表别名（如 `users u`）可以让 SQL 更简洁，尤其在复杂查询中 |
| **避免笛卡尔积** | 如果使用多表但没有指定连接条件，会得到所有行的组合（数量 = 表1行数 × 表2行数），通常无意义 |

---

## ✅ 总结：FROM 子句核心要点速查

| 项目 | 说明 |
|------|------|
| **作用** | 指定 SELECT 查询的数据来源（表、视图、子查询等） |
| **基本语法** | `SELECT ... FROM table_name` |
| **多表查询** | 可查询多个表，常与 `JOIN` 配合使用 |
| **表别名** | 可使用 `AS alias` 或直接 `alias` 简化 SQL |
| **子查询作为表** | FROM 后可以跟一个子查询（派生表），用 `AS alias` 引用 |
| **隐式连接（不推荐）** | `FROM 表1, 表2 WHERE ...` 可查询多表但容易产生笛卡尔积 |
| **显式连接（推荐）** | 使用 `FROM 表1 JOIN 表2 ON ...` 更安全清晰 |

---

## 📌 下一步建议

你可以继续尝试以下练习来巩固 `FROM` 子句的使用：

1. ✅ 从单表查询指定字段，熟悉基础 `FROM` 用法
2. ✅ 使用表别名简化多表查询语句
3. ✅ 尝试从两个表中通过 `JOIN` 查询关联数据（如用户与订单）
4. ✅ 使用子查询作为 `FROM` 的数据源，实现更灵活的数据过滤
5. ✅ 避免使用隐式多表查询（逗号分隔），改用显式 JOIN

---

如你希望获取：

- ✅ 带有 **实际建表 + 数据 + 多表 JOIN 查询** 的完整 FROM 示例
- ✅ 如何在 **复杂查询中结合 WHERE / GROUP BY / ORDER BY 使用 FROM**
- ✅ 或者 **FROM 子句与子查询、视图、CTE（公用表表达式）结合的高级用法**

