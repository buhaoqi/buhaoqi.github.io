---
noteId: "544afa60321411f088738f916b56a5b6"
tags: []

---

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

|user_id|user_name|
|--|--|
|1|张三|
|2|李四|
|3|王五|

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

|order_id|order_name|user_id|amount|
|--|--|--| -- |
|1|老干妈辣酱|2| 9.9|
|2|海天黄豆酱|3|16.8|
|3|舒肤佳香皂|1|4.5|

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

| **行为**         | **描述**                                                                 |
|------------------|-------------------------------------------------------------------------|
| **CASCADE**      | 主表记录变更时，子表关联记录同步更新或删除。                             |
| **SET NULL**     | 主表记录变更时，子表外键列设为 `NULL`（需外键列允许 `NULL`）。           |
| **RESTRICT**     | 阻止主表的变更操作（默认行为）。                                         |
| **NO ACTION**    | 与 `RESTRICT` 类似，仅在事务提交时检查约束。                             |
| **SET DEFAULT**  | 主表记录变更时，子表外键列设为默认值（需列有默认值，MySQL 8.0+ 支持）。 |


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
| **特性**         | **主键**                          | **外键**                          |
|------------------|-----------------------------------|-----------------------------------|
| **唯一性**       | 唯一标识本表的每一行              | 引用其他表的主键，值可重复         |
| **是否允许NULL** | 不允许                            | 允许（除非额外约束）               |
| **数量限制**     | 每表只能有一个主键                | 每表可以有多个外键                 |
| **索引**         | 自动创建唯一索引                  | 通常需要手动创建索引               |
| **核心作用**     | 确保本表数据唯一性和完整性        | 维护跨表数据的关联性和一致性       |

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

