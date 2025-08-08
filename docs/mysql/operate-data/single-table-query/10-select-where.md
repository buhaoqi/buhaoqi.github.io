---
noteId: "98fd66b0741e11f0ac7f012540a4f7e6"
tags: []

---

## SELECT语法

```sql
SELECT [ALL | DISTINCT] 输出列表达式1,输出列表达式2, ...
[FROM 表名]                          /*FROM子句*/
[WHERE 条件]                         /*WHERE子句*/
[GROUP BY 列名]                      /*GROUP BY子句*/
        [ASC | DESC]
[HAVING 群组后条件]                   /*HAVING子句*/
[ORDER BY 列名|表达式｜列编号 ]        /*ORDER BY子句*/
        [ASC|DESC]
[LIMIT 偏移量 行｜列数 OFFSET 偏移量];  /*LIMIT子句*/
```


### 条件查询(WHERE)

使用 WHERE 进行条件查询

语法

```sql
-- 条件查询
SELECT * FROM 表名 WHERE 条件; 
```
示例
```sql
-- 查询年龄大于21岁的学生（比较运算符）
SELECT name, age FROM students WHERE age > 21;  
```

示例

```sql
-- 查询部门为'Sales'且薪资≥5000的员工（逻辑运算符）
SELECT * FROM employees 
```

示例

```sql
-- 查询分数大于 85 分的学生：
SELECT name, score
FROM students
WHERE score > 85;
```

🔍 返回：小红(92.0)、小华(90.0)、小丽(85.0)（取决于是否包含等于，如果要包含 85，可以 `>=`）

---

### 逻辑查询

🔍 使用逻辑运算符：`AND`、`OR`、`NOT`

示例

```sql
WHERE department = 'Sales' AND salary >= 5000;
```

示例：查询年龄为 18 岁的男生：

```sql
SELECT name, age, gender
FROM students
WHERE age = 18 AND gender = '男';
```

### 范围查询


### 匹配查询

### 检测查询

### 空值查询


### **2. 条件过滤（WHERE）**
```sql
SELECT * FROM employees 
WHERE department = '技术部' AND salary > 8000;
```
- **运算符**：
  - 比较：`=`, `<>`, `>`, `<`, `>=`, `<=`
  - 逻辑：`AND`, `OR`, `NOT`
  - 范围：`BETWEEN`, `IN`
  - 模糊匹配：`LIKE`（`%`匹配任意字符，`_`匹配单个字符）
- **示例**：
  ```sql
  SELECT * FROM products 
  WHERE price BETWEEN 50 AND 100 
     OR product_name LIKE '%手机%';
  ```

---