---
noteId: "9e1f1c302e6c11f0b12143716a9ddc9b"
tags: []

---

## 题1：创建学⽣表

要求：创建⼀个简单的学⽣表 students ，包含：

- 学号(id)：整数，主键
- 姓名(name)：字符串，最⻓20个字符，不能为空
- 年龄(age)：整数
- 性别(gender)：字符串，只能输⼊'男'或'⼥'
- ⼊学⽇期(admission_date)：⽇期类型

```sql
```

## 题1：修改学生表



## 题2：创建商品表

要求：创建⼀个商品表 products ，包含：

- 商品编号(id)：整数，主键，⾃增⻓
- 商品名称(name)：字符串，最⻓100个字符，不能为空
- 价格(price)：⼩数类型，保留2位⼩数
- 库存数量(stock)：整数，默认值为0上架时间(create_time)：时间戳，默认当前时间

```sql
```

## 题2：修改学生表



## 题3：创建员⼯表

要求：创建⼀个员⼯表 employees ，包含：

- 员⼯号(emp_id)：整数，主键
- 姓名(name)：字符串，最⻓10个字符，不能为空
- 部⻔(department)：字符串，最⻓20个字符
- ⼯资(salary)：整数
- ⼊职⽇期(hire_date)：⽇期类型

```sql
```

## 题3：修改员工表



## 题4：创建图书表

要求：创建⼀个图书表 books ，包含：

- 图书编号(book_id)：整数，主键
- 书名(title)：字符串，最⻓50个字符，不能为空
- 作者(author)：字符串，最⻓20个字符
- 价格(price)：⼩数类型，保留2位⼩数
- 出版⽇期(publish_date)：⽇期类型

```sql
```

## 题4：修改图书表



## 题5：创建课程表

要求：创建⼀个课程表 course ，包含：

- 课程编号(course_id)：整数，主键课程
- 名称(course_name)：字符串，最⻓30个字符，不能为空
- 教师(teacher)：字符串，最⻓10个字符
- 课时(hours)：整数
- 教室(classroom)：字符串，最⻓10个字符

```sql
```

## 题5：修改课程表



## 题6：创建商品表

**要求**：  创建一个 `products` 表，包含以下字段：  

- `product_id`：整数类型，主键  
- `product_name`：可变长度字符串（最长 100 字符），非空  
- `price`：小数类型（总位数 10，小数位 2），非空  
- `stock`：整数类型，默认值为 `0`  
- `is_available`：布尔类型，默认值为 `1`（表示“在售”）  

**参考答案**：  

```sql
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INT DEFAULT 0,
    is_available BOOLEAN DEFAULT 1
);
```

## 题6：修改商品表



## 题7：创建用户表

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

## 题7：修改用户表



## 题8：创建会议表

创建一个名为 `meeting_schedule` 的表，包含以下字段：

- 会议ID（meeting_id）（整数，主键，自增）
- 会议主题（topic）（变长字符串，最长50字符，非空）
- 开始时间（start_time）（精确到秒的事件时间，存储本地时间）
- 预计时长（duration_minutes）（以分钟为单位的整数）
- 创建时间（created_at）（自动记录数据插入时间）
- 是否已结束（is_ended）（布尔值，默认未结束）

**参考答案**

```sql
CREATE TABLE meeting_schedule (
    meeting_id INT AUTO_INCREMENT PRIMARY KEY,
    topic VARCHAR(50) NOT NULL,
    start_time DATETIME NOT NULL,  -- 存储本地时间
    duration_minutes INT UNSIGNED,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_ended BOOLEAN DEFAULT FALSE
) 

INSERT INTO meet_schedule (
    topic,start_time1,start_time2,start_time3,start_time4,duration_minutes,is_ended)
VALUES 
    -- 第一条记录：显式指定所有字段，包含时间戳字段
    (
        '项目启动会议', 
        '2023-10-10', 
        '09:00:00', 
        '2023-10-10 09:00:00', 
        '2023-10-10 09:00:00', 
        60, 
        1
    ),
    -- 第二条记录：省略 start_time5 和 created_at（依赖默认值）
    (
        '需求评审会议', 
        '2023-10-11', 
        '14:30:00', 
        '2023-10-11 14:30:00', 
        NULL,  -- start_time4 留空（允许 NULL）
        90, 
        0
    ),
    -- 第三条记录：混合使用显式和默认值
    (
        '项目总结会', 
        CURRENT_DATE(),  -- 直接使用函数获取当天日期
        '16:45:00', 
        NOW(),           -- 使用当前日期时间
        CURRENT_TIMESTAMP, 
        120, 
        DEFAULT         -- 使用默认值 0
    );
```

---

## 题8：修会议改表

## 题9：创建文章审核表

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

## 题9： 修改文章审核表



## 题10：创建航班时刻表

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

CREATE TABLE flight_schedule (
    flight_no VARCHAR(10) PRIMARY KEY COMMENT '主键，格式如CA123',
    departure_timezone VARCHAR(8) NOT NULL COMMENT '时区格式UTC±HH:MM',
    local_departure_time TIME(0) NOT NULL COMMENT '精确到分钟（如14:30）',
    flight_duration TIME(0) NOT NULL COMMENT '飞行时长（如02:30）',
    year YEAR NOT NULL COMMENT '年份值',
    -- 约束验证
    CHECK (
        departure_timezone REGEXP '^UTC[+-][0-1][0-9]:[0-5][0-9]$' AND
        flight_duration BETWEEN '00:01:00' AND '23:59:00'
    )
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

```

## 题10：修改航班时刻表



## 题11：创建成绩表

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

**测试插入数据**：

```sql
-- 合法数据
INSERT INTO students VALUES (1, '张三', 85);  -- 成功

-- 非法数据（分数超范围）
INSERT INTO students VALUES (2, '李四', 105);  -- 报错：Check constraint 'students_chk_1' is violated
```

## 题11：修改成绩表



## 题12：创建员工表

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

**测试插入数据**：

```sql
-- 合法数据
INSERT INTO employees VALUES (101, 'M');  -- 成功

-- 非法数据（非 M/F）
INSERT INTO employees VALUES (102, 'X');  -- 报错：Check constraint 'employees_chk_1' is violated
```

## 题12：修改员工



## 题13：创建订单表

创建一个订单表orders1，要求订单的 **开始日期不晚于结束日期**：

- 订单id（order_id）：整型、主键、自动增长
- 商品名（p_name）:非空 最多100个字符 
- 单价（price）: 必须>0，精确到小数点后2位
- 订单开始日期（start_date）：日期
- 订单结束日期（end_date）：日期

```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) CHECK (price > 0),
    quantity INT CHECK (quantity >= 1)
    start_date DATE,
    end_date DATE,
    CHECK (start_date <= end_date)  -- 表级约束
);
```

**测试插入数据**：

```sql
-- 合法数据
INSERT INTO orders VALUES (1, '2023-01-01', '2023-01-05');  -- 成功

-- 非法数据（开始日期晚于结束日期）
INSERT INTO orders VALUES (2, '2023-02-01', '2023-01-15');  -- 报错：Check constraint 'orders_chk_1' is violated
```

## 题13: 修改订单表

不好意思，练习4中的订单表中忘记了一个数量（quantity）字段，请添加

- 数量（quantity）：必须≥1 

```sql
-- 添加数量必须≥1的约束
ALTER TABLE students
ADD CONSTRAINT age CHECK (age >= 1);
```

**注意**：若表中已有数据违反约束，添加操作会失败。

