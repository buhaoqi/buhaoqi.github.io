---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务一 触发器  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务一 触发器  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 1  # 侧边栏中排在第1位
---

## 一、触发器是什么

触发器是一个可以触发代码执行的容器。

- 触发器内存储了一段 SQL 代码。
- 当事件(INSERT、UPDATE、DELETE)发生时，会触发内部代码的执行。

![MySQL 触发器](./images/MySQL-Triggers.png)

## 二、触发的机制

- BEFORE INSERT：在插入前
- AFTER INSERT：在插入后
- BEFORE UPDATE：在修改前
- AFTER UPDATE：在修改后
- BEFORE DELETE：在删除前
- AFTER DELETE：在删除后

## 三、基础语法

### 1.单条触发语句

```sql
CREATE TRIGGER 触发器名 -- 触发器名
BEFORE|AFTER  -- 触发时机 
INSERT｜UPDATE|DELETE -- 触发事件 
ON 表名 -- 事件对象
FOR EACH ROW -- 事件作用范围（行级触发器：每满足条件的行都会触发）
触发器语句; -- 要执行的 SQL 语句（单条）
```

### 2.多条触发语句

```sql
DELIMITER //  -- 临时修改 SQL 分隔符为 //
CREATE TRIGGER 触发器名 -- 触发器名
BEFORE | AFTER  -- 触发时机 
INSERT | UPDATE | DELETE  -- 触发事件 
ON 作用表名 -- 事件对象
FOR EACH ROW -- 事件作用范围（行级触发器：每满足条件的行都会触发）
BEGIN
  -- 要执行的 SQL 语句(多条)，每条语句末尾用 ; 
  触发语句1;
  触发语句2;
  ...
END //
DELIMITER ;  -- 恢复默认分隔符为 ;
```

1. 触发器名：
    - 遵循 MySQL 标识符规则
    - 建议命名规范：`tr_表名_触发时机_触发事件`，如 `tr_teacher_after_update`。
2.  触发时机：
    - `BEFORE`：在事件执行前触发。适合：数据校验、数据预处理。
    - `AFTER`：在事件执行后触发。适合：日志记录、数据同步，比如删除教师后记录删除日志、插入成绩后同步更新学生总分。
3.  触发事件：
    - `INSERT`：向表中插入数据时触发（如 `INSERT INTO` 执行时）。
    - `UPDATE`：修改表中已有数据时触发（如 `UPDATE ... SET ...` 执行时）。
    - `DELETE`：从表中删除数据时触发（如 `DELETE FROM ...` 执行时）。
4.  作用表名：触发器必须绑定到一张永久表（不能绑定到视图、临时表），触发器的逻辑围绕这张表展开。
5.  `FOR EACH ROW`：表示「行级触发器」，即操作表时，每满足条件的一行数据都会触发一次触发器（MySQL 不支持表级触发器，该语句必须写，不可省略）。
6.  触发体：触发器要执行的核心逻辑
    - 单条 SQL 语句：直接写语句，无需 `BEGIN...END` 包裹。
    - 多条 SQL 语句：必须用 `BEGIN...END` 包裹，且需要先临时修改 SQL 分隔符（避免触发体内的 `;` 被 MySQL 当作整个触发器语句的结尾）。

## 四、特殊变量

**特殊行变量**：触发器中可以使用 `NEW` 和 `OLD` 两个特殊变量，获取操作前后的数据，仅在对应触发事件中可用：
| 变量  | 适用触发事件 | 含义                                  |
|-------|--------------|---------------------------------------|
| `NEW` | `INSERT`| 代表新行（无论 BEFORE 还是 AFTER 都存在） |
| `NEW` | `UPDATE` | 代表修改后的行 |
| `OLD` | `UPDATE`| 代表修改前的旧行 |
| `OLD` | `DELETE` |代表删除的行（无论 BEFORE 还是 AFTER 都存在 ）|

| 要素 | 选项 | 说明 |
|------|------|------|
| **触发时机** | `BEFORE` 或 `AFTER` | 在事件之前或之后执行 |
| **触发事件** | `INSERT`, `UPDATE`, `DELETE` | 哪种操作触发 |
| **访问行数据** | `NEW` 或 `OLD` | 新行/旧行的数据 |

## 五、实用示例
### 示例1：插入后自动记录时间戳
```sql
-- 创建测试表
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    created_at DATETIME
);

-- 创建最简单的触发器（AFTER INSERT）
DELIMITER //
CREATE TRIGGER set_create_time
AFTER INSERT ON users
FOR EACH ROW
BEGIN
    UPDATE users SET created_at = NOW() WHERE id = NEW.id;
END //
DELIMITER ;

-- 测试
INSERT INTO users (username) VALUES ('张三');
SELECT * FROM users; -- created_at 自动填充当前时间
```

### 示例2：更简洁的 BEFORE INSERT 触发器
```sql
-- 创建新表
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_no VARCHAR(20),
    order_date DATE,
    total_amount DECIMAL(10,2)
);

-- 最简单的BEFORE INSERT触发器
DELIMITER //
CREATE TRIGGER before_order_insert
BEFORE INSERT ON orders
FOR EACH ROW
BEGIN
    SET NEW.order_date = CURDATE(); -- 直接设置新行的值
END //
DELIMITER ;

-- 测试
INSERT INTO orders (order_no, total_amount) VALUES ('ORD001', 100.50);
SELECT * FROM orders; -- order_date 自动设为当天日期
```
### 示例3: 时间更新
```sql
-- 商品表
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10,2),
    last_updated DATETIME
);

-- 插入三条测试数据
INSERT INTO products (id, name, price, last_updated) VALUES
(1, 'iPhone 15 Pro', 8999.00, '2024-01-01 10:00:00'),
(2, '小米电视 75寸', 4999.00, '2024-01-15 14:30:00'),
(3, '华为笔记本 MateBook', 6999.00, '2024-02-01 09:15:00');

-- 最简单实用的更新触发器
DELIMITER //
CREATE TRIGGER update_timestamp
BEFORE UPDATE ON products
FOR EACH ROW
    SET NEW.last_updated = NOW();
//
DELIMITER ;

-- 使用：last_updated 会自动更新为当前时间
UPDATE products SET price = 99.99 WHERE id = 1;


-- 查看更新后的的数据
SELECT * FROM products;

```



## 六、查看和管理触发器
```sql
-- 查看所有触发器
SHOW TRIGGERS;

-- 查看特定触发器
SHOW CREATE TRIGGER trigger_name;

-- 删除触发器
DROP TRIGGER IF EXISTS trigger_name;
```

1.  查看已创建的触发器：
```sql
-- 查看所有触发器
SHOW TRIGGERS;

-- 查看指定数据库的触发器（精准查找，替换为你的数据库名）
SHOW TRIGGERS FROM your_database_name;

-- 查看触发器创建语句（替换为触发器名）
SHOW CREATE TRIGGER tr_teacher_after_update;
```

2.  删除无用的触发器：
```sql
-- 删除触发器（替换为触发器名）
DROP TRIGGER IF EXISTS tr_teacher_before_insert;
```

## 七、注意事项
1.  触发器不能嵌套：一个触发器执行的操作，不能触发另一个触发器（避免死循环）。
2.  触发体中尽量避免操作触发它的那张表（比如 `teacher` 表的触发器，不要在触发体中再次 `UPDATE teacher`），否则会引发死循环。
3.  触发器仅支持永久表（`ENGINE=InnoDB` 等），不支持临时表（`CREATE TEMPORARY TABLE`）和视图。
4.  触发器的逻辑要简洁高效：触发器自动执行，若逻辑复杂（如大量查询、循环），会严重影响 `INSERT/UPDATE/DELETE` 操作的执行效率。
5.  `SIGNAL` 语句仅用于抛出错误/提示，`SQLSTATE '45000'` 是自定义错误码，`'00000'` 是成功提示码（不终止操作）。

## 八、总结
1.  核心语法：`CREATE TRIGGER` + 「触发时机+触发事件」 + 「作用表」 + 「触发体」，多条语句需修改分隔符。
2.  关键工具：`NEW`/`OLD` 变量获取操作前后数据，`BEFORE` 用于校验，`AFTER` 用于日志。
3.  常用操作：`SHOW TRIGGERS` 查看，`DROP TRIGGER` 删除，命名规范便于后续维护。
4.  避坑核心：不嵌套、不操作原表、逻辑简洁，避免影响数据操作效率。









