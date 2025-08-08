---
noteId: "878a36c0743b11f0829f854a790fec25"
tags: []

---

## SELECT语法

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

## SELECT 语句执行顺序

虽然我们写 SQL 是从上往下写的，但 **MySQL 执行时有一定的逻辑顺序**，简化版如下：

1. **FROM** → 先确定数据来源的表
2. **WHERE** → 对数据进行筛选
3. **GROUP BY** → 分组
4. **HAVING** → 对分组后结果筛选
5. **SELECT** → 选择要展示的字段 / 计算
6. **ORDER BY** → 排序
7. **LIMIT** → 限制返回条数

> 所以，写 SQL 时虽然顺序是 `SELECT ... FROM ... WHERE ...`，但理解执行逻辑有助于写出高效查询。

---

## 表达式查询

输出列表达式支持：

- 任何运算表达式，如：算术运算表达式、函数表达式等
- 字段名,多个字段名之间用英文逗号分隔。如果是字段名，必须指明表

### 运算表达式查询

示例

```sql
SELECT 1 + 1;
```
示例

```sql
SELECT RAND(0,10);
```


### 字段查询

定义：字段全部指从数据表中查询特定的字段的全部记录。

语法

```sql
-- 查询所有字段
SELECT 字段1, 字段2 FROM 表名;
```

说明

- 多个字段使用英文逗号分隔
- 表名：要查询的数据表的名称。

示例:只查询学生的姓名和分数

```sql
SELECT name, score FROM students;
```

🔍 返回结果只有 `name` 和 `score` 两列。


示例

```sql
SELECT 姓名,手机,注册时间
FROM Members;
```

---

### 全部查询

定义：查询全部指从数据表中检索所有字段的所有记录。

语法

```sql
-- 查询所有字段
SELECT * FROM 表名;
```

说明

- `*`表示所有字段
- 表名：要查询的数据表的名称。

示例:查询 students 表中的所有数据（所有列）

```sql
SELECT * FROM students;
```


示例: 查询所有列

```sql
SELECT * FROM Members;
```

> ⚠️ 如果要查询Members表中的所有列，不必将所有字段名一一列出，使用`*`可表示所有列。

🔍 **说明：**
- `*` 表示**所有列**
- 结果返回表中所有记录的所有字段

> ⚠️ 生产环境中不建议经常使用 `SELECT *`，因为会影响性能且不明确具体字段。

---

## 别名查询

使用别名(AS)可自定义输出列标题或表名。

如果不使用别名，查询返回的表格字段将使用输出列表达式的名字。

为列名或表名指定别名，增强可读性，可以让 SQL 更简洁，尤其在复杂查询中非常有用。

语法格式

```sql
SELECT 列名 [AS] 列别名 FROM 表名 [AS] 表别名;
```
示例：列别名
```sql
SELECT first_name AS '姓名', salary * 12 AS '年薪' 
FROM employees;
```
示例：列别名
```sql
SELECT name AS 姓名, score AS 分数
FROM students;
```
示例: 表别名
```sql
SELECT s.name, s.score
FROM students AS s;
```
>⚠️ 当自定义的列标题中含有空格，必须使用引号将标题括起来。
>⚠️ 不允许在WHERE子句中使用列别名，这是因为在执行WHERE代码时可能尚未确定列值。

## 去重查询
在某些情况下，可能会出现重复行。可以使用`DISTINCT`关键字去除结果集中的重复行。语法如下：

```sql
SELECT DISTINCT 列名 FROM 表名;
```
示例：列出所有不重复的部门名称。
```sql
SELECT DISTINCT department FROM employees;
```
---

## 计算查询

在 SELECT 中进行计算

查询学生姓名和成绩，并额外显示 “成绩加 5 分” 的结果：

```sql
SELECT name, score, score + 5 AS bonus_score
FROM students;
```

🔍 `score + 5` 是一个计算表达式，`AS bonus_score` 是给这一列起个别名，便于阅读。

> ✅ 你可以对数值、字符串等进行计算或拼接！

函数处理数据

**字符串函数**
```sql
SELECT CONCAT(first_name, ' ', last_name) AS full_name 
FROM employees;
```

**日期函数**
```sql
SELECT name, DATE_FORMAT(hire_date, '%Y-%m') AS hire_month 
FROM employees;
```

**数值函数**
```sql
SELECT product, ROUND(price * 0.9, 2) AS discounted_price 
FROM products;
```
---

## 分页查询

语法
```sql
-- 分页查询
SELECT * FROM 表名 LIMIT 10 OFFSET 20;  -- 返回第21-30条记录
```
示例
```sql
SELECT * FROM orders 
LIMIT 10 OFFSET 20; -- 跳过前20条，取10条（即第21-30条）
```
- **简写**：`LIMIT 20, 10`（等效于`LIMIT 10 OFFSET 20`）。

---

## 排序查询

**作用**：按指定字段排序结果。
**语法**：

```sql
-- 查询排序（ASC升序/DESC降序）
SELECT 列名 
FROM 表名
ORDER BY 列名 ASC ｜ DESC;
```
说明：

- `DESC`：降序（从大到小）
- `ASC`：升序（从小到大，默认值，可省略）

示例：按分数从高到低排序（降序）：

```sql
SELECT name, score
FROM students
ORDER BY score DESC;
```

示例：按年龄从小到大排序：

```sql
SELECT name, age
FROM students
ORDER BY age ASC;
```
示例：
```sql
SELECT name, hire_date FROM employees
ORDER BY hire_date DESC, name ASC;
```
**单字段排序**：

```sql
SELECT * FROM products ORDER BY price DESC; -- 按价格降序
```

**多字段排序**：

```sql
SELECT * FROM employees 
ORDER BY department ASC, salary DESC; -- 先按部门升序，同部门按薪资降序
```

- **说明**：按`hire_date`降序排列，相同日期按`name`升序排列。
- **默认排序**：`ASC`（升序）。

⚠️ **分页性能优化建议**：使用`WHERE id > 1000 LIMIT 10`替代`LIMIT 1000,10`。

---