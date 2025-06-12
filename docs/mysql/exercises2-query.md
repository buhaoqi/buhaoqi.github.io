---
noteId: "59696e002e6d11f0b12143716a9ddc9b"
tags: []

---

## 案例1：创建员工信息表
要求：表名(employees)

- id 整型 主键 自动增长
- 员工编号（em_id）: 定长字符串 格式：D001，唯一
- 姓名（em_name）: 变长字符串 非空
- 性别（gender）: 字符串值列表
- 年龄（age）整型 检测22-60
- 学历（education）: 字符串值列表 '大专','本科','研究生'
- 身份证号（id_card）: 定长字符串  18位  唯一
- 省份（province）：变长字符串
- 城市（city）：变长字符串
- 电邮（email）：变长字符串
- 薪水（salary）：精确到小数点后两位
- 职位（job）：变长字符串
- 部门（department）: 变长字符串 '财务部','人力部','设计部','开发部','市场部','行政部','后勤部'
- 入职日期（hiredate）

参考答案

```sql
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    em_id CHAR(4) UNIQUE NOT NULL,
    em_name VARCHAR(50) NOT NULL,
    gender ENUM('男', '女') NOT NULL ,
    age INT CHECK (age BETWEEN 22 AND 60),
    education ENUM('大专', '本科', '研究生') NOT NULL,
    id_card CHAR(18) UNIQUE,
    province VARCHAR(50),
    city VARCHAR(50),
    email VARCHAR(100),
    salary DECIMAL(10, 2),
    job VARCHAR(50) ,
    department ENUM('财务部', '人力部', '设计部', '开发部', '市场部', '行政部', '后勤部') NOT NULL,
    hiredate DATE
) 
```

关键设计说明

- id 作为主键，使用 AUTO_INCREMENT 实现自动增长，确保唯一性。
- 员工编号 (em_id)
- CHAR(4) 定长字符串（如 D001）UNIQUE NOT NULL 确保编号唯一且非空。
- 性别 (gender)
- 使用 ENUM('男', '女') 限制取值范围，避免无效输入。
- 年龄 (age)CHECK (age BETWEEN 22 AND 60) 强制年龄在 22 至 60 岁之间（需 MySQL 8.0+ 支持 CHECK 约束）。
- 学历 (education)
- ENUM('大专', '本科', '研究生') 限定三种学历选项。
- 身份证号 (id_card)
- CHAR(18) 定长字符串，UNIQUE NOT NULL 确保唯一且非空。
- 部门 (department)
- ENUM 限定七个固定部门，防止无效值。
- 薪水 (salary)
- DECIMAL(10, 2) 精确存储金额，避免浮点误差。
- 其他字段
- 省份、城市、职位等使用 VARCHAR 存储变长字符串。
- 电邮字段长度设为 VARCHAR(100) 以适应常见邮箱地址。
- 插入数据

```sql
见员工数据.txt
```

## 案例2： 查询员工信息表

1. 查询年龄小于 30 的员工信息。
1. 查询年龄大于等于 50 的员工信息
1. 查询年龄等于 30 的员工信息
1. 查询年龄不等于 30 的员工信息
1. 查询没有身份证号的员工信息
1. 查询有身份证号的员工信息
1. 查询年龄在25岁(包含) 到 35岁(包含)之间的员工信息
1. 查询性别为 女 且年龄小于 30岁的员工信息
1. 查询年龄等于 30 或 40 或 50 的员工信息
1. 查询姓名为两个字的员工信息
1. 查询身份证号最后一位是X的员工信息
1. 根据年龄对公司的员工进行升序排序
1. 根据入职时间, 对员工进行降序排序
1. 根据年龄对公司的员工进行升序排序 , 年龄相同 , 再按照入职时间进行降序排序
1. 去重查询部门名称



## 基本 `SELECT` 语句

**用途**：从表中检索数据。  
**语法**：
```sql
SELECT 列名1, 列名2, ... FROM 表名;
```

**选择所有列**：

```sql
  SELECT * FROM employees;
```

**选择特定列**：

```sql
  SELECT name, age, salary FROM employees;
```

**列别名**（使用 `AS`）：

```sql
SELECT name AS 姓名, salary  AS 薪资 FROM employees;
SELECT name AS 姓名, salary * N  AS 薪资 FROM employees;
```

---

##  **2. 过滤数据（`WHERE` 子句）**
**用途**：筛选满足条件的行。  
**语法**：
```sql
SELECT 列名 FROM 表名 WHERE 条件表达式;
```

**比较运算符**：

- `>`  `=`  `<`  `!=` `>=`  `<=`
```sql
  SELECT * FROM products WHERE price > 100;   -- 价格大于100
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







以下是基于 **`employees`** 表的 **30 道基础 SELECT 查询练习题**，涵盖基本查询、条件过滤、排序、聚合等场景：

---

## **基础查询**
1. **查询所有员工的所有信息**  
   ```sql
   SELECT * FROM employees;
   ```

2. **仅显示员工的姓名(`ename`)、职位(`job`)、薪资(`salary`)**  
   ```sql
   SELECT ename, job, salary FROM employees;
   ```

---

## **条件过滤（WHERE）**
3. **查询财务部(`财务部`)的所有员工**  
   ```sql
   SELECT * FROM employees WHERE department = '财务部';
   ```

4. **查询薪资高于 15000 元的员工**  
   ```sql
   SELECT * FROM employees WHERE salary > 15000;
   ```

5. **查询年龄在 30 到 40 岁之间的员工（含边界）**  
   ```sql
   SELECT * FROM employees WHERE age BETWEEN 30 AND 40;
   ```

6. **查询邮箱地址包含 `@qq.com` 的员工**  
   ```sql
   SELECT * FROM employees WHERE email LIKE '%@qq.com%';
   ```

7. **查询身份证号(`d_card`)为空的员工**  
   ```sql
   SELECT * FROM employees WHERE d_card IS NULL;
   ```

8. **查询 2020 年之后入职的员工**  
   ```sql
   SELECT * FROM employees WHERE hiredate >= '2020-01-01';
   ```

9. **查询职位是 `Java开发` 或 `Python开发` 的员工**  
   ```sql
   SELECT * FROM employees WHERE job IN ('Java开发', 'Python开发');
   ```

10. **查询姓名以 `张` 开头的员工**  
    ```sql
    SELECT * FROM employees WHERE ename LIKE '张%';
    ```

---

## **排序（ORDER BY）**
11. **按年龄从小到大排序显示所有员工**  
    ```sql
    SELECT * FROM employees ORDER BY age ASC;
    ```

12. **按薪资从高到低排序，薪资相同则按入职时间从早到晚排序**  
    ```sql
    SELECT * FROM employees ORDER BY salary DESC, hiredate ASC;
    ```

---

## **聚合函数（COUNT, AVG, MAX, MIN）**
13. **统计公司总员工数**  
    ```sql
    SELECT COUNT(*) AS total_employees FROM employees;
    ```

14. **计算公司员工的平均年龄**  
    ```sql
    SELECT AVG(age) AS avg_age FROM employees;
    ```

15. **查询最高薪资和最低薪资**  
    ```sql
    SELECT MAX(salary) AS max_salary, MIN(salary) AS min_salary FROM employees;
    ```

16. **统计北京(`北京`)地区的员工数量**  
    ```sql
    SELECT COUNT(*) AS beijing_employees FROM employees WHERE province = '北京';
    ```

---

## **分组统计（GROUP BY）**
17. **按部门(`department`)统计员工数量**  
    ```sql
    SELECT department, COUNT(*) AS employee_count 
    FROM employees 
    GROUP BY department;
    ```

18. **按职位(`job`)计算平均薪资，并显示薪资最高的前 5 个职位**  
    ```sql
    SELECT job, AVG(salary) AS avg_salary 
    FROM employees 
    GROUP BY job 
    ORDER BY avg_salary DESC 
    LIMIT 5;
    ```

19. **统计各省份(`province`)的员工数量，并按数量降序排列**  
    ```sql
    SELECT province, COUNT(*) AS employee_count 
    FROM employees 
    GROUP BY province 
    ORDER BY employee_count DESC;
    ```

20. **按学历(`education`)分组，统计各学历的人数及平均薪资**  
    ```sql
    SELECT education, COUNT(*) AS count, AVG(salary) AS avg_salary 
    FROM employees 
    GROUP BY education;
    ```

---

## **去重与唯一值（DISTINCT）**
21. **列出所有不重复的省份名称**  
    ```sql
    SELECT DISTINCT province FROM employees;
    ```

22. **统计公司中不同的职位数量**  
    ```sql
    SELECT COUNT(DISTINCT job) AS unique_jobs FROM employees;
    ```

---

## **组合条件**
23. **查询财务部(`财务部`)薪资超过 10000 元的员工**  
    ```sql
    SELECT * FROM employees 
    WHERE department = '财务部' AND salary > 10000;
    ```

24. **查询年龄小于 30 岁或薪资大于 15000 元的员工**  
    ```sql
    SELECT * FROM employees 
    WHERE age < 30 OR salary > 15000;
    ```

25. **查询 2015 年入职且学历为本科的员工**  
    ```sql
    SELECT * FROM employees 
    WHERE YEAR(hiredate) = 2015 AND education = '本科';
    ```

---

## **高级查询**
26. **查询每个部门薪资最高的员工信息（使用子查询）**  
    ```sql
    SELECT e.* 
    FROM employees e 
    JOIN (SELECT department, MAX(salary) AS max_salary 
          FROM employees 
          GROUP BY department) AS dept_max 
    ON e.department = dept_max.department 
    AND e.salary = dept_max.max_salary;
    ```

27. **统计入职超过 10 年的员工**  
    ```sql
    SELECT * FROM employees 
    WHERE DATEDIFF(CURDATE(), hiredate) > 365*10;
    ```

28. **按邮箱域名分组统计员工数量（如 `163.com`、`qq.com`）**  
    ```sql
    SELECT SUBSTRING_INDEX(email, '@', -1) AS email_domain, COUNT(*) 
    FROM employees 
    GROUP BY email_domain;
    ```

---

## **分页查询**
29. **分页显示员工信息，每页 10 条，查看第 2 页**  
    ```sql
    SELECT * FROM employees 
    LIMIT 10 OFFSET 10;  -- 跳过前10条，取接下来的10条
    ```

---

## **综合练习**
30. **查询薪资高于本部门平均薪资的员工**  
    ```sql
    SELECT e.* 
    FROM employees e 
    JOIN (SELECT department, AVG(salary) AS dept_avg 
          FROM employees 
          GROUP BY department) AS dept_avg 
    ON e.department = dept_avg.department 
    WHERE e.salary > dept_avg.dept_avg;
    ```

---

以上题目覆盖了基础查询、条件过滤、聚合统计、分组、排序、去重等常见场景，适合巩固 SQL 基础语法。实际练习时，可结合表数据验证结果准确性。


----------------
以下是一个 **产品表（products）** 的创建语句及基础查询练习，涵盖常见的字段设计和查询场景：

---

## **1. 创建产品表**
```sql
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '产品ID',
    product_name VARCHAR(100) NOT NULL COMMENT '产品名称',
    price DECIMAL(10, 2) NOT NULL COMMENT '价格（精确到小数点后两位）',
    stock INT DEFAULT 0 COMMENT '库存数量',
    category ENUM('电子产品', '服装', '食品', '家居', '图书') NOT NULL COMMENT '分类',
    is_active ENUM('上架', '下架') DEFAULT '上架' COMMENT '是否上架',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间'
) COMMENT '产品信息表';
```

---

## **2. 插入示例数据**
```sql
INSERT INTO products (product_name, price, stock, category, is_active, created_at) VALUES
('iPhone 15', 6999.00, 100, '电子产品', '上架', '2023-09-01 10:00:00'),
('华为Mate 60', 5999.00, 50, '电子产品', '上架', '2023-09-05 14:30:00'),
('小米电视4K', 2999.00, 30, '电子产品', '下架', '2023-08-20 09:15:00'),
('纯棉T恤', 89.90, 200, '服装', '上架', '2023-09-10 16:45:00'),
('牛仔裤', 159.00, 150, '服装', '上架', '2023-08-25 11:20:00'),
('巧克力礼盒', 129.00, 80, '食品', '上架', '2023-09-12 10:00:00'),
('智能台灯', 199.00, 0, '家居', '下架', '2023-07-15 13:00:00'),
('《MySQL必知必会》', 69.80, 45, '图书', '上架', '2023-09-01 08:00:00');
```

---

## **3. 基础查询练习**

### **3.1 查询所有上架产品**
```sql
SELECT * FROM products WHERE is_active = '上架';
```

### **3.2 查询价格低于 100 元的商品**
```sql
SELECT product_name, price 
FROM products 
WHERE price < 100;
```

### **3.3 按价格降序显示电子产品**
```sql
SELECT product_name, price 
FROM products 
WHERE category = '电子产品'
ORDER BY price DESC;
```

### **3.4 统计各分类的商品数量**
```sql
SELECT category, COUNT(*) AS product_count 
FROM products 
GROUP BY category;
```

### **3.5 查询库存为 0 的商品名称**
```sql
SELECT product_name 
FROM products 
WHERE stock = 0;
```

### **3.6 查询名称包含“电视”的商品**
```sql
SELECT * FROM products 
WHERE product_name LIKE '%电视%';
```

### **3.7 更新商品状态（将库存为0的商品下架）**
```sql
UPDATE products 
SET is_active = '下架' 
WHERE stock = 0;
```

### **3.8 查询最新创建的 3 个商品**
```sql
SELECT * FROM products 
ORDER BY created_at DESC 
LIMIT 3;
```

### **3.9 计算所有商品的平均价格**
```sql
SELECT ROUND(AVG(price), 2) AS avg_price 
FROM products;
```

### **3.10 分组查询每个分类的最高价和最低价**
```sql
SELECT 
    category,
    MAX(price) AS max_price,
    MIN(price) AS min_price
FROM products
GROUP BY category;
```

---

## **4. 查询结果示例**
### **执行 3.1 的查询结果**
| product_id | product_name    | price   | stock | category    | is_active | created_at          |
|------------|-----------------|---------|-------|-------------|-----------|---------------------|
| 1          | iPhone 15       | 6999.00 | 100   | 电子产品    | 上架      | 2023-09-01 10:00:00 |
| 2          | 华为Mate 60     | 5999.00 | 50    | 电子产品    | 上架      | 2023-09-05 14:30:00 |
| 4          | 纯棉T恤         | 89.90   | 200   | 服装        | 上架      | 2023-09-10 16:45:00 |
| 5          | 牛仔裤          | 159.00  | 150   | 服装        | 上架      | 2023-08-25 11:20:00 |
| 6          | 巧克力礼盒      | 129.00  | 80    | 食品        | 上架      | 2023-09-12 10:00:00 |
| 8          | 《MySQL必知必会》| 69.80   | 45    | 图书        | 上架      | 2023-09-01 08:00:00 |

---

## **5. 练习扩展**
1. **复杂条件查询**  
   查询价格在 50~200 元之间且库存大于 50 的商品：
   ```sql
   SELECT * FROM products 
   WHERE price BETWEEN 50 AND 200 
     AND stock > 50;
   ```

2. **模糊查询与排序**  
   查询名称包含“裤”的商品并按库存升序排列：
   ```sql
   SELECT * FROM products 
   WHERE product_name LIKE '%裤%'
   ORDER BY stock ASC;
   ```

3. **聚合函数与分组过滤**  
   查询商品数量超过 1 的分类：
   ```sql
   SELECT category, COUNT(*) AS count 
   FROM products 
   GROUP BY category 
   HAVING count > 1;
   ```

---

## **6. 实际应用建议**
- **索引优化**：为高频查询字段（如 `category`, `price`）添加索引：
  ```sql
  CREATE INDEX idx_category ON products(category);
  CREATE INDEX idx_price ON products(price);
  ```
- **数据一致性**：使用事务保证库存扣减的原子性。
- **字段扩展**：可添加 `brand`（品牌）、`description`（描述）等字段增强表功能。

通过练习这些查询，可以熟悉 MySQL 的基础语法和常见操作。