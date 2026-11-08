---
title: 任务二 连接查询
description: 数据库原理与应用技术《MySQL》项目七 数据查询与更新 任务二 连接查询知识点总结。涵盖内连接（INNER JOIN）、左外连接（LEFT JOIN）、右外连接（RIGHT JOIN）、交叉连接（CROSS JOIN）的语法格式与使用方法，以及连接查询的条件指定方式。
keywords: [MySQL, 连接查询, INNER JOIN, LEFT JOIN, RIGHT JOIN, CROSS JOIN, 内连接, 外连接, 交叉连接, 对口升学]
sidebar_label: 任务二 连接查询
sidebar_position: 2
slug: /mysql/proj7/task2-join-query
tags: [MySQL, 项目七, 任务二, 对口升学]
---

## 知识点

### 1. 什么是连接查询？连接查询有哪些类型？

答：连接查询是指从两个或多个表中，根据表之间的关联关系（通常是外键关系），将数据组合在一起的查询方式。连接查询的类型包括：
- 内连接（INNER JOIN）
- 左外连接（LEFT JOIN / LEFT OUTER JOIN）
- 右外连接（RIGHT JOIN / RIGHT OUTER JOIN）
- 交叉连接（CROSS JOIN）

### 2. 内连接（INNER JOIN）的语法格式和作用是什么？

答：内连接只返回两个表中满足连接条件的记录。语法格式：

```sql
SELECT 字段列表
FROM 表1
INNER JOIN 表2
ON 表1.字段 = 表2.字段;
```

例如：`SELECT student.sno, sname, cname FROM student INNER JOIN sc ON student.sno = sc.sno;` 查询有选课记录的学生信息。

### 3. 内连接的另一种写法是什么？

答：内连接也可以使用WHERE子句的等值连接方式实现：

```sql
SELECT 字段列表
FROM 表1, 表2
WHERE 表1.字段 = 表2.字段;
```

例如：`SELECT student.sno, sname, cname FROM student, sc WHERE student.sno = sc.sno;`

### 4. 左外连接（LEFT JOIN）的语法格式和作用是什么？

答：左外连接返回左表的所有记录，以及右表中满足连接条件的记录。如果右表中没有匹配的记录，则右表字段显示为NULL。语法格式：

```sql
SELECT 字段列表
FROM 表1
LEFT [OUTER] JOIN 表2
ON 表1.字段 = 表2.字段;
```

例如：`SELECT student.sno, sname, cname FROM student LEFT JOIN sc ON student.sno = sc.sno;` 查询所有学生及其选课信息，没有选课的学生课程名显示为NULL。

### 5. 右外连接（RIGHT JOIN）的语法格式和作用是什么？

答：右外连接返回右表的所有记录，以及左表中满足连接条件的记录。如果左表中没有匹配的记录，则左表字段显示为NULL。语法格式：

```sql
SELECT 字段列表
FROM 表1
RIGHT [OUTER] JOIN 表2
ON 表1.字段 = 表2.字段;
```

例如：`SELECT student.sno, sname, cname FROM student RIGHT JOIN sc ON student.sno = sc.sno;` 查询所有选课记录及对应学生信息。

### 6. 交叉连接（CROSS JOIN）的语法格式和作用是什么？

答：交叉连接返回两个表的笛卡尔积，即左表每条记录与右表每条记录的组合，不需要连接条件。结果行数为两表行数的乘积。语法格式：

```sql
SELECT 字段列表
FROM 表1
CROSS JOIN 表2;
```

例如：`SELECT * FROM student CROSS JOIN course;` 返回student表和course表所有记录的组合。

### 7. LEFT JOIN和RIGHT JOIN有什么区别？

答：
- **LEFT JOIN**：以左表为基准，返回左表所有记录，右表无匹配时显示NULL
- **RIGHT JOIN**：以右表为基准，返回右表所有记录，左表无匹配时显示NULL

实际上，`A LEFT JOIN B ON 条件` 等价于 `B RIGHT JOIN A ON 条件`，只是基准表不同。

### 8. 内连接与外连接有什么区别？

答：
- **内连接（INNER JOIN）**：只返回两表中都满足连接条件的记录，不匹配的记录被排除
- **外连接（OUTER JOIN）**：返回一个表的所有记录，另一表中无匹配的记录对应字段显示NULL
  - 左外连接：返回左表全部记录
  - 右外连接：返回右表全部记录

例如，学生表有10人，选课表有8条记录，其中6条对应学生表中的学生：
- 内连接返回6条匹配记录
- 左外连接返回10条（4条选课信息为NULL）
- 右外连接返回8条

### 9. 连接查询中ON和WHERE的区别是什么？

答：在连接查询中，ON用于指定连接条件（即两表之间的关联关系），WHERE用于对连接后的结果进行额外过滤。

在外连接中，ON的条件不会过滤掉基准表的记录，而WHERE的条件会过滤掉所有不满足条件的记录（包括基准表的记录）。即ON条件只影响匹配，WHERE条件影响最终结果集。

### 10. 多表连接查询如何实现？

答：可以通过连续使用JOIN关键字实现三个或更多表的连接查询。语法格式：

```sql
SELECT 字段列表
FROM 表1
JOIN 表2 ON 表1.字段 = 表2.字段
JOIN 表3 ON 表2.字段 = 表3.字段;
```

例如：`SELECT sname, cname, grade FROM student JOIN sc ON student.sno = sc.sno JOIN course ON sc.cno = course.cno;` 查询学生姓名、课程名和成绩。
