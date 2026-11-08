---
title: 任务七 存储函数
description: 数据库原理与应用技术《MySQL》项目九 数据库编程 任务七 存储函数知识点总结。涵盖存储函数的概念与存储过程区别、CREATE FUNCTION语法、RETURNS返回值、SELECT调用存储函数、SHOW FUNCTION STATUS、SHOW CREATE FUNCTION查看、ALTER FUNCTION修改特性、DROP FUNCTION删除等核心知识点。
keywords: [MySQL, 存储函数, CREATE FUNCTION, RETURNS, RETURN, SELECT调用函数, SHOW FUNCTION STATUS, SHOW CREATE FUNCTION, ALTER FUNCTION, DROP FUNCTION, 对口升学]
sidebar_label: 任务七 存储函数
sidebar_position: 7
slug: /mysql/proj9/task7-stored-function
tags: [MySQL, 项目九, 任务七, 对口升学]
---


## 知识点

### 1. 什么是存储函数？与MySQL内部函数有什么区别？

答：MySQL支持自定义函数（存储函数），定义好之后，调用方式与调用MySQL预定义的系统函数一样。用户自己定义的存储函数与MySQL内部函数是一个性质的，区别在于：存储函数是用户自己定义的，而内部函数是MySQL的开发者定义的。

### 2. 存储函数与存储过程有什么区别？

答：存储函数与存储过程的主要区别：
- **参数类型**：存储函数默认IN类型参数，不能设置OUT和INOUT参数；存储过程支持IN、OUT、INOUT三种
- **返回值**：存储函数头部必须用RETURNS声明返回值类型，函数体内通过RETURN语句返回一个值；存储过程不要求返回值
- **调用方式**：存储函数使用SELECT调用（如 `SELECT 函数名(参数)`）；存储过程使用CALL调用
- **使用场景**：存储函数适合计算并返回单个值；存储过程适合执行复杂操作

### 3. CREATE FUNCTION语句的语法格式是什么？

答：CREATE FUNCTION语句的语法格式：

```sql
CREATE FUNCTION <函数名>([<参数名> 数据类型[, ...]])
RETURNS <返回类型>
BEGIN
    <过程体>
END;
```

注意：
- 存储函数默认IN类型参数，不能设置OUT和INOUT类型参数
- RETURNS子句声明返回值类型只能在存储函数中使用
- 一个存储函数必须包含一个RETURNS语句
- 过程体中必须包含RETURN语句返回值

### 4. 如何创建无参数的存储函数？请举例说明。

答：创建无参数存储函数示例，查询学号为"20220101"的学生地址：

```sql
CREATE FUNCTION add_fun()
RETURNS VARCHAR(255)
BEGIN
    RETURN(
        SELECT Address FROM student WHERE StuID = '20220101'
    );
END;
```

该函数无参数，返回类型为VARCHAR(255)，通过RETURN返回查询结果。

### 5. 如何创建带参数的存储函数？请举例说明。

答：创建带参数存储函数示例，查询指定年龄的学生数量：

```sql
CREATE FUNCTION agecount_fun(age INT)
RETURNS INT
BEGIN
    RETURN(
        SELECT COUNT(*) FROM student WHERE Stuage = age
    );
END;
```

该函数接收一个INT类型的age参数，返回INT类型的学生数量。

### 6. 如何调用存储函数？

答：存储函数的调用方法与MySQL内部函数一样，使用SELECT语句调用，语法格式：

```sql
SELECT <函数名(实参列表)>;
```

例如：
- `SELECT add_fun();`：调用无参数的存储函数
- `SELECT agecount_fun(16);`：调用带参数的存储函数，查询年龄为16岁的学生数量

### 7. 查看存储函数有哪几种方式？

答：查看存储函数有三种方式：
- `SHOW FUNCTION STATUS [LIKE '<函数名>'];`：查看存储函数的状态
- `SHOW CREATE FUNCTION <函数名>;`：查看存储函数的定义（创建语句）
- `SELECT * FROM information_schema.Routines WHERE ROUTINE_NAME='函数名';`：从信息模式表中查看

### 8. SHOW FUNCTION STATUS的作用是什么？

答：`SHOW FUNCTION STATUS;` 用于查看系统中所有存储函数的状态信息，输出包含Db（数据库名）、Name（函数名）、Type（类型）、Definer（定义者）、Modified（修改时间）、Created（创建时间）、Security_type（安全类型）等字段。

可以使用LIKE过滤：`SHOW FUNCTION STATUS LIKE 'add_fun';` 查看特定名称的存储函数。

### 9. SHOW CREATE FUNCTION的作用是什么？

答：`SHOW CREATE FUNCTION <函数名>;` 用于查看指定存储函数的完整创建语句（定义文本），包括CREATE FUNCTION语句的完整定义、参数列表、RETURNS返回类型、过程体中的所有SQL语句等。

### 10. information_schema.Routines表的作用是什么？

答：MySQL中的存储过程和存储函数的信息都存储在 `information_schema.Routines` 表中，可以通过查询该表来获取存储函数的详细信息：

```sql
SELECT * FROM information_schema.Routines WHERE ROUTINE_NAME='add_fun';
```

该表包含SPECIFIC_NAME、ROUTINE_SCHEMA、ROUTINE_NAME、ROUTINE_TYPE（FUNCTION或PROCEDURE）、DATA_TYPE等字段。

### 11. 如何修改存储函数的特性？

答：使用ALTER FUNCTION语句修改存储函数的特性，语法格式：

```sql
ALTER FUNCTION <函数名> [characteristic ...];
```

characteristic参数与存储过程相同，包括：CONTAINS SQL、NO SQL、READS SQL DATA、MODIFIES SQL DATA、SQL SECURITY `{DEFINER|INVOKER}`、COMMENT 'string'。

注意：ALTER FUNCTION只能修改特性，不能修改函数体。如需修改函数体，需要先删除再重新创建。

### 12. 如何删除存储函数？

答：使用DROP FUNCTION语句删除存储函数，语法格式：

```sql
DROP FUNCTION [IF EXISTS] <函数名>;
```

例如：`DROP FUNCTION IF EXISTS add_fun;` 删除add_fun存储函数。使用IF EXISTS可以避免函数不存在时报错。

### 13. 存储函数的完整管理流程是什么？

答：存储函数的完整管理流程：
1. **创建**：`CREATE FUNCTION 函数名(参数) RETURNS 类型 BEGIN ... RETURN(值); END;`
2. **调用**：`SELECT 函数名(实参);`
3. **查看**：`SHOW FUNCTION STATUS;` 或 `SHOW CREATE FUNCTION 函数名;`
4. **修改特性**：`ALTER FUNCTION 函数名 characteristic;`
5. **删除**：`DROP FUNCTION [IF EXISTS] 函数名;`

### 14. 存储函数修改特性的示例是什么？

答：修改存储函数add_fun的特性，将读写权限改为READS SQL DATA，并加上注释信息：

```sql
ALTER FUNCTION add_fun
READS SQL DATA
COMMENT 'FIND ADDRESS';
```

修改后可以通过 `SHOW CREATE FUNCTION add_fun;` 查看修改后的结果，会显示更新后的特性和注释信息。
