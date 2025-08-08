---
noteId: "f790e14073fe11f0ac7f012540a4f7e6"
tags: []

---

查询员工表

## 1.创建员工信息表

表(yuangong | employees )结构要求：

- id 
- 员工编号（empno）: 格式：D001，唯一
- 姓名（ename）
- 性别（gender）
- 年龄（age） 22-60
- 学历（education） :'大专','本科','研究生'
- 身份证号（d_card）:唯一  18位
- 省份（province） 
- 城市（city）
- 电邮（email）
- 薪水（salary）
- 职位（job）
- 部门（department）:'财务部','人力部','设计部','开发部','市场部','行政部','后勤部'
- 入职日期（hiredate）

```sql
-- 创建表
根据下面的表，出一些数据统计查询的题，覆盖：单条件筛选、多条件组合、简单聚合、差值计算、模糊查询、比较查询、日期函数、数学函数、空值判断、逻辑查询，每个分类下10道查询题，难度适中
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT '主键ID',
    em_id CHAR(4) UNIQUE NOT NULL COMMENT '员工编号（格式：D001）',
    em_name VARCHAR(50) NOT NULL COMMENT '姓名',
    gender ENUM('男', '女') NOT NULL COMMENT '性别',
    age INT CHECK (age BETWEEN 22 AND 60) COMMENT '年龄（22-60岁）',
    education ENUM('大专', '本科', '研究生') NOT NULL COMMENT '学历',
    id_card CHAR(18) UNIQUE NOT NULL COMMENT '身份证号（18位）',
    province VARCHAR(50) COMMENT '省份',
    city VARCHAR(50) COMMENT '城市',
    email VARCHAR(100) COMMENT '电邮',
    salary DECIMAL(10, 2) COMMENT '薪水（精确到小数点后两位）',
    job VARCHAR(50) COMMENT '职位',
    department ENUM('财务部', '人力部', '设计部', '开发部', '市场部', '行政部', '后勤部') NOT NULL COMMENT '部门',
    hiredate DATE COMMENT '入职日期'
) COMMENT '员工信息表';
```

## 2.插入员工数据

```sql
见员工数据.txt  单条件筛选、多条件组合、简单聚合、差值计算、模糊查询、比较查询、日期函数、数学函数、空值判断、逻辑查询
```

## 2.查询员工信息表

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