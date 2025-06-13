---
noteId: "04b32ba0320d11f088738f916b56a5b6"
tags: []

---

MySQL 中的 `IF` 函数是一个逻辑控制函数，用于根据条件判断返回不同的结果。它类似于编程语言中的三元运算符（`条件 ? 结果1 : 结果2`），语法简洁，适用于简单的条件分支逻辑。

---

### **基本语法**
```sql
IF(condition, value_if_true, value_if_false)
```
- **`condition`**：需要判断的条件表达式（必须返回布尔值 `TRUE`/`FALSE`）。
- **`value_if_true`**：当条件为真时返回的值。
- **`value_if_false`**：当条件为假时返回的值。

---

### **核心用法示例**

#### 1. **简单数值判断**
```sql
SELECT IF(10 > 5, 'Yes', 'No');  -- 输出: 'Yes'
SELECT IF(10 < 5, 'Yes', 'No');  -- 输出: 'No'
```

#### 2. **字段值的条件处理**
假设有一张 `students` 表：
```sql
CREATE TABLE students (
    id INT,
    name VARCHAR(50),
    score INT
);
```
插入示例数据：
```sql
INSERT INTO students VALUES
(1, 'Alice', 85),
(2, 'Bob', 72),
(3, 'Charlie', 60),
(4, 'David', 45);
```

**示例：标记成绩是否及格**
```sql
SELECT 
    name, 
    score,
    IF(score >= 60, 'Pass', 'Fail') AS result
FROM students;
```
输出结果：
```
+---------+-------+--------+
| name    | score | result |
+---------+-------+--------+
| Alice   | 85    | Pass   |
| Bob     | 72    | Pass   |
| Charlie | 60    | Pass   |
| David   | 45    | Fail   |
+---------+-------+--------+
```

---

### **进阶用法**

#### 1. **嵌套 IF 函数**
处理多重条件分支：
```sql
SELECT 
    name,
    score,
    IF(score >= 90, 'A',
        IF(score >= 80, 'B',
            IF(score >= 70, 'C',
                IF(score >= 60, 'D', 'F')
            )
        )
    ) AS grade
FROM students;
```
输出结果：
```
+---------+-------+-------+
| name    | score | grade |
+---------+-------+-------+
| Alice   | 85    | B     |
| Bob     | 72    | C     |
| Charlie | 60    | D     |
| David   | 45    | F     |
+---------+-------+-------+
```

#### 2. **结合聚合函数**
动态统计符合条件的数据：
```sql
SELECT 
    COUNT(*) AS total_students,
    SUM(IF(score >= 60, 1, 0)) AS passed_count,
    SUM(IF(score < 60, 1, 0)) AS failed_count
FROM students;
```
输出结果：
```
+----------------+--------------+--------------+
| total_students | passed_count | failed_count |
+----------------+--------------+--------------+
| 4              | 3            | 1            |
+----------------+--------------+--------------+
```

---

### **注意事项**
1. **返回值类型兼容性**  
   `IF` 函数返回的 `value_if_true` 和 `value_if_false` 需为同一数据类型，否则 MySQL 会隐式转换类型：
   ```sql
   SELECT IF(TRUE, 100, 'Fail');  -- 输出: 100（字符串 'Fail' 被转为数值 0）
   ```

2. **处理 NULL 值**  
   如果条件中涉及 `NULL`，需用 `IS NULL` 或 `IS NOT NULL` 判断：
   ```sql
   SELECT IF(NULL, 'True', 'False');  -- 输出: 'False'（NULL 视为假）
   SELECT IF(column IS NULL, 'Unknown', column) FROM table;
   ```

3. **替代方案：CASE 语句**  
   对于复杂多条件分支，推荐使用 `CASE` 语句（更易读）：
   ```sql
   SELECT 
       name,
       CASE 
           WHEN score >= 90 THEN 'A'
           WHEN score >= 80 THEN 'B'
           WHEN score >= 70 THEN 'C'
           ELSE 'F'
       END AS grade
   FROM students;
   ```

---

### **典型应用场景**
1. **动态列生成**  
   根据条件生成标记列（如是否达标、状态分类）。
2. **数据清洗**  
   替换无效值或格式化字段。
3. **聚合统计**  
   按条件分组计数或求和。
4. **查询结果优化**  
   简化复杂逻辑的查询结果展示。

---

### **总结**
`IF` 函数是 MySQL 中处理简单条件分支的高效工具，适合快速实现二元逻辑。但在多层嵌套或复杂条件时，建议改用 `CASE` 语句以提高代码可读性。