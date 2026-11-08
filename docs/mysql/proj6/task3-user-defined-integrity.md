---
title: 任务三 用户定义的完整性
description: 数据库原理与应用技术《MySQL》项目六 MySQL数据库完整性 任务三 用户定义的完整性知识点总结。掌握非空约束和默认值约束的概念、设置和删除方法，理解用户自定义完整性在保证数据准确性中的作用。
keywords: [MySQL, 用户定义完整性, 非空约束, NOT NULL, 默认值约束, DEFAULT, ALTER TABLE CHANGE, ALTER TABLE MODIFY, 域完整性, 对口升学]
sidebar_label: 任务三 用户定义的完整性
sidebar_position: 3
slug: /mysql/proj6/task3-user-defined-integrity
tags: [MySQL, 项目六, 任务三, 对口升学]
---

## 知识点

### 1.什么是用户定义的完整性？

答：用户定义的完整性是根据用户实际的完整性要求来定义的，在执行数据插入、更新等操作时，DBMS会检查数据是否满足限定条件，避免不符合条件的操作，以确保数据存储的准确性。用户定义的完整性包括非空约束、自增约束和默认值约束等。用户定义的完整性属于域完整性约束，针对表中特定字段的值进行限制。

### 2.什么是非空约束？非空约束有什么特点？

答：非空约束（NOT NULL）属于域完整性约束，要求字段（列）的值不能为空，但可以重复。设置了非空约束的字段在插入数据时必须提供值，如果取空值则会出现错误。NULL值意味着"没有值"或"未知值"，不同于零、空白或长度为零的字符串。

### 3.如何在创建表时添加非空约束？

答：在CREATE TABLE语句中，在字段定义后添加NOT NULL。语法格式为：
```
CREATE TABLE 表名(
    列名 数据类型 NOT NULL
)
```
例如：`CREATE TABLE student5(stuname varchar(20) NOT NULL);`
此时student5数据表内的姓名字段不能取空值。

### 4.如何为已创建的表添加和取消非空约束？

答：添加非空约束（使用ALTER TABLE CHANGE）：
```
ALTER TABLE 表名 CHANGE 旧列名 新列名 数据类型 NOT NULL
```
例如：`ALTER TABLE student CHANGE Stuname Stuname varchar(20) NOT NULL;`

取消非空约束（去掉NOT NULL即可）：
```
ALTER TABLE 表名 CHANGE 旧列名 新列名 数据类型
```
例如：`ALTER TABLE student CHANGE Stuname Stuname varchar(20);`

也可以在Navicat中通过"设计表"来设置：右键点击表选择"设计表"，在字段的"不是null"选项中勾选或取消非空约束。

### 5.什么是默认值约束？默认值约束有什么作用？

答：默认值约束（DEFAULT）是给某个字段（某列）指定默认值。一旦设置默认值，在插入数据时如果此字段没有显式赋值，则自动赋值为默认值。例如给成绩字段设置默认值为0，当没有给该学生成绩赋值时，默认成绩为0分。

### 6.如何在创建表时添加默认值约束？

答：在CREATE TABLE语句中，在字段定义后添加DEFAULT关键字和默认值。语法格式为：
```
CREATE TABLE 表名(
    字段名1 数据类型,
    字段名2 数据类型,
    ...
    字段名n 数据类型 DEFAULT 字段默认值
)
```
例如：`CREATE TABLE score_2(id int, stuname varchar(20), sc int DEFAULT 0);`

### 7.如何为已创建的表添加和删除默认值约束？

答：添加默认值约束（使用ALTER TABLE MODIFY）：
```
ALTER TABLE 表名 MODIFY 字段名 数据类型 DEFAULT 默认值
```
例如：`ALTER TABLE course MODIFY classhour INT DEFAULT 40;`

删除默认值约束（去掉DEFAULT即可）：
```
ALTER TABLE 表名 MODIFY 字段名 数据类型
```
例如：`ALTER TABLE course MODIFY classhour INT;`

### 8.非空约束和默认值约束的添加和删除方式有什么共同点？

答：非空约束和默认值约束的添加和删除方式类似：
（1）都可以在创建表时直接在字段定义中添加。
（2）都可以通过ALTER TABLE语句添加和删除。
（3）删除时都是把约束语句（NOT NULL或DEFAULT）删掉即可。
（4）添加非空约束使用ALTER TABLE CHANGE语句，添加默认值约束使用ALTER TABLE MODIFY语句。
（5）添加约束后可以在数据表中输入相应数据观察表结构的变化。
