---
# 这部分是关键！侧边栏显示名由这里决定
title: 变量  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 变量  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 5  # 侧边栏中排在第1位
---

## 变量声明和使用

```sql
DELIMITER //
CREATE FUNCTION complex_calculation(x INT, y INT) 
RETURNS INT
BEGIN
    -- 声明变量
    DECLARE a INT DEFAULT 0;
    DECLARE b INT;
    DECLARE result INT;
    
    -- 变量赋值
    SET a = x * 2;
    SET b = y + 10;
    
    -- 条件逻辑
    IF a > b THEN
        SET result = a - b;
    ELSE
        SET result = b - a;
    END IF;
    
    -- 返回结果
    RETURN result;
END //
DELIMITER ;
```