---
title: 视图
description: 介绍视图的基本概念、与基本表的区别、作用，以及视图的创建、查看、修改、删除和通过视图操作数据的方法。
keywords: [MySQL, 视图, CREATE VIEW, SHOW CREATE VIEW, ALTER VIEW, DROP VIEW, 可更新视图, 数据库对象, 对口升学]
sidebar_label: 5.2 视图
sidebar_position: 2
slug: /mysql/ch05/2-view
tags: [MySQL, 第五章, 数据库对象管理, 对口升学]
---

## 知识点

### 5.2.1 视图的基本概念

**视图（View）**是从一个或多个基本表（或其他视图）中导出的**虚拟表**。

- 视图**不保存实际数据**，只保存 `SELECT` 查询语句的定义；
- 视图中的数据在查询时动态生成，基表数据变化后视图结果随之变化；
- 视图的使用方法与普通表类似，可以像表一样被查询。

**视图与基本表的区别**：

| 比较项 | 视图 | 基本表 |
| --- | --- | --- |
| 数据存储 | 不存储数据，只存定义 | 实际存储数据 |
| 占用空间 | 几乎不占存储空间 | 占用存储空间 |
| 数据来源 | 由基表动态生成 | 数据本身 |
| 是否可更新 | 有条件可更新 | 可直接更新 |
| 依赖性 | 依赖基表，基表删除则视图失效 | 独立存在 |

**视图的作用**：

1. **简化数据查询**：将复杂查询封装成视图，用户只需简单查询；
2. **提高数据安全性**：只暴露允许访问的字段和记录，隐藏敏感数据；
3. **提供逻辑独立性**：屏蔽基表结构变化对应用程序的影响；
4. **定制用户视角**：不同用户可看到不同的数据视图；
5. **简化权限管理**。

### 5.2.2 视图的创建与管理

```sql
-- 创建视图
CREATE VIEW 视图名 [(列名列表)]
AS SELECT 语句
[WITH CHECK OPTION];
```

```sql
CREATE VIEW v_students AS
SELECT sno, sname, sage FROM students WHERE ssex = '女';

-- 带列名
CREATE VIEW v_score (学号, 姓名, 成绩) AS
SELECT s.sno, s.sname, sc.score FROM students s JOIN sc ON s.sno = sc.sno;
```

- `WITH CHECK OPTION`：保证通过视图修改的数据仍满足视图定义中的 `WHERE` 条件；
- 视图名不能与已有表名或视图名重复。

**查看视图**：

```sql
SHOW CREATE VIEW v_students;   -- 查看视图定义
DESC v_students;               -- 查看视图结构
SHOW TABLES;                   -- 视图也会显示
```

**修改视图**：

```sql
ALTER VIEW v_students AS
SELECT sno, sname FROM students WHERE ssex = '男';

-- 等价写法：CREATE OR REPLACE VIEW
CREATE OR REPLACE VIEW v_students AS SELECT sno, sname FROM students;
```

**删除视图**：

```sql
DROP VIEW [IF EXISTS] 视图名 [, 视图名2, ...];
DROP VIEW IF EXISTS v_students;
```

### 5.2.3 视图的数据操作

```sql
-- 通过视图插入数据
INSERT INTO v_students (sno, sname, sage) VALUES ('010', '小美', 19);

-- 通过视图修改数据
UPDATE v_students SET sage = 20 WHERE sno = '010';

-- 通过视图删除数据
DELETE FROM v_students WHERE sno = '010';
```

对视图的操作最终会转换为对基表的操作。

**可更新视图的基本条件**（可作为拓展）：

1. 视图必须基于**单个表**（不含多表连接）；
2. 视图的 SELECT 中不能包含 `DISTINCT`、`GROUP BY`、`HAVING`、聚合函数、`UNION`；
3. 视图中的每一行必须能唯一对应基表中的一行（通常要求包含主键）；
4. 不能包含计算列或常量列（除非给别名且不涉及修改）；
5. 不满足条件的视图只能用于查询，不能进行 `INSERT`/`UPDATE`/`DELETE`。

## 考点提示

- 高频考点：视图是**虚拟表**、不存数据；`CREATE VIEW ... AS SELECT`、`DROP VIEW` 语法。
- 易错点：视图依赖基表，基表结构改变可能导致视图失效；并非所有视图都可更新。
- `WITH CHECK OPTION` 的作用是保证修改后的数据仍符合视图条件——常考简答题。
