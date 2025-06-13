---
noteId: "e61a0490307f11f08660ed443661e5a0"
tags: []

---

---

### **MySQL 的 `LENGTH()` 函数详解**

`LENGTH()` 是 MySQL 中用于计算字符串 **字节长度** 的函数。它返回字符串的存储字节数，而不是字符数量，因此其返回值会受到字符集的影响。以下是该函数的详细说明及用法示例。

---

### **1. 语法**
```sql
LENGTH(str)
```
- **参数**：  
  - `str`：需要计算长度的字符串。可以是字段名、字符串字面量或表达式。
  - 如果输入为 `NULL`，则返回 `NULL`。

---

### **2. 核心特性**
| **特性**                | **说明**                                                                 |
|-------------------------|--------------------------------------------------------------------------|
| **字节长度**            | 返回字符串占用的字节数（而非字符数）                                     |
| **字符集敏感**          | 不同字符集下，相同字符串的字节长度可能不同                               |
| **多字节字符处理**      | 对多字节字符（如中文、Emoji）会按实际编码计算字节数                       |
| **空格处理**            | 包含空格、换行符等空白字符时，会计算其字节长度                           |
| **二进制数据**          | 对二进制字符串（如 `BLOB`），直接返回字节长度                            |

---

### **3. 与 `CHAR_LENGTH()` 的区别**
| **函数**            | **返回值**       | **示例（字符串：'你好'）**                   |
|---------------------|------------------|---------------------------------------------|
| `LENGTH()`          | 字节长度         | 在 `utf8mb4` 字符集下返回 `6`（每个汉字占 3 字节） |
| `CHAR_LENGTH()`     | 字符数量         | 返回 `2`（两个汉字）                         |

---

### **4. 不同字符集的影响**
#### **示例表**
```sql
-- 创建不同字符集的表
CREATE TABLE test_charset (
    str_latin1 VARCHAR(10) CHARACTER SET latin1,
    str_utf8mb4 VARCHAR(10) CHARACTER SET utf8mb4
);

-- 插入数据
INSERT INTO test_charset VALUES 
    ('abc', 'abc'),
    ('é', 'é'),          -- Latin1 字符
    ('hello', '你好');    -- 中文字符
```

#### **查询结果**
```sql
SELECT 
    str_latin1, 
    LENGTH(str_latin1) AS len_latin1,
    str_utf8mb4,
    LENGTH(str_utf8mb4) AS len_utf8mb4
FROM test_charset;
```

| `str_latin1` | `len_latin1` | `str_utf8mb4` | `len_utf8mb4` |
|--------------|--------------|---------------|---------------|
| `abc`        | 3            | `abc`         | 3             |
| `é`          | 1            | `é`           | 2             |
| `hello`      | 5            | `你好`        | 6             |

- **说明**：
  - `latin1` 字符集：每个字符占 1 字节。
  - `utf8mb4` 字符集：
    - 英文字符：1 字节。
    - 拉丁扩展字符（如 `é`）：2 字节。
    - 中文字符：3 字节。
    - Emoji：4 字节。

---

### **5. 常见使用场景**
#### **场景 1：验证存储限制**
```sql
-- 检查字段是否超出 VARCHAR(255) 的字节限制（假设为 utf8mb4）
SELECT 
    column_name,
    LENGTH(column_name) AS byte_length
FROM table
WHERE LENGTH(column_name) > 255 * 4;  -- utf8mb4 最大 4 字节/字符
```

#### **场景 2：处理二进制数据**
```sql
-- 计算 BLOB 字段的字节长度
SELECT 
    blob_column,
    LENGTH(blob_column) AS blob_size
FROM files;
```

#### **场景 3：数据清洗**
```sql
-- 去除末尾空格（需结合 TRIM）
UPDATE users 
SET username = TRIM(username)
WHERE LENGTH(username) != LENGTH(TRIM(username));
```

---

### **6. 注意事项**
1. **隐式类型转换**：  
   - 若输入为数值或日期，MySQL 会先将其转换为字符串再计算长度。  
     ```sql
     SELECT LENGTH(12345);        -- 输出 5（'12345' 的字节长度）
     SELECT LENGTH(CURDATE());    -- 输出 10（如 '2023-10-01'）
     ```

2. **NULL 值处理**：  
   - 输入为 `NULL` 时返回 `NULL`。  
     ```sql
     SELECT LENGTH(NULL);    -- 输出 NULL
     ```

3. **性能问题**：  
   - 对大表频繁使用 `LENGTH()` 可能导致全表扫描，建议结合索引优化。

---

### **7. 总结**
- **适用场景**：需精确计算存储空间时（如验证字段长度、处理二进制数据）。
- **避坑指南**：  
  - 若需统计字符数，使用 `CHAR_LENGTH()`。  
  - 注意字符集对计算结果的影响。  
  - 处理多语言文本时，优先使用 `utf8mb4` 字符集。  

掌握 `LENGTH()` 的使用方法，可以更精准地管理数据库存储和优化查询性能！