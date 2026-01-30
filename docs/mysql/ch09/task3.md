---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务三 存储过程  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务三 存储过程  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 4  # 侧边栏中排在第1位
---

## 一、存储过程是什么


存储过程（Stored Procedure）就是存储子程序。可以看作数据库中的“函数”。

- 过程就是指一系列有序的操作步骤的集合。
- 过程就是一组 SQL 语句的集合。
- 存储：存储在数据库中。

## 二、单条语句语法

```sql
-- 第一步：创建存储过程（不带参数)
CREATE PROCEDURE 过程名()
    -- 单条SQL语句
    SELECT * FROM 表名;

-- 第二步：调用存储过程
CALL 过程名();

```
### 示例1：无参单条语句

只有一条语句时，可省略 BEGIN...END

```sql
CREATE PROCEDURE show_time()
    SELECT NOW();  -- 直接写SQL语句，不需要BEGIN END
    -- 其他
    SELECT 1;
    SELECT 1 + 1;
```
调用：
```sql
CALL show_time();
```

### 示例2：最简单的存储过程

数据：[用户表](../data.md)
```sql
CREATE PROCEDURE get_users()
    SELECT * FROM users;
```

调用：
```sql
CALL get_users();
```


## 三、多条语句语法

多条语句必须用 BEGIN...END
```sql
-- 第一步：修改分隔符（避免与SQL语句冲突）
DELIMITER //

-- 第二步：创建存储过程（不带参数)
CREATE PROCEDURE 过程名()
    -- 你的SQL语句
    SELECT '第一步';
    SELECT '第二步';
END //

-- 第三步：恢复分隔符
DELIMITER ;
```


## 三、带参数的语法

```sql
DELIMITER //

CREATE PROCEDURE 过程名(
    -- IN：输入参数（默认类型，调用时必须传入，过程内部可读取但修改不影响外部）
    IN 参数1 类型, 
    
    -- OUT：输出参数，调用时不需传入值，但必须传入一个用户变量（以@开头的变量）用于存储输出结果
    OUT 结果 类型,  
    
    -- INOUT：输入输出参数，调用时传入值，过程内部可修改，修改结果返回给调用者
    INOUT 参数名 DECIMAL(10,2)
)
BEGIN
    SELECT * FROM 表 WHERE 字段 = 参数1;
    SELECT COUNT(*) INTO 结果 FROM 表;
END //

DELIMITER ;
```

### 示例1：带IN参数
```sql
DELIMITER //
CREATE PROCEDURE get_user_by_id(IN user_id INT)
BEGIN
    SELECT * FROM users WHERE id = user_id;
END //
DELIMITER ;
```

调用：
```sql
CALL get_user_by_id(100);
```

### 示例2：带OUT参数
```sql
DELIMITER //
CREATE PROCEDURE count_users(OUT total INT)
BEGIN
    -- total是局部变量，不自动显示
    SELECT COUNT(*) INTO total FROM users;
    -- 下面的写法会自动显示：输出结果集，不是OUT参数了
    SELECT COUNT(*) FROM users;
    
END //
DELIMITER ;
```

调用：
```sql
-- 第一步：把结果存入 @user_count 变量。
-- @user_count：会话变量，以"@"开头，用于存储临时值。
-- 如果不使用@,user_count会被识别为列名或变量,是错误的。
CALL count_users(@user_count); -- 必须传入@变量

-- ❌ 错误：不能直接调用
CALL my_proc();  -- 错误！缺少参数
CALL my_proc(123);  -- 错误！不能传字面值
CALL my_proc(result);  -- 错误！缺少@符号

-- 第二步：查看输出结果
SELECT @user_count;
```

## 四、OUT 输出参数探究

> 思考：在上个示例中，为何使用@用户变量，而不是直接输出存储过程中的total参数？

原因：MySQL的设计限制

MySQL存储过程不像函数可以直接返回值，它有三种输出方式：

- OUT参数 → 需要变量接收
- SELECT结果集 → 直接返回
- RAISE/SIGNAL → 抛出异常

不能直接输出OUT参数值是MySQL的语法限制。

### 替代方案A：直接查询

```sql
DELIMITER //
CREATE PROCEDURE show_user_count()
BEGIN
    SELECT COUNT(*) AS total_users FROM users;
END //
DELIMITER ;

-- 直接调用，自动显示
CALL show_user_count();
-- 结果：直接显示表格
-- +-------------+
-- | total_users |
-- +-------------+
-- |         100 |
-- +-------------+
```

### 替代方案 B：间接查询

```sql
DELIMITER //
CREATE PROCEDURE count_users_and_show()
BEGIN
    DECLARE total INT;
    SELECT COUNT(*) INTO total FROM users;
    -- 在内部使用SELECT显示
    SELECT total AS 用户总数;
END //
DELIMITER ;

-- 调用
CALL count_users_and_show();
```
### 替代方案 C：使用函数

```sql
DELIMITER //
CREATE FUNCTION get_user_count() RETURNS INT
READS SQL DATA
BEGIN
    DECLARE total INT;
    SELECT COUNT(*) INTO total FROM users;
    RETURN total;
END //
DELIMITER ;

-- 直接使用
SELECT get_user_count() AS 用户数;
-- 或在查询中
SELECT '用户总数：', get_user_count();
```
### 示例3：其他
```sql
-- 无参数
CREATE PROCEDURE p1() ...

-- 一个输入参数
CREATE PROCEDURE p2(IN id INT) ...

-- 一个输出参数  
CREATE PROCEDURE p3(OUT count INT) ...

-- 多个参数
CREATE PROCEDURE p4(IN a INT, OUT b VARCHAR(100)) ...
```

## 六、完整语法
```sql
DELIMITER //  -- 修改分隔符

CREATE PROCEDURE 过程名(
    [IN|OUT|INOUT] 参数名 数据类型 [(长度)], 
    ...
)
[
    BEGIN
        -- SQL 语句
        -- 变量声明
        -- 流程控制
    END;
]

DELIMITER ;  -- 恢复分隔符
```

### 1.变量声明与使用

```sql
CREATE PROCEDURE example()
BEGIN
    -- 局部变量声明（必须放在 BEGIN 的开头）
    DECLARE v_price DECIMAL(10,2) DEFAULT 0.0;
    DECLARE v_quantity INT;
    DECLARE v_total DECIMAL(10,2);
    DECLARE v_done BOOLEAN DEFAULT FALSE;
    
    -- 用户变量（会话级）
    SET @user_var = 100;
    
    -- 变量赋值
    SET v_price = 99.99;
    SELECT COUNT(*) INTO v_quantity FROM products;
    
    -- 使用变量
    SET v_total = v_price * v_quantity;
END;
```

### 2. 流程控制语句

#### 1. **条件判断语句**

##### **IF 语句**
```sql
-- 适用于：单条件或多条件分支
IF condition THEN 
    statements;
ELSEIF condition2 THEN 
    statements;
ELSE 
    statements;
END IF;
```
**特点**：类似其他语言的 if-else，用于条件执行。

##### **CASE 语句**
```sql
-- 适用于：多值匹配判断
CASE value
    WHEN value1 THEN statements;
    WHEN value2 THEN statements;
    ELSE statements;
END CASE;

-- 或
CASE
    WHEN condition1 THEN statements;
    WHEN condition2 THEN statements;
    ELSE statements;
END CASE;
```
**特点**：类似 switch-case，更适用于多分支等值匹配。

**区别**：
- `IF`：适合范围判断、复杂条件
- `CASE`：适合等值匹配、可读性更强的多分支

#### 2. **循环语句**

##### **LOOP 语句（无限循环）**
```sql
-- 基本结构（必须配合 LEAVE 退出）
[label:] LOOP
    statements;
    IF condition THEN
        LEAVE label;  -- 退出循环
    END IF;
END LOOP [label];
```
**特点**：最简单的循环，**必须显式使用 LEAVE 退出**。

##### **REPEAT 语句（先执行后判断）**
```sql
-- 类似 do-while
[label:] REPEAT
    statements;
    UNTIL condition  -- 条件为真时退出
END REPEAT [label];
```
**特点**：
- 先执行一次，再判断条件
- 条件为 **TRUE** 时退出
- 至少执行一次

##### **WHILE 语句（先判断后执行）**
```sql
-- 类似 while
[label:] WHILE condition DO  -- 条件为真时执行
    statements;
END WHILE [label];
```
**特点**：
- 先判断条件，再执行
- 条件为 **TRUE** 时继续执行
- 可能一次都不执行

**三种循环的区别**：
| 特性 | LOOP | REPEAT | WHILE |
|------|------|--------|-------|
| **退出条件** | 必须显式 LEAVE | UNTIL（条件真退出） | WHILE（条件真执行） |
| **最少执行次数** | 0（可立即LEAVE） | 1 | 0 |
| **条件位置** | 循环内任意位置 | 循环结尾 | 循环开始 |
| **适用场景** | 需要复杂退出逻辑 | 至少执行一次 | 可能不执行 |

#### 3. **流程控制辅助语句**

##### **LEAVE 语句（退出）**
```sql
LEAVE label;  -- 跳出指定的标签块
```
**用途**：用于退出 **BEGIN...END**、**LOOP**、**REPEAT**、**WHILE** 块。

##### **ITERATE 语句（继续）**
```sql
ITERATE label;  -- 跳转到循环开始，继续下一次迭代
```
**用途**：类似其他语言的 `continue`，只能用于循环内。

#### 4. **实际使用示例对比**

##### **示例1：计算1-10奇数和**
```sql
-- 使用 LOOP（需要显式退出）
DECLARE i INT DEFAULT 1;
DECLARE sum INT DEFAULT 0;
myloop: LOOP
    IF i > 10 THEN
        LEAVE myloop;
    END IF;
    IF i % 2 = 1 THEN
        SET sum = sum + i;
    END IF;
    SET i = i + 1;
END LOOP;

-- 使用 WHILE（更简洁）
DECLARE i INT DEFAULT 1;
DECLARE sum INT DEFAULT 0;
WHILE i <= 10 DO
    IF i % 2 = 1 THEN
        SET sum = sum + i;
    END IF;
    SET i = i + 1;
END WHILE;
```

##### **示例2：查找第一个满足条件的值**
```sql
-- 使用 REPEAT（至少检查一次）
DECLARE found BOOL DEFAULT FALSE;
DECLARE val INT;
REPEAT
    SET val = (SELECT ...);  -- 获取值
    IF val > 100 THEN
        SET found = TRUE;
    END IF;
    UNTIL found = TRUE
END REPEAT;

-- 使用 LOOP（更灵活的控制）
DECLARE val INT;
search_loop: LOOP
    SET val = (SELECT ...);
    IF val > 100 THEN
        LEAVE search_loop;
    END IF;
    IF no_more_data THEN
        LEAVE search_loop;
    END IF;
END LOOP;
```

#### 5. **嵌套与标签使用**

```sql
-- 多层嵌套，使用标签精确控制
outer_loop: LOOP
    DECLARE j INT DEFAULT 1;
    inner_loop: WHILE j <= 5 DO
        IF some_condition THEN
            LEAVE outer_loop;    -- 直接退出外层循环
        END IF;
        IF other_condition THEN
            ITERATE inner_loop;  -- 继续内层下一次迭代
        END IF;
        SET j = j + 1;
    END WHILE;
END LOOP;
```

#### 6. **选择建议**

| 需求场景 | 推荐语句 | 理由 |
|---------|---------|------|
| **简单条件判断** | IF | 直观，适用于大多数条件 |
| **等值多分支** | CASE | 结构清晰，可读性好 |
| **循环次数不确定** | `LOOP + LEAVE` | 灵活控制退出条件 |
| **至少执行一次** | REPEAT | 保证最少执行一次 |
| **条件先判断** | WHILE | 避免不必要的首次执行 |
| **跳过当前迭代** | ITERATE | 类似 continue |
| **完全退出块** | LEAVE | 类似 break |

#### 7. **重要注意事项**

1. **标签作用域**：标签只在当前 `BEGIN...END` 块内有效
2. **循环变量**：需自行声明和更新，MySQL没有 `for(i=1;i<=10;i++)`
3. **性能考虑**：避免过度嵌套，大型循环考虑在应用层处理
4. **游标配合**：常与游标（CURSOR）一起使用处理结果集

--- 

#### 条件判断：IF-THEN-ELSE
```sql
IF condition1 THEN
    statements1;
ELSEIF condition2 THEN
    statements2;
ELSE
    statements3;
END IF;

-- 示例：
IF score >= 90 THEN
    SET grade = 'A';
ELSEIF score >= 80 THEN
    SET grade = 'B';
ELSE
    SET grade = 'C';
END IF;
```

#### 条件判断：CASE
```sql
CASE variable
    WHEN value1 THEN statements1;
    WHEN value2 THEN statements2;
    ELSE statements3;
END CASE;

-- 示例：
CASE level
    WHEN 1 THEN SET discount = 0.1;
    WHEN 2 THEN SET discount = 0.2;
    ELSE SET discount = 0;
END CASE;
```

#### 循环：WHILE
```sql
WHILE condition DO
    statements;
END WHILE;

-- 示例：
SET i = 1;
WHILE i <= 10 DO
    INSERT INTO numbers VALUES (i);
    SET i = i + 1;
END WHILE;
```

#### 循环：REPEAT-UNTIL
```sql
REPEAT
    statements;
UNTIL condition
END REPEAT;

-- 示例：
SET i = 1;
REPEAT
    INSERT INTO numbers VALUES (i);
    SET i = i + 1;
UNTIL i > 10
END REPEAT;
```

#### 循环：LOOP
```sql
[标签:] LOOP
    statements;
    IF condition THEN
        LEAVE 标签;  -- 退出循环
    END IF;
    ITERATE 标签;   -- 跳过本次循环
END LOOP;

-- 示例：
SET i = 0;
my_loop: LOOP
    SET i = i + 1;
    IF i > 10 THEN
        LEAVE my_loop;
    END IF;
    IF MOD(i, 2) = 0 THEN
        ITERATE my_loop;  -- 跳过偶数
    END IF;
    INSERT INTO odd_numbers VALUES (i);
END LOOP;
```

### 3. 异常处理
```sql
-- 声明异常处理器
DECLARE CONTINUE HANDLER FOR SQLEXCEPTION 
BEGIN
    -- 发生异常时执行的代码
    SET error_flag = 1;
    GET DIAGNOSTICS CONDITION 1
        @errno = MYSQL_ERRNO, @errmsg = MESSAGE_TEXT;
END;

-- 常见处理器类型
DECLARE EXIT HANDLER FOR SQLEXCEPTION ...  -- 退出程序
DECLARE CONTINUE HANDLER FOR SQLWARNING ...  -- 继续执行
DECLARE CONTINUE HANDLER FOR NOT FOUND ...  -- 处理无数据
DECLARE CONTINUE HANDLER FOR 1062 ...  -- 处理特定错误代码
```

### 4. 游标（Cursor）使用
```sql
CREATE PROCEDURE process_employees()
BEGIN
    DECLARE v_id INT;
    DECLARE v_name VARCHAR(100);
    DECLARE v_salary DECIMAL(10,2);
    DECLARE v_done BOOLEAN DEFAULT FALSE;
    
    -- 1. 声明游标
    DECLARE cur CURSOR FOR 
        SELECT id, name, salary FROM employees;
    
    -- 2. 声明异常处理器
    DECLARE CONTINUE HANDLER FOR NOT FOUND 
        SET v_done = TRUE;
    
    -- 3. 打开游标
    OPEN cur;
    
    -- 4. 循环读取
    read_loop: LOOP
        FETCH cur INTO v_id, v_name, v_salary;
        IF v_done THEN
            LEAVE read_loop;
        END IF;
        
        -- 处理每一行数据
        IF v_salary > 50000 THEN
            INSERT INTO high_salary_log VALUES (v_id, v_name, v_salary);
        END IF;
    END LOOP;
    
    -- 5. 关闭游标
    CLOSE cur;
END;
```

---

## 七、存储过程管理命令

### 1. 创建存储过程
```sql
DELIMITER //
CREATE PROCEDURE get_employee_count(
    IN dept_id INT,
    OUT emp_count INT
)
BEGIN
    SELECT COUNT(*) INTO emp_count
    FROM employees
    WHERE department_id = dept_id;
END //
DELIMITER ;
```

### 2. 调用存储过程
```sql
-- 无参数
CALL get_all_employees();

-- 有 IN 参数
CALL get_employee_by_id(100);

-- 有 OUT 参数
CALL get_department_count(5, @count);
SELECT @count;

-- 有 INOUT 参数
SET @balance = 1000;
CALL adjust_balance(@balance, 500);
SELECT @balance;  -- 1500
```

### 3. 查看存储过程
```sql
-- 查看所有存储过程
SHOW PROCEDURE STATUS;

-- 查看特定数据库的存储过程
SHOW PROCEDURE STATUS WHERE Db = 'your_database';

-- 查看存储过程定义
SHOW CREATE PROCEDURE procedure_name;

-- 从 information_schema 查看
SELECT * FROM information_schema.ROUTINES
WHERE ROUTINE_TYPE = 'PROCEDURE';
```

### 4. 修改存储过程
```sql
-- MySQL 不支持直接修改，需删除后重建
DROP PROCEDURE IF EXISTS old_procedure;
CREATE PROCEDURE new_procedure() ...;
```

### 5. 删除存储过程
```sql
DROP PROCEDURE IF EXISTS procedure_name;
```

---

## 八、事务在存储过程中的使用

```sql
CREATE PROCEDURE transfer_funds(
    IN from_acc INT,
    IN to_acc INT,
    IN amount DECIMAL(10,2),
    OUT result VARCHAR(100)
)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SET result = '转账失败';
    END;
    
    START TRANSACTION;
    
    -- 扣款
    UPDATE accounts 
    SET balance = balance - amount 
    WHERE account_id = from_acc AND balance >= amount;
    
    IF ROW_COUNT() = 0 THEN
        ROLLBACK;
        SET result = '余额不足或账户不存在';
        RETURN;
    END IF;
    
    -- 存款
    UPDATE accounts 
    SET balance = balance + amount 
    WHERE account_id = to_acc;
    
    IF ROW_COUNT() = 0 THEN
        ROLLBACK;
        SET result = '收款账户不存在';
        RETURN;
    END IF;
    
    -- 记录日志
    INSERT INTO transfer_log(from_acc, to_acc, amount, transfer_time)
    VALUES (from_acc, to_acc, amount, NOW());
    
    COMMIT;
    SET result = '转账成功';
END;
```

---

## 九、实用示例集合

### 示例1：分页查询存储过程
```sql
DELIMITER //
CREATE PROCEDURE paged_employees(
    IN page_num INT,      -- 页码
    IN page_size INT,     -- 每页大小
    OUT total_pages INT   -- 总页数
)
BEGIN
    DECLARE total_records INT;
    DECLARE offset_val INT;
    
    -- 计算总记录数
    SELECT COUNT(*) INTO total_records FROM employees;
    
    -- 计算总页数
    SET total_pages = CEIL(total_records / page_size);
    
    -- 计算偏移量
    SET offset_val = (page_num - 1) * page_size;
    
    -- 执行分页查询
    SELECT * FROM employees
    ORDER BY id
    LIMIT page_size OFFSET offset_val;
END //
DELIMITER ;
```

### 示例2：数据统计报表
```sql
CREATE PROCEDURE monthly_sales_report(
    IN report_year INT,
    IN report_month INT
)
BEGIN
    SELECT 
        p.category,
        SUM(od.quantity) as total_quantity,
        SUM(od.quantity * od.unit_price) as total_amount,
        COUNT(DISTINCT o.customer_id) as customer_count
    FROM orders o
    JOIN order_details od ON o.order_id = od.order_id
    JOIN products p ON od.product_id = p.product_id
    WHERE YEAR(o.order_date) = report_year
      AND MONTH(o.order_date) = report_month
    GROUP BY p.category;
END;
```

### 示例3：批量数据处理
```sql
CREATE PROCEDURE archive_old_orders(
    IN cutoff_date DATE,
    OUT archived_count INT
)
BEGIN
    DECLARE batch_size INT DEFAULT 1000;
    DECLARE affected_rows INT DEFAULT 1;
    DECLARE total_archived INT DEFAULT 0;
    
    -- 创建临时表
    CREATE TEMPORARY TABLE temp_old_orders 
    SELECT order_id FROM orders 
    WHERE order_date < cutoff_date 
    LIMIT 10000;
    
    -- 分批归档
    WHILE affected_rows > 0 DO
        START TRANSACTION;
        
        -- 将订单移到历史表
        INSERT INTO orders_history
        SELECT o.* FROM orders o
        JOIN temp_old_orders t ON o.order_id = t.order_id
        LIMIT batch_size;
        
        -- 删除已归档的订单
        DELETE o FROM orders o
        JOIN temp_old_orders t ON o.order_id = t.order_id
        LIMIT batch_size;
        
        -- 从临时表中删除已处理的
        DELETE FROM temp_old_orders 
        LIMIT batch_size;
        
        SET affected_rows = ROW_COUNT();
        SET total_archived = total_archived + affected_rows;
        
        COMMIT;
        
        -- 暂停一下，避免锁表太久
        DO SLEEP(0.1);
    END WHILE;
    
    DROP TEMPORARY TABLE temp_old_orders;
    SET archived_count = total_archived;
END;
```

---

## 十、调试与优化技巧

### 1. 调试技巧
```sql
CREATE PROCEDURE debug_procedure()
BEGIN
    -- 使用 SELECT 输出调试信息
    SELECT '步骤1：开始执行' AS debug_info;
    
    -- 使用用户变量记录状态
    SET @debug_step = 1;
    
    -- 使用 SIGNAL 抛出信息
    SIGNAL SQLSTATE '01000'
    SET MESSAGE_TEXT = '处理完成一半';
    
    -- 使用 GET DIAGNOSTICS 获取错误信息
    DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
        GET DIAGNOSTICS CONDITION 1
            @errno = MYSQL_ERRNO,
            @errmsg = MESSAGE_TEXT;
        SELECT @errno, @errmsg;
    END;
END;
```

### 2. 性能优化
- 避免在循环中执行 SQL 查询
- 使用批量操作代替逐行操作
- 合理使用索引
- 控制事务大小
- 避免使用游标（如果可能）

---

## 十一、最佳实践与注意事项

### 最佳实践：
1. 命名规范：使用有意义的名称，如 `sp_业务_操作`
2. 参数验证：始终验证输入参数
3. 错误处理：包含完整的异常处理
4. 注释：添加清晰的注释说明
5. 版本控制：将存储过程代码纳入版本管理
6. 权限控制：使用最小必要权限原则

### 注意事项：
1. 存储过程过多会增加数据库耦合度
2. 调试相对困难
3. 版本迁移可能复杂
4. 可能会影响数据库性能（如果设计不当）
5. 必须有执行权限：`CREATE ROUTINE` 权限
6. 名称唯一：同一数据库内存储过程名称不能重复
7. DELIMITER 必须配对使用：开始和结束都要写
8. BEGIN END 可省略：只有一条语句时可以省略
9. 括号不能省略：即使没有参数，`()` 也必须写

---

## 十二、存储过程 vs 函数 vs 视图

| 特性 | 存储过程 | 函数 | 视图 |
|------|---------|------|------|
| 返回值 | 可以有多个OUT参数 | 必须有且只有一个返回值 | 返回结果集 |
| 调用方式 | CALL | SELECT | SELECT |
| 事务支持 | 支持 | 不支持 | 不支持 |
| DML操作 | 支持 | 不支持 | 通常不支持 |
| 用途 | 执行操作 | 计算值 | 简化查询 |

---

## 十三、实战练习题目

### 题目1：员工管理系统
创建一个存储过程，实现以下功能：
- 输入：部门ID
- 输出：该部门员工平均工资、最高工资、最低工资
- 同时返回员工列表

### 题目2：订单处理系统
创建一个存储过程，处理新订单：
1. 验证商品库存
2. 扣除库存
3. 创建订单记录
4. 创建订单详情
5. 更新销售统计
6. 使用事务确保一致性

### 题目3：数据清理任务
创建一个定时执行的存储过程：
- 将6个月前的订单归档到历史表
- 删除已归档的订单
- 记录清理日志
- 支持分批处理避免锁表