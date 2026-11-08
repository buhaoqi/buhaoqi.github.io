---
title: 任务二 查看与删除触发器
description: 数据库原理与应用技术《MySQL》项目九 数据库编程 任务二 查看与删除触发器知识点总结。涵盖SHOW TRIGGERS查看所有触发器、SHOW CREATE TRIGGER查看触发器定义、information_schema.TRIGGERS查询触发器详情、DROP TRIGGER删除触发器等核心知识点。
keywords: [MySQL, 查看触发器, SHOW TRIGGERS, SHOW CREATE TRIGGER, information_schema.TRIGGERS, DROP TRIGGER, 删除触发器, 对口升学]
sidebar_label: 任务二 查看与删除触发器
sidebar_position: 2
slug: /mysql/proj9/task2-trigger-view-drop
tags: [MySQL, 项目九, 任务二, 对口升学]
---

## 知识点

### 1. 查看触发器有哪几种方式？

答：MySQL中查看触发器有三种方式：
- `SHOW TRIGGERS;`：查看当前数据库的所有触发器
- `SHOW CREATE TRIGGER 触发器名;`：查看当前数据库中某个特定触发器的定义
- `SELECT * FROM information_schema.TRIGGERS;`：查看TRIGGERS数据表中的触发器信息

### 2. SHOW TRIGGERS语句的作用是什么？

答：`SHOW TRIGGERS;` 语句用于查看当前数据库中所有已创建的触发器信息。执行后会显示触发器的名称、触发事件（Event）、触发时间（Timing）、关联的表（Table）、触发器类型（Type）等详细信息。如果不指定数据库，则显示当前数据库中的所有触发器。

### 3. SHOW CREATE TRIGGER语句的作用是什么？

答：`SHOW CREATE TRIGGER 触发器名;` 用于查看指定触发器的创建语句（定义文本），即创建该触发器时使用的完整CREATE TRIGGER语句。通过该语句可以了解触发器的完整定义，包括触发时间、触发事件、关联表和触发器主体等。

### 4. information_schema.TRIGGERS表的作用是什么？

答：`information_schema.TRIGGERS` 是MySQL系统数据库中的一个信息模式表，存储了所有数据库中触发器的详细信息。通过 `SELECT * FROM information_schema.TRIGGERS;` 可以查询所有触发器的完整信息，包括触发器名称、定义语句、关联表、触发事件、触发时间、创建时间等。可以使用WHERE子句过滤特定触发器。

### 5. DROP TRIGGER语句的语法格式是什么？

答：删除触发器使用DROP TRIGGER语句，语法格式：

```sql
DROP TRIGGER [IF EXISTS] 触发器名;
```

例如：`DROP TRIGGER stu_beforeinsert;` 删除名为stu_beforeinsert的触发器。

### 6. 删除触发器时需要注意什么？

答：删除触发器时的注意事项：
- 删除触发器不会影响基本表中的数据
- 如果触发器不存在且未使用IF EXISTS，MySQL会报错
- 删除表时，与该表关联的所有触发器也会被自动删除
- 删除触发器前建议先查看确认触发器名称和定义
- 删除后可以使用SHOW TRIGGERS验证是否删除成功

### 7. 如何通过information_schema.TRIGGERS查询特定触发器？

答：可以使用WHERE子句过滤查询特定触发器。例如：

```sql
SELECT * FROM information_schema.TRIGGERS
WHERE TRIGGER_NAME = 'stu_beforeinsert';
```

这将返回stu_beforeinsert触发器的详细信息，包括触发器定义、关联表、触发事件等。

### 8. SHOW TRIGGERS和SHOW CREATE TRIGGER有什么区别？

答：
- **SHOW TRIGGERS**：以表格形式列出当前数据库中所有触发器的概要信息（名称、事件、时间、表名等），适合快速浏览
- **SHOW CREATE TRIGGER 触发器名**：显示指定触发器的完整创建语句（SQL定义文本），适合查看触发器的详细定义

SHOW TRIGGERS查看的是"列表"，SHOW CREATE TRIGGER查看的是"单个详情"。

### 9. 触发器删除后对数据库有什么影响？

答：触发器删除后的影响：
- 删除后该触发器不再被任何事件激活
- 之前由触发器保证的数据完整性约束将不再生效
- 与该触发器相关的其他数据库对象（如表、视图）不受影响
- 如果需要恢复数据完整性约束，需要重新创建触发器或使用其他约束机制
