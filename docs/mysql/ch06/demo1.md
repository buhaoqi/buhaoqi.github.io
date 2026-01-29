---
# 这部分是关键！侧边栏显示名由这里决定
title: 案例1：学生选课系统  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 案例1：学生选课系统  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 5  # 侧边栏中排在第1位
---


## **一、案例简介**

涉及三类数据：

* 学生（Student）
* 课程（Course）
* 选课记录（Enrollment）

通过这个系统，**自然覆盖三种完整性**：

* 实体完整性（谁是谁）
* 参照完整性（关系对不对）
* 用户定义完整性（合不合理）

## 二、第一步：建表

说明：先创建不带属性的列，也就是不添加任何约束。

目的：明确不完整的数据库是危险的


学生表（student）

```sql
CREATE TABLE student (
  student_id INT,
  name VARCHAR(20),
  age INT
);
```

课程表( course)

```sql
CREATE TABLE course (
  course_id INT,
  course_name VARCHAR(30)
);
```

---

选课表(enrollment)

```sql
CREATE TABLE enrollment (
  student_id INT,
  course_id INT,
  score INT
);
```

---

## 三、第二步：填充“问题数据”

```sql
INSERT INTO student VALUES
(1, '张三', 20),
(1, '李四', -5),     -- 学号重复，年龄非法
(NULL, '王五', 18);  -- 主键为空

INSERT INTO course VALUES
(101, '数据库'),
(102, '操作系统');

INSERT INTO enrollment VALUES
(1, 101, 95),
(2, 999, 88);        -- 不存在的课程
```

请问：

* 这些数据 **合理吗？**
* 数据库 **有没有阻止？**

- 👉 答案：**没有**
- 👉 怎么办：**添加数据库完整性约束**

---

## 四、第三步：实体完整性

###  定义

> **实体完整性：是第一层防线，表中每一行数据必须能被唯一标识，且主键不能为空。**

---

### 改造 student 表（加主键）

```sql
CREATE TABLE student (
  student_id INT PRIMARY KEY,
  name VARCHAR(20),
  age INT
);
```

强调：

* `PRIMARY KEY`

  * 唯一
  * 非空
* 自动建立 **主键索引**

---

### ❌ 再次插入错误数据（演示失败）

```sql
INSERT INTO student VALUES (1, '李四', 22);
```

👉 报错：**违反实体完整性**

---

## 五、第四步：参照完整性（表与表之间）

定义

> **参照完整性：外键的值必须在被参照表中存在，或者为空。**

---

### 改造选课表（加外键）

```sql
CREATE TABLE enrollment (
  student_id INT,
  course_id INT,
  score INT,
  CONSTRAINT fk_enroll_student
    FOREIGN KEY (student_id) REFERENCES student(student_id),
  CONSTRAINT fk_enroll_course
    FOREIGN KEY (course_id) REFERENCES course(course_id)
);
```

---

### ❌ 插入非法选课记录

```sql
INSERT INTO enrollment VALUES (2, 999, 88);
```

👉 报错：**违反参照完整性**

📌 此时强调：

* 子表不能引用不存在的“父表数据”
* 防止“孤儿记录”

---

## 六、第六步：用户定义完整性（业务规则）

### 定义

> **用户定义完整性：由用户根据业务需求自行规定的数据合法性规则。**

---

### 1️⃣ 成绩范围限制（CHECK）

```sql
score INT CHECK (score BETWEEN 0 AND 100)
```

---

### 2️⃣ 年龄限制 + 非空

```sql
age INT NOT NULL CHECK (age >= 0)
```

---

### 3️⃣ 完整版建表（教学高潮）

```sql
CREATE TABLE student (
  student_id INT PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  age INT NOT NULL CHECK (age >= 0)
);

CREATE TABLE course (
  course_id INT PRIMARY KEY,
  course_name VARCHAR(30) UNIQUE
);

CREATE TABLE enrollment (
  student_id INT,
  course_id INT,
  score INT CHECK (score BETWEEN 0 AND 100),
  CONSTRAINT pk_enrollment PRIMARY KEY (student_id, course_id),
  CONSTRAINT fk_enroll_student
    FOREIGN KEY (student_id) REFERENCES student(student_id),
  CONSTRAINT fk_enroll_course
    FOREIGN KEY (course_id) REFERENCES course(course_id)
);
```

📌 此时三种完整性 **全部到位**。

---

## 七、课堂总结用“一张逻辑表”（必讲）

| 完整性类型   | 解决什么问题   | 实现手段                      |
| ------- | -------- | ------------------------- |
| 实体完整性   | 这一行是谁    | PRIMARY KEY               |
| 参照完整性   | 表之间关系对不对 | FOREIGN KEY               |
| 用户定义完整性 | 数据合不合理   | CHECK / NOT NULL / UNIQUE |

---

## 八、课堂练习题设计（可直接发给学生）

---

### 📝 练习题 1（判断题）

以下说法是否正确：

> 外键约束是用来保证实体完整性的。

👉 **错误**（参照完整性）

---

### 📝 练习题 2（选择题）

下列哪一项属于用户定义完整性？

A. 主键
B. 外键
C. 成绩必须在 0~100
D. 表必须有索引

✅ 答案：**C**

---

### 📝 练习题 3（改错题）

下面表定义中，违反了哪种完整性？如何修改？

```sql
CREATE TABLE score (
  student_id INT,
  score INT
);
```

👉 答案要点：

* 没有主键 → 实体完整性缺失
* score 无范围 → 用户定义完整性缺失

---

### 📝 练习题 4（实践题）

要求：

1. 学号唯一且非空
2. 成绩在 0~100
3. 成绩表中的学号必须存在于学生表

👉 学生综合运用三种完整性

---

## 九、送你一句“课堂金句” 🎓

> **完整性不是为了限制你写数据，而是防止你写“错误的数据”。**

