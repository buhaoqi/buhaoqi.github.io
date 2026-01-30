---
# 这部分是关键！侧边栏显示名由这里决定
title: 触发器专项练习  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 触发器专项练习  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 10  # 侧边栏中排在第1位
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

## 全真模拟四第 84 题

84. 假设当前数据库中有sell表，内容如4-84题表所示。执下以下MySQL程序代码。

**4-84题表 sell 内容**
| 订单号 | 用户号 | 图书编号 | 订购册数 | 订购单价 | 订购时间    | 是否发货 | 是否收货 | 是否结清 |
|---|---|---|---|---|---|---|---|---|
| 1    | C0132   | TP.2525   | 13    | 20    | 2020/11/14 00:00 | 已发货    |    |    |
| 2    | D1963   | TP.2463   | 3    | 31.5    | 2020/11/21 00:00 | 已发货    | 已收货    |    |
| 3    | D1963   | TP.2525   | 6    | 23.45    | 2020/3/26 00:00 | 已发货    | 已收货    |    |
| 4    | C0138   | Ts.3035   | 10    | 23.5    | 2020/8/1 00:00  | 已发货    | 已收货    | 已结清  |
| 5    | C0138   | TP.2525   | 133    | 33.5    | 2020/8/1 00:00  |    |    |    |
| 6    | A3013   | Tw.2562   | 4    | 89    | 2020/8/20 00:00 |    |    |    |
| 7    | C0138   | TP.2463   | 43    | 30    | 2020/11/8 00:00 | 已发货    |    |    |
| 8    | C0138   | Ts.3035   | 5    | 45.5    | 2020/11/21 00:00 |    |    |    |
| 9    | C0132   | Tw.1283   | 6    | 23    | 2020/11/28 00:00 | 已发货    | 已收货    |    |

现有下面的 MySQL 语句：

```sql
DELIMITER $$  
CREATE TRIGGER book_del AFTER DELETE  
    ON Book FOR EACH ROW  
BEGIN  
    DELETE FROM sell WHERE 图书编号 =OLD. 图书编号 ;  
END$$  
DELIMITER ;  
```

现在验证程序功能： 
```sql 
DELETE FROM book WHERE 图书编号 ='Tw.1283';  
SELECT * FROM sell WHERE 图书编号 ='Tw.1283';  
```
查询结果有______条记录。


## 全真模拟四第 88 题

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

有如下 MySQL 程序：

```sql
DELIMITER $$
CREATE TRIGGER ord_upd AFTER INSERT
ON lineitem FOR EACH ROW
BEGIN
    DECLARE tp decimal(10,2);
    DECLARE id int(11);
    SELECT quantity*unitprice INTO tp FROM lineitem
    WHERE orderid=NEW.orderid and itemid=NEW.itemid;
    SELECT orderid INTO id FROM orders WHERE orderid=NEW.orderid;
    IF id>0 THEN
        UPDATE orders SET totalprice=totalprice+tp WHERE orderid=NEW.orderid;
    END IF;
END $$
DELIMITER ;
```
利用下面的语句验证以上程序功能：

```sql
INSERT INTO lineitem (orderid ,itemid ,quantity ,unitprice)
VALUES (20130414, 'FL-DSH-01', 2, 80);

Select orderid,userid,totalprice from orders;
```

问题：显示结果为：__________

---



## 参考答案
###  全真模拟一第 87 题
答案是：**1 3 5 7 9**
###  全真模拟四第 84 题
答案是：**0**
注意事项

1. 触发器中使用 `OLD.图书编号` 获取被删除行的图书编号
2. `AFTER DELETE` 表示在删除操作完成后执行触发器
3. 这个触发器可能导致级联删除，实际应用中需要考虑业务逻辑是否需要这种操作


