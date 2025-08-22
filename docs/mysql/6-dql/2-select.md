---
noteId: "fe90fcf0482511f0a6929b02b627d898"
tags: []

---


# MySQL 中 DQL 的 SELECT 子句详解

在 MySQL 中，**DQL（Data Query Language，数据查询语言）** 是用于**查询和检索数据**的语言，而 **`SELECT` 语句** 是 DQL 中最核心、最常用的部分，用于从数据库表中**查询数据并返回结果集**。

---

## 一、什么是 DQL 和 SELECT 子句？

### 🔍 DQL（Data Query Language）：数据查询语言

DQL 是 SQL 的四大子语言之一（另外三个是 DML、DDL、DCL），**专门用于查询数据**，不修改数据。其核心语句就是：

```sql
SELECT ... FROM ...
```

### 🎯 SELECT 子句

`SELECT` 子句是 DQL 的**主体部分**，用于指定：

- **要查询哪些列（字段）**
- **是否使用表达式、函数、计算字段**
- **是否使用别名**
- **是否进行数据聚合、筛选、排序等操作**

可以说，**`SELECT` 子句决定了查询结果的内容与格式**。

---

## 二、SELECT 子句的基本语法

```sql
SELECT 
    [DISTINCT] 
    select_expression1 [AS alias1], 
    select_expression2 [AS alias2], 
    ...
FROM 
    table_name
[WHERE condition]
[GROUP BY column]
[HAVING group_condition]
[ORDER BY column [ASC|DESC]]
[LIMIT number];
```

> ✅ 其中，`SELECT ... FROM ...` 是最基础、必选的部分，其它如 `WHERE` / `GROUP BY` / `ORDER BY` / `LIMIT` 是可选的子句，用于进一步筛选、分组、排序与限制结果。

---

## 三、SELECT 子句的核心功能详解

下面我们逐部分详解 SELECT 子句中常用的功能与用法。

---

### 1️⃣ 基础查询：选择表中的字段

#### 🎯 语法：
```sql
SELECT column1, column2, ... FROM table_name;
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

插入测试数据后，查询所有用户的姓名和年龄：

```sql
SELECT name, age FROM users;
```

> 🧾 结果：返回所有记录的 `name` 和 `age` 字段

---

### 2️⃣ 查询所有字段：使用 `*`

#### 🎯 语法：
```sql
SELECT * FROM table_name;
```

#### ✅ 示例：
```sql
SELECT * FROM users;
```

> ⚠️ 注意：虽然方便，但在生产环境中**不建议滥用 `SELECT *`**，因为它：
> - 会返回所有列，可能包含敏感信息或不必要的数据
> - 影响查询性能（尤其大表）
> - 不利于代码可读性与维护性

✅ 推荐明确列出需要的字段，如：`SELECT id, name, age`

---

### 3️⃣ 使用表达式与计算字段

你可以在 `SELECT` 中使用 **算术运算、函数、字符串拼接等表达式**，生成新的计算字段。

#### ✅ 示例 1：计算总价（数量 × 单价）
```sql
SELECT product_name, quantity, price, quantity * price AS total_price
FROM order_items;
```

#### ✅ 示例 2：拼接姓名（名字 + 空格 + 姓氏）
```sql
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;
```

#### ✅ 示例 3：年龄加 1（模拟明年年龄）
```sql
SELECT name, age, age + 1 AS age_next_year FROM users;
```

> ✅ 这些表达式的结果可以作为虚拟列（计算字段）展示在结果集中，并可用 `AS` 起别名

---

### 4️⃣ 使用别名：`AS` 关键字（可省略）

为字段或表起一个临时的别名，便于阅读或处理。

#### 字段别名：
```sql
SELECT name AS username, age AS user_age FROM users;
```

#### 表别名（常用于多表查询）：
```sql
SELECT u.name, o.order_date
FROM users AS u
JOIN orders AS o ON u.id = o.user_id;
```

> ⚠️ `AS` 是可选的，可以简写为：
```sql
SELECT name username, age user_age FROM users;
```

---

### 5️⃣ 去重查询：`DISTINCT`

用于**去除查询结果中的重复行**，只返回唯一的记录。

#### 🎯 语法：
```sql
SELECT DISTINCT column1, column2, ... FROM table_name;
```

#### ✅ 示例：查询所有不同的城市（去重）
```sql
SELECT DISTINCT city FROM users;
```

> ✅ 适用于：查询不重复的分类、状态、地区、标签等

> ⚠️ 注意：`DISTINCT` 是针对**所有选定列的组合去重**，不是单列独立去重

---

### 6️⃣ 常用函数结合 SELECT（聚合 / 字符串 / 日期等）

你可以在 `SELECT` 子句中使用各种 **MySQL 内置函数**，比如：

| 函数类型 | 示例 | 说明 |
|---------|------|------|
| **聚合函数** | `COUNT(*)`, `SUM(price)`, `AVG(age)`, `MAX(salary)`, `MIN(quantity)` | 用于统计、汇总 |
| **字符串函数** | `CONCAT()`, `UPPER()`, `LOWER()`, `SUBSTRING()` | 文本处理 |
| **数学函数** | `ROUND()`, `CEIL()`, `FLOOR()`, `ABS()` | 数值计算 |
| **日期函数** | `NOW()`, `CURDATE()`, `DATE_FORMAT()` | 日期时间处理 |

#### ✅ 示例：统计用户总数
```sql
SELECT COUNT(*) AS total_users FROM users;
```

#### ✅ 示例：查询当前日期
```sql
SELECT NOW();  -- 返回当前日期时间
SELECT CURDATE(); -- 返回当前日期
```

---

## 四、SELECT 子句的常见组合用法

在实际开发中，`SELECT` 往往与其他子句一起使用，比如：

| 子句 | 说明 | 示例 |
|------|------|------|
| `WHERE` | 条件筛选 | `SELECT * FROM users WHERE age > 18;` |
| `GROUP BY` | 分组统计 | `SELECT department, COUNT(*) FROM employees GROUP BY department;` |
| `HAVING` | 分组后过滤 | `SELECT department, AVG(salary) FROM employees GROUP BY department HAVING AVG(salary) > 5000;` |
| `ORDER BY` | 排序 | `SELECT * FROM products ORDER BY price DESC;` |
| `LIMIT` | 限制返回行数 | `SELECT * FROM users LIMIT 10;` |

---

## 五、SELECT 子句的完整实战示例

### ✅ 示例：查询用户姓名、年龄，并计算明年年龄，只显示年龄大于 18 的用户，去重姓名

```sql
SELECT DISTINCT 
    name,
    age,
    age + 1 AS age_next_year
FROM users
WHERE age > 18;
```

### ✅ 示例：查询订单表中每个用户的总消费金额（数量 × 单价），并显示用户名

```sql
SELECT 
    u.name AS user_name,
    o.order_id,
    SUM(o.quantity * o.price) AS total_spent
FROM orders o
JOIN users u ON o.user_id = u.id
GROUP BY u.name, o.order_id;
```

---

## ✅ 总结：SELECT 子句核心功能速查表

| 功能 | 语法/关键词 | 说明 |
|------|-------------|------|
| **选择字段** | `SELECT col1, col2` | 指定要查询的列 |
| **查询所有字段** | `SELECT *` | 查询所有列（不推荐在生产中使用） |
| **计算字段** | `col1 + col2`, `CONCAT()`, `quantity * price` | 使用表达式生成新列 |
| **字段别名** | `AS alias` 或直接 `alias` | 为字段或表设置临时名称 |
| **去重查询** | `DISTINCT` | 去除结果中的重复行 |
| **函数使用** | `COUNT()`, `SUM()`, `CONCAT()`, `NOW()` 等 | 内置函数用于统计、格式化、计算等 |
| **组合查询** | 与 `WHERE` / `GROUP BY` / `ORDER BY` / `LIMIT` 一起使用 | 实现筛选、分组、排序、分页等 |

---

## 📌 下一步建议

你可以继续尝试以下练习来巩固 SELECT 子句的使用：

1. ✅ 查询某个表中的指定字段，并使用别名提高可读性
2. ✅ 使用表达式计算新字段（如总价、年龄+1、拼接字符串）
3. ✅ 使用 `DISTINCT` 查询不重复的分类或状态
4. ✅ 结合 `WHERE` 条件筛选出特定数据
5. ✅ 在查询中使用聚合函数如 `COUNT`、`SUM`、`AVG` 进行统计

---

如你希望获取：

- ✅ 带有 **实际建表 + 数据 + 复杂查询** 的完整 SELECT 示例
- ✅ 如何实现 **多表 JOIN 查询中的 SELECT 字段控制**
- ✅ 或者 **SELECT 与子查询、窗口函数结合的高级用法**

欢迎继续提问！我可以为你提供详细的实战 SQL 代码与讲解。


