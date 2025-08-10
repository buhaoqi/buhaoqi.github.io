---
noteId: "343dad70753111f082d9bbd061b73fc2"
tags: []

---

# MySQL 中控制结构之 `LOOP` 语句的用法详解

在 MySQL 中，**控制结构（Control Structures）** 允许你在 **存储过程（Stored Procedures）、函数（Functions）以及触发器（Triggers）** 等复合语句块中，使用流程控制语句来实现逻辑分支、循环、条件判断等功能。

其中，**`LOOP` 语句** 是 MySQL 提供的一种**最基础的循环结构**，用于**重复执行一段 SQL 代码，直到遇到明确的退出语句（如 `LEAVE`）为止**。

---

## 一、`LOOP` 语句概述

### 🎯 什么是 `LOOP`？

- `LOOP` 是 MySQL 中用于**实现无条件循环**的控制结构。
- 它会**一直重复执行其内部的 SQL 语句块**，直到你使用 **`LEAVE` 语句主动跳出循环**。
- 与 `WHILE` 和 `REPEAT` 不同，**`LOOP` 本身不带任何条件判断，循环是否继续完全由开发者控制**（通常通过变量判断 + LEAVE 实现退出）。

---

## 二、`LOOP` 语句的基本语法

```sql
[loop_label:] LOOP
    -- 循环体：要重复执行的 SQL 语句
    IF 条件 THEN
        LEAVE loop_label;  -- 主动跳出循环（类似 break）
    END IF;
    
    -- 可以放其他语句，如 SET 变量、INSERT、UPDATE 等
END LOOP [loop_label];
```

> ✅ 说明：
> - `loop_label` 是可选的**循环标签**，用于在嵌套循环中明确指定要跳出哪一个循环（推荐在复杂场景下使用）
> - **必须通过 `LEAVE` 手动退出循环**，否则将**无限循环**！
> - 常用于**需要明确控制循环次数或退出条件**的场景

---

## 三、`LOOP` 语句的使用场景

常见使用场景包括：

- ✅ 需要**手动控制循环逻辑和退出时机**
- ✅ 构建**自定义的迭代逻辑**（如逐条处理数据、生成序列等）
- ✅ 在存储过程中实现**批量插入、更新、计算**
- ✅ 当循环条件较为复杂，不适合用 `WHILE` 或 `REPEAT` 时

> ⚠️ 注意：由于 `LOOP` **不会自动检查条件**，必须**手动控制退出**，因此更灵活但也更容易造成无限循环，需谨慎使用！

---

## 四、完整实战示例

---

### ✅ 示例 1：使用 `LOOP` 循环生成并插入 5 条测试数据

#### 🎯 场景：
向表中循环插入 5 条记录，每条记录的 ID 和名称按顺序生成（如 ID:1, name:test1；ID:2, name:test2...）

---

#### ✅ 1. 创建测试表

```sql
CREATE TABLE loop_demo (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);
```

---

#### ✅ 2. 创建存储过程，使用 LOOP 循环插入数据

```sql
DELIMITER $$

CREATE PROCEDURE insert_loop_data()
BEGIN
    DECLARE i INT DEFAULT 1;  -- 循环计数器，从1开始

    my_loop: LOOP
        -- 插入一条数据
        INSERT INTO loop_demo (id, name) VALUES (i, CONCAT('test', i));

        SET i = i + 1;  -- 计数器自增

        -- 判断是否达到 5 条，如果是则退出循环
        IF i > 5 THEN
            LEAVE my_loop;
        END IF;
    END LOOP my_loop;
END$$

DELIMITER ;
```

---

#### ✅ 3. 调用存储过程并查看结果

```sql
CALL insert_loop_data();

-- 查询插入的数据
SELECT * FROM loop_demo;
```

### 🧾 预期结果：

| id | name   |
|----|--------|
| 1  | test1  |
| 2  | test2  |
| 3  | test3  |
| 4  | test4  |
| 5  | test5  |

> ✅ 说明：通过 `LOOP` + 计数器 + `LEAVE` 实现了**可控的循环插入**

---

### ✅ 示例 2：使用 `LOOP` 和条件判断实现简单累加

#### 🎯 场景：
计算 1 到 10 的整数累加和，并将结果存入变量中输出（通过 SELECT 展示）

---

#### ✅ 1. 创建存储过程

```sql
DELIMITER $$

CREATE PROCEDURE calculate_sum()
BEGIN
    DECLARE i INT DEFAULT 1;
    DECLARE sum INT DEFAULT 0;

    my_loop: LOOP
        SET sum = sum + i;     -- 累加当前数
        SET i = i + 1;         -- 自增计数器

        IF i > 10 THEN
            LEAVE my_loop;     -- 当 i > 10 时退出循环
        END IF;
    END LOOP my_loop;

    -- 输出累加结果
    SELECT sum AS total_sum;
END$$

DELIMITER ;
```

---

#### ✅ 2. 调用存储过程

```sql
CALL calculate_sum();
```

### 🧾 预期输出：

| total_sum |
|-----------|
| 55        |

> ✅ 即：1+2+3+...+10 = 55，通过 `LOOP` 循环实现累加逻辑

---

## 五、`LOOP` 语句的注意事项

| 注意事项 | 说明 |
|---------|------|
| **必须手动退出** | `LOOP` **不会自动停止**，必须使用 `LEAVE` 主动跳出，否则将造成**无限循环**！ |
| **推荐使用标签** | 可以为 `LOOP` 指定一个标签（如 `my_loop:`），然后在 `LEAVE my_loop;` 中明确跳出，尤其在嵌套循环中非常有用 |
| **常与变量控制配合** | 一般会定义一个计数器变量（如 `i`），通过 `SET i = i + 1` 和 `IF i > N THEN LEAVE` 控制循环次数 |
| **不能单独在普通 SQL 中使用** | `LOOP` 只能在 **存储过程、函数、触发器** 等复合语句块中使用 |
| **与 WHILE / REPEAT 的区别** | `LOOP` **无内置条件判断**，而 `WHILE` 和 `REPEAT` 在语法层面就包含条件控制 |

---

## 六、`LOOP` 与 `WHILE` / `REPEAT` 的对比

| 循环类型 | 是否自带条件 | 语法特点 | 适用场景 |
|---------|--------------|----------|----------|
| **LOOP** | ❌ 无，必须手动控制退出 | 最灵活，适合复杂逻辑控制 | 需要完全自定义循环流程时 |
| **WHILE** | ✅ 先判断条件，为 TRUE 才执行 | `WHILE 条件 DO ... END WHILE` | 当循环**依赖前置条件判断**时 |
| **REPEAT** | ✅ 先执行，后判断条件 | `REPEAT ... UNTIL 条件 END REPEAT` | 适用于**至少执行一次，直到满足条件退出** |

> ✅ 如果你的循环逻辑简单且条件明确，推荐使用 `WHILE` 或 `REPEAT`；  
> ✅ 如果你希望完全控制每一次迭代与退出时机，推荐使用 `LOOP`

---

## ✅ 总结

| 项目 | 说明 |
|------|------|
| **语法关键字** | `LOOP ... END LOOP;`，通常配合 `LEAVE` 使用 |
| **是否自动循环** | ❌ 不会自动停止，必须手动控制退出（通常用 `IF ... LEAVE`） |
| **是否带条件** | ❌ 本身不带条件判断，属于“无条件进入，手动退出”类型循环 |
| **适用场景** | 需要完全自定义循环逻辑、复杂退出机制、批量操作等 |
| **必须结束语句** | `END LOOP;`，建议使用标签提高可读性，如 `my_loop: LOOP` + `LEAVE my_loop;` |
| **常见用途** | 批量插入数据、循环计算、逐条处理记录、自定义迭代逻辑 |

---

## 📌 下一步建议

你可以继续尝试以下练习来巩固 `LOOP` 的使用：

1. ✅ 使用 `LOOP` 循环批量生成 1~100 的奇数并插入表中
2. ✅ 用 `LOOP` 实现一个简单的计数器，统计某个条件满足的次数
3. ✅ 在循环中结合 `IF` 做更复杂的条件判断与分支处理
4. ✅ 使用带标签的 `LOOP` 嵌套循环，并用 `LEAVE` 控制跳出指定层

---

如你希望获取：

- ✅ `LOOP` 语句与 `WHILE` / `REPEAT` 的**对比实战案例**
- ✅ 带有 **用户输入参数、表数据批量操作** 的完整存储过程示例
- ✅ 或者 `LOOP` 在 **复杂业务逻辑、批量数据加工** 中的应用

