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
## 全真模拟一第89题

第88、89题使用MySQL数据库teaching，其中包含学生表s、学生选课表sc，s表中含有sno（学号）、sn（姓名）、sex（性别）、age（年龄）、maj（专业）、dept（院系）共6个字段，表内容见1-88题表1，sc表中含有sno（学号）、cno（课程号）、score（成绩）共3个字段，表内容见1-88题表2。

1-88题 表1 s表内容
| sno | sn   | sex | age | maj   | dept   |
|-----|------|-----|-----|-------|--------|
| s1  | 王彤 | 女  | 18  | 计算机 | 信息学院 |
| s2  | 苏乐 | 女  | 20  | 信息   | 信息学院 |
| s3  | 林欣 | 男  | 19  | 信息   | 信息学院 |
| s4  | 陶然 | 女  | 18  | 自动化 | 工学院   |
| s5  | 王立 | 男  | 17  | 数学   | 理学院   |
| s6  | 何欣荣 | 女  | 21  | 计算机 | 信息学院 |
| s7  | 赵林林 | 女  | 19  | 数学   | 理学院   |
| s8  | 李轩 | 男  | 19  | 自动化 | 工学院   |


1-88题 表2 sc表内容
| sno | cno | score |
|-----|-----|-------|
| s1  | c1  | 87    |
| s1  | c2  | 85    |
| s2  | c1  | 75    |
| s2  | c2  | 72    |
| s2  | c3  | 71    |
| s2  | c4  | 88    |

89.有如下MySQL程序：
```sql
DELIMITER $$
CREATE PROCEDURE cal_students(IN sst ENUM('男','女'),IN dp VARCHAR(45),OUT num INT)
BEGIN
DECLARE people INT DEFAULT 0;
SELECT COUNT(*) INTO people FROM s WHERE sex=sst AND dept=dp;
SET num=people;
END $$;
```
用下列语句进行调用，显示结果为：________。
```sql
CALL cal_students('女','信息学院',@n);
SELECT @n;
```
## 全真模拟一第96-98题
有销售管理数据库companysales，用来管理商品销售信息。其中，有员工表employee保存员工的相关信息，结构见表1-96题表1。有销售订单表sell_order，保存商品的销售信息。结构见表1-96题表2。

**表1-96题表1 employee表结构**
| 列名         | 数据类型    | 长度   | 为空性 | 说明                                     |
|--------------|-------------|--------|--------|------------------------------------------|
| employeeid   | int         | 默认   | ×      | 员工号，主键，自增                       |
| employeename | varchar     | 50     | ×      | 员工姓名                                 |
| sex          | enum        | 默认   | ×      | 员工性别取值只能为“男”，或者“女”，默认值为“男” |
| birthdate    | date        | 默认   | √      | 出生年月                                 |
| hiredate     | timestamp   | 默认   | √      | 雇用日期，默认值为当前的系统时间         |
| salary       | Decimal(12,4)| 默认   | √      | 工资                                     |
| departmentid | int         | 默认   | ×      | 部门编号                                 |

**表1-96题表2 sell_order表结构**
| 列名          | 数据类型 | 长度   | 为空性 | 说明               |
|---------------|----------|--------|--------|--------------------|
| Sellorderid   | Int      | 默认   | ×      | 销售订单号，主键，自增 |
| Productid     | Int      | 默认   | ×      | 商品编号           |
| Employeeid    | Int      | 默认   | ×      | 员工号             |
| Customerid    | Int      | 默认   | ×      | 客户号             |
| Sellordernumber| Int     | 默认   | √      | 订货数量           |
| sellorderdate | date     | 默认   | √      | 订单签订的日期     |


要求: 编写存储过程proc_del_employee,请填入合适语句使程序完成以下功能。

在员工表中, 删除一条员工记录, 如果不存在该员工, 则提示无法删除。如果员工存在, 但该员工接收了订单, 则删除该员工的订单并删除该员工；如果该员工没有订单, 则删除该员工。要删除指定编号的员工, 所以proc_del_employee存储过程仅有一个参数em_id, 表示员工编号。请在空白位置填写正确的代码。

```sql
DELIMITER $$
CREATE PROCEDURE proc_del_employee(______【96】______)
MODIFIES SQL DATA
COMMENT '根据员工编号删除员工信息.'
BEGIN
    IF NOT EXISTS(SELECT * FROM employee WHERE employeeid = em_id)
    THEN
        SELECT '该员工不存在,无法删除!';
    ELSE
        IF ______【97】______THEN
            DELETE FROM sell_order WHERE employeeid = em_id;
            SELECT '该员工有订单,并成功删除订单!';
        ELSE
            SELECT '该员工没有订单!';
        END IF;
        ______【98】______
        SELECT '成功删除该员工信息!';
    END IF;
END$$
DELIMITER ;
```

答案：

96. `IN em_id INT`
97. `EXISTS(SELECT * FROM employee WHERE employeeid = em_id)`
98. `DELETE FROM employee WHERE employeeid = em_id`
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

