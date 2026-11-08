---
title: 任务二 删除索引
description: 数据库原理与应用技术《MySQL》项目八 索引与视图 任务二 删除索引知识点总结。涵盖使用ALTER TABLE DROP INDEX语句删除索引、DROP INDEX语句删除索引、SHOW INDEX查看索引信息、删除索引的注意事项等核心知识点。
keywords: [MySQL, 删除索引, DROP INDEX, ALTER TABLE DROP INDEX, SHOW INDEX, 索引维护, 对口升学]
sidebar_label: 任务二 删除索引
sidebar_position: 2
slug: /mysql/proj8/task2-drop-index
tags: [MySQL, 项目八, 任务二, 对口升学]
---

## 知识点

### 1. 为什么需要删除索引？

答：创建索引之后，对数据的添加、修改、删除等操作会使索引页出现碎片，影响数据查询性能。为了提高查询效率，数据库管理员需要定期对索引进行相应的维护，其中包括删除和修改索引。不再使用的索引也应该及时删除，因为索引会占用存储空间并降低数据更新操作的性能。

### 2. 删除索引有哪几种方法？

答：MySQL中删除索引有两种方法：
- 使用 `ALTER TABLE 表名 DROP INDEX 索引名;` 语句
- 使用 `DROP INDEX 索引名 ON 表名;` 语句

### 3. ALTER TABLE语句删除索引的语法格式是什么？

答：使用ALTER TABLE语句删除索引的语法格式：

```sql
ALTER TABLE 表名 DROP INDEX 索引名;
```

例如：`ALTER TABLE Speciality DROP INDEX SY_Spename;` 删除Speciality表上名为SY_Spename的索引。

### 4. DROP INDEX语句的语法格式是什么？

答：使用DROP INDEX语句删除索引的语法格式：

```sql
DROP INDEX 索引名 ON 表名;
```

例如：`DROP INDEX SY_FT_Speciality ON student;` 删除student表上名为SY_FT_Speciality的索引。

### 5. 如何查看表上的索引信息？

答：使用 `SHOW INDEX FROM 表名;` 语句查看表上的索引信息。例如：

```sql
SHOW INDEX FROM Speciality;
```

如果表中没有索引，返回Empty set；如果有索引，则显示索引的详细信息（包括索引名、字段名、索引类型、索引方法等）。

### 6. 删除表中的列时，该列上的索引会怎样？

答：删除表中的列时，会自动删除与该列相关的索引信息：
- 若待删除的列为索引的组成部分，则该列会从索引中删除
- 若组成索引的所有列都被删除，则整个索引将被删除

### 7. ALTER TABLE DROP INDEX和DROP INDEX有什么区别？

答：两种方法在功能上没有本质区别，都能删除指定索引：
- `ALTER TABLE 表名 DROP INDEX 索引名`：将删除索引作为ALTER TABLE语句的一部分
- `DROP INDEX 索引名 ON 表名`：使用独立的DROP INDEX语句删除索引

两者都需要指定索引名和表名，执行后都会从表中永久移除指定的索引。

### 8. 删除主键索引的方法是什么？

答：由于CREATE INDEX语句不能创建主键索引，删除主键索引也不能使用DROP INDEX语句，需要使用ALTER TABLE语句：

```sql
ALTER TABLE 表名 DROP PRIMARY KEY;
```

注意：如果主键列同时是AUTO_INCREMENT的，需要先移除AUTO_INCREMENT属性，否则无法删除主键索引。

### 9. 索引维护的主要内容是什么？

答：索引维护的主要内容包括：
- **定期检查索引碎片**：数据增删改操作会产生索引碎片，影响查询效率
- **删除不再使用的索引**：避免不必要的存储开销和更新性能损失
- **重建索引**：对于碎片较多的索引，可以删除后重新创建
- **监控索引使用情况**：确保索引被有效使用，不被冗余索引拖慢更新速度

### 10. 删除索引时需要注意什么？

答：删除索引时的注意事项：
- 删除索引前应确认该索引确实不再被使用，否则可能影响查询性能
- 删除主键索引需要使用ALTER TABLE DROP PRIMARY KEY，不能用DROP INDEX
- 删除表中的列会自动删除该列相关的索引
- 删除索引是不可恢复操作（除非有事务保护），应谨慎操作
- 删除索引后会释放该索引占用的存储空间
