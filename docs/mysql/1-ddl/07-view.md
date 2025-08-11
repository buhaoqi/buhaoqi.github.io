---
noteId: "034d8150482b11f0a6929b02b627d898"
tags: []

---
## 一、视图（View）是什么？


视图是一个 ​​保存起来的 SELECT 查询语句​。

理解：

- 一个“保存的查询”
- 是一种**虚拟表
- 不存储实际数据
- 查询视图时动态执行该 SQL
- 基于 **SELECT 查询语句** 动态生成的结果集
- 基于一个或多个实际表的 SQL 查询结果定义的“逻辑表”

---

## 二、为什么要用视图？

视图的核心价值：

| 场景 | 说明 |
|------|------|
| ✅ **简化复杂查询** | 将多表 JOIN、复杂条件筛选封装成一个视图，查询时只需 `SELECT * FROM 视图名` |
| ✅ **数据安全与权限控制** | 只暴露部分字段或行给用户，隐藏敏感数据（如只展示用户姓名，不展示手机号） |
| ✅ **逻辑抽象与复用** | 多个业务模块共用某份查询逻辑时，用视图统一管理，避免重复编写 SQL |
| ✅ **逻辑隔离** | 上层查询不关心底层表结构如何变化，只要视图接口不变 |

---

## 三、案例：“用户订单汇总视图”

### 场景描述

假设你有一个电商数据库，包含如下两张核心表：

用户表 `users`

| 字段名 | 类型 | 说明 |
|--------|------|------|
| id | INT | 用户ID（主键） |
| name | VARCHAR(50) | 用户姓名 |
| email | VARCHAR(100) | 用户邮箱 |

订单表 `orders`

| 字段名 | 类型 | 说明 |
|--------|------|------|
| id | INT | 订单ID（主键） |
| user_id | INT | 用户ID（外键，关联 users.id） |
| amount | DECIMAL(10,2) | 订单金额 |
| order_date | DATETIME | 下单时间 |

---

### 业务需求

> **运营人员想要查看每个用户的姓名、邮箱以及他们的总订单金额和订单数量，但不想了解底层表结构和复杂的 JOIN 写法。**

---

### 解决方案

创建一个视图，封装这个复杂查询。

步骤 1：建表 

```sql
-- 用户表
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100)
);

-- 订单表
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    amount DECIMAL(10, 2),
    order_date DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

步骤2：插入测试数据

```sql
-- 插入用户
INSERT INTO users (name, email) VALUES
('张三', 'zhangsan@example.com'),
('李四', 'lisi@example.com'),
('王五', 'wangwu@example.com');

-- 插入订单
INSERT INTO orders (user_id, amount, order_date) VALUES
(1, 100.00, '2024-01-01 10:00:00'),
(1, 200.00, '2024-01-02 11:00:00'),
(2, 150.00, '2024-01-03 09:00:00'),
(3, 300.00, '2024-01-04 14:00:00'),
(3, 50.00, '2024-01-05 16:00:00');
```

---

步骤3：创建视图 —— 用户订单汇总

我们希望提供一个简化查询：**每个用户的姓名、邮箱、总订单金额、订单数量**

```sql
CREATE VIEW user_order_summary AS
SELECT 
    u.id AS user_id,
    u.name,
    u.email,
    SUM(o.amount) AS total_amount,
    COUNT(o.id) AS order_count
FROM 
    users u
LEFT JOIN 
    orders o ON u.id = o.user_id
GROUP BY 
    u.id, u.name, u.email;
```

> ✅ 说明：
> 
> - 这个视图 `user_order_summary` 是一个 **虚拟表**
> - 它封装了 `users` 和 `orders` 的 **JOIN + 聚合查询（SUM / COUNT）**
> - 查询该视图时，就像查普通表一样简单！

---

步骤4：查询视图 —— 像查表一样简单！

你不需要再写复杂的 JOIN 和 GROUP BY，直接查询视图：

```sql
SELECT * FROM user_order_summary;
```

🧾 **结果示例：**

| user_id | name | email               | total_amount | order_count |
|---------|------|---------------------|--------------|-------------|
| 1       | 张三 | zhangsan@example.com| 300.00       | 2           |
| 2       | 李四 | lisi@example.com    | 150.00       | 1           |
| 3       | 王五 | wangwu@example.com  | 350.00       | 2           |

> ✅ 说明：
> 
> - 视图返回了每个用户的订单汇总信息
> - 数据是**实时查询的**（不是缓存），如果底层 `users` 或 `orders` 表数据变化，视图查询结果也会同步更新

---

## 四、MySQL 视图的基本用法

### 创建视图语法：
```sql
CREATE [OR REPLACE] [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}]
VIEW 视图名 [(列名1, 列名2, ...)]
AS
    SELECT 查询语句
[WITH [CASCADED | LOCAL] CHECK OPTION];
```

### 参数说明：
- `OR REPLACE`：如果视图已存在，则替换它（避免先 DROP 再 CREATE）
- `ALGORITHM`：指定视图的处理方式（一般用默认的 `UNDEFINED` 即可）
- `列名1, 列名2...`：为视图中的列指定别名（可选）
- AS的作用：​​定义视图时，指定该视图所基于的查询语句​​。这里的 AS是 ​​MySQL 语法的一部分​​，用于分隔 ​​视图名称​​ 和 ​​视图的查询定义​​，它表示：“接下来我要定义这个视图的内容了，具体逻辑由后面的 SELECT 语句给出”
- `WITH CHECK OPTION`：限制通过视图插入/更新的数据必须满足视图查询条件（有 LOCAL 和 CASCADED 两种）

---

示例 1：创建一个简单视图

假设有一个员工表 `employees`：

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2)
);
```

现在创建一个只查看 **IT部门员工姓名和工资** 的视图：

```sql
CREATE VIEW it_employees AS
SELECT name, salary
FROM employees
WHERE department = 'IT';
```

之后你可以像查询普通表一样查询这个视图：

```sql
SELECT * FROM it_employees;
```

---

示例 2：创建带列别名的视图

```sql
CREATE VIEW emp_info (员工姓名, 所属部门, 薪资) AS
SELECT name, department, salary
FROM employees;
```

查询时字段名将显示为中文：

```sql
SELECT * FROM emp_info;
```

---

示例 3：创建多表连接的视图

假设有部门表 `departments`：

```sql
CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50)
);
```

创建一个显示员工及其所在部门的视图：

```sql
CREATE VIEW emp_with_dept AS
SELECT e.id, e.name, e.salary, d.dept_name
FROM employees e
JOIN departments d ON e.department = d.dept_name;
```

---

### 查看数据库中所有视图：

```sql
SHOW FULL TABLES IN 数据库名 WHERE TABLE_TYPE = 'VIEW';
```

或者查看所有表时筛选出视图类型：

```sql
SHOW TABLES WHERE Table_type = 'VIEW';
```

### 查看视图的定义（创建语句）：

```sql
SHOW CREATE VIEW 视图名;
```

示例：
```sql
SHOW CREATE VIEW it_employees;
```

这将显示该视图是基于哪个 SELECT 语句创建的。

---

### 使用（查询）视图

视图的使用与普通表**完全一样**，你可以：

- 使用 `SELECT` 查询
- 可以进行过滤、排序等操作

```sql
-- 查询IT部门员工视图
SELECT * FROM it_employees;

-- 带条件查询
SELECT * FROM it_employees WHERE salary > 10000;

-- 排序
SELECT * FROM emp_info ORDER BY 薪资 DESC;
```

---

### 修改视图（ALTER VIEW）

MySQL 允许你修改已有视图的定义，语法如下：

```sql
ALTER VIEW 视图名 [(列名列表)]
AS
    SELECT 新的查询语句
[WITH [CASCADED | LOCAL] CHECK OPTION];
```

示例：修改 it_employees 视图，增加部门字段

```sql
ALTER VIEW it_employees AS
SELECT name, salary, department
FROM employees
WHERE department = 'IT';
```

> ⚠️ 注意：修改视图本质上就是**删除旧视图，再创建新视图**，只是用 ALTER VIEW 语法更简洁

---

### 删除视图（DROP VIEW）

删除不再需要的视图：

```sql
DROP VIEW [IF EXISTS] 视图名1 [, 视图名2, ...];
```

示例：

```sql
DROP VIEW it_employees;

-- 安全写法（如果视图不存在也不报错）
DROP VIEW IF EXISTS it_employees;
```


### 查看所有视图

```sql
SHOW FULL TABLES IN your_database_name WHERE TABLE_TYPE = 'VIEW';
```

或者查看创建语句：

```sql
SHOW CREATE VIEW user_order_summary;
```

---

### 删除视图

```sql
DROP VIEW IF EXISTS user_order_summary;
```

---

## 五、MySQL 视图的核心要点：

| 项目 | 说明 |
|------|------|
| **定义** | 视图是基于 SELECT 查询的虚拟表，不存储实际数据 |
| **用途** | 简化查询、提高安全性、抽象逻辑、增强重用性 |
| **创建** | 使用 `CREATE VIEW 视图名 AS SELECT ...` |
| **使用** | 和普通表一样用 `SELECT` 查询 |
| **修改** | 使用 `ALTER VIEW` 修改视图定义 |
| **删除** | 使用 `DROP VIEW` 删除视图 |
| **查看** | 使用 `SHOW CREATE VIEW` 查看视图定义 |
| **更新限制** | 视图是否可更新取决于其 SELECT 语句的复杂度 |
| **检查选项** | 可使用 `WITH CHECK OPTION` 限制通过视图修改的数据范围 |

---

## 六、视图的核心特点总结 ✅

| 特点 | 说明 |
|------|------|
| 🎭 **虚拟表，不存储数据** | 视图本身不保存数据，只是保存了一个 SELECT 查询语句 |
| 🔍 **查询时动态计算** | 每次查询视图时，MySQL 会实时执行其定义的 SQL，从原表获取最新数据 |
| 🧩 **简化复杂查询** | 把多表 JOIN、聚合、筛选等复杂逻辑封装起来，对外提供简单接口 |
| 🔐 **提高安全性** | 可只暴露部分字段，隐藏敏感列（如用户手机号、密码等） |
| 🔄 **逻辑复用** | 多个业务模块可共用同一个视图，避免重复编写相同 SQL |
| ✅ **支持增删改？** | 一般视图是只读的，但某些简单视图（单表、无聚合、无分组）允许通过视图修改原表数据（不推荐） |

---

## 七、适用场景总结

| 场景 | 是否推荐用视图 | 说明 |
|------|----------------|------|
| 多表 JOIN 查询，希望简化 SQL | ✅ 推荐 | 如订单+用户、商品+分类等关联查询 |
| 需要定期统计报表，如销售汇总、用户行为 | ✅ 推荐 | 封装统计逻辑，供报表系统直接查询 |
| 想限制某些用户只能访问部分字段 | ✅ 推荐 | 如只展示姓名和邮箱，不展示手机号、地址 |
| 希望统一数据逻辑，避免多处写重复 SQL | ✅ 推荐 | 如多个模块都要查“活跃用户”定义 |
| 需要高性能读写或复杂事务操作 | ❌ 不推荐用视图 | 视图一般只读，复杂视图也不支持更新 |

---

## 八、视图与表的区别总结

| 对比项 | 视图（View） | 表（Table） |
|--------|-------------|-------------|
| 是否存储数据 | ❌ 不存储实际数据 | ✅ 存储实际数据 |
| 是否物理存在 | ❌ 是虚拟的 | ✅ 是物理存在的 |
| 是否占用存储空间 | ❌ 不占用 | ✅ 占用磁盘空间 |
| 是否可更新* | ⚠️ 取决于定义（有些可更新，有些不可） | ✅ 可增删改查 |
| 是否可简化查询 | ✅ 是，常用于封装复杂查询 | ❌ 否 |
| 是否可做权限控制 | ✅ 是，可限制访问部分数据 | ❌ 不具备该特性 |

> \* 视图是否可更新（增删改）取决于其定义的 SELECT 语句是否满足一定条件（如不使用聚合、DISTINCT、GROUP BY、子查询等复杂结构）

---

## 九、总结：MySQL 视图用法速查

| 操作 | SQL 语法 | 说明 |
|------|----------|------|
| **创建视图** | `CREATE VIEW 视图名 AS SELECT ...` | 定义一个虚拟表，保存查询逻辑 |
| **查询视图** | `SELECT * FROM 视图名` | 像查普通表一样查询视图 |
| **查看视图定义** | `SHOW CREATE VIEW 视图名` | 查看视图是如何定义的 |
| **删除视图** | `DROP VIEW IF EXISTS 视图名` | 删除不再使用的视图 |
| **特点** | 虚拟表、动态查询、简化 SQL、提高安全性 | 不存储数据，每次查询实时计算 |

---

## 一句话总结

> 我们通过创建一个名为 `user_order_summary` 的 **视图**，把用户表和订单表的复杂关联查询（JOIN + 聚合）封装起来，让运营人员只需执行简单的 `SELECT * FROM user_order_summary`，就能获取每个用户的订单汇总信息，既安全又高效！

---

如你希望：

- ✅ 使用 **多个表 + 更复杂的筛选逻辑** 创建视图
- ✅ 实现 **带参数的视图（通过函数或存储过程模拟）**
- ✅ 或者了解 **视图与存储过程、触发器的结合使用**


