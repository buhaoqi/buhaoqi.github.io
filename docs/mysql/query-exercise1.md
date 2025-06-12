---
noteId: "e97a22602f7511f0a1ad13030dd5f197"
tags: []

---

---



# 5月13日

## 创建学生信息表（students）

要求：

- 学号（id ）
- 姓名（name）整型 自动增长 主键
- 出生日期（birthdate）日期格式 非空
- 性别（gender）只能输入男或女 非空
- 家乡（hometown）'魏县', '成安', '广平', '永年', '磁县', '邯山区', '丛台区', '复兴区' 非空
- 语文（chinese）精确到小数点后2位 默认0分 大于0
- 数学（math）精确到小数点后2位 默认0分 大于0
- 外语（english）精确到小数点后2位 默认0分 大于0
- 计算机（computer） 精确到小数点后2位 默认0分 大于0

```sql
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT '学号',
    name VARCHAR(50) NOT NULL COMMENT '姓名',
    birthdate DATE NOT NULL COMMENT '出生日期',
    gender ENUM('男', '女') NOT NULL COMMENT '性别',
    hometown ENUM('永年区', '肥乡区', '邯山区', '丛台区', '复兴区') NOT NULL COMMENT '家乡',
    chinese DECIMAL(5,2) COMMENT '语文成绩',
    math DECIMAL(5,2) COMMENT '数学成绩',
    english DECIMAL(5,2) COMMENT '外语成绩',
    computer DECIMAL(5,2) COMMENT '计算机成绩'
) DEFAULT CHARSET=utf8mb4 COMMENT '学生信息表';
```



##  插入示例数据（学生信息表）

见文件：学生信息.txt

## 查询练习题（学生信息表）

### **一、基础查询**

语法

```sql
SELECT name, hometown, chinese FROM students
```



1. 指定列：查询所有女生的姓名、家乡和语文成绩**  
   ```sql
   SELECT name, hometown, chinese 
   FROM students 
   WHERE gender = '女';
   ```

2. **查询数学成绩大于 90 分的学生姓名和数学成绩**  
   ```sql
   SELECT name, math 
   FROM students 
   WHERE math > 90;
   ```

3. **查询计算机成绩为 NULL 的学生信息**  
   ```sql
   SELECT * 
   FROM students 
   WHERE computer IS NULL;
   ```

**查询没有计算机成绩的学生中，数学成绩最高的学生**  
    ```sql
    SELECT name, math
    FROM students
    WHERE computer IS NULL
    ORDER BY math DESC
    LIMIT 1;
    ```

 **查询计算机成绩为 NULL 的学生中，年龄最大的前3人**  
    ```sql
    SELECT name, birthdate
    FROM students
    WHERE computer IS NULL
    ORDER BY birthdate ASC  -- 出生日期越早年龄越大
    LIMIT 3;
    ```





19. **查询外语成绩比计算机成绩高的学生（排除 computer 为 NULL）**  
    
    ```sql
    SELECT name, english, computer
    FROM students
    WHERE english > computer
      AND computer IS NOT NULL;
    ```

### **二、逻辑查询**

4. **查询家乡是“丛台区”或“复兴区”且语文成绩 ≥ 80 的学生**  
   ```sql
   SELECT name, hometown, chinese 
   FROM students 
   WHERE hometown IN ('丛台区', '复兴区') 
     AND chinese >= 80;
   ```

5. **查询年龄在 18~20 岁之间（假设当前日期为 2023-10-01）的男生**  
   ```sql
   SELECT name, birthdate 
   FROM students 
   WHERE gender = '男' 
     AND TIMESTAMPDIFF(YEAR, birthdate, '2023-10-01') BETWEEN 18 AND 20;
   ```

**查询计算机成绩不为空且数学成绩 < 60 的学生**

   ```sql
   SELECT name, math, computer 
   FROM students 
   WHERE computer IS NOT NULL 
     AND math < 60;
   ```

**查询磁县或永年，外语和计算机成绩均 ≥ 80 的男生**

```sql
SELECT * FROM students 
WHERE hometown IN ('磁县', '永年')
  AND gender = '男'
  AND english >= 80 
  AND computer >= 80;
```
查询计算机成绩在 70~90 分之间的复兴区学生**
```sql
SELECT * FROM students 
WHERE hometown = '复兴区' 
  AND computer BETWEEN 70 AND 90;
```
**查询家乡为“丛台区”或“复兴区”，且四科成绩均 ≥ 80 分的学生**  

   ```sql
   SELECT name
   FROM students
   WHERE hometown IN ('丛台区', '复兴区')
     AND chinese >= 80
     AND math >= 80
     AND english >= 80
     AND computer >= 80;
   ```

### 比较查询

**查询数学成绩比语文成绩高至少 20 分的学生**  

    ```sql
    SELECT name, math, chinese
    FROM students
    WHERE math - chinese >= 20;
    ```

**查询总分高于“西门吹雪”的学生（假设“西门吹雪”存在）**  
    ```sql
    SELECT name, chinese + math + english + computer AS total
    FROM students
    WHERE chinese + math + english + computer > (
        SELECT chinese + math + english + computer 
        FROM students 
        WHERE name = '西门吹雪'
    );
    ```



### **三、模糊查询**

7. **查询姓“张”的学生信息**  
   ```sql
   SELECT * 
   FROM students 
   WHERE name LIKE '张%';
   ```

8. **查询名字中包含“小”字的学生**  
   ```sql
   SELECT name 
   FROM students 
   WHERE name LIKE '%小%';
   ```

9. **查询名字第二个字是“芳”的学生**  
   ```sql
   SELECT name 
   FROM students 
   WHERE name LIKE '_芳%';
   ```
   查询姓“王”或“欧阳”的学生（模糊查询）**
```sql
SELECT * FROM students 
WHERE name LIKE '王%' OR name LIKE '欧阳%';
```
**查询姓名长度为 3 个字且最后一个字是“雪”的学生**  
   ```sql
   SELECT name
   FROM students
   WHERE name LIKE '__雪';
   ```

**查询姓名中包含“小”且出生年份为偶数的学生**  
    ```sql
    SELECT name, birthdate
    FROM students
    WHERE name LIKE '%小%' 
      AND YEAR(birthdate) % 2 = 0;
    ```



### **四、聚合函数**

10. **统计每个家乡的学生人数**  
    ```sql
    SELECT hometown, COUNT(*) AS count 
    FROM students 
    GROUP BY hometown;
    ```

11. **计算所有学生的数学平均成绩（保留两位小数）**  
    ```sql
    SELECT ROUND(AVG(math), 2) AS avg_math 
    FROM students;
    ```

12. **查询语文成绩最高的学生姓名和成绩**  
    ```sql
    SELECT name, chinese 
    FROM students 
    WHERE chinese = (SELECT MAX(chinese) FROM students);
    ```

13. **统计男生和女生的平均计算机成绩**  
    ```sql
    SELECT gender, ROUND(AVG(computer), 2) AS avg_computer 
    FROM students 
    GROUP BY gender;
    ```
    计算每个家乡的平均总分**
```sql
SELECT hometown, ROUND(AVG(chinese + math + english + computer), 1) AS avg_total
FROM students 
GROUP BY hometown;
```
**统计每个性别中计算机成绩高于本性别平均计算机成绩的学生人数**  

   ```sql
   SELECT gender, COUNT(*) AS count
   FROM students s
   WHERE computer > (SELECT AVG(computer) FROM students WHERE gender = s.gender)
   GROUP BY gender;
   ```

多条件逻辑组合**
8. **查询语文和数学成绩均高于各自科目平均分的学生**  
   ```sql
   SELECT name, chinese, math
   FROM students
   WHERE chinese > (SELECT AVG(chinese) FROM students)
     AND math > (SELECT AVG(math) FROM students);
   ```

##  having



**查询每个家乡的语文成绩最高分和最低分差异大于 20 分的家乡**  

   ```sql
   SELECT hometown, MAX(chinese) - MIN(chinese) AS gap
   FROM students
   GROUP BY hometown
   HAVING gap > 20;
   ```
---

### **五、排序与分页**
14. **按数学成绩降序显示前5名学生**  
    ```sql
    SELECT name, math 
    FROM students 
    ORDER BY math DESC 
    LIMIT 5;
    ```

15. **分页查询学生信息，每页10条，显示第2页**  
    ```sql
    SELECT * 
    FROM students 
    LIMIT 10 OFFSET 10;
    ```

16. **按出生日期升序排列，显示年龄最小的3名学生**  
    ```sql
    SELECT name, birthdate 
    FROM students 
    ORDER BY birthdate DESC 
    LIMIT 3;
    ```

---

### **六、IN 查询**
17. **查询家乡是“永年区”或“邯山区”的学生**  
    ```sql
    SELECT name, hometown 
    FROM students 
    WHERE hometown IN ('永年区', '邯山区');
    ```

18. **查询语文成绩在 70~90 分之间的学生**  
    ```sql
    SELECT name, chinese 
    FROM students 
    WHERE chinese BETWEEN 70 AND 90;
    ```
    

### **七、日期函数**
19. **查询 2005 年出生的学生**  
    ```sql
    SELECT name, birthdate 
    FROM students 
    WHERE YEAR(birthdate) = 2005;
    ```

20. **计算每个学生的年龄（假设当前日期为 2023-10-01）**  
    ```sql
    SELECT name, TIMESTAMPDIFF(YEAR, birthdate, '2023-10-01') AS age 
    FROM students;
    ```

21. **查询出生日期在 6 月的学生**  
    ```sql
    SELECT name, birthdate 
    FROM students 
    WHERE MONTH(birthdate) = 6;
    ```

**查询出生日期在 2005 年且月份为奇数的学生**  

   ```sql
   SELECT name, birthdate
   FROM students
   WHERE YEAR(birthdate) = 2005 
     AND MONTH(birthdate) % 2 = 1;
   ```

计算每个学生的精确年龄（精确到天，假设当前日期为 2023-10-01）**  
   ```sql
   SELECT name, 
          TIMESTAMPDIFF(YEAR, birthdate, '2023-10-01') AS years,
          DATEDIFF('2023-10-01', birthdate) % 365 AS days
   FROM students;
   ```

**查询生日在下一周（假设当前日期为 2023-10-01）的学生**  
   ```sql
   SELECT name, birthdate
   FROM students
   WHERE DATE_FORMAT(birthdate, '%m-%d') 
         BETWEEN DATE_FORMAT('2023-10-01', '%m-%d') 
         AND DATE_FORMAT('2023-10-07', '%m-%d');
   ```

### **八、复杂组合查询**

22. **查询总分（四科之和）超过 350 分的学生**  
    ```sql
    SELECT name, chinese + math + english + computer AS total 
    FROM students 
    WHERE chinese + math + english + computer > 350;
    ```

23. **查询计算机成绩高于本表平均计算机成绩的学生**  
    ```sql
    SELECT name, computer 
    FROM students 
    WHERE computer > (SELECT AVG(computer) FROM students);
    ```

24. **查询家乡为“丛台区”且外语成绩排名前3的学生**  
    ```sql
    SELECT name, english 
    FROM students 
    WHERE hometown = '丛台区' 
    ORDER BY english DESC 
    LIMIT 3;
    ```
    查询邯山区女生中，语文成绩排名前 2 的学生**
```sql
SELECT name, chinese 
FROM students 
WHERE hometown = '邯山区' 
  AND gender = '女'
ORDER BY chinese DESC 
LIMIT 2;
```
---

### **九、去重与唯一值**
25. **查询所有不重复的家乡列表**  
    ```sql
    SELECT DISTINCT hometown 
    FROM students;
    ```

26. **统计学生中不同的姓氏数量**  
    ```sql
    SELECT COUNT(DISTINCT SUBSTRING(name, 1, 1)) AS surname_count 
    FROM students;
    ```

---

### **十、分组过滤**
27. **查询平均数学成绩超过 85 分的家乡**  
    ```sql
    SELECT hometown, AVG(math) AS avg_math 
    FROM students 
    GROUP BY hometown 
    HAVING avg_math > 85;
    ```

28. **统计每个家乡的女生人数，仅显示人数 ≥ 2 的家乡**  
    ```sql
    SELECT hometown, COUNT(*) AS count 
    FROM students 
    WHERE gender = '女' 
    GROUP BY hometown 
    HAVING count >= 2;
    ```

---

### **十一、多表模拟（自连接）**
29. **查询数学成绩比“张伟”高的学生**  
    ```sql
    SELECT s1.name, s1.math 
    FROM students s1 
    JOIN students s2 ON s1.math > s2.math 
    WHERE s2.name = '张伟';
    ```

---

### **十二、综合挑战**
30. **查询每个家乡总分最高的学生（显示家乡、姓名、总分）**  
    ```sql
    SELECT s.hometown, s.name, s.chinese + s.math + s.english + s.computer AS total 
    FROM students s 
    JOIN (
        SELECT hometown, MAX(chinese + math + english + computer) AS max_total 
        FROM students 
        GROUP BY hometown
    ) AS t 
    ON s.hometown = t.hometown 
       AND s.chinese + s.math + s.english + s.computer = t.max_total;
    ```

---

### **答案示例（学生信息表）**
#### **第 12 题结果**
| name   | chinese |
| ------ | ------- |
| 欧阳梅 | 96.0    |

#### **第 30 题结果**
| hometown | name     | total |
| -------- | -------- | ----- |
| 永年区   | 张伟     | 344.0 |
| 丛台区   | 杨过     | 372.5 |
| 复兴区   | 西门吹雪 | 391.0 |

