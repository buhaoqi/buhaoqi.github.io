---
title: 任务三 事件概述与创建
description: 数据库原理与应用技术《MySQL》项目九 数据库编程 任务三 事件概述与创建知识点总结。涵盖事件的概念与优缺点、事件调度器（event_scheduler）的查看与开关（临时/永久）、CREATE EVENT语法、AT单次任务与EVERY周期任务的创建等核心知识点。
keywords: [MySQL, 事件, CREATE EVENT, 事件调度器, event_scheduler, AT, EVERY, 定时任务, 临时性触发器, 对口升学]
sidebar_label: 任务三 事件概述与创建
sidebar_position: 3
slug: /mysql/proj9/task3-event-overview-create
tags: [MySQL, 项目九, 任务三, 对口升学]
---

## 知识点

### 1. 什么是事件（EVENT）？事件与触发器有什么区别？

答：事件（EVENT）是MySQL在相应的时刻调用的过程式数据库对象。一个事件可调用一次，也可周期性地启动，它由一个特定的线程来管理，也就是所谓的"事件调度器"。

事件和触发器类似，都是在某些事情发生的时候启动。区别在于：触发器是在数据库上启动一条语句的时候触发，而事件是根据调度时间来启动的。因此事件也称为**临时性触发器**。事件取代了原先只能由操作系统的计划任务来执行的工作，MySQL的事件调度器可以精确到每秒钟执行一个任务，而操作系统的计划任务只能精确到每分钟。

### 2. 事件的优缺点是什么？

答：
- **优点**：一些对数据定时性操作不再依赖外部程序，而直接使用数据库本身提供的功能。可以实现每秒钟执行一个任务，对实时性要求较高的环境下非常实用。
- **缺点**：定时触发，不可以调用（不能手动调用执行，只能等待时间到达时自动触发）。

### 3. 什么是事件调度器？核心参数是什么？

答：事件调度器是MySQL中管理事件执行的特定线程。事件由事件调度器负责检查和调用。事件调度的核心参数是 `event_scheduler`，可以通过设置该参数为ON或OFF来开启或关闭事件调度功能。启用事件调度器后，拥有SUPER权限的账户执行 `SHOW PROCESSLIST` 可以看到事件调度器线程。

### 4. 如何查看事件调度器的状态？

答：查看事件调度器状态有三种方式：
- `SHOW VARIABLES LIKE 'event_scheduler';`
- `SELECT @@event_scheduler;`
- `SHOW PROCESSLIST;`（如果能看到event_scheduler线程则说明已开启）

event_scheduler=ON表示已开启，event_scheduler=OFF表示未开启。

### 5. 如何临时开启和关闭事件调度？

答：临时开启事件调度（重启后失效），以下任意命令均可：
- `SET GLOBAL event_scheduler = ON;`
- `SET @@global.event_scheduler = ON;`
- `SET GLOBAL event_scheduler = 1;`
- `SET @@global.event_scheduler = 1;`

临时关闭事件调度：
- `SET GLOBAL event_scheduler = OFF;`
- `SET @@global.event_scheduler = OFF;`
- `SET GLOBAL event_scheduler = 0;`
- `SET @@global.event_scheduler = 0;`

### 6. 如何永久开启或关闭事件调度？

答：临时设置重启后失效，要永久生效需要在MySQL配置文件（my.ini）中配置参数：
- `event_scheduler = 1`：开启事件调度
- `event_scheduler = 0`：关闭事件调度

修改配置文件后需要重启MySQL服务才能生效。

### 7. CREATE EVENT语句的语法格式是什么？

答：CREATE EVENT语句的语法格式：

```sql
CREATE EVENT [IF NOT EXISTS] <事件名>
ON SCHEDULE <时间表>
[ON COMPLETION [NOT] PRESERVE]
[ENABLE | DISABLE]
[COMMENT 'comment']
DO
<事件主体>
```

参数说明：
- 事件名在当前数据库中必须唯一，最大长度64字节
- 时间表指定事件的执行时间
- ON COMPLETION PRESERVE表示事件执行完毕后不被删除
- ENABLE/DISABLE设定事件状态
- COMMENT定义注释
- 事件主体包含要执行的MySQL语句，多条语句用BEGIN…END

### 8. 事件的时间表（SCHEDULE）有哪两种方式？

答：时间表有两种方式：
- **AT时间戳**：用来完成单次的计划任务，在指定时间执行一次。例如：`AT '2023-12-07 17:00:00'`
- **EVERY时间数量时间单位 [STARTS时间戳] [ENDS时间戳]**：用来完成重复的计划任务。例如：`EVERY 1 DAY STARTS '2023-12-07 00:00:00'`

时间戳可以是任意TIMESTAMP和DATETIME数据类型，且需要大于当前时间。时间单位可以是YEAR、MONTH、DAY、HOUR、MINUTE或SECOND。

### 9. ON COMPLETION PRESERVE的作用是什么？

答：`ON COMPLETION PRESERVE` 表示事件在执行完毕后不会被删除，事件记录会保留在数据库中。建议使用该参数，以便于查看事件的具体信息和执行历史。如果不加PRESERVE，事件执行完毕后会被自动删除。

### 10. ENABLE和DISABLE参数的作用是什么？

答：ENABLE和DISABLE用于设定事件的状态：
- **ENABLE**：表示系统将执行这个事件，事件处于活动状态
- **DISABLE**：表示系统不执行这个事件，事件处于停止状态

事件创建后默认状态是ENABLE（活动）的。

### 11. 如何创建单次执行的事件？请举例说明。

答：创建单次执行的事件示例，在2023年12月7日17:00插入一条学生记录：

```sql
CREATE EVENT IF NOT EXISTS insert_from_student
ON SCHEDULE
AT '2023-12-07 17:00:00'
ON COMPLETION PRESERVE
DO
INSERT INTO student(StuID, Stuname, Stusex) VALUES('20220209', '王丽', '女');
```

该事件在指定时间执行一次INSERT操作，执行后由于设置了PRESERVE，事件记录保留不被删除。

### 12. 如何创建周期性重复执行的事件？

答：使用EVERY关键字创建周期性事件。例如：

```sql
CREATE EVENT IF NOT EXISTS daily_cleanup
ON SCHEDULE EVERY 1 DAY STARTS '2023-12-07 00:00:00'
ON COMPLETION PRESERVE
DO
DELETE FROM temp_table WHERE created_at < CURDATE();
```

该事件从2023年12月7日开始，每天执行一次删除临时表数据的操作。EVERY后面的时间单位可以是YEAR、MONTH、DAY、HOUR、MINUTE或SECOND。
