---
title: 事件
description: 介绍事件与事件调度器的基本概念、作用，事件的创建、修改、删除操作，以及事件调度器的启用与定时执行事件的应用。
keywords: [MySQL, 事件, EVENT, 事件调度器, event_scheduler, CREATE EVENT, ALTER EVENT, DROP EVENT, 定时任务, 对口升学]
sidebar_label: 5.6 事件
sidebar_position: 6
slug: /mysql/ch05/6-event
tags: [MySQL, 第五章, 数据库对象管理, 对口升学]
---

## 知识点

### 5.6.1 事件的基本概念

**事件（Event）**是 MySQL 在指定时间点或按一定时间周期**自动执行**的数据库对象，类似于操作系统中的定时任务（Linux 的 crontab、Windows 的计划任务）。

- 事件由**事件调度器（Event Scheduler）**这个后台线程负责管理和执行；
- 事件存储在数据库中，由服务器自动触发，不需要外部程序；
- 事件执行的是一条或多条 SQL 语句。

**事件调度器**：

```sql
-- 查看事件调度器状态
SHOW VARIABLES LIKE 'event_scheduler';

-- 启用
SET GLOBAL event_scheduler = ON;   -- 或 1

-- 关闭
SET GLOBAL event_scheduler = OFF;  -- 或 0
```

也可在配置文件中设置 `event_scheduler=ON`，使服务器启动时自动开启。

**事件的作用**：

1. 定时清理过期数据；
2. 定期汇总、统计并生成报表数据；
3. 定时同步、备份数据；
4. 周期性维护任务（如优化表）。

### 5.6.2 事件的操作

**创建事件**：

```sql
CREATE EVENT [IF NOT EXISTS] 事件名
ON SCHEDULE 调度规则
[ON COMPLETION [NOT] PRESERVE]
[ENABLE | DISABLE]
DO 事件体;
```

**调度规则**：

- `AT 时间点`：在某一时刻**执行一次**；
- `EVERY 时间间隔 [STARTS 开始时间] [ENDS 结束时间]`：按周期重复执行。

**示例 1**：一次性事件

```sql
CREATE EVENT evt_once
ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 HOUR
DO INSERT INTO logs (msg, create_time) VALUES ('定时提醒', NOW());
```

**示例 2**：周期性事件（每天凌晨 2 点清理）

```sql
CREATE EVENT evt_clean
ON SCHEDULE EVERY 1 DAY STARTS '2026-11-29 02:00:00'
DO DELETE FROM logs WHERE create_time < DATE_SUB(NOW(), INTERVAL 30 DAY);
```

**示例 3**：带 BEGIN...END 的多语句事件

```sql
DELIMITER //
CREATE EVENT evt_stat
ON SCHEDULE EVERY 1 DAY
DO
BEGIN
    DELETE FROM daily_report WHERE report_date = CURDATE();
    INSERT INTO daily_report SELECT CURDATE(), COUNT(*) FROM students;
END //
DELIMITER ;
```

> `ON COMPLETION PRESERVE` 表示事件执行完后**保留**定义（默认执行完即删除，即 `NOT PRESERVE`）。

**修改事件**：

```sql
ALTER EVENT 事件名
ON SCHEDULE EVERY 2 DAY
ENABLE;    -- 或 DISABLE（禁用）
```

**删除事件**：

```sql
DROP EVENT [IF EXISTS] [数据库名.]事件名;
```

**查看事件**：

```sql
SHOW EVENTS;
SHOW CREATE EVENT 事件名;
SELECT * FROM information_schema.EVENTS;
```

## 考点提示

- 高频考点：事件是**定时自动执行**的数据库对象，由**事件调度器**管理；`ON SCHEDULE AT`（一次）与 `EVERY`（周期）的区别。
- 易错点：即使创建了事件，若 `event_scheduler = OFF`，事件也不会执行——常考判断题。
- 语法要点：`CREATE EVENT` / `ALTER EVENT` / `DROP EVENT`，`DO` 后跟事件体。
