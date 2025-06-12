---
noteId: "3fc3b1d0321f11f088738f916b56a5b6"
tags: []

---
《MySQL数据库原理与应用技术》考试大纲

（一）数据库基础知识
1.数据库理论基础
a.
理解数据库相关的基本概念；
b.
掌握数据库系统的特点与结构；
c.
理解概念模型、逻辑模型和物理模型等数据模型的概念；掌握层次模型、网状模型、关系模型
等数据模型的概念；
d.
掌握关系模型、表、列、关键字、候选键和外部关键字、域、数据类型等常用关系术语。
2. MySQL 概述
a.
了解 系统特性；
MySQL
b.
了解 服务器的安装与配置；
MySQL
c.
掌握 服务器的启动与关闭；
MySQL
d.
掌握 客户端管理工具。
MySQL
3. MySQL 编程语言
a.
了解结构化查询语言 的作用和主要特点；
SQL
b.
掌握 语言组成；
MySQL
c.
掌握 聚合函数、 数学函数、 字符串函数、 日期和时间函数和其他常用函数的概念及使用；
MySQL
聚合函数： 、 、 、 、 ；
COUNT() SUM() AVG() MAX() MIN()
数学函数： 、 、 、 、 、 、 ；
ABS() FLOOR() RAND() TRUNCATE() SQRT() ROUND() ROUND( )
字符串函数： 、 、 、 、 、 、 、
UPPER() UCASE() LEFT() SUBSTRING() RTRIM() REVERSE() FIELD()
LOCATE() POSITION() INSTR()、 、 ；
日 期 和 时 间 函 数 ： 、 、 、 、
CURDATE( ) CURRENT
_
DATE( ) CURTIME( ) NOW( )
CURRENT
TIME() DATEDIFF() ADDDATE() ADDDATE() SUBDATE()、 、 、 、 ；
_
其他常用函数： 、 、 。
IF() IFNULL() VERSION()
数据定义
1．
2．
3．
4．
5．
6．
（一）定义数据库
掌握数据库的创建、查看、选择、修改和删除等操作；
掌握数据库的建立命令： ；
CREATE DATABASE
掌握选择数据库的命令： ；
USE db
name
_
掌握查看数据库的命令： ；
SHOW { DATABASES|SCHEMAS}
掌握修改数据库的命令： ；
ALTER { DATABASES|SCHEMAS}
掌握删除数据库的命令： 。
DROP { DATABASES|SCHEMAS}
（二） 定义表