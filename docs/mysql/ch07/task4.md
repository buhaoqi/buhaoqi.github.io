---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务四 插入数据  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务四 插入数据  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 4  # 侧边栏中排在第1位
---

## 一、实操题

### 练习1:创建学⽣表

要求1：创建⼀个学⽣表 students ，包含：

- 学号(id)：整数，主键,  自动增长
- 姓名(s_name)：字符串，最⻓20个字符，不能为空
- 年龄(s_age)：整数
- 性别(s_gender)：字符串，只能输⼊'男'或'⼥'
- ⼊学⽇期(s_date)：⽇期类型

要求2： 插入数据

```
张三, 18, 男, 2023年9月1日
李四, 17, 女, 2023年9月1日
王五 , 19, 男, 2023年9月1日
```

### 练习2:创建商品表

要求1：创建⼀个商品表 products ，包含：

- 商品编号(id)：整数，主键
- 商品名称(p_name)：字符串，最⻓100个字符，不能为空
- 价格(p_price)：整数类型
- 库存数量(p_stock)：整数类型
- 上架时间(p_date)：日期类型

要求2： 插入数据

```
1001, 华为Mate60 Pro, 6999, 50, 2023年08月30日,
1002, 苹果iPhone 15, 5999, 30, 2023年09月15日,
1003, 小米14, 3999, 100, 2023年10月01日;
```

### 练习3:创建员⼯表

要求1：创建⼀个员⼯表 employees ，包含：

- 员⼯号(id)：整数，主键，⾃增⻓
- 姓名(e_name)：字符串，最⻓10个字符，不能为空
- 部⻔(e_department)：字符串，最⻓20个字符
- ⼯资(e_salary)：整数
- ⼊职⽇期(e_date)：⽇期类型

要求2： 插入数据

```
赵明, 研发部, 15000, 2022年03月15日
钱红, 市场部, 12000, 2022年06月20日
孙强, 人事部, 10000, 2023年01月10日
```

### 练习4:创建图书表

要求：创建⼀个图书表 books ，包含：

- 图书编号(id)：整数，主键
- 书名(b_title)：字符串，最⻓50个字符，不能为空
- 作者(b_author)：字符串，最⻓20个字符
- 价格(b_price)：整数类型
- 出版⽇期(b_date)：⽇期类型

要求2： 插入数据

```
101, MySQL从入门到精通, 王珊, 59, 2022年05月01日
12, C#编程基础, 李强, 45, 2023年01月15日
13, 计算机网络, 谢希仁, 68, 2021年08月20日
```

### 练习5:创建课程表

要求：创建⼀个课程表 course ，包含：

- 课程编号(id)：整数，主键，⾃增⻓
- 名称(c_name)：字符串，最⻓30个字符，不能为空
- 教师(c_teacher)：字符串，最⻓10个字符
- 课时(c_hours)：整数
- 教室(c_room)：字符串，最⻓10个字符

要求2： 插入数据

```
数据库基础, 张老师, 64, A301,
C#程序设计, 李老师, 72, B205,
计算机网络, 王老师, 48, C102;
```

## 答案(实操题)

### 练习1:创建学⽣表

要求：创建⼀个学⽣表 students ，包含：

- 学号(id)：整数，主键,  自动增长
- 姓名(s_name)：字符串，最⻓20个字符，不能为空
- 年龄(s_age)：整数
- 性别(s_gender)：字符串，只能输⼊'男'或'⼥'
- ⼊学⽇期(s_date)：⽇期类型

参考答案

```sql
CREATE TABLE students(
  id INT PRIMARY KEY AUTO_INCREMENT,
  s_name VARCHAR(20) NOT NULL,
  s_age INT,
  s_gender ENUM('男','女'),
  s_date DATE
);
```

插入测试数据

```sql
INSERT INTO students (s_name, s_age, s_gender, s_date) VALUES
('张三', 18, '男', '2023-09-01'),
('李四', 17, '女', '2023-09-01'),
('王五', 19, '男', '2023-09-02');
```

### 练习2:创建商品表

要求：创建⼀个商品表 products ，包含：

- 商品编号(id)：整数，主键
- 商品名称(p_name)：字符串，最⻓100个字符，不能为空
- 价格(p_price)：整数类型
- 库存数量(p_stock)：整数类型
- 上架时间(p_date)：日期类型

参考答案

```sql
CREATE TABLE products(
	id INT PRIMARY KEY,
  p_name VARCHAR(100) NOT NULL,
  p_pric INT,
  p_stock INT,
  p_date DATE
);
```

插入测试数据

```sql
INSERT INTO products (id, p_name, p_price, p_stock, p_date) VALUES
(1001, '华为Mate60 Pro', 6999, 50, '2023-08-30'),
(1002, '苹果iPhone 15', 5999, 30, '2023-09-15'),
(1003, '小米14', 3999, 100, '2023-10-01');
```

### 练习3:创建员⼯表

要求：创建⼀个员⼯表 employees ，包含：

- 员⼯号(id)：整数，主键，⾃增⻓
- 姓名(e_name)：字符串，最⻓10个字符，不能为空
- 部⻔(e_department)：字符串，最⻓20个字符
- ⼯资(e_salary)：整数
- ⼊职⽇期(e_date)：⽇期类型

参考答案

```sql
CREATE TABLE employees(
	id INT PRIMARY KEY AUTO_INCREMENT,
  e_name VARCHAR(20) NOT NULL,
  e_department INT,
  e_salary ENUM('男','女'),
  e_date DATE
);
```

插入测试数据

```sql
INSERT INTO employees (e_name, e_department, e_salary, e_date) VALUES
('赵明', '研发部', 15000, '2022-03-15'),
('钱红', '市场部', 12000, '2022-06-20'),
('孙强', '人事部', 10000, '2023-01-10');
```

### 练习4:创建图书表

要求：创建⼀个图书表 books ，包含：

- 图书编号(id)：整数，主键
- 书名(b_title)：字符串，最⻓50个字符，不能为空
- 作者(b_author)：字符串，最⻓20个字符
- 价格(b_price)：整数类型
- 出版⽇期(b_date)：⽇期类型

参考答案

```sql
CREATE TABLE books(
	id INT PRIMARY KEY,
  b_title VARCHAR(50) NOT NULL,
  b_author VARCHAR(20),
  b_price INT,
  b_date DATE
);
```

插入测试数据

```sql
INSERT INTO books (id, b_title, b_author, b_price, b_date) VALUES
(101, 'MySQL从入门到精通', '王珊', 59, '2022-05-01'),
(102, 'C#编程基础', '李强', 45, '2023-01-15'),
(103, '计算机网络', '谢希仁', 68, '2021-08-20');
```

### 练习5:创建课程表

要求：创建⼀个课程表 course ，包含：

- 课程编号(id)：整数，主键，⾃增⻓
- 名称(c_name)：字符串，最⻓30个字符，不能为空
- 教师(c_teacher)：字符串，最⻓10个字符
- 课时(c_hours)：整数
- 教室(c_room)：字符串，最⻓10个字符

参考答案

```sql
CREATE TABLE students(
	id INT PRIMARY KEY AUTO_INCREMENT,
  c_name VARCHAR(30) NOT NULL,
  c_teacher VARCHAR(10),
  c_hours INT,
  c_room VARCHAR(10)
);
```

插入测试数据

```sql
INSERT INTO course (c_name, c_teacher, c_hours, c_room) VALUES
('数据库基础', '张老师', 64, 'A301'),
('C#程序设计', '李老师', 72, 'B205'),
('计算机网络', '王老师', 48, 'C102');
```

