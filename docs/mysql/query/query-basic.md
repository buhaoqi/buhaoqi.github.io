---
noteId: "efb3d260331311f0ab03e5a28898bc4c"
tags: []

---

## 数据查询是什么

数据查询是指对数据库中的数据有效地进行检索、统计和组织输出。

- 检索：精准定位目标数据（WHERE、LIKE、DISTINCT）。从数据库中查找并提取符合条件的数据。
- 统计：聚合分析数据特征（COUNT、SUM、GROUP BY）。对数据进行汇总计算，生成聚合结果（如总和、平均值、计数等）。
- 输出：优化结果可读性和可用性（格式化、排序、导出）。将检索或统计结果 以可读形式呈现，支持多种格式。

## SQL查询语句
SQL（Structured Query Language）查询语句是用于从关系型数据库中检索、操作和管理数据的标准化语言。其核心是 SELECT 语句，通过组合不同的子句，用户可以从表中提取特定数据，并支持过滤、排序、分组、聚合等操作。

数据查询通过`SQL查询语句`实现。

## SQL查询语句语法

```sql
SELECT [DISTINCT] 列名或表达式 [AS] 别名  -- SELECT子句
FROM 表名                               -- FROM子句
[WHERE 条件]                            -- WHERE子句
[GROUP BY 分组列]                        -- GROUP子句 
[HAVING 分组条件]                       -- HAVING子句
[ORDER BY 排序列 [ASC|DESC]]            -- ORDER子句
[LIMIT [偏移量,] 行数];                   -- LIMIT子句
```
## 子句

子句(Clause)是SQL语句中的一个组成部分。

一个完整的 SQL 查询语句由多个子句（clauses）组成，每个子句以关键字开头并完成特定功能。

- `SELECT`  指定查询的列或表达式
- `FROM` 指定数据的来源表
- `WHERE` 指定筛选条件
- `HAVING` 过滤结果
- `ORDER` 指定排序方式
- `LIMIT` 指定结果显示的行数

>主句：这一术语在 SQL 中并不常用。通常将整个查询语句视为由多个子句构成，没有“主句”与“从句”的严格区分。

