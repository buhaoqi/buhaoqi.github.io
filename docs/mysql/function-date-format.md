---
noteId: "851dced02d6711f0965ee5785546709e"
tags: []

---

---

### **MySQL中的DATE_FORMAT()函数详解**

`DATE_FORMAT()` 是 MySQL 中用于将日期或时间值按指定格式转换为字符串的核心函数，广泛应用于数据展示、报表生成等场景。以下是其详细用法和示例：

---

### **一、基本语法**
```sql
DATE_FORMAT(date, format)
```
- **参数说明**：
  - `date`：需要格式化的日期/时间值，可以是 `DATE`、`DATETIME`、`TIMESTAMP` 类型或合法字符串（如 `'2023-10-05'`）。
  - `format`：定义输出格式的字符串，由 **格式符** 和普通字符组成（如 `'%Y-%m-%d'`）。

---

### **二、常用格式符对照表**
| 格式符 | 说明                        | 示例值（输入：`2023-10-05 14:30:00`） |
|--------|----------------------------|--------------------------------------|
| `%Y`   | 四位年份                    | 2023                                 |
| `%y`   | 两位年份                    | 23                                   |
| `%M`   | 月份英文全名                | October                              |
| `%b`   | 月份英文缩写                | Oct                                  |
| `%m`   | 两位数字月份（01-12）       | 10                                   |
| `%c`   | 数字月份（1-12）            | 10                                   |
| `%d`   | 两位日期（01-31）           | 05                                   |
| `%e`   | 数字日期（1-31）            | 5                                    |
| `%D`   | 带英文后缀的日期            | 5th                                  |
| `%W`   | 星期英文全名                | Thursday                             |
| `%a`   | 星期英文缩写                | Thu                                  |
| `%w`   | 星期数字（0=周日, 1=周一）  | 4                                    |
| `%H`   | 24小时制小时（00-23）       | 14                                   |
| `%h`   | 12小时制小时（01-12）       | 02                                   |
| `%i`   | 分钟（00-59）               | 30                                   |
| `%s`   | 秒（00-59）                 | 00                                   |
| `%p`   | AM/PM                      | PM                                   |
| `%f`   | 微秒（000000-999999）       | 000000                               |
| `%%`   | 转义字符`%`                | %                                    |

---

### **三、典型使用场景与示例**

#### **1. 基础日期格式化**
```sql
SELECT 
  DATE_FORMAT('2023-10-05', '%Y-%m-%d') AS fmt1,    -- 2023-10-05
  DATE_FORMAT('2023-10-05', '%d/%m/%Y') AS fmt2,    -- 05/10/2023
  DATE_FORMAT('2023-10-05', '%M %e, %Y') AS fmt3;   -- October 5, 2023
```

#### **2. 时间格式化**
```sql
SELECT 
  DATE_FORMAT('2023-10-05 14:30:00', '%H:%i:%s') AS time24,  -- 14:30:00
  DATE_FORMAT('2023-10-05 14:30:00', '%h:%i %p') AS time12;  -- 02:30 PM
```

#### **3. 组合日期与时间**
```sql
SELECT DATE_FORMAT(NOW(), '%Y-%m-%d %H:%i:%s') AS current_datetime;
-- 输出示例：2023-10-05 15:45:00
```

#### **4. 按年月分组统计**
```sql
-- 统计每月订单数量
SELECT 
  DATE_FORMAT(order_date, '%Y-%m') AS month,
  COUNT(*) AS order_count
FROM orders
GROUP BY month;
```

---

### **四、高级用法与注意事项**

#### **1. 处理`NULL`和无效日期**
- 若 `date` 为 `NULL`，返回 `NULL`。
- 若 `date` 格式无效（如 `'2023-13-01'`），在严格模式下报错，否则返回 `NULL`。

#### **2. 动态组合格式符**
```sql
-- 根据季度显示不同格式
SELECT 
  DATE_FORMAT(order_date, 
    CASE 
      WHEN QUARTER(order_date) = 1 THEN '%Y-Q1'
      WHEN QUARTER(order_date) = 2 THEN '%Y-Q2'
      ELSE CONCAT('%Y-Q', QUARTER(order_date))
    END
  ) AS quarter
FROM orders;
```

#### **3. 时区处理**
若需调整时区后再格式化，先使用 `CONVERT_TZ()`：
```sql
SELECT DATE_FORMAT(
  CONVERT_TZ(utc_time, '+00:00', '+08:00'), 
  '%Y-%m-%d %H:%i:%s'
) AS local_time
FROM logs;
```

#### **4. 性能优化**
- **避免在WHERE中使用**：对字段使用函数会禁用索引。
  ```sql
  -- 错误示例（无法使用索引）
  SELECT * FROM orders 
  WHERE DATE_FORMAT(order_date, '%Y-%m') = '2023-10';
  
  -- 正确写法（直接比较日期范围）
  SELECT * FROM orders 
  WHERE order_date BETWEEN '2023-10-01' AND '2023-10-31';
  ```

---

### **五、对比其他函数**
| 函数            | 作用                      | 示例                              |
|-----------------|--------------------------|-----------------------------------|
| `DATE_FORMAT()` | 日期 → 格式化字符串       | `DATE_FORMAT(NOW(), '%Y-%m-%d')` |
| `STR_TO_DATE()` | 字符串 → 日期             | `STR_TO_DATE('05-10-2023', '%d-%m-%Y')` |
| `TIME_FORMAT()` | 时间 → 格式化字符串       | `TIME_FORMAT('14:30:00', '%h:%i %p')` |

---

### **六、总结**
- **核心作用**：将日期/时间转换为易读的字符串格式。
- **关键技巧**：
  - 熟悉常用格式符（如 `%Y`、`%m`、`%d`、`%H`、`%i`）。
  - 避免在 `WHERE` 或 `JOIN` 条件中使用，以防索引失效。
  - 结合 `CASE`、`CONCAT` 等函数实现动态格式化。
- **适用场景**：报表生成、日志展示、数据导出等需要友好时间格式的场景。

通过灵活使用 `DATE_FORMAT()`，可以轻松实现多样化的日期时间显示需求。