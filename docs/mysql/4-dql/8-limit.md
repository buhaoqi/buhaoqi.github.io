---
noteId: "84cda55075dc11f08787c9dafe86ffae"
tags: []

---

# MySQL 中 DQL 的 LIMIT 子句详解

在 MySQL 中，**DQL（Data Query Language，数据查询语言）** 是用于从数据库中**查询和检索数据**的核心语言，而 **`LIMIT` 子句** 是 DQL（特别是 `SELECT` 查询语句）中用于**限制查询结果返回行数**的重要子句。

它特别常用于以下场景：

- ✅ **分页查询**（如每页显示 10 条，查询第 2 页）
- ✅ **只查看前 N 条记录**（如最新发布的 10 条新闻、销量最高的 5 个商品）
- ✅ **限制大数据量查询结果**，提升性能与用户体验

---

## 一、什么是 DQL 和 LIMIT 子句？

### 🔍 DQL（Data Query Language）：数据查询语言

DQL 是 SQL 的四大子语言之一（其他为 DML、DDL、DCL），它专注于**从数据库中查询数据**，不修改数据。其最常见的形式是：

```sql
SELECT ... FROM ...
```

当我们需要**限制返回的结果行数**时，就会用到：

```sql
LIMIT ...
```

---

### 🎯 LIMIT 子句的作用

> **`LIMIT` 子句用于限制 SELECT 查询返回的结果集的行数（即只返回前 N 条记录，或者跳过 M 条后返回 N 条）。**

简单来说：

- 它可以让你**只获取查询结果中的“一部分”数据**
- 非常适合做 **分页、TopN 查询、数据采样** 等

---

## 二、LIMIT 子句的基本语法

### 1️⃣ 基本形式：只限制返回的行数（返回前 N 条）

```sql
SELECT column1, column2, ...
FROM table_name
[WHERE condition]
[ORDER BY ...]
LIMIT number;
```

- `number`：表示**最多返回多少行数据**

---

### 2️⃣ 高级形式（分页用法）：跳过 M 条，返回 N 条

```sql
SELECT column1, column2, ...
FROM table_name
[WHERE condition]
[ORDER BY ...]
LIMIT offset, count;
-- 或者（MySQL 推荐写法，更清晰）
LIMIT count OFFSET offset;
```

| 参数 | 说明 |
|------|------|
| `offset` | 偏移量，表示跳过前 M 条记录（从 0 开始） |
| `count` 或 `number` | 表示返回的行数（即要取多少条） |

> ✅ 推荐使用：`LIMIT count OFFSET offset`（语义更清晰，尤其在做分页时）

---

## 三、LIMIT 子句的核心功能与用法详解

---

### 1️⃣ 基础用法：只返回前 N 条记录

#### 🎯 场景：
查询员工表，**只查看前 5 名员工**

---

#### ✅ 示例表：employees

| id | name   | department | salary |
|----|--------|------------|--------|
| 1  | 张三   | IT         | 8000   |
| 2  | 李四   | HR         | 7000   |
| 3  | 王五   | IT         | 9000   |
| 4  | 赵六   | Sales      | 6000   |
| 5  | 钱七   | IT         | 8500   |
| 6  | 孙八   | HR         | 7500   |

---

#### ✅ 示例 SQL：只查询前 3 条记录

```sql
SELECT * FROM employees
LIMIT 3;
```

🧾 **结果：返回前 3 行（id 为 1, 2, 3 的员工）**

> ✅ 说明：`LIMIT 3` 表示最多返回 3 行数据，按默认顺序（通常是插入顺序，但强烈建议配合 ORDER BY 使用）

---

### 2️⃣ 基础用法：限制返回数量（简写形式）

```sql
LIMIT 0, 5   -- 跳过 0 条，返回 5 条（即前5条）
LIMIT 5, 5   -- 跳过前 5 条，返回接下来的 5 条（即第6~10条）
```

---

### 3️⃣ 推荐写法：分页查询标准语法（清晰易读）

```sql
LIMIT count OFFSET offset
```

- `offset`：跳过的行数（从 0 开始）
- `count`：返回的行数

#### ✅ 示例：查询第 2 页，每页 3 条记录

假设每页显示 3 条，那么：

- 第 1 页：`LIMIT 3 OFFSET 0` 或 `LIMIT 0, 3`
- 第 2 页：`LIMIT 3 OFFSET 3` 或 `LIMIT 3, 3`
- 第 3 页：`LIMIT 3 OFFSET 6` 或 `LIMIT 6, 3`

---

#### ✅ 示例 SQL：查询第 2 页，每页 3 条（跳过前 3 条，返回后 3 条）

```sql
SELECT * FROM employees
ORDER BY id  -- 通常要排序，否则顺序不确定
LIMIT 3 OFFSET 3;
```

或者：

```sql
SELECT * FROM employees
ORDER BY id
LIMIT 3, 3;  -- MySQL 传统写法：跳过 3 条，取 3 条
```

🧾 **结果：返回第 4、5、6 行数据（即第2页的内容）**

---

### 4️⃣ 常见实用场景：配合 ORDER BY 使用

> ⚠️ 注意：**如果没有指定 ORDER BY，返回的行顺序可能是不确定的！（受存储引擎、插入顺序等影响）**

所以在使用 `LIMIT`（尤其是分页查询）时，强烈建议搭配 `ORDER BY` 一起使用，以确保结果顺序一致。

#### ✅ 示例：按工资降序，查询工资最高的前 3 名员工

```sql
SELECT * FROM employees
ORDER BY salary DESC
LIMIT 3;
```

🧾 **结果：返回工资最高的 3 个员工，按降序排列**

---

#### ✅ 示例：查询销量最高的前 5 个商品

```sql
SELECT product_name, sales_count
FROM products
ORDER BY sales_count DESC
LIMIT 5;
```

---

## 四、LIMIT 子句的常见使用场景总结

| 场景 | 说明 | 示例 |
|------|------|------|
| **查询前 N 条记录** | 如最新发布的 10 条新闻、最新注册的 5 个用户 | `LIMIT 5` |
| **分页查询** | 每页显示固定条数，查询第 N 页数据 | `LIMIT 10 OFFSET 20`（跳过前20条，取10条） |
| **TopN 查询** | 查询销量最高/工资最高/评分最高的前 N 个 | `ORDER BY sales DESC LIMIT 5` |
| **限制大数据查询** | 避免返回过多数据，提高性能与响应速度 | `LIMIT 100` |
| **结合 ORDER BY 使用** | 确保返回结果的顺序是可控的、有意义的 | `ORDER BY date DESC LIMIT 10` |

---

## 五、LIMIT 子句的注意事项

| 注意事项 | 说明 |
|---------|------|
| **LIMIT 限制的是返回的行数，不是跳过的行数** | `LIMIT 5` 返回 5 行，不是跳过 5 行 |
| **LIMIT 推荐与 ORDER BY 一起使用** | 否则返回的数据顺序可能不固定，尤其分页时容易出错 |
| **OFFSET 值过大时性能较差** | 如 `LIMIT 10 OFFSET 100000` 会扫描前 10 万条，再取 10 条，效率低，建议优化索引或使用“上一页/下一页”逻辑 |
| **MySQL 特有语法** | `LIMIT x, y` 是 MySQL 的写法，其他数据库如 PostgreSQL、SQL Server 语法略有不同 |
| **LIMIT 在子查询、UNION 中也可使用** | 但要注意作用范围和上下文逻辑 |

---

## ✅ 总结：LIMIT 子句核心要点速查

| 功能 | 语法/关键词 | 说明 |
|------|-------------|------|
| **限制返回行数** | `LIMIT number` | 只返回前 N 条记录 |
| **分页查询（传统写法）** | `LIMIT offset, count` | 跳过 offset 条，返回 count 条 |
| **分页查询（推荐写法）** | `LIMIT count OFFSET offset` | 更清晰直观，语义明确 |
| **常配合使用** | `ORDER BY ... LIMIT ...` | 确保排序后取前 N 条，用于排行榜、分页等 |
| **性能提示** | 避免大偏移量（如 LIMIT 10 OFFSET 100000） | 可影响查询效率，建议优化 |

---

## 📌 下一步建议

你可以继续尝试以下练习来巩固 `LIMIT` 的使用：

1. ✅ 查询员工表，只显示前 5 名员工
2. ✅ 按工资降序，查询工资最高的 3 名员工
3. ✅ 实现分页查询：每页 5 条，查询第 2 页、第 3 页数据
4. ✅ 查询销量最高的前 10 个商品，并排序
5. ✅ 结合 `ORDER BY` + `LIMIT` 实现“最新发布的 5 篇文章”

---

如你希望获取：

- ✅ 带有 **实际建表 + 数据 + 分页查询的完整 LIMIT 示例**
- ✅ 如何在 **Web 分页、移动端列表、数据导出** 中使用 LIMIT
- ✅ 或者 LIMIT 与 **JOIN、GROUP BY、子查询** 等联合使用的实战技巧

欢迎继续提问！我可以为你提供详细的 SQL 实战代码与讲解。