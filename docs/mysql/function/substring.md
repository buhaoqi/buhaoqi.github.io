---
noteId: "21d85c20308011f08660ed443661e5a0"
tags: []

---

---

### **MySQL 中 `SUBSTRING()` 函数详解**

`SUBSTRING()` 是 MySQL 中用于从字符串中提取子字符串的核心函数，支持灵活的位置和长度控制，适用于数据清洗、格式化输出等场景。以下是其详细说明及使用指南。

---

### **一、语法与参数**
```sql
SUBSTRING(str, start[, length])
-- 或
SUBSTRING(str FROM start [FOR length])
```
- **参数说明**：
  - `str`：待处理的字符串（可以是字段名或字符串字面量）。
  - `start`：起始位置（从 `1` 开始计数；负数表示从末尾倒数）。
  - `length`（可选）：截取长度（省略时截取到字符串末尾）。
- **返回值**：
  - 成功时返回子字符串。
  - 若 `str` 为 `NULL`，返回 `NULL`。
  - 若 `start` 超出字符串长度，返回空字符串 `''`。

---

### **二、核心功能与示例**

#### **1. 基础截取**
| **场景**               | **示例**                               | **输出结果**      | **说明**                     |
|------------------------|---------------------------------------|-------------------|-----------------------------|
| 指定起始位置和长度     | `SUBSTRING('Hello World', 7, 5)`      | `'World'`         | 从第7位开始截取5个字符      |
| 省略长度参数           | `SUBSTRING('Database', 4)`            | `'abase'`         | 从第4位截取到末尾           |
| 负数起始位置           | `SUBSTRING('Quadratically', -5)`      | `'ically'`        | 从倒数第5位截取到末尾       |
| 负数起始位置 + 长度    | `SUBSTRING('abcdef', -3, 2)`          | `'de'`            | 从倒数第3位截取2个字符      |

#### **2. 多字节字符处理（如中文、Emoji）**
```sql
-- 示例字符串：'你好世界'（UTF-8 编码，每个中文字符占3字节）
SELECT SUBSTRING('你好世界', 3, 2);  -- 输出 '世界'（按字符截取，而非字节）
```

#### **3. 参数边界处理**
| **场景**               | **示例**                               | **输出结果**      |
|------------------------|---------------------------------------|-------------------|
| `start` 超出字符串长度 | `SUBSTRING('abc', 5, 1)`              | `''`              |
| `start` 为0            | `SUBSTRING('abc', 0, 1)`              | `''`（视为无效）  |
| `length` 为负数        | `SUBSTRING('abc', 2, -1)`             | `''`              |

---

### **三、与相似函数的对比**
| **函数**         | **语法**                     | **功能**                      | **示例**                          |
|------------------|------------------------------|-------------------------------|-----------------------------------|
| `SUBSTRING()`    | `SUBSTRING(str, start, len)` | 灵活截取任意位置子字符串      | `SUBSTRING('MySQL', 3, 3) → 'SQL'` |
| `LEFT()`         | `LEFT(str, len)`             | 截取左侧指定长度的子字符串    | `LEFT('Hello', 3) → 'Hel'`         |
| `RIGHT()`        | `RIGHT(str, len)`            | 截取右侧指定长度的子字符串    | `RIGHT('World', 3) → 'rld'`        |
| `SUBSTR()`       | `SUBSTR(str, start, len)`    | `SUBSTRING()` 的同义词        | 功能与 `SUBSTRING()` 完全相同      |

---

### **四、实际应用场景**

#### **场景 1：提取关键信息**
```sql
-- 从 URL 中提取域名（如 'https://www.example.com/path' → 'www.example.com'）
SELECT 
    SUBSTRING(
        url, 
        LOCATE('//', url) + 2, 
        LOCATE('/', url, LOCATE('//', url) + 2) - (LOCATE('//', url) + 2)
    ) AS domain
FROM websites;
```

#### **场景 2：数据脱敏**
```sql
-- 隐藏手机号中间四位（如 '13812345678' → '138****5678'）
SELECT 
    CONCAT(
        LEFT(phone, 3), 
        '****', 
        SUBSTRING(phone, -4)
    ) AS masked_phone
FROM users;
```

#### **场景 3：动态截取日志**
```sql
-- 截取日志时间戳（如 '[2023-10-01] Error occurred' → '2023-10-01'）
SELECT 
    SUBSTRING(log_message, 2, 10) AS log_date 
FROM system_logs
WHERE log_message LIKE '[____-__-__]%';
```

---

### **五、性能与注意事项**
1. **索引影响**：  
   - 在 `WHERE` 子句中直接使用 `SUBSTRING()` 可能导致全表扫描。  
   - **优化方案**：预计算并存储截取结果，或使用函数索引（MySQL 8.0+）。  
     ```sql
     -- 创建函数索引
     CREATE INDEX idx_domain ON websites ((SUBSTRING(url, LOCATE('//', url) + 2));
     ```

2. **多字节字符集**：  
   - `SUBSTRING()` 按字符截取，而非字节。确保字符集支持（如 `utf8mb4`）。

3. **NULL 值处理**：  
   - 若任一参数为 `NULL`，返回 `NULL`。  
     ```sql
     SELECT SUBSTRING(NULL, 1, 1);   -- 输出 NULL
     SELECT SUBSTRING('abc', NULL, 1); -- 输出 NULL
     ```

---

### **六、总结**
- **核心价值**：灵活截取子字符串，支持正向和逆向定位。
- **最佳实践**：  
  - 结合 `LOCATE()` 实现动态位置计算。  
  - 预存截取结果以优化查询性能。  
- **适用场景**：数据清洗、日志分析、敏感信息脱敏。