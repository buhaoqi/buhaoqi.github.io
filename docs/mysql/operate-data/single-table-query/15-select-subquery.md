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