---
noteId: "c7d2ba00309211f08660ed443661e5a0"
tags: []

---

---

### **MySQL 中 `CONCAT()` 函数详解**

`CONCAT()` 是 MySQL 中用于 **将多个字符串或字段值连接成一个字符串** 的核心函数，适用于数据格式化、动态拼接字段等场景。以下是其详细用法及示例。

---

### **一、基本语法**
```sql
CONCAT(str1, str2, ..., strN)
```
- **参数**：
  - `str1, str2, ..., strN`：可以是字符串字面量、字段名、表达式或 `NULL`。
  - 最少需要 **1 个参数**，最多支持 **255 个参数**。
- **返回值**：
  - 所有参数按顺序拼接后的字符串。
  - **若任一参数为 `NULL`，则整个结果为 `NULL`**（需特别注意）。

---

### **二、核心功能与示例**

#### **1. 基本字符串拼接**
```sql
SELECT CONCAT('Hello', ' ', 'World'); 
-- 输出：Hello World
```

#### **2. 字段值拼接**
```sql
-- 将 first_name 和 last_name 合并为全名
SELECT CONCAT(first_name, ' ', last_name) AS full_name 
FROM employees;
```
**输出示例**：
```
+-----------------+
| full_name       |
+-----------------+
| John Doe        |
| Jane Smith      |
+-----------------+
```

#### **3. 处理 NULL 值**
若参数中存在 `NULL`，结果将变为 `NULL`。需用 `COALESCE()` 或 `IFNULL()` 处理：
```sql
-- 使用 COALESCE 替换 NULL 为空字符串
SELECT CONCAT(
    COALESCE(first_name, ''), 
    ' ', 
    COALESCE(last_name, '')
) AS safe_full_name 
FROM employees;
```

---

### **三、与其他函数的结合使用**

#### **1. 与 `CONCAT_WS()` 的区别**
- **`CONCAT()`**：直接拼接所有参数，无分隔符。
- **`CONCAT_WS(separator, str1, str2, ...)`**：自动添加分隔符，忽略 `NULL`。
  ```sql
  SELECT CONCAT_WS('-', '2023', '10', '01');  -- 输出：2023-10-01
  SELECT CONCAT_WS(',', 'Apple', NULL, 'Banana');  -- 输出：Apple,Banana
  ```

#### **2. 与 `CAST()` 转换数据类型**
拼接非字符串类型（如数字、日期）时需显式转换：
```sql
-- 拼接字符串与数字
SELECT CONCAT('Order ID: ', CAST(order_id AS CHAR)) AS order_info 
FROM orders;
```

---

### **四、实际应用场景**

#### **场景 1：生成完整地址**
```sql
SELECT 
    CONCAT_WS(', ', 
        address, 
        city, 
        province, 
        postcode
    ) AS full_address 
FROM users;
```
**输出示例**：
```
+---------------------------------+
| full_address                    |
+---------------------------------+
| 123 Main St, Beijing, 100001    |
+---------------------------------+
```

#### **场景 2：动态生成日志格式**
```sql
-- 将日志时间和消息合并
SELECT 
    CONCAT(
        '[', 
        log_time, 
        '] ERROR: ', 
        message
    ) AS log_entry 
FROM system_logs;
```

#### **场景 3：处理多语言内容**
```sql
-- 中英文混合拼接
SELECT CONCAT('欢迎回来, ', username, '! Your last login: ', last_login) AS greeting 
FROM users;
```

---

### **五、注意事项**

#### **1. NULL 值处理**
- **默认行为**：任一参数为 `NULL`，结果即为 `NULL`。
- **解决方案**：
  - 使用 `COALESCE()` 替换 `NULL`：
    ```sql
    SELECT CONCAT(COALESCE(column1, ''), COALESCE(column2, ''));
    ```
  - 使用 `IFNULL()` 指定默认值：
    ```sql
    SELECT CONCAT(IFNULL(column1, 'N/A'), IFNULL(column2, ''));
    ```

#### **2. 性能优化**
- **避免大字段拼接**：对 `TEXT` 或 `BLOB` 类型频繁拼接可能影响性能。
- **预计算字段**：对高频拼接需求，可新增存储生成列：
  ```sql
  ALTER TABLE users 
  ADD COLUMN full_name VARCHAR(255) AS (CONCAT(first_name, ' ', last_name)) STORED;
  ```

#### **3. 字符集一致性**
- 确保所有参数的字符集兼容（如 `utf8mb4`），否则可能引发乱码：
  ```sql
  SELECT CONCAT(_utf8mb4 '中文', _utf8mb3 'text');  -- 可能出错
  ```

---

### **六、总结**
- **核心作用**：灵活拼接字符串，支持动态数据格式化。
- **最佳实践**：
  - 使用 `CONCAT_WS()` 简化分隔符处理。
  - 用 `COALESCE()` 或 `IFNULL()` 规避 `NULL` 问题。
  - 对高频拼接字段预计算存储。
- **适用场景**：
  - 地址、姓名、日志等字段拼接。
  - 动态生成报告内容。
  - 多语言混合内容处理。

掌握 `CONCAT()` 的使用技巧，可显著提升数据处理的灵活性和效率！