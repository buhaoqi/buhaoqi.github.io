---
noteId: "98fd66b0741e11f0ac7f012540a4f7e6"
tags: []

---


# MySQL 中 DQL 的 WHERE 子句详解

在 MySQL 中，**DQL（Data Query Language，数据查询语言）** 是用于从数据库中**查询和检索数据**的核心语言，而 **`WHERE` 子句** 是 DQL（特别是 `SELECT` 查询语句）中极其重要的一部分，用于**筛选满足特定条件的记录**。

---

## 一、什么是 DQL 和 WHERE 子句？

### 🔍 DQL（Data Query Language）：数据查询语言

DQL 是 SQL 的四大子语言之一（其他为 DML、DDL、DCL），它**专注于从数据库中查询数据**，而不修改数据。其最常用的形式是：

```sql
SELECT ... FROM ... WHERE ...
```

### 🎯 WHERE 子句

`WHERE` 子句用于**指定查询条件**，即：

> “我只想要那些**符合某些条件**的记录，请把它们查出来！”

它是 **数据筛选的关键工具**，让你从成千上万条数据中精准提取出你需要的部分。

---

## 二、WHERE 子句的基本语法

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition
[ORDER BY ...]
[LIMIT ...];
```

> ✅ 其中：
> - `SELECT ... FROM ...` 指定查询哪些字段和从哪个表查
> - `WHERE condition` 是筛选条件，只有满足该条件的记录才会被返回
> - 其它如 `ORDER BY`、`LIMIT` 是可选的，用于排序和限制返回条数

---

## 三、WHERE 子句的核心功能与用法详解

---

### 1️⃣ 基础用法：使用比较运算符筛选数据

WHERE 子句最常用的方式就是通过**比较运算符**对字段进行条件判断，比如：

| 运算符 | 说明 | 示例 |
|--------|------|------|
| `=` | 等于 | `age = 18` |
| `<>` 或 `!=` | 不等于 | `status <> 0` |
| `>` | 大于 | `price > 100` |
| `<` | 小于 | `age < 30` |
| `>=` | 大于等于 | `score >= 60` |
| `<=` | 小于等于 | `quantity <= 10` |

#### ✅ 示例：查询年龄为 18 岁的用户
```sql
SELECT * FROM users WHERE age = 18;
```

#### ✅ 示例：查询价格大于 100 的商品
```sql
SELECT * FROM products WHERE price > 100;
```

#### ✅ 示例：查询不是管理员的用户
```sql
SELECT * FROM users WHERE is_admin != 1;
-- 或者
SELECT * FROM users WHERE is_admin <> 1;
```

---

### 2️⃣ 多条件组合：使用逻辑运算符

当需要同时满足多个条件时，可以使用逻辑运算符组合多个条件：

| 运算符 | 说明 | 示例 |
|--------|------|------|
| `AND` | 所有条件都为 TRUE 时返回 TRUE | `age > 18 AND status = 1` |
| `OR` | 任意一个条件为 TRUE 则返回 TRUE | `age < 18 OR is_vip = 1` |
| `NOT` | 对条件取反 | `NOT is_deleted = 1` 或 `is_deleted != 1` |

#### ✅ 示例：查询年龄大于18 **并且** 状态为激活的用户
```sql
SELECT * FROM users WHERE age > 18 AND status = 1;
```

#### ✅ 示例：查询 VIP 用户 **或者** 年龄小于 18 的用户
```sql
SELECT * FROM users WHERE is_vip = 1 OR age < 18;
```

#### ✅ 示例：查询未被删除的用户
```sql
SELECT * FROM users WHERE NOT is_deleted = 1;
-- 或更直观的写法
SELECT * FROM users WHERE is_deleted != 1;
```

> ✅ **AND 的优先级高于 OR**，复杂条件建议用 `()` 明确优先级

---

### 3️⃣ 范围查询：`BETWEEN ... AND ...`

用于筛选某个字段的值是否在**指定的范围内（包含边界值）**。

#### 🎯 语法：
```sql
字段名 BETWEEN 值1 AND 值2
```

#### ✅ 示例：查询年龄在 18 到 30 岁之间的用户
```sql
SELECT * FROM users WHERE age BETWEEN 18 AND 30;
```

> ✅ 等价于：`age >= 18 AND age <= 30`

---

### 4️⃣ 集合查询：`IN (...)`

用于判断某个字段的值是否等于给定列表中的**任意一个值**。

#### 🎯 语法：
```sql
字段名 IN (值1, 值2, 值3, ...)
```

#### ✅ 示例：查询部门为 'IT'、'HR' 或 'Finance' 的员工
```sql
SELECT * FROM employees WHERE department IN ('IT', 'HR', 'Finance');
```

> ✅ 等价于：`department = 'IT' OR department = 'HR' OR department = 'Finance'`

---

### 5️⃣ 模糊查询：`LIKE`

用于对字符串进行**模糊匹配**，常用于搜索功能。支持两个通配符：

| 通配符 | 说明 |
|--------|------|
| `%` | 匹配任意多个字符（包括零个） |
| `_` | 匹配任意单个字符 |

#### 🎯 语法：
```sql
字段名 LIKE '模式'
```

#### ✅ 示例：

- 查询名字以 "张" 开头的用户：
```sql
SELECT * FROM users WHERE name LIKE '张%';
```

- 查询名字为 3 个字符，第二个字符是 "小" 的用户：
```sql
SELECT * FROM users WHERE name LIKE '_小_';
```

- 查询邮箱包含 "@gmail.com" 的用户：
```sql
SELECT * FROM users WHERE email LIKE '%@gmail.com';
```

---

### 6️⃣ 空值判断：`IS NULL` 和 `IS NOT NULL`

> ⚠️ 注意：**NULL 值不能使用 = 或 != 来比较！必须用 IS NULL 或 IS NOT NULL**

#### ✅ 示例：

- 查询没有填写邮箱的用户（邮箱为 NULL）：
```sql
SELECT * FROM users WHERE email IS NULL;
```

- 查询已填写邮箱的用户：
```sql
SELECT * FROM users WHERE email IS NOT NULL;
```

---

## 四、WHERE 子句的常见使用场景总结

| 场景 | 说明 | 示例 |
|------|------|------|
| **基本筛选** | 使用 `=`、`>`、`<` 等比较运算符 | `WHERE age = 18` |
| **多条件组合** | 使用 `AND` / `OR` / `NOT` | `WHERE age > 18 AND status = 1` |
| **范围查询** | 使用 `BETWEEN ... AND ...` | `WHERE age BETWEEN 18 AND 30` |
| **集合匹配** | 使用 `IN (...)` | `WHERE department IN ('IT', 'HR')` |
| **模糊搜索** | 使用 `LIKE` 和 `%`, `_` | `WHERE name LIKE '张%'` |
| **空值处理** | 使用 `IS NULL` / `IS NOT NULL` | `WHERE email IS NOT NULL` |

---

## 五、WHERE 子句的注意事项

| 注意事项 | 说明 |
|---------|------|
| **WHERE 用于筛选行** | 它决定哪些记录会出现在查询结果中，不改变数据本身 |
| **不能用于聚合函数内部** | 比如不能写 `WHERE AVG(age) > 20`，这类条件要用 `HAVING` |
| **NULL 值特殊** | 不要用 `=` 判断 NULL，必须用 `IS NULL` |
| **运算符优先级** | `AND` 优先级高于 `OR`，复杂条件建议用 `()` 明确逻辑 |
| **性能影响** | WHERE 条件越精准，查询效率通常越高，尤其是在大表上 |

---

## ✅ 总结：WHERE 子句核心要点速查

| 功能 | 语法/关键词 | 说明 |
|------|-------------|------|
| **基本筛选** | `=`, `>`, `<`, `>=`, `<=`, `<>` / `!=` | 比较字段值 |
| **多条件组合** | `AND`, `OR`, `NOT` | 组合多个条件 |
| **范围查询** | `BETWEEN 值1 AND 值2` | 判断是否在某个区间内 |
| **集合查询** | `IN (值1, 值2, ...)` | 判断字段是否等于多个值中的某一个 |
| **模糊查询** | `LIKE '模式'` | 模糊匹配字符串，支持 `%` 和 `_` |
| **空值判断** | `IS NULL`, `IS NOT NULL` | 判断字段是否为 NULL |
| **逻辑清晰** | 使用 `()` 明确优先级 | 避免 AND / OR 混淆 |

---

## 📌 下一步建议

你可以继续尝试以下练习来巩固 WHERE 子句的使用：

1. ✅ 查询某个表中满足多个条件的数据（如年龄 > 18 且状态 = 1）
2. ✅ 使用 `LIKE` 实现模糊搜索（如查找名字带“张”或邮箱包含 gmail 的用户）
3. ✅ 使用 `BETWEEN` 查询某个日期或数值范围内的记录
4. ✅ 使用 `IN` 快速筛选多个可能值（如部门 IN (‘IT’, ‘销售’)）
5. ✅ 筛选非空或 NULL 值数据（如查询所有已填写手机号的用户）

---

如你希望获取：

- ✅ 带有 **实际建表 + 数据 + 复杂 WHERE 条件查询** 的完整示例
- ✅ 如何结合 `ORDER BY` / `LIMIT` / `GROUP BY` 使用 WHERE
- ✅ 或者 WHERE 在 **存储过程、动态 SQL、前端搜索条件** 中的应用

欢迎继续提问！我可以为你提供详细的实战 SQL 代码与讲解。


## SELECT语法

```sql
SELECT [ALL | DISTINCT] 输出列表达式1,输出列表达式2, ...
[FROM 表名]                          /*FROM子句*/
[WHERE 条件]                         /*WHERE子句*/
[GROUP BY 列名]                      /*GROUP BY子句*/
        [ASC | DESC]
[HAVING 群组后条件]                   /*HAVING子句*/
[ORDER BY 列名|表达式｜列编号 ]        /*ORDER BY子句*/
        [ASC|DESC]
[LIMIT 偏移量 行｜列数 OFFSET 偏移量];  /*LIMIT子句*/
```


### 条件查询(WHERE)

使用 WHERE 进行条件查询

语法

```sql
-- 条件查询
SELECT * FROM 表名 WHERE 条件; 
```
示例
```sql
-- 查询年龄大于21岁的学生（比较运算符）
SELECT name, age FROM students WHERE age > 21;  
```

示例

```sql
-- 查询部门为'Sales'且薪资≥5000的员工（逻辑运算符）
SELECT * FROM employees 
```

示例

```sql
-- 查询分数大于 85 分的学生：
SELECT name, score
FROM students
WHERE score > 85;
```

🔍 返回：小红(92.0)、小华(90.0)、小丽(85.0)（取决于是否包含等于，如果要包含 85，可以 `>=`）

---

### 逻辑查询

🔍 使用逻辑运算符：`AND`、`OR`、`NOT`

示例

```sql
WHERE department = 'Sales' AND salary >= 5000;
```

示例：查询年龄为 18 岁的男生：

```sql
SELECT name, age, gender
FROM students
WHERE age = 18 AND gender = '男';
```

### 范围查询


### 匹配查询

### 检测查询

### 空值查询


### **2. 条件过滤（WHERE）**
```sql
SELECT * FROM employees 
WHERE department = '技术部' AND salary > 8000;
```
- **运算符**：
  - 比较：`=`, `<>`, `>`, `<`, `>=`, `<=`
  - 逻辑：`AND`, `OR`, `NOT`
  - 范围：`BETWEEN`, `IN`
  - 模糊匹配：`LIKE`（`%`匹配任意字符，`_`匹配单个字符）
- **示例**：
  ```sql
  SELECT * FROM products 
  WHERE price BETWEEN 50 AND 100 
     OR product_name LIKE '%手机%';
  ```

---