---
noteId: "675ce460741d11f0ac7f012540a4f7e6"
tags: []

---

## 聚合函数是什么

在 MySQL 中，**聚合函数（Aggregate Functions）** 是一种对一组值执行计算并返回单一汇总值的函数。它们通常用于统计、分组和数据分析场景，帮助用户快速获取数据的整体特征（如总和、平均值、最大值等）。

## **常见聚合函数**

以下是 MySQL 中最常用的聚合函数：

| 函数      | 作用               | 示例                               |
| --------- | ------------------ | ---------------------------------- |
| `COUNT()` | 统计行数           | `SELECT COUNT(*) FROM orders;`     |
| `SUM()`   | 计算数值列的总和   | `SELECT SUM(amount) FROM sales;`   |
| `AVG()`   | 计算数值列的平均值 | `SELECT AVG(salary) FROM staff;`   |
| `MAX()`   | 返回列中的最大值   | `SELECT MAX(price) FROM products;` |
| `MIN()`   | 返回列中的最小值   | `SELECT MIN(age) FROM users;`      |

## 聚合查询

```sql
1. 统计该企业员工数量
select count(*) from newtable;
2. 统计该企业员工的平均年龄
select avg(age) from employees;
3. 统计该企业员工的最大年龄
select max(age) from employees;
4. 统计该企业员工的最小年龄
select min(age) from employees;
5. 统计市场部员工的年龄之和
select sum(age) from employees where department = '市场部';
```


## 聚合函数配合 SELECT 使用

| 函数 | 说明 | 示例 |
|------|------|------|
| `COUNT(*)` | 统计行数 | `SELECT COUNT(*) FROM students;` |
| `AVG(score)` | 平均分 | `SELECT AVG(score) FROM students;` |
| `SUM(score)` | 总分 | `SELECT SUM(score) FROM students;` |
| `MAX(score)` | 最高分 | `SELECT MAX(score) FROM students;` |
| `MIN(score)` | 最低分 | `SELECT MIN(score) FROM students;` |

示例：查询学生的平均分数

```sql
SELECT AVG(score) AS 平均分 FROM students;
```

---

## **聚合函数与GROUP BY**

**常用聚合函数**
| 函数       | 说明                |
|------------|---------------------|
| `COUNT()`  | 统计行数            |
| `SUM()`    | 求和                |
| `AVG()`    | 平均值              |
| `MAX()`    | 最大值              |
| `MIN()`    | 最小值              |

**示例**

```sql
SELECT department, COUNT(*) AS '人数', AVG(salary) AS '平均薪资'
FROM employees
GROUP BY department
HAVING AVG(salary) > 5000;
```
- **说明**：按部门分组，筛选平均薪资超过5000的部门。
- **HAVING vs WHERE**：
  - `WHERE`：过滤原始数据（分组前）。
  - `HAVING`：过滤分组后的数据（分组后）。

---

