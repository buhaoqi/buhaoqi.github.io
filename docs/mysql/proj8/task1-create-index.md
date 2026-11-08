---
title: 任务一 创建索引
description: 数据库原理与应用技术《MySQL》项目八 索引与视图 任务一 创建索引知识点总结。涵盖索引的概念与作用、索引的分类（主键索引/辅助索引、单列索引/复合索引）、四种常用辅助索引（普通索引/唯一索引/全文索引/空间索引）、CREATE INDEX语句、CREATE TABLE创建索引、ALTER TABLE添加索引、Navicat创建索引等核心知识点。
keywords: [MySQL, 索引, 创建索引, CREATE INDEX, ALTER TABLE ADD INDEX, 主键索引, 聚簇索引, 普通索引, 唯一索引, 全文索引, 空间索引, 复合索引, 单列索引, 对口升学]
sidebar_label: 任务一 创建索引
sidebar_position: 1
slug: /mysql/proj8/task1-create-index
tags: [MySQL, 项目八, 任务一, 对口升学]
---

## 知识点

### 1. 什么是索引？索引的作用是什么？

答：索引也称作"键（key）"，是存储引擎用于快速查找记录的一种数据结构，用来快速查询数据库表中的特定记录。索引是MySQL中的重要对象，是数据库实现数据快速定位和提高数据访问效率的关键技术。

索引如同书的目录，若想在一本书中查找某个内容，一般会先看书的目录，从而根据页码快速找到相关内容。在MySQL中，存储引擎用类似的方法使用索引，先在索引中找到对应值，然后根据匹配的索引找到对应的数据。在MySQL中，所有数据类型都可以被索引。

### 2. 索引根据表中列的特性分为哪两类？

答：索引根据表中列的特性，逻辑上分为主键索引和辅助索引两类：
- **主键索引**：由PRIMARY KEY约束定义的一种特殊的唯一性索引，用于根据主键自身的唯一性标识每条记录，防止添加主键索引的字段值重复或为NULL。InnoDB存储引擎中数据的保存顺序与主键索引的顺序一致，这类索引也被称为聚簇索引，一张表只能有一个聚簇索引。
- **辅助索引**：从性能上来说，主键索引的性能相对来说最好，但查询优化更多的是对辅助索引进行建立和维护。

### 3. 什么是聚簇索引？

答：聚簇索引是InnoDB存储引擎中一种特殊的索引类型。在聚簇索引中，数据的物理存储顺序与索引的顺序一致，即表中的数据行按照主键索引的顺序存储。一张表只能有一个聚簇索引，通常就是主键索引。InnoDB存储引擎中数据的保存顺序与主键索引的顺序一致。

### 4. MySQL常用的辅助索引有哪些类型？

答：MySQL常用的辅助索引有四种：
- **普通索引**：MySQL中的基本索引，允许在定义索引的列中插入重复值和空值
- **唯一索引**：索引列的值必须唯一，但允许有空值
- **全文索引**：一种特殊类型的索引，查找的是文本中的关键词，而不是直接比较索引中的值。全文索引可以在CHAR、VARCHAR或者TEXT类型的列上创建
- **空间索引**：定义在空间数据类型上的索引，且索引字段不能为空

### 5. 什么是单列索引和复合索引？

答：根据创建索引的字段个数，可以将索引分为：
- **单列索引**：在表的单个字段上创建的索引
- **复合索引**：在表的多个字段上创建的一个索引。复合索引只有在查询条件中使用了这些字段的最左边字段时，该索引才会被使用，即索引的使用要遵从**最左前缀原则**。复合索引的索引列按照从左至右的顺序进行排序。

### 6. 创建索引有哪几种方式？

答：创建索引可以使用三种方式：
- **CREATE INDEX语句**：在已有表上创建索引（不能创建主键索引）
- **CREATE TABLE语句**：在创建表的同时创建索引
- **ALTER TABLE语句**：通过ADD关键字向已有表添加索引
- 此外还可以使用Navicat等图形工具创建索引

### 7. CREATE INDEX语句的语法格式是什么？

答：CREATE INDEX语句的语法格式：

```sql
CREATE [UNIQUE|FULLTEXT|SPATIAL] INDEX 索引名 ON 表名(字段名[(长度)][ASC|DESC]);
```

参数说明：
- 索引名在表中必须唯一
- 字段名可以是多列（创建复合索引）
- 长度表示在字段左边多少个字符上创建索引
- UNIQUE表示唯一索引；FULLTEXT表示全文索引；SPATIAL表示空间索引
- ASC|DESC分别表示升序排列和降序排列
- CREATE INDEX语句不能创建主键索引

### 8. CREATE TABLE语句中创建索引的语法格式是什么？

答：在CREATE TABLE语句中创建索引的语法格式：

```sql
CREATE TABLE 表名(
    字段定义1,
    字段定义2,
    ...
    字段定义N,
    [UNIQUE|FULLTEXT|SPATIAL] INDEX|KEY 索引名(字段名[(长度)][ASC|DESC] [VISIBLE|INVISIBLE])
);
```

参数说明：
- INDEX和KEY表示索引关键字，只选其一即可
- VISIBLE|INVISIBLE标识索引的可见性，VISIBLE为可见（默认值），INVISIBLE为不可见索引，在数据查询时优化器会忽略不可见索引

### 9. ALTER TABLE语句添加索引的语法格式是什么？

答：使用ALTER TABLE语句添加索引的语法格式：

```sql
ALTER TABLE 表名
ADD [UNIQUE|FULLTEXT|SPATIAL] [INDEX|KEY] 索引名(字段名[(长度)][ASC|DESC]);
```

关键字ADD表示向表中添加索引，其他参数与使用CREATE TABLE语句创建索引时相同。

### 10. 什么是不可见索引（INVISIBLE）？

答：不可见索引是MySQL中一种特殊的索引可见性设置。当创建索引时设置为INVISIBLE时，该索引对查询优化器不可见，优化器在执行查询时会忽略该索引。设置为VISIBLE（默认值）则索引正常参与查询优化。不可见索引主要用于测试移除索引对查询性能的影响，而不需要真正删除索引。

### 11. 如何在Navicat中创建索引？

答：在Navicat中创建索引的步骤：
1. 打开Navicat，右键单击对象资源浏览器中表对象下的目标表，选择"设计表"
2. 在打开的表设计器中选择"索引"选项卡
3. 在"名"中输入索引名称，"字段"中选择要创建索引的列，"索引类型"选择索引类型（如NORMAL、UNIQUE、FULLTEXT等）
4. "索引方法"选择BTREE（InnoDB存储引擎只支持BTREE索引）
5. 单击工具栏中的"保存"按钮

### 12. 全文索引的创建示例和特点是什么？

答：全文索引创建示例：`CREATE FULLTEXT INDEX SY_FT_Speciality ON student(Speciality);`，在student表的Speciality列上创建全文索引。

特点：全文索引查找的是文本中的关键词，而不是直接比较索引中的值，可以在CHAR、VARCHAR或者TEXT类型的列上创建。

### 13. 如何在CREATE TABLE时同时创建唯一索引？

答：在CREATE TABLE语句中直接添加UNIQUE INDEX子句。例如：

```sql
CREATE TABLE Speciality(
    Speid INT NOT NULL,
    Spename VARCHAR(50) NOT NULL,
    UNIQUE INDEX SY_Spename(Spename)
);
```

执行后在Spename列上创建唯一索引，当向表中插入数据时，要保证Spename列上数据的唯一性。

### 14. 如何使用ALTER TABLE创建复合索引？

答：使用ALTER TABLE的ADD INDEX子句在多个列上创建复合索引。例如：

```sql
ALTER TABLE student ADD INDEX IX_student(Stusex, Speciality, Address);
```

在student表的Stusex、Speciality、Address三列上创建名为IX_student的复合索引。复合索引的使用遵从最左前缀原则，只有在查询条件中使用了Stusex（最左列）时，索引才会被使用。
