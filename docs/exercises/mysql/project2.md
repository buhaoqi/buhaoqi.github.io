---
noteId: "9461cc1073fe11f0ac7f012540a4f7e6"
tags: []

---

查询产品表


## 1.创建产品表

要求：表名（products）

- 产品id（p_id)： 整型、自动增长、主键
- 产品名称(p_name):  最多100个字符 非空
- 价格(price)：精确到小数点后2位 非空
- 库存(stock)：整型 默认0
- 产品类别(category)：'电子产品', '服装', '食品', '家居', '图书'   非空
- 产品状态(is_active)：'上架', '下架'  默认 '上架'
- 创建日期(created_at)：提取系统日期时间

```sql
CREATE TABLE products (
    p_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '产品ID',
    p_name VARCHAR(100) NOT NULL COMMENT '产品名称',
    price DECIMAL(10, 2) NOT NULL COMMENT '价格（精确到小数点后两位）',
    stock INT DEFAULT 0 COMMENT '库存数量',
    category ENUM('电子产品', '服装', '食品', '家居', '图书') NOT NULL COMMENT '分类',
    is_active ENUM('上架', '下架') DEFAULT '上架' COMMENT '是否上架',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间'
) COMMENT '产品信息表';
```

## 2.插入产品数据

> 数据见"数据-产品信息.txt"

##  **3. 排序（`ORDER BY`）**

**作用**：按指定字段排序结果。
**语法**：

```sql
SELECT 列名 FROM 表名 ORDER BY 列名 [ASC|DESC];
```

**单字段排序**：

  ```sql
SELECT * FROM products ORDER BY price DESC; -- 按价格降序
  ```

**多字段排序**：

  ```sql
SELECT * FROM employees 
ORDER BY department ASC, salary DESC; -- 先按部门升序，同部门按薪资降序
  ```

---

##  **4.去重**（`DISTINCT`）：

```sql
SELECT DISTINCT department FROM employees; -- 去除重复部门名
```

## 5.GROUP BY的用法

`GROUP BY` 是 SQL 中用于对查询结果按指定列分组的核心语句，通常与聚合函数（如 `COUNT`、`SUM`、`AVG` 等）结合使用，实现数据的分组统计和分析。以下是其用法详解：

**一、基础语法**

```sql
SELECT 列1, 列2, 聚合函数(列3)
FROM 表名
WHERE 过滤条件
GROUP BY 列1, 列2
ORDER BY 排序字段;
```

**二、核心作用**

1. **数据分组**  
   将表中数据按指定列的值分组，相同值的行归为一组。
2. **分组统计**  
   对每组数据应用聚合函数，计算汇总值（如总和、平均值、最大值等）。

## 练习1:产品表查询

1 查询所有上架产品

```sql

```

2 查询价格低于 100 元的商品

```sql

```

3 按价格降序显示电子产品

```sql

```

4 查询价格在 50~200 元之间且库存大于 50 的商品

```sql

```

5 查询库存为 0 的商品名称

```sql

```

6 查询名称包含“电视”的商品

```sql

```

7 查询名称包含“裤”的商品并按库存升序排列

```sql

```

8 查询最新创建的 3 个商品

```sql

```

## 练习2:分页查询

```sql
1. 查询公司工资最高的人；
2. select * from employees order by salary  desc limit 1;
3. 查询公司年龄最大的人；
4. select * from employees order by age  desc limit 1;
5. 查询公司入职最早的人；
6. select * from employees order by created_at  desc limit 1;
```

## 练习3:排序查询

```sql
# 根据年龄对公司的员工进行升序排序
select * from newtable order by age;
# 根据入职时间, 对员工进行降序排序
select * from newtable order by entrydate desc;
# 根据年龄对公司的员工进行升序排序 , 年龄相同 , 再按照入职时间进行降序排序
select * from newtable order by age asc ,entrydate desc ;
```

## 练习4:群组查询

```sql
1. 使用群组查询公司中的部门（去重）
2. select department from employees group by department;
3. 统计男性员工 和 女性员工的数量 
4. select gender,avg(age) from employees group by gender;
5. 根据性别分组，统计男性员工 和 女性员工的平均年龄
6. select gender,avg(age) from employees group by gender
7. 统计每个部门的员工数量。
8. select department, count(*)  from employees group by department;
9. 统计来自不同省份的员工数量
10. select province,count(*) from employees group by province;
11. 统计不同学历的员工数量
12. select education,count(*) from employees group by education;
```