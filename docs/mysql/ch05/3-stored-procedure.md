---
title: 存储过程
description: 介绍存储过程的基本概念、特点与作用，存储过程的构成（过程体、IN/OUT/INOUT 参数、基本程序结构），以及创建、调用、修改和删除操作。
keywords: [MySQL, 存储过程, CREATE PROCEDURE, CALL, IN, OUT, INOUT, 过程体, DROP PROCEDURE, 对口升学]
sidebar_label: 5.3 存储过程
sidebar_position: 3
slug: /mysql/ch05/3-stored-procedure
tags: [MySQL, 第五章, 数据库对象管理, 对口升学]
---

## 知识点

### 5.3.1 存储过程的基本概念

**存储过程（Stored Procedure）**是一组**预编译并存储在数据库中的 SQL 语句集合**，通过指定名称调用执行。

- **特点**：预编译、可重复调用、存储在服务器端、可接受参数、可返回结果集；
- **作用**：
  1. 提高执行效率（预编译，减少网络传输）；
  2. 封装复杂业务逻辑，简化客户端程序；
  3. 增强安全性（通过权限控制调用）；
  4. 减少应用程序与数据库之间的交互次数；
  5. 便于维护和复用。

### 5.3.2 存储过程的构成

#### （1）存储过程体

存储过程体是包含在 `BEGIN ... END` 之间的一组 SQL 语句。当过程体只有一条语句时，`BEGIN ... END` 可省略。

#### （2）参数类型

| 参数类型 | 说明 |
| --- | --- |
| `IN` | **输入参数**（默认），调用时传入值，过程内部使用 |
| `OUT` | **输出参数**，过程内部赋值，调用后返回给调用者，初始值为 NULL |
| `INOUT` | **输入输出参数**，既可传入又可返回 |

#### （3）基本程序结构

```sql
DELIMITER //   -- 修改结束符，避免与过程体中的分号冲突

CREATE PROCEDURE 过程名([参数列表])
[特性 ...]
BEGIN
    -- 变量声明
    DECLARE 变量名 数据类型 [DEFAULT 默认值];
    -- 赋值
    SET 变量名 = 值;
    -- SQL 语句
    SELECT ... INTO 变量名 ...;
    -- 流程控制
    IF 条件 THEN 语句; [ELSEIF 条件 THEN 语句;] [ELSE 语句;] END IF;
    CASE ... WHEN ... THEN ... [ELSE ...] END CASE;
    WHILE 条件 DO 语句; END WHILE;
    REPEAT 语句; UNTIL 条件 END REPEAT;
    LOOP 语句; ... LEAVE 标签; END LOOP;
END //

DELIMITER ;    -- 恢复结束符
```

**示例**：

```sql
DELIMITER //
CREATE PROCEDURE proc_get_age(IN p_sno CHAR(10), OUT p_age INT)
BEGIN
    SELECT sage INTO p_age FROM students WHERE sno = p_sno;
END //
DELIMITER ;
```

### 5.3.3 存储过程的操作

**创建**：`CREATE PROCEDURE`（需 `CREATE ROUTINE` 权限）

**调用**：

```sql
CALL proc_get_age('001', @age);
SELECT @age;
```

**修改存储过程**：

```sql
ALTER PROCEDURE 过程名 [特性 ...];
-- 只能修改特性，不能修改过程体；
-- 若要修改过程体，需先 DROP 再 CREATE（或使用 CREATE OR REPLACE）。
```

**查看存储过程**：

```sql
SHOW PROCEDURE STATUS [WHERE Db = '数据库名'];
SHOW CREATE PROCEDURE 过程名;
```

**删除存储过程**：

```sql
DROP PROCEDURE [IF EXISTS] 过程名;
```

**常见特性**：`COMMENT '说明'`、`SQL SECURITY DEFINER/INVOKER`、`DETERMINISTIC`、`NO SQL`、`READS SQL DATA`、`MODIFIES SQL DATA`。

## 考点提示

- 高频考点：存储过程的概念与特点；`IN`、`OUT`、`INOUT` 三类参数的含义；`CALL` 调用语法。
- 易错点：`DELIMITER` 用于修改语句结束符，不是 SQL 标准语句；`ALTER PROCEDURE` **不能**修改过程体。
- `OUT` 参数在调用时用 `@变量名` 接收，常有代码填空题。
