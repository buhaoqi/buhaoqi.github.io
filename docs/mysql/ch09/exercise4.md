---
# 这部分是关键！侧边栏显示名由这里决定
title: 练习:存储函数  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 练习:存储函数  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 13  # 侧边栏中排在第1位
---

## 全真模拟一第88题
使用MySQL数据库teaching，其中包含学生表s、学生选课表sc，
- s表:含有sno（学号）、sn（姓名）、sex（性别）、age（年龄）、maj（专业）、dept（院系）共6个字段
- sc表:含有sno（学号）、cno（课程号）、score（成绩）共3个字段，

表1:S表内容
| sno | sn   | sex | age | maj   | dept   |
|-----|------|-----|-----|-------|--------|
| s1  | 王彤 | 女  | 18  | 计算机 | 信息学院 |
| s2  | 苏乐 | 女  | 20  | 信息   | 信息学院 |
| s3  | 林欣 | 男  | 19  | 信息   | 信息学院 |
| s4  | 陶然 | 女  | 18  | 自动化 | 工学院   |
| s5  | 王立 | 男  | 17  | 数学   | 理学院   |
| s6  | 何欣荣 | 女  | 21  | 计算机 | 信息学院 |
| s7  | 赵林林 | 女  | 19  | 数学   | 理学院   |
| s8  | 李轩 | 男  | 19  | 自动化 | 工学院   |


表2:SC表内容
| sno | cno | score |
|-----|-----|-------|
| s1  | c1  | 87    |
| s1  | c2  | 85    |
| s2  | c1  | 75    |
| s2  | c2  | 72    |
| s2  | c3  | 71    |
| s2  | c4  | 88    |

第88题.有如下MySQL程序：
```sql
USE teaching;
DELIMITER $$
CREATE FUNCTION show_average(stu_no CHAR(10))
RETURNS DECIMAL(5,2)
READS SQL DATA
BEGIN
    DECLARE n DECIMAL(5,2);
    SELECT AVG(score) INTO n FROM sc WHERE sno=stu_no;
    RETURN n;
END $$
DELIMITER ;
```
运行以上代码，完成存储过程的创建，输入并执行语句`SELECT show_average('s1');`则运行结果是________。

---

## 题目 1（单选）

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

## 题目 2（判断）

存储函数和存储过程一样，都可以使用 `CALL` 语句调用。（ ）

**答案：** ❌ 错

📌 正确方式：

```sql
SELECT my_func();
```
---
## 语法填空题

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

## 基础编程题（⭐⭐）

编写一个存储函数 `add_tax(price DECIMAL(10,2))`，
返回 **含 10% 税后的价格**。


参考答案

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

## 条件判断题（⭐⭐）

编写存储函数 `age_group(age INT)`，返回：

| 年龄    | 返回值  |
| ----- | ---- |
| < 18  | 未成年  |
| 18–65 | 在职年龄 |
| > 65  | 退休年龄 |


参考答案

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

## CASE 表达式题（⭐⭐⭐）

使用 `CASE` 编写函数 `week_type(day INT)`：

* 1–5：工作日
* 6–7：周末
* 其他：非法日期


参考答案

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

## 结合表数据的函数（⭐⭐⭐）
表结构

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(20),
    score INT
);
```

编写函数 `get_score(uid INT)`，
根据学生 id 返回该学生的成绩。

参考答案

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

## 查询中使用函数（⭐⭐⭐）

已存在函数 `score_level(score)`，
请写 SQL 查询所有学生姓名、成绩和等级。


参考答案

```sql
SELECT name, score, score_level(score) AS level
FROM students;
```

📌 核心考点：
👉 **只有存储函数可以这样用**

---

## 纠错题（⭐⭐⭐⭐ · 易考）

下面函数定义有错误，请指出并修改。

```sql
CREATE FUNCTION test_fun(a INT)
BEGIN
    SET a = a + 1;
END;
```

正确答案

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

## 综合判断题（⭐⭐⭐⭐）

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

## 答案

### 全真模拟一第88题
