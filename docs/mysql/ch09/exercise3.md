---
# 这部分是关键！侧边栏显示名由这里决定
title: 练习:存储过程  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 练习:存储过程  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 12  # 侧边栏中排在第1位
---
## 全真模拟一第 87 题

87. 运行下面的 MySQL 程序，输出的结果是______。

```sql
create procedure js()
begin
    declare i int default 1;
    declare s varchar(100) default '';
    mylabel:repeat
    if i mod 2=0 then
        set i=i+1;
        iterate mylabel;
    end if;
    set s=concat(s,convert(i,char),' ');
    set i=i+1;
    until i>=10
    end repeat;
    select s;
end;
```

## 全真模拟四第 87 题

现有宠物商店电子商务系统数据库 `petstore`：

如果客户选择了某件商品，确认购买时，需要下订单，`orders`（订单表）记录了客户的订单信息。

如果客户一次购买了几种商品，则需要 `lineitem`（订单明细表）记录所购买商品的数量、单价等信息。

订单表 `orders` 
| orderid   | userid | orderdate           | totalprice | status |
|-----------|--------|---------------------|------------|--------|
| 20130411  | u0001  | 2013/4/11 15:07:34  | 500.0      | 0      |
| 20130412  | u0002  | 2013/4/9 15:08:11   | 305.6      | 0      |
| 20130413  | u0003  | 2013/4/15 15:09:00  | 212.4      | 0      |
| 20130414  | u0003  | 2013/4/16 15:09:30  | 120.45     | 1      |
| 20130415  | u0004  | 2013/4/2 15:10:05   | 120.3      | 0      |

订单明细表 `lineitem` 
| orderid   | itemid    | quantity | unitprice |
|-----------|-----------|----------|-----------|
| 20130411  | FI-SW-01  | 10       | 18.5      |
| 20130411  | FI-SW-02  | 12       | 16.5      |
| 20130412  | K9-BD-01  | 2        | 120       |
| 20130412  | K9-PO-02  | 1        | 220       |
| 20130413  | K9-DL-01  | 1        | 130       |
| 20130414  | RP-SN-01  | 2        | 125       |
| 20130415  | AV-SB-02  | 2        | 50        |


以下MySQL程序的执行结果是：__________

```sql
DELIMITER $$
CREATE PROCEDURE cp(in id1 int,in id2 int,out bj int)
BEGIN
    DECLARE tp1,tp2 decimal(10,2);
    SELECT totalprice into tp1 FROM orders WHERE orderid=id1;
    SELECT totalprice into tp2 FROM orders WHERE orderid=id2;
    IF tp1>tp2 THEN set bj=0;
    ELSE
        SET bj=1;
    END IF;
END $$
DELIMITER ;

CALL cp(20130411,20130414,@bj);
SELECT @bj;
```




## 参考答案
###  全真模拟一第 87 题
答案：**1 3 5 7 9**
###  全真模拟四第 87 题
答案：**0**

