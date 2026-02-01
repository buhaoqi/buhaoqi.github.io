---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务四 存储函数  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务四 存储函数 # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 4  # 侧边栏中排在第1位
---
## 一、存储函数是什么?

**一句话定义：**

> **存储函数是存储在 MySQL 服务器中的“可返回单个值的函数”，可以像普通函数一样在 SQL 语句中被调用。**

特点：

* **必须有返回值**
* **只能返回一个值**
* **可在 `SELECT / WHERE / ORDER BY` 等表达式中使用**

与存储过程对比：

| 维度           | 存储函数           | 存储过程         |
| ------------ | -------------- | ------------ |
| 核心目的         | 返回一个值          | 完成一件事        |
| 是否必须返回值      | 必须             | 不必须          |
| 返回方式         | `RETURN`       | `OUT` 参数（可选） |
| 调用方式         | `SELECT 函数名()` | `CALL 过程名()` |
| 是否可用于 SELECT | 可以             | 不可以          |

- **函数算值，过程做事**
- **要结果用函数，要流程用过程**
- **存储过程关注“过程和动作”，而存储函数关注“计算和结果”。**

| 对比项          | 存储函数            | 存储过程          |
| ------------ | --------------- | ------------- |
| 是否有返回值       | ✅ 必须有           | ❌ 不必须         |
| 返回值数量        | 一个              | 0 / 多个        |
| 调用方式         | `SELECT func()` | `CALL proc()` |
| 能否用于 SQL 表达式 | ✅ 可以            | ❌ 不可以         |
| 适合场景         | 计算、转换、判断        | 业务流程          |

## 二、创建存储函数的基础语法

```sql
DELIMITER $$

-- 定义存储函数
CREATE
    FUNCTION 函数名(参数名 参数类型, ...)
    RETURNS 返回值类型
    [特征子句]
    BEGIN
        -- 函数体（必须有 RETURN）
        RETURN 返回值;
    END $$

DELIMITER ;

-- 调用存储函数
SELECT 函数名(); -- 无参调用
SELECT 函数名(argument1, argument2, ...); -- 带参调用
```

语法要点

| 项目                | 说明             |
| ----------------- | -------------- |
| `CREATE FUNCTION` | 定义存储函数         |
| 参数                | 可以有 0 个或多个     |
| `RETURNS`         | **必须**，定义返回类型 |
| `RETURN`          | **必须**，只能返回一个值  |
| `BEGIN...END`     | 多条语句时使用        |

## 三、详细语法分解

### 1. 函数名
- 始终使用小写
- 清晰描述功能
- 包含业务领域
- 表明返回类型

```sql
-- 清晰描述功能
CREATE FUNCTION calculate_discount_amount() ...
CREATE FUNCTION format_phone_number() ...
CREATE FUNCTION is_valid_credit_card() ...
CREATE FUNCTION get_user_age() ...

-- 包含业务领域
CREATE FUNCTION finance_calculate_interest() ...
CREATE FUNCTION inventory_check_stock_level() ...
CREATE FUNCTION hr_calculate_annual_leave() ...

-- 表明返回类型（可选）
CREATE FUNCTION get_user_count_int() ...
CREATE FUNCTION get_user_name_str() ...
```


### 2. **参数列表**
```sql
-- 参数语法
参数名 参数类型

-- 示例
CREATE FUNCTION calculate_tax(
    amount DECIMAL(10,2),      -- 参数1
    tax_rate DECIMAL(5,2),     -- 参数2
    is_vip BOOLEAN             -- 参数3
) RETURNS DECIMAL(10,2) ...
```

### 3. **RETURNS 子句（必须）**
指定返回值类型
```sql
-- 常见返回类型
RETURNS INT
RETURNS VARCHAR(255)
RETURNS DECIMAL(10,2)
RETURNS DATETIME
RETURNS BOOLEAN
RETURNS TEXT
RETURNS JSON  -- MySQL 5.7+
```

### 4. **特征子句（可选）**
```sql
[DETERMINISTIC | NOT DETERMINISTIC]
[NO SQL | READS SQL DATA | MODIFIES SQL DATA]
[SQL SECURITY { DEFINER | INVOKER }]
[COMMENT 'string']
```

### 5. **函数体**
```sql
BEGIN
    -- 声明变量
    -- 执行逻辑
    -- 返回结果
END
```

## 四、示例(基础语法)

### 示例1：无参函数
```sql
DELIMITER //

CREATE FUNCTION hello() 
RETURNS VARCHAR(50)
DETERMINISTIC
BEGIN
    RETURN 'Hello, MySQL!';
END //

DELIMITER ;

```
**调用方式：**

```sql
SELECT hello();
```

📌 输出：

```
Hello MySQL
```
### 示例4：带参函数

```sql
DELIMITER //
CREATE FUNCTION greet(name VARCHAR(50)) 
RETURNS VARCHAR(100)
DETERMINISTIC
COMMENT '简单的问候函数'
BEGIN
    RETURN CONCAT('Hello, ', name, '!');
END //
DELIMITER ;

-- 调用
SELECT greet('张三');  -- 返回 'Hello, 张三!'
```

### 示例3：计算两个数的和

```sql
DELIMITER $$

CREATE FUNCTION add_numbers(a INT, b INT)
RETURNS INT
BEGIN
    RETURN a + b;
END $$

DELIMITER ;
```

**使用：**

```sql
SELECT add_numbers(3, 5);
```

📌 输出：

```
8
```

### 示例3：计算折后价格
```sql
DELIMITER //
CREATE FUNCTION calculate_discount(
    original_price DECIMAL(10,2),
    discount_rate DECIMAL(5,2)
) 
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    DECLARE final_price DECIMAL(10,2);
    SET final_price = original_price * (1 - discount_rate/100);
    RETURN ROUND(final_price, 2);
END //
DELIMITER ;

-- 调用
SELECT calculate_discount(1000.00, 15.00);  -- 返回850.00
```

## 五、各特征子句详细说明

### 1. **DETERMINISTIC（确定性）**
```sql
-- 确定性函数：相同输入总是返回相同输出
CREATE FUNCTION calculate_area(
    radius DECIMAL(10,2)
) 
RETURNS DECIMAL(10,2)
DETERMINISTIC  -- 数学计算是确定性的
BEGIN
    RETURN PI() * radius * radius;
END;

-- 非确定性函数：相同输入可能返回不同输出
CREATE FUNCTION get_current_user() 
RETURNS VARCHAR(50)
NOT DETERMINISTIC  -- 每次调用可能返回不同用户
BEGIN
    RETURN CURRENT_USER();
END;
```

### 2. **SQL DATA ACCESS的意义**
> SQL DATA ACCESS 是用于声明存储程序对数据库数据访问和修改程度的特性说明，帮助查询优化器做更好的决策。不是程序员的权限控制。就像函数注释一样，是给人看的，也是给优化器看的建议，但不是给执行器的强制限制。把它看作是一种契约，而不是强制约束。SQL DATA ACCESS常用于函数和存储过程。

当优化器看到一个函数调用时：
```sql
SELECT calculate_area(radius) FROM circles WHERE calculate_area(radius) > 100;
```
- 没有声明：优化器不知道函数内部是否有SQL
- 声明了 NO SQL：优化器知道这是一个纯计算，可以进行更多优化


#### 四种取值

简化记忆：No 不沾表，Read 只读表，Modify 真改表

|值|含义|可以|不可以|
|---|---|---|---|
|CONTAINS SQL(默认)|包含 SQL 语句(默认)，但不访问表数据|SET、IF、CASE、DECLARE|SELECT ... FROM 表|
|NO SQL|不包含任何 SQL 语句|计算、字符串处理、参数运算||
|READS SQL DATA|读取表数据，但不修改表数据|SELECT ... FROM；|INSERT、UPDATE、DELETE|
|MODIFIES SQL DATA|修改表中的数据|INSERT、UPDATE、DELETE||

#### 示例:CONTAINS SQL
```sql
CREATE FUNCTION default_function() 
RETURNS INT
-- 默认是 CONTAINS SQL
BEGIN
    -- 可能包含SQL，但不是数据读取
    SET @var = 1;          -- 设置变量（是SQL语句）
    SELECT 1 + 1;          -- 简单表达式（是SQL语句）
    RETURN @var;
END;
```
特点：
- 包含SQL语句，但不读取或修改表数据
- 只能使用SQL语言特性（变量设置、表达式等）
- 不能执行 SELECT ... FROM table 或数据修改

#### 示例:NO SQL
```sql
CREATE FUNCTION add_numbers(a INT, b INT) 
RETURNS INT
NO SQL -- 告诉优化器：这个函数不涉及SQL操作
BEGIN
    RETURN a + b;
END;

CREATE FUNCTION pure_logic() 
RETURNS INT
NO SQL  -- 不能有任何SQL语句
BEGIN
    -- 只能使用流程控制，不能有任何SQL关键字
    DECLARE x INT DEFAULT 10;
    SET x = x * 2;  -- 这是SQL语句，但声明了NO SQL！
    RETURN x;
END;
```
特点：
- 理论上不应该包含任何SQL语句
- 但实际上MySQL不强制检查


#### 示例:READS SQL DATA
```sql
CREATE FUNCTION count_users() 
RETURNS INT
READS SQL DATA  -- 会读取表数据
BEGIN
    DECLARE cnt INT;
    SELECT COUNT(*) INTO cnt FROM users;  -- 读取数据
    RETURN cnt;
END;

CREATE FUNCTION get_user_name(uid INT)
RETURNS VARCHAR(20)
READS SQL DATA
BEGIN
    DECLARE uname VARCHAR(20);
    SELECT name INTO uname FROM users WHERE id = uid;
    RETURN uname;
END;
```
#### 示例:MODIFIES SQL DATA
```sql
-- MODIFIES SQL DATA：会修改数据
CREATE PROCEDURE add_user(name VARCHAR(20))
MODIFIES SQL DATA
INSERT INTO users(name) VALUES(name);

CREATE FUNCTION update_and_count() 
RETURNS INT
MODIFIES SQL DATA
BEGIN
    UPDATE logs SET processed = 1 WHERE processed = 0;
    RETURN ROW_COUNT();
END;
```
### 3. **COMMENT（注释）**
```sql
CREATE FUNCTION calculate_age(birth_date DATE) 
RETURNS INT
COMMENT '计算年龄，基于当前日期和出生日期'
DETERMINISTIC
NO SQL
BEGIN
    RETURN TIMESTAMPDIFF(YEAR, birth_date, CURDATE());
END;
```
## 六、示例(流程控制函数)
### 示例1：根据成绩返回等级

```sql
DELIMITER $$

CREATE FUNCTION score_level(score INT)
RETURNS VARCHAR(10)
BEGIN
    IF score >= 90 THEN
        RETURN '优秀';
    ELSEIF score >= 80 THEN
        RETURN '良好';
    ELSEIF score >= 60 THEN
        RETURN '及格';
    ELSE
        RETURN '不及格';
    END IF;
END $$

DELIMITER ;
```

**使用：**

```sql
SELECT score_level(85);
```

### 示例2: 在 `SELECT` 中使用

```sql
SELECT name, score, score_level(score) AS level
FROM students;
```

👉 这就是 **存储函数最大的价值**：
**像系统函数一样参与查询**


### 示例3: 在 `WHERE` 中使用

```sql
SELECT *
FROM students
WHERE score_level(score) = '优秀';
```

---

## 七、查看和管理存储函数

```sql
-- 查看所有函数
SHOW FUNCTION STATUS;

-- 查看特定函数
SHOW CREATE FUNCTION function_name;

-- 查看函数详细信息
SELECT 
    ROUTINE_NAME,
    ROUTINE_TYPE,
    DATA_TYPE,
    IS_DETERMINISTIC,
    SQL_DATA_ACCESS,
    SECURITY_TYPE,
    CREATED,
    LAST_ALTERED
FROM information_schema.ROUTINES
WHERE ROUTINE_SCHEMA = DATABASE() 
  AND ROUTINE_TYPE = 'FUNCTION';

-- 删除函数
DROP FUNCTION IF EXISTS function_name;

-- 修改函数（需要先删除再创建）
DROP FUNCTION IF EXISTS old_function;
CREATE FUNCTION new_function() ... ;
```

## 八、注意事项

### ⚠️ 1. 必须有 `RETURNS` + `RETURN`

少一个都会报错

### ⚠️ 2. 函数中一般**不能修改表数据**

```sql
-- 不推荐在函数中使用：
INSERT / UPDATE / DELETE
```

📌 原因：函数可能被频繁调用，破坏数据一致性

### ⚠️ 3. 创建函数需要权限

可能遇到这个错误：

```
This function has none of DETERMINISTIC...
```

解决（开发环境）：

```sql
SET GLOBAL log_bin_trust_function_creators = 1;
```

### ⚠️ 4. 函数返回值类型要准确

* 返回字符串 → `VARCHAR`
* 返回小数 → `DECIMAL`
* 返回日期 → `DATE`

### 5.**参数只有IN模式**
   ```sql
   -- 存储函数参数只能是IN（输入）模式
   -- 存储过程可以有IN, OUT, INOUT
   ```
---

## 九、对比：存储函数 / 存储过程 / 触发器 / 事件 

### 1.核心对比

| 对比维度        | 存储函数 (Function)      | 存储过程 (Procedure) | 触发器 (Trigger)              | 事件 (Event)    |
| ----------- | -------------------- | ---------------- | -------------------------- | ------------- |
| 本质          | **返回值的函数**           | **可执行的过程**       | **被动自动执行**                 | **定时自动执行**    |
| 是否有返回值      | ✅ 必须有（1 个）           | ❌ 不必须            | ❌ 没有                       | ❌ 没有          |
| 返回值数量       | 1 个                  | 0 / 多个（OUT）      | 无                          | 无             |
| 调用方式        | `SELECT f()`         | `CALL p()`       | **自动触发**                   | **到点执行**      |
| 能否用于 SELECT | ✅ 可以                 | ❌ 不可以            | ❌ 不可以                      | ❌ 不可以         |
| 是否可接收参数     | ✅                    | ✅                | ❌                          | ❌             |
| 是否依赖表操作     | ❌ 可不依赖               | ❌ 可不依赖           | ✅ 必须依赖                     | ❌ 不依赖         |
| 执行时机        | 手动调用                 | 手动调用             | **INSERT/UPDATE/DELETE 时** | **指定时间**      |
| 是否可修改数据     | ⚠️ 不推荐               | ✅ 可以             | ✅ 可以                       | ✅ 可以          |
| 常见关键词       | `RETURNS` / `RETURN` | `IN / OUT`       | `BEFORE / AFTER`           | `ON SCHEDULE` |

### 2.一句话定位

| 类型   | 一句话定位        |
| ---- | ------------ |
| 存储函数 | **算一个值**     |
| 存储过程 | **做一件事**     |
| 触发器  | **有人动表，我就动** |
| 事件   | **到点我自动动**   |

📌 **记忆神句（强烈推荐）**：

> **函数算值，过程做事，触发器盯表，事件看表**

### 3.是否「自动执行」

| 类型  | 是否自动执行 | 触发条件  |
| --- | ------ | ----- |
| 函数  | ❌      | 手动调用  |
| 过程  | ❌      | 手动调用  |
| 触发器 | ✅      | 表数据变化 |
| 事件  | ✅      | 时间到   |

📌 **自动执行的只有两个**：
👉 **触发器 + 事件**

---

### 4. 是否「参与查询」

| 类型  | 能否写在 SELECT 里 |
| --- | ------------- |
| 函数  | ✅             |
| 过程  | ❌             |
| 触发器 | ❌             |
| 事件  | ❌             |

📌 **只有函数能进 SELECT**

### 5.极简记忆

> * **函数**：有返回值，可用于 SELECT
> * **过程**：无固定返回值，用 CALL 调
> * **触发器**：表变自动执行
> * **事件**：定时自动执行

---

## 十、常见错误总结

### ❌ 错误说法 1：

> 存储过程可以像函数一样在 SELECT 中使用
> ✅ **错**

---

### ❌ 错误说法 2：

> 触发器需要手动调用
> ✅ **错**

---

### ❌ 错误说法 3：

> 事件依赖 INSERT / UPDATE / DELETE
> ✅ **错**

---

### ❌ 错误说法 4：

> 函数可以返回多个值
> ✅ **错**

---

## 十一、怎么选？

👉 问自己一句话：

1️⃣ **我要不要一个值？**
→ 要 → **函数**

2️⃣ **我要不要人来调用？**
→ 要 → **过程 / 函数**

3️⃣ **是不是表一变就要自动做？**
→ 是 → **触发器**

4️⃣ **是不是到某个时间自动做？**
→ 是 → **事件**