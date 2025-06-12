---
noteId: "ee247f00334311f0b8091965526edeaf"
tags: []

---

### MySQL 多表查询详解（初学者版）

---

#### 一、什么是多表查询？
当数据分散在多个表中时，通过 **关联字段（如主键、外键）** 将这些表连接起来，一次性查询出多个表中的数据。例如：
- **员工表**（`employees`）：存储员工姓名、部门ID。
- **部门表**（`departments`）：存储部门ID、部门名称。
- 通过 `部门ID` 将两个表关联，查询员工姓名和对应的部门名称。

---

#### 二、多表查询的核心方法
MySQL 多表查询主要有以下方式：

| 方法                | 说明                                                                 | 常用场景                   |
|---------------------|----------------------------------------------------------------------|----------------------------|
| **隐式连接**         | 用 `WHERE` 指定关联条件（不推荐，可读性差）                          | 简单查询                   |
| **显式连接（JOIN）** | 用 `JOIN` 关键字明确关联逻辑（推荐，清晰易维护）                     | 复杂关联                   |
| **子查询**           | 将一个查询结果作为另一个查询的条件或数据源                           | 分步处理数据               |

---

### 三、隐式连接（WHERE 关联）
通过 `WHERE` 直接指定关联条件，表名写在 `FROM` 后，用逗号分隔。

**示例**：查询员工姓名和所属部门名称：

```sql
SELECT e.name, d.department_name
FROM employees e, departments d
WHERE e.department_id = d.id;
```

**注意**：如果忘记写 `WHERE` 条件，会返回笛卡尔积（两表所有行组合），导致数据爆炸！

---

### 四、显式连接（JOIN）
使用 `JOIN` 关键字明确关联逻辑，更安全、可读性更强。

#### 1. **内连接（INNER JOIN）**
- **作用**：只返回两个表中 **匹配的行**。
- **语法**：
  
```sql
SELECT 列名
FROM 表1
INNER JOIN 表2 ON 关联条件;
```

**示例**：查询有部门的员工信息：

```sql
SELECT e.name, d.department_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.id;
```

---

#### 2. **左连接（LEFT JOIN）**
- **作用**：返回左表所有行，右表无匹配时填充 `NULL`。
- **语法**：
 
```sql
SELECT 列名
FROM 表1
LEFT JOIN 表2 ON 关联条件;
```

**示例**：查询所有员工信息（包括未分配部门的员工）：

```sql
SELECT e.name, d.department_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.id;
```

**结果示例**：
| name   | department_name |
|--------|-----------------|
| 张三   | 技术部          |
| 李四   | NULL            |  -- 李四未分配部门

---

#### 3. **右连接（RIGHT JOIN）**
- **作用**：返回右表所有行，左表无匹配时填充 `NULL`。
- **语法**：

```sql
SELECT 列名
FROM 表1
RIGHT JOIN 表2 ON 关联条件;
```

**示例**：查询所有部门信息（包括无员工的部门）：

```sql
SELECT d.department_name, e.name
FROM employees e
RIGHT JOIN departments d ON e.department_id = d.id;
```

**结果示例**：
| department_name | name   |
|-----------------|--------|
| 技术部          | 张三   |
| 市场部          | NULL   |  -- 市场部暂无员工

---

#### 4. **全外连接（FULL OUTER JOIN）**
- **作用**：返回左右表所有行，不匹配时填充 `NULL`。
- **MySQL 不支持**，需用 `LEFT JOIN + RIGHT JOIN + UNION` 模拟：

```sql
SELECT e.name, d.department_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.id
UNION
SELECT e.name, d.department_name
FROM employees e
RIGHT JOIN departments d ON e.department_id = d.id;
```

---

#### 5. **交叉连接（CROSS JOIN）**
- **作用**：返回两表的笛卡尔积（所有行组合）。
- **语法**：

```sql
SELECT * FROM 表1 CROSS JOIN 表2;
-- 或
SELECT * FROM 表1, 表2;  -- 隐式写法
```

**示例**：生成员工-部门所有可能的组合：

```sql
SELECT e.name, d.department_name
FROM employees e
CROSS JOIN departments d;
```

---

### 五、多表查询的别名
为表设置别名可以简化查询（尤其在多表时）：

```sql
SELECT e.name, d.department_name
FROM employees AS e  -- AS 可省略
INNER JOIN departments AS d ON e.department_id = d.id;
```

---

### 六、多表查询的常见问题

#### 1. **笛卡尔积（Cartesian Product）**
- **原因**：忘记写关联条件（如 `WHERE` 或 `ON`）。
- **结果**：行数 = 表1行数 × 表2行数（可能极大！）。
- **避免方法**：始终明确关联条件。

#### 2. **字段名冲突**
- **场景**：多表有相同列名（如 `id`）。
- **解决**：用 `表名.列名` 或别名明确指定：

```sql
SELECT e.id AS employee_id, d.id AS department_id
FROM employees e
INNER JOIN departments d ON e.department_id = d.id;
```

---

### 七、多表查询的优化建议
1. **索引优化**：为关联字段（如 `department_id`）添加索引。
2. **减少数据量**：先用 `WHERE` 过滤再连接表。
3. **避免过度连接**：只连接必要的表。

---

### 八、练习场景（自测）
**表结构**：
- `students`（学生表）：`id`, `name`, `class_id`
- `classes`（班级表）：`id`, `class_name`
- `scores`（成绩表）：`student_id`, `course`, `score`

**题目**：
1. 查询所有学生姓名及其班级名称（包括未分班的学生）。
2. 查询每个班级的学生人数（包括无学生的班级）。
3. 查询学生姓名、班级名称及数学成绩（仅显示有成绩的学生）。

---

### 答案示例
1. **左连接**：

```sql
SELECT s.name, c.class_name
FROM students s
LEFT JOIN classes c ON s.class_id = c.id;
```

2. **左连接 + 分组计数**：

```sql
SELECT c.class_name, COUNT(s.id) AS student_count
FROM classes c
LEFT JOIN students s ON c.id = s.class_id
GROUP BY c.class_name;
```

3. **多表内连接**：

```sql
SELECT s.name, c.class_name, sc.score
FROM students s
INNER JOIN classes c ON s.class_id = c.id
INNER JOIN scores sc ON s.id = sc.student_id
WHERE sc.course = '数学';
```

---

### 总结
- **核心方法**：隐式连接（不推荐）、显式连接（推荐使用 `JOIN`）。
- **连接类型**：根据需求选择 `INNER JOIN`、`LEFT JOIN` 等。
- **优化关键**：明确关联条件、使用索引、减少不必要的数据加载。