---
noteId: "907a7fc073fe11f0ac7f012540a4f7e6"
tags: []

---

## 1.创建学生成绩表

要求：表名（students）

- 学号（id ）整型 自动增长 主键
- 姓名（s_name）变长字符串 非空
- 出生日期（s_birthdate）日期格式 非空
- 性别（s_gender）只能输入男或女 非空
- 家乡（s_hometown）'永年区', '肥乡区', '邯山区', '丛台区', '复兴区'  非空
- 语文（s_chinese）精确到小数点后2位 默认0分 大于等于0 
- 数学（s_math）精确到小数点后2位 默认0分 大于等于0
- 外语（s_english）精确到小数点后2位 默认0分 大于等于0
- 计算机（s_computer） 精确到小数点后2位 默认0分 大于等于0
- 特长（s_specialty)  有无特长 默认无

```sql
create table students(
	id int primary key auto_increment,
  s_name varchar(20) not null,
  s_birthdate date not null,
  s_gender enum('男','女') not null,
  s_hometown varchar(20) check(s_hometown in ('永年区', '肥乡区', '邯山区', '丛台区', '复兴区')) not null,
  s_chinese decimal(5,2) default 0 check(s_chinese >= 0),
  s_math decimal(5,2) default 0 check(s_math >= 0),
  s_english decimal(5,2) default 0 check(s_english >= 0),
  s_computer decimal(5,2) default 0 check(s_computer >= 0),
  s_specialty enum('是','否') default '否'
)DEFAULT CHARSET=utf8mb4;
```
## 2.插入数据

```sql
INSERT INTO students (s_name, s_birthdate, s_gender, s_hometown, s_chinese, s_math, s_english, s_computer, s_specialty) VALUES
('王浩', '2005-03-12', '男', '丛台区', 88.50, 92.00, 85.75, 78.25, '否'),
('李思雨', '2006-07-25', '女', '邯山区', 76.00, 68.50, 94.25, 82.00, '是'),
('张宇航', '2005-11-08', '男', '复兴区', 92.75, 85.00, 79.50, 91.25, '否'),
('陈晓萌', '2006-02-14', '女', '丛台区', 81.25, 77.50, 88.00, 84.75, '是'),
('赵子轩', '2005-09-30', '男', '肥乡区', 65.50, 93.75, 72.00, 89.50, '否'),
('刘雨欣', '2006-05-19', '女', '永年区', 95.00, 84.25, 90.50, 76.75, '否'),
('黄俊杰', '2005-12-05', '男', '丛台区', 78.75, 69.50, 81.25, 94.00, '是'),
('周诗涵', '2006-04-22', '女', '邯山区', 87.25, 91.00, 86.75, 80.50, '否'),
('吴天宇', '2005-08-17', '男', '复兴区', 72.50, 88.75, 73.25, 85.00, '否'),
('郑雨桐', '2006-01-09', '女', '丛台区', 93.00, 75.50, 97.25, 79.75, '是'),
('孙浩然', '2005-06-28', '男', '肥乡区', 84.75, 82.25, 68.50, 90.00, '否'),
('朱雅婷', '2006-10-15', '女', '永年区', 79.50, 96.75, 89.00, 83.25, '是'),
('徐子墨', '2005-04-03', '男', '丛台区', 91.25, 70.50, 84.75, 77.00, '否'),
('马欣怡', '2006-08-21', '女', '邯山区', 67.75, 89.25, 95.50, 86.75, '否'),
('高博文', '2005-02-18', '男', '复兴区', 88.00, 94.50, 78.25, 92.75, '是'),
('林若曦', '2006-11-27', '女', '丛台区', 75.25, 83.75, 91.00, 81.50, '否'),
('何俊豪', '2005-07-14', '男', '肥乡区', 96.50, 76.25, 82.75, 88.00, '否'),
('罗诗雨', '2006-03-05', '女', '永年区', 82.75, 90.00, 74.50, 93.25, '是'),
('梁家辉', '2005-10-31', '男', '丛台区', 89.25, 85.75, 87.00, 75.50, '否'),
('蔡雪晴', '2006-09-12', '女', '邯山区', 73.50, 78.25, 96.75, 84.00, '否'),
('宋哲瀚', '2005-01-25', '男', '复兴区', 94.00, 86.50, 80.25, 89.75, '是'),
('唐语嫣', '2006-06-08', '女', '丛台区', 80.75, 92.25, 83.50, 72.00, '否'),
('许嘉豪', '2005-12-19', '男', '肥乡区', 85.25, 79.75, 90.00, 87.50, '否'),
('邓雨菲', '2006-04-03', '女', '永年区', 77.00, 95.50, 85.75, 91.25, '是'),
('钟子涵', '2005-03-27', '男', '丛台区', 90.50, 81.25, 76.00, 94.75, '否'),
('袁欣悦', '2006-07-14', '女', '邯山区', 83.75, 87.00, 93.25, 79.50, '否'),
('崔天佑', '2005-11-22', '男', '复兴区', 71.25, 98.50, 84.75, 86.00, '是'),
('薛佳琪', '2006-02-09', '女', '丛台区', 97.00, 73.75, 88.50, 82.25, '否'),
('彭一鸣', '2005-05-16', '男', '肥乡区', 86.50, 89.25, 75.00, 95.75, '否'),
('丁雨萱', '2006-08-28', '女', '永年区', 78.25, 84.75, 97.50, 80.00, '是');
```



## 3.查询基础语法

查询的基础语法：

```sql
SELECT 列名,列名 FROM 表名;
```

## 4.条件查询

定义：条件查询就是使用where关键字引导的条件表达式查询。

**用途**：查询满足条件的行。  

**语法**：

```sql
SELECT 列名 FROM 表名 WHERE 条件表达式;
```
## 5.基础查询

1.选择指定列

```sql
-- 语法
SELECT 列名1, 列名2, ... FROM 表名;

-- 练习
SELECT name, age, salary FROM employees;
```

2.选择所有列

```sql
-- 语法
SELECT * FROM 表名;

-- 练习
SELECT * FROM employees;
```
3.设置列别名（使用 `AS`）：

```sql
-- 语法

-- 练习
SELECT name AS 姓名, salary  AS 薪资 FROM employees;
SELECT name AS 姓名, salary * N  AS 薪资 FROM employees;
```

## **6.比较查询**
比较查询就是使用比较表达式进行的过滤查询。

比较运算符
```sql
`>`  `=`  `<`  `!=` `>=`  `<=`
```
## 7.值匹配查询

- IN：匹配列表中的任意值
- NOT IN：排除列表中的值

```sql
-- 语法
SELECT * FROM employees 
WHERE department IN ('HR', 'Finance');
```

## 8.模糊匹配查询

- `LIKE %匹配任意字符`
- `LIKE _匹配单个字符`

```sql
  -- 示例
  SELECT * FROM users WHERE email LIKE '%@gmail.com'; -- Gmail用户
  SELECT name FROM books WHERE title LIKE '数据库%';   -- 以“数据库”开头的书名
```
## 9.空值判断查询

- `IS NULL`：值为空
- `IS NOT NULL`：值非空

## 10.逻辑查询

逻辑运算符：`AND`  与  ，`OR`  或，`NOT`  非

```sql
-- 示例
SELECT * FROM orders 
WHERE total_amount > 1000 AND status = 'paid';
```

## 练习1:比较查询


1. 查询所有女生的姓名、家乡和语文成绩 
2. 查询数学成绩大于 90 分的学生姓名和数学成绩  
3. 查询语文成绩在 70~90 分之间的学生
4. 查询数学成绩比语文成绩高至少 20 分的学生  
5. 查询总分（四科之和）超过 350 分的学生  
6. 查询总分高于“西门吹雪”的学生（假设“西门吹雪”存在）


参考答案：

```sql
1. 查询所有女生的姓名、家乡和语文成绩 
SELECT name, hometown, chinese 
FROM students 
WHERE gender = '女';

2. 查询数学成绩大于 90 分的学生姓名和数学成绩  
SELECT name, math 
FROM students 
WHERE math > 90;

3. 查询语文成绩在 70~90 分之间的学生
SELECT name, chinese 
FROM students 
WHERE chinese BETWEEN 70 AND 90;

4. 查询数学成绩比语文成绩高至少 20 分的学生  
SELECT name, math, chinese
FROM students
WHERE math - chinese >= 20;

5. 查询总分（四科之和）超过 350 分的学生  
SELECT name, chinese + math + english + computer AS total 
FROM students 
WHERE chinese + math + english + computer > 350;

6. 查询总分高于“西门吹雪”的学生（假设“西门吹雪”存在）**  
SELECT name, chinese + math + english + computer AS total
FROM students
WHERE chinese + math + english + computer > (
    SELECT chinese + math + english + computer 
    FROM students 
    WHERE name = '西门吹雪'
);
```

## 练习2.值匹配查询

1.查询家乡是“永年区”或“邯山区”的学生  

```sql
SELECT name, hometown 
FROM students 
WHERE hometown IN ('永年区', '邯山区');
```

2.查询年龄为20,21,22,23岁的员工信息。

```sql
select * from newtable where age in (20,21,22,23);
select * from newtable where age = 20 or age = 21 or age = 22 or age = 23;
```

## 练习3:模糊匹配查询

1.查询姓“张”的学生信息 

2.查询名字中包含“小”字的学生  

3.查询名字第二个字是“芳”的学生 

4.查询姓“王”或“欧阳”的学生（模糊查询）

5.查询姓名长度为 3 个字且最后一个字是“雪”的学生 

6.查询姓名中包含“小”且出生年份为偶数的学生  



参考答案

```sql
1.查询姓“张”的学生信息  
SELECT * 
FROM students 
WHERE name LIKE '张%';

2.查询名字中包含“小”字的学生  
SELECT name 
FROM students 
WHERE name LIKE '%小%';

3.查询名字第二个字是“芳”的学生  
SELECT name 
FROM students 
WHERE name LIKE '_芳%';

4.查询姓“王”或“欧阳”的学生（模糊查询）
SELECT * FROM students 
WHERE name LIKE '王%' OR name LIKE '欧阳%';

5.查询姓名长度为 3 个字且最后一个字是“雪”的学生  
SELECT name
FROM students
WHERE name LIKE '__雪';

6.查询姓名中包含“小”且出生年份为偶数的学生  
SELECT name, birthdate
FROM students
WHERE name LIKE '%小%' 
  AND YEAR(birthdate) % 2 = 0;
```

## 练习4:空值判断查询

1. 查询计算机成绩为 NULL 的学生信息
1. 查询没有计算机成绩的学生中，数学成绩最高的学生 
1. 查询计算机成绩为 NULL 的学生中，年龄最大的前3人。
1. 查询外语成绩比计算机成绩高的学生（排除 computer 为 NULL） 

参考答案

````sql
1. 查询计算机成绩为 NULL 的学生信息
SELECT * 
FROM students 
WHERE computer IS NULL;

2. 查询没有计算机成绩的学生中，数学成绩最高的学生 
SELECT name, math
FROM students
WHERE computer IS NULL
ORDER BY math DESC
LIMIT 1;

3. 查询计算机成绩为 NULL 的学生中，年龄最大的前3人。 
SELECT name, birthdate,computer
FROM students
WHERE computer IS NULL
ORDER BY birthdate ASC  -- 出生日期越早年龄越大
LIMIT 3;

4. 查询外语成绩比计算机成绩高的学生（排除 computer 为 NULL）
SELECT name, english, computer
FROM students
WHERE english > computer
  AND computer IS NOT NULL;
````

## 练习5:逻辑查询

1. 查询家乡是“丛台区”或“复兴区”且语文成绩 ≥ 80 的学生  
1. 查询年龄在 18~20 岁之间（假设当前日期为 2023-10-01）的男生
1. 查询计算机成绩不为空且数学成绩 < 60 的学生
1. 查询~~磁县~~ 肥乡区或永年，外语和计算机成绩均 ≥ 80 的男生
1. 查询计算机成绩在 70~90 分之间的复兴区学生**
1. 查询家乡为“丛台区”或“复兴区”，且四科成绩均 ≥ 80 分的学生  

参考答案：

1. 查询家乡是“丛台区”或“复兴区”且语文成绩 ≥ 80 的学生  

```sql
SELECT name, hometown, chinese 
FROM students 
WHERE hometown IN ('丛台区', '复兴区') 
  AND chinese >= 80;
```

2.查询年龄在 18~20 岁之间（假设当前日期为 2023-10-01）的男生

   ```sql
   SELECT name, birthdate 
   FROM students 
   WHERE gender = '男' 
     AND TIMESTAMPDIFF(YEAR, birthdate, '2023-10-01') BETWEEN 18 AND 20;
   ```

3.查询计算机成绩不为空且数学成绩 < 90 的学生

   ```sql
SELECT name, math, computer 
FROM students 
WHERE computer IS NOT NULL 
  AND math < 90;
   ```

4.查询~~磁县~~  (肥乡区)或永年，外语和计算机成绩均 ≥ 80 的男生

```sql
SELECT * FROM students 
WHERE hometown IN ('肥乡', '永年')
  AND gender = '男'
  AND english >= 80 
  AND computer >= 80;
```

5. 查询计算机成绩在 70~90 分之间的复兴区学生**

```sql
SELECT * FROM students 
WHERE hometown = '复兴区' 
  AND computer BETWEEN 70 AND 90;
```

6.查询家乡为“丛台区”或“复兴区”，且四科成绩均 ≥ 80 分的学生  

   ```sql
SELECT name
FROM students
WHERE hometown IN ('丛台区', '复兴区')
  AND chinese >= 80
  AND math >= 80
  AND english >= 80
  AND computer >= 80;
   ```


   