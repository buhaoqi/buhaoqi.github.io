---
noteId: "0b1a4350333111f0ab03e5a28898bc4c"
tags: []

---

MySQL 中的关键字（Keywords）是预定义的保留字，具有特定的语法功能，用于构建 SQL 语句的结构和逻辑。以下是 MySQL 关键字的详细分类和说明，涵盖数据操作、数据定义、控制流程等核心场景：

---

一、**数据查询（DQL：Data Query Language）**
用于从数据库中检索数据的关键字：

| 关键字           | 作用与示例                                                                 |
|------------------|--------------------------------------------------------------------------|
| SELECT       | 指定要查询的列或表达式。示例：`SELECT name, age FROM users;`         |
| FROM         | 指定数据来源的表或视图。示例：`SELECT * FROM orders;`                |
| WHERE        | 过滤符合条件的行。示例：`SELECT * FROM users WHERE age > 18;`       |
| GROUP BY     | 按列或表达式分组，常用于聚合统计。示例：`SELECT class, COUNT(*) FROM students GROUP BY class;` |
| HAVING       | 对分组后的结果进行过滤。示例：`SELECT class, AVG(score) FROM students GROUP BY class HAVING AVG(score) > 80;` |
| ORDER BY     | 对结果排序（`ASC` 升序，`DESC` 降序）。示例：`SELECT * FROM products ORDER BY price DESC;` |
| LIMIT        | 限制返回的行数。示例：`SELECT * FROM logs LIMIT 10;`                |
| DISTINCT     | 去除重复行。示例：`SELECT DISTINCT city FROM customers;`            |
| JOIN         | 关联多张表（`INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN` 等）。示例：`SELECT u.name, o.order_id FROM users u INNER JOIN orders o ON u.id = o.user_id;` |
| UNION        | 合并多个查询结果（默认去重）。示例：`SELECT name FROM employees UNION SELECT name FROM managers;` |

---

二、**数据操作（DML：Data Manipulation Language）**
用于插入、更新或删除数据的关键字：

| 关键字           | 作用与示例                                                                 |
|------------------|--------------------------------------------------------------------------|
| INSERT       | 插入新数据。示例：`INSERT INTO users (name, age) VALUES ('Alice', 25);` |
| UPDATE       | 更新已有数据。示例：`UPDATE users SET age = 26 WHERE name = 'Alice';`  |
| DELETE       | 删除数据。示例：`DELETE FROM users WHERE age < 18;`                  |
| REPLACE      | 替换数据（存在则更新，否则插入）。示例：`REPLACE INTO users (id, name) VALUES (1, 'Bob');` |

---

三、**数据定义（DDL：Data Definition Language）**
用于定义或修改数据库结构的关键字：

| 关键字           | 作用与示例                                                                 |
|------------------|--------------------------------------------------------------------------|
| CREATE       | 创建数据库、表、索引等。示例：`CREATE TABLE students (id INT, name VARCHAR(50));` |
| ALTER        | 修改表结构（添加/删除列、修改数据类型等）。示例：`ALTER TABLE students ADD COLUMN age INT;` |
| DROP         | 删除数据库、表、索引等。示例：`DROP TABLE temp_data;`               |
| TRUNCATE     | 清空表数据（不可回滚，速度快于 `DELETE`）。示例：`TRUNCATE TABLE logs;` |
| INDEX        | 创建或删除索引。示例：`CREATE INDEX idx_name ON users(name);`       |

---

四、**事务控制**
用于管理数据库事务的关键字：

| 关键字                | 作用与示例                                                                 |
|-----------------------|--------------------------------------------------------------------------|
| START TRANSACTION | 开始事务。示例：`START TRANSACTION;`                                 |
| COMMIT            | 提交事务（永久保存更改）。示例：`COMMIT;`                            |
| ROLLBACK          | 回滚事务（撤销未提交的更改）。示例：`ROLLBACK;`                      |
| SAVEPOINT         | 设置事务保存点。示例：`SAVEPOINT sp1;`                               |

---

五、**函数与运算符**
用于数据计算、逻辑判断和字符串处理的关键字：

| 关键字/运算符        | 作用与示例                                                                 |
|----------------------|--------------------------------------------------------------------------|
| COUNT()          | 统计行数。示例：`SELECT COUNT(*) FROM users;`                        |
| SUM()            | 求和。示例：`SELECT SUM(sales) FROM orders;`                         |
| AVG()            | 求平均值。示例：`SELECT AVG(score) FROM exams;`                     |
| MAX()/MIN()      | 求最大值/最小值。示例：`SELECT MAX(price) FROM products;`           |
| CASE             | 条件分支。示例：`SELECT name, CASE WHEN age >= 18 THEN 'Adult' ELSE 'Minor' END AS status FROM users;` |
| LIKE             | 模糊匹配（`%` 匹配任意字符，`_` 匹配单个字符）。示例：`SELECT * FROM users WHERE name LIKE 'A%';` |
| IN               | 判断值是否在列表中。示例：`SELECT * FROM products WHERE id IN (1, 2, 3);` |
| BETWEEN          | 范围查询。示例：`SELECT * FROM orders WHERE date BETWEEN '2023-01-01' AND '2023-12-31';` |

---

六、**高级功能**
用于复杂逻辑和性能优化的关键字：

| 关键字           | 作用与示例                                                                 |
|------------------|--------------------------------------------------------------------------|
| EXPLAIN      | 分析 SQL 执行计划。示例：`EXPLAIN SELECT * FROM users WHERE age > 20;` |
| VIEW         | 创建视图（虚拟表）。示例：`CREATE VIEW adult_users AS SELECT * FROM users WHERE age >= 18;` |
| PROCEDURE    | 存储过程（封装重复逻辑）。示例：`CREATE PROCEDURE GetUser(IN uid INT) BEGIN SELECT * FROM users WHERE id = uid; END;` |
| TRIGGER      | 触发器（自动执行的操作）。示例：`CREATE TRIGGER before_insert_user BEFORE INSERT ON users FOR EACH ROW SET NEW.create_time = NOW();` |
| WITH         | 公共表表达式（CTE，简化复杂查询）。示例：`WITH cte AS (SELECT * FROM orders WHERE amount > 100) SELECT * FROM cte;` |

---

七、**其他重要关键字**
| 关键字           | 作用与示例                                                                 |
|------------------|--------------------------------------------------------------------------|
| AS           | 为列或表定义别名。示例：`SELECT name AS 姓名 FROM users;`            |
| DEFAULT      | 设置列的默认值。示例：`CREATE TABLE users (id INT, name VARCHAR(50) DEFAULT 'Anonymous');` |
| PRIMARY KEY  | 定义主键。示例：`CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(50));` |
| FOREIGN KEY  | 定义外键。示例：`CREATE TABLE orders (id INT, user_id INT, FOREIGN KEY (user_id) REFERENCES users(id));` |

---

**注意事项**
1. 保留字冲突：  
   • 避免使用关键字作为表名或列名。若必须使用，需用反引号包裹：  

     ```sql
     SELECT `from` FROM `table`;  -- "from" 是关键字
     ```
2. 大小写不敏感：  
   • MySQL 关键字不区分大小写（`SELECT` 和 `select` 等效），但建议统一使用大写以提高可读性。

3. 官方文档参考：  
   • 完整关键字列表和版本差异可查阅 [MySQL 8.0 Keywords](https://dev.mysql.com/doc/refman/8.0/en/keywords.html)。


---

**总结**
MySQL 的关键字是 SQL 语句的骨架，掌握它们可以高效完成以下操作：
• 查询数据（`SELECT`, `JOIN`, `WHERE`）

• 维护数据（`INSERT`, `UPDATE`, `DELETE`）

• 设计表结构（`CREATE`, `ALTER`, `DROP`）

• 控制事务（`COMMIT`, `ROLLBACK`）  

建议结合实际场景练习，例如用 `GROUP BY` 统计分类数据，用 `CASE` 实现动态逻辑，用 `EXPLAIN` 优化查询性能。