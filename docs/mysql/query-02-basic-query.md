---
noteId: "e01f54c02d6211f0965ee5785546709e"
tags: []

---

MySQL 的基础查询是操作数据库的核心，主要围绕 `SELECT` 语句展开。以下是基础查询的核心知识点和用法：

---











## 案例：员工信息表
建表要求：

- id 
- 员工编号（empno）: 格式：D001，唯一
- 姓名（ename）
- 性别（gender）
- 年龄（age） 22-60
- 学历（education） :'大专','本科','研究生'
- 身份证号（d_card）:唯一  18位
- 省份（province） 
- 城市（city）
- 电邮（email）: 格式：xxx@qq.com
- 薪水（salary）
- 职位（job）
- 部门（department）:'财务部','人力部','设计部','开发部','市场部','行政部','后勤部'
- 入职日期（hiredate）

## 建表

```sql
CREATE TABLE employees (
  id INT PRIMARY KEY AUTO_INCREMENT,
  empno VARCHAR(4) UNIQUE NOT NULL,
  ename VARCHAR(20) NOT NULL,
  gender ENUM('男','女') NOT NULL,
  age TINYINT NOT NULL CHECK (age BETWEEN 22 AND 60),
  education ENUM('大专','本科','研究生') NOT NULL,
  d_card CHAR(18) UNIQUE NOT NULL CHECK (LENGTH(d_card)=18),
  province VARCHAR(10) NOT NULL,
  city VARCHAR(20) NOT NULL,
  email VARCHAR(50) NOT NULL,
  salary DECIMAL(8,2) NOT NULL,
  job VARCHAR(20) NOT NULL,
  department VARCHAR(10) NOT NULL CHECK (department IN ('财务部','人力部','设计部','开发部','市场部','行政部','后勤部')),
  hiredate DATE NOT NULL 
);
```
## 插入数据
见 员工信息.txt

## 案例2：查询

```sql
1、查询年龄小于 30 的员工信息。
2、查询年龄大于等于 50 的员工信息
5、查询年龄等于 30 的员工信息
6、查询年龄不等于 30 的员工信息

3、查询没有身份证号的员工信息
4、查询有身份证号的员工信息
6、查询年龄在25岁(包含) 到 35岁(包含)之间的员工信息
7、查询性别为 女 且年龄小于 30岁的员工信息
8、查询年龄等于 30 或 40 或 50 的员工信息
9、查询姓名为两个字的员工信息
10、查询身份证号最后一位是X的员工信息
```

## 排序查询

20、根据年龄对公司的员工进行升序排序
21、根据入职时间, 对员工进行降序排序
22、根据年龄对公司的员工进行升序排序 , 年龄相同 , 再按照入职时间进行降序排序



```sql
1. select * from newtable where age < 20;
2. select * from newtable where age <= 20;
3 select * from newtable where card_id is null;
4 select * from newtable where card_id is not null;
5 select * from newtable where age != 30;
6 select * from newtable where age >= 15 and age <= 20;
7 select * from newtable where age between 15 and 20;
8 select * from newtable where gender = '女' and age < 25;
9 select * from newtable where age = 18 or age = 20 or age =40;
10 select * from newtable where age in (18,20,40);
11 select * from newtable where name like '__';
12 select * from newtable where card_id like '%x';
13 select count(*) from newtable;
14 select avg(age) from newtable;
15 select max(age) from newtable;
16 select min(age) from newtable;
17 select sum(age) from newtable where workaddress = '西安';
18 select  gender,count(*) from newtable group by gender;
19 select gender,avg(age) from newtable group by gender;
20 select workaddress from newtable where age < 45 group by workaddress having count(workaddress) > 3;
21 select workaddress,gender,count(*) from newtable group by workaddress, gender;
22 select * from newtable order by age;
23 select * from newtable order by entrydate desc;
24 select * from newtable order by age asc ,entrydate desc ;
```

## `SELECT` 语句
**用途**

从表中查询/检索数据。 

**语法**
  
```sql
SELECT [DISTINCT] [列名|表达式|聚合函数] 
FROM 表名 
WHERE 过滤条件 
GROUP BY 分组字段 
HAVING 分组后过滤 
ORDER BY 排序字段 
LIMIT 分页;
```

## 查全部列

```sql
  SELECT * FROM employees;
```

## 查特定列

语法
```sql
SELECT 列名1,列名2,...列名N FROM 表名;
```

练习
```sql
# 查询姓名、年龄、工资
SELECT name, age, salary FROM employees;
```

## 设置别名

语法
```sql
SELECT 列名1 AS 别名1, 列名2  AS 别名2 FROM employees;
```

练习（员工信息表）

```sql
# 查询name设置为“姓名”，查询工资设置为“年薪”
SELECT name AS 姓名, salary * N  AS 薪资 FROM employees;
```

## 过滤数据（`WHERE` 子句）
**用途**：

筛选满足条件的行。 

**基础语法**：
```sql
SELECT 列名 FROM 表名 WHERE 条件表达式;
```

## 比较查询
**比较运算符**：

- `>`  `=`  `<`  `!=` `>=`  `<=`

练习（商品信息表）
```sql
# 查询价格大于100的商品
SELECT * FROM products WHERE price > 100;   -- 价格大于100
```

练习(学生信息表)
```sql
查询分数不等于60的学生名字
SELECT name FROM students WHERE score != 60; -- 分数不等于60
```

**逻辑运算符**：

- `AND`  与
- `OR`  或
- `NOT`  非

```sql
  SELECT * FROM orders 
  WHERE total_amount > 1000 AND status = 'paid';
```

**范围匹配**：

- `BETWEEN ... AND ...`： 在...和...之间
  
```sql
    SELECT * FROM sales 
    WHERE sale_date BETWEEN '2023-01-01' AND '2023-12-31';
```

**列表匹配：**

- IN：匹配列表中的任意值
- NOT IN：排除列表中的值
  
```sql
    SELECT * FROM employees 
    WHERE department IN ('HR', 'Finance');
```
**模糊匹配**：

- `LIKE %匹配任意字符`
- `LIKE _匹配单个字符`
```sql
  SELECT * FROM users WHERE email LIKE '%@gmail.com'; -- Gmail用户
  SELECT name FROM books WHERE title LIKE '数据库%';   -- 以“数据库”开头的书名
```

**空值判断**：

- `IS NULL`：值为空
- `IS NOT NULL`：值非空

```sql
  SELECT * FROM customers WHERE phone IS NULL;   -- 电话号码为空
  SELECT * FROM students WHERE email IS NOT NULL; -- 邮箱已填写
```

---

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

##  **5. 分页（`LIMIT`）**
**作用**：限制返回的行数，常用于分页查询。  
**语法**：
```sql
SELECT 列名 FROM 表名 LIMIT 行数 [OFFSET 偏移量];
-- 或
SELECT 列名 FROM 表名 LIMIT 偏移量, 行数;
```

- **示例**：
  ```sql
  SELECT * FROM logs LIMIT 10;       -- 返回前10条
  SELECT * FROM logs LIMIT 5 OFFSET 10; -- 跳过前10条，返回接下来的5条（第3页，每页5条）
  -- 等效写法：
  SELECT * FROM logs LIMIT 10, 5;
  ```

---

##  **6. 聚合函数与分组（`GROUP BY`）**
**作用**：对数据进行汇总统计。  
**常用聚合函数**：
- `COUNT()`：统计行数。
- `SUM()`：求和。
- `AVG()`：平均值。
- `MAX()`：最大值。
- `MIN()`：最小值。

**语法**：
```sql
SELECT 聚合函数(列名) FROM 表名 GROUP BY 分组字段;
```

- **示例**：
  ```sql
  -- 统计每个部门的平均工资
  SELECT department, AVG(salary) FROM employees GROUP BY department;

  -- 统计每个城市的客户数量
  SELECT city, COUNT(*) FROM customers GROUP BY city;
  ```

---

##  **7. 分组后过滤（`HAVING`）**
**作用**：对分组后的结果进行过滤（`WHERE` 过滤原始数据，`HAVING` 过滤分组结果）。  
**语法**：
```sql
SELECT 列名 FROM 表名 
GROUP BY 分组字段 
HAVING 条件;
```

- **示例**：
  ```sql
  -- 筛选平均工资超过5000的部门
  SELECT department, AVG(salary) 
  FROM employees 
  GROUP BY department 
  HAVING AVG(salary) > 5000;
  ```

---

##  **8. 执行顺序与注意事项**
**查询语句的执行顺序**：
1. `FROM` → 确定数据来源（包括 `JOIN`）
2. `WHERE` → 过滤原始数据
3. `GROUP BY` → 分组
4. `HAVING` → 过滤分组结果
5. `SELECT` → 选择字段并计算表达式
6. `ORDER BY` → 排序
7. `LIMIT` → 分页

**常见错误**：
- **在 `WHERE` 中使用别名**：
  ```sql
  -- 错误示例（别名在 SELECT 阶段生成，WHERE 执行时尚未生效）
  SELECT salary * 12 AS annual_salary 
  FROM employees 
  WHERE annual_salary > 100000;
  
  -- 正确写法
  SELECT salary * 12 AS annual_salary 
  FROM employees 
  WHERE salary * 12 > 100000;
  ```

- **混淆 `WHERE` 和 `HAVING`**：
  ```sql
  -- 错误：尝试在 WHERE 中使用聚合函数
  SELECT department, AVG(salary) 
  FROM employees 
  WHERE AVG(salary) > 5000 
  GROUP BY department;
  
  -- 正确：使用 HAVING
  SELECT department, AVG(salary) 
  FROM employees 
  GROUP BY department 
  HAVING AVG(salary) > 5000;
  ```

---

##  **8. 综合示例**
```sql
-- 查询2023年销售额超过10万的销售员，按销售额降序排列，显示前5名
SELECT salesperson_id, SUM(amount) AS total_sales
FROM sales
WHERE YEAR(sale_date) = 2023
GROUP BY salesperson_id
HAVING total_sales > 100000
ORDER BY total_sales DESC
LIMIT 5;
```

---

### **总结**
- **基础查询核心**：`SELECT`、`WHERE`、`ORDER BY`、`LIMIT`、`GROUP BY`、`HAVING`。
- **性能优化**：避免 `SELECT *`，合理使用索引，减少全表扫描。
- **注意执行顺序**：理解执行顺序可避免逻辑错误（如别名不可用于 `WHERE`）。

掌握这些基础操作后，可以应对大多数单表查询需求，并为复杂查询（如多表关联、子查询）打下基础。




MySQL中的`WHERE`语句用于过滤记录，是数据查询和操作中不可或缺的部分。以下是对其用法的详细说明：

---

### **1. 基本语法**
```sql
SELECT 列名 FROM 表名 WHERE 条件;
```
- **适用场景**：`SELECT`、`UPDATE`、`DELETE`等操作。
- **作用**：仅返回满足条件的记录。

---

### **2. 比较运算符**
用于字段与值之间的比较：
- `=`（等于）
- `<>` 或 `!=`（不等于）
- `>`（大于）、`<`（小于）
- `>=`（大于等于）、`<=`（小于等于）

**示例**：
```sql
SELECT * FROM employees WHERE age > 30;
SELECT name FROM students WHERE score <> 60; -- 分数不等于60
```

---

### **3. 逻辑运算符**
组合多个条件：
- `AND`：所有条件必须同时满足。
- `OR`：至少满足一个条件。
- `NOT`：取反条件。

**示例**：
```sql
SELECT * FROM employees 
WHERE department = 'Sales' AND salary > 5000;

SELECT * FROM users 
WHERE age < 18 OR age > 65; -- 未成年人或老年人
```

---

### **4. IN 和 BETWEEN**
- **IN**：匹配列表中的任意值。
- **BETWEEN**：在范围内（包含边界）。

**示例**：
```sql
SELECT * FROM products 
WHERE category IN ('Electronics', 'Books');

SELECT * FROM orders 
WHERE order_date BETWEEN '2023-01-01' AND '2023-12-31';
```

---

### **5. LIKE 和通配符**
模糊匹配文本：
- `%`：匹配任意多个字符。
- `_`：匹配单个字符。

**示例**：
```sql
SELECT * FROM customers 
WHERE name LIKE 'J%'; -- 名字以J开头

SELECT * FROM emails 
WHERE address LIKE '%@gmail.com'; -- Gmail邮箱
```

---

### **6. IS NULL 和 IS NOT NULL**
检测字段是否为`NULL`：
```sql
SELECT * FROM employees 
WHERE phone_number IS NULL; -- 电话号码为空

SELECT * FROM students 
WHERE email IS NOT NULL; -- 邮箱已填写
```

---

### **7. 组合条件与优先级**
使用括号`()`明确逻辑顺序：
```sql
SELECT * FROM employees 
WHERE (department = 'Sales' OR department = 'IT') 
  AND hire_date > '2020-01-01';
```

---

### **8. 子查询**
在`WHERE`中使用子查询：
```sql
SELECT * FROM employees 
WHERE department_id IN (
  SELECT id FROM departments WHERE location = 'New York'
);
```

---

### **9. 函数与计算**
**示例**：使用函数处理字段（注意可能影响性能）：
```sql
SELECT * FROM orders 
WHERE YEAR(order_date) = 2023; -- 2023年的订单
```

---

### **10. 常见错误与注意事项**
- **别名不可用**：`WHERE`中不能使用`SELECT`定义的别名。
  ```sql
  -- 错误示例
  SELECT name AS emp_name FROM employees WHERE emp_name = 'Alice';
  ```
- **NULL处理**：不可用`= NULL`，必须用`IS NULL`。
- **日期和字符串**：需用引号包裹，如`'2023-01-01'`。

---

### **总结**
- **WHERE vs HAVING**：`WHERE`在分组前过滤，`HAVING`在分组后过滤。
- **性能优化**：避免对字段使用函数，合理利用索引提升效率。

通过灵活组合上述用法，`WHERE`语句能高效筛选所需数据，是SQL查询的核心工具之一。