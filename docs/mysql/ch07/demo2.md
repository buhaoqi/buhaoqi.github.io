---
# 这部分是关键！侧边栏显示名由这里决定
title: 案例：连接查询  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 案例：连接查询  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 1  # 侧边栏中排在第1位
---


太好了，这个点**非常适合做成“一道完整训练题”**，我给你设计一题**标准教学型连接查询练习**：
👉 表结构简单
👉 数据有“刻意不匹配”的情况
👉 能一次性把 **INNER / LEFT / RIGHT JOIN** 全部讲清楚

你可以直接当 **课堂练习题 / 实训题 / 上机考试题** 用。

---

# 连接查询综合训练题（初学者版）

## 一、业务场景（先给学生讲故事）

学校里有 **学生表** 和 **成绩表**：

* 有的学生 **还没有成绩**
* 有的成绩 **对应的学生不存在（脏数据）**

👉 现在我们要练习不同连接方式的查询效果。

---

## 二、建表（题目给定）

### 1️⃣ 学生表 `student`

```sql
CREATE TABLE student (
    id INT PRIMARY KEY,
    name VARCHAR(20),
    class_name VARCHAR(20)
);
```

---

### 2️⃣ 成绩表 `score`

```sql
CREATE TABLE score (
    id INT PRIMARY KEY,
    student_id INT,
    subject VARCHAR(20),
    score INT
);
```

---

## 三、填充测试数据（重点）

### 1️⃣ 学生表数据

```sql
INSERT INTO student VALUES
(1, '张三', '一班'),
(2, '李四', '一班'),
(3, '王五', '二班');
```

---

### 2️⃣ 成绩表数据

```sql
INSERT INTO score VALUES
(1, 1, '数学', 90),
(2, 1, '英语', 85),
(3, 2, '数学', 88),
(4, 4, '数学', 92);   -- 注意：student_id = 4，在学生表中不存在
```

📌 **老师提示学生注意：**

* `student_id = 3` 的学生 **没有成绩**
* `student_id = 4` 的成绩 **没有学生**

这正是 JOIN 的价值所在。

---

## 四、训练任务（学生要完成的部分）

---

### 任务一：INNER JOIN（只查“完全匹配”的）

**要求：**
查询 **有成绩的学生姓名、班级、科目、成绩**

```sql
SELECT
    s.name,
    s.class_name,
    c.subject,
    c.score
FROM student s
INNER JOIN score c
ON s.id = c.student_id;
```

📌 **预期结果特点：**

* 不显示 **王五**（没成绩）
* 不显示 `student_id = 4` 的那条成绩

---

### 任务二：LEFT JOIN（学生为主）

**要求：**
查询 **所有学生** 及其成绩（没有成绩的也要显示）

```sql
SELECT
    s.name,
    s.class_name,
    c.subject,
    c.score
FROM student s
LEFT JOIN score c
ON s.id = c.student_id;
```

📌 **预期结果特点：**

* 所有学生都会显示
* **王五的成绩为 NULL**
* 成绩表中 `student_id = 4` 不显示

---

### 任务三：RIGHT JOIN（成绩为主）

**要求：**
查询 **所有成绩**，即使该成绩没有对应学生

```sql
SELECT
    s.name,
    s.class_name,
    c.subject,
    c.score
FROM student s
RIGHT JOIN score c
ON s.id = c.student_id;
```

📌 **预期结果特点：**

* 显示所有成绩
* `student_id = 4` 那条记录中：

  * `name`、`class_name` 为 NULL

---

## 五、对比总结（给学生画表）

| JOIN 类型    | 以谁为主   | 不匹配的数据       |
| ---------- | ------ | ------------ |
| INNER JOIN | 两边都要匹配 | 都不显示         |
| LEFT JOIN  | 左表     | 右表不匹配 → NULL |
| RIGHT JOIN | 右表     | 左表不匹配 → NULL |

**一句记忆法：**

> LEFT JOIN：左表全要
> RIGHT JOIN：右表全要
> INNER JOIN：只要“有对象的”

---

## 六、加分思考题（可选）

1️⃣ 查询 **没有成绩的学生**
（提示：LEFT JOIN + NULL 判断）

```sql
SELECT s.name
FROM student s
LEFT JOIN score c
ON s.id = c.student_id
WHERE c.id IS NULL;
```

---

2️⃣ 查询 **没有学生信息的成绩记录**

```sql
SELECT c.*
FROM student s
RIGHT JOIN score c
ON s.id = c.student_id
WHERE s.id IS NULL;
```

---

## 七、教师用一句话总结

> **JOIN 的本质不是“连表”，而是“决定保留哪些不匹配的数据”**

---

如果你愿意，我可以下一步直接帮你做成：

* 🔹 **考试操作题（含标准答案）**
* 🔹 **一张“JOIN 结果对比图（行数变化）”**
* 🔹 **把 RIGHT JOIN 改写成 LEFT JOIN（面试常考）**

你是打算 **上课讲 / 给学生做实训 / 出试卷** 用？我可以按用途再给你精修一版。
