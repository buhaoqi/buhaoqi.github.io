---
noteId: "37589b00482c11f0a6929b02b627d898"
tags: []

---

# MySQL 中的数据完整性约束详解

数据完整性约束是保证数据库中数据准确性和一致性的重要机制。MySQL 提供了多种完整性约束类型，可分为以下几类：

## 一、实体完整性约束

### 1. 主键约束 (PRIMARY KEY)
- 唯一标识表中的每一行记录
- 特点：
  - 不允许 NULL 值
  - 不允许重复值
  - 一个表只能有一个主键
- 语法：
  ```sql
  CREATE TABLE students (
      id INT PRIMARY KEY,
      name VARCHAR(50)
  );
  
  -- 复合主键
  CREATE TABLE orders (
      order_id INT,
      product_id INT,
      PRIMARY KEY (order_id, product_id)
  );
  ```

### 2. 唯一约束 (UNIQUE)
- 确保某列或列组合的值唯一
- 特点：
  - 允许 NULL 值（但只能有一个 NULL）
  - 一个表可以有多个 UNIQUE 约束
- 语法：
  ```sql
  CREATE TABLE users (
      id INT PRIMARY KEY,
      username VARCHAR(50) UNIQUE,
      email VARCHAR(100) UNIQUE
  );
  ```

## 二、域完整性约束

### 1. 非空约束 (NOT NULL)
- 确保列不能包含 NULL 值
- 语法：
  ```sql
  CREATE TABLE employees (
      id INT PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      hire_date DATE NOT NULL
  );
  ```

### 2. 默认值约束 (DEFAULT)
- 为列指定默认值
- 语法：
  ```sql
  CREATE TABLE products (
      id INT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      price DECIMAL(10,2) DEFAULT 0.00,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

### 3. 检查约束 (CHECK) - MySQL 8.0.16+ 支持
- 限制列值的范围或条件
- 语法：
  ```sql
  CREATE TABLE employees (
      id INT PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      age INT CHECK (age >= 18),
      salary DECIMAL(10,2) CHECK (salary > 0)
  );
  ```

## 三、参照完整性约束

### 外键约束 (FOREIGN KEY)
- 维护表之间的关系
- 特点：
  - 确保引用另一个表的主键或唯一键
  - 可定义级联操作
- 语法：
  ```sql
  CREATE TABLE orders (
      order_id INT PRIMARY KEY,
      customer_id INT,
      order_date DATE,
      FOREIGN KEY (customer_id) REFERENCES customers(id)
  );
  
  -- 带级联操作的外键
  CREATE TABLE order_items (
      item_id INT PRIMARY KEY,
      order_id INT,
      product_id INT,
      FOREIGN KEY (order_id) REFERENCES orders(order_id)
          ON DELETE CASCADE
          ON UPDATE CASCADE
  );
  ```

## 四、用户定义完整性约束

### 1. 触发器 (TRIGGER)
- 在特定数据库事件发生时自动执行
- 语法示例：
  ```sql
  CREATE TRIGGER before_employee_insert
  BEFORE INSERT ON employees
  FOR EACH ROW
  BEGIN
      IF NEW.salary < 0 THEN
          SET NEW.salary = 0;
      END IF;
  END;
  ```

### 2. 存储过程和函数
- 通过编程方式实现复杂约束逻辑

## 五、约束管理操作

### 1. 添加约束
```sql
-- 添加主键
ALTER TABLE students ADD PRIMARY KEY (id);

-- 添加外键
ALTER TABLE orders 
ADD CONSTRAINT fk_customer
FOREIGN KEY (customer_id) REFERENCES customers(id);

-- 添加检查约束
ALTER TABLE employees 
ADD CONSTRAINT chk_age CHECK (age >= 18);
```

### 2. 删除约束
```sql
-- 删除主键
ALTER TABLE students DROP PRIMARY KEY;

-- 删除外键
ALTER TABLE orders DROP FOREIGN KEY fk_customer;

-- 删除检查约束
ALTER TABLE employees DROP CHECK chk_age;
```

## 六、约束验证

### 1. 查看表约束
```sql
-- 查看表结构及约束
SHOW CREATE TABLE employees;

-- 查看外键约束
SELECT * FROM information_schema.TABLE_CONSTRAINTS
WHERE TABLE_NAME = 'orders';
```

### 2. 约束违规处理
- 严格模式 (STRICT MODE)：拒绝违反约束的操作
- 非严格模式：允许某些约束违规，但可能导致数据不一致

## 七、最佳实践建议

1. 为每个表设计合适的主键
2. 合理使用外键维护关系完整性
3. 对关键业务字段添加 NOT NULL 约束
4. MySQL 8.0+ 推荐使用 CHECK 约束
5. 复杂业务规则考虑使用触发器
6. 避免过度约束影响性能

通过合理使用这些完整性约束，可以确保MySQL数据库中的数据准确、一致和可靠。


# MySQL 中的候选键详解

## 1. 候选键的基本概念

候选键(Candidate Key)是关系数据库中能够唯一标识表中每一行记录的一个或一组列。候选键具有以下特性：
- **唯一性**：不能有两条记录在候选键上具有相同的值
- **最小性**：候选键不能包含多余的列(即去掉任何一列都会破坏唯一性)
- **非空性**：候选键的列不能包含NULL值(但MySQL中允许NULL值，这是特殊情况)

## 2. 候选键与主键的关系

- 一个表可以有多个候选键
- 从候选键中选择一个作为**主键**(Primary Key)
- 未被选为主键的其他候选键称为**替代键**(Alternate Key)

## 3. MySQL中实现候选键

### 3.1 使用UNIQUE约束创建候选键

```sql
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE,  -- 候选键
    phone VARCHAR(20) UNIQUE,   -- 候选键
    name VARCHAR(50)
);
```

### 3.2 复合候选键

```sql
CREATE TABLE course_registrations (
    student_id INT,
    course_id INT,
    semester VARCHAR(10),
    PRIMARY KEY (student_id, course_id, semester),
    UNIQUE (student_id, course_id)  -- 候选键
);
```

## 4. 候选键的实际应用场景

1. **用户表**：除了主键ID外，用户名、邮箱、手机号都可作为候选键
2. **订单表**：订单号(主键)和支付流水号(候选键)
3. **学生表**：学号(主键)和身份证号(候选键)

## 5. 候选键与索引的关系

- MySQL会自动为候选键创建唯一索引
- 这些索引可以加速查询性能
- 可以通过`SHOW INDEX FROM 表名`查看候选键对应的索引

## 6. 候选键的修改

### 6.1 添加候选键

```sql
ALTER TABLE students ADD UNIQUE (email);
```

### 6.2 删除候选键

```sql
ALTER TABLE students DROP INDEX email;
```

## 7. 注意事项

1. 候选键允许NULL值(除非显式指定NOT NULL)
2. 候选键和主键一样，都会自动创建唯一索引
3. 过多的候选键会影响插入和更新性能
4. 在设计时应仔细考虑哪些列组合适合作为候选键

## 8. 候选键与业务逻辑

候选键的选择应基于业务需求：
- 自然键：如身份证号、ISBN号等自然存在的唯一标识
- 代理键：如自增ID等人工创建的唯一标识
- 组合键：多个列组合形成的唯一标识

正确选择候选键可以提高数据完整性和查询效率。