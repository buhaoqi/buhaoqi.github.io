---
noteId: "2030e40073e711f0ac7f012540a4f7e6"
tags: []

---

修饰符(unsigned)

用途

用于修饰数值类型，禁止数值类型存储负数，扩展正数范围。

适用类型

- 整数（`INT`, `TINYINT` 等）
- 定点数（`DECIMAL`）

**示例**：

  ```sql
CREATE TABLE products (
    stock INT UNSIGNED,       -- 库存不能为负
    price DECIMAL(10,2) UNSIGNED -- 价格非负
);

整数类型(INT)

用途：`INT`用于表示整数。

语法

```sql
列名 INT
```

示例

```sql
CREATE TABLE student(
    id INT,
    age INT
);
```

应用场景：适合存储整数类型的数据，比如: ID、年龄、商品数量等

数值类型（精确与近似）

 整数类型

| 类型        | 字节 | 有符号范围               | 无符号范围     | 应用场景             |
| ----------- | ---- | ------------------------ | -------------- | -------------------- |
| `TINYINT`   | 1    | -128 ~ 127               | 0 ~ 255        | 布尔值、状态码       |
| `SMALLINT`  | 2    | -32768 ~ 32767           | 0 ~ 65535      | 小范围计数（如库存） |
| `MEDIUMINT` | 3    | -8388608 ~ 8388607       | 0 ~ 16777215   | 中等规模ID           |
| `INT`       | 4    | -2147483648 ~ 2147483647 | 0 ~ 4294967295 | 主键、常规计数       |
| `BIGINT`    | 8    | -2^63 ~ 2^63-1           | 0 ~ 2^64-1     | 分布式ID、大额交易   |

**核心技巧**：

- 优先选择满足需求的最小类型（减少存储空间）
- 主键建议用`INT UNSIGNED AUTO_INCREMENT`（范围0~42亿）
- 超大数据用`BIGINT`（如订单号）


## 练习1:创建商品表

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

## 练习2:创建用户表

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

## 练习3:创建会议表

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

## 练习4：商品表

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

## 练习5：用户表

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