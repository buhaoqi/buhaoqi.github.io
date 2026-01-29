---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务三 嵌套查询  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务三 嵌套查询  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 4  # 侧边栏中排在第1位
---

## 关于MySQL 嵌套查询（子查询）

嵌套查询（Subquery），也叫 **子查询**，是 MySQL 中非常强大且常用的功能，它允许你**在一个查询中嵌入另一个 SELECT 查询**，从而实现更灵活、更复杂的数据检索。

---

## 🎯 练习目标

通过以下 **10 道基础练习题 + 5 道进阶练习题**，帮助你熟练掌握：

| 类型     | 嵌套查询应用场景                                             |
| -------- | ------------------------------------------------------------ |
| **基础** | WHERE 子句中的标量子查询、IN 子查询、比较子查询等            |
| **进阶** | EXISTS / NOT EXISTS、派生表（FROM 中的子查询）、多层嵌套、结合聚合函数等 |

---

## 题目

> 🧩 **假设我们有如下两张表：**

### 1. `students`（学生表）

| id   | name | age  | gender | score |
| ---- | ---- | ---- | ------ | ----- |
| 1    | 小明 | 18   | 男     | 88.5  |
| 2    | 小红 | 19   | 女     | 92.0  |
| 3    | 小刚 | 18   | 男     | 76.5  |
| 4    | 小丽 | 20   | 女     | 85.0  |
| 5    | 小华 | 19   | 男     | 90.0  |

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    gender VARCHAR(10),
    score DECIMAL(5,2)
);

INSERT INTO students VALUES
(1, '小明', 18, '男', 88.5),
(2, '小红', 19, '女', 92.0),
(3, '小刚', 18, '男', 76.5),
(4, '小丽', 20, '女', 85.0),
(5, '小华', 19, '男', 90.0);
```

---

### 2. `classes`（班级表，可选，用于进阶练习）

| class_id | class_name |
| -------- | ---------- |
| 1        | 一班       |
| 2        | 二班       |
| 3        | 三班       |

---

## 基础练习题（10道）

### **1. 【标量子查询】查找分数高于小丽（id=4）的学生**

> 提示：先查小丽的分数，再查 > 该分数的学生

---

### **2. 【IN 子查询】查找年龄是 18 或 19 的学生**

> 提示：先查有哪些年龄，再用 IN


---

### **3. 【比较子查询】查找分数高于平均分的学生**

> 提示：先查平均分，再查 > 平均分的学生

---

### **4. 【WHERE + 子查询】查找班级中成绩最高的学生（假设每个学生属于某个班级，简化：找出最高分的学生）**

---

### **5. 【EXISTS 子查询】查找存在成绩记录的学生（其实都有，这里只是演示 EXISTS 的用法）**

---

### **6. 【查找分数低于 80 分的学生】使用子查询方式（虽然可以直接筛选，但用子查询方式）**

---

### **7. 【查找所有女生的姓名和分数】用 IN 子查询方式（假设你只知道性别是女）**

---

### **8. 【查找年龄等于某个值（如 18）的学生，用子查询方式】**

---

### **9. 【查找分数等于最高分的学生姓名】**


---

### **10. 【查找所有学生的姓名，以及全班平均分（用子查询显示一个固定值）】**

---


## 总结：嵌套查询类型速查

| 类型                      | 说明                            | 常见关键词                   |
| ------------------------- | ------------------------------- | ---------------------------- |
| **标量子查询**            | 返回单个值，常用于 =、>、< 比较 | `WHERE score > (子查询)`     |
| **IN 子查询**             | 返回多个值，用于 IN (...) 判断  | `WHERE 列 IN (子查询)`       |
| **EXISTS / NOT EXISTS**   | 判断子查询是否有返回行          | `WHERE EXISTS (子查询)`      |
| **派生表（FROM 子查询）** | 子查询结果作为临时表使用        | `FROM (子查询) AS 别名`      |
| **比较运算符 + 子查询**   | 如 > ALL、< ANY 等              | `WHERE score > ALL (子查询)` |

---


## 答案解析（基础练习题）

> 📌 **基础表：students**

| id   | name | age  | gender | score |
| ---- | ---- | ---- | ------ | ----- |
| 1    | 小明 | 18   | 男     | 88.5  |
| 2    | 小红 | 19   | 女     | 92.0  |
| 3    | 小刚 | 18   | 男     | 76.5  |
| 4    | 小丽 | 20   | 女     | 85.0  |
| 5    | 小华 | 19   | 男     | 90.0  |

---

### 题目 1

题目：查找分数高于小丽（id=4）的学生

```sql
SELECT name, score
FROM students
WHERE score > (SELECT score FROM students WHERE id = 4);
```

解析：

- 子查询：`(SELECT score FROM students WHERE id = 4)` → 返回 **小丽的分数：85.0**
- 外层查询：查找 `score > 85.0` 的学生
- 结果：小明(88.5)、小红(92.0)、小华(90.0)

> 🎯 目的：通过子查询先获取某个特定值（小丽的分数），再基于该值做比较筛选

---

### 题目 2

题目：查找年龄是 18 或 19 的学生

普通写法：

```sql
SELECT name, age
FROM students
WHERE age IN (18, 19);
```

子查询方式，演示用：

```sql
SELECT name, age
FROM students
WHERE age IN (SELECT age FROM students WHERE age BETWEEN 18 AND 19);
```

解析：

- 子查询返回年龄为 18 或 19 的值：`(18, 18, 19, 19)`
- 外层 `IN` 匹配这些年龄，返回对应学生
- 目的：演示 IN 子查询的基本用法，虽然这个例子可以直接写 `WHERE age IN (18,19)`

---

### 题目 3

题目：查找分数高于平均分的学生

答案：

```sql
SELECT name, score
FROM students
WHERE score > (SELECT AVG(score) FROM students);
```

解析：

- 子查询：`(SELECT AVG(score) FROM students)` → 计算所有学生的平均分，约为 **86.4**
- 外层查询筛选出 `score > 86.4` 的学生
- 结果：小红(92.0)、小华(90.0)、小明(88.5)

> 🎯 目的：通过子查询先计算聚合值（平均数），再做比较

---

### 题目 4

题目：查找分数最高的学生

```sql
SELECT name, score
FROM students
WHERE score = (SELECT MAX(score) FROM students);
```

解析：

- 子查询：`(SELECT MAX(score) FROM students)` → 返回最高分：**92.0**
- 外层查询：找出分数等于 92.0 的学生
- 结果：小红（92.0）

> 🎯 目的：查找极值（最大值/最小值）是子查询常见用法

---

### 题目 5

题目：查找存在成绩记录的学生（演示 EXISTS 的用法）

```sql
SELECT name
FROM students s
WHERE EXISTS (SELECT 1 FROM students WHERE id = s.id);
```

解析：

- `EXISTS` 用于判断子查询是否返回了 **任意一行**
- 这里子查询对每个学生都返回 1 行 → 所有学生都满足
- 常用于更复杂的关联场景，比如“存在匹配的订单”、“存在关联的用户”等

> 🎯 EXISTS 不关心返回的具体内容，只关心有没有结果

---

### 题目 6

题目：查找分数低于 80 分的学生（用子查询方式）

```sql
SELECT name, score
FROM students
WHERE score < (SELECT 80);
```

> ❌ 无意义，仅作语法示意

更实用的写法（结合计算）：

```sql
SELECT name, score
FROM students
WHERE score < (SELECT AVG(score) - 10 FROM students);
```

- 假设平均分是 86.4，则 86.4 - 10 ≈ 76.4
- 查找分数 < 76.4 的学生 → 小刚（76.5 几乎不满足，视实际计算而定）

> 🎯 目的：演示如何从子查询获取“动态阈值”来进行比较

---

### 题目 7

题目：查找所有女生的姓名和分数（用 IN 方式，仅演示）

```sql
SELECT name, score
FROM students
WHERE gender = '女';
```

或者（不实用，仅演示 IN）：

```sql
SELECT name, score
FROM students
WHERE gender IN (SELECT gender FROM students WHERE gender = '女');
```

> 🎯 目的：理解 IN 的基本语法，虽然这个例子可以直接用 `WHERE gender = '女'`

---

### 题目 8

题目：查找年龄等于某个值（如 18）的学生（用子查询方式）

```sql
SELECT name, age
FROM students
WHERE age = (SELECT age FROM students WHERE name = '小明');
```

- 子查询返回小明的年龄：18
- 外层查询找出 age = 18 的学生 → 小明、小刚

> 🎯 目的：通过子查询获取某个值，再做等值比较

---

### 题目 9

题目：查找分数等于最高分的学生姓名

```sql
SELECT name, score
FROM students
WHERE score = (SELECT MAX(score) FROM students);
```

- 和第 4 题一样，查找最高分对应的学生 → 小红

---

### 题目 10

题目：查找所有学生的姓名和分数，以及全班平均分

答案：

```sql
SELECT 
    name, 
    score,
    (SELECT AVG(score) FROM students) AS class_avg
FROM 
    students;
```

- `(SELECT AVG(score) FROM students)` → 返回一个值（比如 86.4）
- 对 **每一行学生数据**，都显示该平均分
- 常用于报表中展示“个体 + 整体统计”

> 🎯 目的：标量子查询用在 SELECT 中，为每行附加一个聚合信息

---

