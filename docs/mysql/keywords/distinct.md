---
noteId: "21f0ff80333911f0ab03e5a28898bc4c"
tags: []

---

在 MySQL 中，`DISTINCT` 关键词用于从查询结果中去除重复的行，确保返回的记录唯一。以下是其核心功能、用法及注意事项的详细解析：

---

### **一、DISTINCT 的作用**
`DISTINCT` 的核心功能是 **消除查询结果中的重复行**，仅保留唯一值。它适用于以下场景：

- 统计某一列的唯一值。
- 获取多列组合的唯一记录。

---

### **二、基本语法**
```sql
-- 单列去重
SELECT DISTINCT column_name 
FROM table_name;

-- 多列组合去重
SELECT DISTINCT column1, column2 
FROM table_name;
```

---

### **三、使用场景与示例**

#### **1. 单列去重**
**场景**：查询表中某个字段的所有唯一值。  
**示例**：  
```sql
-- 获取所有不同的部门名称
SELECT DISTINCT department 
FROM employees;
```

#### **2. 多列组合去重**
**场景**：获取多列组合的唯一记录。  
**示例**：  
```sql
-- 获取员工姓名和职位的唯一组合
SELECT DISTINCT name, job_title 
FROM employees;
```

#### **3. 结合聚合函数**
**场景**：统计唯一值的数量。  
**示例**：  
```sql
-- 统计不同部门的数量
SELECT COUNT(DISTINCT department) AS unique_departments 
FROM employees;
```

---

### **四、DISTINCT 与 GROUP BY 的对比**
| **特性**         | **DISTINCT**                         | **GROUP BY**                          |
|------------------|--------------------------------------|---------------------------------------|
| **核心功能**      | 去除重复行                            | 按列分组，常与聚合函数（如 `COUNT`、`SUM`）结合使用 |
| **语法复杂度**    | 简单，直接写在 `SELECT` 后            | 需要明确指定分组列和可能的聚合函数               |
| **返回结果**      | 仅唯一值列表                          | 分组后的汇总结果（如每个组的统计值）             |
| **性能优化**      | 可能全表扫描                          | 可利用索引优化分组操作                     |

**示例对比**：
```sql
-- 使用 DISTINCT 去重
SELECT DISTINCT department 
FROM employees;

-- 使用 GROUP BY 去重（等效）
SELECT department 
FROM employees 
GROUP BY department;
```

---

### **五、性能优化与注意事项**
1. **索引优化**  
   - 若频繁对某列使用 `DISTINCT`，可为该列创建索引以提高查询效率。  
     ```sql
     CREATE INDEX idx_department ON employees(department);
     ```

2. **避免滥用 DISTINCT**  
   - 若数据本身已保证唯一性（如主键列），无需使用 `DISTINCT`。  
   - 错误使用示例：  
     ```sql
     SELECT DISTINCT id FROM employees;  -- id 是主键，无需去重
     ```

3. **多列去重的代价**  
   - 对多列组合使用 `DISTINCT` 时，数据库需要比较所有列的值的组合，可能导致性能下降。  
   - 示例：  
     ```sql
     SELECT DISTINCT name, email, department 
     FROM employees;
     ```

4. **与 `ORDER BY` 结合使用**  
   - 若需对去重后的结果排序，需确保 `ORDER BY` 列在 `SELECT` 列表中。  
   - 示例：  
     ```sql
     SELECT DISTINCT department 
     FROM employees 
     ORDER BY department ASC;
     ```

---

### **六、DISTINCT 与 UNIQUE 约束的区别**
| **特性**         | **DISTINCT**                         | **UNIQUE 约束**                      |
|------------------|--------------------------------------|--------------------------------------|
| **作用范围**      | 查询时临时去重                        | 表结构约束，强制列值唯一                |
| **数据持久性**    | 仅影响当前查询结果                    | 永久性约束，插入重复值会报错             |
| **应用场景**      | 数据分析、临时统计                    | 数据库设计时保证数据完整性              |

**示例**：  
```sql
-- 创建表时定义 UNIQUE 约束
CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE  -- 邮箱必须唯一
);
```

---

### **七、实际案例**
#### **案例 1：统计唯一客户数量**
```sql
-- 统计订单表中不同客户的数量
SELECT COUNT(DISTINCT customer_id) AS unique_customers 
FROM orders;
```

#### **案例 2：获取唯一商品类别和品牌的组合**
```sql
-- 列出所有商品类别与品牌的唯一组合
SELECT DISTINCT category, brand 
FROM products;
```

#### **案例 3：结合 WHERE 过滤后去重**
```sql
-- 查询技术部员工的唯一职位
SELECT DISTINCT job_title 
FROM employees 
WHERE department = '技术部';
```

---

### **八、总结**
- **核心功能**：`DISTINCT` 用于去除查询结果中的重复行。
- **适用场景**：单列或多列组合去重、统计唯一值数量。
- **性能注意**：大数据量时需结合索引优化，避免全表扫描。
- **与 `GROUP BY` 区别**：`DISTINCT` 仅去重，不进行聚合计算。

通过合理使用 `DISTINCT`，可以高效获取简洁、无重复的查询结果，但需根据实际需求权衡性能与效果。


## 作业

## DISTINCT:单列去重

问题：查询所有不重复的区域名称。

```sql
SELECT DISTINCT 列名 FROM 表名;
```

## DISTINCT:**多列组合去重**

问题：查询所有不同性别与区域组合。

```sql
SELECT DISTINCT s_gender,s_hometown FROM students;
```

**解析**:`DISTINCT`作用于多列时，会基于多列组合判断唯一性。即使单列有重复，只要组合不同就会被保留。

## DISTINCT:**结合聚合函数统计**

问题：统计不同区域的数量

```sql
SELECT count(DISTINCT s_hometown) FROM students;
```

## DISTINCT:**DISTINCT与WHERE结合**

问题: 统计男生中所有不同的区域

```sql
select distinct s_hometown from students where s_gender = '男';
```

## DISTINCT:**DISTINCT与ORDER BY结合**

问题：查询所有不同区域+出生日期组合，并按年份升序排序。

```sql
select distinct s_birthdate,s_hometown from students order by s_birthdate;
```