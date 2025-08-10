---
noteId: "2a3132c0753111f082d9bbd061b73fc2"
tags: []

---

# MySQL 中控制结构之 `IF` 语句的用法详解

在 MySQL 中，**控制结构（Control Structures）** 允许你在 **存储过程（Stored Procedures）、函数（Functions）、触发器（Triggers）以及条件逻辑块** 中使用流程控制语句，比如：

- `IF ... THEN ... [ELSEIF ... THEN ...] ... [ELSE] ... END IF` —— 条件判断
- `CASE ... WHEN ... THEN ... END CASE` —— 多条件分支
- `LOOP` / `WHILE` / `REPEAT` —— 循环结构

本篇重点讲解其中的 **`IF` 语句**，它是 MySQL 中最基础也是最常用的**条件判断结构**，用于根据不同的条件执行不同的 SQL 语句块。

---

## 一、`IF` 语句的基本语法

### 🎯 语法格式（在存储过程/函数/触发器中使用）

```sql
IF 条件 THEN
    -- 条件为 TRUE 时执行的 SQL 语句
[ELSEIF 另一个条件 THEN
    -- 另一个条件为 TRUE 时执行的语句]
[ELSE
    -- 所有条件都为 FALSE 时执行的语句]
END IF;
```

> ⚠️ 注意：
> - `IF` 语句**必须以 `END IF;` 结束**
> - 它**只能用在存储过程、函数、触发器或复合语句块中**，**不能直接在普通 SQL 查询中使用**
> - 条件部分是一个**布尔表达式**，结果为 TRUE / FALSE / NULL

---

## 二、`IF` 语句的使用场景

常见使用场景包括：

- ✅ 根据输入参数不同，执行不同的业务逻辑
- ✅ 对查询结果或变量进行判断，执行不同分支
- ✅ 在存储过程中实现**条件更新、插入、删除**
- ✅ 在函数中根据条件返回不同的值
- ✅ 在触发器中根据新旧数据状态做不同处理

---

## 三、完整实战示例

---

### ✅ 示例 1：在存储过程中使用 `IF` 判断分数等级

#### 🎯 场景：
根据学生的考试分数，判断并返回其等级：
- 90 ~ 100：优秀
- 80 ~ 89：良好
- 70 ~ 79：中等
- 60 ~ 69：及格
- < 60：不及格

---

#### ✅ 1. 创建存储过程

```sql
DELIMITER $$

CREATE PROCEDURE get_grade(IN score INT)
BEGIN
    IF score >= 90 AND score <= 100 THEN
        SELECT '优秀' AS grade;
    ELSEIF score >= 80 THEN
        SELECT '良好' AS grade;
    ELSEIF score >= 70 THEN
        SELECT '中等' AS grade;
    ELSEIF score >= 60 THEN
        SELECT '及格' AS grade;
    ELSE
        SELECT '不及格' AS grade;
    END IF;
END$$

DELIMITER ;
```

---

#### ✅ 2. 调用存储过程测试

```sql
CALL get_grade(95);   -- 输出：优秀
CALL get_grade(85);   -- 输出：良好
CALL get_grade(75);   -- 输出：中等
CALL get_grade(65);   -- 输出：及格
CALL get_grade(55);   -- 输出：不及格
```

> ✅ 说明：通过 `IF...ELSEIF...ELSE` 实现了多条件分支判断，非常直观和实用

---

### ✅ 示例 2：在函数中使用 `IF` 返回不同结果

#### 🎯 场景：
创建一个函数，传入一个数字，如果大于 100 则返回 '高'，否则返回 '低'

---

#### ✅ 1. 创建函数

```sql
DELIMITER $$

CREATE FUNCTION check_value(num INT)
RETURNS VARCHAR(10)
DETERMINISTIC
BEGIN
    IF num > 100 THEN
        RETURN '高';
    ELSE
        RETURN '低';
    END IF;
END$$

DELIMITER ;
```

---

#### ✅ 2. 调用函数

```sql
SELECT check_value(150);  -- 返回：高
SELECT check_value(80);   -- 返回：低
```

> ✅ 函数中也可以使用 `IF`，通常用于根据输入返回不同的计算结果或状态

---

### ✅ 示例 3：在存储过程中使用 `IF` 进行条件更新

#### 🎯 场景：
根据传入的用户 ID 和积分，如果积分大于 1000，则将用户状态设置为 'VIP'，否则为 '普通'

> 假设有一个用户表 `users`：

```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    points INT,
    status VARCHAR(20)
);
```

---

#### ✅ 1. 创建存储过程

```sql
DELIMITER $$

CREATE PROCEDURE update_user_status(IN user_id INT, IN pts INT)
BEGIN
    IF pts > 1000 THEN
        UPDATE users SET status = 'VIP' WHERE id = user_id;
    ELSE
        UPDATE users SET status = '普通' WHERE id = user_id;
    END IF;
END$$

DELIMITER ;
```

---

#### ✅ 2. 测试数据 & 调用

```sql
-- 插入测试用户
INSERT INTO users (id, name, points, status) VALUES (1, 'Alice', 1200, '');

-- 调用存储过程
CALL update_user_status(1, 1200);  -- 将更新状态为 'VIP'

-- 再次调用，传入低积分
CALL update_user_status(1, 500);   -- 将更新状态为 '普通'
```

---

## 四、`IF` 语句的注意事项

| 注意事项 | 说明 |
|---------|------|
| **作用范围** | `IF` 语句**不能单独在普通 SQL 中使用**，必须用在存储过程、函数、触发器等复合语句中 |
| **结束标志** | 必须以 `END IF;` 结束，注意不要遗漏 |
| **条件表达式** | 条件必须是能求值为 **TRUE / FALSE / NULL** 的布尔表达式 |
| **嵌套使用** | `IF` 语句**可以嵌套**，即 `IF` 内部再写 `IF`，但要注意代码可读性 |
| **ELSEIF vs ELSE IF** | 在 MySQL 存储过程中应使用 `ELSEIF`（无空格），不是 `ELSE IF` |

---

## 五、`IF` 语句的常见用法总结

| 场景 | 示例用途 |
|------|----------|
| ✅ **多条件分支** | 根据分数/数值判断等级、状态 |
| ✅ **参数控制逻辑** | 根据输入参数执行不同 SQL 操作 |
| ✅ **数据更新/插入条件判断** | 如积分是否达标、状态是否变更 |
| ✅ **函数返回值逻辑** | 根据输入返回不同的字符串或数值 |
| ✅ **触发器中的新旧数据对比** | 判断某字段是否被修改，执行不同逻辑 |

---

## ✅ 总结

| 项目 | 说明 |
|------|------|
| **语法关键字** | `IF ... THEN ... [ELSEIF ... THEN ...] ... [ELSE] ... END IF;` |
| **使用位置** | 存储过程、函数、触发器、复合语句块中 |
| **功能** | 实现条件分支逻辑，根据布尔表达式执行不同的 SQL 代码块 |
| **必须结束符** | `END IF;`（注意不要漏掉分号） |
| **常见用途** | 判断分数等级、更新用户状态、返回不同结果、条件执行 SQL 等 |

---

## 📌 下一步建议

你可以继续尝试以下练习来巩固 `IF` 语句的使用：

1. ✅ 创建一个存储过程，根据订单金额判断是否包邮（如满 99 免邮）
2. ✅ 在函数中根据年龄返回不同的年龄段描述（如儿童、青年、中年、老年）
3. ✅ 在触发器中使用 `IF` 判断某字段是否被修改，执行不同的逻辑
4. ✅ 嵌套使用 `IF` 实现更复杂的业务规则判断

---

如你希望获取：

- ✅ `IF` 语句与 `CASE WHEN` 的对比与选择建议
- ✅ 带有 **用户交互参数、表数据操作** 的完整存储过程示例
- ✅ 或者 `IF` 在 **触发器 / 事件调度** 中的应用

