---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务三 用户定义的完整性  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务三 用户定义的完整性  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 4  # 侧边栏中排在第1位
---

## 一、用户定义的完整性的含义

> **用户定义的完整性**是指：
> **用户定义的完整性是指用户根据具体应用环境和业务需求，对数据库中的数据所施加的约束条件，以保证数据在语义上的正确性和合理性。**



👉 关键词：**用户自己定、业务规则、合法性**

你可以这样理解：

* 实体完整性、参照完整性是 **数据库“自带的硬性规则”**
* **用户定义的完整性 = 业务说了算**

换句话说：

> **“这张表里，什么数据算合理，是由业务决定的。”**

## 二、典型示例

### 1：成绩表

| 字段    | 业务规则         |
| ----- | ------------ |
| score | 必须在 0～100 之间 |

👉 这不是主键，也不是外键
👉 但明显是 **业务规定的合理范围**


### 2：学生表

| 字段     | 业务规则          |
| ------ | ------------- |
| gender | 只能是 '男' 或 '女' |
| age    | 必须 ≥ 0        |
| phone  | 必须符合手机号格式     |

👉 都属于 **用户定义的完整性**


### 3：订单表

* 订单金额 **不能为负数**
* 订单状态只能是：`未支付 / 已支付 / 已取消`


## 三、实现用户定义的完整性的语法

常见手段：

| 手段           | 说明       |
| ------------ | -------- |
| `CHECK` 约束   | 限制字段取值范围 |
| `NOT NULL`   | 不允许为空    |
| `DEFAULT`    | 默认值      |
| `UNIQUE`     | 保证取值唯一   |
| 触发器（Trigger） | 复杂业务规则   |
| 程序逻辑         | 应用层校验    |

📌 注意：**CHECK 本质上就是用户定义完整性的典型代表**


在 MySQL 中，主要通过以下几类语法实现：

### （一）列级`CHECK` 约束（最典型）

基本语法

```sql
CHECK (条件表达式)
```

示例

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT CHECK (age >= 18 AND age <= 65),           -- 年龄范围检查
    salary DECIMAL(10,2) CHECK (salary > 0),           -- 正数检查
    email VARCHAR(100) CHECK (email LIKE '%@%'),       -- 格式检查
    hire_date DATE,
    gender CHAR(1) CHECK (gender IN ('M', 'F', 'O')),  -- 枚举值检查
    department_id INT CHECK (department_id > 0)        -- 业务规则检查
);
```

---

### （二）表级check约束

```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    ship_date DATE,
    total_amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'PENDING',
    
    -- 单个字段的复杂检查
    CONSTRAINT chk_order_date 
        CHECK (order_date >= '2000-01-01'),
    
    -- 多个字段的逻辑关系检查
    CONSTRAINT chk_ship_date 
        CHECK (ship_date IS NULL OR ship_date >= order_date),
    
    -- 业务规则检查
    CONSTRAINT chk_status_amount
        CHECK (
            (status = 'CANCELLED' AND total_amount = 0) OR
            (status != 'CANCELLED' AND total_amount > 0)
        ),
    
    -- 跨字段一致性检查
    CONSTRAINT chk_dates
        CHECK (DATEDIFF(order_date, CURDATE()) <= 0)  -- 订单日期不能是未来
);
```

### （三）`NOT NULL`（非空约束）

基本语法

```sql
列名 数据类型 NOT NULL
```

示例

```sql
name VARCHAR(20) NOT NULL
```

说明：

* 业务上“必须填写”的字段
* 属于用户定义完整性的一种

---

### （四）`UNIQUE`（唯一性约束）

基本语法

```sql
UNIQUE (列名)
```

或列级：

```sql
phone VARCHAR(20) UNIQUE
```

说明：

* 禁止重复值
* 由业务规则决定是否唯一

---

### （五）`DEFAULT`（默认值）

基本语法

```sql
列名 数据类型 DEFAULT 默认值
```

示例

```sql
status VARCHAR(10) DEFAULT '未激活'
```

说明：

* 插入时未提供值，自动补充
* 常被归为用户定义完整性（教学上合理）

---

### （六）带 `CONSTRAINT` 的标准写法

```sql
CONSTRAINT 约束名 约束类型 (列名)
```

示例：成绩范围检查

```sql
CONSTRAINT ck_score CHECK (score BETWEEN 0 AND 100)
```

---

### （七）综合示例

```sql
CREATE TABLE student (
  id INT PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  age INT CHECK (age >= 0),
  gender CHAR(1) CHECK (gender IN ('男','女')),
  phone VARCHAR(20) UNIQUE,
  status VARCHAR(10) DEFAULT '正常'
);
```

在这张表中：

* `CHECK` → 合法范围
* `NOT NULL` → 必填
* `UNIQUE` → 不重复
* `DEFAULT` → 默认业务状态

👉 全部属于 **用户自定义完整性**

---

### （八）触发器（Trigger）

```sql
CREATE TRIGGER ...
BEFORE INSERT ON 表名
```

用于：

* 跨字段
* 跨表
* `CHECK` 表达不了的复杂规则

## 四、与其他完整性的区别

| 类型          | 关注点            |
| ----------- | -------------- |
| 实体完整性       | 行是否唯一（主键）      |
| 参照完整性       | 表之间关系是否正确（外键）  |
| **用户定义完整性** | **数据是否符合业务规则** |



## 五、一句话记忆口诀 🧠

> **实体看“唯一”，参照看“关系”，用户定义看“合不合理”。**


* **实体完整性**：这一行是谁？（主键）
* **参照完整性**：你引用的是谁？（外键）
* **用户自定义完整性**：你合不合理？（业务规则）