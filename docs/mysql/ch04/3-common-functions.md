---
title: MySQL 常用函数
description: 介绍 MySQL 中的聚合函数、数学函数、字符串函数、日期时间函数及其他常用函数（IF、IFNULL、VERSION）。
keywords: [MySQL, 函数, COUNT, SUM, AVG, ABS, FLOOR, RAND, ROUND, UPPER, SUBSTRING, NOW, DATEDIFF, IFNULL, 对口升学]
sidebar_label: 4.3 MySQL常用函数
sidebar_position: 3
slug: /mysql/ch04/3-common-functions
tags: [MySQL, 第四章, DML, 对口升学]
---

## 知识点

### 4.3.1 聚合函数

| 函数 | 作用 | 示例 |
| --- | --- | --- |
| `COUNT()` | 统计行数 | `COUNT(*)`、`COUNT(sno)` |
| `SUM()` | 求和 | `SUM(sage)` |
| `AVG()` | 求平均值 | `AVG(sage)` |
| `MAX()` | 求最大值 | `MAX(sage)` |
| `MIN()` | 求最小值 | `MIN(sage)` |

> `COUNT(*)` 统计所有行（含 NULL 行），`COUNT(字段)` 不计该字段为 NULL 的行。

### 4.3.2 数学函数

| 函数 | 作用 | 示例结果 |
| --- | --- | --- |
| `ABS(x)` | 绝对值 | `ABS(-5)` → 5 |
| `FLOOR(x)` | 向下取整（返回不大于 x 的最大整数） | `FLOOR(3.7)` → 3 |
| `CEIL(x)` / `CEILING(x)` | 向上取整 | `CEIL(3.2)` → 4 |
| `RAND()` | 返回 0~1 之间的随机数 | `RAND()` → 0.73... |
| `TRUNCATE(x, d)` | 截断到 d 位小数（不四舍五入） | `TRUNCATE(3.789, 2)` → 3.78 |
| `SQRT(x)` | 平方根 | `SQRT(16)` → 4 |
| `ROUND(x, d)` | 四舍五入到 d 位小数 | `ROUND(3.785, 2)` → 3.79 |
| `MOD(x, y)` | 求余 | `MOD(10, 3)` → 1 |
| `POW(x, y)` | 幂运算 | `POW(2, 3)` → 8 |

> `FLOOR` 与 `CEIL`、`TRUNCATE` 与 `ROUND` 的区别是常考点。

### 4.3.3 字符串函数

| 函数 | 作用 | 示例结果 |
| --- | --- | --- |
| `UPPER(s)` / `UCASE(s)` | 转换为大写 | `UPPER('abc')` → 'ABC' |
| `LOWER(s)` / `LCASE(s)` | 转换为小写 | `LOWER('ABC')` → 'abc' |
| `LEFT(s, n)` | 取字符串左边 n 个字符 | `LEFT('MySQL', 2)` → 'My' |
| `RIGHT(s, n)` | 取字符串右边 n 个字符 | `RIGHT('MySQL', 3)` → 'SQL' |
| `SUBSTRING(s, pos, len)` | 从 pos 位置截取 len 个字符 | `SUBSTRING('MySQL', 2, 3)` → 'ySQ' |
| `RTRIM(s)` | 去除尾部空格 | `RTRIM('ab  ')` → 'ab' |
| `LTRIM(s)` | 去除前导空格 | `LTRIM('  ab')` → 'ab' |
| `TRIM(s)` | 去除首尾空格 | `TRIM(' ab ')` → 'ab' |
| `REVERSE(s)` | 反转字符串 | `REVERSE('abc')` → 'cba' |
| `FIELD(s, s1, s2, ...)` | 返回 s 在列表中的位置 | `FIELD('b','a','b','c')` → 2 |
| `LOCATE(s1, s)` | 返回 s1 在 s 中的位置 | `LOCATE('SQL','MySQL')` → 3 |
| `POSITION(s1 IN s)` | 同 LOCATE | `POSITION('SQL' IN 'MySQL')` → 3 |
| `INSTR(s, s1)` | 同 LOCATE（参数顺序不同） | `INSTR('MySQL','SQL')` → 3 |
| `LENGTH(s)` | 字符串字节长度 | `LENGTH('中国')` → 6（utf8mb4） |
| `CHAR_LENGTH(s)` | 字符串字符数 | `CHAR_LENGTH('中国')` → 2 |
| `CONCAT(s1, s2, ...)` | 拼接字符串 | `CONCAT('a','b')` → 'ab' |

> MySQL 中字符串位置从 **1** 开始计数（不是 0）。

### 4.3.4 日期和时间函数

| 函数 | 作用 | 示例 |
| --- | --- | --- |
| `CURDATE()` / `CURRENT_DATE()` | 返回当前日期 | '2026-11-28' |
| `CURTIME()` / `CURRENT_TIME()` | 返回当前时间 | '13:48:15' |
| `NOW()` | 返回当前日期和时间 | '2026-11-28 13:48:15' |
| `DATEDIFF(d1, d2)` | 计算两个日期相差天数（d1 - d2） | `DATEDIFF('2026-11-30','2026-11-28')` → 2 |
| `ADDDATE(d, n)` / `DATE_ADD(d, INTERVAL n DAY)` | 日期加上 n 天 | `ADDDATE('2026-11-28', 2)` → '2026-11-30' |
| `SUBDATE(d, n)` / `DATE_SUB(d, INTERVAL n DAY)` | 日期减去 n 天 | `SUBDATE('2026-11-28', 2)` → '2026-11-26' |
| `YEAR(d)` / `MONTH(d)` / `DAY(d)` | 提取年/月/日 | `YEAR('2026-11-28')` → 2026 |
| `DATE_FORMAT(d, fmt)` | 格式化日期 | `DATE_FORMAT(NOW(),'%Y/%m/%d')` |

### 4.3.5 其他常用函数

| 函数 | 作用 | 示例 |
| --- | --- | --- |
| `IF(expr, v1, v2)` | 条件为真返回 v1，否则返回 v2 | `IF(sage>=18, '成年', '未成年')` |
| `IFNULL(v1, v2)` | v1 为 NULL 时返回 v2，否则返回 v1 | `IFNULL(sage, 0)` |
| `VERSION()` | 返回 MySQL 服务器版本号 | `SELECT VERSION();` |
| `DATABASE()` | 返回当前数据库名 | `SELECT DATABASE();` |
| `USER()` | 返回当前用户名 | `SELECT USER();` |

```sql
SELECT sname, IF(sage >= 18, '成年', '未成年') AS 是否成年 FROM students;
SELECT sname, IFNULL(sage, 0) AS 年龄 FROM students;
```

## 考点提示

- 高频考点：数学函数 `ABS`、`FLOOR`、`RAND`、`TRUNCATE`、`SQRT`、`ROUND`；字符串函数 `LEFT`、`SUBSTRING`、`REVERSE`、`LOCATE`。
- 易错点：`TRUNCATE(x,d)` 直接截断不四舍五入，`ROUND(x,d)` 四舍五入；`LOCATE(s1,s)` 与 `INSTR(s,s1)` 参数顺序相反。
- `IFNULL()` 常用于处理空值，`VERSION()` 常与 `SELECT VERSION();` 一起考查。
