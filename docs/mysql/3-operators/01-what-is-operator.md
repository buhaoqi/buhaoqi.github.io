---
noteId: "06ec9eb073e911f0ac7f012540a4f7e6"
tags: []

---


在 MySQL 中，**运算符（Operators）** 是用于执行各种**操作与计算**的符号或关键字，它们在 SQL 查询、条件判断、数据计算、字段比较等场景中扮演着至关重要的角色。

掌握 MySQL 的运算符可以让你：

- ✅ 构建灵活的 **WHERE 条件**
- ✅ 实现数据的 **计算、比较与逻辑判断**
- ✅ 进行 **数学运算、字符串处理、日期计算** 等
- ✅ 在 **SELECT、UPDATE、INSERT、存储过程** 等语句中发挥关键作用

---


## MySQL运算符


# 一、MySQL 运算符分类总览

MySQL 中的运算符可以分为以下几大类：

| 类别 | 说明 | 包含运算符 |
|------|------|-------------|
| **算术运算符** | 用于数值计算 | `+`, `-`, `*`, `/`, `%` |
| **比较运算符（关系运算符）** | 用于比较两个值 | `=`, `<>`/`!=`, `>`, `<`, `>=`, `<=`, `BETWEEN`, `IN`, `LIKE`, `IS NULL`, `IS NOT NULL` |
| **逻辑运算符** | 用于组合或取反条件 | `AND`, `OR`, `NOT`, `XOR` |
| **位运算符** | 用于按位操作（二进制位运算） | `&`, `|`, `^`, `~`, `<<`, `>>` |
| **字符串连接运算符** | 用于拼接字符串 | `CONCAT()` 函数 或 `||`（在某些 SQL 模式下） |
| **特殊运算符** | 如 `CASE WHEN`、`IF()` 等函数形式运算符 | `CASE`, `IF()`, `IFNULL()`, `COALESCE()` |

> ✅ 本篇将重点介绍 **最常用的四大类运算符：算术运算符、比较运算符、逻辑运算符 和 位运算符**，并附带使用示例。

---

# 二、1. 算术运算符（Arithmetic Operators）

用于执行基本的数学计算，比如加减乘除和取余。

| 运算符 | 名称 | 描述 | 示例 | 结果 |
|--------|------|------|------|------|
| `+` | 加法 | 加法运算 | `5 + 3` | `8` |
| `-` | 减法 | 减法运算 | `10 - 2` | `8` |
| `*` | 乘法 | 乘法运算 | `4 * 3` | `12` |
| `/` | 除法 | 除法运算，返回浮点数 | `10 / 3` | `3.3333` |
| `%` 或 `MOD()` | 取模（求余） | 求余数 | `10 % 3` 或 `MOD(10, 3)` | `1` |

### ✅ 示例：
```sql
SELECT 10 + 5;        -- 15
SELECT 10 - 3;        -- 7
SELECT 4 * 2;         -- 8
SELECT 10 / 3;        -- 3.3333
SELECT 10 % 3;        -- 1
SELECT MOD(10, 3);    -- 1
```

> 🎯 应用场景：计算金额、折扣、数量 × 单价、年龄差等

---

# 三、2. 比较运算符（Comparison / Relational Operators）

用于比较两个值之间的关系，常用于 `WHERE` 条件中筛选数据。

| 运算符 | 名称 | 描述 | 示例 | 结果（假设 a=10, b=20） |
|--------|------|------|------|--------------------------|
| `=` | 等于 | 判断相等 | `a = b` | FALSE |
| `<>` 或 `!=` | 不等于 | 判断不相等 | `a <> b` 或 `a != b` | TRUE |
| `>` | 大于 | 左值大于右值 | `a > b` | FALSE |
| `<` | 小于 | 左值小于右值 | `a < b` | TRUE |
| `>=` | 大于等于 | 左值 ≥ 右值 | `a >= b` | FALSE |
| `<=` | 小于等于 | 左值 ≤ 右值 | `a <= b` | TRUE |
| `BETWEEN ... AND ...` | 在范围内 | 判断值是否在两个值之间（含边界） | `a BETWEEN 5 AND 15` | TRUE |
| `IN (值1, 值2, ...)` | 在集合中 | 判断值是否等于给定集合中的某个值 | `a IN (5, 10, 15)` | TRUE |
| `LIKE` | 模糊匹配 | 模糊字符串匹配（支持 `%`, `_`） | `name LIKE 'J%'` | 匹配以 J 开头的名字 |
| `IS NULL` | 是 NULL | 判断是否为 NULL | `a IS NULL` | FALSE（假设 a=10） |
| `IS NOT NULL` | 非 NULL | 判断不为 NULL | `a IS NOT NULL` | TRUE |

### ✅ 示例：
```sql
SELECT * FROM users WHERE age > 18;
SELECT * FROM products WHERE price <= 100;
SELECT * FROM orders WHERE status = 1 AND amount > 1000;
SELECT * FROM users WHERE email IS NOT NULL;
SELECT * FROM customers WHERE country IN ('CN', 'US', 'UK');
SELECT * FROM products WHERE name LIKE 'Apple%';
```

> 🎯 应用场景：数据筛选、状态判断、范围查询、模糊搜索等

---

# 四、3. 逻辑运算符（Logical Operators）

用于组合多个条件，实现复杂的逻辑判断，常用于 `WHERE`、`HAVING`、`CASE` 等语句中。

| 运算符 | 名称 | 描述 | 示例 |
|--------|------|------|------|
| `AND` | 逻辑与 | 所有条件为 TRUE 时返回 TRUE | `A AND B` |
| `OR` | 逻辑或 | 任意条件为 TRUE 时返回 TRUE | `A OR B` |
| `NOT` 或 `!` | 逻辑非 | 对条件取反 | `NOT A` 或 `NOT B` |
| `XOR` | 逻辑异或 | 只有一个条件为 TRUE 时返回 TRUE | `A XOR B` |

### ✅ 示例：
```sql
-- 查询年龄大于18且状态为1的用户
SELECT * FROM users WHERE age > 18 AND status = 1;

-- 查询部门是 IT 或 HR 的员工
SELECT * FROM employees WHERE department = 'IT' OR department = 'HR';

-- 查询不是管理员的用户
SELECT * FROM users WHERE NOT is_admin = 1;

-- 查询年龄小于18或大于60，但不能同时满足（异或）
SELECT * FROM users WHERE age < 18 XOR age > 60;
```

> 🎯 应用场景：组合多个筛选条件、权限判断、状态互斥等

---

# 五、4. 位运算符（Bitwise Operators）

用于对**整数的二进制位进行操作**，适合底层操作或特殊业务需求，一般开发中较少直接使用。

| 运算符 | 名称 | 描述 | 示例 |
|--------|------|------|------|
| `&` | 按位与 | 两个数的二进制按位进行 AND 运算 | `5 & 3` → `1` |
| `|` | 按位或 | 按位进行 OR 运算 | `5 | 3` → `7` |
| `^` | 按位异或 | 按位进行 XOR 运算 | `5 ^ 3` → `6` |
| `~` | 按位取反 | 单目运算符，按位取反 | `~5` |
| `<<` | 左移 | 二进制左移指定位数 | `1 << 2` → `4` |
| `>>` | 右移 | 二进制右移指定位数 | `8 >> 2` → `2` |

### ✅ 示例（结果为二进制运算后的十进制值）：
```sql
SELECT 5 & 3;   -- 1 (0101 & 0011 = 0001)
SELECT 5 | 3;   -- 7 (0101 | 0011 = 0111)
SELECT 5 ^ 3;   -- 6 (0101 ^ 0011 = 0110)
SELECT 1 << 2;  -- 4 (1→100)
SELECT 8 >> 2;  -- 2 (1000 → 0010)
```

> 🎯 应用场景：权限控制（位掩码）、特殊数值处理、底层数据操作

---

# 六、5. 其他特殊运算符/函数

虽然不是传统意义上的运算符，但常用于逻辑与计算场景：

| 名称 | 说明 | 示例 |
|------|------|------|
| `CASE ... WHEN ... THEN ... END` | 多分支条件判断（类似 switch-case） | 见前面「控制结构」部分 |
| `IF(condition, true_val, false_val)` | 条件判断函数 | `IF(score > 60, '及格', '不及格')` |
| `IFNULL(expr1, expr2)` | 如果 expr1 为 NULL，则返回 expr2 | `IFNULL(name, '未知')` |
| `COALESCE(expr1, expr2, ...)` | 返回第一个非 NULL 值 | `COALESCE(col1, col2, 'N/A')` |

---

# ✅ 总结表：MySQL 常见运算符速查

| 类别 | 运算符 | 示例 | 用途简述 |
|------|--------|------|----------|
| **算术运算符** | `+`, `-`, `*`, `/`, `%` | `10 + 5`, `10 % 3` | 数学计算 |
| **比较运算符** | `=`, `<>`, `>`, `<`, `>=`, `<=`, `BETWEEN`, `IN`, `LIKE`, `IS NULL` | `age > 18`, `name LIKE 'A%'` | 数据筛选与比较 |
| **逻辑运算符** | `AND`, `OR`, `NOT`, `XOR` | `A AND B`, `NOT C` | 条件组合 |
| **位运算符** | `&`, `|`, `^`, `~`, `<<`, `>>` | `5 & 3` | 二进制位操作 |
| **特殊函数/运算符** | `CASE`, `IF()`, `IFNULL()`, `COALESCE()` | `IF(score>60, '及格', '不及格')` | 逻辑分支与空值处理 |

---



## 📌 下一步建议

你可以继续尝试以下练习来巩固运算符的使用：

1. ✅ 使用 `CASE WHEN` 或 `IF()` 根据分数返回等级
2. ✅ 在 `WHERE` 子句中组合多个条件（AND / OR / IN / BETWEEN）
3. ✅ 使用 `LIKE` 实现模糊搜索（如查找名字以 "张" 开头的用户）
4. ✅ 用 `IS NULL` / `IS NOT NULL` 过滤空值数据
5. ✅ 实现简单的数学计算（如金额折扣、总价 = 数量 × 单价）

---

如你希望获取：

- ✅ 这些运算符的 **建表 + 数据 + 查询实战示例**
- ✅ 如何与 **聚合函数（如 SUM, AVG）结合使用**
- ✅ 或者运算符在 **存储过程、触发器、窗口函数** 中的应用


## 运算符

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