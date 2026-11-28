---
title: 索引
description: 介绍索引的基本概念、分类（普通/唯一/主键/全文索引、单列/组合索引、聚簇/非聚簇索引），以及索引的创建与删除方法。
keywords: [MySQL, 索引, 普通索引, 唯一索引, 主键索引, 全文索引, 组合索引, 聚簇索引, CREATE INDEX, DROP INDEX, 对口升学]
sidebar_label: 5.1 索引
sidebar_position: 1
slug: /mysql/ch05/1-index
tags: [MySQL, 第五章, 数据库对象管理, 对口升学]
---

## 知识点

### 5.1.1 索引的基本概念

**索引**是帮助 MySQL 高效获取数据的**数据结构**，类似于书本的目录。

- **作用**：加快数据查询速度、加速表连接、减少排序和分组的时间、保证数据唯一性；
- **原理**：通过额外的有序数据结构（B+Tree、Hash 等）建立键值与记录位置的映射，避免全表扫描；
- **优点**：显著提高查询效率；
- **缺点**：占用额外存储空间；降低插入、修改、删除的速度（需同步维护索引）。

> 索引不是越多越好，应根据查询需求在经常用于**查询条件（WHERE）、连接（ON）、排序（ORDER BY）**的字段上建立。

### 5.1.2 索引的分类

#### （1）按功能分类

| 类型 | 说明 |
| --- | --- |
| **普通索引** | 最基本的索引，无唯一性限制，允许重复和 NULL |
| **唯一索引** | 索引列的值必须唯一，但允许 NULL；创建 UNIQUE 约束时自动建立 |
| **主键索引** | 特殊的唯一索引，不允许 NULL；创建 PRIMARY KEY 时自动建立，一个表只有一个 |
| **全文索引** | 用于大文本字段的全文搜索（`FULLTEXT`），主要配合 `MATCH ... AGAINST` 使用 |

#### （2）按字段数量分类

- **单列索引**：只基于一个字段建立；
- **组合索引（复合索引）**：基于多个字段建立，查询时遵循**最左前缀原则**。

#### （3）按存储组织方式分类

| 类型 | 说明 |
| --- | --- |
| **聚簇索引（Clustered Index）** | 索引与数据存储在同一棵 B+Tree 中，叶子节点存放完整行数据；InnoDB 以主键为聚簇索引，一个表只能有一个 |
| **非聚簇索引（辅助索引 / Secondary Index）** | 索引结构与数据分开存储，叶子节点存放的是指向数据行的指针（主键值）；一个表可有多个 |

### 5.1.3 索引的创建

```sql
-- （1）创建表时创建索引
CREATE TABLE students (
    sno CHAR(10) PRIMARY KEY,             -- 主键索引
    sname VARCHAR(20),
    sphone CHAR(11),
    INDEX idx_sname (sname),              -- 普通索引
    UNIQUE INDEX uk_phone (sphone),       -- 唯一索引
    INDEX idx_name_phone (sname, sphone)  -- 组合索引
);

-- （2）CREATE INDEX（不能创建主键索引）
CREATE INDEX idx_sname ON students(sname);

-- （3）CREATE UNIQUE INDEX
CREATE UNIQUE INDEX uk_phone ON students(sphone);

-- （4）ALTER TABLE ... ADD INDEX
ALTER TABLE students ADD INDEX idx_sname (sname);

-- （5）ALTER TABLE ... ADD UNIQUE INDEX
ALTER TABLE students ADD UNIQUE INDEX uk_phone (sphone);

-- （6）创建全文索引
CREATE FULLTEXT INDEX ft_intro ON students(intro);
-- 或 ALTER TABLE students ADD FULLTEXT INDEX ft_intro (intro);
```

**查看索引**：

```sql
SHOW INDEX FROM students;
SHOW INDEXES FROM students;
```

### 5.1.4 索引的删除

```sql
-- 方式一：DROP INDEX
DROP INDEX idx_sname ON students;

-- 方式二：ALTER TABLE ... DROP INDEX
ALTER TABLE students DROP INDEX idx_sname;

-- 删除主键索引（特殊）
ALTER TABLE students DROP PRIMARY KEY;
```

> 注意：`DROP INDEX 索引名 ON 表名` 必须指定表名；删除唯一索引和删除唯一约束在 MySQL 中都是 `DROP INDEX`。

## 考点提示

- 高频考点：索引的优缺点、索引分类、`CREATE INDEX` / `DROP INDEX` 语法。
- 易错点：聚簇索引一个表**只能有一个**（InnoDB 为主键），非聚簇索引可以有多个；`CREATE INDEX` 不能创建主键索引。
- 组合索引遵循"最左前缀原则"，常以简答题形式考查。
