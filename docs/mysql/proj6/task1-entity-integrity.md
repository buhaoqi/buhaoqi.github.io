---
title: 任务一 实体完整性
description: 数据库原理与应用技术《MySQL》项目六 MySQL数据库完整性 任务一 实体完整性知识点总结。掌握实体完整性的概念和规则，掌握主键约束和唯一约束的定义、添加、删除方法，理解联合主键的作用。
keywords: [MySQL, 实体完整性, 主键约束, PRIMARY KEY, 唯一约束, UNIQUE KEY, 联合主键, 复合主键, 约束, CONSTRAINT, 对口升学]
sidebar_label: 任务一 实体完整性
sidebar_position: 1
slug: /mysql/proj6/task1-entity-integrity
tags: [MySQL, 项目六, 任务一, 对口升学]
---

## 知识点

### 1.什么是实体？什么是实体完整性？

答：实体（Entity）是一个数据对象，是指客观存在并可以相互区分的事物，如一个教师、一个学生或一个雇员等。一个实体在数据库中表现为表中的一条记录。

实体完整性（Entity Integrity）指的是表中行的完整性，要求表中的所有行都有唯一的标识符，称为主关键字。实体完整性规则要求基本关系中的所有主关键字（或主键）对应的主属性都不能取空值（NULL value）。关系数据库中每个元组应该是可区分的、唯一的，这样的约束条件用实体完整性来保证。

### 2.什么是元组和字段？

答：元组（tuple）是关系数据库中的基本概念，关系是一张表，表中的每行（即数据库中的每条记录）就是一个元组，每列就是一个属性。在二维表里，元组也称为行。

字段（Field）表示与对象或类关联的变量。在数据库中，表的"列"称为"字段"，每个字段包含某一专题的信息。例如"通讯录"数据库中，"姓名"、"联系电话"这些表中所有行共有的属性，所以把这些列称为"姓名"字段和"联系电话"字段。

### 3.什么是约束？约束的作用是什么？

答：约束（restrain）是作用于表中字段上的规则，用于限制存储在表中的数据，目的是保证数据库中数据的正确性、有效性和完整性。通过约束可以实现实体完整性、参照完整性和用户自定义完整性。MySQL中的约束包括主键约束（PRIMARY KEY）、唯一约束（UNIQUE KEY）、外键约束（FOREIGN KEY）、非空约束（NOT NULL）、默认值约束（DEFAULT）等。

### 4.什么是主键约束？主键约束有哪些特点？

答：主键约束（PRIMARY KEY）是指在表中定义一个主键来唯一确定表中每一行数据的标识符。主键约束的特点：
（1）每张表只能有一个主键（一个数据表最多可以创建一个主键）。
（2）主键列的值必须唯一，不能重复。
（3）主键列不能为空值（NULL），指定为主键后该字段自动为非空。
（4）主键唯一地标识了每一条数据。

### 5.如何在创建表时添加主键约束？

答：在CREATE TABLE语句中使用PRIMARY KEY子句。语法格式为：
```
CREATE TABLE 表名(
    字段1 数据类型,
    ...
    PRIMARY KEY(约束列)
)
```
例如：`CREATE TABLE STUDENT_1(stuid int, name varchar(20), ssex varchar(10), PRIMARY KEY(stuid));`

### 6.如何为已创建的表添加和删除主键约束？

答：添加主键约束：
```
ALTER TABLE 表名 ADD [CONSTRAINT <约束名>] PRIMARY KEY(约束列)
```
例如：`ALTER TABLE teacher ADD PRIMARY KEY(Teaid);`

删除主键约束：
```
ALTER TABLE 表名 [CONSTRAINT <约束名>] DROP PRIMARY KEY
```
例如：`ALTER TABLE teacher DROP PRIMARY KEY;`

注意：如果表中已有主键，不能设置第二个主键。

### 7.什么是联合主键？如何添加联合主键？

答：联合主键是由一张表中多个字段组成的主键。当主键由多个字段组成时，不能直接在字段名后面声明主键约束。一张表只能有一个主键，联合主键也是一个主键。

添加联合主键的语法：
```
ALTER TABLE 表名 ADD [CONSTRAINT <约束名>] PRIMARY KEY(字段1, 字段2, ..., 字段n)
```
例如：`ALTER TABLE student ADD PRIMARY KEY(Stuid, Stuname);`

联合主键与单一主键的区别：以Stuid为单一主键时，Stuid字段不允许任何两条记录重复；以Stuid和Stuname为联合主键时，Stuid字段允许重复，但不允许任何两条记录在Stuid和Stuname两个字段上都重复。

### 8.什么是唯一约束？唯一约束与主键约束有什么区别？

答：唯一约束（UNIQUE KEY）是为表中的某一列添加唯一约束，保证该列中所有数据各不相同，任何两行都不能有相同的列值。

唯一约束与主键约束的区别：
（1）一张表只能有一个主键，但可以为多个列设置唯一约束。
（2）主键列不能为NULL，唯一约束的列可以为空值（但空值只能出现一次）。
（3）主键是表的主关键字，唯一约束用于保证非主键字段的唯一性（如身份证号）。

### 9.如何在创建表时设置唯一约束？

答：在CREATE TABLE语句中，可以直接在字段定义后添加UNIQUE KEY，也可以在表定义末尾使用UNIQUE KEY子句。语法格式为：
```
CREATE TABLE 表名(
    ...
    字段名 数据类型 UNIQUE KEY
)
```
例如：`CREATE TABLE STUDENT_2(stuid int, name varchar(20), idcard varchar(30) UNIQUE KEY);`

### 10.如何为已存在的表设置和删除唯一约束？

答：设置唯一约束：
```
ALTER TABLE 表名 ADD [CONSTRAINT <约束名>] UNIQUE KEY(约束列)
```
例如：`ALTER TABLE student ADD UNIQUE KEY(Stuid);`

可以同时为多个字段添加唯一约束：
```
ALTER TABLE student ADD UNIQUE KEY(Stuid, Stuname);
```

删除唯一约束：
```
ALTER TABLE 表名 DROP INDEX UNIQUE(约束列)
```
例如：`ALTER TABLE STU DROP INDEX phone;`

### 11.如何给约束命名？有约束名和无约束名有什么区别？

答：使用CONSTRAINT关键字给约束命名。例如：
- 无约束名：`ALTER TABLE STU ADD UNIQUE KEY(phone);`（系统自动生成约束名）
- 有约束名：`ALTER TABLE STU ADD CONSTRAINT PG UNIQUE(phone);`（约束名为PG）

给约束命名后，可以通过约束名来管理和删除约束，更加灵活方便。
