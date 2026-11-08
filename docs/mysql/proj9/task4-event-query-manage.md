---
title: 任务四 查询与管理事件
description: 数据库原理与应用技术《MySQL》项目九 数据库编程 任务四 查询与管理事件知识点总结。涵盖SHOW EVENTS查看事件、SHOW CREATE EVENT查看事件定义、ALTER EVENT ENABLE/DISABLE启停事件、ALTER EVENT修改事件属性、DROP EVENT删除事件等核心知识点。
keywords: [MySQL, 查询事件, SHOW EVENTS, SHOW CREATE EVENT, ALTER EVENT, DROP EVENT, 启动事件, 关闭事件, 修改事件, 删除事件, 对口升学]
sidebar_label: 任务四 查询与管理事件
sidebar_position: 4
slug: /mysql/proj9/task4-event-query-manage
tags: [MySQL, 项目九, 任务四, 对口升学]
---

## 知识点

### 1. 如何查询系统中所有的事件？

答：使用 `SHOW EVENTS;` 语句查询系统中所有的事件。执行后会显示事件名称、定义者、时间表（执行时间和频率）、事件状态（ENABLE/DISABLE）等信息。

### 2. 如何查询特定事件的详情？

答：使用 `SHOW CREATE EVENT 事件名;` 语句查询特定事件的详细信息，包括事件的完整创建语句（定义文本）。例如：`SHOW CREATE EVENT insert_from_student;` 显示insert_from_student事件的完整定义。

### 3. 事件有哪两种状态？

答：事件可以是以下两种状态：
- **活动（ENABLE）**：事件调度器会检查事件是否需要调用，到达预定时间时自动执行
- **停止（DISABLE）**：事件的声明存储在目录中，但调度器不会检查它是否应该调用

事件创建后默认状态是活动的，一个活动的事件可以执行一次或多次。

### 4. 如何启动和关闭事件？

答：使用ALTER EVENT语句启动或关闭事件：
- **启动事件**：`ALTER EVENT 事件名 ENABLE;`
- **关闭事件**：`ALTER EVENT 事件名 DISABLE;`

例如：`ALTER EVENT insert_from_student ENABLE;` 启动insert_from_student事件；`ALTER EVENT insert_from_student DISABLE;` 关闭该事件。

### 5. 如何修改事件的属性？

答：使用ALTER EVENT语句修改事件的各种属性（如触发时间、执行语句等），语法格式：

```sql
ALTER EVENT <事件名>
ON SCHEDULE <时间表>
[ON COMPLETION [NOT] PRESERVE]
[ENABLE | DISABLE]
[COMMENT 'comment']
DO
<事件主体>
```

**注意**：修改事件属性前需要先将事件停止执行（DISABLE），修改完事件后再启动（ENABLE）。

### 6. 如何修改事件的执行时间？请举例说明。

答：使用ALTER EVENT修改事件执行时间示例，将insert_from_student的执行时间改为2023年12月8日上午8:00：

```sql
ALTER EVENT insert_from_student
ON SCHEDULE
AT '2023-12-08 8:00:00'
ON COMPLETION PRESERVE
DO
INSERT INTO student(StuID, Stuname, Stusex) VALUES('20220209', '王丽', '女');
```

修改前建议先DISABLE事件，修改完成后再ENABLE。

### 7. DROP EVENT语句的语法格式是什么？

答：删除事件使用DROP EVENT语句，语法格式：

```sql
DROP EVENT [IF EXISTS] <事件名>;
```

例如：`DROP EVENT IF EXISTS insert_from_student;` 删除insert_from_student事件。使用IF EXISTS可以避免事件不存在时报错。

### 8. SHOW EVENTS和SHOW CREATE EVENT有什么区别？

答：
- **SHOW EVENTS**：以列表形式显示系统中所有事件的概要信息（名称、时间表、状态等）
- **SHOW CREATE EVENT 事件名**：显示指定事件的完整创建语句（定义文本）

SHOW EVENTS查看"列表"，SHOW CREATE EVENT查看"单个详情"。

### 9. 删除事件时需要注意什么？

答：删除事件时的注意事项：
- 删除事件后，该事件将不再执行
- 使用IF EXISTS可以避免事件不存在时报错
- 如果事件正在执行中被删除，不会影响当前正在执行的操作
- 删除事件是永久操作，需要重新创建才能恢复
- 删除前建议使用SHOW CREATE EVENT确认事件信息

### 10. 事件的完整管理流程是什么？

答：事件的完整管理流程：
1. **开启事件调度器**：`SET GLOBAL event_scheduler = ON;`
2. **创建事件**：`CREATE EVENT ... ON SCHEDULE ... DO ...;`
3. **查看事件**：`SHOW EVENTS;` 或 `SHOW CREATE EVENT 事件名;`
4. **启停事件**：`ALTER EVENT 事件名 ENABLE/DISABLE;`
5. **修改事件**：先DISABLE → `ALTER EVENT ... ON SCHEDULE ... DO ...;` → 再ENABLE
6. **删除事件**：`DROP EVENT [IF EXISTS] 事件名;`
