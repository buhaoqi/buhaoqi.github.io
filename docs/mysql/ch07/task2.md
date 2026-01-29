---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务二 连接查询  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务二 连接查询  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 2  # 侧边栏中排在第1位
---

你想掌握 MySQL 中连接查询的基本用法，首先明确核心概念：**连接查询是将两个或多个表通过「共同关联字段」（如主外键、相同含义的字段）拼接在一起，获取整合后的数据集**，解决单表数据无法满足查询需求的问题（比如要同时查看员工姓名和其所属部门名称，数据分别在员工表和部门表中）。

MySQL 中常用的连接查询分为「内连接」「外连接」「交叉连接」，其中**内连接和左外连接是实际开发中最常用的**，下面我会从「前置准备（创建关联表+填充数据）」开始，按「从简单到复杂」的顺序讲解每种连接的语法和实操，新手可直接复制 SQL 运行验证。

---

## 一、前置准备：创建两张关联表并填充数据
为了方便演示，我们创建两张经典关联表（部门表 `dept` + 员工表 `emp`），`emp` 表的 `dept_id` 关联 `dept` 表的 `dept_id`（主外键关联），先执行以下 SQL 完成表创建和数据填充：

### 1. 创建部门表（`dept`，主表）
```sql
CREATE TABLE dept (
    dept_id INT PRIMARY KEY AUTO_INCREMENT COMMENT '部门唯一ID',
    dept_name VARCHAR(30) NOT NULL COMMENT '部门名称',
    dept_addr VARCHAR(50) DEFAULT '未填写' COMMENT '部门地址'
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COMMENT '公司部门表';
```

### 2. 创建员工表（`emp`，从表）
```sql
CREATE TABLE emp (
    emp_id INT PRIMARY KEY AUTO_INCREMENT COMMENT '员工唯一ID',
    emp_name VARCHAR(20) NOT NULL COMMENT '员工姓名',
    dept_id INT COMMENT '所属部门ID（关联dept表的dept_id）',
    salary DECIMAL(10, 2) NOT NULL COMMENT '月薪',
    hire_date DATE NOT NULL COMMENT '入职日期',
    -- 外键关联：确保dept_id对应dept表中存在的部门ID（可选，仅用于数据完整性，不影响连接查询）
    CONSTRAINT fk_emp_dept FOREIGN KEY (dept_id) REFERENCES dept(dept_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COMMENT '公司员工表';
```

### 3. 填充测试数据
```sql
-- 给部门表插入数据（4个部门）
INSERT INTO dept (dept_name, dept_addr)
VALUES
('技术部', '北京'),
('市场部', '上海'),
('人事部', '广州'),
('财务部', '深圳');

-- 给员工表插入数据（8个员工，注意：① 部分员工关联部门 ② 1个员工无部门（dept_id=NULL） ③ 1个部门无员工（财务部））
INSERT INTO emp (emp_name, dept_id, salary, hire_date)
VALUES
('张三', 1, 20000.00, '2020-01-15'),
('李四', 1, 18000.00, '2020-03-20'),
('王五', 2, 15000.00, '2021-05-10'),
('赵六', 2, 12000.00, '2021-07-08'),
('钱七', 3, 10000.00, '2022-02-25'),
('孙八', 3, 12000.00, '2022-09-30'),
('周九', NULL, 8000.00, '2023-01-05'),  -- 无所属部门
('吴十', 5, 25000.00, '2019-08-01');  -- 关联不存在的部门（dept_id=5，用于演示连接效果）
```

插入完成后，可执行 `SELECT * FROM dept;` 和 `SELECT * FROM emp;` 查看表数据，明确两张表的关联关系和数据差异。

---

## 二、核心连接查询讲解（从常用到少见）
### 1. 内连接（`INNER JOIN`）：最常用，取「两张表都有匹配数据」的记录
#### 核心解释
内连接是默认的连接方式，只返回**两张表中满足「关联条件」的共同记录**（即「交集」），不匹配的记录（如无部门的员工、无员工的部门）会被过滤掉。

#### 语法格式（两种写法，推荐第一种 SQL 标准写法，可读性更高）
```sql
-- 写法1：SQL 标准写法（推荐，清晰区分连接条件和筛选条件）
SELECT 字段列表
FROM 表1
INNER JOIN 表2
ON 表1.关联字段 = 表2.关联字段  -- 核心：连接条件（两张表的关联关系）
[WHERE 筛选条件];  -- 可选：连接后的额外筛选

-- 写法2：老式逗号分隔写法（不推荐，连接条件和筛选条件混淆在WHERE中）
SELECT 字段列表
FROM 表1, 表2
WHERE 表1.关联字段 = 表2.关联字段 [AND 筛选条件];
```

#### 实操示例：查询「有所属部门」的员工信息（姓名、薪资、部门名称、部门地址）
```sql
SELECT
    e.emp_id AS '员工ID',
    e.emp_name AS '员工姓名',
    e.salary AS '月薪',
    d.dept_name AS '部门名称',
    d.dept_addr AS '部门地址'
FROM emp e  -- 给表起别名（e=emp，d=dept），简化SQL
INNER JOIN dept d
ON e.dept_id = d.dept_id;  -- 连接条件：员工表的dept_id = 部门表的dept_id
```

#### 预期结果与关键解析
- 结果共 6 条记录（张三、李四、王五、赵六、钱七、孙八），**无部门的员工（周九）、无员工的部门（财务部）、关联不存在部门的员工（吴十）均被过滤**；
- 表别名的使用：给表起简短别名（`emp e`、`dept d`），后续字段可通过「别名.字段名」引用，简化 SQL 长度；
- `INNER` 关键字可省略，直接写 `JOIN`，效果相同（`JOIN` 默认为内连接）。

---

### 2. 左外连接（`LEFT JOIN` / `LEFT OUTER JOIN`）：保留「左表所有记录」，右表匹配不到补 `NULL`
#### 核心解释
左外连接以「左表（`FROM` 后的第一张表）」为基准，**保留左表的所有记录**，然后与右表进行匹配：
- 右表有匹配数据：返回正常拼接结果；
- 右表无匹配数据：右表字段补 `NULL`。

#### 语法格式
```sql
SELECT 字段列表
FROM 左表  -- 基准表，所有记录都会保留
LEFT JOIN 右表
ON 左表.关联字段 = 右表.关联字段
[WHERE 筛选条件];
```

#### 实操示例：查询「所有员工」的信息（包括无部门的员工），关联对应的部门名称
```sql
SELECT
    e.emp_id AS '员工ID',
    e.emp_name AS '员工姓名',
    e.salary AS '月薪',
    d.dept_name AS '部门名称',  -- 无匹配部门时，该字段为NULL
    d.dept_addr AS '部门地址'   -- 无匹配部门时，该字段为NULL
FROM emp e  -- 左表：emp（保留所有员工记录）
LEFT JOIN dept d  -- 右表：dept（仅匹配有对应dept_id的记录）
ON e.dept_id = d.dept_id;
```

#### 预期结果与关键解析
- 结果共 8 条记录（包含所有员工），其中「周九」（`dept_id=NULL`）、「吴十」（`dept_id=5`，部门表无该记录）的「部门名称」和「部门地址」为 `NULL`；
- 核心区别于内连接：左外连接不会过滤左表的任何记录，这是满足「查询所有左表数据并关联右表」需求的关键；
- `OUTER` 关键字可省略，直接写 `LEFT JOIN`，效果相同。

---

### 3. 右外连接（`RIGHT JOIN` / `RIGHT OUTER JOIN`）：保留「右表所有记录」，左表匹配不到补 `NULL`
#### 核心解释
右外连接以「右表（`RIGHT JOIN` 后的表）」为基准，**保留右表的所有记录**，然后与左表进行匹配，逻辑与左外连接相反：
- 左表有匹配数据：返回正常拼接结果；
- 左表无匹配数据：左表字段补 `NULL`。

#### 语法格式
```sql
SELECT 字段列表
FROM 左表
RIGHT JOIN 右表  -- 基准表，所有记录都会保留
ON 左表.关联字段 = 右表.关联字段
[WHERE 筛选条件];
```

#### 实操示例：查询「所有部门」的信息（包括无员工的财务部），关联对应的员工姓名
```sql
SELECT
    d.dept_id AS '部门ID',
    d.dept_name AS '部门名称',
    e.emp_name AS '员工姓名',  -- 无匹配员工时，该字段为NULL
    e.salary AS '员工月薪'     -- 无匹配员工时，该字段为NULL
FROM emp e  -- 左表：emp
RIGHT JOIN dept d  -- 右表：dept（保留所有部门记录，基准表）
ON e.dept_id = d.dept_id;
```

#### 预期结果与关键解析
- 结果共 7 条记录（4 个部门 + 对应员工），其中「财务部」（无员工）的「员工姓名」和「员工月薪」为 `NULL`；
- 右外连接可转换为左外连接：只需交换两张表的位置，将 `RIGHT JOIN` 改为 `LEFT JOIN`，效果完全一致（比如上面的示例可改为 `dept d LEFT JOIN emp e`），因此实际开发中**左外连接使用更多，右外连接几乎可被左外连接替代**；
- `OUTER` 关键字可省略，直接写 `RIGHT JOIN`，效果相同。

---

### 4. 交叉连接（`CROSS JOIN`）：笛卡尔积，了解即可（极少使用）
#### 核心解释
交叉连接是将两张表的数据进行「笛卡尔积拼接」，即**左表的每一条记录都与右表的每一条记录拼接**，结果集行数 = 左表行数 × 右表行数，无明确的关联条件（通常无实际业务意义，仅用于特殊场景）。

#### 语法格式
```sql
-- 写法1：显式交叉连接
SELECT 字段列表
FROM 表1
CROSS JOIN 表2;

-- 写法2：隐式交叉连接（逗号分隔，无WHERE条件）
SELECT 字段列表
FROM 表1, 表2;
```

#### 示例效果
```sql
-- 交叉连接 emp 和 dept，结果行数 = 8（emp）× 4（dept）= 32 条
SELECT * FROM emp CROSS JOIN dept;
```

#### 关键解析
- 交叉连接无实际业务价值，因为会产生大量冗余数据；
- 若给交叉连接添加 `WHERE` 关联条件，会等价于内连接（`INNER JOIN`）。

---

### 5. 全外连接（`FULL JOIN`）：MySQL 不直接支持（补充说明）
#### 核心解释
全外连接会保留「两张表的所有记录」，匹配到的正常拼接，匹配不到的另一侧补 `NULL`（即「左外连接 + 右外连接」的并集）。

#### 注意事项
- MySQL **不直接支持 `FULL JOIN`**，若需实现该效果，可通过「左外连接 `UNION` 右外连接」实现：
  ```sql
  -- 实现全外连接：保留所有员工和所有部门的记录
  (SELECT e.*, d.* FROM emp e LEFT JOIN dept d ON e.dept_id = d.dept_id)
  UNION
  (SELECT e.*, d.* FROM emp e RIGHT JOIN dept d ON e.dept_id = d.dept_id);
  ```
- `UNION` 会自动去重，若需保留重复记录，可使用 `UNION ALL`（效率更高）。

---

## 三、新手关键注意事项（避坑指南）
1.  **关联字段的要求**：关联字段通常是「主外键」或「含义相同的字段」，**字段数据类型必须一致**（比如都是 `INT`），否则会导致连接效率低下或匹配失败；
2.  **`ON` 与 `WHERE` 的区别**：
    - `ON`：**连接时的匹配条件**，仅用于筛选两张表拼接时的关联记录，不影响基准表的记录保留（比如左外连接中，`ON` 不会过滤左表记录）；
    - `WHERE`：**连接后的筛选条件**，在拼接完成后对结果集进行过滤，会删除不满足条件的记录；
3.  **表别名的优势**：复杂连接查询中，给表起简短别名（如 `emp e`、`dept d`）可大幅简化 SQL，提升可读性和维护性；
4.  **优先使用内连接和左外连接**：实际开发中，90% 的场景可通过这两种连接满足，右外连接可转换为左外连接，全外连接极少使用。

---

## 四、总结
1.  连接查询的核心是「通过关联字段拼接多表数据」，解决单表数据不足的问题；
2.  常用连接优先级：`INNER JOIN`（内连接，取交集）> `LEFT JOIN`（左外连接，保留左表所有记录）> `RIGHT JOIN`（右外连接，可被左外替代）；
3.  核心语法要点：
    - 内连接：`FROM 表1 JOIN 表2 ON 关联条件`；
    - 左外连接：`FROM 左表 LEFT JOIN 右表 ON 关联条件`；
    - 右外连接：`FROM 左表 RIGHT JOIN 右表 ON 关联条件`；
4.  关键区别：内连接过滤不匹配记录，外连接保留某一侧表的所有记录，匹配不到补 `NULL`。

掌握以上内容，你即可应对 MySQL 中绝大多数的多表查询场景，后续只需根据实际业务需求选择对应的连接方式即可。