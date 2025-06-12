---
noteId: "7d85f7902e6d11f0b12143716a9ddc9b"
tags: []

---

# 数据备份

## 如何导出数据库

导出数据库，可以使用MySQL官方提供的数据库备份工具：mysqldump.exe

第一步：打开C盘，进入`mysqldump.exe`文件所在的bin目录：

```sql
"C:\Program Files\MySQL\MySQL Server 8.4\bin"
```

第二步：按住Shift键，在bin目录下的空白处单击右键选择“在此处打开命令行窗口”

第三步：输入备份数据库的语句

```sql
-- 语法
mysqldump -u 用户名 -p 数据库名 > 目标路径
-- 示例
mysqldump -u root -p student_db > D:\student_db_copy.sql
```

注意：执行备份语句后，需要输入密码

## 如何导入数据库

第一步：创建数据库

```sql
-- 语法
CREATE DATABASE 数据库名; 
-- 示例
CREATE DATABASE student_db;
```

第二步：声明使用数据库

```sql
-- 语法
USE 数据库名;
-- 示例
use student_db;
```

第三步：导入外部备份数据库文件

```sql
-- 语法
source 导入文件.sql;
--示例
source C:\Users\zjson\student_db_copy.sql
```


==============5道join练习题==========
以下是 5 道针对 MySQL `JOIN` 关键字的强化练习题，涵盖 `INNER JOIN`、`LEFT JOIN`、自连接（Self Join）等核心用法，附带详细的表结构、示例数据和参考答案，帮助你深入掌握多表查询技能。

---

### **练习题 1：INNER JOIN 基础应用**
#### **表结构与数据**
```sql
-- 学生表
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    name VARCHAR(50)
);
INSERT INTO students VALUES 
(1, '张三'), (2, '李四'), (3, '王五');

-- 选课表
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);
INSERT INTO enrollments VALUES 
(1, 101), (1, 102), (2, 101), (3, 103);
```

#### **题目**  
查询所有选了课程的学生姓名及其课程ID（即排除未选课的学生）。  

#### **参考答案**  
```sql
SELECT s.name, e.course_id
FROM students s
INNER JOIN enrollments e 
    ON s.student_id = e.student_id;
```

---

### **练习题 2：LEFT JOIN 处理未匹配数据**
#### **表结构与数据**
```sql
-- 客户表
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(50)
);
INSERT INTO customers VALUES 
(1, '客户A'), (2, '客户B'), (3, '客户C');

-- 订单表
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    amount DECIMAL(10,2),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
INSERT INTO orders VALUES 
(101, 1, 200.00), (102, 1, 150.00), (103, 3, 300.00);
```

#### **题目**  
查询所有客户及其订单金额，包括没有订单的客户（订单金额显示为 `NULL`）。  

#### **参考答案**  
```sql
SELECT c.name, o.amount
FROM customers c
LEFT JOIN orders o 
    ON c.customer_id = o.customer_id;
```

---

### **练习题 3：多表 JOIN 与聚合函数**
#### **表结构与数据**
```sql
-- 部门表
CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    name VARCHAR(50)
);
INSERT INTO departments VALUES 
(1, '技术部'), (2, '市场部');

-- 员工表
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(50),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);
INSERT INTO employees VALUES 
(101, '张三', 1), (102, '李四', 1), (103, '王五', 2);

-- 项目表
CREATE TABLE projects (
    project_id INT PRIMARY KEY,
    project_name VARCHAR(50),
    leader_id INT,
    FOREIGN KEY (leader_id) REFERENCES employees(emp_id)
);
INSERT INTO projects VALUES 
(201, '项目A', 101), (202, '项目B', 103);
```

#### **题目**  
查询每个部门的名称及其参与的项目数量（没有项目的部门显示为0）。  

#### **参考答案**  
```sql
SELECT d.name, COUNT(p.project_id) AS 项目数量
FROM departments d
LEFT JOIN employees e 
    ON d.department_id = e.department_id
LEFT JOIN projects p 
    ON e.emp_id = p.leader_id
GROUP BY d.department_id;
```

---

### **练习题 4：自连接（SELF JOIN）**
#### **表结构与数据**
```sql
-- 员工表（含经理ID）
CREATE TABLE staff (
    emp_id INT PRIMARY KEY,
    name VARCHAR(50),
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES staff(emp_id)
);
INSERT INTO staff VALUES 
(1, '张三', NULL), 
(2, '李四', 1), 
(3, '王五', 1), 
(4, '赵六', 2);
```

#### **题目**  
查询每个员工及其直接经理的姓名（无经理的员工显示为 `NULL`）。  

#### **参考答案**  
```sql
SELECT e.name AS 员工姓名, m.name AS 经理姓名
FROM staff e
LEFT JOIN staff m 
    ON e.manager_id = m.emp_id;
```

---

### **练习题 5：JOIN 结合子查询**
#### **表结构与数据**
```sql
-- 商品表
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    name VARCHAR(50),
    price DECIMAL(10,2)
);
INSERT INTO products VALUES 
(1, '手机', 2000.00), 
(2, '笔记本', 5000.00), 
(3, '耳机', 300.00);

-- 订单表
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    product_id INT,
    quantity INT,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);
INSERT INTO orders VALUES 
(101, 1, 2), (102, 2, 1), (103, 1, 3), (104, 3, 5);
```

#### **题目**  
查询总销售额（`price * quantity`）超过平均销售额的商品名称及其总销售额。  

#### **参考答案**  
```sql
SELECT p.name, SUM(p.price * o.quantity) AS 总销售额
FROM products p
INNER JOIN orders o 
    ON p.product_id = o.product_id
GROUP BY p.product_id
HAVING 总销售额 > (
    SELECT AVG(p.price * o.quantity) 
    FROM products p
    INNER JOIN orders o 
        ON p.product_id = o.product_id
);
```

---

### **练习提示**
1. **建表与插入数据**：先执行提供的 SQL 语句创建表并插入示例数据。  
2. **逐题验证**：按顺序完成每个题目，对比参考答案调试结果。  
3. **扩展思考**：  
   - 如何修改查询以显示销售额排名？  
   - 如果某个 JOIN 条件错误，结果会如何变化？  

通过这些练习，你将掌握 `JOIN` 的核心用法，为复杂查询打下坚实基础！ 🚀

============5道多表查询题=========
以下是 5 道适合初学者的 MySQL 多表查询强化练习题，涵盖 `JOIN`、子查询、聚合函数等核心操作，附带参考答案和示例数据：

---

### **练习题 1：学生选课系统**
#### **表结构**  
1. **学生表（students）**  
   - `student_id`（学号，主键）  
   - `name`（姓名）  
2. **课程表（courses）**  
   - `course_id`（课程号，主键）  
   - `title`（课程名称）  
3. **选课表（enrollments）**  
   - `student_id`（学号，外键）  
   - `course_id`（课程号，外键）  

#### **题目**  
查询所有选修了“数据库原理”课程的学生姓名及课程名称。  

#### **参考答案**  
```sql
SELECT s.name AS 学生姓名, c.title AS 课程名称
FROM enrollments e
INNER JOIN students s ON e.student_id = s.student_id
INNER JOIN courses c ON e.course_id = c.course_id
WHERE c.title = '数据库原理';
```

---

### **练习题 2：订单管理系统**
#### **表结构**  
1. **客户表（customers）**  
   - `customer_id`（客户ID，主键）  
   - `name`（客户名称）  
2. **订单表（orders）**  
   - `order_id`（订单ID，主键）  
   - `customer_id`（客户ID，外键）  
   - `order_date`（下单日期）  

#### **题目**  
查询所有客户及其订单数量（包括没有订单的客户）。  

#### **参考答案**  
```sql
SELECT c.name AS 客户名称, COUNT(o.order_id) AS 订单数量
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id;
```

---

### **练习题 3：图书借阅系统**
#### **表结构**  
1. **图书表（books）**  
   - `book_id`（图书ID，主键）  
   - `title`（书名）  
2. **借阅记录表（borrows）**  
   - `borrow_id`（借阅ID，主键）  
   - `book_id`（图书ID，外键）  
   - `borrow_date`（借阅日期）  

#### **题目**  
查询从未被借阅过的图书名称。  

#### **参考答案**  
```sql
SELECT b.title AS 未借阅图书
FROM books b
LEFT JOIN borrows br ON b.book_id = br.book_id
WHERE br.borrow_id IS NULL;
```

---

### **练习题 4：员工-部门系统**
#### **表结构**  
1. **员工表（employees）**  
   - `emp_id`（员工ID，主键）  
   - `name`（员工姓名）  
   - `department_id`（部门ID，外键）  
2. **部门表（departments）**  
   - `department_id`（部门ID，主键）  
   - `name`（部门名称）  

#### **题目**  
查询每个部门的员工数量，并按数量降序排列。  

#### **参考答案**  
```sql
SELECT d.name AS 部门名称, COUNT(e.emp_id) AS 员工数量
FROM departments d
LEFT JOIN employees e ON d.department_id = e.department_id
GROUP BY d.department_id
ORDER BY 员工数量 DESC;
```

---

### **练习题 5：商品-订单系统**
#### **表结构**  
1. **商品表（products）**  
   - `product_id`（商品ID，主键）  
   - `name`（商品名称）  
   - `price`（单价）  
2. **订单明细表（order_items）**  
   - `order_id`（订单ID，主键）  
   - `product_id`（商品ID，外键）  
   - `quantity`（购买数量）  

#### **题目**  
查询总销售额（单价 × 数量）超过 5000 的商品名称及总销售额。  

#### **参考答案**  
```sql
SELECT p.name AS 商品名称, SUM(p.price * oi.quantity) AS 总销售额
FROM products p
INNER JOIN order_items oi ON p.product_id = oi.product_id
GROUP BY p.product_id
HAVING 总销售额 > 5000;
```

---

### **练习提示**  
1. **建表与插入示例数据**（可自行扩展）：  
   ```sql
   -- 示例：创建学生表并插入数据
   CREATE TABLE students (
       student_id INT PRIMARY KEY,
       name VARCHAR(50)
   );
   INSERT INTO students VALUES (1, '张三'), (2, '李四');

   -- 创建课程表并插入数据
   CREATE TABLE courses (
       course_id INT PRIMARY KEY,
       title VARCHAR(50)
   );
   INSERT INTO courses VALUES (101, '数据库原理'), (102, '数据结构');

   -- 创建选课表并插入数据
   CREATE TABLE enrollments (
       student_id INT,
       course_id INT,
       FOREIGN KEY (student_id) REFERENCES students(student_id),
       FOREIGN KEY (course_id) REFERENCES courses(course_id)
   );
   INSERT INTO enrollments VALUES (1, 101), (2, 101), (1, 102);
   ```

2. **调试技巧**：  
   - 使用 `EXPLAIN` 分析查询执行计划。  
   - 逐步验证子查询或连接条件是否正确。  

通过完成这些练习，可以掌握多表查询的核心技能！ 🚀

==========5道foreign key的练习题=========

以下是 5道针对MySQL外键（Foreign Key）的专项练习题，由浅入深，帮助你掌握外键的核心用法：

---

**练习1：创建带外键关联的表**
场景：设计两个表：  
• `departments` 表（部门表）：  

  • `dept_id` INT PRIMARY KEY（部门ID）  

  • `dept_name` VARCHAR(50)（部门名称）  

• `employees` 表（员工表）：  

  • `emp_id` INT PRIMARY KEY（员工ID）  

  • `emp_name` VARCHAR(50)（员工姓名）  

  • `dept_id` INT（部门ID，关联到`departments`表的`dept_id`）


要求：  
1. 创建`departments`表。  
2. 创建`employees`表，并为`dept_id`字段添加外键约束，引用`departments`表的`dept_id`。  
3. 插入一条部门数据（如`dept_id=1, dept_name='HR'`）。  
4. 插入一条员工数据（如`emp_id=101, emp_name='Alice', dept_id=1`），验证是否成功。  
5. 尝试插入一个`dept_id=999`（不存在于`departments`表）的员工数据，观察报错信息。


**练习1答案：创建带外键的表**

```sql
-- 1. 创建部门表
CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50)
);

-- 2. 创建员工表（含外键）
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);

-- 3. 插入部门数据
INSERT INTO departments (dept_id, dept_name) VALUES (1, 'HR');

-- 4. 插入合法员工数据（成功）
INSERT INTO employees (emp_id, emp_name, dept_id) VALUES (101, 'Alice', 1);

-- 5. 尝试插入非法员工数据（报错）
INSERT INTO employees (emp_id, emp_name, dept_id) VALUES (102, 'Bob', 999);
-- 错误信息：Cannot add or update a child row: a foreign key constraint fails
```

---
---

**练习2：外键约束的级联删除（ON DELETE CASCADE）**
场景：在练习1的基础上修改外键约束。  

要求：  
1. 删除原有的`employees`表，重新创建它，并设置外键约束的删除行为：当`departments`表中的部门被删除时，自动删除`employees`表中属于该部门的员工。  
   ```sql
   CREATE TABLE employees (
       emp_id INT PRIMARY KEY,
       emp_name VARCHAR(50),
       dept_id INT,
       FOREIGN KEY (dept_id) 
           REFERENCES departments(dept_id)
           ON DELETE CASCADE
   );
   ```
2. 插入测试数据（如部门1和部门2，以及对应的员工）。  
3. 执行`DELETE FROM departments WHERE dept_id=1;`  
4. 检查`employees`表中`dept_id=1`的员工是否被自动删除。


**练习2答案：级联删除（ON DELETE CASCADE）**

```sql
-- 1. 删除原employees表（若存在）
DROP TABLE IF EXISTS employees;

-- 2. 重新创建带级联删除的employees表
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    dept_id INT,
    FOREIGN KEY (dept_id) 
        REFERENCES departments(dept_id)
        ON DELETE CASCADE
);

-- 3. 插入测试数据
INSERT INTO departments (dept_id, dept_name) VALUES (1, 'HR'), (2, 'IT');
INSERT INTO employees (emp_id, emp_name, dept_id) 
VALUES (101, 'Alice', 1), (102, 'Bob', 2);

-- 4. 删除部门1
DELETE FROM departments WHERE dept_id = 1;

-- 5. 验证员工数据
SELECT * FROM employees;  -- dept_id=1的员工已被自动删除
```

---

**练习3：外键约束的更新行为（ON UPDATE SET NULL）**
要求：  
1. 修改`employees`表的外键约束，使得当`departments`表中的`dept_id`被更新时，`employees`表中对应的`dept_id`自动设置为`NULL`。  
   ```sql
   -- 先删除原外键约束（假设约束名为`fk_dept`）
   ALTER TABLE employees DROP FOREIGN KEY fk_dept;

   -- 重新添加外键约束
   ALTER TABLE employees
   ADD CONSTRAINT fk_dept
   FOREIGN KEY (dept_id) 
       REFERENCES departments(dept_id)
       ON UPDATE SET NULL;
   ```
2. 更新`departments`表中的某个`dept_id`（例如将`dept_id=1`改为`100`）。  
3. 检查`employees`表中原`dept_id=1`的员工的`dept_id`是否变为`NULL`。


**练习3答案：更新行为（ON UPDATE SET NULL）**

```sql
-- 1. 删除原外键约束（需先获取约束名）
ALTER TABLE employees DROP FOREIGN KEY employees_ibfk_1;

-- 2. 添加新外键约束（允许更新时置为NULL）
ALTER TABLE employees
ADD CONSTRAINT fk_dept
FOREIGN KEY (dept_id) 
    REFERENCES departments(dept_id)
    ON UPDATE SET NULL;

-- 3. 更新部门ID
UPDATE departments SET dept_id = 100 WHERE dept_id = 1;

-- 4. 验证员工数据
SELECT * FROM employees;  -- 原dept_id=1的员工dept_id变为NULL
```

---
---

**练习4：查询外键关联的数据**
要求：  
1. 使用`INNER JOIN`查询所有员工及其所属部门的名称。  
   ```sql
   SELECT e.emp_name, d.dept_name
   FROM employees e
   INNER JOIN departments d ON e.dept_id = d.dept_id;
   ```
2. 使用`LEFT JOIN`查询所有部门及其员工（即使部门没有员工也显示）。  
3. 统计每个部门的员工数量（提示：`COUNT()` + `GROUP BY`）。

**练习4答案：查询外键关联数据**

```sql
-- 1. 内连接查询员工及所属部门
SELECT e.emp_name, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.dept_id;

-- 2. 左连接查询所有部门（含无员工的部门）
SELECT d.dept_name, e.emp_name
FROM departments d
LEFT JOIN employees e ON d.dept_id = e.dept_id;

-- 3. 统计每个部门的员工数量
SELECT d.dept_name, COUNT(e.emp_id) AS employee_count
FROM departments d
LEFT JOIN employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_id;
```

---

---

**练习5：外键约束的禁用与启用**
要求：  
1. 临时禁用外键约束检查（例如在批量导入数据时）：  
   ```sql
   SET FOREIGN_KEY_CHECKS = 0;
   ```
2. 尝试插入一个`dept_id=999`（不存在于`departments`表）的员工数据，验证是否成功。  
3. 重新启用外键约束检查：  
   ```sql
   SET FOREIGN_KEY_CHECKS = 1;
   ```
4. 尝试再次插入非法数据，观察是否报错。

---

**验证与总结**  
1. 每个练习完成后，通过`SHOW CREATE TABLE employees;`查看外键定义。  
2. 使用`SELECT * FROM information_schema.TABLE_CONSTRAINTS;`查看所有约束。  
3. 思考：外键约束如何保证数据完整性？级联操作在实际业务中的使用场景是什么？  

通过这5道题，你将掌握外键的创建、约束行为（CASCADE/SET NULL）以及实际查询技巧！


以下是 5道外键练习题的详细答案与操作步骤：

---




---





**练习5答案：禁用与启用外键约束**

```sql
-- 1. 禁用外键检查
SET FOREIGN_KEY_CHECKS = 0;

-- 2. 插入非法数据（成功）
INSERT INTO employees (emp_id, emp_name, dept_id) 
VALUES (103, 'Charlie', 999);

-- 3. 启用外键检查
SET FOREIGN_KEY_CHECKS = 1;

-- 4. 再次尝试插入非法数据（报错）
INSERT INTO employees (emp_id, emp_name, dept_id) 
VALUES (104, 'David', 999);
-- 错误信息：Foreign key constraint fails
```

---

**验证工具**
1. 查看表结构：  
   ```sql
   SHOW CREATE TABLE employees;
   ```
2. 查看所有约束：  
   ```sql
   SELECT * FROM information_schema.TABLE_CONSTRAINTS
   WHERE TABLE_SCHEMA = 'your_database_name';
   ```

通过以上练习，你已掌握外键的核心操作！ 🚀

==================结束==============