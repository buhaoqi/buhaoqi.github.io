---
title: 任务五 存储过程概述与创建
description: 数据库原理与应用技术《MySQL》项目九 数据库编程 任务五 存储过程概述与创建知识点总结。涵盖存储过程的概念、特点（封装性/效率/可重用/功能强大）、作用、CREATE PROCEDURE语法、IN/OUT/INOUT参数类型、流程控制语句（IF/CASE/LOOP/LEAVE/ITERATE/REPEAT/WHILE）等核心知识点。
keywords: [MySQL, 存储过程, CREATE PROCEDURE, IN, OUT, INOUT, 流程控制, IF语句, CASE语句, LOOP, REPEAT, WHILE, 对口升学]
sidebar_label: 任务五 存储过程概述与创建
sidebar_position: 5
slug: /mysql/proj9/task5-procedure-overview-create
tags: [MySQL, 项目九, 任务五, 对口升学]
---

## 知识点

### 1. 什么是存储过程？

答：存储过程是一组为了完成特定功能的SQL语句集合。使用存储过程的目的是将常用或复杂的工作预先用SQL语句写好并用一个指定名称存储起来，这个过程经编译和优化后存储在数据库服务器中，因此称为存储过程。存储过程就像是程序中的子程序，存储在数据库中。

### 2. 存储过程有哪些特点？

答：存储过程的特点包括：
- **封装性**：将一组SQL语句组合成一个功能，提高了对数据库的封装性和安全性，避免不当操作
- **执行效率高**：存储过程在创建时被编译成二进制代码，执行时直接调用二进制代码，效率非常高
- **可重用性**：存储过程可以被多次调用，增加了可重用性
- **功能强大**：存储过程是SQL语句的高级应用，可以实现数据库的复杂操作

### 3. 存储过程的作用是什么？

答：存储过程的作用包括：
- 通过把处理封装在容易使用的单元中，简化复杂的操作
- 简化对变动的管理
- 有助于提高应用程序的性能
- 有助于减少应用程序和数据库服务器之间的流量，只需发送存储过程的名称和参数
- 可增强SQL语句的功能和灵活性，使MySQL能完成复杂的判断和运算
- 可提高数据库的安全性和数据的完整性

### 4. CREATE PROCEDURE语句的语法格式是什么？

答：CREATE PROCEDURE语句的语法格式：

```sql
CREATE PROCEDURE <过程名>([IN|OUT|INOUT] 参数名 数据类型[, ...]) [特性...]
BEGIN
    <过程体>
END;
```

参数说明：
- 过程名在当前数据库中唯一
- IN/OUT/INOUT指定参数的输入输出类型
- 过程体包含若干SQL语句或流程控制语句，用BEGIN…END包裹

### 5. 存储过程的三种参数类型有什么区别？

答：
- **IN输入参数**：表示调用者向过程传值（传入值可以是字面量或变量）
- **OUT输出参数**：表示过程向调用者传出值，可以返回多个值（传出值只能是变量）
- **INOUT输入输出参数**：既表示调用者向过程传入值，又表示过程向调用者传出值（值只能是变量）

### 6. MySQL存储过程中有哪些流程控制语句？

答：MySQL中用来构造流程控制的语句有：
- **IF语句**：条件判断
- **CASE语句**：多条件分支判断
- **LOOP语句**：循环执行
- **LEAVE语句**：跳出循环
- **ITERATE语句**：跳到循环开头
- **REPEAT语句**：条件循环（先执行后判断）
- **WHILE语句**：条件循环（先判断后执行）

每个流程可以包含单独的语句或使用BEGIN…END构造复杂语句，可以被嵌套。

### 7. IF语句的语法格式是什么？

答：IF语句的语法格式：

```sql
IF expr_condition THEN statement_list
    [ELSEIF expr_condition THEN statement_list]
    [ELSE statement_list]
END IF;
```

所有IF语句都需要用END IF结束，THEN中执行，ELSEIF和ELSE是可选的。例如：

```sql
IF val IS NULL THEN SELECT 'val is NULL';
ELSE SELECT 'val is not NULL';
END IF;
```

### 8. CASE语句有哪两种格式？

答：CASE语句有两种格式：

**第一种格式**（值匹配）：
```sql
CASE case_expr
    WHEN when_value THEN statement_list
    [WHEN when_value THEN statement_list]
    [ELSE statement_list]
END CASE;
```

**第二种格式**（条件判断）：
```sql
CASE
    WHEN expr_condition THEN statement_list
    [WHEN expr_condition THEN statement_list]
    [ELSE statement_list]
END CASE;
```

注意：存储过程中的CASE语句不能有ELSE NULL子句，用END CASE结束。

### 9. LOOP语句和LEAVE语句的语法格式是什么？

答：LOOP语句创建一个循环，不进行条件判断，一直重复执行直到使用LEAVE退出：

```sql
[loop_label:] LOOP
    statement_list
END LOOP [loop_label];
```

LEAVE用于跳出循环：`LEAVE label;`

例如：
```sql
DECLARE id INT DEFAULT 0;
add_loop: LOOP
    SET id = id + 1;
    IF id >= 10 THEN LEAVE add_loop;
    END IF;
END LOOP add_loop;
```

### 10. ITERATE语句的作用是什么？

答：ITERATE语句用于将执行顺序转到语句段的开头处（相当于其他语言中的continue），语法：`ITERATE label;`。ITERATE只可以出现在LOOP、REPEAT和WHILE语句中。

例如：当p1`<`10时跳到循环开头（不执行后续语句），p1`>`20时退出循环，否则执行中间的语句。

### 11. REPEAT语句的语法格式是什么？

答：REPEAT语句创建带条件判断的循环，先执行语句再判断条件，条件为真则结束循环：

```sql
[repeat_label:] REPEAT
    statement_list
    UNTIL expr_condition
END REPEAT [repeat_label];
```

例如：
```sql
DECLARE id INT DEFAULT 0;
REPEAT
    SET id = id + 1;
    UNTIL id >= 10
END REPEAT;
```

### 12. WHILE语句的语法格式是什么？与REPEAT有什么区别？

答：WHILE语句创建带条件判断的循环，先判断条件再执行，条件为真则执行循环：

```sql
[while_label:] WHILE expr_condition DO
    statement_list
END WHILE [while_label];
```

**WHILE与REPEAT的区别**：
- **WHILE**：先判断条件，条件为真时执行循环体，条件为假时退出
- **REPEAT**：先执行循环体，再判断条件，条件为真时退出

即WHILE是"当型循环"（可能一次都不执行），REPEAT是"直到型循环"（至少执行一次）。

### 13. 如何创建一个简单的存储过程？请举例说明。

答：创建存储过程示例，查询每个学生的学号、姓名、专业、班主任工号等信息：

```sql
CREATE PROCEDURE select_pro()
BEGIN
    SELECT student.StuID, student.Stuname, student.Speciality,
           student.Classteacher, teacher.TeaID, teacher.Department
    FROM student JOIN teacher ON student.Classteacher = teacher.Teaname;
END;
```

该存储过程无参数，封装了一个多表连接查询，调用时直接执行查询并返回结果。

### 14. 如何创建带参数的存储过程？请举例说明。

答：创建带IN、OUT、INOUT参数的存储过程示例：

```sql
CREATE PROCEDURE param_pro(IN id INT, OUT num INT, INOUT p_gra INT)
BEGIN
    DELETE FROM score WHERE StuID = id;
    SELECT MAX(Grade) FROM score INTO num;
    SELECT COUNT(*) INTO p_gra FROM score WHERE Grade > p_gra;
END;
```

调用方式：
```sql
SET @p_gra = 80;
CALL param_pro(20220109, @num, @p_gra);
SELECT @num, @p_gra;
```

该存储过程通过IN参数id删除指定学生成绩，通过OUT参数num返回最高分，通过INOUT参数p_gra既作为查询条件又返回结果。
