---
noteId: "430cb03073e711f0ac7f012540a4f7e6"
tags: []

---

8.布尔数据类型(BOOLEAN)

用途：布尔数据类型用于存储TRUE（真）FALSE（假）两种状态。

语法

```sql
列名 BOOLEAN 约束条件
```

示例：创建一个用户表

```sql
CREATE TABLE users(
    -> id INT PRIMARY KEY AUTO_INCREMENT,
    -> user_name VARCHAR(20) NOT NULL,
    -> is_active BOOLEAN
    -> );
```

插入值

```sql
INSERT INTO users(user_name,is_active) VALUES
    -> ('张三',TRUE),
    -> ('李四',FALSE),
    -> ('王五',1),
    -> ('赵六',0),
    -> ('小丽',666),
    -> ('小明',-555);
```

结果

```sql
SELECT * FROM users;
+----+-----------+-----------+
| id | user_name | is_active |
+----+-----------+-----------+
| 12 | 张三      |         1 |
| 13 | 李四      |         0 |
| 14 | 王五      |         1 |
| 15 | 赵六      |         0 |
+----+-----------+-----------+
```

**存储规则**：

- `FALSE` → 存储为 `0`
- `TRUE` → 存储为 `1`
- **允许插入其他值**（如 `42`、`-5`），且非零值均被逻辑视为 `TRUE`。

注意：如果布尔值中是无法存储中文的“是”或“否”的。如果希望存储中文“是”或“否”，建议改用其他类型：

```sql
    s_specialty ENUM('是', '否') DEFAULT '否'  -- 修改为 ENUM 类型
```

或

```sql
s_specialty VARCHAR(2) DEFAULT '否' CHECK(s_specialty IN ('是', '否'))
```

