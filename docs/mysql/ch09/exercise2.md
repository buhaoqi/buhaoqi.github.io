---
# 这部分是关键！侧边栏显示名由这里决定
title: 练习:事件  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 练习:事件  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 11  # 侧边栏中排在第1位
---


## 全真模拟一第 84 题

84. 有如下 MySQL 程序：
```sql
DELIMITER $$
CREATE EVENT event_update ON SCHEDULE EVERY 1 MINUTE
STARTS CURDATE() + INTERVAL 1 MINUTE
DO
BEGIN
    UPDATE sell set 订购册数 = 订购册数 +1 where 订单号 =1;
END$$
DELIMITER;
```
该程序创建了一个事件，每隔 1 分钟将________________________________。
该事件开始于当前时间，结束于当天 24 点。