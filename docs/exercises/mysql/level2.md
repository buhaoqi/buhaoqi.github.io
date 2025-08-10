---
noteId: "1d489af075c511f08787c9dafe86ffae"
tags: []

---

## D1-日期时间类型建表练习(20道)

以下是 **20 道 MySQL 建表练习题**，专注于练习 **DATE、TIME、DATETIME、TIMESTAMP、YEAR** 这五种日期时间类型的使用，**每道题都尽可能同时包含多个日期时间字段**，帮助你熟练掌握：

- 如何定义这些字段
- 它们各自适合的场景
- 如何在一个表中组合使用多个日期时间类型字段
- 不同类型之间的区别与联系

> ⚠️ 注意：
> - **DATETIME** 和 **TIMESTAMP** 都能存储日期+时间，但有**范围、时区、自动更新**等区别
> - **DATE** 只存储日期（年-月-日）
> - **TIME** 只存储时间（时:分:秒）
> - **YEAR** 只存储年份

---

**练习 1：用户账户表**

创建表 `user_accounts`，包含字段：

- `id` INT 主键
- `username` VARCHAR(50)
- `birth_date` DATE —— 出生日期
- `register_time` DATETIME —— 注册时间
- `last_login` TIMESTAMP —— 最后登录时间（自动更新）
- `account_year` YEAR —— 账户创建年份

---

**练习 2：员工信息表**

创建表 `employees`，包含字段：

- `id` INT PRIMARY KEY
- `name` VARCHAR(100)
- `hire_date` DATE —— 入职日期
- `work_time` TIME —— 标准工作时间（如 '09:00:00'）
- `created_at` DATETIME —— 记录创建时间
- `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
- `entry_year` YEAR —— 入职年份

---

**练习 3：课程安排表**

创建表 `courses`，包含字段：

- `id` INT PRIMARY KEY
- `course_name` VARCHAR(100)
- `class_date` DATE —— 上课日期
- `start_time` TIME —— 上课开始时间
- `end_time` TIME —— 上课结束时间
- `schedule_datetime` DATETIME —— 计划发布时间
- `academic_year` YEAR —— 学年

---

**练习 4：订单记录表**

创建表 `orders`，包含字段：

- `id` INT PRIMARY KEY
- `order_no` VARCHAR(50)
- `order_date` DATE —— 下单日期
- `order_time` TIME —— 下单时间
- `delivery_datetime` DATETIME —— 预计送达时间
- `created_at` TIMESTAMP —— 订单创建时间（自动记录）
- `order_year` YEAR —— 订单年份

---

**练习 5：设备维护表**

创建表 `equipment_maintenance`，包含字段：

- `id` INT PRIMARY KEY
- `equipment_name` VARCHAR(100)
- `last_check_date` DATE —— 上次检查日期
- `check_time` TIME —— 检查时间
- `next_maintenance` DATETIME —— 下次维护时间
- `recorded_at` TIMESTAMP —— 记录时间
- `maintenance_year` YEAR

---

**练习 6：会议安排表**

创建表 `meetings`，包含字段：

- `id` INT PRIMARY KEY
- `title` VARCHAR(200)
- `meeting_date` DATE —— 会议日期
- `start_time` TIME —— 开始时间
- `end_time` TIME —— 结束时间
- `scheduled_datetime` DATETIME —— 计划安排时间
- `planning_year` YEAR

---

**练习 7：航班信息表**

创建表 `flights`，包含字段：

- `id` INT PRIMARY KEY
- `flight_no` VARCHAR(20)
- `departure_date` DATE —— 起飞日期
- `departure_time` TIME —— 起飞时间
- `arrival_datetime` DATETIME —— 到达时间（含日期）
- `created_at` TIMESTAMP —— 创建时间
- `flight_year` YEAR

---

**练习 8：考试安排表**

创建表 `exams`，包含字段：

- `id` INT PRIMARY KEY
- `exam_name` VARCHAR(100)
- `exam_date` DATE —— 考试日期
- `start_time` TIME —— 开始时间
- `end_time` TIME —— 结束时间
- `registration_datetime` DATETIME —— 报名截止时间
- `exam_year` YEAR

---

**练习 9：项目进度表**

创建表 `projects`，包含字段：

- `id` INT PRIMARY KEY
- `project_name` VARCHAR(100)
- `start_date` DATE —— 启动日期
- `daily_work_time` TIME —— 每日工作时长
- `last_update` DATETIME —— 最后更新时间
- `created_at` TIMESTAMP —— 创建时间
- `project_year` YEAR

---

**练习 10：图书借阅表**

创建表 `book_loans`，包含字段：

- `id` INT PRIMARY KEY
- `book_title` VARCHAR(200)
- `borrow_date` DATE —— 借阅日期
- `due_time` TIME —— 应还时间（某日内时间）
- `return_datetime` DATETIME —— 实际归还时间
- `record_timestamp` TIMESTAMP —— 记录时间
- `loan_year` YEAR

---

**练习 11：活动报名表**

创建表 `event_registrations`，包含字段：

- `id` INT PRIMARY KEY
- `event_name` VARCHAR(200)
- `event_date` DATE —— 活动日期
- `signup_time` TIME —— 报名提交时间
- `event_datetime` DATETIME —— 活动开始时间（含日期）
- `created_at` TIMESTAMP —— 记录创建时间
- `event_year` YEAR

---

**练习 12：客户拜访表**

创建表 `customer_visits`，包含字段：

- `id` INT PRIMARY KEY
- `customer_name` VARCHAR(100)
- `visit_date` DATE —— 拜访日期
- `visit_time` TIME —— 拜访时间
- `followup_datetime` DATETIME —— 跟进时间
- `logged_at` TIMESTAMP —— 记录时间
- `visit_year` YEAR

---

**练习 13：培训课程表**

创建表 `training_sessions`，包含字段：

- `id` INT PRIMARY KEY
- `session_name` VARCHAR(100)
- `class_date` DATE —— 上课日期
- `class_time` TIME —— 上课时间
- `registration_deadline` DATETIME —— 报名截止时间
- `created_timestamp` TIMESTAMP —— 创建时间
- `training_year` YEAR

---

**练习 14：车辆使用记录表**

创建表 `vehicle_usage`，包含字段：

- `id` INT PRIMARY KEY
- `vehicle_no` VARCHAR(20)
- `usage_date` DATE —— 使用日期
- `departure_time` TIME —— 出发时间
- `return_datetime` DATETIME —— 返回时间
- `recorded_at` TIMESTAMP —— 记录时间
- `year_used` YEAR

---

**练习 15：医生排班表**

创建表 `doctor_schedules`，包含字段：

- `id` INT PRIMARY KEY
- `doctor_name` VARCHAR(100)
- `work_date` DATE —— 工作日期
- `shift_start` TIME —— 班次开始时间
- `shift_end` TIME —— 班次结束时间
- `schedule_datetime` DATETIME —— 排班时间
- `schedule_year` YEAR

---

**练习 16：软件发布表**

创建表 `software_releases`，包含字段：

- `id` INT PRIMARY KEY
- `version` VARCHAR(50)
- `release_date` DATE —— 发布日期
- `release_time` TIME —— 发布时间
- `published_datetime` DATETIME —— 实际发布时间
- `created_at` TIMESTAMP —— 记录时间
- `release_year` YEAR

---

**练习 17：广告投放表**

创建表 `ad_campaigns`，包含字段：

- `id` INT PRIMARY KEY
- `campaign_name` VARCHAR(200)
- `start_date` DATE —— 开始日期
- `start_time` TIME —— 开始时间
- `end_datetime` DATETIME —— 结束时间
- `created_at` TIMESTAMP —— 创建时间
- `campaign_year` YEAR

---

**练习 18：设备巡检表**

创建表 `device_inspections`，包含字段：

- `id` INT PRIMARY KEY
- `device_id` INT
- `inspection_date` DATE —— 巡检日期
- `check_time` TIME —— 检查时间
- `report_datetime` DATETIME —— 报告生成时间
- `logged_at` TIMESTAMP —— 记录时间
- `inspection_year` YEAR

---

**练习 19：食谱发布表**

创建表 `recipes`，包含字段：

- `id` INT PRIMARY KEY
- `title` VARCHAR(200)
- `publish_date` DATE —— 发布日期
- `prep_time` TIME —— 准备时间
- `created_datetime` DATETIME —— 创建时间
- `updated_at` TIMESTAMP —— 更新时间
- `recipe_year` YEAR

---

**练习 20：会议室预定表**

创建表 `meeting_room_bookings`，包含字段：

- `id` INT PRIMARY KEY
- `room_name` VARCHAR(100)
- `booking_date` DATE —— 预定日期
- `start_time` TIME —— 开始时间
- `end_datetime` DATETIME —— 结束时间
- `created_at` TIMESTAMP —— 创建时间
- `booking_year` YEAR

---

## D1-日期时间练习题答案


以下是前面提供的 **20 道 MySQL 日期时间类型建表练习题** 的**完整参考答案**，即每道题对应的 **CREATE TABLE 建表语句**，包含字段：

- **DATE**（日期，如 '2024-06-01'）
- **TIME**（时间，如 '14:30:00'）
- **DATETIME**（日期+时间，如 '2024-06-01 14:30:00'）
- **TIMESTAMP**（时间戳，自动记录/更新时间，范围较小）
- **YEAR**（年份，如 2024）

> ✅ 这些表结构主要用于练习如何在一个表中**同时使用多个日期时间类型字段**，模拟真实业务场景，比如用户注册、订单管理、课程安排、设备维护、航班信息等。

---

练习 1：用户账户表

```sql
CREATE TABLE user_accounts (
    id INT PRIMARY KEY,
    username VARCHAR(50),
    birth_date DATE,
    register_time DATETIME,
    last_login TIMESTAMP,
    account_year YEAR
);
```

---

练习 2：员工信息表

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    hire_date DATE,
    work_time TIME,
    created_at DATETIME,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    entry_year YEAR
);
```

---

练习 3：课程安排表

```sql
CREATE TABLE courses (
    id INT PRIMARY KEY,
    course_name VARCHAR(100),
    class_date DATE,
    start_time TIME,
    end_time TIME,
    schedule_datetime DATETIME,
    academic_year YEAR
);
```

---

练习 4：订单记录表

```sql
CREATE TABLE orders (
    id INT PRIMARY KEY,
    order_no VARCHAR(50),
    order_date DATE,
    order_time TIME,
    delivery_datetime DATETIME,
    created_at TIMESTAMP,
    order_year YEAR
);
```

---

练习 5：设备维护表

```sql
CREATE TABLE equipment_maintenance (
    id INT PRIMARY KEY,
    equipment_name VARCHAR(100),
    last_check_date DATE,
    check_time TIME,
    next_maintenance DATETIME,
    recorded_at TIMESTAMP,
    maintenance_year YEAR
);
```

---

练习 6：会议安排表

```sql
CREATE TABLE meetings (
    id INT PRIMARY KEY,
    title VARCHAR(200),
    meeting_date DATE,
    start_time TIME,
    end_time TIME,
    scheduled_datetime DATETIME,
    planning_year YEAR
);
```

---

练习 7：航班信息表

```sql
CREATE TABLE flights (
    id INT PRIMARY KEY,
    flight_no VARCHAR(20),
    departure_date DATE,
    departure_time TIME,
    arrival_datetime DATETIME,
    created_at TIMESTAMP,
    flight_year YEAR
);
```

---

练习 8：考试安排表

```sql
CREATE TABLE exams (
    id INT PRIMARY KEY,
    exam_name VARCHAR(100),
    exam_date DATE,
    start_time TIME,
    end_time TIME,
    registration_datetime DATETIME,
    exam_year YEAR
);
```

---

练习 9：项目进度表

```sql
CREATE TABLE projects (
    id INT PRIMARY KEY,
    project_name VARCHAR(100),
    start_date DATE,
    daily_work_time TIME,
    last_update DATETIME,
    created_at TIMESTAMP,
    project_year YEAR
);
```

---

练习 10：图书借阅表

```sql
CREATE TABLE book_loans (
    id INT PRIMARY KEY,
    book_title VARCHAR(200),
    borrow_date DATE,
    due_time TIME,
    return_datetime DATETIME,
    record_timestamp TIMESTAMP,
    loan_year YEAR
);
```

---

练习 11：活动报名表

```sql
CREATE TABLE event_registrations (
    id INT PRIMARY KEY,
    event_name VARCHAR(200),
    event_date DATE,
    signup_time TIME,
    event_datetime DATETIME,
    created_at TIMESTAMP,
    event_year YEAR
);
```

---

练习 12：客户拜访表

```sql
CREATE TABLE customer_visits (
    id INT PRIMARY KEY,
    customer_name VARCHAR(100),
    visit_date DATE,
    visit_time TIME,
    followup_datetime DATETIME,
    logged_at TIMESTAMP,
    visit_year YEAR
);
```

---

练习 13：培训课程表

```sql
CREATE TABLE training_sessions (
    id INT PRIMARY KEY,
    session_name VARCHAR(100),
    class_date DATE,
    class_time TIME,
    registration_deadline DATETIME,
    created_timestamp TIMESTAMP,
    training_year YEAR
);
```

---

练习 14：车辆使用记录表

```sql
CREATE TABLE vehicle_usage (
    id INT PRIMARY KEY,
    vehicle_no VARCHAR(20),
    usage_date DATE,
    departure_time TIME,
    return_datetime DATETIME,
    recorded_at TIMESTAMP,
    year_used YEAR
);
```

---

练习 15：医生排班表

```sql
CREATE TABLE doctor_schedules (
    id INT PRIMARY KEY,
    doctor_name VARCHAR(100),
    work_date DATE,
    shift_start TIME,
    shift_end TIME,
    schedule_datetime DATETIME,
    schedule_year YEAR
);
```

---

练习 16：软件发布表

```sql
CREATE TABLE software_releases (
    id INT PRIMARY KEY,
    version VARCHAR(50),
    release_date DATE,
    release_time TIME,
    published_datetime DATETIME,
    created_at TIMESTAMP,
    release_year YEAR
);
```

---

练习 17：广告投放表

```sql
CREATE TABLE ad_campaigns (
    id INT PRIMARY KEY,
    campaign_name VARCHAR(200),
    start_date DATE,
    start_time TIME,
    end_datetime DATETIME,
    created_at TIMESTAMP,
    campaign_year YEAR
);
```

---

练习 18：设备巡检表

```sql
CREATE TABLE device_inspections (
    id INT PRIMARY KEY,
    device_id INT,
    inspection_date DATE,
    check_time TIME,
    report_datetime DATETIME,
    logged_at TIMESTAMP,
    inspection_year YEAR
);
```

---

练习 19：食谱发布表

```sql
CREATE TABLE recipes (
    id INT PRIMARY KEY,
    title VARCHAR(200),
    publish_date DATE,
    prep_time TIME,
    created_datetime DATETIME,
    updated_at TIMESTAMP,
    recipe_year YEAR
);
```

---

练习 20：会议室预定表

```sql
CREATE TABLE meeting_room_bookings (
    id INT PRIMARY KEY,
    room_name VARCHAR(100),
    booking_date DATE,
    start_time TIME,
    end_datetime DATETIME,
    created_at TIMESTAMP,
    booking_year YEAR
);
```

---

**总结**

| 类型     | 出现次数 | 说明 |
|----------|-----------|------|
| **DATE** | 每道题都有 | 存储日期（如 '2024-06-01'），用于生日、下单日、课程日等 |
| **TIME** | 每道题都有 | 存储时间（如 '14:30:00'），用于开始时间、结束时间、工作时长等 |
| **DATETIME** | 每道题都有 | 存储日期+时间（如 '2024-06-01 14:30:00'），用于事件时间、发布时间等 |
| **TIMESTAMP** | 每道题都有 | 存储日期+时间，但范围有限（1970~2038），常用于自动记录创建/更新时间 |
| **YEAR** | 每道题都有 | 存储年份（如 2024），用于记录年份信息，如入学年、活动年等 |



## D2-数学函数练习题及答案

下面为你提供 **多个完整的 SQL 实战案例**，涵盖 **MySQL 常见数学函数的实际应用场景**，包括：

- 商品价格计算（四舍五入、取整）
- 用户订单金额处理（向上取整支付、优惠价计算）
- 数据统计分析（最大值、最小值、随机排序）
- 几何与数值运算（平方、开方、取余判断奇偶）
- 随机推荐 / 抽奖场景

每个案例都包含：

✅ 建表 SQL  
✅ 插入测试数据  
✅ 实战查询（使用数学函数）  
✅ 查询结果说明

---

案例 1：商品价格计算（四舍五入、取整）

场景：

电商系统中，商品价格为浮点数，需要：
- 显示时**四舍五入到两位小数**
- 支付时**向上取整（避免找零）**
- 促销时**向下取整作为优惠价**

建表 & 插入数据

```sql
-- 创建商品表
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    price DECIMAL(10, 3)  -- 保留3位小数，模拟真实价格
);

-- 插入测试数据
INSERT INTO products (name, price) VALUES
('商品A', 19.888),
('商品B', 29.499),
('商品C', 9.991),
('商品D', 15.500);
```

实战查询：价格处理

```sql
SELECT 
    id,
    name,
    price AS original_price,
    ROUND(price, 2) AS rounded_price,      -- 四舍五入到两位小数（展示价）
    CEIL(price) AS pay_price,              -- 向上取整（应付金额，避免找零）
    FLOOR(price) AS discount_price         -- 向下取整（优惠价/促销价）
FROM products;
```

🧾 查询结果说明：

| id | name   | original_price | rounded_price | pay_price | discount_price |
|----|--------|----------------|----------------|-----------|----------------|
| 1  | 商品A  | 19.888         | 19.89          | 20        | 19             |
| 2  | 商品B  | 29.499         | 29.50          | 30        | 29             |
| 3  | 商品C  | 9.991          | 9.99           | 10        | 9              |
| 4  | 商品D  | 15.500         | 15.50          | 16        | 15             |

> ✅ 应用于：商品展示、支付金额计算、优惠策略

---

案例 2：用户订单金额与取整策略

场景：

用户下单时，订单总金额为浮点数，业务要求：

- 显示**四舍五入到两位**
- 实际扣款**向上取整（1分起算）**
- 统计每个用户的**最大/最小订单金额**

建表 & 插入数据

```sql
-- 创建订单表
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    amount DECIMAL(10, 2),
    order_time DATETIME
);

-- 插入测试数据
INSERT INTO orders (user_id, amount, order_time) VALUES
(1, 123.456, '2024-06-01 10:00:00'),
(1, 78.901, '2024-06-02 11:00:00'),
(2, 200.00, '2024-06-01 14:00:00'),
(2, 55.678, '2024-06-03 09:00:00');
```

实战查询

```sql
-- 查询每个订单的四舍五入金额和向上取整金额
SELECT 
    id,
    user_id,
    amount AS original_amount,
    ROUND(amount, 2) AS display_amount,
    CEIL(amount) AS charged_amount
FROM orders;

-- 查询每个用户的最大和最小订单金额
SELECT 
    user_id,
    MAX(amount) AS max_order_amount,
    MIN(amount) AS min_order_amount
FROM orders
GROUP BY user_id;
```

结果说明：

- `ROUND(amount,2)`：用于前端展示
- `CEIL(amount)`：实际扣款金额（如支付宝/微信最小单位为1分，向上取整）
- `MAX() / MIN()`：统计分析用户消费行为

---

案例 3：判断奇偶用户 & 随机推荐

场景：

- 判断用户 ID 是否为**偶数/奇数**（可用于 A/B 测试分组、奇偶校验）
- 随机推荐用户或商品（如抽奖、首页随机展示）

建表 & 插入数据

```sql
-- 用户表
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

-- 插入测试数据
INSERT INTO users (id, name) VALUES
(1, 'Alice'),
(2, 'Bob'),
(3, 'Charlie'),
(4, 'Diana'),
(5, 'Eve');
```

实战查询

```sql
-- 判断用户ID是奇数还是偶数
SELECT 
    id,
    name,
    id % 2 AS remainder,
    CASE WHEN id % 2 = 0 THEN '偶数' ELSE '奇数' END AS parity
FROM users;

-- 随机排序查询用户（如抽奖、随机推荐）
SELECT * FROM users ORDER BY RAND() LIMIT 3;

-- 随机生成一个 0~1 的小数（可用于概率控制）
SELECT RAND();
```

结果说明：

| id | name    | remainder | parity |
|----|---------|-----------|--------|
| 1  | Alice   | 1         | 奇数   |
| 2  | Bob     | 0         | 偶数   |
| 3  | Charlie | 1         | 奇数   |
| 4  | Diana   | 0         | 偶数   |
| 5  | Eve     | 1         | 奇数   |

> ✅ 应用于：用户分组、A/B 测试、抽奖系统、随机展示

---

案例 4：几何计算 & 数值处理（平方、开方、极值）

场景：

- 计算某个数值的**平方 / 平方根**
- 从一组值中查找**最大值 / 最小值**

建表 & 插入数据

```sql
-- 数值计算示例表
CREATE TABLE math_examples (
    id INT PRIMARY KEY,
    number INT
);

-- 插入测试数据
INSERT INTO math_examples (id, number) VALUES
(1, 4),
(2, 9),
(3, 16),
(4, 25);
```

实战查询

```sql
-- 计算平方和平方根
SELECT 
    id,
    number,
    POW(number, 2) AS square,      -- 平方
    SQRT(number) AS square_root    -- 平方根
FROM math_examples;

-- 查找最大和最小的数字
SELECT 
    MAX(number) AS max_number,
    MIN(number) AS min_number
FROM math_examples;
```

结果说明：

| id | number | square | square_root |
|----|--------|--------|-------------|
| 1  | 4      | 16     | 2           |
| 2  | 9      | 81     | 3           |
| 3  | 16     | 256    | 4           |
| 4  | 25     | 625    | 5           |

> ✅ 应用于：几何计算、图形处理、统计极值分析

---

总结：实战案例速查表

| 案例 | 主要函数 | 应用场景 |
|------|----------|----------|
| **案例 1** | `ROUND()`, `CEIL()`, `FLOOR()` | 商品价格展示、支付金额、优惠价计算 |
| **案例 2** | `ROUND()`, `CEIL()`, `MAX()`, `MIN()` | 订单金额处理、用户消费统计 |
| **案例 3** | `MOD()`, `RAND()` | 判断奇偶、随机推荐、抽奖系统 |
| **案例 4** | `POW()`, `SQRT()`, `MAX()`, `MIN()` | 平方/开方运算、数值极值统计 |

---


## D3:建表+数据+算数运算符查询(5道)

以下是 5 道结合了 **建表、插入数据、以及使用算术运算符进行查询** 的 MySQL 练习题，涵盖了基本的表结构设计、数据插入以及使用 `+`、`-`、`*`、`/`、`%` 等算术运算符进行计算查询的场景。

---

题目 1：商品价格与折扣计算

题目描述：

创建一个名为 `products` 的表，包含以下字段：

- `id`：商品编号（INT，主键）
- `name`：商品名称（VARCHAR(100)）
- `price`：商品原价（DECIMAL(10,2)）
- `discount`：折扣率（DECIMAL(3,2)，如 0.1 表示 10% 折扣）

插入至少 3 条商品数据。

**查询要求：**  
查询所有商品信息，并计算**折后价格（原价 * (1 - 折扣)）**，显示商品名称、原价、折扣率、折后价格。

---

题目 2：员工加班工资计算

题目描述：

创建一个名为 `employees` 的表，包含以下字段：

- `id`：员工编号（INT，主键）
- `name`：员工姓名（VARCHAR(50)）
- `hourly_wage`：每小时工资（DECIMAL(8,2)）
- `hours_worked`：本月工作小时数（INT）
- `overtime_hours`：加班小时数（INT）

插入至少 3 条员工数据。

**查询要求：**  
查询所有员工信息，并计算：

- 正常工资 = `hourly_wage * hours_worked`
- 加班工资 = `overtime_hours * hourly_wage * 1.5` （加班费按 1.5 倍计算）
- 总工资 = 正常工资 + 加班工资

显示员工姓名、正常工资、加班工资、总工资。

---

题目 3：学生成绩与总分计算

题目描述：

创建一个名为 `students` 的表，包含以下字段：

- `id`：学生编号（INT，主键）
- `name`：学生姓名（VARCHAR(50)）
- `chinese`：语文成绩（INT）
- `math`：数学成绩（INT）
- `english`：英语成绩（INT）

插入至少 3 条学生数据。

**查询要求：**  
查询所有学生信息，并计算**总分（三科之和）**和**平均分（总分 / 3，保留两位小数）**。

---

题目 4：商品库存与补货计算

题目描述：
创建一个名为 `inventory` 的表，包含以下字段：

- `id`：商品ID（INT，主键）
- `product_name`：商品名称（VARCHAR(100)）
- `current_stock`：当前库存数量（INT）
- `min_stock`：最低库存要求（INT）
- `unit_price`：单价（DECIMAL(10,2)）

插入至少 3 条商品数据。

**查询要求：**  

查询所有商品，并计算：

- 库存缺口 = `max(0, min_stock - current_stock)` （如果当前库存够则不补货）
- 补货金额 = 库存缺口 × 单价

显示商品名称、当前库存、最低库存、库存缺口、补货金额。

---

题目 5：银行账户利息计算

题目描述：

创建一个名为 `accounts` 的表，包含以下字段：

- `id`：账户ID（INT，主键）
- `account_name`：账户名（VARCHAR(50)）
- `balance`：账户余额（DECIMAL(12,2)）
- `interest_rate`：年利率（DECIMAL(5,2)，如 0.02 表示 2%）

插入至少 3 条账户数据。

**查询要求：**  
查询所有账户信息，并计算：

- 年利息 = `balance * interest_rate`
- 月利息 = 年利息 / 12

显示账户名、余额、年利率、年利息、月利息。

---

总结

| 题号 | 主题 | 使用的算术运算符 | 核心计算目标 |
|------|------|------------------|--------------|
| 1 | 商品折扣 | `*` (乘法), `-` (减法) | 折后价格 = 原价 × (1 - 折扣) |
| 2 | 员工工资 | `*` (乘法), `+` (加法) | 正常工资、加班工资、总工资 |
| 3 | 学生成绩 | `+` (加法), `/` (除法), `ROUND()` | 总分、平均分 |
| 4 | 库存补货 | `-` (减法), `*` (乘法), `GREATEST()` | 库存缺口、补货金额 |
| 5 | 银行利息 | `*` (乘法), `/` (除法) | 年利息、月利息 |

---

## D3:建表+数据+算数运算符查询(答案)

题目 1：商品价格与折扣计算

参考答案：


```sql
-- 建表
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10, 2),
    discount DECIMAL(3, 2)
);

-- 插入数据
INSERT INTO products (id, name, price, discount) VALUES
(1, '笔记本电脑', 5999.00, 0.10),
(2, '无线鼠标', 199.00, 0.15),
(3, '机械键盘', 899.00, 0.05);

-- 查询：计算折后价格
SELECT 
    name,
    price AS 原价,
    discount AS 折扣率,
    price * (1 - discount) AS 折后价格
FROM 
    products;
```

---

题目 2：员工加班工资计算

参考答案：


```sql
-- 建表
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    hourly_wage DECIMAL(8, 2),
    hours_worked INT,
    overtime_hours INT
);

-- 插入数据
INSERT INTO employees (id, name, hourly_wage, hours_worked, overtime_hours) VALUES
(1, '张三', 100.00, 160, 10),
(2, '李四', 120.00, 170, 5),
(3, '王五', 90.00, 150, 20);

-- 查询：计算工资
SELECT 
    name,
    (hourly_wage * hours_worked) AS 正常工资,
    (overtime_hours * hourly_wage * 1.5) AS 加班工资,
    (hourly_wage * hours_worked) + (overtime_hours * hourly_wage * 1.5) AS 总工资
FROM 
    employees;
```

---

题目 3：学生成绩与总分计算

参考答案：

```sql
-- 建表
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    chinese INT,
    math INT,
    english INT
);

-- 插入数据
INSERT INTO students (id, name, chinese, math, english) VALUES
(1, '小明', 85, 90, 88),
(2, '小红', 92, 87, 91),
(3, '小刚', 78, 85, 80);

-- 查询：计算总分和平均分
SELECT 
    name,
    chinese,
    math,
    english,
    (chinese + math + english) AS 总分,
    ROUND((chinese + math + english) / 3, 2) AS 平均分
FROM 
    students;
```

---

题目 4：商品库存与补货计算

参考答案：

```sql
-- 建表
CREATE TABLE inventory (
    id INT PRIMARY KEY,
    product_name VARCHAR(100),
    current_stock INT,
    min_stock INT,
    unit_price DECIMAL(10, 2)
);

-- 插入数据
INSERT INTO inventory (id, product_name, current_stock, min_stock, unit_price) VALUES
(1, '笔记本', 50, 100, 2.50),
(2, '签字笔', 200, 150, 0.50),
(3, '订书机', 3, 10, 15.00);

-- 查询：计算补货需求
SELECT 
    product_name,
    current_stock,
    min_stock,
    GREATEST(0, min_stock - current_stock) AS 库存缺口,
    GREATEST(0, min_stock - current_stock) * unit_price AS 补货金额
FROM 
    inventory;
```

> 🎯 说明：使用 `GREATEST(0, ...)` 或 `IF(...)` 也可以避免负数库存缺口

---

题目 5：银行账户利息计算

参考答案：

```sql
-- 建表
CREATE TABLE accounts (
    id INT PRIMARY KEY,
    account_name VARCHAR(50),
    balance DECIMAL(12, 2),
    interest_rate DECIMAL(5, 2)
);

-- 插入数据
INSERT INTO accounts (id, account_name, balance, interest_rate) VALUES
(1, '张三储蓄账户', 10000.00, 0.02),
(2, '李四理财账户', 50000.00, 0.035),
(3, '王五活期账户', 2000.00, 0.005);

-- 查询：计算利息
SELECT 
    account_name,
    balance,
    interest_rate,
    balance * interest_rate AS 年利息,
    (balance * interest_rate) / 12 AS 月利息
FROM 
    accounts;
```

---

## Day3：修改表结构

### 基础题(13道)
> **练习1：修改学生表 - 增删列**

要求：先为student表添加四个新列chinese、math、english、computer，然后再把他们删掉

步骤1：添加一个新列chinese

```sql
ALTER TABLE student
  ADD COLUMN 列定义;
```

步骤2: 添加三个新列 math、english、computer

```sql
ALTER TABLE student
  ADD COLUMN 列定义,
  ADD COLUMN 列定义,
  ADD COLUMN 列定义;
```

步骤3: 删除四个新列：chinese、math、english、computer

```sql
ALTER TABLE student
  DROP COLUMN 列名,
  DROP COLUMN 列名,
  DROP COLUMN 列名,
  DROP COLUMN 列名;
```

> **练习2：修改学生表 - 指定列序**

要求：在student表中添加四个新列chinese、math、english、computer，注意新列的位置

1: 把chinese列添加到id前

2: 把math列添加到id后

3: 把english列添加到age前

4: 把computer添加到age后

> **练习3：修改学生表 - 列排序**

要求：在student表中

把chinese math english computer 改为 computer  english math chinese


> 题目

**基础表：`employees`**

假设你已经创建了如下表（你可以先运行以下 SQL 创建表，再做练习）：

```sql
CREATE TABLE employees (
    id INT,
    name VARCHAR(50),
    age INT
);
```

表中目前已有的字段为：`id`, `name`, `age`

---

> 练习4.添加新字段

添加一个新字段：`salary`，类型为 DECIMAL(10,2)

目的：为员工表添加工资字段

🔧 答案：

```sql
ALTER TABLE employees ADD salary DECIMAL(10,2);
```

---

> 练习5.添加一个字段：`department`，类型为 VARCHAR(100)，放在 `age` 字段后面**

> 目的：添加部门字段，并控制字段顺序

🔧 答案：

```sql
ALTER TABLE employees ADD department VARCHAR(100) AFTER age;
```

⚠️ MySQL 支持使用 `AFTER 列名` 或 `FIRST` 控制字段顺序，但不是所有数据库都支持。

---

> 练习6：添加一个字段：`hire_date`，类型为 DATE，默认值为 '2023-01-01'**

目的：添加入职日期字段，并设置默认值

🔧 答案：

```sql
ALTER TABLE employees ADD hire_date DATE DEFAULT '2023-01-01';
```

---

> 练习7.将字段 `name` 的类型修改为 VARCHAR(100)**

目的：扩大 name 字段的存储空间

🔧 答案：

```sql
ALTER TABLE employees MODIFY name VARCHAR(100);
```

---

> 练习8.将字段 `age` 的名称修改为 `employee_age`，类型不变**

目的：重命名字段

🔧 答案：

```sql
ALTER TABLE employees CHANGE age employee_age INT;
```

⚠️ 注意：`CHANGE` 语法需要写 **旧字段名和新字段名**，还要重新写字段类型！

如果你只想改名而 **不改变类型**，也必须把原类型写上。

---

> 练习9.删除字段：`hire_date`**

目的：移除不需要的字段

🔧 答案：

```sql
ALTER TABLE employees DROP COLUMN hire_date;
```

---

> 练习10.删除字段：`department`**

目的：删除部门字段

🔧 答案：

```sql
ALTER TABLE employees DROP COLUMN department;
```

---

> 练习11.为字段 `id` 添加主键约束**

目的：将 id 设为主键，保证唯一标识

🔧 答案：

```sql
ALTER TABLE employees ADD PRIMARY KEY (id);
```

---

> 练习12: 删除表 `employees` 的主键约束**

目的：移除主键（比如重新设计表结构前）

🔧 答案：

```sql
ALTER TABLE employees DROP PRIMARY KEY;
```

> ⚠️ 注意：如果主键字段有 `AUTO_INCREMENT`，可能需要先去掉该属性。

---

> 练习13: 将表名 `employees` 修改为 `staff_info`**

目的：重命名表

🔧 答案：

```sql
ALTER TABLE employees RENAME TO staff_info;
```

或者（MySQL 也支持这种写法）：

```sql
RENAME TABLE employees TO staff_info;
```

---

### **进阶练习**(5道)

1. **为 `id` 字段添加自增属性：`AUTO_INCREMENT`**
2. **为 `email` 字段添加唯一约束：`UNIQUE`**
3. **添加一个字段 `manager_id` INT，并设置为外键（需有对应主表）**
4. **修改表引擎为 InnoDB：`ENGINE=InnoDB`**
5. **添加注释到某个字段，如：`COMMENT '员工年龄'`**

---

## Day4:约束条件

### 主键判断题

1. **主键列允许存储 `NULL` 值。**
2. **复合主键的列允许其中一列为 `NULL`。**
3. **主键必须定义为 `AUTO_INCREMENT` 自增字段。**
4. **主键列的值可以重复。**
5. **主键的唯一性由数据库自动保证，无需人工干预。**
6. **一个表可以定义多个主键。**
7. **主键列只能是整数类型（如 `INT` 或 `BIGINT`）。**
8. **删除主键约束后，表中可以插入重复值。**
9. **主键会自动创建索引以提高查询效率。**
10. **主键列可以使用 `DEFAULT` 关键字设置默认值。**

