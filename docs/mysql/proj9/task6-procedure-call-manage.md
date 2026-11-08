---
title: 任务六 调用与管理存储过程
description: 数据库原理与应用技术《MySQL》项目九 数据库编程 任务六 调用与管理存储过程知识点总结。涵盖CALL调用存储过程、ALTER PROCEDURE修改特性、SHOW PROCEDURE STATUS查看存储过程、SHOW CREATE PROCEDURE查看源码、DROP PROCEDURE删除存储过程等核心知识点。
keywords: [MySQL, CALL, 调用存储过程, ALTER PROCEDURE, SHOW PROCEDURE STATUS, SHOW CREATE PROCEDURE, DROP PROCEDURE, 存储过程管理, 对口升学]
sidebar_label: 任务六 调用与管理存储过程
sidebar_position: 6
slug: /mysql/proj9/task6-procedure-call-manage
tags: [MySQL, 项目九, 任务六, 对口升学]
---

## 知识点

### 1. 如何调用存储过程？

答：使用CALL语句调用存储过程，语法格式：

```sql
CALL <存储过程名(实参列表)>;
```

如果存储过程没有参数，可以省略括号：`CALL select_pro;`
如果有参数，需要传入对应的实参：`CALL param_pro(20220109, @num, @p_gra);`

### 2. 如何修改存储过程的特性？

答：使用ALTER PROCEDURE语句修改存储过程的特性，语法格式：

```sql
ALTER PROCEDURE <过程名> [characteristic ...];
```

characteristic参数指定存储过程的特性，可取值包括：
- `CONTAINS SQL`：子程序包含SQL语句，但不包含读或写数据的语句
- `NO SQL`：子程序不包含SQL语句
- `READS SQL DATA`：子程序包含读数据的语句
- `MODIFIES SQL DATA`：子程序包含写数据的语句
- `SQL SECURITY {DEFINER | INVOKER}`：指明谁有权限执行
- `COMMENT 'string'`：注释

注意：ALTER PROCEDURE只能修改存储过程的特性，不能修改过程体。如需修改过程体，需要先删除再重新创建。

### 3. 如何查看存储过程？

答：查看存储过程有以下方式：
- `SHOW PROCEDURE STATUS;`：显示系统中所有的存储过程
- `SHOW PROCEDURE STATUS WHERE DB = '数据库名';`：显示特定数据库的存储过程
- `SHOW PROCEDURE STATUS WHERE NAME LIKE '通配符表达式';`：显示名称匹配的存储过程
- `SHOW CREATE PROCEDURE <存储过程名>;`：显示存储过程的源码（创建语句）

### 4. SHOW PROCEDURE STATUS的输出包含哪些信息？

答：SHOW PROCEDURE STATUS的输出包含：Db（数据库名）、Name（存储过程名）、Type（类型）、Definer（定义者）、Modified（修改时间）、Created（创建时间）、Security_type（安全类型）、Comment（注释）、character_set_client（客户端字符集）、collation_connection（连接校对规则）、Database Collation（数据库校对规则）等字段。

### 5. SHOW CREATE PROCEDURE的作用是什么？

答：`SHOW CREATE PROCEDURE <存储过程名>;` 用于显示指定存储过程的完整创建语句（源码），包括CREATE PROCEDURE语句的完整定义、参数列表、过程体中的所有SQL语句等。这是查看存储过程详细定义最直接的方式。

### 6. 如何删除存储过程？

答：使用DROP PROCEDURE语句删除存储过程，语法格式：

```sql
DROP PROCEDURE [IF EXISTS] <存储过程名>;
```

例如：`DROP PROCEDURE IF EXISTS param_pro;` 删除param_pro存储过程。使用IF EXISTS可以避免存储过程不存在时报错。

### 7. 修改存储过程特性的示例是什么？

答：将存储过程param_pro的读写权限改为MODIFIES SQL DATA，并指定调用者可以执行：

```sql
ALTER PROCEDURE param_pro
MODIFIES SQL DATA
SQL SECURITY INVOKER;
```

- `MODIFIES SQL DATA`：表示该存储过程包含写数据的语句
- `SQL SECURITY INVOKER`：表示调用者可以执行（默认是DEFINER，只有定义者才能执行）

### 8. SQL SECURITY中DEFINER和INVOKER有什么区别？

答：
- **DEFINER**：只有定义该存储过程的用户才能执行，以定义者的权限执行
- **INVOKER**：调用者可以执行，以调用者的权限执行

默认为DEFINER。如果希望任何有访问权限的用户都能调用存储过程，可以设置为INVOKER。

### 9. 存储过程的完整管理流程是什么？

答：存储过程的完整管理流程：
1. **创建**：`CREATE PROCEDURE 过程名(参数) BEGIN ... END;`
2. **调用**：`CALL 过程名(实参);`
3. **查看**：`SHOW PROCEDURE STATUS;` 或 `SHOW CREATE PROCEDURE 过程名;`
4. **修改特性**：`ALTER PROCEDURE 过程名 characteristic;`
5. **删除**：`DROP PROCEDURE [IF EXISTS] 过程名;`

注意：修改只能改变特性，不能改变过程体。如需改变过程体，先删除再重新创建。

### 10. 存储过程和存储函数有什么区别？

答：存储过程和存储函数的主要区别：
- **参数类型**：存储过程支持IN、OUT、INOUT三种参数；存储函数默认只有IN类型参数，不能设置OUT和INOUT
- **返回值**：存储过程不直接返回值，通过OUT/INOUT参数输出；存储函数必须包含RETURNS语句声明返回值类型，并通过RETURN返回一个值
- **调用方式**：存储过程使用CALL调用；存储函数使用SELECT调用，与MySQL内部函数调用方式相同
- **使用场景**：存储过程适合执行操作（增删改）；存储函数适合计算并返回单个值
