---
noteId: "318dcfb0753111f082d9bbd061b73fc2"
tags: []

---

# MySQL 中控制结构之 `CASE` 语句的用法详解

在 MySQL 中，**控制结构（Control Structures）** 允许你在 **存储过程、函数、触发器、查询语句** 等场景中，根据不同的条件执行不同的逻辑分支。其中，**`CASE` 语句** 是一种非常强大且常用的**多路条件分支控制结构**，类似于其他编程语言中的 `switch-case` 或多重 `if-else`。

---

## 一、MySQL 中的 `CASE` 语句有两种语法形式

| 形式 | 适用场景 | 特点 |
|------|----------|------|
| **1. 简单 CASE 表达式** | 用于 **等值比较**（如 `CASE 变量 WHEN 值1 THEN ...`） | 类似 `switch-case`，适合字段值匹配 |
| **2. 搜索 CASE 表达式** | 用于 **任意条件判断**（如 `CASE WHEN 条件1 THEN ...`） | 类似多重 `if-else`，更灵活，支持任意表达式 |

这两种形式都可以在以下场景中使用：

- ✅ **在 SELECT 查询中作为列值动态计算**（最常见）
- ✅ **在存储过程 / 函数中做逻辑分支**
- ✅ **在 UPDATE / INSERT 语句中动态赋值**
- ✅ **在 ORDER BY / WHERE 中实现动态条件**

---

## 二、形式 1：简单 CASE 表达式（等值匹配）

### 🎯 语法

```sql
CASE 表达式
    WHEN 值1 THEN 结果1
    WHEN 值2 THEN 结果2
    ...
    [ELSE 默认结果]
END
```

> ✅ 说明：
> - 先计算 `表达式` 的值，然后依次与 `WHEN 值` 进行**等值比较（=）**
> - 一旦匹配成功，就返回对应的 `THEN` 后的结果
> - 如果都不匹配，且有 `ELSE`，则返回 `ELSE` 的结果；若无 `ELSE` 则返回 `NULL`

---

### ✅ 示例 1：根据分数返回等级（简单 CASE）

#### 场景：
根据学生成绩字段 `score`，返回对应的等级描述：

- 90~100 → '优秀'
- 80~89 → '良好'
- 70~79 → '中等'
- 60~69 → '及格'
- 其它 → '不及格'

---

#### ✅ 创建测试表并插入数据

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    score INT
);

INSERT INTO students (id, name, score) VALUES
(1, 'Alice', 95),
(2, 'Bob', 85),
(3, 'Charlie', 75),
(4, 'David', 65),
(5, 'Eve', 55);
```

---

#### ✅ 使用简单 CASE 查询等级

```sql
SELECT 
    id,
    name,
    score,
    CASE score
        WHEN 90 THEN '优秀'
        WHEN 80 THEN '良好'
        WHEN 70 THEN '中等'
        WHEN 60 THEN '及格'
        ELSE '不及格'
    END AS grade_simple
FROM students;
```

> ❗ 注意：**简单 CASE 只能做等值比较（score = 90），不能做范围判断！**

所以更推荐下面的 **搜索 CASE（形式2）** 来实现范围判断。

---

## 三、形式 2：搜索 CASE 表达式（支持任意条件，推荐）

### 🎯 语法

```sql
CASE
    WHEN 条件1 THEN 结果1
    WHEN 条件2 THEN 结果2
    ...
    [ELSE 默认结果]
END
```

> ✅ 说明：
> - 每个 `WHEN` 后面跟的是一个**布尔表达式（条件）**
> - 按顺序判断，**一旦某个条件为 TRUE，则返回对应的 THEN 结果**
> - 如果所有条件都不满足，且有 `ELSE` 则返回 ELSE 值，否则返回 `NULL`
> - **推荐用于范围判断、复杂逻辑分支**

---

### ✅ 示例 2：根据分数范围返回等级（搜索 CASE，推荐 ✅）

```sql
SELECT 
    id,
    name,
    score,
    CASE
        WHEN score >= 90 AND score <= 100 THEN '优秀'
        WHEN score >= 80 THEN '良好'
        WHEN score >= 70 THEN '中等'
        WHEN score >= 60 THEN '及格'
        ELSE '不及格'
    END AS grade
FROM students;
```

### 🧾 查询结果示例：

| id | name    | score | grade  |
|----|---------|-------|--------|
| 1  | Alice   | 95    | 优秀   |
| 2  | Bob     | 85    | 良好   |
| 3  | Charlie | 75    | 中等   |
| 4  | David   | 65    | 及格   |
| 5  | Eve     | 55    | 不及格 |

> ✅ 这才是实际开发中最常用的 CASE 写法，支持范围、多条件、逻辑判断！

---

## 四、`CASE` 语句的常见使用场景

---

### ✅ 场景 1：在 SELECT 中动态生成字段值（最常用）

如：状态码转文字、分数转等级、性别码转文字、类型映射等

```sql
SELECT 
    order_id,
    status_code,
    CASE status_code
        WHEN 1 THEN '待付款'
        WHEN 2 THEN '已付款'
        WHEN 3 THEN '已发货'
        WHEN 4 THEN '已完成'
        ELSE '未知状态'
    END AS status_text
FROM orders;
```

---

### ✅ 场景 2：在 ORDER BY 中动态排序

```sql
-- 按优先级字段动态排序：重要 > 普通 > 低
SELECT * FROM tasks
ORDER BY 
    CASE priority
        WHEN '重要' THEN 1
        WHEN '普通' THEN 2
        WHEN '低' THEN 3
        ELSE 4
    END;
```

---

### ✅ 场景 3：在 WHERE 或 UPDATE 中做条件赋值

```sql
-- 示例：根据条件动态设置折扣
UPDATE orders
SET discount = 
    CASE
        WHEN total_amount > 1000 THEN 0.15
        WHEN total_amount > 500 THEN 0.10
        ELSE 0.05
    END
WHERE order_date > '2024-01-01';
```

---

### ✅ 场景 4：在存储过程 / 函数中做逻辑分支

```sql
DELIMITER $$

CREATE FUNCTION get_discount_level(amount DECIMAL(10,2))
RETURNS VARCHAR(20)
DETERMINISTIC
BEGIN
    DECLARE level VARCHAR(20);
    SET level = CASE
        WHEN amount > 1000 THEN 'VIP'
        WHEN amount > 500 THEN '高级'
        ELSE '普通'
    END;
    RETURN level;
END$$

DELIMITER ;

-- 调用函数
SELECT get_discount_level(1200);  -- 返回 'VIP'
SELECT get_discount_level(600);   -- 返回 '高级'
```

---

## 五、`CASE` 语句注意事项

| 注意事项 | 说明 |
|---------|------|
| **ELSE 是可选的** | 如果所有 WHEN 条件都不满足且无 ELSE，则返回 NULL |
| **搜索 CASE 更灵活** | 推荐使用 `CASE WHEN 条件 THEN ...` 形式，支持任意表达式和范围判断 |
| **简单 CASE 只能等值比较** | `CASE 表达式 WHEN 值 THEN ...` 只能做 `=` 比较，不能做范围或复杂判断 |
| **执行顺序** | WHEN 条件是**从上到下依次判断**，一旦匹配成功即返回，后面的不再判断 |
| **可用于任意 SQL 子句** | SELECT、WHERE、ORDER BY、GROUP BY、UPDATE、INSERT、存储过程等 |

---

## ✅ 总结表：MySQL `CASE` 语句对比

| 类型 | 语法形式 | 是否支持范围判断 | 推荐程度 | 适用场景 |
|------|----------|------------------|----------|----------|
| **简单 CASE** | `CASE 表达式 WHEN 值1 THEN ...` | ❌ 只能等值（=） | ⭐⭐ | 字段精确匹配，如 `CASE status WHEN 1 THEN 'Yes'` |
| **搜索 CASE** | `CASE WHEN 条件1 THEN ...` | ✅ 支持任意表达式和范围 | ⭐⭐⭐⭐⭐ | 分数范围、状态判断、复杂逻辑分支 |

---

## 📌 下一步建议

你可以继续尝试以下练习来巩固 `CASE` 的使用：

1. ✅ 使用 `CASE` 根据用户性别码（1/2）返回 '男' / '女'
2. ✅ 在订单表中根据金额范围返回客户等级（如 VIP / 普通）
3. ✅ 在查询中使用 `CASE` 实现动态排序（如按优先级数字映射排序）
4. ✅ 在 `UPDATE` 语句中使用 `CASE` 批量更新不同条件下的字段值
5. ✅ 在函数或存储过程中使用 `CASE` 实现多分支返回逻辑

---

如你希望获取：

- ✅ `CASE` 语句与 `IF` 函数的对比（如 `IF()` vs `CASE WHEN`）
- ✅ 带有 **业务字段映射、动态 SQL、批量更新** 的完整实战案例
- ✅ 或者 `CASE` 在 **ORDER BY / GROUP BY 中的高级用法**

