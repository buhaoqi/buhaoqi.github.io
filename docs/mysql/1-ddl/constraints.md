---
noteId: "8d1536b073e811f0ac7f012540a4f7e6"
tags: []

---

### 列约束

用途：可选，限制列的取值（如 `NOT NULL`, `AUTO_INCREMENT`）。

| **约束**         | **说明**             | **示例**                                     |
| ---------------- | -------------------- | -------------------------------------------- |
| `PRIMARY KEY`    | 主键（唯一标识行）   | `id INT PRIMARY KEY`                         |
| `AUTO_INCREMENT` | 自增（通常用于主键） | `id INT AUTO_INCREMENT`                      |
| `NOT NULL`       | 禁止为空             | `username VARCHAR(50) NOT NULL`              |
| `UNIQUE`         | 值唯一               | `email VARCHAR(100) UNIQUE`                  |
| `DEFAULT`        | 默认值               | `status INT DEFAULT 1`                       |
| `FOREIGN KEY`    | 外键（关联其他表）   | `FOREIGN KEY (user_id) REFERENCES users(id)` |


- NOT NULL：禁止空值。
- DEFAULT 默认值：设置默认值。
- AUTO_INCREMENT：自增（仅限整数类型）。
- UNIQUE：唯一值约束。
- COMMENT '注释'：列注释。

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    age TINYINT UNSIGNED DEFAULT 18,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 表约束

### PRIMARY KEY

主键约束

```sql
PRIMARY KEY (列1, 列2)（支持复合主键）。
```

### FOREIGN KEY

外键约束：

```sql
FOREIGN KEY (外键列) 
    REFERENCES 父表(父表列)
    [ON DELETE 行为] 
    [ON UPDATE 行为]
```

### 行为选项

- CASCADE
- SET NULL
- RESTRICT（默认）

### 唯一约束：

```sql
UNIQUE (列1, 列2)。
```

### 检查约束：

```sql
CHECK (条件)（MySQL 8.0.16+ 支持强制检查）。

```

## 表选项

| **选项**          | **说明**   | **常用值**                   |
| ----------------- | ---------- | ---------------------------- |
| `ENGINE`          | 存储引擎   | `InnoDB`（推荐）, `MyISAM`   |
| `DEFAULT CHARSET` | 默认字符集 | `utf8mb4`（支持中文和Emoji） |
| `COMMENT`         | 表注释     | `COMMENT='用户表'`           |

### [ENGINE=存储引擎]

- ENGINE=InnoDB（默认）
- ENGINE=MyISAM

### [DEFAULT CHARSET=字符集] 

建议显式指定，避免依赖服务器默认配置：

```SQL
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```


### [COMMENT='表注释'];

```sql
COMMENT='用户表'。
```

### AUTO_INCREMENT

```sql
AUTO_INCREMENT=100（设置自增起始值）
```

### ROW_FORMAT

```sql
ROW_FORMAT=COMPRESSED（行格式）。
```

### 示例

```sql
CREATE TABLE logs (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT
) ENGINE=InnoDB 
  DEFAULT CHARSET=utf8mb4 
  COMMENT='系统日志表'
  AUTO_INCREMENT=1000;
```

---

## 示例

**示例**：

```sql
CREATE TABLE orders (
    order_id INT,
    user_id INT,
    product_id INT,
    -- 表级约束
    PRIMARY KEY (order_id, user_id),  -- 复合主键
    FOREIGN KEY (user_id) REFERENCES users(id),
    UNIQUE (order_id, product_id)
);
```

**完整示例**：

```sql
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='商品表';
```

---

**实际案例：用户表 + 订单表**

```sql
-- 用户表
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 订单表（关联用户表）
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    order_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB;
```

---

## **注意事项**


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

# 外键

**FOREIGN KEY** 和 **REFERENCES**是定义外键的关键词。

---

## 外键是什么

- 键是一个字段。
- 外键就是外部的字段。
- 你创建一个字段，然后让这个字段引用外部表中的字段，这就是外键。

## 外键的用途

**外键用于创建多表之间的关联关系。** 一旦创建了外键，你就关联了两个表中的数据。

当主表记录更新或删除时，子表记录可以自动同步变更。这就是“级联操作”。

- 父表：外表，被引用的表。
- 子表：本表

## 语法:创建外键

```sql
CREATE TABLE 子表 (
    列1 数据类型 PRIMARY KEY,
    列2 数据类型,
    FOREIGN KEY (本表外键列)     -- 指定本表（子表）的外键字段
        REFERENCES 外表(外表列)  -- 父表列必须是主键或唯一索引
        [ON DELETE 行为]        -- 定义父表数据删除时的处理规则 
        [ON UPDATE 行为]        -- 定义父表数据更新时的处理规则
);
```

- `FOREIGN KEY`  指定本表的外键字段
- `REFERENCES`  外键关联的父表和字段 父表列必须是主键或唯一索引
- `ON`: 定义级联操作规则（当父表数据被删除或更新时，子表数据如何变化）




**第一步：创建用户表(users)**

| user_id | user_name |
| ------- | --------- |
| 1       | 张三      |
| 2       | 李四      |
| 3       | 王五      |

要求：

- `user_id`: 整型、主键
- `user_name`: 变长字符串、非空

```sql
-- 父表：用户表
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    user_name VARCHAR(50)
) 
```

- 插入3条测试数据

```sql
insert into users(user_id,user_name) VALUES
(1, '张三'), 
(2, '李四'), 
(3, '王五');
```

**第二步：创建订单表(orders)**

| order_id | order_name | user_id | amount |
| -------- | ---------- | ------- | ------ |
| 1        | 老干妈辣酱 | 2       | 9.9    |
| 2        | 海天黄豆酱 | 3       | 16.8   |
| 3        | 舒肤佳香皂 | 1       | 4.5    |

要求：  

1. `order_id`：整型、主键
2. `order_name`: 变长字符串，最多100字符，非空
3. `user_id`:外键(关联users 表的 user_id） 
4. `amount`: 小数、默认：0


```sql
-- 子表：订单表
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    order_name VARCHAR(100) NOT NULL,
    user_id INT,
    amount DECIMAL(10,2),
    FOREIGN KEY (user_id) 
        REFERENCES users(user_id)
) ENGINE=InnoDB;
```

4. 插入3条测试数据

```sql
insert into orders(order_id,order_name,user_id,amount) VALUES
(101, '老干妈辣酱',1, 9.9), 
(102, '海天黄豆酱',1, 16.8), 
(103,'舒肤佳香皂', 2, 4.5);
```

第三步：查询所有订单及其对应的用户名称

```sql
SELECT 
  e.e_name AS 员工姓名,
  d.d_name AS 部门名称
FROM 
  employees e
JOIN 
  departments d ON e.d_id = d.d_id;
```

查询用户与订单

```sql
select order_name,users.user_name,amount 
from orders 
join users on orders.user_id = users.user_id;

```


## `ON`的级联操作选项

| **行为**        | **描述**                                                     |
| --------------- | ------------------------------------------------------------ |
| **CASCADE**     | 主表记录变更时，子表关联记录同步更新或删除。                 |
| **SET NULL**    | 主表记录变更时，子表外键列设为 `NULL`（需外键列允许 `NULL`）。 |
| **RESTRICT**    | 阻止主表的变更操作（默认行为）。                             |
| **NO ACTION**   | 与 `RESTRICT` 类似，仅在事务提交时检查约束。                 |
| **SET DEFAULT** | 主表记录变更时，子表外键列设为默认值（需列有默认值，MySQL 8.0+ 支持）。 |


## 语法:添加外键

```sql
ALTER TABLE 子表
ADD CONSTRAINT 约束名称
FOREIGN KEY (外键列) 
    REFERENCES 父表(父表列)
    [ON DELETE 行为]
    [ON UPDATE 行为];
```

## 语法:查看外键信息

```sql
-- 查看表的创建语句（含外键）
SHOW CREATE TABLE orders;
```

```sql
-- 查询系统表获取外键详情
SELECT 
    CONSTRAINT_NAME,
    TABLE_NAME,
    COLUMN_NAME,
    REFERENCED_TABLE_NAME,
    REFERENCED_COLUMN_NAME
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE REFERENCED_TABLE_NAME IS NOT NULL;
```

## 语法:删除外键

```sql
ALTER TABLE orders
DROP FOREIGN KEY fk_orders_users; -- 指定外键名称
```

## 语法:临时禁用外键检查

```sql
-- 禁用外键检查（用于批量导入数据）
SET FOREIGN_KEY_CHECKS = 0;

-- 重新启用外键检查
SET FOREIGN_KEY_CHECKS = 1;
```

## 注意事项

**1.外键必须是主键**

- 引用列必须是父表的主键（PRIMARY KEY）或唯一索引（UNIQUE INDEX）。

**2. 存储引擎限制**

- 仅 InnoDB 支持外键，建表时需显式指定 `ENGINE=InnoDB`。

**3. 数据类型一致性**

- 外键列与引用列的数据类型必须完全匹配（包括长度和符号）。

**4. 事务支持**

- 外键操作在事务中执行，若违反约束会导致事务回滚。

**5. 性能优化**

- 避免在频繁写入的表上使用复杂级联操作。
- 定期检查外键索引效率，必要时优化查询。

**6. 跨数据库引用**

- MySQL 不支持跨数据库的外键约束（即父表和子表需在同一数据库中）。


## 示例1

```sql
-- 定义外键
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    user_id INT,  -- 外键（第一步）
    amount DECIMAL(10,2),
    FOREIGN KEY (user_id) REFERENCES users(user_id)  -- 外键约束（第二步）
);
```

- `user_id` 是外键，指向 `users` 表的 `user_id` 主键。

## 示例2

创建表时定义外键

```sql
CREATE TABLE parent (
    id INT PRIMARY KEY,
    name VARCHAR(50)
) ENGINE=InnoDB;

CREATE TABLE child (
    id INT PRIMARY KEY,
    parent_id INT,
    data VARCHAR(100),
    FOREIGN KEY (parent_id) 
        REFERENCES parent(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) ENGINE=InnoDB;
```

**参数说明**

- `FOREIGN KEY (column)`：指定外键列。
- `REFERENCES parent_table(ref_column)`：指定引用的父表及列。
- `ON DELETE` 和 `ON UPDATE`：定义级联行为（见下文）。

## 示例3

修改现有表添加外键

```sql
ALTER TABLE child
ADD CONSTRAINT fk_parent_id
FOREIGN KEY (parent_id)
REFERENCES parent(id)
ON DELETE SET NULL
ON UPDATE CASCADE;
```

## 示例:用户与订单关系

```sql
-- 父表：用户表
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR(50)
) ENGINE=InnoDB;

-- 子表：订单表
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    amount DECIMAL(10,2),
    FOREIGN KEY (user_id) 
        REFERENCES users(user_id)
        ON DELETE CASCADE
) ENGINE=InnoDB;

-- 插入数据
INSERT INTO users VALUES (1, 'Alice'), (2, 'Bob');
INSERT INTO orders VALUES (101, 1, 99.99), (102, 2, 149.99);

-- 删除用户 Alice（级联删除其订单）
DELETE FROM users WHERE user_id = 1; -- orders 表中 order_id=101 的记录自动删除
```

---

## 示例:创建表时定义外键

```sql
-- 父表：用户表
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    name VARCHAR(50)
) ENGINE=InnoDB;

-- 子表：订单表（外键关联用户表）
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    amount DECIMAL(10,2),
    FOREIGN KEY (user_id) 
        REFERENCES users(user_id)
        ON DELETE CASCADE  -- 用户删除时，订单同步删除
        ON UPDATE SET NULL -- 用户ID更新时，订单的user_id设为NULL
) ENGINE=InnoDB;
```

## 示例:修改现有表添加外键

```sql
-- 添加外键约束
ALTER TABLE orders
ADD CONSTRAINT fk_orders_users
FOREIGN KEY (user_id) 
    REFERENCES users(user_id)
    ON DELETE RESTRICT;
```


## 示例:级联操作

1. 主键示例

- **用户表**：用 `user_id` 作为主键，确保每个用户唯一。
- **商品表**：用 `product_id` 作为主键，标识唯一商品。

2. 外键示例

- **订单表**：通过 `user_id` 外键关联用户表，确保订单属于有效用户。
- **评论表**：通过 `product_id` 外键关联商品表，确保评论对应存在的商品。

定义外键时，可指定主表数据变更时子表的级联行为：

```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) 
        REFERENCES users(user_id)
        ON DELETE CASCADE  -- 用户删除时，自动删除其订单
        ON UPDATE SET NULL -- 用户ID更新时，订单的user_id设为NULL
);
```

---



## 外键约束的行为

1. 

2. 示例场景

- **CASCADE 删除**  
  当删除父表记录时，自动删除子表所有关联记录：

  ```sql
  DELETE FROM parent WHERE id = 1; -- 同时删除 child 表中 parent_id=1 的记录
  ```

- **SET NULL 更新**  
  当更新父表主键时，子表外键设为 `NULL`：

  ```sql
  UPDATE parent SET id = 100 WHERE id = 2; -- child 表中 parent_id=2 的列变为 NULL
  ```


## 主键 vs 外键

| **特性**         | **主键**                   | **外键**                     |
| ---------------- | -------------------------- | ---------------------------- |
| **唯一性**       | 唯一标识本表的每一行       | 引用其他表的主键，值可重复   |
| **是否允许NULL** | 不允许                     | 允许（除非额外约束）         |
| **数量限制**     | 每表只能有一个主键         | 每表可以有多个外键           |
| **索引**         | 自动创建唯一索引           | 通常需要手动创建索引         |
| **核心作用**     | 确保本表数据唯一性和完整性 | 维护跨表数据的关联性和一致性 |

---

## 外键的验证与限制

**1. 数据插入验证**

```sql
-- 插入无效用户ID的订单（报错）
INSERT INTO orders VALUES (1, 999, 100.00); 
-- 错误：Cannot add or update a child row: a foreign key constraint fails
```

**2. 父表数据删除验证**

```sql
-- 删除用户表中被订单引用的用户（若未定义 CASCADE，报错）
DELETE FROM users WHERE user_id = 1; 
-- 错误：Cannot delete or update a parent row: a foreign key constraint fails
```

---

## 外键与索引的关系

1. 索引要求

- **父表**：被引用的列必须为主键或唯一索引。
- **子表**：外键列会自动创建索引（隐式索引），以提高关联查询效率。

2. 查看外键索引

```sql
SHOW INDEX FROM child;
```

3. 手动管理索引
   若已手动为外键列创建索引，MySQL 不会重复创建。



## 外键的优缺点

1. 优点

- **强制数据完整性**：防止插入无效的外键值。
- **简化数据维护**：级联操作自动处理关联数据。
- **明确数据关系**：通过外键直观体现表间逻辑。

2. 缺点

- **性能开销**：外键约束会增加插入、更新、删除操作的开销。
- **复杂性增加**：级联操作可能导致意外的数据变更。
- **迁移限制**：跨不同存储引擎或数据库迁移时需额外处理。

---


## 常见报错

1. 错误 1215：无法添加外键约束

- **原因**：数据类型不匹配、引用列非主键/唯一索引、存储引擎不支持等。
- **解决**：检查表结构、引擎类型及列定义。

2. 错误 1452：违反外键约束

- **原因**：插入或更新时外键值在父表中不存在。
- **解决**：确保操作的数据符合外键引用关系。

---

## 总结

- **主键**：确保表中数据的唯一性和完整性，是数据的“身份证”。
- **外键**：维护表之间的逻辑关联，确保数据引用有效，是表之间的“桥梁”。

合理使用主键和外键，可以构建高效、可靠的关系型数据库系统。


外键是维护数据完整性的重要工具，但在使用时需权衡性能与复杂度。合理设计外键约束，结合业务场景选择级联行为，能够有效提升数据库的健壮性。对于高并发或大规模数据场景，建议在应用层补充校验逻辑，以缓解外键的性能瓶颈。

- **FOREIGN KEY 和 REFERENCES** 共同维护跨表数据的一致性，防止“孤立数据”产生。
- **级联操作**（如 `CASCADE`）可自动处理关联数据，但需谨慎使用以避免意外数据丢失。
- **设计原则**：在需要严格数据关联的场景中使用外键，高并发写入场景可考虑应用层校验。

通过合理使用外键，可以构建出结构清晰、数据可靠的数据库系统。

---










## REFERENCES 的作用

- **指定外键引用的目标**：明确外键字段关联的父表及其列。
- **要求父表列必须是主键或唯一索引**，否则无法创建外键。


## 外键的特点

- **引用性**：外键的值必须在被引用表的主键中存在。
- **可重复性**：外键字段的值可以重复（除非额外添加唯一约束）。
- **可空性**：外键字段的值可以为 `NULL`（除非明确限制）。


# 未完成作业

## 作业3: 学生与课程

要求：创建两个表，查询出所有订单及其对应的用户名称。最终效果：

```sql
+-----------------+-----------+--------+
| order_name      | user_name | amount |
+-----------------+-----------+--------+
| 老干妈辣酱      | 张三      |   9.90 |
| 海天黄豆酱      | 张三      |  16.80 |
| 舒肤佳香皂      | 李四      |   4.50 |
+-----------------+-----------+--------+
```

表1：用户表(users)

| user_id | user_name |
| ------- | --------- |
| 1       | 张三      |
| 2       | 李四      |
| 3       | 王五      |

要求：

- `user_id`: 整型、主键
- `user_name`: 变长字符串、非空
- 插入3条测试数据

表2：订单表(orders)

| order_id | order_name | user_id | amount |
| -------- | ---------- | ------- | ------ |
| 1        | 老干妈辣酱 | 2       | 9.9    |
| 2        | 海天黄豆酱 | 3       | 16.8   |
| 3        | 舒肤佳香皂 | 1       | 4.5    |

要求：  

1. `order_id`：整型、主键
2. `order_name`: 变长字符串，最多100字符，非空
3. `user_id`:外键(关联users 表的 user_id） 
4. `amount`: 小数、默认：0
5. 插入3条测试数据

```sql
-- 创建用户表（父表）
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    user_name VARCHAR(50)
) 
-- 插入users表三条测试数据
insert into users(user_id,user_name) VALUES
(1, '张三'), 
(2, '李四'), 
(3, '王五');

-- 子表：订单表
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    order_name VARCHAR(100) NOT NULL,
    user_id INT,
    amount DECIMAL(10,2),
    FOREIGN KEY (user_id) 
        REFERENCES users(user_id)
) ENGINE=InnoDB;

-- 插入orders表三条测试数据
insert into orders(order_id,order_name,user_id,amount) VALUES
(101, '老干妈辣酱',1, 9.9), 
(102, '海天黄豆酱',1, 16.8), 
(103,'舒肤佳香皂', 2, 4.5);


-- 查询所有订单及其对应的用户名称
select order_name,users.user_name,amount 
from orders 
join users on orders.user_id = users.user_id;
```

创建三个表：  

1. `students`（学生表）：`stu_id` (主键), `stu_name`  
2. `courses`（课程表）：`course_id` (主键), `course_name`  
3. `enrollments`（选课表）：包含 `stu_id` 和 `course_id` 作为联合主键和外键。

**参考答案**

**创建表**

```sql
CREATE TABLE students (
    stu_id INT PRIMARY KEY,
    stu_name VARCHAR(50)
);

CREATE TABLE courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(50)
);

CREATE TABLE enrollments (
    stu_id INT,
    course_id INT,
    PRIMARY KEY (stu_id, course_id),
    FOREIGN KEY (stu_id) REFERENCES students(stu_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

```

#### **插入学生数据（6条）**

```sql
INSERT INTO students (stu_id, stu_name) VALUES
(1, '张三'),
(2, '李四'),
(3, '王五'),
(4, '赵六'),
(5, '陈七'),
(6, '周八');
```

#### **插入课程数据（3条）**

```sql
INSERT INTO courses (course_id, course_name) VALUES
(101, '数学'),
(102, '英语'),
(103, '物理');
```

#### **插入选课数据（示例）**

```sql
INSERT INTO enrollments (stu_id, course_id) VALUES
(1, 101),  -- 张三选数学
(1, 102),  -- 张三选英语
(2, 101),  -- 李四选数学
(3, 103),  -- 王五选物理
(4, 102),  -- 赵六选英语
(5, 101),  -- 陈七选数学
(5, 103),  -- 陈七选物理
(6, 102);  -- 周八选英语
```

---

### **步骤 2：**

```sql
-- 编写查询语句
SELECT 
  s.stu_name AS 学生姓名,
  c.course_name AS 课程名称
FROM 
  students s
LEFT JOIN 
  enrollments e ON s.stu_id = e.stu_id
LEFT JOIN 
  courses c ON e.course_id = c.course_id
ORDER BY 
  s.stu_name, c.course_name;
```

---

### **结果示例**

| 学生姓名 | 课程名称 |
| -------- | -------- |
| 张三     | 数学     |
| 张三     | 英语     |
| 李四     | 数学     |
| 王五     | 物理     |
| 赵六     | 英语     |
| 陈七     | 数学     |
| 陈七     | 物理     |
| 周八     | 英语     |

# 主键

## 一、主键（Primary Key）

### 1. 定义

- 主键是一个字段。
- 主键也可以是字段组合。
- 主键用于标识表中的每行数据。
- 作为主键的字段不可重复，具有唯一性。
- 主键是表中**唯一标识每一行数据**的字段。

它的核心特性如下：

- **唯一性**：主键的值在表中必须唯一，不可重复。
- **非空性**：主键字段的值不允许为 `NULL`。
- **唯一约束**：一个表只能有一个主键。

### 2. 作用

- **唯一标识**：通过主键可以快速定位到表中的某一行。
- **数据完整性**：确保表中没有重复或无效的数据。
- **外键引用**：其他表可以通过主键建立关联（外键关系）。

### 3. 示例

```sql
-- 创建主键
CREATE TABLE students (
    student_id INT PRIMARY KEY,  -- 主键
    name VARCHAR(50),
    email VARCHAR(100) UNIQUE
);
```

- `student_id` 是主键，每个学生的 ID 唯一且非空。

# **MySQL 候选键详解**

候选键（Candidate Key）是数据库设计中用于唯一标识表中每一条记录的字段或字段组合。每个表至少有一个候选键，主键（Primary Key）是从候选键中选择的一个，其余候选键则通过唯一约束（UNIQUE）实现。以下是候选键的核心要点及操作指南：

---

### **一、候选键的核心特性**

| **特性**       | **说明**                                                     |
| -------------- | ------------------------------------------------------------ |
| **唯一性**     | 候选键的值必须唯一标识每行记录，不允许重复。                 |
| **最小性**     | 候选键的字段组合不可再缩减（即无冗余字段）。                 |
| **可选性**     | 表中可能有多个候选键，但只能选择一个作为主键。               |
| **允许NULL值** | 候选键字段可为NULL，但需注意唯一性约束（多个NULL可能被允许，取决于数据库实现）。 |
| **实现方式**   | 通过 `UNIQUE` 约束或唯一索引实现。                           |

---

### **二、候选键与主键的区别**

| **对比项**   | **候选键**                           | **主键**                         |
| ------------ | ------------------------------------ | -------------------------------- |
| **数量**     | 一个表可以有多个候选键。             | 一个表只能有一个主键。           |
| **NULL值**   | 可以包含NULL（具体取决于约束定义）。 | 不允许NULL值。                   |
| **索引类型** | 唯一索引（非聚簇）。                 | 聚簇索引（InnoDB引擎）。         |
| **用途**     | 提供备用唯一标识方式。               | 作为行的唯一标识，用于外键引用。 |

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





