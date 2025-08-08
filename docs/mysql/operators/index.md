---
noteId: "06ec9eb073e911f0ac7f012540a4f7e6"
tags: []

---

运算符

定义

运算符又叫“操作符”。用于对数据执行：算术运算、比较运算、逻辑运算等。

## 算术操作符

用于执行数学计算：

- `+` 加法：`SELECT 5 + 3;` → 8
- `-` 减法：`SELECT 10 - 4;` → 6
- `*` 乘法：`SELECT 6 * 7;` → 42
- `/` 除法：`SELECT 15 / 3;` → 5.0000
- `DIV` 整数除法：`SELECT 15 DIV 4;` → 3
- `%` 或 `MOD` 取模：`SELECT 15 % 4;` → 3

## 比较操作符

用于比较值，返回布尔值(TRUE/FALSE)：

- `=` 等于：`SELECT * FROM users WHERE age = 25;`
- `<>` 或 `!=` 不等于
- `>` 大于
- `<` 小于
- `>=` 大于等于
- `<=` 小于等于
- `<=>` NULL 安全的等于（可以比较 NULL 值）


## 范围运算符

- `BETWEEN` ：在范围内

```sql
列名 BETWEEN 值1 AND 值2  # 含边界值 注意满足条件值1 <= 值2
```


- `NOT BETWEEN` ：不在范围内

```sql
列名 NOT BETWEEN 值1 AND 值2
```

## 匹配运算符

- `IN` ：在值列表中

```sql
列名 IN (值1，值2，值3)

id IN(1,3,5)
```

- `NOT IN` ：不在列表中

```sql
列名 NOT IN (值1，值2，值3)

id NOT IN(1,3,5)
```

## 空值运算符

- `IS NULL` 是 NULL 值
- `IS NOT NULL` 不是 NULL 值
- `LIKE` 模式匹配：`WHERE name LIKE 'J%'`（以 J 开头）
- `NOT LIKE` 不匹配模式
- `REGEXP` 或 `RLIKE` 正则表达式匹配

## 逻辑运算符

用于组合多个条件：

- `AND` 或 `&&` 逻辑与
- `OR` 或 `||` 逻辑或
- `NOT` 或 `!` 逻辑非
- `XOR` 逻辑异或



## 练习1:成绩表

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

## 练习2:员工表

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

## 练习3:订单表

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

## 练习4:修改订单表

不好意思，练习4中的订单表中忘记了一个数量（quantity）字段，请添加

- 数量（quantity）：必须≥1 

```sql
-- 添加数量必须≥1的约束
ALTER TABLE students
ADD CONSTRAINT age CHECK (age >= 1);
```

**注意**：若表中已有数据违反约束，添加操作会失败。