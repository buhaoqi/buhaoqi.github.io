---
noteId: "37a0fd50308011f08660ed443661e5a0"
tags: []

---

---

### **MySQL 中 `UPPER()` 函数详解**

`UPPER()` 是 MySQL 中用于将字符串转换为全大写的函数。它适用于规范化数据格式或执行不区分大小写的查询。以下是该函数的详细说明及使用场景。

---

### **1. 基本语法**
```sql
UPPER(str)
```
- **参数**：  
  - `str`：需要转换的字符串，可以是字段名、字符串字面量或表达式。  
  - 如果 `str` 为 `NULL`，返回 `NULL`。
- **返回值**：全大写格式的字符串。

---

### **2. 核心功能**
| **场景**                | **输入示例**         | **输出结果**         | **说明**                          |
|-------------------------|---------------------|---------------------|-----------------------------------|
| 常规英文转换           | `UPPER('Hello')`    | `'HELLO'`           | 小写字母转为大写                 |
| 符号和数字处理         | `UPPER('123!@#aB')` | `'123!@#AB'`        | 非字母字符保持不变               |
| 多语言字符支持         | `UPPER('café')`     | `'CAFÉ'`            | 支持重音字符（依赖字符集）       |
| 中文字符处理           | `UPPER('你好')`     | `'你好'`            | 无大小写概念，原样返回           |
| 空值处理               | `UPPER(NULL)`       | `NULL`              | 输入为 `NULL` 时返回 `NULL`       |

---

### **3. 与 `UCASE()` 的关系**
- **等价性**：`UPPER()` 和 `UCASE()` 是 MySQL 中的同义词，功能完全相同。
- **示例**：
  ```sql
  SELECT UPPER('mysql'), UCASE('mysql');  -- 均输出 'MYSQL'
  ```

---

### **4. 字符集与多字节支持**
#### **支持的字符集**
- `latin1`（西欧语言）
- `utf8` / `utf8mb4`（多语言，包括 Emoji）
- `gbk`（中文字符集）

#### **多字节字符示例**
```sql
-- 德语字符
SELECT UPPER('äöüß');  -- 输出 'ÄÖÜSS'（依赖字符集配置）

-- 法语字符
SELECT UPPER('éàè');   -- 输出 'ÉÀÈ'

-- 中文字符
SELECT UPPER('数据库'); -- 输出 '数据库'
```

---

### **5. 实际应用场景**
#### **场景 1：数据规范化存储**
```sql
-- 将用户名统一存储为大写
INSERT INTO users (username) VALUES (UPPER('john_doe'));
```

#### **场景 2：不区分大小写的查询**
```sql
-- 查找忽略大小写的用户名
SELECT * FROM users WHERE UPPER(username) = UPPER('Admin');
```

#### **场景 3：格式化输出**
```sql
-- 生成全大写的报告标题
SELECT CONCAT(UPPER(title), ' - ', UPPER(author)) AS formatted_title 
FROM articles;
```

---

### **6. 性能与索引优化**
#### **潜在问题**
- **索引失效**：在 `WHERE` 子句中使用 `UPPER(column)` 可能导致无法使用索引。
  ```sql
  -- 低效写法（全表扫描）
  SELECT * FROM users WHERE UPPER(username) = 'ADMIN';
  
  -- 优化方案：预先存储大写值
  ALTER TABLE users ADD COLUMN username_upper VARCHAR(255) AS (UPPER(username)) STORED;
  CREATE INDEX idx_username_upper ON users(username_upper);
  ```

#### **函数索引（MySQL 8.0+）**
```sql
-- 创建基于大写的函数索引
CREATE INDEX idx_upper_username ON users ((UPPER(username)));
```

---

### **7. 与其他函数的结合使用**
#### **示例 1：拼接全大写姓名**
```sql
SELECT CONCAT(UPPER(first_name), ' ', UPPER(last_name)) AS full_name 
FROM employees;
```

#### **示例 2：提取域名并大写**
```sql
SELECT UPPER(SUBSTRING(email, LOCATE('@', email) + 1)) AS domain 
FROM users;
```

---

### **8. 注意事项**
1. **校对规则（Collation）**：  
   - 若校对规则为大小写不敏感（如 `utf8mb4_general_ci`），直接比较可能无需 `UPPER()`。
   - 明确大小写敏感时使用 `utf8mb4_bin`。

2. **性能开销**：  
   - 对大字段（如 `TEXT`）频繁使用 `UPPER()` 可能影响性能。

3. **二进制数据**：  
   - 对 `BINARY` 或 `BLOB` 类型数据，`UPPER()` 可能无法正确转换。

---

### **总结**
- **核心作用**：规范化文本格式，支持跨大小写查询。
- **适用场景**：数据清洗、报告生成、不区分大小写的搜索。
- **避坑指南**：  
  - 优先在插入数据时转换格式，而非查询时。  
  - 结合索引策略优化性能。  
  - 注意字符集和校对规则的影响。  

掌握 `UPPER()` 的用法，可以显著提升文本处理的灵活性和效率！