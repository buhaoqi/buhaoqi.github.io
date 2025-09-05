---
noteId: "fd5264f0753411f082d9bbd061b73fc2"
tags: []

---

## Day1：建库删库
1. 数据库是什么
2. 常见数据库的种类
3. 关系型数据库是什么
4. MySQL 是什么
5. MySQL的特点是什么
6. SQL是什么
7. MySQL 和 SQL 的关系是什么
8. MySQL客户端管理工具有哪些
9. 如何打开命令行窗口
10. 登录MySQL的语句是什么
11. 退出MySQL的语句是什么
12. 查看本地数据库列表的语句是什么
13. 创建数据库的语句是什么
14. 数据库命名的规范是什么
15. 书写MySQL语句的规范是什么
16. 删除数据库的语句是什么
17. 把注释翻译成SQL语句

敲三遍

```sql
-- 查看数据库列表
-- 创建数据库student_db
-- 查看数据库列表
-- 删除数据库student_db
-- 查看数据库列表
```

## Day2：创建表结构

1. 建表删表（敲三遍）

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
-- 复制表结构
CREATE TABLE student2 LIKE student;
-- 删除表student
DROP TABLE student2;
```

**2.创建学⽣表**(枚举)

要求：创建⼀个简单的学⽣表 students ，包含：

- 学号(id)：整数，主键
- 姓名(name)：字符串，最⻓20个字符，不能为空
- 年龄(age)：整数
- 性别(gender)：字符串，只能输⼊'男'或'⼥'
- ⼊学⽇期(admission_date)：⽇期类型

```sql
CREATE TABLE students(
id INT PRIMARY KEY AUTO_INCREMENT,
s_name VARCHAR(20) NOT NULL,
s_age INT,
s_gender ENUM('男','⼥'),
s_date DATE
);
```
3:创建商品表(布尔)

要求：创建⼀个商品表 products ，包含：

- 商品编号(id)：整数，主键，⾃增⻓
- 商品名称(name)：字符串，最⻓100个字符，不能为空
- 价格(price)：⼩数类型，保留2位⼩数
- 库存数量(stock)：整数，默认值为0上架时间(create_time)：时间戳，默认当前时间
- 在售(is_available):布尔类型，默认值为 `1`（表示“在售”） 

4:创建员⼯表(日期)

要求：创建⼀个员⼯表 employees ，包含：

- 员⼯号(emp_id)：整数，主键
- 姓名(name)：字符串，最⻓10个字符，不能为空
- 部⻔(department)：字符串，最⻓20个字符
- ⼯资(salary)：整数
- ⼊职⽇期(hire_date)：⽇期类型

5:创建图书表(日期)

要求：创建⼀个图书表 books ，包含：

- 图书编号(book_id)：整数，主键
- 书名(title)：字符串，最⻓50个字符，不能为空
- 作者(author)：字符串，最⻓20个字符
- 价格(price)：⼩数类型，保留2位⼩数
- 出版⽇期(publish_date)：⽇期类型

6:创建课程表(日期)

要求：创建⼀个课程表 course ，包含：

- 课程编号(course_id)：整数，主键课程
- 名称(course_name)：字符串，最⻓30个字符，不能为空
- 教师(teacher)：字符串，最⻓10个字符
- 课时(hours)：整数
- 教室(classroom)：字符串，最⻓10个字符

7:创建用户表(枚举)

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

8:创建会议表(时间)

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

9:创建文章审核表(时间)

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

10:创建航班时刻表(时间)

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
11:创建成绩表(检测)

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

12:创建员工表(检测)

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
## Day3:插入数据(5道)

**练习1:学⽣表(插入数据)**

要求：把下面表中的三行数据插入到学⽣表 students 中

| id   | s_name | s_age | s_gender | s_date     |
| ---- | ------ | ----- | -------- | ---------- |
| 1    | 张三   | 16    | 男       | 2024-09-01 |
| 2    | 李四   | 17    | 女       | 2024-09-01 |
| 3    | 王五   | 16    | 男       | 2024-08-31 |


**练习2:商品表(插入数据)**

要求：把下面表中的三行数据插入到商品表 products 中

| id   | p_name     | p_price | p_stock | p_date     |
| ---- | ---------- | ------- | ------- | ---------- |
| 1    | 海天黄豆酱 | 9       | 3000    | 2025-05-03 |
| 2    | 大宝洗面奶 | 16      | 4863    | 2024-06-01 |
| 3    | 耐克运动鞋 | 500     | 334     | 2024-08-31 |


**练习3:员⼯表(插入数据)**

要求：把下面表中的三行数据插入到员⼯表 employees 中

| id   | e_name | e_department | e_salary | e_date     |
| ---- | ------ | ------------ | -------- | ---------- |
| 1    | 张三   | 开发部       | 12000    | 2019-06-13 |
| 2    | 李四   | 后勤部       | 6000     | 2020-09-26 |
| 3    | 王五   | 财务部       | 8500     | 2025-01-31 |

**练习4:图书表(插入数据)**

要求：把下面表中的三行数据插入到图书表books 中

| id   | b_title    | b_author | b_price | b_date     |
| ---- | ---------- | -------- | ------- | ---------- |
| 1    | 有底气     | 冯唐     | 49      | 2025-03-01 |
| 2    | 我与地坛   | 史铁生   | 17      | 2011-06-01 |
| 3    | 安徒生童话 | 安徒生   | 299     | 2025-01-31 |

**练习5:课程表(插入数据)**

要求：把下面表中的三行数据插入到课程表 courses 中

| id   | c_name | c_teacher | c_hours | c_room |
| ---- | ------ | --------- | ------- | ------ |
| 1    | 语文   | 张老师    | 2       | 教室A1 |
| 2    | 数学   | 王老师    | 1       | 教室C2 |
| 3    | 英语   | 李老师    | 3       | 教室B3 |


## Day3:插入数据答案

**练习1:学⽣表(插入数据)**

要求：把下面表中的三行数据插入到学⽣表 students 中

| id   | s_name | s_age | s_gender | s_date     |
| ---- | ------ | ----- | -------- | ---------- |
| 1    | 张三   | 16    | 男       | 2024-09-01 |
| 2    | 李四   | 17    | 女       | 2024-09-01 |
| 3    | 王五   | 16    | 男       | 2024-08-31 |

参考答案

```sql
INSERT INTO students(s_name,s_age,s_gender,s_date) 
VALUES
	('张三',16,'男','2024-09-01'),
	('李四',17,'女','2024-09-01'),
	('王五',16,'男','2024-08-31');
```

**练习2:商品表(插入数据)**

要求：把下面表中的三行数据插入到商品表 products 中

| id   | p_name     | p_price | p_stock | p_date     |
| ---- | ---------- | ------- | ------- | ---------- |
| 1    | 海天黄豆酱 | 9       | 3000    | 2025-05-03 |
| 2    | 大宝洗面奶 | 16      | 4863    | 2024-06-01 |
| 3    | 耐克运动鞋 | 500     | 334     | 2024-08-31 |

参考答案

```sql
INSERT INTO products(p_name,p_price,p_stock,p_date) 
VALUES
	('海天黄豆酱',9,3000,'2025-05-03'),
	('大宝洗面奶',16,4863,'2024-06-01'),
	('耐克运动鞋',500,334,'2024-08-31');
```


**练习3:员⼯表(插入数据)**

要求：把下面表中的三行数据插入到员⼯表 employees 中

| id   | e_name | e_department | e_salary | e_date     |
| ---- | ------ | ------------ | -------- | ---------- |
| 1    | 张三   | 开发部       | 12000    | 2019-06-13 |
| 2    | 李四   | 后勤部       | 6000     | 2020-09-26 |
| 3    | 王五   | 财务部       | 8500     | 2025-01-31 |

参考答案

```sql
INSERT INTO employees(e_name,e_department,e_salary,e_date) 
VALUES
	('张三','开发部',12000,'2019-06-13'),
	('李四','后勤部',6000,'2020-09-26'),
	('王五','财务部',8500,'2025-01-31');
```

**练习4:图书表(插入数据)**

要求：把下面表中的三行数据插入到图书表books 中

| id   | b_title    | b_author | b_price | b_date     |
| ---- | ---------- | -------- | ------- | ---------- |
| 1    | 有底气     | 冯唐     | 49      | 2025-03-01 |
| 2    | 我与地坛   | 史铁生   | 17      | 2011-06-01 |
| 3    | 安徒生童话 | 安徒生   | 299     | 2025-01-31 |

参考答案

```sql
INSERT INTO books(b_title,b_author,b_price,b_date) 
VALUES
	('有底气','冯唐',49,'2025-03-01'),
	('我与地坛','史铁生',17,'2011-06-01'),
	('安徒生童话','安徒生',299,'2025-01-31');
```


**练习5:课程表(插入数据)**

要求：把下面表中的三行数据插入到课程表 courses 中

| id   | c_name | c_teacher | c_hours | c_room |
| ---- | ------ | --------- | ------- | ------ |
| 1    | 语文   | 张老师    | 2       | 教室A1 |
| 2    | 数学   | 王老师    | 1       | 教室C2 |
| 3    | 英语   | 李老师    | 3       | 教室B3 |

参考答案

```sql
INSERT INTO courses(c_name,c_teacher,c_hours,c_room) 
VALUES
	('语文','张老师',2,'教室A1'),
	('数学','王老师',1,'教室C2'),
	('英语','李老师',3,'教室B3');
```


## Day4:整数类型练习题(10道)
以下是针对 MySQL 中**整数类型（TINYINT、SMALLINT、MEDIUMINT、INT、BIGINT）**的10道练习题，涵盖基础定义、有符号/无符号、主键自增、范围应用、字段约束等常见用法，适合用于学习和巩固 MySQL 整数类型的使用。

| 技能点 | 说明 |
|--------|------|
| ✅ 基本整数类型定义 | 掌握 TINYINT、SMALLINT、MEDIUMINT、INT、BIGINT 的用法 |
| ✅ 有符号 vs 无符号 | 理解何时使用 UNSIGNED（非负数场景） |
| ✅ 主键与自增 | 熟悉将 INT 类型作为主键并设置 AUTO_INCREMENT |
| ✅ 合理选择整数类型 | 根据数值范围和业务需求选择最合适的整数类型 |
| ✅ ZEROFILL 显示格式 | 了解 ZEROFILL 的作用（仅显示用，不改变存储） |
| ✅ 默认值设置 | 为整数字段设置 DEFAULT 值 |
| ✅ 实战模拟 | 模拟真实业务表（如用户、商品、订单）中的整数字段设计 |

提示

- 可使用 `SHOW CREATE TABLE 表名;` 查看你创建的表结构
- 使用 `DESCRIBE 表名;` 或 `SHOW COLUMNS FROM 表名;` 查看字段类型
- 所有练习题重点在于**整数类型的选择与定义**，不需要插入数据，除非特别要求
---

**1：创建包含多种整数类型的表**
创建一个名为 `test_integers` 的表，包含以下字段：

- `id`：整数类型，作为主键，自增
- `tiny_num`：TINYINT 类型
- `small_num`：SMALLINT 类型
- `medium_num`：MEDIUMINT 类型
- `normal_num`：INT 类型
- `big_num`：BIGINT 类型

💡 要求：不需要设置默认值或非空约束，仅定义字段类型即可。

---

**2：创建带无符号整数的表**
创建一个名为 `unsigned_numbers` 的表，包含以下字段：

- `id`：INT 类型，主键，自增
- `positive_small`：SMALLINT UNSIGNED
- `positive_medium`：MEDIUMINT UNSIGNED
- `positive_int`：INT UNSIGNED

💡 用途模拟：存储只允许为正数的 ID 或计数（如访问量、年龄等）。

---

**3：创建表示年龄的字段**
创建一个名为 `people` 的表，包含字段：

- `id`：INT 主键自增
- `name`：VARCHAR(100)
- `age`：使用合适的**整数类型**，要求能存储 0~150 的值，**不允许负数**

💡 要求：选择最合适的整数类型，并设置为**无符号**

---

**4：创建商品库存表**
创建一个名为 `products` 的表，包含字段：

- `id`：INT 主键自增
- `name`：VARCHAR(100)
- `stock`：库存数量，使用合适的整数类型，要求范围足够大，且**不允许负数**

💡 提示：库存通常为非负整数，选择合理的整数类型并应用 `UNSIGNED`

---

**5：创建状态标志字段**
创建一个名为 `tasks` 的表，包含字段：

- `id`：INT 主键自增
- `name`：VARCHAR(100)
- `status`：表示任务状态，取值为 0（未开始）、1（进行中）、2（已完成），使用合适的**整数类型**

💡 要求：使用最小的合适整数类型，有符号即可

---

**6：创建带ZEROFILL的整数字段**
创建一个名为 `demo_zerofill` 的表，包含字段：

- `id`：INT 主键自增
- `code`：INT(5) ZEROFILL，用于显示如 00001、00012 这样的编号

💡 提示：ZEROFILL 只影响显示效果，不改变存储范围，但仍需指定整数类型

---

**7：创建用户权限级别表**
创建一个名为 `user_roles` 的表，包含字段：

- `id`：INT 主键自增
- `role_name`：VARCHAR(50)
- `level`：权限级别，取值范围 1~10，使用最小的**有符号整数类型**

💡 要求：使用能满足范围的最小整数类型即可，允许有符号

---

**8：创建大范围计数器表**
创建一个名为 `counters` 的表，包含字段：

- `id`：INT 主键自增
- `page_views`：页面访问量，可能达到数亿，使用合适的**整数类型**
- `unique_visitors`：独立访客数，可能超过 40 亿，使用能存储更大正整数的类型

💡 提示：考虑使用 `INT UNSIGNED` 和 `BIGINT UNSIGNED`

---

**9：创建带默认值的整数字段**
创建一个名为 `settings` 的表，包含字段：

- `id`：INT 主键自增
- `retry_count`：重试次数，默认值为 3，使用 TINYINT 类型
- `max_users`：最大用户数，默认 100，使用 SMALLINT 类型

💡 要求：为这两个整数字段设置合理的**默认值**

---

**10：创建电商订单**
创建一个名为 `orders` 的表，包含以下字段：

- `id`：订单ID，主键，自增，使用 INT
- `user_id`：用户ID，使用 INT
- `status`：订单状态（如 0待付款、1已付款、2已发货等），使用 TINYINT
- `quantity`：商品数量，使用 SMALLINT UNSIGNED
- `total_amount`：订单总金额（单位：分，如 100 表示 1元），使用 INT（不使用 DECIMAL，仅练习整数）
- `log_id`：操作日志ID，可能非常大，使用 BIGINT

💡 提示：模拟实际电商系统中的订单主表结构，合理选择整数类型

---

## Day4:整数类型练习题答案


在运行以下 SQL 前，请确保你已选择数据库（如 `USE your_database_name;`），或者在这些语句前加上 `CREATE DATABASE IF NOT EXISTS practice_db; USE practice_db;` 来创建并使用一个练习数据库。

---

题目 1：创建包含多种整数类型的表

**题目：**  
创建一个名为 `test_integers` 的表，包含字段：`id`（主键，自增）、`tiny_num`（TINYINT）、`small_num`（SMALLINT）、`medium_num`（MEDIUMINT）、`normal_num`（INT）、`big_num`（BIGINT）

**参考答案：**
```sql
CREATE TABLE test_integers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tiny_num TINYINT,
    small_num SMALLINT,
    medium_num MEDIUMINT,
    normal_num INT,
    big_num BIGINT
);
```

---

题目 2：创建带无符号整数的表

**题目：**  
创建一个名为 `unsigned_numbers` 的表，包含字段：`id`（主键，自增）、`positive_small`（SMALLINT UNSIGNED）、`positive_medium`（MEDIUMINT UNSIGNED）、`positive_int`（INT UNSIGNED）

**参考答案：**
```sql
CREATE TABLE unsigned_numbers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    positive_small SMALLINT UNSIGNED,
    positive_medium MEDIUMINT UNSIGNED,
    positive_int INT UNSIGNED
);
```

---

题目 3：创建表示年龄的字段

**题目：**  
创建一个名为 `people` 的表，包含字段：`id`（主键，自增）、`name`（VARCHAR(100)）、`age`（整数类型，范围 0~150，不允许负数）

**参考答案：**
```sql
CREATE TABLE people (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    age TINYINT UNSIGNED  -- 或者 SMALLINT UNSIGNED，但 TINYINT 足够表示 0~150
);
```

> ✅ 推荐使用 `TINYINT UNSIGNED`，因为 0~150 完全在 0~255 范围内

---

题目 4：创建商品库存表

**题目：**  
创建一个名为 `products` 的表，包含字段：`id`（主键，自增）、`name`（VARCHAR(100)）、`stock`（库存数量，非负整数，范围足够大）

**参考答案：**
```sql
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    stock INT UNSIGNED  -- 或者 BIGINT UNSIGNED，视库存规模而定
);
```

> ✅ 推荐使用 `INT UNSIGNED`（范围足够大），如库存可能超过 40 亿则用 `BIGINT UNSIGNED`

---

题目 5：创建状态标志字段

**题目：**  
创建一个名为 `tasks` 的表，包含字段：`id`（主键，自增）、`name`（VARCHAR(100)）、`status`（取值为 0、1、2，使用最小整数类型）

**参考答案：**
```sql
CREATE TABLE tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    status TINYINT  -- 有符号即可，范围足够存储 0,1,2
);
```

> ✅ 状态值很小，`TINYINT` 完全够用，有符号也行（-128~127）

---

题目 6：创建带 ZEROFILL 的整数字段

**题目：**  
创建一个名为 `demo_zerofill` 的表，包含字段：`id`（主键，自增）、`code`（INT(5) ZEROFILL）

**参考答案：**
```sql
CREATE TABLE demo_zerofill (
    id INT PRIMARY KEY AUTO_INCREMENT,
    code INT(5) ZEROFILL
);
```

> ⚠️ 注意：`INT(5)` 中的 5 是显示宽度，配合 `ZEROFILL` 后显示为如 `00001`，但实际存储范围仍是 INT 的范围

---

题目 7：创建用户权限级别表

**题目：**  
创建一个名为 `user_roles` 的表，包含字段：`id`（主键，自增）、`role_name`（VARCHAR(50)）、`level`（取值 1~10，最小有符号整数类型）

**参考答案：**
```sql
CREATE TABLE user_roles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    role_name VARCHAR(50),
    level TINYINT  -- 或 SMALLINT，但 TINYINT 足够表示 1~10
);
```

> ✅ 权限级别范围很小，用 `TINYINT` 即可

---

题目 8：创建大范围计数器表

**题目：**  
创建一个名为 `counters` 的表，包含字段：`id`（主键，自增）、`page_views`（可能上亿）、`unique_visitors`（可能超过 40 亿，用更大范围）

**参考答案：**
```sql
CREATE TABLE counters (
    id INT PRIMARY KEY AUTO_INCREMENT,
    page_views INT UNSIGNED,            -- 足够大，最大约 42 亿
    unique_visitors BIGINT UNSIGNED     -- 更大范围，超过 40 亿时使用
);
```

> ✅ `INT UNSIGNED` 最大约 42 亿（4,294,967,295），超过则用 `BIGINT UNSIGNED`

---

题目 9：创建带默认值的整数字段

**题目：**  
创建一个名为 `settings` 的表，包含字段：`id`（主键，自增）、`retry_count`（默认 3，TINYINT）、`max_users`（默认 100，SMALLINT）

**参考答案：**
```sql
CREATE TABLE settings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    retry_count TINYINT DEFAULT 3,
    max_users SMALLINT DEFAULT 100
);
```

> ✅ 使用合适的最小整数类型，并设置默认值

---

题目 10：综合实战 - 创建电商订单相关整数字段表

**题目：**  
创建一个名为 `orders` 的表，包含字段：
- `id`（主键，自增，INT）
- `user_id`（INT）
- `status`（TINYINT，如 0待付款、1已付款等）
- `quantity`（商品数量，非负整数，SMALLINT UNSIGNED）
- `total_amount`（订单总金额，以分为单位，INT）
- `log_id`（操作日志ID，可能非常大，BIGINT）

**参考答案：**
```sql
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    status TINYINT,
    quantity SMALLINT UNSIGNED,
    total_amount INT,         -- 如以“分”为单位存储金额，如 100 表示 1元
    log_id BIGINT
);
```

> ✅ 模拟真实电商系统的主订单表结构，合理选用整数类型

---

## D5：小数类型练习题(15道)
以下是针对 MySQL 中**小数类型（FLOAT、DECIMAL、DOUBLE）**的 **15道练习题**，涵盖基础定义、精度控制、财务金额、科学计算、近似与精确存储对比等常见应用场景，帮助你深入掌握小数类型的使用与区别。

**题目 1：创建包含 FLOAT 类型字段的表**

创建一个名为 `scientific_data` 的表，包含字段：

- `id`：INT 主键自增
- `temperature`：FLOAT，用于存储温度（可能有微小误差）
- `pressure`：FLOAT

💡 目的：模拟科学测量数据，允许小数点后近似值

---

**题目 2：创建包含 DOUBLE 类型字段的表**

创建一个名为 `high_precision_data` 的表，包含字段：

- `id`：INT 主键自增
- `latitude`：DOUBLE，存储纬度
- `longitude`：DOUBLE，存储经度

💡 目的：模拟地理坐标，需要比 FLOAT 更高的范围和精度

---

**题目 3：创建存储金额的 DECIMAL 表（精确小数）**

创建一个名为 `products` 的表，包含字段：

- `id`：INT 主键自增
- `name`：VARCHAR(100)
- `price`：DECIMAL(10, 2) —— 表示最多 10 位数字，其中小数点后 2 位（如 99999999.99）

💡 目的：存储商品价格，精确到分，不允许精度丢失

---

**题目 4：创建存储税率的 DECIMAL 表**

创建一个名为 `tax_rates` 的表，包含字段：

- `id`：INT 主键自增
- `name`：VARCHAR(50)
- `rate`：DECIMAL(5, 4) —— 如 0.1234 表示 12.34%

💡 目的：税率通常为小数点后4位，精确计算

---

**题目 5：对比 FLOAT 和 DECIMAL 存储 0.1**

创建两个表：

- `float_test`：包含字段 `value FLOAT`
- `decimal_test`：包含字段 `value DECIMAL(10, 10)`

分别插入值 `0.1`，然后查询并对比它们的存储效果（可通过 SELECT 查看是否有微小差异）

💡 目的：体验 FLOAT 的近似性与 DECIMAL 的精确性区别

---

**题目 6：创建同时包含 FLOAT / DOUBLE / DECIMAL 的综合表**

创建一个名为 `mixed_numbers` 的表，包含字段：

- `id`：INT 主键自增
- `float_col`：FLOAT
- `double_col`：DOUBLE
- `decimal_col`：DECIMAL(10, 2)

💡 目的：在一个表中同时使用三种小数类型，为后续对比做准备

---

**题目 7：创建带默认值的 DECIMAL 字段**

创建一个名为 `account_balances` 的表，包含字段：

- `id`：INT 主键自增
- `user_id`：INT
- `balance`：DECIMAL(12, 2) DEFAULT 0.00 —— 默认余额为 0.00 元

💡 目的：模拟账户余额表，设置合理的默认精确值

---

**题目 8：创建 ZEROFILL 的 FLOAT 字段**

创建一个名为 `demo_float_zf` 的表，包含字段：

- `id`：INT 主键自增
- `value`：FLOAT(8,2) ZEROFILL —— 如 00123.45

💡 目的：观察 FLOAT 类型使用 ZEROFILL 后的显示效果（仅显示格式）

---

**题目 9：创建高精度科学数值表（DOUBLE）**

创建一个名为 `physics_data` 的表，包含字段：

- `id`：INT 主键自增
- `mass`：DOUBLE —— 存储质量，可能需要大范围和高精度
- `velocity`：DOUBLE

💡 目的：模拟物理实验中的高精度数据

---

**题目 10：创建货币汇率表（DECIMAL 精确存储）**

创建一个名为 `exchange_rates` 的表，包含字段：

- `id`：INT 主键自增
- `currency`：VARCHAR(10)
- `rate`：DECIMAL(12, 6) —— 如 1 USD = 7.234567 CNY

💡 目的：汇率通常需要小数点后多位精确值，使用 DECIMAL

---

**题目 11：创建仅使用 FLOAT 的简单表**

创建一个名为 `simple_floats` 的表，包含字段：

- `id`：INT 主键自增
- `value1`：FLOAT
- `value2`：FLOAT

💡 目的：练习最基本的 FLOAT 类型定义

---

**题目 12：创建指定精度的 DOUBLE 字段**

创建一个名为 `custom_double` 的表，包含字段：

- `id`：INT 主键自增
- `data`：DOUBLE(15, 5) —— 总共 15 位，其中小数点后 5 位

💡 目的：尝试为 DOUBLE 指定精度范围（注意：仍为近似存储）

---

**题目 13：创建订单金额与运费表（DECIMAL 精确计算）**

创建一个名为 `orders` 的表，包含字段：

- `id`：INT 主键自增
- `amount`：DECIMAL(10, 2) —— 订单金额
- `shipping_fee`：DECIMAL(8, 2) —— 运费
- `total`：DECIMAL(10, 2) —— 总金额 = 金额 + 运费

💡 目的：模拟订单表中金额相关字段，全部使用精确的小数类型 DECIMAL

---

**题目 14：创建浮点类型对比表**

创建一个名为 `float_vs_decimal` 的表，包含字段：

- `id`：INT 主键自增
- `float_val`：FLOAT
- `decimal_val`：DECIMAL(10, 4)

插入相同的小数值（如 123.4567），然后查询对比它们的存储与显示差异

💡 目的：深入理解 FLOAT（近似）与 DECIMAL（精确）在实际数据中的区别

---

**题目 15：综合实战 - 电商价格与统计数据表**

创建一个名为 `ecommerce_data` 的表，包含字段：

- `id`：INT 主键自增
- `product_id`：INT
- `price`：DECIMAL(10, 2) —— 商品价格
- `discount_rate`：DECIMAL(5, 4) —— 折扣率，如 0.8500 表示85折
- `rating`：FLOAT —— 用户评分（如 4.5、3.7），允许小误差
- `views`：INT
- `sales`：BIGINT

💡 目的：模拟电商商品数据表，综合使用 DECIMAL（价格/折扣）、FLOAT（评分）、整数类型

---

## D5：小数类型练习题答案

**练习题 1：创建包含 FLOAT 类型字段的表**

**题目：** 创建一个名为 `scientific_data` 的表，包含字段：`id`（主键自增）、`temperature`（FLOAT）、`pressure`（FLOAT）

**参考答案：**
```sql
CREATE TABLE scientific_data (
    id INT PRIMARY KEY AUTO_INCREMENT,
    temperature FLOAT,
    pressure FLOAT
);
```

---

**练习题 2：创建包含 DOUBLE 类型字段的表**

**题目：** 创建一个名为 `high_precision_data` 的表，包含字段：`id`（主键自增）、`latitude`（DOUBLE）、`longitude`（DOUBLE）

**参考答案：**
```sql
CREATE TABLE high_precision_data (
    id INT PRIMARY KEY AUTO_INCREMENT,
    latitude DOUBLE,
    longitude DOUBLE
);
```

---

**练习题 3：创建存储金额的 DECIMAL 表（精确小数）**

**题目：** 创建一个名为 `products` 的表，包含字段：`id`（主键自增）、`name`（VARCHAR(100)）、`price`（DECIMAL(10, 2)）

**参考答案：**
```sql
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    price DECIMAL(10, 2)
);
```

---

**练习题 4：创建存储税率的 DECIMAL 表**

**题目：** 创建一个名为 `tax_rates` 的表，包含字段：`id`（主键自增）、`name`（VARCHAR(50)）、`rate`（DECIMAL(5, 4)）

**参考答案：**
```sql
CREATE TABLE tax_rates (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    rate DECIMAL(5, 4)
);
```

---

**练习题 5：对比 FLOAT 和 DECIMAL 存储 0.1**

**题目：** 创建两个表：`float_test`（含 FLOAT 字段）、`decimal_test`（含 DECIMAL(10,10) 字段），用于对比存储 0.1 的效果

**参考答案：**
```sql
CREATE TABLE float_test (
    id INT PRIMARY KEY AUTO_INCREMENT,
    value FLOAT
);

CREATE TABLE decimal_test (
    id INT PRIMARY KEY AUTO_INCREMENT,
    value DECIMAL(10, 10)
);
```

> ✅ 提示：你可以后续分别插入 0.1，然后 SELECT 查看它们的存储差异

---

**练习题 6：创建同时包含 FLOAT / DOUBLE / DECIMAL 的综合表**

**题目：** 创建一个名为 `mixed_numbers` 的表，包含字段：`id`（主键自增）、`float_col`（FLOAT）、`double_col`（DOUBLE）、`decimal_col`（DECIMAL(10, 2)）

**参考答案：**
```sql
CREATE TABLE mixed_numbers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    float_col FLOAT,
    double_col DOUBLE,
    decimal_col DECIMAL(10, 2)
);
```

---

**练习题 7：创建带默认值的 DECIMAL 字段**

**题目：** 创建一个名为 `account_balances` 的表，包含字段：`id`（主键自增）、`user_id`（INT）、`balance`（DECIMAL(12, 2) DEFAULT 0.00）

**参考答案：**
```sql
CREATE TABLE account_balances (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    balance DECIMAL(12, 2) DEFAULT 0.00
);
```

---

**练习题 8：创建 ZEROFILL 的 FLOAT 字段**

**题目：** 创建一个名为 `demo_float_zf` 的表，包含字段：`id`（主键自增）、`value`（FLOAT(8,2) ZEROFILL）

**参考答案：**
```sql
CREATE TABLE demo_float_zf (
    id INT PRIMARY KEY AUTO_INCREMENT,
    value FLOAT(8, 2) ZEROFILL
);
```

> ⚠️ 注意：ZEROFILL 对 FLOAT 是显示效果，不影响实际精度或存储

---

**练习题 9：创建高精度科学数值表（DOUBLE）**

**题目：** 创建一个名为 `physics_data` 的表，包含字段：`id`（主键自增）、`mass`（DOUBLE）、`velocity`（DOUBLE）

**参考答案：**
```sql
CREATE TABLE physics_data (
    id INT PRIMARY KEY AUTO_INCREMENT,
    mass DOUBLE,
    velocity DOUBLE
);
```

---

**练习题 10：创建货币汇率表（DECIMAL 精确存储）**

**题目：** 创建一个名为 `exchange_rates` 的表，包含字段：`id`（主键自增）、`currency`（VARCHAR(10)）、`rate`（DECIMAL(12, 6)）

**参考答案：**
```sql
CREATE TABLE exchange_rates (
    id INT PRIMARY KEY AUTO_INCREMENT,
    currency VARCHAR(10),
    rate DECIMAL(12, 6)
);
```

---

**练习题 11：创建仅使用 FLOAT 的简单表**

**题目：** 创建一个名为 `simple_floats` 的表，包含字段：`id`（主键自增）、`value1`（FLOAT）、`value2`（FLOAT）

**参考答案：**
```sql
CREATE TABLE simple_floats (
    id INT PRIMARY KEY AUTO_INCREMENT,
    value1 FLOAT,
    value2 FLOAT
);
```

---

**练习题 12：创建指定精度的 DOUBLE 字段**

**题目：** 创建一个名为 `custom_double` 的表，包含字段：`id`（主键自增）、`data`（DOUBLE(15, 5)）

**参考答案：**
```sql
CREATE TABLE custom_double (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data DOUBLE(15, 5)
);
```

> ⚠️ 注意：DOUBLE(15,5) 中的 15 和 5 是精度提示，但 DOUBLE 仍是近似存储

---

**练习题 13：创建订单金额与运费表（DECIMAL 精确计算）**

**题目：** 创建一个名为 `orders` 的表，包含字段：`id`（主键自增）、`amount`（DECIMAL(10, 2)）、`shipping_fee`（DECIMAL(8, 2)）、`total`（DECIMAL(10, 2)）

**参考答案：**
```sql
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    amount DECIMAL(10, 2),
    shipping_fee DECIMAL(8, 2),
    total DECIMAL(10, 2)
);
```

---

**练习题 14：创建浮点类型对比表**

**题目：** 创建一个名为 `float_vs_decimal` 的表，包含字段：`id`（主键自增）、`float_val`（FLOAT）、`decimal_val`（DECIMAL(10, 4)）

**参考答案：**
```sql
CREATE TABLE float_vs_decimal (
    id INT PRIMARY KEY AUTO_INCREMENT,
    float_val FLOAT,
    decimal_val DECIMAL(10, 4)
);
```

> ✅ 你可以插入相同的小数，比如 123.4567，然后对比它们的存储差异

---

**练习题 15：综合实战 - 电商价格与统计数据表**

**题目：** 创建一个名为 `ecommerce_data` 的表，包含字段：
- `id`（主键自增）
- `product_id`（INT）
- `price`（DECIMAL(10, 2)）
- `discount_rate`（DECIMAL(5, 4)）
- `rating`（FLOAT）
- `views`（INT）
- `sales`（BIGINT）

**参考答案：**
```sql
CREATE TABLE ecommerce_data (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    price DECIMAL(10, 2),
    discount_rate DECIMAL(5, 4),
    rating FLOAT,
    views INT,
    sales BIGINT
);
```

---

## D6-字符串类型练习题(15道)

- **5道 CHAR 类型练习题**（定长字符串）
- **5道 VARCHAR 类型练习题**（变长字符串）
- **5道 TINYTEXT 类型练习题**（超短文本）

---

### CHAR 类型练习题

> CHAR 是**定长字符串**，适合存储固定长度的数据，如国家代码、性别、状态等。不足部分数据库会用空格填充，但取出时通常会自动去掉尾部空格。

练习1：创建包含 CHAR(1) 字段的表，存储性别

**任务：**  
创建一个名为 `users_char` 的表，包含字段：

- `id` INT 主键
- `name` VARCHAR(50)
- `gender` CHAR(1) —— 存储 'M' 或 'F'

**目的：** 练习定义和使用 CHAR(1) 类型字段

---

练习2：创建包含 CHAR(2) 字段的表，存储国家代码

**任务：**  
创建表 `countries_char`，包含字段：

- `id` INT PRIMARY KEY
- `country_name` VARCHAR(100)
- `code` CHAR(2) —— 如 'CN', 'US', 'JP'

**目的：** 学习定义 CHAR(2) 并存储固定长度的字符编码

---

练习3：创建包含 CHAR(3) 字段的表，存储状态码

**任务：**  
创建表 `orders_char`，包含字段：

- `id` INT PRIMARY KEY
- `order_no` VARCHAR(50)
- `status` CHAR(3) —— 如 'NEW', 'OLD', 'DONE'（固定3字符状态）

**目的：** 掌握 CHAR(3) 的定义与使用场景

---

练习4：创建表并插入 CHAR 类型数据

**任务：**  
创建表 `test_char`：

- `id` INT PRIMARY KEY
- `code` CHAR(4) —— 存储如 'ABCD'

然后插入一条数据，如：`id=1, code='TEST'`

**目的：** 实践 CHAR 类型的数据插入与定义

---

练习5：创建表存储固定长度编号

**任务：**  
创建表 `products_char`：

- `id` INT PRIMARY KEY
- `serial_no` CHAR(10) —— 产品序列号，固定10位字符

**目的：** 模拟固定长度编号字段，如流水号、编号等

---

### VARCHAR 类型练习题

> VARCHAR 是**变长字符串**，适合存储长度不固定的文本，如用户名、标题、描述等，是最常用的字符串类型。

练习1：创建包含 VARCHAR(50) 的用户表

**任务：**  
创建表 `users_varchar`，包含字段：

- `id` INT PRIMARY KEY
- `username` VARCHAR(50) —— 用户名
- `email` VARCHAR(100)

**目的：** 学习定义和使用 VARCHAR 类型字段

---

练习2：创建商品表，包含 VARCHAR 字段

**任务：**  
创建表 `products_varchar`，包含字段：

- `id` INT PRIMARY KEY
- `name` VARCHAR(100) —— 商品名称
- `category` VARCHAR(50) —— 商品分类

**目的：** 掌握 VARCHAR 在商品、内容类数据中的使用

---

练习3：创建表并插入变长字符串数据

**任务：**  
创建表 `test_varchar`：

- `id` INT PRIMARY KEY
- `title` VARCHAR(200) —— 标题

插入一条数据，如：`id=1, title='Hello MySQL'`

**目的：** 实际插入 VARCHAR 类型数据，体验变长特性

---

练习4：创建博客文章表，含标题和摘要字段

**任务：**  
创建表 `articles_varchar`：

- `id` INT PRIMARY KEY
- `title` VARCHAR(200)
- `summary` VARCHAR(500)

**目的：** 模拟文章标题与摘要字段，学习 VARCHAR 的灵活使用

---

练习5：创建客户表，包含姓名与地址字段

**任务：**  
创建表 `customers_varchar`：

- `id` INT PRIMARY KEY
- `name` VARCHAR(100)
- `address` VARCHAR(255)

**目的：** 模拟客户信息表，练习 VARCHAR 在真实业务中的使用

---

### TINYTEXT 类型练习题

> TINYTEXT 是**非常小的文本类型**，最大 255 字节，适合存储简短说明、状态文本等，但不支持默认值，一般用于不太需要检索的字段。

练习1：创建包含 TINYTEXT 的状态表

**任务：**  
创建表 `status_tinytext`，包含字段：

- `id` INT PRIMARY KEY
- `description` TINYTEXT —— 简短状态描述，如 'Active', 'Pending'

**目的：** 学习定义和使用 TINYTEXT 类型字段

---

练习2：创建日志类型表，含操作说明字段

**任务：**  
创建表 `logs_tinytext`：

- `id` INT PRIMARY KEY
- `action` VARCHAR(50)
- `note` TINYTEXT —— 简单备注，如 'User logged in'

**目的：** 使用 TINYTEXT 存储简短文本信息

---

练习3：创建表存储简单的文本标签

**任务：**  
创建表 `tags_tinytext`：

- `id` INT PRIMARY KEY
- `tag_name` TINYTEXT —— 如 'urgent', 'review'

**目的：** 模拟短标签或分类名，练习 TINYTEXT 的使用

---

练习4：创建反馈表，包含用户简短意见字段

**任务：**  
创建表 `feedback_tinytext`：

- `id` INT PRIMARY KEY
- `user_id` INT
- `comment` TINYTEXT —— 用户简短反馈，不超过 255 字节

**目的：** 模拟用户反馈场景，使用 TINYTEXT 存储简短意见

---

练习5：创建配置表，存储简短配置说明

**任务：**  
创建表 `configs_tinytext`：

- `id` INT PRIMARY KEY
- `config_key` VARCHAR(50)
- `config_desc` TINYTEXT —— 配置项的简短说明

**目的：** 模拟系统配置表中的简短描述字段，练习 TINYTEXT 类型

---

## D6-字符串类型练习题答案

### CHAR 类型练习题答案

练习1：创建包含 CHAR(1) 字段的表，存储性别

**任务：** 创建表 `users_char`，包含字段：`id`、`name`、`gender`（CHAR(1)）

**参考答案：**
```sql
CREATE TABLE users_char (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    gender CHAR(1)  -- 如 'M' 或 'F'
);
```

---

练习2：创建包含 CHAR(2) 字段的表，存储国家代码

**任务：** 创建表 `countries_char`，包含字段：`id`、`country_name`、`code`（CHAR(2)）

**参考答案：**
```sql
CREATE TABLE countries_char (
    id INT PRIMARY KEY,
    country_name VARCHAR(100),
    code CHAR(2)  -- 如 'CN', 'US'
);
```

---

练习3：创建包含 CHAR(3) 字段的表，存储状态码

**任务：** 创建表 `orders_char`，包含字段：`id`、`order_no`、`status`（CHAR(3)）

**参考答案：**
```sql
CREATE TABLE orders_char (
    id INT PRIMARY KEY,
    order_no VARCHAR(50),
    status CHAR(3)  -- 如 'NEW', 'OLD'
);
```

---

练习4：创建表并插入 CHAR 类型数据

**任务：** 创建表 `test_char`，包含字段：`id`、`code`（CHAR(4)）

**参考答案：**
```sql
CREATE TABLE test_char (
    id INT PRIMARY KEY,
    code CHAR(4)  -- 如 'TEST'
);
```

> ✅ 你可以后续使用 INSERT 插入如 `('1', 'ABCD')` 这样的数据

---

练习5：创建表存储固定长度编号

**任务：** 创建表 `products_char`，包含字段：`id`、`serial_no`（CHAR(10)）

**参考答案：**
```sql
CREATE TABLE products_char (
    id INT PRIMARY KEY,
    serial_no CHAR(10)  -- 如 'SN12345678'
);
```

---

### VARCHAR 类型练习题答案

> VARCHAR 是变长字符串，适合存储如用户名、标题、描述等长度不固定的文本。

练习1：创建包含 VARCHAR(50) 的用户表

**任务：** 创建表 `users_varchar`，包含字段：`id`、`username`、`email`

**参考答案：**
```sql
CREATE TABLE users_varchar (
    id INT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100)
);
```

---

练习2：创建商品表，包含 VARCHAR 字段

**任务：** 创建表 `products_varchar`，包含字段：`id`、`name`、`category`

**参考答案：**
```sql
CREATE TABLE products_varchar (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    category VARCHAR(50)
);
```

---

练习3：创建表并插入变长字符串数据

**任务：** 创建表 `test_varchar`，包含字段：`id`、`title`（VARCHAR(200)）

**参考答案：**
```sql
CREATE TABLE test_varchar (
    id INT PRIMARY KEY,
    title VARCHAR(200)  -- 如 'Hello MySQL'
);
```

---

练习4：创建博客文章表，含标题和摘要字段

**任务：** 创建表 `articles_varchar`，包含字段：`id`、`title`、`summary`

**参考答案：**
```sql
CREATE TABLE articles_varchar (
    id INT PRIMARY KEY,
    title VARCHAR(200),
    summary VARCHAR(500)
);
```

---

练习5：创建客户表，包含姓名与地址字段

**任务：** 创建表 `customers_varchar`，包含字段：`id`、`name`、`address`

**参考答案：**
```sql
CREATE TABLE customers_varchar (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    address VARCHAR(255)
);
```

---

### TINYTEXT 类型练习题答案

> TINYTEXT 是变长文本类型，最大 **255 字节**，适合存储简短说明、备注等，但不支持默认值。

练习1：创建包含 TINYTEXT 的状态表

**任务：** 创建表 `status_tinytext`，包含字段：`id`、`description`（TINYTEXT）

**参考答案：**
```sql
CREATE TABLE status_tinytext (
    id INT PRIMARY KEY,
    description TINYTEXT  -- 如 'Active', 'Pending'
);
```

---

练习2：创建日志类型表，含操作说明字段

**任务：** 创建表 `logs_tinytext`，包含字段：`id`、`action`、`note`（TINYTEXT）

**参考答案：**
```sql
CREATE TABLE logs_tinytext (
    id INT PRIMARY KEY,
    action VARCHAR(50),
    note TINYTEXT  -- 如 'User logged in'
);
```

---

练习3：创建表存储简单的文本标签

**任务：** 创建表 `tags_tinytext`，包含字段：`id`、`tag_name`（TINYTEXT）

**参考答案：**
```sql
CREATE TABLE tags_tinytext (
    id INT PRIMARY KEY,
    tag_name TINYTEXT  -- 如 'urgent', 'review'
);
```

---

练习4：创建反馈表，包含用户简短意见字段

**任务：** 创建表 `feedback_tinytext`，包含字段：`id`、`user_id`、`comment`（TINYTEXT）

**参考答案：**
```sql
CREATE TABLE feedback_tinytext (
    id INT PRIMARY KEY,
    user_id INT,
    comment TINYTEXT  -- 用户简短反馈
);
```

---

练习5：创建配置表，存储简短配置说明

**任务：** 创建表 `configs_tinytext`，包含字段：`id`、`config_key`、`config_desc`（TINYTEXT）

**参考答案：**
```sql
CREATE TABLE configs_tinytext (
    id INT PRIMARY KEY,
    config_key VARCHAR(50),
    config_desc TINYTEXT  -- 配置项简短说明
);
```

---

总结

| 类型     | 练习数量 | 最大长度      | 是否定长 | 主要用途                     | 对应练习编号范围 |
|----------|-----------|---------------|-----------|------------------------------|------------------|
| **CHAR** | 5道       | 0 ~ 255 字符  | ✅ 定长   | 性别、状态码、国家代码等固定长度文本 | 1 ~ 5            |
| **VARCHAR** | 5道    | 0 ~ 65,535 字节（实际更小） | ❌ 变长   | 用户名、标题、描述等变长文本 | 6 ~ 10           |
| **TINYTEXT** | 5道   | 255 字节      | ❌ 变长   | 简短说明、备注、标签等超短文本 | 11 ~ 15          |

---

## D7-布尔类型练习(5道)

虽然 MySQL **没有原生的布尔（BOOLEAN）数据类型**，但它支持使用 **BOOLEAN** 和 **BOOL** 关键字，这两个关键字实际上是 **TINYINT(1)** 的别名，通常用于存储 **0（假/否）和 1（真/是）**，表示逻辑状态。

所有布尔字段本质上都是 **TINYINT(1)**，通常存储 **0（假/否） 或 1（真/是）**

---

练习 1：创建用户表，包含是否激活的布尔字段

**题目：**  
创建一个名为 `users` 的表，包含以下字段：
- `id`：INT 主键
- `username`：VARCHAR(50)
- `is_active`：布尔类型字段，表示用户是否激活（0=未激活，1=已激活）

**目标：** 使用 `BOOLEAN` 或 `TINYINT(1)` 定义是否激活字段，并理解其本质

---


练习 2：创建文章表，包含是否发布的布尔字段

**题目：**  
创建一个名为 `articles` 的表，包含以下字段：
- `id`：INT 主键
- `title`：VARCHAR(200)
- `content`：TEXT
- `is_published`：布尔类型字段，表示文章是否已发布（0=草稿，1=已发布）

**目标：** 使用 BOOLEAN 类型字段来模拟文章发布状态

---


练习 3：创建管理员表，包含是否为管理员的布尔字段

**题目：**  
创建一个名为 `accounts` 的表，包含以下字段：
- `id`：INT 主键
- `username`：VARCHAR(50)
- `is_admin`：布尔类型字段，表示该用户是否为管理员（0=普通用户，1=管理员）

**目标：** 使用布尔字段区分用户角色

---


练习 4：创建订单表，包含是否已支付的布尔字段

**题目：**  
创建一个名为 `orders` 的表，包含以下字段：
- `id`：INT 主键
- `order_no`：VARCHAR(50)
- `amount`：DECIMAL(10,2)
- `is_paid`：布尔类型字段，表示该订单是否已支付（0=未支付，1=已支付）

**目标：** 使用布尔字段记录订单支付状态

---


练习 5：创建任务表，包含是否完成的布尔字段与是否重要的布尔字段

**题目：**  
创建一个名为 `tasks` 的表，包含以下字段：
- `id`：INT 主键
- `description`：VARCHAR(255)
- `is_completed`：布尔类型字段，表示任务是否已完成
- `is_important`：布尔类型字段，表示任务是否重要

**目标：** 在同一张表中使用多个布尔字段，表示不同的逻辑状态

---


## D7-布尔类型练习答案

练习 1：创建用户表，包含是否激活的布尔字段

**题目：**  
创建一个名为 `users` 的表，包含以下字段：
- `id`：INT 主键
- `username`：VARCHAR(50)
- `is_active`：布尔类型字段，表示用户是否激活（0=未激活，1=已激活）

**目标：** 使用 `BOOLEAN` 或 `TINYINT(1)` 定义是否激活字段，并理解其本质

---

参考答案：
```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(50),
    is_active BOOLEAN  -- 实际是 TINYINT(1)，0=否，1=是
);
```

> 🎯 说明：`is_active` 字段通常用于表示用户状态，约定俗成 0 表示未激活，1 表示已激活

---

练习 2：创建文章表，包含是否发布的布尔字段

**题目：**  
创建一个名为 `articles` 的表，包含以下字段：
- `id`：INT 主键
- `title`：VARCHAR(200)
- `content`：TEXT
- `is_published`：布尔类型字段，表示文章是否已发布（0=草稿，1=已发布）

**目标：** 使用 BOOLEAN 类型字段来模拟文章发布状态

---

参考答案：
```sql
CREATE TABLE articles (
    id INT PRIMARY KEY,
    title VARCHAR(200),
    content TEXT,
    is_published BOOLEAN DEFAULT 0  -- 默认未发布
);
```

> ✅ 可以设置默认值为 0，表示新建文章默认为“未发布”状态

---

练习 3：创建管理员表，包含是否为管理员的布尔字段

**题目：**  
创建一个名为 `accounts` 的表，包含以下字段：
- `id`：INT 主键
- `username`：VARCHAR(50)
- `is_admin`：布尔类型字段，表示该用户是否为管理员（0=普通用户，1=管理员）

**目标：** 使用布尔字段区分用户角色

---

参考答案：
```sql
CREATE TABLE accounts (
    id INT PRIMARY KEY,
    username VARCHAR(50),
    is_admin BOOLEAN DEFAULT 0  -- 默认不是管理员
);
```

> ✅ 这是一种常见的权限标识方式，用 0/1 表示是否具有特殊权限

---

练习 4：创建订单表，包含是否已支付的布尔字段

**题目：**  
创建一个名为 `orders` 的表，包含以下字段：
- `id`：INT 主键
- `order_no`：VARCHAR(50)
- `amount`：DECIMAL(10,2)
- `is_paid`：布尔类型字段，表示该订单是否已支付（0=未支付，1=已支付）

**目标：** 使用布尔字段记录订单支付状态

---

参考答案：
```sql
CREATE TABLE orders (
    id INT PRIMARY KEY,
    order_no VARCHAR(50),
    amount DECIMAL(10, 2),
    is_paid BOOLEAN DEFAULT 0  -- 默认未支付
);
```

> ✅ 布尔字段非常适合表示“是/否”类的业务状态，如支付、审核、启用等

---

练习 5：创建任务表，包含是否完成的布尔字段与是否重要的布尔字段

**题目：**  
创建一个名为 `tasks` 的表，包含以下字段：
- `id`：INT 主键
- `description`：VARCHAR(255)
- `is_completed`：布尔类型字段，表示任务是否已完成
- `is_important`：布尔类型字段，表示任务是否重要

**目标：** 在同一张表中使用多个布尔字段，表示不同的逻辑状态

---

参考答案：
```sql
CREATE TABLE tasks (
    id INT PRIMARY KEY,
    description VARCHAR(255),
    is_completed BOOLEAN DEFAULT 0,  -- 默认未完成
    is_important BOOLEAN DEFAULT 0   -- 默认不重要
);
```

> ✅ 一个表中可以使用多个 BOOLEAN 字段来表示不同的标志位或状态，如完成状态、重要程度、是否通知等

---