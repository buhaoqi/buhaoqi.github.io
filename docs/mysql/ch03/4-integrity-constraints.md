---
title: 数据完整性约束
description: 介绍数据完整性的概念与分类（实体完整性、参照完整性、用户定义完整性），讲解键与约束、约束命名，以及添加和删除完整性约束的方法。
keywords: [MySQL, 完整性约束, 实体完整性, 参照完整性, 用户定义完整性, PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, DEFAULT, CHECK, CONSTRAINT, 对口升学]
sidebar_label: 3.4 数据完整性约束
sidebar_position: 4
slug: /mysql/ch03/4-integrity-constraints
tags: [MySQL, 第三章, DDL, 对口升学]
---

## 知识点

### 3.4.1 数据完整性的基本概念

**数据完整性**是指数据的**正确性、有效性和相容性**，用于防止数据库中出现不符合语义、不正确的数据。

MySQL 提供三类完整性约束：

| 类型 | 含义 | 实现方式 |
| --- | --- | --- |
| **实体完整性** | 保证表中每一行（实体）可唯一标识，主键不能为空且不能重复 | `PRIMARY KEY`、`UNIQUE` |
| **参照完整性** | 保证表与表之间引用关系的一致性，外键的值必须存在于被引用表中或为 NULL | `FOREIGN KEY` |
| **用户定义完整性**（含域完整性） | 针对具体应用定义的语义约束，如取值范围、非空、默认值 | `NOT NULL`、`DEFAULT`、`CHECK` |

> 实体完整性和参照完整性称为**关系的两个不变性**，由 DBMS 自动支持；用户定义完整性由用户按需求定义。

### 3.4.2 键与约束

| 名称 | 说明 |
| --- | --- |
| **超键** | 能唯一标识元组的属性或属性集（可能含多余属性） |
| **候选键** | 不含多余属性的超键（最小超键） |
| **主键（PRIMARY KEY）** | 从候选键中选定的一个，唯一且非空，一个表**只能有一个**主键 |
| **外键（FOREIGN KEY）** | 引用另一张表主键的字段，用于建立表间联系 |
| **唯一约束（UNIQUE）** | 保证字段值不重复，允许为 NULL，一个表**可有多个** |
| **非空约束（NOT NULL）** | 字段值不能为空 |
| **默认值约束（DEFAULT）** | 未指定值时自动填入默认值 |
| **CHECK 约束** | 限制字段取值范围（MySQL 8.0.16 起真正生效） |

> 主键与唯一键的区别：主键**唯一且非空**，一个表只能有一个；唯一键**唯一但可为空**，一个表可有多个。

### 3.4.3 约束的命名：`CONSTRAINT`

为约束命名便于后续修改和删除：

```sql
CONSTRAINT 约束名 约束类型 (字段名)
```

```sql
CREATE TABLE students (
    sno CHAR(10),
    sname VARCHAR(20),
    CONSTRAINT pk_students PRIMARY KEY (sno),
    CONSTRAINT uq_sname UNIQUE (sname)
);
```

> 外键约束名在删除时必须使用，建议显式命名（未命名时 MySQL 会自动生成名称）。

### 3.4.4 添加完整性约束

#### （1）创建表时添加约束

```sql
CREATE TABLE students (
    sno   CHAR(10) PRIMARY KEY,                 -- 主键
    sname VARCHAR(20) NOT NULL UNIQUE,          -- 非空 + 唯一
    ssex  CHAR(2) DEFAULT '男',                 -- 默认值
    cno   CHAR(10),
    CONSTRAINT fk_stu_class FOREIGN KEY (cno) REFERENCES classes(cno),
    CONSTRAINT ck_age CHECK (sage >= 0 AND sage <= 120)
);
```

#### （2）修改表时添加约束

```sql
-- 添加主键
ALTER TABLE students ADD PRIMARY KEY (sno);

-- 添加外键
ALTER TABLE students ADD CONSTRAINT fk_stu_class
    FOREIGN KEY (cno) REFERENCES classes(cno);

-- 添加唯一约束（唯一索引）
ALTER TABLE students ADD UNIQUE (sname);

-- 添加非空约束
ALTER TABLE students MODIFY COLUMN sname VARCHAR(20) NOT NULL;

-- 添加默认值
ALTER TABLE students ALTER COLUMN ssex SET DEFAULT '男';

-- 添加 CHECK 约束
ALTER TABLE students ADD CONSTRAINT ck_age CHECK (sage >= 0);
```

### 3.4.5 删除完整性约束

```sql
-- 删除主键约束
ALTER TABLE students DROP PRIMARY KEY;

-- 删除外键约束（需指定约束名）
ALTER TABLE students DROP FOREIGN KEY fk_stu_class;

-- 删除唯一约束（MySQL 中唯一约束通过唯一索引实现）
ALTER TABLE students DROP INDEX sname;
-- 等价写法：DROP INDEX sname ON students;

-- 删除 CHECK 约束（适用时）
ALTER TABLE students DROP CHECK ck_age;
```

> 注意：主键字段若为 `AUTO_INCREMENT`，需先取消自增才能删除主键。删除被外键引用的主键前，需先删除外键约束。

## 考点提示

- 高频考点：三类完整性（实体、参照、用户定义）的概念及对应约束。
- 易错点：主键唯一且非空；UNIQUE 允许 NULL；MySQL 中删除唯一约束用 `DROP INDEX`。
- 删除外键必须写**约束名**（`DROP FOREIGN KEY 约束名`），删除主键不需要名字（`DROP PRIMARY KEY`）——常考对比。
