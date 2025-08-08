---
noteId: "fe90fcf0482511f0a6929b02b627d898"
tags: []

---

在 **MySQL** 中，`SELECT` 语句是 **最核心、最常用** 的 SQL 语句，它用于从数据库表中 **查询（检索）数据**。

可以说：**学会 SELECT，你就学会了 MySQL 数据查询的基础！**

---

## 数据查询是什么

将数据存储在数据库中的最主要目的就是在需要数据的时候能方便有效的对数据进行查询检索、统计或组织输出。这种操作就是数据查询。


## SELECT语句的概念

> **SELECT 语句用于从数据库的一个或多个表中查询数据，并将结果以临时表格形式返回。**

简单说，SELECT语句用于根据指定条件对数据进行检索。你可以用它来：

- 查询表中的全部或部分字段
- 检索满足某些条件的记录
- 对查询结果排序、分组、限制数量
- 对数据进行计算、拼接、函数处理等

---

## SELECT 语句的基本语法

```sql
SELECT [ALL | DISTINCT] 输出列表达式1,输出列表达式2, ...
[FROM 表名]                          /*FROM子句*/
[WHERE 条件]                         /*WHERE子句*/
[GROUP BY 列名]                      /*GROUP BY子句*/
        [ASC | DESC]
[HAVING 群组后条件]                   /*HAVING子句*/
[ORDER BY 列名|表达式｜列编号 ]        /*ORDER BY子句*/
        [ASC|DESC]
[LIMIT 偏移量 行｜列数 OFFSET 偏移量];  /*LIMIT子句*/
```

> ⚠️ 1. 中括号 `[ ]` 表示这部分是**可选的**，不是必须的。
> 
> ⚠️ 2. 所有子句必须按语法说明的顺序严格排序，例如HAVING子句必须位于GROUP BY子句后，ORDER BY子句前

---

## 语法说明

| 关键字 | 作用 | 是否必填 |
|--------|------|----------|
| `SELECT` | 指定要查询的列（字段） | ✅ 必须 |
| `FROM` | 指定数据来源的表 | ❌ 可选 |
| `WHERE` | 指定筛选条件，只返回符合条件的记录 | ❌ 可选 |
| `GROUP BY` | 按某个字段分组，常与聚合函数一起使用 | ❌ 可选 |
| `HAVING` | 对分组后的结果进行筛选（类似 WHERE，但用于 GROUP BY 后） | ❌ 可选 |
| `ORDER BY` | 对查询结果排序（升序/降序） | ❌ 可选 |
| `LIMIT` | 限制返回的记录条数 | ❌ 可选 |

解析：

1. **`SELECT` 是核心查询语句（Statement）**  
2. `SELECT...FROM...WHERE...` 构成一个基本的 **SELECT 语句结构**
3. **`FROM`/`WHERE`/`GROUP BY` 等是子句（Clause）**  它们是构成 SELECT 语句的 **组成部分**，每个子句有特定功能：
     - `FROM`：指定数据来源的表
     - `WHERE`：过滤行数据
     - `GROUP BY`：分组聚合
     - 等等...
4. **类比理解**  
   ```sql
   SELECT 列名        -- 相当于"要显示什么"
   FROM 表名          -- 相当于"从哪取数据"
   WHERE 条件         -- 相当于"筛选哪些行"
   ```
6. 注意：**`DISTINCT` 是关键字（Keyword）**，不是子句，它修饰 SELECT 的行为。 
7. **SELECT语句的执行顺序**与书写顺序不同：

---

## 示例表结构

我们以一个简单的表 `students` 为例：

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    gender VARCHAR(10),
    score DECIMAL(5,2)
);

INSERT INTO students (id, name, age, gender, score) VALUES
(1, '小明', 18, '男', 88.5),
(2, '小红', 19, '女', 92.0),
(3, '小刚', 18, '男', 76.5),
(4, '小丽', 20, '女', 85.0),
(5, '小华', 19, '男', 90.0);
```

---

## SELECT 语句的核心要点

| 功能 | 关键词 | 说明 |
|------|--------|------|
| 查询所有列 | `SELECT * FROM 表` | 查询全部字段 |
| 查询指定列 | `SELECT 列1, 列2 FROM 表` | 只查需要的列 |
| 条件筛选 | `WHERE 条件` | 如 `age > 18` |
| 排序 | `ORDER BY 列 [ASC|DESC]` | 升序或降序 |
| 限制条数 | `LIMIT 数量` | 如 `LIMIT 5` |
| 计算/表达式 | `SELECT 列 + 1, ...` | 支持运算与函数 |
| 别名 | `AS 别名` | 让列名或表名更易读 |
| 组合使用 | 多个子句组合 | 如 `WHERE + ORDER BY + LIMIT` |

---

## 推荐学习路径

| 阶段 | 学习内容 |
|------|----------|
| 初级 | `SELECT * FROM 表`、查询指定列、WHERE 条件、ORDER BY、LIMIT |
| 中级 | 计算字段、别名、聚合函数（COUNT, AVG...）、GROUP BY |
| 高级 | 多表查询（JOIN）、子查询、UNION、索引优化等 |

---


😊 **掌握 SELECT，你就掌握了 MySQL 数据世界的大门！**
