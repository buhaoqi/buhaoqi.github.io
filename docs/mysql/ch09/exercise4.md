---
# 这部分是关键！侧边栏显示名由这里决定
title: 练习:存储函数  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 练习:存储函数  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 13  # 侧边栏中排在第1位
---

太好了，这一步**非常适合巩固 + 出题 + 带学生练** 👍
我给你设计一套 **「由浅入深、覆盖考点、可直接课堂使用」的
👉 存储函数专项练习题（含标准答案 + 易错点）**。

---

# MySQL 存储函数专项练习题（含答案）

## 题目结构说明

* 难度：⭐⭐ → ⭐⭐⭐⭐
* 覆盖点：
  ✅ 定义语法
  ✅ 参数与返回值
  ✅ IF / CASE
  ✅ 查询中使用函数
  ✅ 常见易错点

---

## 一、基础概念题（必会 · ⭐）

### 题目 1（单选）

下列关于 **MySQL 存储函数** 的说法，正确的是（ ）

A. 可以返回多个值
B. 可以没有 RETURN 语句
C. 可以在 SELECT 语句中使用
D. 只能在 CALL 语句中调用

**答案：** ✅ C

📌 解析：

* 存储函数**必须有 RETURN**，且**只能返回一个值**
* 使用方式是 `SELECT 函数名()`，不是 `CALL`

---

### 题目 2（判断）

存储函数和存储过程一样，都可以使用 `CALL` 语句调用。（ ）

**答案：** ❌ 错

📌 正确方式：

```sql
SELECT my_func();
```

---

## 二、语法填空题（⭐）

### 题目 3

补全下面存储函数的定义，使其返回两个整数中的较大值。

```sql
CREATE FUNCTION max_num(a INT, b INT)
________ INT
BEGIN
    IF a > b THEN
        ________ a;
    ELSE
        ________ b;
    END IF;
END;
```

**答案：**

```sql
RETURNS
RETURN
RETURN
```

📌 易错点：

* `RETURNS` 不是 `RETURN`
* 函数体内 **必须** 有 `RETURN`

---

## 三、基础编程题（⭐⭐）

### 题目 4

编写一个存储函数 `add_tax(price DECIMAL(10,2))`，
返回 **含 10% 税后的价格**。

---

### ✅ 参考答案

```sql
DELIMITER $$

CREATE FUNCTION add_tax(price DECIMAL(10,2))
RETURNS DECIMAL(10,2)
BEGIN
    RETURN price * 1.1;
END $$

DELIMITER ;
```

**测试：**

```sql
SELECT add_tax(100);
```

📌 输出：

```
110.00
```

---

## 四、条件判断题（⭐⭐）

### 题目 5

编写存储函数 `age_group(age INT)`，返回：

| 年龄    | 返回值  |
| ----- | ---- |
| < 18  | 未成年  |
| 18–65 | 在职年龄 |
| > 65  | 退休年龄 |

---

### ✅ 参考答案

```sql
DELIMITER $$

CREATE FUNCTION age_group(age INT)
RETURNS VARCHAR(20)
BEGIN
    IF age < 18 THEN
        RETURN '未成年';
    ELSEIF age <= 65 THEN
        RETURN '在职年龄';
    ELSE
        RETURN '退休年龄';
    END IF;
END $$

DELIMITER ;
```

---

## 五、CASE 表达式题（⭐⭐⭐）

### 题目 6

使用 `CASE` 编写函数 `week_type(day INT)`：

* 1–5：工作日
* 6–7：周末
* 其他：非法日期

---

### ✅ 参考答案

```sql
DELIMITER $$

CREATE FUNCTION week_type(day INT)
RETURNS VARCHAR(10)
BEGIN
    RETURN CASE
        WHEN day BETWEEN 1 AND 5 THEN '工作日'
        WHEN day IN (6,7) THEN '周末'
        ELSE '非法日期'
    END;
END $$

DELIMITER ;
```

---

## 六、结合表数据的函数（⭐⭐⭐）

### 表结构

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(20),
    score INT
);
```

---

### 题目 7

编写函数 `get_score(uid INT)`，
根据学生 id 返回该学生的成绩。

---

### ✅ 参考答案

```sql
DELIMITER $$

CREATE FUNCTION get_score(uid INT)
RETURNS INT
BEGIN
    DECLARE s INT;

    SELECT score INTO s
    FROM students
    WHERE id = uid;

    RETURN s;
END $$

DELIMITER ;
```

📌 易错点：

* 必须使用 `SELECT ... INTO`
* 返回的是**单个值**

---

## 七、查询中使用函数（⭐⭐⭐）

### 题目 8

已存在函数 `score_level(score)`，
请写 SQL 查询所有学生姓名、成绩和等级。

---

### ✅ 参考答案

```sql
SELECT name, score, score_level(score) AS level
FROM students;
```

📌 核心考点：
👉 **只有存储函数可以这样用**

---

## 八、纠错题（⭐⭐⭐⭐ · 易考）

### 题目 9

下面函数定义有错误，请指出并修改。

```sql
CREATE FUNCTION test_fun(a INT)
BEGIN
    SET a = a + 1;
END;
```

---

### ✅ 正确答案

**错误点：**
1️⃣ 缺少 `RETURNS`
2️⃣ 没有 `RETURN`
3️⃣ 函数不能只“做事不返回”

**修改后：**

```sql
CREATE FUNCTION test_fun(a INT)
RETURNS INT
BEGIN
    RETURN a + 1;
END;
```

---

## 九、综合判断题（⭐⭐⭐⭐）

### 题目 10

以下需求，**哪一个必须使用存储函数实现？**

A. 转账业务
B. 插入订单后自动更新库存
C. 查询时动态计算商品折后价
D. 每天凌晨清理日志

**答案：** ✅ C

📌 解析：

* A → 存储过程
* B → 触发器
* C → **存储函数**
* D → 事件

---

## 十、终极总结（学生版）

> * 存储函数 **必须返回一个值**
> * 使用 `RETURNS` + `RETURN`
> * 可在 `SELECT` 中使用
> * 适合计算、判断、转换

---

如果你愿意，下一步我可以：

* 🧠 出一套 **“函数 / 过程 / 触发器 / 事件 混合辨析题”**
* 📄 帮你整理成 **可打印的练习讲义版**
* 🎯 按「期末考试 / 证书考试」难度再升级一套

你打算 **课堂用** 还是 **考试冲刺**？我可以按目标继续加料。
