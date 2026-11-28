---
title: 数据查询
description: 介绍 SELECT 语句的完整用法，包括基本查询、条件查询、排序、分组聚合、多表连接、子查询与 UNION 合并查询。
keywords: [MySQL, SELECT, WHERE, ORDER BY, GROUP BY, HAVING, INNER JOIN, LEFT JOIN, 子查询, UNION, 聚合函数, 对口升学]
sidebar_label: 4.1 数据查询
sidebar_position: 1
slug: /mysql/ch04/1-data-query
tags: [MySQL, 第四章, DML, 对口升学]
---

## 知识点

### 4.1.1 基本查询

**SELECT 语句基本结构**：

```sql
SELECT [DISTINCT] 字段列表 | 表达式 | *
FROM 表名
[WHERE 条件]
[GROUP BY 分组字段 [HAVING 分组条件]]
[ORDER BY 排序字段 [ASC|DESC]]
[LIMIT 起始位置, 记录数];
```

```sql
SELECT * FROM students;                       -- 查询所有字段
SELECT sno, sname FROM students;              -- 查询指定字段
SELECT sname, sage * 2 AS double_age FROM students;  -- 查询表达式
SELECT sname AS 姓名, sage 年龄 FROM students;        -- 设置别名（AS 可省略）
SELECT DISTINCT ssex FROM students;           -- 消除重复行
```

- `*` 表示查询所有字段；
- `AS` 用于设置字段或表的别名，可省略；
- `DISTINCT` 用于去掉重复的结果行。

### 4.1.2 条件查询：`WHERE`

**常用运算符**：

| 类别 | 运算符 |
| --- | --- |
| 比较运算 | `=`、`!=` / `<>`、`>`、`<`、`>=`、`<=` |
| 逻辑运算 | `AND`（&&）、`OR`（\|\|）、`NOT`（!） |
| 范围查询 | `BETWEEN ... AND ...`、`NOT BETWEEN ... AND ...` |
| 集合查询 | `IN (值列表)`、`NOT IN (...)` |
| 模糊查询 | `LIKE`、`NOT LIKE`，配合通配符 `%`（任意多个字符）和 `_`（一个字符） |
| 空值查询 | `IS NULL`、`IS NOT NULL` |

```sql
SELECT * FROM students WHERE sage > 18 AND ssex = '女';
SELECT * FROM students WHERE sage BETWEEN 18 AND 22;
SELECT * FROM students WHERE sno IN ('001', '003', '005');
SELECT * FROM students WHERE sname LIKE '张%';     -- 姓张的学生
SELECT * FROM students WHERE sname LIKE '_三%';    -- 第二个字是"三"
SELECT * FROM students WHERE sage IS NULL;         -- 不能用 = NULL
```

> ⚠️ 判断空值必须用 `IS NULL` / `IS NOT NULL`，`= NULL` 永远不成立。

### 4.1.3 排序查询：`ORDER BY`

```sql
SELECT * FROM students ORDER BY sage ASC;              -- 升序（默认）
SELECT * FROM students ORDER BY sage DESC;             -- 降序
SELECT * FROM students ORDER BY ssex ASC, sage DESC;   -- 多字段排序
```

- `ASC` 升序（默认），`DESC` 降序；
- 多字段排序时，先按第一个字段排，相同再按第二个字段排；
- `ORDER BY` 必须位于 `WHERE` 之后、`LIMIT` 之前。

### 4.1.4 分组与聚合查询

**聚合函数**：

| 函数 | 作用 |
| --- | --- |
| `COUNT()` | 统计记录数（`COUNT(*)` 统计所有行，`COUNT(字段)` 忽略 NULL） |
| `SUM()` | 求和 |
| `AVG()` | 求平均值 |
| `MAX()` | 求最大值 |
| `MIN()` | 求最小值 |

```sql
SELECT COUNT(*) FROM students;                        -- 总人数
SELECT AVG(sage) FROM students;                       -- 平均年龄
SELECT ssex, COUNT(*) AS 人数 FROM students GROUP BY ssex;            -- 分组统计
SELECT ssex, COUNT(*) FROM students GROUP BY ssex HAVING COUNT(*) > 2; -- 分组后筛选
SELECT ssex, cno, COUNT(*) FROM students GROUP BY ssex, cno;          -- 多字段分组
```

> `WHERE` 在分组**前**过滤记录，`HAVING` 在分组**后**过滤分组结果；`HAVING` 可使用聚合函数，`WHERE` 不能。

### 4.1.5 多表连接查询

```sql
-- 内连接：只返回两表匹配的记录
SELECT s.sname, c.cname
FROM students s INNER JOIN courses c ON s.cno = c.cno;

-- 左外连接：返回左表全部记录 + 右表匹配记录（不匹配填 NULL）
SELECT s.sname, c.cname
FROM students s LEFT JOIN courses c ON s.cno = c.cno;

-- 右外连接：返回右表全部记录 + 左表匹配记录
SELECT s.sname, c.cname
FROM students s RIGHT JOIN courses c ON s.cno = c.cno;
```

- `ON` 指定连接条件；
- `INNER JOIN` 可简写为 `JOIN`；
- 连接条件写在 `ON` 后用 `ON`，写在 `WHERE` 中用逗号分隔表（旧式写法）。

### 4.1.6 子查询

子查询是嵌套在另一个 SQL 语句中的 `SELECT` 语句，又称嵌套查询。

```sql
-- 单行子查询（返回一条记录）
SELECT * FROM students
WHERE sage > (SELECT AVG(sage) FROM students);

-- 多行子查询（返回多条记录，配合 IN / ANY / ALL）
SELECT * FROM students
WHERE cno IN (SELECT cno FROM courses WHERE cname = '计算机');

-- FROM 子句中的子查询（派生表，必须有别名）
SELECT t.ssex, t.avg_age
FROM (SELECT ssex, AVG(sage) AS avg_age FROM students GROUP BY ssex) AS t;
```

- 单行子查询用比较运算符（`=`、`>` 等）；
- 多行子查询用 `IN`、`ANY`、`ALL`；
- 子查询的执行顺序：先内层后外层。

### 4.1.7 合并查询结果：`UNION`

```sql
SELECT sname FROM students WHERE ssex = '男'
UNION
SELECT sname FROM teachers WHERE ssex = '男';

SELECT sname FROM students
UNION ALL
SELECT sname FROM teachers;
```

- `UNION`：合并结果并**自动去重**；
- `UNION ALL`：合并结果**保留重复行**，效率更高；
- 合并规则：两个查询的**列数必须相同**，对应列的数据类型应兼容；最终列名取第一个查询的列名；
- `ORDER BY` / `LIMIT` 只能出现在最后一条查询语句中。

## 考点提示

- 高频考点：`SELECT` 完整语法顺序、`WHERE` 与 `HAVING` 的区别、`GROUP BY` 与聚合函数配合。
- 易错点：`LIKE` 中 `%`（多个字符）与 `_`（一个字符）的区别；空值判断用 `IS NULL`。
- 左连接保留左表全部记录，右连接保留右表全部记录——常以选择题形式考查。
- `UNION` 去重，`UNION ALL` 不去重。
