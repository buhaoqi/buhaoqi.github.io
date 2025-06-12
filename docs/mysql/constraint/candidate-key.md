---
noteId: "07e4e9f0321511f088738f916b56a5b6"
tags: []

---

---

### **MySQL 候选键详解**

候选键（Candidate Key）是数据库设计中用于唯一标识表中每一条记录的字段或字段组合。每个表至少有一个候选键，主键（Primary Key）是从候选键中选择的一个，其余候选键则通过唯一约束（UNIQUE）实现。以下是候选键的核心要点及操作指南：

---

### **一、候选键的核心特性**

| **特性**                | **说明**                                                                 |
|-------------------------|-------------------------------------------------------------------------|
| **唯一性**              | 候选键的值必须唯一标识每行记录，不允许重复。                              |
| **最小性**              | 候选键的字段组合不可再缩减（即无冗余字段）。                              |
| **可选性**              | 表中可能有多个候选键，但只能选择一个作为主键。                            |
| **允许NULL值**          | 候选键字段可为NULL，但需注意唯一性约束（多个NULL可能被允许，取决于数据库实现）。 |
| **实现方式**            | 通过 `UNIQUE` 约束或唯一索引实现。                                        |

---

### **二、候选键与主键的区别**

| **对比项**       | **候选键**                               | **主键**                                   |
|------------------|-----------------------------------------|-------------------------------------------|
| **数量**         | 一个表可以有多个候选键。                 | 一个表只能有一个主键。                     |
| **NULL值**       | 可以包含NULL（具体取决于约束定义）。      | 不允许NULL值。                             |
| **索引类型**     | 唯一索引（非聚簇）。                     | 聚簇索引（InnoDB引擎）。                   |
| **用途**         | 提供备用唯一标识方式。                   | 作为行的唯一标识，用于外键引用。            |

---

### **三、候选键的实现方式**

#### **1. 单字段候选键**
```sql
CREATE TABLE students (
    student_id INT PRIMARY KEY,          -- 主键
    id_card VARCHAR(20) UNIQUE,          -- 候选键（通过UNIQUE约束）
    name VARCHAR(50)
);
```

#### **2. 多字段组合候选键**
```sql
CREATE TABLE order_details (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id),  -- 复合主键
    UNIQUE (order_id, product_id)        -- 显式定义候选键（实际与主键重复，此处仅为示例）
);
```

---

### **四、候选键的操作与管理**

#### **1. 添加候选键**
```sql
-- 添加单字段候选键
ALTER TABLE students ADD UNIQUE (email);

-- 添加复合候选键
ALTER TABLE employees ADD UNIQUE (first_name, last_name);
```

#### **2. 删除候选键**
```sql
-- 通过删除唯一索引实现
ALTER TABLE students DROP INDEX id_card;
```

#### **3. 查看候选键**
```sql
SHOW INDEX FROM students;
```

---

### **五、候选键的典型应用场景**

#### **1. 备用唯一标识**
- **场景**：用户表中，手机号或邮箱均可唯一标识用户。
- **实现**：
  ```sql
  CREATE TABLE users (
      user_id INT PRIMARY KEY,
      phone VARCHAR(15) UNIQUE,
      email VARCHAR(50) UNIQUE
  );
  ```

#### **2. 防止数据重复**
- **场景**：订单明细中，同一订单的同一产品不可重复。
- **实现**：
  ```sql
  CREATE TABLE order_items (
      order_id INT,
      product_id INT,
      quantity INT,
      UNIQUE (order_id, product_id)
  );
  ```

#### **3. 外键引用候选键**
- **场景**：其他表需引用候选键作为外键。
- **实现**：
  ```sql
  CREATE TABLE departments (
      dept_code VARCHAR(10) PRIMARY KEY,
      dept_name VARCHAR(50) UNIQUE
  );

  CREATE TABLE employees (
      emp_id INT PRIMARY KEY,
      dept_name VARCHAR(50),
      FOREIGN KEY (dept_name) REFERENCES departments(dept_name)
  );
  ```

---

### **六、候选键的注意事项**

#### **1. NULL值的处理**
- MySQL 中，唯一约束允许字段为NULL，且多个NULL值不视为重复。
- **示例**：
  ```sql
  INSERT INTO students (id_card) VALUES (NULL); -- 允许
  INSERT INTO students (id_card) VALUES (NULL); -- 允许
  ```

#### **2. 性能影响**
- 候选键的唯一索引可加速查询，但会增加插入、更新时的开销。
- **建议**：避免在频繁写入的宽表上定义过多候选键。

#### **3. 外键引用限制**
- MySQL 要求外键必须引用父表的主键或唯一索引（即候选键）。
- **错误示例**：
  ```sql
  -- 若 departments.dept_name 无唯一约束，外键将失败
  ALTER TABLE employees ADD FOREIGN KEY (dept_name) REFERENCES departments(dept_name);
  ```

---

### **七、候选键与数据规范化**

#### **1. 第一范式（1NF）**
- 候选键确保每行数据唯一，消除重复组，支持原子性。

#### **2. 第二范式（2NF）**
- 复合候选键需确保所有非键字段完全依赖于整个候选键，而非部分字段。

#### **3. 第三范式（3NF）**
- 候选键应避免传递依赖，非键字段间不应相互依赖。

---

### **八、实战示例**

#### **场景：图书馆管理系统**
```sql
-- 书籍表（ISBN为主键，书名+作者为候选键）
CREATE TABLE books (
    isbn VARCHAR(13) PRIMARY KEY,
    title VARCHAR(100),
    author VARCHAR(50),
    UNIQUE (title, author)
);

-- 借阅记录表（复合候选键：读者ID+书籍ISBN+借阅日期）
CREATE TABLE borrow_records (
    reader_id INT,
    book_isbn VARCHAR(13),
    borrow_date DATE,
    PRIMARY KEY (reader_id, book_isbn),
    UNIQUE (reader_id, book_isbn, borrow_date),
    FOREIGN KEY (book_isbn) REFERENCES books(isbn)
);
```

---

### **总结**
候选键是数据库设计中维护数据唯一性和完整性的关键工具。通过合理定义候选键，可提升查询效率、防止数据冗余，并为复杂业务逻辑提供支持。实际应用中需结合业务需求，权衡性能与约束强度，选择最优的候选键策略。


以下通过具体示例说明 MySQL 中候选键的用法，涵盖单字段候选键、复合候选键以及候选键与外键的联动场景：

---

### **示例 1：用户表（单字段候选键）**
#### **场景**  
用户表需要保证 `手机号` 和 `邮箱` 的唯一性，但仅选择 `用户ID` 作为主键。
```sql
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,  -- 主键（候选键之一）
    phone VARCHAR(15) UNIQUE,               -- 候选键（唯一约束）
    email VARCHAR(50) UNIQUE,               -- 候选键（唯一约束）
    name VARCHAR(50)
);
```

#### **操作验证**  
```sql
-- 正确插入
INSERT INTO users (phone, email, name) 
VALUES ('13800138000', 'alice@example.com', 'Alice');

-- 错误插入（手机号重复）
INSERT INTO users (phone, email, name) 
VALUES ('13800138000', 'bob@example.com', 'Bob'); 
-- 报错：Duplicate entry '13800138000' for key 'phone'

-- 错误插入（邮箱重复）
INSERT INTO users (phone, email, name) 
VALUES ('13800138001', 'alice@example.com', 'Bob');
-- 报错：Duplicate entry 'alice@example.com' for key 'email'
```

---

### **示例 2：订单商品表（复合候选键）**
#### **场景**  
同一订单中同一商品只能出现一次，但订单号和商品ID组合需唯一。
```sql
CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id),  -- 复合主键（候选键）
    UNIQUE (order_id, product_id)        -- 显式候选键（实际与主键重复，此处仅为演示）
);
```

#### **操作验证**  
```sql
-- 正确插入
INSERT INTO order_items VALUES (1001, 501, 2);

-- 错误插入（重复订单+商品）
INSERT INTO order_items VALUES (1001, 501, 3);
-- 报错：Duplicate entry '1001-501' for key 'PRIMARY'
```

---

### **示例 3：学生选课系统（候选键与外键联动）**
#### **场景**  
学生选课时，需确保学生和课程的存在性，且同一学生同一课程只能选一次。
```sql
-- 父表：课程表（候选键为课程编号和课程名）
CREATE TABLE courses (
    course_code VARCHAR(10) PRIMARY KEY,  -- 主键
    course_name VARCHAR(50) UNIQUE        -- 候选键
);

-- 子表：选课记录表
CREATE TABLE enrollments (
    student_id INT,
    course_code VARCHAR(10),
    enroll_date DATE,
    PRIMARY KEY (student_id, course_code),
    FOREIGN KEY (course_code) REFERENCES courses(course_code)
);
```

#### **操作验证**  
```sql
-- 插入课程
INSERT INTO courses VALUES ('MATH101', '高等数学');

-- 正确选课
INSERT INTO enrollments VALUES (2001, 'MATH101', '2023-09-01');

-- 错误选课（重复选课）
INSERT INTO enrollments VALUES (2001, 'MATH101', '2023-09-02');
-- 报错：Duplicate entry '2001-MATH101' for key 'PRIMARY'

-- 错误选课（课程不存在）
INSERT INTO enrollments VALUES (2001, 'PHYS101', '2023-09-01');
-- 报错：Cannot add or update a child row: a foreign key constraint fails
```

---

### **示例 4：图书管理系统（候选键允许NULL）**
#### **场景**  
国际书号（ISBN）和图书标题+作者均可唯一标识图书，但允许部分字段为NULL。
```sql
CREATE TABLE books (
    isbn VARCHAR(13) PRIMARY KEY,        -- 主键
    title VARCHAR(100),
    author VARCHAR(50),
    UNIQUE (title, author)               -- 候选键（允许NULL）
);
```

#### **操作验证**  
```sql
-- 正确插入（完整信息）
INSERT INTO books VALUES ('9787111636664', '数据库系统概念', 'Abraham Silberschatz');

-- 正确插入（允许title或author为NULL）
INSERT INTO books (isbn, title) VALUES ('9787115461473', 'MySQL技术内幕');

-- 错误插入（重复标题+作者组合）
INSERT INTO books VALUES ('9787111630000', '数据库系统概念', 'Abraham Silberschatz');
-- 报错：Duplicate entry '数据库系统概念-Abraham Silberschatz' for key 'title'
```

---

### **示例 5：员工部门管理（候选键引用）**
#### **场景**  
部门表通过 `部门编号` 和 `部门名称` 两种候选键被其他表引用。
```sql
-- 部门表
CREATE TABLE departments (
    dept_id INT PRIMARY KEY,            -- 主键
    dept_name VARCHAR(50) UNIQUE        -- 候选键
);

-- 员工表（通过候选键 dept_name 关联）
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    dept_name VARCHAR(50),
    FOREIGN KEY (dept_name) REFERENCES departments(dept_name)
);
```

#### **操作验证**  
```sql
-- 插入部门
INSERT INTO departments VALUES (1, '技术部');

-- 正确插入员工
INSERT INTO employees VALUES (101, '张三', '技术部');

-- 错误插入（部门不存在）
INSERT INTO employees VALUES (102, '李四', '销售部');
-- 报错：Cannot add or update a child row: a foreign key constraint fails
```

---

### **总结**
通过以上示例可以看出候选键的核心用法：
1. **唯一性保障**：通过 `UNIQUE` 约束防止重复数据。
2. **业务多样性**：提供多种唯一标识方式（如手机号、邮箱、组合字段）。
3. **外键支持**：候选键可作为外键的引用目标。
4. **灵活性与约束平衡**：允许部分字段为 `NULL`，但需注意业务逻辑的合理性。