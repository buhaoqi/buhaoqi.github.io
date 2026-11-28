---
title: 触发器
description: 介绍触发器的基本概念、作用与使用原则，触发器的分类（BEFORE/AFTER、INSERT/UPDATE/DELETE），以及创建、删除和应用方法。
keywords: [MySQL, 触发器, TRIGGER, BEFORE, AFTER, INSERT, UPDATE, DELETE, NEW, OLD, 对口升学]
sidebar_label: 5.5 触发器
sidebar_position: 5
slug: /mysql/ch05/5-trigger
tags: [MySQL, 第五章, 数据库对象管理, 对口升学]
---

## 知识点

### 5.5.1 触发器的基本概念

**触发器（Trigger）**是与表相关联的**数据库对象**，当对该表执行 `INSERT`、`UPDATE`、`DELETE` 操作时，MySQL 会**自动触发并执行**预先定义的一组 SQL 语句。

- 触发器由**事件**触发，不需要手工调用；
- 触发器定义在特定表上，属于某个数据库；
- **作用**：
  1. 自动执行审计、日志记录；
  2. 维护数据一致性，实现复杂的完整性约束；
  3. 自动生成派生字段值；
  4. 级联修改相关表的数据。
- **使用原则**：
  1. 触发器不宜过多，避免逻辑复杂、性能下降；
  2. 避免在触发器中再修改同一表，防止递归；
  3. 触发器中不能使用 `START TRANSACTION`、`COMMIT`、`ROLLBACK`；
  4. 触发器对用户是"透明"的，容易被忽略，应注意文档说明。

### 5.5.2 触发器的分类

#### （1）按触发时机分类

| 类型 | 说明 |
| --- | --- |
| `BEFORE` | 在触发事件**之前**执行，可用于数据检查、修正 |
| `AFTER` | 在触发事件**之后**执行，常用于记录日志、级联修改 |

#### （2）按触发事件分类

| 类型 | 说明 | 可用变量 |
| --- | --- | --- |
| `INSERT` | 插入记录时触发 | `NEW` 表示新插入的记录 |
| `UPDATE` | 修改记录时触发 | `OLD` 表示修改前的记录，`NEW` 表示修改后的记录 |
| `DELETE` | 删除记录时触发 | `OLD` 表示被删除的记录 |

> 每张表的每种触发事件（如 `BEFORE INSERT`）在同一时间只能有一个触发器。

### 5.5.3 触发器的操作

**创建**：

```sql
CREATE TRIGGER 触发器名
{BEFORE | AFTER} {INSERT | UPDATE | DELETE}
ON 表名
FOR EACH ROW
BEGIN
    -- 触发器体
END;
```

> `FOR EACH ROW` 表示**行级触发**，即每影响一行就执行一次触发器体（MySQL 仅支持行级触发）。

**示例 1**：插入学生时自动记录日志

```sql
DELIMITER //
CREATE TRIGGER tri_stu_insert AFTER INSERT ON students
FOR EACH ROW
BEGIN
    INSERT INTO stu_log (sno, action, log_time)
    VALUES (NEW.sno, 'INSERT', NOW());
END //
DELIMITER ;
```

**示例 2**：删除学生前备份到历史表

```sql
DELIMITER //
CREATE TRIGGER tri_stu_delete BEFORE DELETE ON students
FOR EACH ROW
BEGIN
    INSERT INTO stu_history (sno, sname)
    VALUES (OLD.sno, OLD.sname);
END //
DELIMITER ;
```

**查看触发器**：

```sql
SHOW TRIGGERS;
SHOW CREATE TRIGGER 触发器名;
SELECT * FROM information_schema.TRIGGERS;
```

**删除触发器**：

```sql
DROP TRIGGER [IF EXISTS] [数据库名.]触发器名;
```

> 删除表时，该表上的触发器也会被自动删除。

## 考点提示

- 高频考点：触发器的六个类型组合（BEFORE/AFTER × INSERT/UPDATE/DELETE）；`NEW` 与 `OLD` 的含义。
- 易错点：`INSERT` 触发器中只有 `NEW`，`DELETE` 触发器中只有 `OLD`，`UPDATE` 两者都有。
- 触发器是**自动执行**的，不能用 `CALL` 调用；`FOR EACH ROW` 表示行级触发。
