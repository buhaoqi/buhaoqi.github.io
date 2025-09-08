---
noteId: "3fc3b1d0321f11f088738f916b56a5b6"
tags: []

---
考试科目：《数据库原理与应用技术》(300页)


## (一)数据库理论基础
1. 理解数据库相关的基本概念；
2. 掌握数据库系统的特点与结构；
3. 理解概念模型、逻辑模型和物理模型等数据模型的概念；掌握层次模型、网状模型、关系模型等数据模型的概念；
4. 掌握关系模型、表、列、关键字、候选键和外部关键字、域、数据类型等常用关系术语。
## (二)MySQL概述
1. 了解MySQL系统特性；
2. 了解MySQL服务器的安装与配置；
3. 掌握MySQL服务器的启动与关闭；
4. 掌握MySQL客户端管理工具。
## (三)MySQL编程语言
1.了解结构化查询语言SQL的作用和主要特点；

2.掌握MySQL语言组成；

3.掌握MySQL聚合函数、数学函数、字符串函数、日期和时间函数和其他常用函数的概念及使用；

- 聚合函数：COUNT()、SUM()、AVG()、MAX()、MIN()；
- 数学函数：ABS()、FLOOR()、RAND()、TRUNCATE()、SQRT()、ROUND()、ROUND( )；
- 字符串函数：UPPER()、UCASE()、LEFT()、SUBSTRING()、RTRIM()、REVERSE()、FIELD()、LOCATE()、POSITION()、INSTR()；
- 日期和时间函数：CURDATE()、CURRENT_DATE()、CURTIME()、NOW()、CURRENT_TIME()、DATEDIFF()、ADDDATE()、ADDDATE()、SUBDATE()；
- 其他常用函数：IF()、IFNULL()、VERSION()。

## (四)定义数据库
1. 掌握数据库的创建、查看、选择、修改和删除等操作；
2. 掌握数据库的建立命令：CREATE DATABASE；
3. 掌握选择数据库的命令：USE db_name；
4. 掌握查看数据库的命令：SHOW { DATABASES|SCHEMAS}；
5. 掌握修改数据库的命令：ALTER { DATABASES|SCHEMAS}；
6. 掌握删除数据库的命令：DROP { DATABASES|SCHEMAS}。
## (五)定义表
1. 掌握MySQL常用的数据类型、掌握创建表、查看表、修改表、重命名表、复制表和删除表的基本操作；
2. 掌握MySQL的常用数据类型：数字类型、字符串类型、日期和时间类型等；
3. 掌握建立数据表的命令：CREATE TABLE；
4. 掌握查看表结构的命令：SHOW COLUMNS、DESCRIBE；
5. 掌握修改表结构的命令：ALTER TABLE；
6. 掌握重命名表的命令：RENAME TABLE；
7. 掌握复制表的命令：CREATE TABLE …LIKE；
8. 掌握删除表的命令：DROP TABLE；
## (六)数据完整性约束
1．理解实体完整性、参照完整性、更新完整性的概念；

2．掌握主键、候选键、外键的概念；

3．掌握完整性约束的命名：CONSTRAINT；

4．掌握用户定义的完整性；

5．掌握删除约束命令：DROP TABLE、ALTER TABLE<表名> DROP {FOREIGN KEY|PRIMARY KEY}、ALTER TABLE<表名> DROP {约束名|候选键字段名}

6．掌握添加约束的相关命令：CREATE TABLE、

7．ALTER TABLE<表名> ADD [CONSTRAINT <约束名>] PRIMARY KEY（主键字段）、
ALTER TABLE<表名> ADD [CONSTRAINT <约束名>] FOREIGN KEY（外键字段名）REFERENCES 被参照表（主键字段名）、
ALTER TABLE<表名> ADD [CONSTRAINT <约束名>] UNIQUE KEY（字段名）
## (七)数据查询
1.掌握基本查询语句SELECT的使用；
2.掌握单表查询的相关操作：

- 查询所有字段：`SELECT * FROM  <表名>`
- 查询部分字段：`SELECT <字段名1>[,字段名2,… ] FROM  <表名>`
- 按条件查询：`SELECT <字段名1>[,字段名2,… ] FROM  <表名> WHERE <条件表达式>`

3.掌握分组聚合查询：`SELECT <字段名1>[,字段名2,… ] FROM  <表名> GROUP BY <字段名1>[，<字段名2>…] ORDER BY <字段名1>[，<字段名2>…]；`

4.掌握连接查询：
`SELECT <字段名1>[,字段名2,… ] ...FROM <表名1> INNER|LEFT|RIGHT JOIN <表名2> ON 表名1.字段名1 = 表名2.字段名2;`

5.掌握子查询；

6.掌握合并查询结果。
## (八)数据更新
1．掌握插入数据的语句：`INSERT…VALUES、INSERT…SET、INSERT…SELECT；`

2．掌握修改数据的语句：`UPDATE…SET；`

3．掌握删除数据的语句：`DELETE FROM、TRUNCAE TABLE；`

4．掌握带子查询的删除语句：`DELETE FROM…WHERE…=(SELECT)。`
## (九)索引
1．掌握表的索引操作；

2．掌握普通索引、唯一性索引、主键索引、聚簇索引和全文索引的概念；

3．掌握单列索引、组合索引的概念；

4．掌握创建表时创建索引的语句：`CREATE TABLE CONSTRAINT index_ name；`

5．掌握在已经建立的表中创建索引的语句：`CREATE [UNIQE] INDEX index_ name；`

6．掌握修改数据表结构同时为数据表添加索引的语句：`ALTER TABLE … ADD[UNIQUE|FULLTEXT][INDEX|KEY] index_ name；`

7．掌握删除索引的语句：DROP INDEX、ALTER TABLE…DROP INDEX。 
## (十)视图
1．理解视图的概念；

2．掌握视图的作用；

3．掌握创建视图的语句：CREATE VIEW…AS SELECT；

4．掌握查看视图的语句：SHOW CREATE VIEW；

5．掌握修改视图的语句：ALTER VIEW；

6．掌握更新视图数据的相关语句：INSERT、UPDATE、DELETE；

7．掌握删除视图的语句：DROP VIEW。
## (十一)MySQL的数据库编程

1．掌握触发器的基本概念与作用，掌握使用SQL语句创建、删除触发器的操作方法及应用，掌握触发器的种类及区别，理解触发器的使用及原则；

2．掌握事件、事件调度器的基本概念与作用，掌握使用SQL语句创建、修改、删除事件的操作方法及应用；

3．掌握存储过程和存储函数的使用方法，包括：

- 存储过程、存储函数的基本概念、特点与作用；
- 存储过程和存储函数的区别；
- 存储过程体的基本概念及构造方法；
- 使用SQL语句创建、修改、删除存储过程的操作方法及应用；
- 存储过程的调用方法；
- 使用SQL语句创建、修改、删除存储函数的操作方法及应用；
- 存储函数的调用方法。
## (十二)数据库设计
1．了解数据库设计的方法；

2．掌握数据库设计的步骤；

3．掌握E-R图的画法；

4．掌握模式的规范化；

5．掌握E-R模型转化为关系模式的方法。
## (十三)数据库安全性
1．了解数据库的不安全因素，掌握数据库的安全性的概念；

2．了解计算机以及信息安全技术方面的系列安全标准；

3．熟悉数据库的用户管理；

4．掌握权限的授予、查看和回收；

5．掌握角色的创建、授权和回收。
## (十四)数据库安全性
1．熟悉数据库备份和恢复的概念；

2．掌握备份的类型、策略和方法；

3．掌握MySQL备份和恢复操作。