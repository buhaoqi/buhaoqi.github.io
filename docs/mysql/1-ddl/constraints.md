---
noteId: "8d1536b073e811f0ac7f012540a4f7e6"
tags: []

---

在MySQL中，定义列的约束条件是确保数据完整性和一致性的重要手段。以下是常见约束条件的详细说明及用法示例：

- 实体完整性约束
- 域完整性约束
- 参照完整性约束
- 用户定义完整性约束

## 一、实体完整性约束

### 1. 主键约束 (PRIMARY KEY)

用途： 用于唯一标识表中的每一行记录。

成为主键的必要条件：

- 不允许 NULL 值，必须明确指定。
- 不允许重复值，主键列的值必须在列中唯一，不允许重复。
- 一个表只能有一个主键，但主键可以由多个列组成（称为**复合主键**）。

成为主键的建议条件：

- 简洁性：整数类型存储和索引效率高。
- 稳定性：一旦生成，通常不随用户信息修改而变动。

| user_id | user_name | email           | gender | age  |
| ------- | --------- | --------------- | ------ | ---- |
| 1       | zhangsan  | zhangsan@qq.com | 男     | 17   |
| 2       | lisi      | lisi@qq.com     | 女     | 16   |
| 3       | wangwu    | wangwu@qq.com   | 男     | 17   |


创建单列主键

```sql
CREATE TABLE users (
    user_id INT PRIMARY KEY,  -- 单列主键
    username VARCHAR(50)
);
```

创建复合主键

复合主键即：多个列组合成唯一标识。复合主键由多个列组成，其唯一性体现在 **所有列的组合值** 上，而非单个列的值。例如：

```sql
CREATE TABLE order_details (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id)  -- 复合主键
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
### 3. 自动增长
- **作用**：自动生成唯一递增值，常用于主键。

- **用法**：

  ```sql
  CREATE TABLE users (
      user_id INT PRIMARY KEY AUTO_INCREMENT,  -- 自增主键
      username VARCHAR(50)
  );
  ```

一句话：auto_increment是定义列时的约束条件。

auto_increment表示该字段的值会自动增长。无需再添加数据时，手动添加值。


## 二、域完整性约束

### 1. 非空约束 (NOT NULL)

- **作用**：确保列值不能为NULL。

- **用法**：

  ```sql
  CREATE TABLE users (
      user_id INT PRIMARY KEY,
      username VARCHAR(50) NOT NULL  -- 用户名必填
  );
  ```

### 2. 默认值约束 (DEFAULT)

用途

为列提供默认值，当插入数据未指定值时自动填充。

语法

```sql
CREATE TABLE 表名 (
    列名 数据类型 DEFAULT 默认值,
    ...
);
```

示例

```sql
CREATE TABLE student2 (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL DEFAULT '神秘人',
    gender ENUM('男','女'),
  	age INT DEFAULT 18,
  	the_date DATE DEFAULT '2024-09-01'
);
```

示例

```sql
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- 默认当前时间
);
```
### 3. 检查约束 (CHECK) 

- **作用**：检测列值必须满足指定条件。限制列值的范围或条件。

- 语法

  ```sql
  -- 列级约束（直接写在列定义后）
  CREATE TABLE 表名 (
      列名 数据类型 CHECK (条件),
    
    							CHECK(age >= 7)
    算术运算符: + - * /
    比较运算符：> = < >= <=
      ...
  );
  
  -- 表级约束（写在所有列定义后）
  CREATE TABLE 表名 (
      列1 数据类型,
      列2 数据类型,
      CHECK (条件)
  );
  
  -- 通过 ALTER TABLE 添加约束
  ALTER TABLE 表名
  ADD CONSTRAINT 约束名 CHECK (条件);
  ```

**CHECK检测约束的分类**

```sql
-- 列级检测
列名 数据类型 check(检测条件表达式)

-- 表级检测
定义列，
定义列,
check(检测条件表达式)
```
## 三、参照完整性约束

### 1.外键约束 (FOREIGN KEY)

**外键是什么**

- 键是一个字段。
- 外键就是外部的字段。

你创建一个字段，然后让这个字段引用外部表中的字段，这就是外键。

**外键的用途**

外键用于建立表之间的关联关系。 一旦创建了外键，你就关联了两个表中的数据。

当主表记录更新或删除时，子表记录可以自动同步变更。这就是“级联操作”。

父表：外表，被引用的表。

子表：本表

**语法**: 创建外键
```sql
CREATE TABLE 子表 (
    列名1 数据类型 PRIMARY KEY,
    列名2 数据类型,
    外键列名 数据类型,
    FOREIGN KEY (外键列名)     -- 指定本表（子表）的外键字段
        REFERENCES 外表名(外表列名)  -- 父表列必须是主键或唯一索引
        [ON 规则]        -- 定义处理规则 
);
```

- FOREIGN KEY  指定本表的外键字段
- REFERENCES  外键关联的父表和字段 父表列必须是主键或唯一索引
- ON: 定义级联操作规则（当父表数据被删除或更新时，子表数据如何变化）

语法：

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
### 2.候选键

基本概念

候选键(Candidate Key)是关系数据库中能够唯一标识表中每一行记录的一个或一组列。候选键具有以下特性：

- **唯一性**：不能有两条记录在候选键上具有相同的值
- **最小性**：候选键不能包含多余的列(即去掉任何一列都会破坏唯一性)
- **非空性**：候选键的列不能包含NULL值(但MySQL中允许NULL值，这是特殊情况)

候选键与主键的关系

- 一个表可以有多个候选键
- 从候选键中选择一个作为**主键**(Primary Key)
- 未被选为主键的其他候选键称为**替代键**(Alternate Key)

**使用UNIQUE约束创建候选键**

```sql
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE,  -- 候选键
    phone VARCHAR(20) UNIQUE,   -- 候选键
    name VARCHAR(50)
);
```

**复合候选键**

```sql
CREATE TABLE course_registrations (
    student_id INT,
    course_id INT,
    semester VARCHAR(10),
    PRIMARY KEY (student_id, course_id, semester),
    UNIQUE (student_id, course_id)  -- 候选键
);
```

**候选键的实际应用场景**

1. **用户表**：除了主键ID外，用户名、邮箱、手机号都可作为候选键
2. **订单表**：订单号(主键)和支付流水号(候选键)
3. **学生表**：学号(主键)和身份证号(候选键)

**候选键与索引的关系**

- MySQL会自动为候选键创建唯一索引
- 这些索引可以加速查询性能
- 可以通过`SHOW INDEX FROM 表名`查看候选键对应的索引

**候选键的修改**

**添加候选键**

```sql
ALTER TABLE students ADD UNIQUE (email);
```

**删除候选键**

```sql
ALTER TABLE students DROP INDEX email;
```

**注意事项**

1. 候选键允许NULL值(除非显式指定NOT NULL)
2. 候选键和主键一样，都会自动创建唯一索引
3. 过多的候选键会影响插入和更新性能
4. 在设计时应仔细考虑哪些列组合适合作为候选键

**候选键与业务逻辑**

候选键的选择应基于业务需求：
- 自然键：如身份证号、ISBN号等自然存在的唯一标识
- 代理键：如自增ID等人工创建的唯一标识
- 组合键：多个列组合形成的唯一标识

正确选择候选键可以提高数据完整性和查询效率。

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















