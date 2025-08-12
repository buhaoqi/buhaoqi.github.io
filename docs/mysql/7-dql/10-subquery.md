---
noteId: "d2c7f2a0742011f0ac7f012540a4f7e6"
tags: []

---
# ✅ MySQL 中的嵌套查询详解（子查询 Subquery）

在 **MySQL** 中，**嵌套查询（Nested Query）**，也叫 **子查询（Subquery）**，指的是：

> **在一个 SQL 查询语句中，嵌入了另一个 SELECT 查询语句。**

换句话说：**在一个查询的某个部分（如 WHERE、FROM、SELECT 等）中，又使用了另一个完整的 SELECT 语句。**

---

## 🎯 一、什么是嵌套查询（子查询）？

### 简单定义：

> **子查询是一个 SELECT 语句，它被嵌套在另一个 SQL 语句（通常是外层查询）的内部，用于提供数据或条件。**

### 直观理解：

可以把子查询想象成：**用一个小查询的结果，去帮助完成一个大查询。**

---

## 🧠 二、为什么要用嵌套查询？

有时候，你想要查询的数据**不能直接通过一张表或简单条件得到**，比如：

- 你想查找 **“比某个学生成绩高的所有学生”** → 但你不知道那个“某个学生”的成绩是多少
- 你想查找 **“销量高于平均销量的商品”** → 但你不能直接写“> 平均数”，因为平均数需要先计算
- 你想基于 **某个查询结果集** 再进一步筛选、连接或展示

这时候，你就可以使用 **子查询**，**先通过一个小查询得到一个值、一组值或一个临时表，再在外层查询中使用它**。

---

## ✅ 三、嵌套查询的基本语法结构

子查询可以出现在 SQL 的多个位置，最常见的有：

### 1️⃣ 子查询在 WHERE 子句中（最常见）

```sql
SELECT 列名
FROM 表名
WHERE 列名 比较运算符 (子查询);
```

🔹 子查询返回 **单个值**，常与 `=`, `>`, `<`, `>=`, `<=`, `!=` 等运算符一起使用

---

### 2️⃣ 子查询在 FROM 子句中（作为临时表/派生表）

```sql
SELECT 列名
FROM (子查询) AS 别名
WHERE 条件;
```

🔹 子查询返回 **多行多列**，可以当作一张临时表来使用，通常要起别名（AS 别名）

---

### 3️⃣ 子查询在 SELECT 子句中（较少用，返回单值）

```sql
SELECT 列名, (子查询) AS 别名
FROM 表名;
```

🔹 一般用于显示一些与当前行相关的计算或查询结果，比如“该部门平均工资”

---

## 📦 四、子查询的分类（按返回结果）

| 类型 | 描述 | 常见使用场景 | 子查询返回内容 |
|------|------|--------------|----------------|
| **标量子查询** | 返回 **单个值（一行一列）** | 用在 WHERE 中和字段比较 | 一个具体的值，如 85、'张三' |
| **IN 子查询** | 返回 **多个值（多行一列）** | 用在 WHERE … IN 中 | 多个值，如 (80, 85, 90) |
| **EXISTS 子查询** | 用于判断子查询是否返回 **任何行** | 用在 WHERE EXISTS 中 | 只关心是否有结果，不关心具体内容 |
| **派生表（FROM 子句中的子查询）** | 返回 **多行多列**，当作临时表使用 | FROM 后面 (SELECT ...) AS t | 一张临时表 |

---

# ✅ 五、嵌套查询的常见用法与实例详解

---

## 🎯 示例表：students（学生表）

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

## 1️⃣ 【WHERE 子查询】标量子查询（返回单个值）

### 场景：查找 **分数高于小丽的学生**

#### 步骤：

1. 先查询小丽的分数 → 子查询
2. 再查找分数 > 小丽分数的学生 → 外层查询

### SQL：

```sql
SELECT name, score
FROM students
WHERE score > (SELECT score FROM students WHERE name = '小丽');
```

🔍 **子查询：**
```sql
SELECT score FROM students WHERE name = '小丽'
```
→ 返回 `85.0`（小丽的分数，单个值）

🔍 **外层查询：**
```sql
SELECT name, score FROM students WHERE score > 85.0
```

✅ 结果：小明(88.5)、小红(92.0)、小华(90.0)

---

## 2️⃣ 【WHERE + IN 子查询】（返回多个值）

### 场景：查找 **年龄等于 18 或 19 的所有学生**

你也可以用 IN 子查询实现类似功能：

```sql
SELECT name, age
FROM students
WHERE age IN (18, 19);
```

但如果这个 “18, 19” 是来自另一个查询的结果，比如：**“找出某些班级 ID 对应的学生”**，就可以用 IN 子查询。

### 示例：查找 **分数在 85 分以上的所有学生的姓名**

先查哪些分数 > 85：

```sql
SELECT name, score
FROM students
WHERE score IN (SELECT score FROM students WHERE score > 85);
```

> 不过这个例子逻辑有点冗余，更实际的用法如下 👇

---

### 更实用的 IN 示例：

**查找 所有性别为“女” 的学生的姓名**

假设我们有一个表 `female_students_ids` 存储了女生的 ID，你可以这样查：

```sql
SELECT name
FROM students
WHERE id IN (SELECT id FROM female_students_ids);
```

虽然这里没有 `female_students_ids` 表，但你可以理解：**IN 子查询返回一组值，供外层查询匹配。**

---

## 3️⃣ 【EXISTS 子查询】（判断是否存在符合条件的记录）

### 场景：查找 **有学生成绩高于 90 的班级（假设有班级表的话）**  
或者更简单：**查找那些有分数高于 90 分的记录是否存在**

### 示例：查找是否存在分数 > 90 的学生

```sql
SELECT '存在分数超过 90 的学生' AS result
WHERE EXISTS (SELECT 1 FROM students WHERE score > 90);
```

- 如果有，返回结果：`存在分数超过 90 的学生`
- 如果没有，不会返回任何行

🔍 `SELECT 1` 是一种常见写法，不关心具体字段，只关心有没有行返回。

---

## 4️⃣ 【FROM 子查询】（派生表 / 临时表）

### 场景：**先计算每个学生的成绩排名或筛选出一部分学生，再进一步查询**

### 示例：查找 **平均分以上的学生**

步骤：

1. 先通过子查询算出平均分
2. 然后在外层查询中找出分数高于平均分的学生

### 方法 1：使用普通子查询（标量）

```sql
SELECT name, score
FROM students
WHERE score > (SELECT AVG(score) FROM students);
```

---

### 方法 2：使用 FROM 子查询（派生表）

```sql
SELECT s.name, s.score
FROM students s, (SELECT AVG(score) AS avg_score FROM students) AS avg_table
WHERE s.score > avg_table.avg_score;
```

🔍 这里 `(SELECT AVG(score) FROM students)` 是一个子查询，它返回一个平均值，然后我们把它当作一张临时表（派生表）来使用，并给它起了别名 `avg_table`。

---

## 5️⃣ 【SELECT 子查询】（在 SELECT 中嵌套，返回单值）

### 场景：显示每个学生的分数，以及 **全班平均分**

```sql
SELECT 
    name, 
    score,
    (SELECT AVG(score) FROM students) AS class_avg_score
FROM 
    students;
```

🔍 这里 `(SELECT AVG(score) FROM students)` 是一个子查询，它为每一行都返回相同的值（全班平均分），可以作为显示字段。

> 注意：这种写法在数据量大时可能性能较差，适合简单场景。

---

# ✅ 六、常见子查询关键词搭配

| 关键词 | 搭配子查询使用场景 |
|--------|------------------|
| `=`    | 子查询返回单个值，如 `WHERE score = (子查询)` |
| `>` `<` `>=` `<=` `!=` | 和标量子查询比较，如 `WHERE score > (子查询)` |
| `IN`   | 子查询返回多个值，如 `WHERE id IN (1,2,3)` 或 `WHERE id IN (子查询)` |
| `NOT IN` | 排除子查询返回的值 |
| `EXISTS` | 判断子查询是否有返回结果（返回任意行即可） |
| `NOT EXISTS` | 判断子查询是否 **没有** 返回结果 |
| `ANY` / `SOME` | 和子查询返回的 **任意一个值** 比较 |
| `ALL` | 和子查询返回的 **所有值** 比较 |

---

# ✅ 七、总结：嵌套查询（子查询）要点

| 项目 | 说明 |
|------|------|
| **什么是子查询？** | 嵌套在另一个 SQL 查询中的 SELECT 语句 |
| **子查询可以出现在哪些地方？** | WHERE、FROM、SELECT 等子句中 |
| **常见类型** | 标量子查询、IN 子查询、EXISTS 子查询、派生表（FROM 中的子查询） |
| **子查询返回的数据类型** | 单值、多值、多行多列（需起别名） |
| **什么时候用子查询？** | 当你需要的数据不能直接获取，需要先通过一个查询得到中间结果时 |
| **子查询的优点** | 灵活，可以分解复杂问题为多个简单查询 |
| **子查询的缺点** | 嵌套太多可读性差，某些情况下性能不如 JOIN |

---

# ✅ 八、推荐：子查询 vs. JOIN

虽然子查询功能强大，但在很多场景下，**JOIN（连接查询）性能更好、更直观**，尤其是多表关联时。

> 🧠 **建议：初学先掌握子查询，进阶后再对比学习 JOIN，根据具体场景选择合适方式。**

---

🙋 **如果你有具体的业务需求，比如：**

- “查找比某部门平均工资高的员工”
- “查找没有下单的用户”
- “查找销量高于平均销量的商品”

**可以告诉我你的表结构和需求，我可以为你写出对应的嵌套查询 SQL！**

😊 **掌握子查询，你的 SQL 查询能力将大幅提升！**

### **7. 子查询**
#### **嵌套在WHERE中**
```sql
SELECT name FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```
- **说明**：选出薪资高于平均值的员工。

#### **嵌套在FROM中**
```sql
SELECT dept, avg_salary 
FROM (SELECT department AS dept, AVG(salary) AS avg_salary
      FROM employees
      GROUP BY department) AS temp
WHERE avg_salary > 7000;
```

---


# ✅ MySQL 嵌套查询（子查询）练习题

嵌套查询（Subquery），也叫 **子查询**，是 MySQL 中非常强大且常用的功能，它允许你**在一个查询中嵌入另一个 SELECT 查询**，从而实现更灵活、更复杂的数据检索。

---

## 🎯 练习目标

通过以下 **10 道基础练习题 + 5 道进阶练习题**，帮助你熟练掌握：

| 类型 | 嵌套查询应用场景 |
|------|------------------|
| **基础** | WHERE 子句中的标量子查询、IN 子查询、比较子查询等 |
| **进阶** | EXISTS / NOT EXISTS、派生表（FROM 中的子查询）、多层嵌套、结合聚合函数等 |

---

# ✅ 一、基础练习题（10道）

> 🧩 **假设我们有如下两张表：**

### 1. `students`（学生表）

| id | name   | age | gender | score |
|----|--------|-----|--------|-------|
| 1  | 小明   | 18  | 男     | 88.5  |
| 2  | 小红   | 19  | 女     | 92.0  |
| 3  | 小刚   | 18  | 男     | 76.5  |
| 4  | 小丽   | 20  | 女     | 85.0  |
| 5  | 小华   | 19  | 男     | 90.0  |

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
|----------|------------|
| 1        | 一班       |
| 2        | 二班       |
| 3        | 三班       |

---

## 🔹 基础练习题

---

### **1. 【标量子查询】查找分数高于小丽（id=4）的学生**

> 提示：先查小丽的分数，再查 > 该分数的学生

```sql
SELECT name, score
FROM students
WHERE score > (SELECT score FROM students WHERE id = 4);
```

---

### **2. 【IN 子查询】查找年龄是 18 或 19 的学生**

> 提示：先查有哪些年龄，再用 IN

```sql
SELECT name, age
FROM students
WHERE age IN (18, 19);
```

或者用子查询形式（假设你动态获取这些年龄）：

```sql
SELECT name, age
FROM students
WHERE age IN (SELECT age FROM students WHERE age BETWEEN 18 AND 19);
```

---

### **3. 【比较子查询】查找分数高于平均分的学生**

> 提示：先查平均分，再查 > 平均分的学生

```sql
SELECT name, score
FROM students
WHERE score > (SELECT AVG(score) FROM students);
```

---

### **4. 【WHERE + 子查询】查找班级中成绩最高的学生（假设每个学生属于某个班级，简化：找出最高分的学生）**

```sql
SELECT name, score
FROM students
WHERE score = (SELECT MAX(score) FROM students);
```

---

### **5. 【EXISTS 子查询】查找存在成绩记录的学生（其实都有，这里只是演示 EXISTS 的用法）**

```sql
SELECT name
FROM students s
WHERE EXISTS (SELECT 1 FROM students WHERE id = s.id);
```

> ✅ 说明：EXISTS 用于判断子查询是否返回了任何行，常用于关联子查询

---

## 🔹 基础练习题（续）

---

### **6. 【查找分数低于 80 分的学生】使用子查询方式（虽然可以直接筛选，但用子查询方式）**

```sql
SELECT name, score
FROM students
WHERE score < (SELECT 80);  -- 当然这很假，但可以改成从某个固定表或值获取
```

更实际的例子：

```sql
SELECT name, score
FROM students
WHERE score < (SELECT AVG(score) - 10 FROM students);
```

---

### **7. 【查找所有女生的姓名和分数】用 IN 子查询方式（假设你只知道性别是女）**

```sql
SELECT name, score
FROM students
WHERE gender = '女';
```

或者用子查询：

```sql
SELECT name, score
FROM students
WHERE gender IN (SELECT gender FROM students WHERE gender = '女');
```

> 不太实用，但用于理解 IN 的思想

---

### **8. 【查找年龄等于某个值（如 18）的学生，用子查询方式】

```sql
SELECT name, age
FROM students
WHERE age = (SELECT 18); -- 无意义，仅演示
```

更合理的是：

```sql
SELECT name, age
FROM students
WHERE age = (SELECT age FROM students WHERE name = '小明');
```

---

### **9. 【查找分数等于最高分的学生姓名】

```sql
SELECT name, score
FROM students
WHERE score = (SELECT MAX(score) FROM students);
```

---

### **10. 【查找所有学生的姓名，以及全班平均分（用子查询显示一个固定值）】**

```sql
SELECT 
    name, 
    score,
    (SELECT AVG(score) FROM students) AS class_avg
FROM 
    students;
```

> ✅ 这是标量子查询在 SELECT 中的用法，返回一个值，给每一行都展示

---

# ✅ 二、进阶练习题（5道）

> 🧠 适合已经掌握基础嵌套查询后，进一步挑战

---

### **1. 【EXISTS 进阶】查找有学生成绩高于 90 的班级（假设有班级表 classes 和学生班级关联表 student_class）**

> 假设有如下表：

```sql
CREATE TABLE classes (
    class_id INT PRIMARY KEY,
    class_name VARCHAR(50)
);

CREATE TABLE student_class (
    student_id INT,
    class_id INT,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (class_id) REFERENCES classes(class_id)
);
```

> 练习：查找 **至少有一个学生成绩 > 90 的班级名称**

```sql
SELECT c.class_name
FROM classes c
WHERE EXISTS (
    SELECT 1
    FROM student_class sc
    JOIN students s ON sc.student_id = s.id
    WHERE sc.class_id = c.class_id AND s.score > 90
);
```

---

### **2. 【派生表 / FROM 子查询】查找每个学生的成绩，并显示全班平均分（使用派生表）**

```sql
SELECT 
    s.name, 
    s.score,
    avg_table.avg_score
FROM 
    students s,
    (SELECT AVG(score) AS avg_score FROM students) AS avg_table;
```

---

### **3. 【多层嵌套】查找分数高于 平均分 的学生，且年龄小于 20**

```sql
SELECT name, score, age
FROM students
WHERE score > (SELECT AVG(score) FROM students)
  AND age < 20;
```

---

### **4. 【结合聚合函数】查找每个班级中成绩最高的学生（假设有 student_class 表）**

> 简化版：查找成绩最高的学生姓名与分数

```sql
SELECT name, score
FROM students
WHERE score = (SELECT MAX(score) FROM students);
```

进阶：按班级分组找最高分（需有班级关联表，暂略）

---

### **5. 【IN + 子查询】查找所有成绩在 80~90 分之间的学生姓名**

```sql
SELECT name, score
FROM students
WHERE score BETWEEN 80 AND 90;
```

或者用子查询方式：

```sql
SELECT name, score
FROM students
WHERE score IN (85.0, 88.5, 90.0); -- 假定你已知这些分数
```

更动态的方式：

```sql
SELECT name, score
FROM students
WHERE score IN (SELECT score FROM students WHERE score BETWEEN 80 AND 90);
```

---

# ✅ 总结：嵌套查询类型速查

| 类型 | 说明 | 常见关键词 |
|------|------|-------------|
| **标量子查询** | 返回单个值，常用于 =、>、< 比较 | `WHERE score > (子查询)` |
| **IN 子查询** | 返回多个值，用于 IN (...) 判断 | `WHERE 列 IN (子查询)` |
| **EXISTS / NOT EXISTS** | 判断子查询是否有返回行 | `WHERE EXISTS (子查询)` |
| **派生表（FROM 子查询）** | 子查询结果作为临时表使用 | `FROM (子查询) AS 别名` |
| **比较运算符 + 子查询** | 如 > ALL、< ANY 等 | `WHERE score > ALL (子查询)` |

---


---

**掌握嵌套查询，是成为 SQL 高手的重要一步！💪**


# ✅ MySQL 嵌套查询（子查询）练习题答案与解析

下面是前面提供的 **10 道基础练习题 + 5 道进阶练习题** 的 **详细答案与解析**，帮助你深入理解每道题的 **目的、思路、语法与执行逻辑**。

---

# 🎯 一、基础练习题（10道）及答案解析

> 📌 **基础表：students**

| id | name   | age | gender | score |
|----|--------|-----|--------|-------|
| 1  | 小明   | 18  | 男     | 88.5  |
| 2  | 小红   | 19  | 女     | 92.0  |
| 3  | 小刚   | 18  | 男     | 76.5  |
| 4  | 小丽   | 20  | 女     | 85.0  |
| 5  | 小华   | 19  | 男     | 90.0  |

---

## 🔹 题目 1

### 📝 题目：查找分数高于小丽（id=4）的学生

### ✅ 答案：

```sql
SELECT name, score
FROM students
WHERE score > (SELECT score FROM students WHERE id = 4);
```

### 🔍 解析：

- 子查询：`(SELECT score FROM students WHERE id = 4)` → 返回 **小丽的分数：85.0**
- 外层查询：查找 `score > 85.0` 的学生
- 结果：小明(88.5)、小红(92.0)、小华(90.0)

> 🎯 目的：通过子查询先获取某个特定值（小丽的分数），再基于该值做比较筛选

---

## 🔹 题目 2

### 📝 题目：查找年龄是 18 或 19 的学生

### ✅ 答案（普通写法）：

```sql
SELECT name, age
FROM students
WHERE age IN (18, 19);
```

### ✅ 答案（子查询方式，演示用）：

```sql
SELECT name, age
FROM students
WHERE age IN (SELECT age FROM students WHERE age BETWEEN 18 AND 19);
```

### 🔍 解析：

- 子查询返回年龄为 18 或 19 的值：`(18, 18, 19, 19)`
- 外层 `IN` 匹配这些年龄，返回对应学生
- 目的：演示 IN 子查询的基本用法，虽然这个例子可以直接写 `WHERE age IN (18,19)`

---

## 🔹 题目 3

### 📝 题目：查找分数高于平均分的学生

### ✅ 答案：

```sql
SELECT name, score
FROM students
WHERE score > (SELECT AVG(score) FROM students);
```

### 🔍 解析：

- 子查询：`(SELECT AVG(score) FROM students)` → 计算所有学生的平均分，约为 **86.4**
- 外层查询筛选出 `score > 86.4` 的学生
- 结果：小红(92.0)、小华(90.0)、小明(88.5)

> 🎯 目的：通过子查询先计算聚合值（平均数），再做比较

---

## 🔹 题目 4

### 📝 题目：查找分数最高的学生

### ✅ 答案：

```sql
SELECT name, score
FROM students
WHERE score = (SELECT MAX(score) FROM students);
```

### 🔍 解析：

- 子查询：`(SELECT MAX(score) FROM students)` → 返回最高分：**92.0**
- 外层查询：找出分数等于 92.0 的学生
- 结果：小红（92.0）

> 🎯 目的：查找极值（最大值/最小值）是子查询常见用法

---

## 🔹 题目 5

### 📝 题目：查找存在成绩记录的学生（演示 EXISTS 的用法）

### ✅ 答案：

```sql
SELECT name
FROM students s
WHERE EXISTS (SELECT 1 FROM students WHERE id = s.id);
```

### 🔍 解析：

- `EXISTS` 用于判断子查询是否返回了 **任意一行**
- 这里子查询对每个学生都返回 1 行 → 所有学生都满足
- 常用于更复杂的关联场景，比如“存在匹配的订单”、“存在关联的用户”等

> 🎯 EXISTS 不关心返回的具体内容，只关心有没有结果

---

## 🔹 题目 6

### 📝 题目：查找分数低于 80 分的学生（用子查询方式）

### ✅ 答案：

```sql
SELECT name, score
FROM students
WHERE score < (SELECT 80);
```

> ❌ 无意义，仅作语法示意

### ✅ 更实用的写法（结合计算）：

```sql
SELECT name, score
FROM students
WHERE score < (SELECT AVG(score) - 10 FROM students);
```

- 假设平均分是 86.4，则 86.4 - 10 ≈ 76.4
- 查找分数 < 76.4 的学生 → 小刚（76.5 几乎不满足，视实际计算而定）

> 🎯 目的：演示如何从子查询获取“动态阈值”来进行比较

---

## 🔹 题目 7

### 📝 题目：查找所有女生的姓名和分数（用 IN 方式，仅演示）

### ✅ 答案：

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

## 🔹 题目 8

### 📝 题目：查找年龄等于某个值（如 18）的学生（用子查询方式）

### ✅ 答案：

```sql
SELECT name, age
FROM students
WHERE age = (SELECT age FROM students WHERE name = '小明');
```

- 子查询返回小明的年龄：18
- 外层查询找出 age = 18 的学生 → 小明、小刚

> 🎯 目的：通过子查询获取某个值，再做等值比较

---

## 🔹 题目 9

### 📝 题目：查找分数等于最高分的学生姓名

### ✅ 答案：

```sql
SELECT name, score
FROM students
WHERE score = (SELECT MAX(score) FROM students);
```

- 和第 4 题一样，查找最高分对应的学生 → 小红

---

## 🔹 题目 10

### 📝 题目：查找所有学生的姓名和分数，以及全班平均分

### ✅ 答案：

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

# 🚀 二、进阶练习题（5道）及答案解析

---

## 🔸 题目 1

### 📝 题目：查找有学生成绩高于 90 的班级名称（假设有 classes 和 student_class 表）

### ✅ 答案：

```sql
SELECT c.class_name
FROM classes c
WHERE EXISTS (
    SELECT 1
    FROM student_class sc
    JOIN students s ON sc.student_id = s.id
    WHERE sc.class_id = c.class_id AND s.score > 90
);
```

### 🔍 解析：

- 使用 `EXISTS` 判断：**是否存在某个班级，其中有学生成绩 > 90**
- 关联了班级表、学生班级关联表、学生表
- 是实际项目中非常典型的 **关联子查询 + EXISTS 的用法**

> 🎯 目的：掌握 EXISTS 在多表关联查询中的实战应用

---

## 🔸 题目 2

### 📝 题目：查找每个学生的成绩，并显示全班平均分（派生表方式）

### ✅ 答案：

```sql
SELECT 
    s.name, 
    s.score,
    avg_table.avg_score
FROM 
    students s,
    (SELECT AVG(score) AS avg_score FROM students) AS avg_table;
```

### 🔍 解析：

- 派生表 `(SELECT AVG(score)...) AS avg_table` → 计算出一个平均分
- 然后将其与学生表进行笛卡尔积（简单展示），为每个学生都显示该平均分
- 是 **子查询作为临时表（FROM 中的子查询）** 的典型用法

> 🎯 目的：学习如何在 FROM 中使用子查询作为派生表/临时表

---

## 🔸 题目 3

### 📝 题目：查找分数高于平均分且年龄小于 20 的学生

### ✅ 答案：

```sql
SELECT name, score, age
FROM students
WHERE score > (SELECT AVG(score) FROM students)
  AND age < 20;
```

### 🔍 解析：

- 嵌套了一个子查询获取平均分
- 再结合普通条件 `age < 20`
- 是 **组合条件 + 嵌套查询** 的常见写法

---

## 🔸 题目 4

### 📝 题目：查找成绩最高的学生姓名（简化聚合查询）

### ✅ 答案：

```sql
SELECT name, score
FROM students
WHERE score = (SELECT MAX(score) FROM students);
```

> 🎯 目的：查找极值并显示对应记录，是典型单值嵌套查询

---

## 🔸 题目 5

### 📝 题目：查找所有分数在 80~90 之间的学生（用子查询方式）

### ✅ 答案：

```sql
SELECT name, score
FROM students
WHERE score IN (85.0, 88.5, 90.0);
```

或者动态一点：

```sql
SELECT name, score
FROM students
WHERE score IN (SELECT score FROM students WHERE score BETWEEN 80 AND 90);
```

> 🎯 目的：演示 IN 子查询与范围查询的结合

---

# ✅ 总结

| 练习类型 | 常见语法 | 用途 |
|----------|----------|------|
| **标量子查询** | `(SELECT ...)` 用于比较或显示单值 | 比较、展示聚合信息 |
| **IN 子查询** | `WHERE 列 IN (子查询)` | 匹配多个可能值 |
| **EXISTS** | `WHERE EXISTS (子查询)` | 判断是否有匹配记录 |
| **派生表** | `FROM (子查询) AS 别名` | 把子查询结果当表用 |
| **多层/组合嵌套** | 多个子查询组合条件 | 实现复杂业务逻辑 |

---

🙋 **如果你想要：**

- 每道题的 **表创建脚本 + 数据插入语句完整版**
- 每题的 **执行结果示例**
- 或者打包成 **SQL 文件 / 在线练习环境**

欢迎继续提问！我可以帮你生成 👍

---

**掌握嵌套查询，是成为 SQL 高手的关键一步！💡**