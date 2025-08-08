---
noteId: "8841af70481311f0a6929b02b627d898"
tags: []

---

## 创建表

定义

表是以行和列的形式存储数据。创建表就是定义列的过程。一个列分为三部分：

- 列名
- 数据类型
- 约束条件

语法

```sql
CREATE TABLE 表名 (
	列名1 数据类型 [约束条件],
    列名2 数据类型 [约束条件],
    列名3 数据类型 [约束条件]
);
```


## 示例1:创建学⽣表

要求：创建⼀个简单的学⽣表 students ，包含：

- 学号(id)：整数，主键
- 姓名(name)：字符串，最⻓20个字符，不能为空
- 年龄(age)：整数
- 性别(gender)：字符串，只能输⼊'男'或'⼥'
- ⼊学⽇期(admission_date)：⽇期类型

## 示例2:创建商品表

要求：创建⼀个商品表 products ，包含：

- 商品编号(id)：整数，主键，⾃增⻓
- 商品名称(name)：字符串，最⻓100个字符，不能为空
- 价格(price)：⼩数类型，保留2位⼩数
- 库存数量(stock)：整数，默认值为0上架时间(create_time)：时间戳，默认当前时间
- 在售(is_available):布尔类型，默认值为 `1`（表示“在售”） 

## 示例3:创建员⼯表

要求：创建⼀个员⼯表 employees ，包含：

- 员⼯号(emp_id)：整数，主键
- 姓名(name)：字符串，最⻓10个字符，不能为空
- 部⻔(department)：字符串，最⻓20个字符
- ⼯资(salary)：整数
- ⼊职⽇期(hire_date)：⽇期类型

## 示例4:创建图书表

要求：创建⼀个图书表 books ，包含：

- 图书编号(book_id)：整数，主键
- 书名(title)：字符串，最⻓50个字符，不能为空
- 作者(author)：字符串，最⻓20个字符
- 价格(price)：⼩数类型，保留2位⼩数
- 出版⽇期(publish_date)：⽇期类型

## 示例5:创建课程表

要求：创建⼀个课程表 course ，包含：

- 课程编号(course_id)：整数，主键课程
- 名称(course_name)：字符串，最⻓30个字符，不能为空
- 教师(teacher)：字符串，最⻓10个字符
- 课时(hours)：整数
- 教室(classroom)：字符串，最⻓10个字符

## 示例6:创建用户表

请创建一个名为`user_profile`的数据表，要求包含以下字段结构：

1. 用户ID（`user_id`）：整数类型，设为主键并自动增长
2. 用户昵称（user_name)：变长字符串，最长30个字符，**不允许重复**
3. 年龄（age）：整数类型，无符号，默认值设为18
4. 会员状态（status）：**布尔类型**，默认非会员
5. 电子邮件（`email`）：可变长度字符串，**唯一**且非空
6. 兴趣爱好（hobbies）：从预设的'阅读','运动','音乐','旅行'中单选
7. 账户创建时间(`create_time`): **时间戳类型**，自动记录创建时间

**参考答案**：

```sql
CREATE TABLE user_profile (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    nickname VARCHAR(30) NOT NULL UNIQUE,
    age INT UNSIGNED DEFAULT 18,
    is_member BOOLEAN DEFAULT FALSE,
    hobby ENUM('阅读', '运动', '音乐', '旅行') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) 
```

## 示例7:创建会议表

创建一个名为 `meeting_schedule` 的表，包含以下字段：

- 会议ID（meeting_id）（整数，主键，自增）
- 会议主题（topic）（变长字符串，最长50字符，非空）
- 开始时间（start_time）（精确到秒的事件时间，存储本地时间）
- 预计时长（duration_minutes）（以分钟为单位的整数）
- 创建时间（created_at）（自动记录数据插入时间）
- 是否已结束（is_ended）（布尔值，默认未结束）

```sql
CREATE TABLE meeting_schedule (
    meeting_id INT AUTO_INCREMENT PRIMARY KEY,
    topic VARCHAR(50) NOT NULL,
    start_time DATETIME NOT NULL,  -- 存储本地时间
    duration_minutes INT UNSIGNED,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_ended BOOLEAN DEFAULT FALSE
) 
```

## 示例8:创建文章审核表

创建一个 `article_audit` 表用于文章审核跟踪，要求：

- 文章ID（article_id）：整数，不能为空 自动增长
- 审核状态（audit_status）：枚举类型：'pending','approved','rejected'
- 提交审核时间（submitted_at）：自动记录插入时间）
- 最后状态更新时间（last_updated）

**参考答案**

```sql
CREATE TABLE article_audit (
    article_id INT NOT NULL,
    audit_status ENUM('pending', 'approved', 'rejected') NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
) ENGINE=InnoDB;
```

## 示例9:创建航班时刻表

创建一个国际航班时刻表 `flight_schedule`，包含：

- 航班号（flight_no）：字符串，主键，如 "CA123"
- 出发地时区（departure_timezone）：格式：'UTC+8:00' 的字符串）
- 本地起飞时间（local_departure_time）：精确到分钟的时间类型）
- 飞行时长（flight_duration）：小时+分钟的组合，如 02:30 表示2小时30分
- 年份（year）：仅存储年份值

**参考答案**

```sql
CREATE TABLE flight_schedule (
    flight_no VARCHAR(10) PRIMARY KEY,
    departure_timezone VARCHAR(7) NOT NULL,  -- 如 'UTC+3:30'
    local_departure_time TIME NOT NULL,      -- 存储时分
    flight_duration TIME NOT NULL,           -- 如 '02:30'
    year YEAR 
) 
```
## 示例10:创建成绩表

创建一个学生成绩表（scores），要求分数在 **0 到 100 分**之间：

- 学生ID（student_id）：整型，主键、自动增长
- 姓名（name）：变长字符串
- 年龄（age）：整型、年龄必须≥7的约束
- 性别（gender）：定长短字符串，要求性别只能是 **'M'（男）** 或 **'F'（女）不能使用ENUM()
- 分数（score）：整型，分数在0 - 100之间

```sql
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    name VARCHAR(50),
    score INT CHECK (score BETWEEN 0 AND 100)  -- 列级约束
);
```

## 示例11:创建员工表

创建一个员工表employees：

- 员工id（emp_id）：整型、主键、自动增长
- 员工年龄(emp_age)：整型、年龄必须≥18的约束
- 性别（gender）：定长短字符串，要求性别只能是 **'M'（男）** 或 **'F'（女）不能使用ENUM()

```sql
CREATE TABLE employees (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_age INT NOT NULL CHECK (emp_age >= 18),
    gender CHAR(1) NOT NULL CHECK (gender IN ('M', 'F'))
) 
```

第二组：建表删表（敲三遍）

```sql
-- 创建数据库student_db
CREATE DATABASE student_db;
-- 使用数据库student_db
use student_db; 
-- 创建表student
CREATE TABLE student(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    gender ENUM('男','女'),
    the_date DATE
    );
-- 查看表名
SHOW TABLES;
-- 查看表结构
SHOW COLUMNS FROM student;
-- 删除表student
DROP TABLE student;
```