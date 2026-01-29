---
# 这部分是关键！侧边栏显示名由这里决定
title: 案例：视图的用法  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 案例：视图的用法  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 1  # 侧边栏中排在第1位
---


## 视图是什么

- 视图是虚表。本身不存数据，只存SQL 语句。
- 视图在使用时生成实表。
- 视图是使用名字存储的查询语句
- 视图可以像基本表一样进行增删改查


## 视图的特点
1. 简单
2. 安全
3. 独立


## 示例数据

建库建表
```sql
-- 1.建库 view_demo
CREATE DATABASE view_demo;
USE view_demo;

-- 2.创建学生表 student

CREATE TABLE student (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20),
    age INT,
    class_name VARCHAR(20)
);

-- 3.创建成绩表score

CREATE TABLE score (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    subject VARCHAR(20),
    score INT
);
```


填充测试数据

```sql
-- 学生表数据
INSERT INTO student (name, age, class_name) VALUES
('张三', 18, '一班'),
('李四', 19, '一班'),
('王五', 18, '二班');

-- 成绩表数据

INSERT INTO score (student_id, subject, score) VALUES
(1, '数学', 90),
(1, '英语', 85),
(2, '数学', 88),
(3, '数学', 92);
```

## 基础语法

### 创建视图的语法

```sql
CREATE VIEW 视图名 [(列1[,列2,…n])]
AS
SELECT 语句
[WITH[CASCADED|LOCAL]CHECK OPTION];
```
- 视图名应符合标识符的命令规则。
- (列1[,列2,…n]) 用于指定视图中各列的名称，这里指定的列名与 SELECT 语句结果集的列一一对应。若省略列名列表，将直接使用SELECT 语句中的列名称。
- SELECT 语句用于定义视图，SELECT 语句中可以使用多个表或其他视图
- [WITH[CASCADED|LOCAL]CHECK OPTION] 为可选参数，表示要保证在该视图的权限范围之内更新视图。其中 CASCADED 是默认值，表示更新视图时要满足所有相关视图和表的条件；LOCAL 表示更新视图时要满足该视图本身定义的条件。


## 示例：创建教师视图

### 1.创建基本表

```sql
-- 创建教师表 teacher
CREATE TABLE IF NOT EXISTS teacher (
    TeaID INT UNSIGNED NOT NULL COMMENT '教师工号（主键）',
    Teaname VARCHAR(20) NOT NULL COMMENT '教师姓名',
    Age TINYINT UNSIGNED NOT NULL COMMENT '教师年龄（1-255范围，符合实际）',
    -- 工号作为唯一标识，设置为主键
    PRIMARY KEY (TeaID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='教师信息表（用于视图示例）';

-- 插入教师测试数据
INSERT INTO teacher (TeaID, Teaname, Age) VALUES
(101, '张敏', 35),
(102, '李强', 42),
(103, '王丽', 28),
(104, '赵刚', 50),
(105, '刘芳', 33),
(106, '陈明', 45);
```
### 2.创建 view_teacher 视图

```sql
-- 创建视图 view_teacher（修正原语句的括号与标点，保证语法正确）
CREATE VIEW view_teacher (工号, 姓名, 年龄) 
AS SELECT TeaID, Teaname, Age 
FROM teacher;
```

### 3.查询视图

验证数据是否匹配：
```sql
-- 查询视图，查看教师年龄信息
SELECT * FROM view_teacher;
```
查询结果会显示：
| 工号 | 姓名 | 年龄 |
|------|------|------|
| 101  | 张敏 | 35   |
| 102  | 李强 | 42   |
| 103  | 王丽 | 28   |
| 104  | 赵刚 | 50   |
| 105  | 刘芳 | 33   |
| 106  | 陈明 | 45   |


## 示例：创建学生成绩视图

### 1.创建 `student` 和 `score` 数据表
```sql
-- 1. 创建学生表 student（存储学号、姓名等基础信息）
CREATE TABLE IF NOT EXISTS student (
    Stuid INT UNSIGNED NOT NULL COMMENT '学生学号（主键）',
    Stuname VARCHAR(20) NOT NULL COMMENT '学生姓名',
    s_gender CHAR(2) DEFAULT '男' COMMENT '学生性别',
    PRIMARY KEY (Stuid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='学生信息表';

-- 2. 创建成绩表 score（存储学生课程分数，与 student 表关联）
CREATE TABLE IF NOT EXISTS score (
    Stuid INT UNSIGNED NOT NULL COMMENT '学生学号（外键，关联 student.Stuid）',
    Cno CHAR(6) NOT NULL COMMENT '课程号（如 C001、C002）',
    Grade DECIMAL(5,2) NOT NULL COMMENT '课程分数（0-100，保留2位小数）',
    -- 联合主键：一个学生一门课仅一条记录
    PRIMARY KEY (Stuid, Cno),
    -- 外键约束：保证学号在 student 表中存在
    FOREIGN KEY (Stuid) REFERENCES student(Stuid) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='学生成绩表';
```


### 2.填充测试数据
```sql
-- 1. 向 student 表插入学生数据
INSERT INTO student (Stuid, Stuname, s_gender) VALUES
(2025001, '王浩', '男'),
(2025002, '李思雨', '女'),
(2025003, '张宇航', '男'),
(2025004, '陈晓萌', '女'),
(2025005, '赵子轩', '男');

-- 2. 向 score 表插入成绩数据
INSERT INTO score (Stuid, Cno, Grade) VALUES
(2025001, 'C001', 88.50),
(2025001, 'C002', 92.00),
(2025002, 'C001', 76.00),
(2025002, 'C003', 94.25),
(2025003, 'C002', 85.00),
(2025003, 'C003', 79.50),
(2025004, 'C001', 81.25),
(2025004, 'C002', 77.50),
(2025005, 'C003', 93.75);
```

---

### 3.创建视图 `view_xscj`
```sql
-- 创建视图：显示学号、姓名、课程号、分数，并按学号升序排列
CREATE VIEW view_xscj (学号, 姓名, 课程号, 分数)
AS SELECT SCORE.Stuid, student.Stuname, SCORE.Cno, SCORE.Grade
FROM SCORE
JOIN student ON SCORE.Stuid = student.Stuid
ORDER BY SCORE.Stuid;
```

---

### 4.查看视图数据
```sql
-- 查询视图，查看学生成绩信息
SELECT * FROM view_xscj;
```
查询结果示例：
| 学号     | 姓名   | 课程号 | 分数  |
|----------|--------|--------|-------|
| 2025001 | 王浩   | C001   | 88.50 |
| 2025001 | 王浩   | C002   | 92.00 |
| 2025002 | 李思雨 | C001   | 76.00 |
| 2025002 | 李思雨 | C003   | 94.25 |
| 2025003 | 张宇航 | C002   | 85.00 |
| 2025003 | 张宇航 | C003   | 79.50 |

---

### 5.修改视图
```sql
-- 方式1：用 CREATE OR REPLACE VIEW 修改（推荐，覆盖原有视图）
CREATE OR REPLACE VIEW view_xscj (学号, 姓名, 课程号, 分数, 性别)
AS SELECT SCORE.Stuid, student.Stuname, SCORE.Cno, SCORE.Grade, student.s_gender
FROM SCORE
JOIN student ON SCORE.Stuid = student.Stuid
ORDER BY SCORE.Stuid, SCORE.Cno;

-- 方式2：用 ALTER VIEW 修改（语法等价）
ALTER VIEW view_xscj (学号, 姓名, 课程号, 分数, 性别)
AS SELECT SCORE.Stuid, student.Stuname, SCORE.Cno, SCORE.Grade, student.s_gender
FROM SCORE
JOIN student ON SCORE.Stuid = student.Stuid
ORDER BY SCORE.Stuid, SCORE.Cno;
```

---

### 6.删除视图（清理测试资源）
```sql
-- 删除视图 view_xscj
DROP VIEW IF EXISTS view_xscj;
```



## 示例：不使用视图

需求：查询 **学生姓名 + 班级 + 科目 + 成绩**

```sql
SELECT
    s.name,
    s.class_name,
    c.subject,
    c.score
FROM student s
JOIN score c ON s.id = c.student_id;
```

> 这个 SQL **没错，但有点长**
> 如果天天用、到处用，很烦

## 示例：使用视图

### 创建视图

```sql
CREATE VIEW v_student_score AS
SELECT
    s.name,
    s.class_name,
    c.subject,
    c.score
FROM student s
JOIN score c ON s.id = c.student_id;
```

强调三点：

* `CREATE VIEW 视图名 AS SELECT ...`
* 本质就是保存了一条查询语句
* **不会复制数据**


### 查看视图是否创建成功

```sql
SHOW TABLES;
```

你会看到：

```
student
score
v_student_score
```

### 查询视图

```sql
SELECT * FROM v_student_score;
```

> **用视图查询，和查表一模一样**

### 在视图上加条件

```sql
SELECT * FROM v_student_score
WHERE class_name = '一班';
```


```sql
SELECT * FROM v_student_score
WHERE score >= 90;
```



## 删除原表数据，视图自动变化

```sql
DELETE FROM student WHERE name = '张三';
```

再查视图：

```sql
SELECT * FROM v_student_score;
```

结果会变：

> 因为视图的数据 **来自原表**



## 修改原表，视图自动变化

```sql
INSERT INTO score (student_id, subject, score)
VALUES (2, '英语', 90);
```

```sql
SELECT * FROM v_student_score;
```

---

## 查看视图结构

```sql
SHOW CREATE VIEW v_student_score;
```

## 删除视图（完整闭环）

```sql
DROP VIEW v_student_score;
```

---

# 十、课堂总结（黑板版）

> ✅ 视图是什么
>
> * 虚拟表
> * 不存数据
> * 基于 SELECT

> ✅ 视图能干嘛
>
> * 简化复杂查询
> * 提高可读性
> * 屏蔽底层表结构

> ✅ 核心语句

```sql
CREATE VIEW
SELECT * FROM view_name
DROP VIEW
```

---

## 练习

### 练习 1（基础）

创建一个视图，只显示：

* 学生姓名
* 科目
* 成绩

---

### 练习 2（进阶一点）

基于视图查询：

* 数学成绩 ≥ 90 的学生


