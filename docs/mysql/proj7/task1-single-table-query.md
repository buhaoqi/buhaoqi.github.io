---
title: 任务一 单表查询
description: 数据库原理与应用技术《MySQL》项目七 数据查询与更新 任务一 单表查询知识点总结。涵盖SELECT语句基本语法、简单查询（ALL/DISTINCT/AS/LIMIT）、条件查询（WHERE/LIKE/BETWEEN AND/IN/IS NULL）、ORDER BY排序、GROUP BY分组与聚合函数、HAVING子句等核心知识点。
keywords: [MySQL, 单表查询, SELECT语句, WHERE条件, ORDER BY排序, GROUP BY分组, 聚合函数, HAVING子句, LIMIT分页, DISTINCT去重, 对口升学]
sidebar_label: 任务一 单表查询
sidebar_position: 1
slug: /mysql/proj7/task1-single-table-query
tags: [MySQL, 项目七, 任务一, 对口升学]
---

## 知识点

### 1. MySQL中SELECT语句的基本语法格式是什么？

答：SELECT语句的基本语法格式为：

```sql
SELECT [ALL|DISTINCT] 字段列表
[INTO OUTFILE '文件名']
FROM 表名或视图列表
[WHERE 条件表达式]
[GROUP BY 字段名 [HAVING 条件表达式]]
[ORDER BY 字段名 [ASC|DESC]]
[LIMIT [偏移量,] 行数];
```

### 2. SELECT语句中各子句的执行顺序是怎样的？

答：SELECT语句的执行顺序为：FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT。即先确定数据来源（FROM），再过滤数据（WHERE），然后分组（GROUP BY），分组后过滤（HAVING），接着选择输出字段（SELECT），再排序（ORDER BY），最后限制行数（LIMIT）。

### 3. ALL和DISTINCT关键字的作用是什么？

答：ALL表示查询所有记录（包括重复行），是默认值；DISTINCT表示查询结果中去除重复行，只保留唯一的记录。语法：`SELECT [ALL|DISTINCT] 字段名 FROM 表名;`

### 4. 如何在查询结果中使用别名（AS）？

答：使用AS关键字为字段或表指定别名，使查询结果更易读。语法：`SELECT 字段名 AS 别名 FROM 表名 AS 别名;`。AS关键字可以省略，直接用空格分隔。例如：`SELECT sname AS 姓名, sage AS 年龄 FROM student;`

### 5. 如何查询表中的指定字段？

答：在SELECT后面列出要查询的字段名，用逗号分隔。例如：`SELECT sno, sname, sage FROM student;`，只查询学号、姓名和年龄三个字段。

### 6. 如何查询表中的所有字段？

答：使用星号（*）代表所有字段。例如：`SELECT * FROM student;`，查询student表中的所有字段的所有记录。

### 7. LIMIT关键字的作用是什么？如何使用？

答：LIMIT用于限制查询结果返回的行数。语法：`LIMIT 行数` 或 `LIMIT 偏移量, 行数`。例如：`SELECT * FROM student LIMIT 5;` 返回前5条记录；`SELECT * FROM student LIMIT 2, 3;` 从第3条开始返回3条记录（偏移量从0开始计数）。

### 8. WHERE子句的作用是什么？

答：WHERE子句用于指定查询条件，从表中筛选出满足条件的记录。只有满足WHERE条件表达式的记录才会出现在查询结果中。例如：`SELECT * FROM student WHERE sage > 20;` 查询年龄大于20的学生。

### 9. WHERE子句中可以使用哪些运算符？

答：WHERE子句中可以使用的运算符包括：
- 比较运算符：=、`<`、`>`、`<=`、`>=`、`<>`或!=（不等于）
- 逻辑运算符：AND（与）、OR（或）、NOT（非）
- 范围运算符：BETWEEN AND
- 集合运算符：IN、NOT IN
- 模式匹配：LIKE、NOT LIKE
- 空值判断：IS NULL、IS NOT NULL

### 10. LIKE运算符的作用是什么？通配符有哪些？

答：LIKE运算符用于字符串的模式匹配，判断字段值是否匹配指定的模式。支持两个通配符：
- `%`（百分号）：匹配任意长度的字符串（包括空字符串），例如 `WHERE sname LIKE '张%'` 查询姓"张"的所有学生
- `_`（下划线）：匹配单个任意字符，例如 `WHERE sname LIKE '_明'` 查询第二个字是"明"的两字姓名

### 11. BETWEEN AND运算符的作用是什么？

答：BETWEEN AND用于指定一个范围查询，判断字段值是否在指定范围内（包含边界值）。语法：`字段名 BETWEEN 值1 AND 值2`。例如：`SELECT * FROM student WHERE sage BETWEEN 18 AND 22;` 查询年龄在18到22之间的学生。等价于 `sage >= 18 AND sage <= 22`。

### 12. IN运算符的作用是什么？

答：IN运算符用于判断字段值是否在指定的集合中。语法：`字段名 IN (值1, 值2, ...)`。例如：`SELECT * FROM student WHERE sdept IN ('计算机系', '数学系');` 查询计算机系或数学系的学生。NOT IN则表示不在集合中。

### 13. IS NULL和IS NOT NULL的作用是什么？

答：IS NULL用于判断字段值是否为空值（NULL），IS NOT NULL用于判断字段值是否非空。注意：不能用 `= NULL` 或 `<> NULL` 来判断空值，因为NULL与任何值的比较结果都是NULL（未知）。例如：`SELECT * FROM student WHERE sphone IS NULL;` 查询没有电话号码的学生。

### 14. ORDER BY子句的作用是什么？

答：ORDER BY用于对查询结果按指定字段排序。ASC表示升序（默认），DESC表示降序。可以按多个字段排序，先按第一个字段排序，相同时再按第二个字段排序。例如：`SELECT * FROM student ORDER BY sdept ASC, sage DESC;` 先按系部升序，再按年龄降序排列。

### 15. GROUP BY子句的作用是什么？

答：GROUP BY用于将查询结果按指定字段分组，通常与聚合函数配合使用，对每个分组进行统计计算。例如：`SELECT sdept, COUNT(*) FROM student GROUP BY sdept;` 按系部分组并统计每个系的学生人数。

### 16. MySQL中常用的聚合函数有哪些？

答：常用的聚合函数包括：
- `COUNT(*)` 或 `COUNT(字段名)`：统计记录数，COUNT(*)包含NULL值，COUNT(字段名)不包含NULL值
- `SUM(字段名)`：计算指定字段值的总和
- `AVG(字段名)`：计算指定字段的平均值
- `MAX(字段名)`：求指定字段的最大值
- `MIN(字段名)`：求指定字段的最小值

### 17. HAVING子句的作用是什么？与WHERE有何区别？

答：HAVING子句用于对GROUP BY分组后的结果进行过滤，必须与GROUP BY配合使用。

HAVING与WHERE的区别：
- WHERE在分组前过滤数据（作用于FROM后面的表），HAVING在分组后过滤数据（作用于分组结果）
- WHERE中不能使用聚合函数，HAVING中可以使用聚合函数
- 例如：`SELECT sdept, COUNT(*) FROM student GROUP BY sdept HAVING COUNT(*) > 5;` 查询学生人数超过5人的系部

### 18. COUNT(*)、COUNT(字段名)和COUNT(DISTINCT 字段名)有什么区别？

答：
- `COUNT(*)`：统计表中所有记录数，包括NULL值
- `COUNT(字段名)`：统计指定字段非NULL值的记录数
- `COUNT(DISTINCT 字段名)`：统计指定字段非NULL且不重复的值的数量

### 19. 如何在查询中同时使用WHERE、GROUP BY、HAVING、ORDER BY？

答：完整查询示例：查询计算机系中年龄大于18岁的学生，按性别分组，统计每组人数，只显示人数大于2的组，按人数降序排列：
```sql
SELECT ssex, COUNT(*) AS 人数
FROM student
WHERE sdept = '计算机系' AND sage > 18
GROUP BY ssex
HAVING COUNT(*) > 2
ORDER BY 人数 DESC;
```

### 20. 多字段排序的规则是什么？

答：ORDER BY可以指定多个排序字段，各字段间用逗号分隔。排序时先按第一个字段排序，当第一个字段值相同时，再按第二个字段排序，依此类推。每个字段可以单独指定ASC或DESC。例如：`ORDER BY sdept ASC, sage DESC` 表示先按系部升序排列，同一系部内再按年龄降序排列。
