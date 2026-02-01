---
# 这部分是关键！侧边栏显示名由这里决定
title: 练习:视图  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 练习:视图  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 10  # 侧边栏中排在第1位
---

## 全真模拟二第78-82题
四、根据已知的环境与题意，写出相应的操作命令，要求每小题用一条命令完成（本大题共5小题，每小题4分，共20分）

> 设有如下3个关系模式：
>
> 学生关系：Student(Sno, Sname, Ssex, Sbirthdate, Smajor)，其中Sno、Sname、Ssex、Sbirthdate、Smajor分别表示学生的学号、姓名、性别、出生日期和所学专业。
> 
> 课程关系：Course(Cno,Cname,Ccredit,Cpno)，其中Cno、Cname、Ccredit、Cpno分别表示课程的课程号、课程名称、学分和选修课程号。
> 
> 选课关系：SC(Sno,Cno,Grade,Semester,Teachingclass)，其中Sno、Cno、Grade、Semester、Teachingclass分别表示选课学生的学号、所选课程号、成绩、选课学期、所在教学班。

78.利用SQL语言创建COURSE关系，其中CNO是长度为5的定长字符串且是主键，CNAME为最大长度为40的可变长字符串且不能为空，CCREDIT是短整型，CPNO的取值参考COURSE关系中的CNO。

79.利用SQL语言查询与“TOM”同一院系学生的基本信息。

80.利用SQL语言将成绩小于60分的选课成绩修改为60。

81.利用SQL语言将学生表的查询权限授予用户U1。

82.利用SQL语言创建一个能够方便查询计算机科学与技术专业学生信息的视图V_CST，要求通过视图进行的修改，必须也能通过该视图看到修改后的结果。

答案
```sql
-- 第78题
CREATE TABLE course(
    Cno CHAR(5),
    Cname VARCHAR(40) NOT NULL,
    Ccredit SMALLINT,
    Cno CHAR(5),
    PRIMARY KEY(Cno),
    CONSTRAINT fk_course_course FOREIGN KEY (Cpno) REFERENCES course(Cno)
);

-- 第79题
SELECT * FROM Student WHERE Smajor = (SELECT Smjor FROM Student WHERE Sname = 'Tom');

-- 第80题
UPDATE SC SET GRADE = 60 WHERE GRADE < 60;

-- 第81题

-- 第82题

```