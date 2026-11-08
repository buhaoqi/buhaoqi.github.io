---
title: 任务四 完整性约束命名子句
description: 数据库原理与应用技术《MySQL》项目六 MySQL数据库完整性 任务四 完整性约束命名子句知识点总结。掌握使用CONSTRAINT子句对完整性约束条件命名的方法，灵活地增加和删除各种完整性约束。
keywords: [MySQL, CONSTRAINT, 完整性约束命名子句, 约束命名, PRIMARY KEY, FOREIGN KEY, NOT NULL, UNIQUE, DEFAULT, 约束管理, 对口升学]
sidebar_label: 任务四 完整性约束命名子句
sidebar_position: 4
slug: /mysql/proj6/task4-constraint-naming
tags: [MySQL, 项目六, 任务四, 对口升学]
---

## 知识点

### 1.什么是完整性约束命名子句？它的作用是什么？

答：完整性约束命名子句使用CONSTRAINT关键字对完整性约束条件进行命名，从而可以灵活地增加一个完整性约束条件。通过给约束命名，可以方便地管理和删除约束，使数据库的完整性约束管理更加规范和灵活。

### 2.完整性约束命名子句的语法格式是什么？

答：完整性约束命名子句的语法格式为：
```
CONSTRAINT <完整性约束条件名> <完整性约束条件>
```
其中完整性约束条件包括：主键约束（PRIMARY KEY）、外键约束（FOREIGN KEY）、非空约束（NOT NULL）、唯一约束（UNIQUE）、默认值约束（DEFAULT短语）等。

### 3.如何使用CONSTRAINT子句添加各种约束？

答：使用CONSTRAINT子句可以在建表后通过ALTER TABLE语句添加各种约束。例如创建学生表STUDENT_6，要求学号为主键、姓名不能为空、成绩默认为0、phone为唯一约束：
```sql
-- 建表
CREATE TABLE STUDENT_6(stuid varchar(10), stuname varchar(10), sc INT, phone varchar(30));

-- 添加主键约束，命名为C1
ALTER TABLE STUDENT_6 ADD CONSTRAINT C1 PRIMARY KEY(stuid);

-- 添加唯一约束，命名为C2
ALTER TABLE STUDENT_6 ADD CONSTRAINT C2 UNIQUE KEY(phone);

-- 添加非空约束
ALTER TABLE STUDENT_6 MODIFY COLUMN stuname varchar(10) NOT NULL;

-- 添加默认值约束
ALTER TABLE STUDENT_6 MODIFY COLUMN sc INT DEFAULT 0;
```

### 4.完整性约束条件包括哪些类型？

答：完整性约束条件包括以下5种类型：
（1）主键约束（PRIMARY KEY）：保证字段值唯一且不为空。
（2）外键约束（FOREIGN KEY）：保证表间数据一致性。
（3）非空约束（NOT NULL）：保证字段值不为空。
（4）唯一约束（UNIQUE）：保证字段值唯一，但可以为空。
（5）默认值约束（DEFAULT）：为字段设置默认值。

### 5.如何删除命名约束？

答：完整性约束的删除可以通过DROP语句实现，也可以直接不加约束子句再执行一遍命令来删除。例如：
- 删除主键约束：`ALTER TABLE 表名 DROP PRIMARY KEY;`
- 删除外键约束：`ALTER TABLE 表名 DROP FOREIGN KEY 外键名称;`
- 删除唯一约束：`ALTER TABLE 表名 DROP INDEX 约束名;`
- 删除非空约束：`ALTER TABLE 表名 CHANGE 列名 列名 数据类型;`（去掉NOT NULL）
- 删除默认值约束：`ALTER TABLE 表名 MODIFY 字段名 数据类型;`（去掉DEFAULT）

### 6.使用约束命名有什么优势？

答：（1）通过约束名可以方便地管理和定位特定约束。
（2）删除约束时可以直接通过约束名进行删除，不需要通过列名。
（3）在大型数据库中，约束命名可以使约束管理更加清晰和规范。
（4）便于在团队协作中沟通和理解约束的含义。
