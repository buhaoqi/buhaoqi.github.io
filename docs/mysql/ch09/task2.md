---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务二 事件  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务二 事件  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 2  # 侧边栏中排在第1位
---

## 一、事件是什么
一句话定义
> 事件(EVENT)是MySQL数据库的一种按照指定时间自动执行任务的工作机制。

特点：

* 基于时间
* 自动执行
* 定时任务
* 无需人工调用

---

## 二、创建事件的基本语法

```sql
-- 单条 SQL 语句
CREATE EVENT 事件名
ON SCHEDULE 时间规则 -- 核心：指定事件执行的时间/周期
DO
  event_body; -- 要执行的单条SQL语句

-- 多条 SQL 语句
DELIMITER //
CREATE EVENT 事件名
ON SCHEDULE 时间规则 -- 核心：指定事件执行的时间/周期
[ENABLE | DISABLE | DISABLE ON SLAVE] -- 事件状态
DO 
BEGIN
    event_body; -- 要执行的多条SQL语句
    SQL语句1;
    SQL语句2;
END //

DELIMITER ;
```
## 三、语法详解
### 1. 事件名称
```sql
CREATE EVENT my_event  -- 基本命名
CREATE EVENT IF NOT EXISTS my_event  -- 避免重复创建错误
```

### 2.时间计划（ON SCHEDULE）
#### ① AT:一次性事件

```sql
-- 在特定时间执行
ON SCHEDULE AT '2024-12-31 23:59:59'

-- 在当前时间1小时后执行
ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 HOUR

-- 使用时间戳
ON SCHEDULE AT TIMESTAMP '2024-12-31 23:59:59'
```

#### ② EVERY:周期性事件

语法
```sql
EVERY NUMBER 时间单位
```
MySQL 支持的所有时间单位
```sql
MICROSECOND    -- 微秒
SECOND         -- 秒
MINUTE         -- 分钟
HOUR           -- 小时
DAY            -- 天
WEEK           -- 周
MONTH          -- 月
QUARTER        -- 季度（3个月）
YEAR           -- 年
```
示例：
```sql
ON SCHEDULE EVERY 3 YEAR      -- 每3年
ON SCHEDULE EVERY 3 MONTH     -- 每3个月
ON SCHEDULE EVERY 2 WEEK      -- 每2周
ON SCHEDULE EVERY 3 DAY       -- 每3天
ON SCHEDULE EVERY 3 HOUR      -- 每3小时
ON SCHEDULE EVERY 3 MINUTE    -- 每3分钟
ON SCHEDULE EVERY 3 SECOND    -- 每3秒
ON SCHEDULE EVERY 1 QUARTER   -- 每1季度（每3个月）
ON SCHEDULE EVERY 1.5 SECOND    -- 每1.5秒（MySQL 5.6.4+）
ON SCHEDULE EVERY 0.5 HOUR      -- 每半小时（30分钟）
ON SCHEDULE EVERY 0.25 DAY      -- 每6小时

-- 每分钟执行
CREATE EVENT event_minute
ON SCHEDULE EVERY 1 MINUTE
DO UPDATE table SET count = count + 1;

-- 每2小时执行
CREATE EVENT event_hourly
ON SCHEDULE EVERY 2 HOUR
DO UPDATE table SET status = 'checked';

-- 每天执行
CREATE EVENT event_daily
ON SCHEDULE EVERY 1 DAY
DO DELETE FROM logs WHERE created_at < NOW() - INTERVAL 30 DAY;

-- 每周执行
CREATE EVENT event_weekly
ON SCHEDULE EVERY 1 WEEK
DO CALL generate_weekly_report();

-- 每月执行
CREATE EVENT event_monthly
ON SCHEDULE EVERY 1 MONTH
DO OPTIMIZE TABLE large_table;

-- 每分钟执行
ON SCHEDULE EVERY 1 MINUTE

-- 每小时执行
ON SCHEDULE EVERY 1 HOUR

-- 每天凌晨2点执行
ON SCHEDULE EVERY 1 DAY STARTS '2024-01-01 02:00:00'

-- 每周一早上8点
ON SCHEDULE EVERY 1 WEEK STARTS '2024-01-01 08:00:00'

-- 每月第一天
ON SCHEDULE EVERY 1 MONTH STARTS '2024-02-01 00:00:00'

-- 指定结束时间（1年后停止）
ON SCHEDULE EVERY 1 DAY
  STARTS CURRENT_TIMESTAMP
  ENDS CURRENT_TIMESTAMP + INTERVAL 1 YEAR
```

#### ③ 指定开始和结束时间

```sql
ON SCHEDULE EVERY 1 DAY
STARTS '2026-02-01 00:00:00'
ENDS   '2026-03-01 00:00:00'
```

📌 含义：

> 从 2 月 1 日开始，到 3 月 1 日结束，每天执行一次

#### ④ 指定时间间隔(INTERVAL)
##### 定义：
> INTERVAL 用于指定时间间隔，是事件调度中最重要的时间单位定义关键字。
#### 基本语法格式
```sql
INTERVAL number unit(单位)
```

##### 示例
```sql
-- 10分钟后执行一次
CREATE EVENT event_once
ON SCHEDULE AT NOW() + INTERVAL 10 MINUTE
DO DELETE FROM temp_table;

-- 明天中午12点执行
CREATE EVENT event_noon
ON SCHEDULE AT CURDATE() + INTERVAL 1 DAY + INTERVAL 12 HOUR
DO CALL send_daily_summary();

-- 5分钟后开始执行
CREATE EVENT event_delayed
ON SCHEDULE EVERY 1 DAY
STARTS NOW() + INTERVAL 5 MINUTE
DO INSERT INTO backups SELECT * FROM data;

-- 明天凌晨2点开始
CREATE EVENT event_tomorrow
ON SCHEDULE EVERY 1 DAY
STARTS CURDATE() + INTERVAL 1 DAY + INTERVAL 2 HOUR
DO UPDATE stats SET daily_count = 0;

-- 1年后结束
CREATE EVENT event_temporary
ON SCHEDULE EVERY 1 WEEK
STARTS NOW()
ENDS NOW() + INTERVAL 1 YEAR
DO ARCHIVE old_records;

-- 每小时执行，24小时后结束（共24次）
CREATE EVENT event_limited
ON SCHEDULE EVERY 1 HOUR
STARTS NOW()
ENDS NOW() + INTERVAL 24 HOUR
DO INSERT INTO logs (message) VALUES ('Hourly check');

-- 每隔1天2小时30分钟
CREATE EVENT event_complex
ON SCHEDULE EVERY 1 DAY + INTERVAL 2 HOUR + INTERVAL 30 MINUTE
DO REFRESH cache_data;

-- 开始和结束都使用 INTERVAL
CREATE EVENT event_scheduled
ON SCHEDULE EVERY 1 WEEK
STARTS NOW() + INTERVAL 1 DAY      -- 1天后开始
ENDS NOW() + INTERVAL 6 MONTH      -- 6个月后结束
DO BACKUP database;
```
### 3. 事件状态
```sql
ENABLE          -- 启用事件（默认）
DISABLE         -- 禁用事件
DISABLE ON SLAVE -- 仅在从服务器上禁用
```
示例
```sql
CREATE EVENT event_name
ON SCHEDULE EVERY 1 DAY
DO ...
ENABLE;
```
也可以创建后修改：
```sql
ALTER EVENT event_name DISABLE;
ALTER EVENT event_name ENABLE;
```

### 4. 事件体（DO）
DO 后面是真正要执行的 SQL
可以是：
- INSERT
- UPDATE
- DELETE
- CALL 存储过程

示例
```sql
-- 简单SQL语句
DO DELETE FROM logs WHERE created_at < NOW() - INTERVAL 30 DAY;

-- 调用存储过程
DO CALL generate_report();

-- 使用 BEGIN...END 块（多条语句）
DO BEGIN
  UPDATE stats SET daily_count = 0;
  INSERT INTO audit_log (action) VALUES ('Reset daily counters');
  CALL cleanup_temp_data();
END
```
## 三、实际应用示例
### 示例1：数据清理任务
```sql
-- 每30分钟清理一次临时数据
CREATE EVENT cleanup_temp
ON SCHEDULE EVERY 30 MINUTE
DO
  DELETE FROM temp_sessions 
  WHERE created_at < NOW() - INTERVAL 1 HOUR;
```

### 示例2：定期数据统计
```sql
-- 每小时统计一次，从10分钟后开始
CREATE EVENT update_stats
ON SCHEDULE EVERY 1 HOUR
STARTS NOW() + INTERVAL 10 MINUTE
DO
  INSERT INTO hourly_stats (hour, total_users)
  VALUES (NOW(), (SELECT COUNT(*) FROM users));
```

### 示例3：系统监控
```sql
-- 每5秒检查一次系统状态
CREATE EVENT monitor_system
ON SCHEDULE EVERY 5 SECOND
DO
  INSERT INTO system_monitor (check_time, cpu_usage)
  VALUES (NOW(), get_cpu_usage());
```

### 示例4：每天凌晨执行(CURDATE())
```sql
CREATE EVENT midnight_job
ON SCHEDULE EVERY 1 DAY
STARTS CURDATE() + INTERVAL 1 DAY  -- 明天凌晨开始
DO
  UPDATE counters SET daily = 0;
```

### 示例5：每月1号执行
```sql
CREATE EVENT first_day_month
ON SCHEDULE EVERY 1 MONTH
STARTS CURDATE() - INTERVAL DAY(CURDATE()) - 1 DAY + INTERVAL 1 MONTH
DO
  CALL generate_monthly_report();
```

### 示例6：使用变量设置间隔
```sql
SET @interval_minutes = 5;

CREATE EVENT dynamic_interval
ON SCHEDULE EVERY @interval_minutes MINUTE
DO SELECT 'This runs every 5 minutes';
```

### 示例7:验证时间间隔
```sql
-- 查看1小时30分钟后是什么时间
SELECT NOW(), NOW() + INTERVAL 1 HOUR + INTERVAL 30 MINUTE;

-- 查看3天前的时间
SELECT NOW(), NOW() - INTERVAL 3 DAY;
```
## 四、常见事件示例

### 1. 一次性事件
```sql
CREATE EVENT cleanup_logs
ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 HOUR
DO
  DELETE FROM logs WHERE created_at < NOW() - INTERVAL 30 DAY;
```

### 2. 周期性事件
```sql
CREATE EVENT daily_report
ON SCHEDULE EVERY 1 DAY
STARTS '2024-01-01 02:00:00'
DO
  CALL generate_daily_report();
```

### 3. 复杂事件
```sql
CREATE EVENT optimize_tables
ON SCHEDULE EVERY 1 WEEK
STARTS '2024-01-07 03:00:00'
COMMENT '每周优化表'
DO
BEGIN
  OPTIMIZE TABLE users, orders, products;
  INSERT INTO event_log (message) VALUES ('表优化完成');
END
```

### 4.其他事件
```sql
-- 创建事件日志表
CREATE TABLE event_log (
    info VARCHAR(50),
    created_at DATETIME
);
-- 每分钟往日志表插一条记录
CREATE EVENT log_event
ON SCHEDULE EVERY 1 MINUTE
DO
INSERT INTO event_log VALUES ('event run', NOW());

-- 每天凌晨清理过期数据（经典）
CREATE EVENT clear_old_logs
ON SCHEDULE EVERY 1 DAY
STARTS '2026-02-01 00:00:00'
DO
DELETE FROM logs
WHERE created_at < NOW() - INTERVAL 30 DAY;

-- 定时统计数据
CREATE EVENT daily_stat
ON SCHEDULE EVERY 1 DAY
STARTS '2026-02-01 01:00:00'
DO
INSERT INTO stat_table(day, total)
SELECT CURDATE(), COUNT(*) FROM orders;

-- 事件中调用存储过程
CREATE EVENT month_settle
ON SCHEDULE EVERY 1 MONTH
DO
CALL settle_accounts();
```
### 5.完整示例

#### 示例1：每日清理任务
```sql
CREATE EVENT daily_cleanup
ON SCHEDULE EVERY 1 DAY
STARTS '2024-01-01 03:00:00'
ON COMPLETION PRESERVE
ENABLE
COMMENT '每日清理过期数据'
DO
  BEGIN
    DELETE FROM sessions WHERE expires_at < NOW();
    DELETE FROM temp_files WHERE created_at < NOW() - INTERVAL 7 DAY;
    OPTIMIZE TABLE logs;
  END;
```

#### 示例2：每小时统计数据
```sql
CREATE EVENT hourly_stats
ON SCHEDULE EVERY 1 HOUR
DO
  INSERT INTO system_stats 
  SELECT NOW(), COUNT(*) as active_users, 
         (SELECT COUNT(*) FROM orders WHERE status = 'completed') as completed_orders
  FROM users WHERE last_active > NOW() - INTERVAL 30 MINUTE;
```
- 这虽然是多行，但本质上是一个单条 INSERT ... SELECT 语句
- 子查询 (SELECT COUNT(*) FROM orders ...) 是 SELECT 语句的一部分
- 不需要 BEGIN ... END

#### 示例3：月度归档
```sql
CREATE EVENT monthly_archive
ON SCHEDULE EVERY 1 MONTH
STARTS '2024-02-01 00:00:00'
COMMENT '每月归档上月数据'
DO
  BEGIN
    -- 归档上月数据
    INSERT INTO orders_archive 
    SELECT * FROM orders 
    WHERE order_date < DATE_FORMAT(NOW() - INTERVAL 1 MONTH, '%Y-%m-01');
    
    -- 删除已归档数据
    DELETE FROM orders 
    WHERE order_date < DATE_FORMAT(NOW() - INTERVAL 1 MONTH, '%Y-%m-01');
  END;
```
## 五、管理事件

```sql
-- 查看所有事件
SHOW EVENTS;

-- 查看事件定义
SHOW CREATE EVENT event_name;

-- 修改事件
ALTER EVENT event_name
  ON SCHEDULE EVERY 1 HOUR
  DO ...;

-- 临时禁用事件
ALTER EVENT event_name DISABLE;

-- 启用事件
ALTER EVENT event_name ENABLE;

-- 删除事件
DROP EVENT event_name;
```

## 六、总结

### 1.INTERVAL的常见用法
1. `EVERY n unit` - 周期性执行
2. `AT NOW() + INTERVAL n unit` - 延迟执行
3. `STARTS/ENDS + INTERVAL` - 控制时间范围
4. 可以组合：`INTERVAL 1 DAY + INTERVAL 2 HOUR`
5. 支持所有常用时间单位：SECOND到YEAR

记住：数字和单位之间必须有空格，`INTERVAL 5 MINUTE`（正确） vs `INTERVAL 5MINUTE`（错误）。

### 2.DO 子句

* `DO` 后面是真正要执行的 SQL
* 可以是：

  * `INSERT`
  * `UPDATE`
  * `DELETE`
  * `CALL 存储过程`

### 3.ENABLE / DISABLE（启用与停用）

```sql
CREATE EVENT event_name
ON SCHEDULE EVERY 1 DAY
DO ...
ENABLE;
```

也可以创建后修改：

```sql
ALTER EVENT event_name DISABLE;
ALTER EVENT event_name ENABLE;
```

### 4.实际开发中：

* 复杂逻辑写在存储过程
* 事件只负责“定时触发”

### 5.事件能做什么？

事件可以执行任何 SQL 语句，例如：

- 删除过期数据
- 定期更新状态字段  
- 生成每日/月度报告
- 归档旧记录
- 重置计数器
- 同步数据