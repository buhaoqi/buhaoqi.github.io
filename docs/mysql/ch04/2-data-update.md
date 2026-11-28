---
title: 数据更新
description: 介绍 MySQL 中插入、修改、删除数据的语句，包括 INSERT...VALUES/SET/SELECT、UPDATE、DELETE、TRUNCATE TABLE 及带子查询的数据更新。
keywords: [MySQL, INSERT, UPDATE, DELETE, TRUNCATE, 数据插入, 数据修改, 数据删除, 子查询, 对口升学]
sidebar_label: 4.2 数据更新
sidebar_position: 2
slug: /mysql/ch04/2-data-update
tags: [MySQL, 第四章, DML, 对口升学]
---

## 知识点

### 4.2.1 插入数据：`INSERT`

#### （1）`INSERT ... VALUES`（最常用）

```sql
-- 插入单条记录（指定字段）
INSERT INTO students (sno, sname, sage) VALUES ('001', '张三', 18);

-- 插入单条记录（不指定字段，须与表结构顺序、个数完全一致）
INSERT INTO students VALUES ('002', '李四', 20, '男');

-- 插入多条记录
INSERT INTO students (sno, sname, sage) VALUES
    ('003', '王五', 19),
    ('004', '赵六', 21),
    ('005', '钱七', 22);
```

- 字符串和日期值必须用**单引号**括起来；
- 指定字段列表时，未列出的字段取默认值或 NULL；
- 有 `AUTO_INCREMENT` 的字段可写 `NULL` 或 `0`，由系统自动生成。

#### （2）`INSERT ... SET`

```sql
INSERT INTO students SET sno = '006', sname = '孙八', sage = 20;
```

#### （3）`INSERT ... SELECT`（插入查询结果）

```sql
INSERT INTO students_backup (sno, sname, sage)
SELECT sno, sname, sage FROM students WHERE sage > 20;
```

> 常用于数据备份、归档及批量导入。

### 4.2.2 修改数据：`UPDATE`

```sql
UPDATE 表名
SET 字段1 = 值1 [, 字段2 = 值2, ...]
[WHERE 条件]
[ORDER BY 排序字段] [LIMIT 数量];
```

```sql
-- 修改单条记录（务必用 WHERE 限定）
UPDATE students SET sage = 19 WHERE sno = '001';

-- 修改多个字段
UPDATE students SET sage = sage + 1, sname = '张三丰' WHERE sno = '001';

-- 不带 WHERE 将修改表中所有记录（谨慎使用）
UPDATE students SET ssex = '男';
```

> ⚠️ 使用 `UPDATE` 时一定要检查 `WHERE` 条件，否则会误改全表数据。

**多表关联修改**（如纳入教学范围）：

```sql
UPDATE students s JOIN classes c ON s.cno = c.cno
SET s.classname = c.cname
WHERE c.cname = '计算机1班';
```

### 4.2.3 删除数据：`DELETE` 与 `TRUNCATE`

#### （1）`DELETE FROM`

```sql
DELETE FROM 表名 [WHERE 条件] [ORDER BY ...] [LIMIT 数量];
```

```sql
DELETE FROM students WHERE sno = '001';   -- 删除指定记录
DELETE FROM students;                     -- 删除全部记录（保留表结构）
```

#### （2）`TRUNCATE TABLE`

```sql
TRUNCATE TABLE students;
```

#### （3）`DELETE` 与 `TRUNCATE` 的区别

| 比较项 | `DELETE FROM` | `TRUNCATE TABLE` |
| --- | --- | --- |
| 语句类型 | DML | DDL |
| 删除范围 | 可带 `WHERE` 删除部分记录 | 只能清空整张表 |
| `WHERE` 条件 | 支持 | 不支持 |
| 事务回滚 | 可回滚（事务中） | 一般不可回滚 |
| `AUTO_INCREMENT` | 计数器不重置 | 计数器重置为 1 |
| 执行效率 | 较低（逐行删除，写日志） | 较高（直接释放数据页） |
| 触发器 | 会触发 `DELETE` 触发器 | 不触发 |

### 4.2.4 带子查询的数据更新

```sql
-- 带子查询的 DELETE
DELETE FROM students
WHERE cno = (SELECT cno FROM classes WHERE cname = '计算机1班');

-- 带子查询的 UPDATE（如纳入教学范围）
UPDATE students SET sage = sage + 1
WHERE cno IN (SELECT cno FROM classes WHERE cname = '计算机1班');
```

## 考点提示

- 高频考点：`INSERT INTO ... VALUES`、`UPDATE ... SET ... WHERE`、`DELETE FROM ... WHERE` 的语法。
- 易错点：`DELETE` 与 `TRUNCATE` 的区别（DDL/DML、是否可带 WHERE、自增是否重置、是否可回滚）——常考简答题。
- 修改、删除时忘记 `WHERE` 是典型错误，考试常借此设置陷阱。
