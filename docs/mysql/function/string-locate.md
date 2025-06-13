---
noteId: "6df01e20308211f08660ed443661e5a0"
tags: []

---

---

### **MySQL 中的 `LOCATE()` 函数详解**

`LOCATE()` 函数用于查找子字符串在字符串中的首次出现位置，支持指定起始搜索点，是处理字符串定位需求的核心工具。

---

### **一、语法与参数**
```sql
LOCATE(substr, str[, start_pos])
```
- **参数说明**：
  - `substr`：要查找的子字符串。
  - `str`：被搜索的主字符串。
  - `start_pos`（可选）：搜索起始位置（默认从第1位开始）。
- **返回值**：
  - 找到时返回首次出现的位置（从1开始计数）。
  - 未找到时返回 `0`。
  - 若 `substr` 为空字符串，返回 `1`。

---

### **二、基础用法示例**
#### **示例 1：查找简单子字符串**
```sql
SELECT LOCATE('World', 'Hello World');  -- 输出 7
```

#### **示例 2：指定起始位置**
```sql
SELECT LOCATE('o', 'Hello World', 5);   -- 从第5位开始，输出 5
```

#### **示例 3：子字符串不存在**
```sql
SELECT LOCATE('Python', 'MySQL');       -- 输出 0
```

#### **示例 4：空字符串处理**
```sql
SELECT LOCATE('', 'Database');          -- 输出 1
```

---

### **三、与相似函数的区别**
| **函数**       | **语法**                | **参数顺序** | **起始位置支持** | **标准兼容性**      |
|----------------|-------------------------|--------------|------------------|---------------------|
| `LOCATE()`     | `LOCATE(substr, str, start)` | substr 先     | ✅ 是           | MySQL 特有          |
| `INSTR()`      | `INSTR(str, substr)`    | str 先        | ❌ 否           | MySQL 特有          |
| `POSITION()`   | `POSITION(substr IN str)` | substr 先     | ❌ 否           | SQL 标准           |

---

### **四、实际应用场景**
#### **场景 1：邮箱格式验证**
```sql
-- 检查邮箱是否包含 '@' 和 '.'
SELECT 
    email,
    IF(LOCATE('@', email) > 0 AND LOCATE('.', email, LOCATE('@', email)) > 0, 
       '有效', 
       '无效') AS validity
FROM users;
```

#### **场景 2：提取 URL 域名**
```sql
-- 从 URL 中提取域名部分（如 'https://www.example.com/path' → 'www.example.com'）
SELECT 
    url,
    SUBSTRING(
        url, 
        LOCATE('//', url) + 2, 
        LOCATE('/', url, LOCATE('//', url) + 2) - (LOCATE('//', url) + 2)
    ) AS domain
FROM websites;
```

#### **场景 3：查找第 N 次出现的子字符串**
```sql
-- 查找字符串中第二个 'a' 的位置（如 'banana' → 4）
SET @str = 'banana';
SET @first_pos = LOCATE('a', @str);
SELECT LOCATE('a', @str, @first_pos + 1);  -- 输出 4
```

---

### **五、性能优化与注意事项**
1. **索引影响**：  
   - 在 `WHERE` 子句中直接使用 `LOCATE()` 可能导致全表扫描。
   - **优化方案**：预计算并存储关键位置值，或使用函数索引（MySQL 8.0+）。
     ```sql
     -- 创建函数索引
     CREATE INDEX idx_email_at ON users ((LOCATE('@', email)));
     ```

2. **大小写敏感性**：  
   - 结果受数据库校对规则（Collation）影响。
   - **示例**：若校对规则为 `utf8mb4_bin`，则区分大小写：
     ```sql
     SELECT LOCATE('A', 'apple');  -- 输出 0
     ```

3. **多字节字符处理**：  
   - 对中文、Emoji 等多字节字符，按实际字节计算位置。
     ```sql
     SELECT LOCATE('库', '数据库');  -- 输出 3（每个汉字占3字节，'数'1-3，'据'4-6，'库'7-9）
     ```

---

### **六、常见问题解答**
#### **Q1：如何反向查找子字符串（从右向左）？**
```sql
-- 使用 LENGTH() 和 REVERSE() 组合
SELECT LENGTH(str) - LOCATE(REVERSE(substr), REVERSE(str)) + 1 AS reverse_pos;
```

#### **Q2：如何统计子字符串出现的总次数？**
```sql
-- 通过循环或程序计算
SET @count = 0;
SET @start = 1;
WHILE @start > 0 DO
    SET @pos = LOCATE('a', 'banana', @start);
    IF @pos > 0 THEN
        SET @count = @count + 1;
        SET @start = @pos + 1;
    ELSE
        SET @start = 0;
    END IF;
END WHILE;
SELECT @count;  -- 输出 3
```

---

### **七、总结**
- **核心价值**：精准定位子字符串，支持复杂文本解析。
- **最佳实践**：  
  - 结合 `SUBSTRING()` 实现动态截取。  
  - 预计算关键位置提升查询性能。  
  - 注意字符集和校对规则的影响。  
- **适用场景**：数据清洗、格式验证、日志分析等。