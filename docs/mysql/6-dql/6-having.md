---
noteId: "6f29f14075dc11f08787c9dafe86ffae"
tags: []

---

# MySQL 中 DQL 的 HAVING 子句详解

在 MySQL 中，**DQL（Data Query Language，数据查询语言）** 是用于**查询和检索数据**的核心语言，而 **`HAVING` 子句** 是 DQL 中一个非常重要但常被误解的子句，主要用于**对分组后的数据进行筛选**。

---

## 一、什么是 DQL 和 HAVING 子句？

### 🔍 DQL（Data Query Language）：数据查询语言

DQL 是 SQL 的四大子语言之一（其他为 DML、DDL、DCL），它专注于**从数据库中查询数据**，不修改数据。其最常见的形式是：

```sql
SELECT ... FROM ...
```

当我们需要对数据进行**分组统计（GROUP BY）后，再筛选符合条件的组**时，就要用到：

```sql
HAVING ...
```

---

### 🎯 HAVING 子句的作用

> **`HAVING` 子句用于对 `GROUP BY` 分组后的结果集进行条件过滤，只保留满足条件的分组。**

简单来说：

- **WHERE 是对原始数据行进行过滤**
- **HAVING 是对分组后的统计结果（即“组”）进行过滤**

---

## 二、HAVING 子句的基本语法

```sql
SELECT 
    column1, 
    aggregate_function(column2)
FROM 
    table_name
GROUP BY 
    column1
HAVING 
    group_condition
[ORDER BY ...]
[LIMIT ...];
```

> ✅ 说明：
> - `GROUP BY column1`：将数据按某个字段分组
> - `HAVING group_condition`：只保留那些**分组后满足特定条件**的组
> - 通常与聚合函数（如 `COUNT()`, `SUM()`, `AVG()` 等）一起使用

---

## 三、HAVING 子句的核心功能与用法详解

---

### 1️⃣ 基础用法：配合 GROUP BY 过滤分组结果

#### 🎯 场景：
统计每个部门的员工人数，并**只显示员工数超过 5 人的部门**

---

#### ✅ 示例表：employees

| id | name   | department | salary |
|----|--------|------------|--------|
| 1  | 张三   | IT         | 8000   |
| 2  | 李四   | IT         | 9000   |
| 3  | 王五   | HR         | 7000   |
| 4  | 赵六   | IT         | 8500   |
| 5  | 钱七   | HR         | 7500   |
| 6  | 孙八   | Sales      | 6000   |
| ...（假设有多个部门，部分部门员工数超过5人）... |

---

#### ✅ 示例 SQL：查询员工数 > 5 的部门

```sql
SELECT 
    department, 
    COUNT(*) AS employee_count
FROM 
    employees
GROUP BY 
    department
HAVING 
    COUNT(*) > 5;
```

> 🧾 结果：只返回那些员工数量超过 5 的部门及其人数

> ✅ 说明：
> - `GROUP BY department`：按部门分组
> - `COUNT(*)`：统计每个部门的员工人数
> - `HAVING COUNT(*) > 5`：只保留员工数大于 5 的组

---

### 2️⃣ HAVING 与聚合函数一起使用（必知！）

`HAVING` 子句通常与以下聚合函数配合使用：

| 函数 | 说明 | 示例 |
|------|------|------|
| `COUNT()` | 统计行数 | `COUNT(*)`, `COUNT(department)` |
| `SUM()` | 求和 | `SUM(salary)` |
| `AVG()` | 平均值 | `AVG(price)` |
| `MAX()` | 最大值 | `MAX(age)` |
| `MIN()` | 最小值 | `MIN(score)` |

#### ✅ 示例：查询平均工资超过 8000 的部门

```sql
SELECT 
    department, 
    AVG(salary) AS avg_salary
FROM 
    employees
GROUP BY 
    department
HAVING 
    AVG(salary) > 8000;
```

> ✅ 说明：找出那些**部门平均工资高于 8000** 的组

---

### 3️⃣ HAVING vs WHERE：核心区别

| 对比项 | WHERE | HAVING |
|--------|-------|--------|
| **作用对象** | 原始数据行（查询结果中的每一行） | 分组后的统计结果（即“组”） |
| **使用时机** | 在 `GROUP BY` 之前执行 | 在 `GROUP BY` 之后执行 |
| **能否过滤聚合函数结果** | ❌ 不能，比如 `WHERE COUNT(*) > 5` 是错误的 | ✅ 可以，比如 `HAVING COUNT(*) > 5` |
| **常用搭配** | 常与字段条件使用，如 `WHERE age > 18` | 常与聚合函数一起使用，如 `HAVING SUM(amount) > 1000` |

#### ❌ 错误示例：
```sql
SELECT department, COUNT(*)
FROM employees
WHERE COUNT(*) > 5  -- 错误！WHERE 不能使用聚合函数
GROUP BY department;
```

#### ✅ 正确写法：
```sql
SELECT department, COUNT(*)
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;  -- 正确！对分组后的结果进行过滤
```

---

### 4️⃣ HAVING 与普通字段条件

> ⚠️ 注意：**HAVING 也可以使用普通字段，但前提是该字段必须出现在 SELECT 中，且通常没有实际意义，一般推荐只用于聚合条件。**

不过在某些数据库中，HAVING 可以使用 SELECT 中的别名或字段，但不如 WHERE 高效和规范。

#### ✅ 示例（不推荐，仅作了解）：
```sql
SELECT department, COUNT(*) AS emp_count
FROM employees
GROUP BY department
HAVING emp_count > 3;
```

> ✅ 这里 `emp_count` 是 `COUNT(*)` 的别名，某些 MySQL 版本允许在 HAVING 中使用

但更推荐直接使用聚合函数本身：

```sql
HAVING COUNT(*) > 3;
```

---

## 四、HAVING 子句的常见使用场景

| 场景 | 说明 | 示例 |
|------|------|------|
| **筛选分组后的数量** | 如部门人数 > 5、订单数 > 10 | `HAVING COUNT(*) > 5` |
| **筛选聚合计算结果** | 如平均工资 > 8000、总销售额 > 10000 | `HAVING AVG(salary) > 8000` |
| **结合 GROUP BY 使用** | 几乎总是与 GROUP BY 一起出现 | `GROUP BY department HAVING ...` |
| **报表统计过滤** | 只显示满足条件的统计分组，如热销分类、高价值客户等 | `HAVING SUM(amount) > 5000` |

---

## 五、HAVING 子句的注意事项

| 注意事项 | 说明 |
|---------|------|
| **通常与 GROUP BY 搭配使用** | 单独使用 HAVING 没有意义，除非你用了某些特殊聚合（但极少） |
| **不能替代 WHERE** | WHERE 是对原始行过滤，HAVING 是对分组后统计结果过滤 |
| **可以使用聚合函数** | 如 `HAVING COUNT(*) > 3`, `HAVING SUM(price) > 1000` |
| **可以使用 SELECT 中的别名（部分支持）** | 如 `HAVING emp_count > 5`（但建议直接用 `COUNT(*) > 5` 更规范） |
| **执行顺序：WHERE → GROUP BY → HAVING → ORDER BY → LIMIT** | 理解执行顺序有助于写出高效 SQL |

---

## ✅ 总结：HAVING 子句核心要点速查

| 功能 | 说明 | 示例 |
|------|------|------|
| **分组后筛选** | 对 `GROUP BY` 分组结果进行条件过滤 | `HAVING COUNT(*) > 5` |
| **配合聚合函数** | 常与 `COUNT()`, `SUM()`, `AVG()` 等一起使用 | `HAVING AVG(salary) > 8000` |
| **与 WHERE 的区别** | WHERE 过滤原始行，HAVING 过滤分组后的组 | WHERE 不能用聚合函数，HAVING 可以 |
| **常见使用场景** | 统计部门人数、订单总额、用户行为分组分析等 | 查询“热销商品分类”、“高薪部门”等 |
| **执行顺序** | 在 `GROUP BY` 之后、`ORDER BY` / `LIMIT` 之前执行 | WHERE → GROUP BY → HAVING → ORDER BY |

---

## 📌 下一步建议

你可以继续尝试以下练习来巩固 `HAVING` 子句的使用：

1. ✅ 查询每个部门的员工人数，并筛选出人数超过 3 的部门
2. ✅ 统计每个分类下的商品总销量，只显示总销量超过 100 的分类
3. ✅ 查询平均订单金额大于 100 的客户
4. ✅ 结合 `GROUP BY` 和 `HAVING` 做多条件筛选（如部门 + 职位）
5. ✅ 在报表查询中，使用 HAVING 实现“只显示有意义的统计分组”

---

如你希望获取：

- ✅ 带有 **实际建表 + 数据 + HAVING 查询示例** 的完整实战
- ✅ 如何在 **数据看板、BI 报表、运营分析** 中使用 HAVING 进行分组筛选
- ✅ 或者 HAVING 与 **子查询、窗口函数、JOIN** 等高级功能结合的用法

欢迎继续提问！我可以为你提供详细的 SQL 示例与解释。