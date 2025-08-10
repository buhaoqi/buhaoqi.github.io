---
noteId: "ae8c4a9075dc11f08787c9dafe86ffae"
tags: []

---

# MySQL 中 UNION 关键词的用法详解

在 MySQL 中，**UNION** 是 SQL 中用于**合并多个 SELECT 查询结果集**的一个重要关键词。它允许你将**两个或多个 SELECT 语句的查询结果合并成一个结果集返回**，常用于**数据汇总、对比、拼接多个查询结果**的场景。

---

## 一、什么是 UNION？

> ✅ **UNION 用于将多个 SELECT 查询的结果集合并为一个结果集，去除重复行（默认情况下）。**

简单来说：

- 你可以写多个 `SELECT` 语句
- 用 `UNION` 把它们“竖着拼接”在一起（即**合并多张表的查询结果行**）
- 最终返回**一个整体结果集**，包含所有查询的行

---

## 二、UNION 的作用

| 功能 | 说明 |
|------|------|
| ✅ **合并多个查询结果** | 将多个 SELECT 的结果“拼接”成一个结果集 |
| ✅ **默认去重** | 如果多条记录完全相同，UNION 会自动去重（只保留一行） |
| ✅ **简化数据汇总** | 比如查询“北京和上海的用户”，可以分别查再合并 |
| ✅ **对比数据** | 比如查询“男性用户”和“女性用户”的统计，分别查再合并展示 |

---

## 三、UNION 的基本语法

```sql
SELECT column1, column2, ...
FROM table1
[WHERE condition]

UNION

SELECT column1, column2, ...
FROM table2
[WHERE condition]

[ORDER BY ...]
[LIMIT ...];
```

> ✅ 重要规则：
> - **每个 SELECT 语句的列数必须相同**
> - **对应列的数据类型应该兼容（或可隐式转换）**
> - **列名以第一个 SELECT 语句的列名为准**
> - **ORDER BY / LIMIT 只能放在最后一个 SELECT 之后，作用于整个 UNION 结果**

---

## 四、UNION 的两种形式

| 关键词 | 是否去重 | 说明 |
|--------|----------|------|
| **UNION** | ✅ 自动去重（默认） | 相同的行只保留一行 |
| **UNION ALL** | ❌ 不去重 | 所有行都保留，包括重复的，性能更高 |

---

### ✅ 1. UNION（去重）

只返回**不重复的行**。如果多个 SELECT 返回了相同的结果行，**只会显示一次**。

#### 🎯 示例场景：

- 查询“北京的用户”和“上海的用户”
- 两个城市可能有同名用户，或者有用户同时出现在两个查询中（虽然实际业务中不太可能）
- 使用 `UNION` 会**自动去重**

---

#### ✅ 示例：查询部门为 'IT' 或 'HR' 的员工（去重）

假设有一张 `employees` 表：

| id | name   | department |
|----|--------|------------|
| 1  | 张三   | IT         |
| 2  | 李四   | HR         |
| 3  | 王五   | IT         |
| 4  | 赵六   | IT         |
| 5  | 钱七   | HR         |

---

#### ✅ SQL 示例：

```sql
SELECT name, department
FROM employees
WHERE department = 'IT'

UNION

SELECT name, department
FROM employees
WHERE department = 'HR';
```

🧾 **结果：返回所有在 IT 或 HR 部门的员工，自动去重（如果某员工同时属于两个部门则只显示一次，但现实中一般不会）**

> ✅ 相当于：`部门 IN ('IT', 'HR')`，但这里是为了演示 UNION 的用法

---

### ✅ 2. UNION ALL（不去重）

返回**所有行，包括重复的行**。性能比 `UNION` 更高，因为不需要去重操作。

#### 🎯 示例：查询所有 IT 和 HR 部门的员工（包含重复，如果有的话）

```sql
SELECT name, department
FROM employees
WHERE department = 'IT'

UNION ALL

SELECT name, department
FROM employees
WHERE department = 'HR';
```

🧾 **结果：返回所有匹配的行，即使有完全相同的数据，也会显示多次**

> ✅ 适用于：数据本来就不会重复，或者你希望保留重复项的场景，比如统计总数时

---

## 五、UNION 的使用要点与注意事项

### ✅ 1. 每个 SELECT 的列数必须相同

```sql
-- 正确：两个查询都返回 2 列
SELECT name, age FROM users
UNION
SELECT name, age FROM customers;

-- 错误：列数不同
SELECT name, age FROM users
UNION
SELECT name FROM customers;  -- 列数不匹配，会报错
```

---

### ✅ 2. 对应列的数据类型应该兼容

虽然不要求完全一致，但应尽量保证类型可转换，比如：

- INT 和 BIGINT
- VARCHAR 和 CHAR
- 日期类型等

如果类型差异太大可能导致错误或意外结果。

---

### ✅ 3. 列名以第一个 SELECT 为准

```sql
SELECT name, age FROM users   -- 结果列名是 name, age
UNION
SELECT username, user_age FROM customers  -- 列名仍显示为 name, age
```

> 🧾 最终结果集的字段名以**第一个 SELECT 的字段名**为准

---

### ✅ 4. 排序与分页：ORDER BY / LIMIT 要放在最后

你不能对每个 SELECT 单独排序，而是应该：

```sql
SELECT name FROM table1
UNION
SELECT name FROM table2
ORDER BY name;  -- 对整个 UNION 结果排序
```

#### ✅ 示例：合并查询后按名字排序

```sql
SELECT name FROM employees WHERE department = 'IT'
UNION
SELECT name FROM employees WHERE department = 'HR'
ORDER BY name ASC;
```

---

### ✅ 5. 可以联合多个 SELECT（不止两个）

你可以使用多个 `UNION` 连接 3 个、4 个甚至更多 SELECT 查询：

```sql
SELECT name FROM table1
UNION
SELECT name FROM table2
UNION
SELECT name FROM table3;
```

---

## 六、UNION 的常见使用场景

| 场景 | 说明 | 示例 |
|------|------|------|
| **合并多个分类数据** | 如查询多个城市的用户、多个部门的员工 | `WHERE city = '北京' UNION WHERE city = '上海'` |
| **统计不同类型的数据** | 如查询男性和女性用户，再合并展示 | 分别查后 UNION |
| **拼接查询结果** | 比如查询今日订单 + 昨日订单 | 分别查后合并 |
| **去重合并** | 使用 `UNION` 自动去重，避免重复数据 | 比如多个来源的用户列表 |
| **不去重合并** | 使用 `UNION ALL` 提高性能，保留重复项 | 比如统计总数、日志合并 |

---

## ✅ 总结：UNION 关键点速查表

| 功能 | 语法/关键词 | 说明 |
|------|-------------|------|
| **合并查询结果** | `SELECT ... UNION SELECT ...` | 将多个 SELECT 的结果拼接成一个结果集 |
| **自动去重** | `UNION` | 相同行只保留一行（默认） |
| **不去重合并** | `UNION ALL` | 所有行都保留，包括重复，性能更高 |
| **列要求** | 列数相同，类型兼容 | 每个 SELECT 必须返回相同数量的列 |
| **列名规则** | 以第一个 SELECT 的列名为准 | 结果集字段名看第一个查询 |
| **排序与分页** | `ORDER BY` / `LIMIT` 放在最后 | 对整个 UNION 结果生效 |
| **多表/多查询合并** | 可 UNION 多个 SELECT | 不限于两个查询 |

---

## 📌 下一步建议

你可以继续尝试以下练习来巩固 UNION 的使用：

1. ✅ 查询两个部门的员工并合并结果（用 UNION）
2. ✅ 查询多个城市的用户数据并去重显示
3. ✅ 使用 `UNION ALL` 合并多个日志表/来源数据，提高查询效率
4. ✅ 合并查询后按某个字段排序（如按名字、日期排序）
5. ✅ 将 UNION 和 WHERE、ORDER BY、LIMIT 等子句组合使用

---

如你希望获取：

- ✅ 带有 **实际建表 + 数据 + UNION 查询示例**
- ✅ 如何在 **数据统计、报表合并、多来源数据整合** 中使用 UNION
- ✅ 或者 UNION 与 **JOIN、GROUP BY、子查询** 联合使用的实战技巧

