---
title: 存储函数
description: 介绍存储函数的基本概念、特点与作用，创建、调用、修改和删除存储函数的方法，以及存储过程与存储函数的区别。
keywords: [MySQL, 存储函数, CREATE FUNCTION, RETURNS, RETURN, DROP FUNCTION, 存储过程区别, 对口升学]
sidebar_label: 5.4 存储函数
sidebar_position: 4
slug: /mysql/ch05/4-stored-function
tags: [MySQL, 第五章, 数据库对象管理, 对口升学]
---

## 知识点

### 5.4.1 存储函数的基本概念

**存储函数（Stored Function）**是存储在数据库中的一组 SQL 语句集合，**必须返回一个值**。

- **特点**：
  1. 用 `CREATE FUNCTION` 创建，用 `SELECT` 调用；
  2. 必须声明返回类型（`RETURNS`）并用 `RETURN` 返回一个值；
  3. 参数只能是 `IN` 类型（默认），不能指定 `OUT`/`INOUT`；
  4. 函数体中可以调用函数，但不能调用存储过程；
  5. 可像内置函数一样出现在 SQL 语句中。
- **作用**：封装计算逻辑、简化 SQL 语句、提高代码复用性。

### 5.4.2 存储函数的操作

**创建**：

```sql
DELIMITER //
CREATE FUNCTION 函数名([参数列表])
RETURNS 返回类型
[特性 ...]
BEGIN
    -- 函数体
    RETURN 返回值;
END //
DELIMITER ;
```

**示例**：

```sql
DELIMITER //
CREATE FUNCTION fn_age_group(p_age INT)
RETURNS VARCHAR(10)
DETERMINISTIC
BEGIN
    IF p_age >= 18 THEN
        RETURN '成年';
    ELSE
        RETURN '未成年';
    END IF;
END //
DELIMITER ;
```

**调用**：

```sql
SELECT fn_age_group(20);                       -- 直接调用
SELECT sname, fn_age_group(sage) FROM students; -- 在 SQL 语句中调用
```

> 存储函数用 `SELECT` 调用，这一点与存储过程用 `CALL` 调用不同。

**修改**：

```sql
ALTER FUNCTION 函数名 [特性 ...];
-- 只能修改特性，不能修改函数体
```

**查看**：

```sql
SHOW FUNCTION STATUS;
SHOW CREATE FUNCTION 函数名;
```

**删除**：

```sql
DROP FUNCTION [IF EXISTS] 函数名;
```

> 创建函数时若报错 `log_bin_trust_function_creators`，需先设置 `SET GLOBAL log_bin_trust_function_creators = 1;`（了解即可）。

### 5.4.3 存储过程与存储函数的区别

| 比较项 | 存储过程 | 存储函数 |
| --- | --- | --- |
| **调用方式** | 用 `CALL` 语句调用 | 用 `SELECT` 语句调用，可嵌入 SQL |
| **返回结果** | 可返回多个值（通过 `OUT`/`INOUT` 参数）或结果集，也可不返回 | **必须有且仅有一个返回值** |
| **参数类型** | 支持 `IN`、`OUT`、`INOUT` | 只有 `IN` 参数 |
| **返回类型声明** | 不需要 | 必须用 `RETURNS` 声明，用 `RETURN` 返回 |
| **在 SQL 中使用** | 不能直接出现在 SQL 语句中 | 可像内置函数一样出现在 SQL 中 |
| **应用场景** | 执行复杂操作、批量处理、多结果返回 | 计算并返回一个值、参与查询表达式 |
| **创建语句** | `CREATE PROCEDURE` | `CREATE FUNCTION` |

## 考点提示

- 高频考点：存储函数必须有返回值（`RETURNS` + `RETURN`），用 `SELECT` 调用。
- 易错点：存储函数**只能有 IN 参数**，不能像存储过程那样使用 OUT/INOUT。
- 存储过程 vs 存储函数的区别（调用方式、返回值、参数）是常考简答题，建议按上表记忆。
