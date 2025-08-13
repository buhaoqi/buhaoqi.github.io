---
noteId: "430cb03073e711f0ac7f012540a4f7e6"
tags: []

---

# MySQL 中布尔类型的用法详解

在 MySQL 中，**实际上并没有一个原生的、独立的 “BOOLEAN” 数据类型**，就像在一些编程语言（如 Java、Python）中那样。但是，MySQL 提供了一种**语法上的简便方式**来模拟布尔类型，它本质上是基于 **TINYINT(1)** 类型实现的。

---

## 一、MySQL 中的 "布尔" 到底是什么？

### ✅ 事实：
- **MySQL 没有真正的 BOOLEAN 数据类型**
- 但 MySQL **支持 BOOLEAN 和 BOOL 关键字**，它们是 **TINYINT(1) 的别名（alias）**
- 也就是说：
  ```sql
  BOOLEAN
  BOOL
  ```
  👉 实际上就是：
  ```sql
  TINYINT(1)
  ```

### ✅ 所以：
- 当你定义一个字段为 `BOOLEAN` 或 `BOOL` 时，MySQL 实际上创建的是一个 **TINYINT(1)** 字段
- 它可以存储 **0 或 1**，通常约定：
  - **0 表示 FALSE**
  - **1 表示 TRUE**

---

## 二、如何定义布尔类型的字段？

### ✅ 推荐写法（实际是 TINYINT(1)）

```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    is_active BOOLEAN,     -- 实际是 TINYINT(1)
    is_admin BOOL          -- 同样也是 TINYINT(1)
);
```

### ✅ 等价于：

```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    is_active TINYINT(1),  -- 0 或 1
    is_admin TINYINT(1)    -- 0 或 1
);
```

---

## 三、布尔类型（TINYINT(1)）的常见用法

### 1️⃣ 存储逻辑状态（是/否、开/关、启用/禁用）

| 字段名       | 含义         | 值含义       |
|--------------|--------------|--------------|
| `is_active`  | 是否激活     | 1 = 是，0 = 否 |
| `is_deleted` | 是否已删除   | 0 = 否，1 = 是 |
| `is_admin`   | 是否管理员   | 0 = 普通用户，1 = 管理员 |
| `has_permission` | 是否有权限 | 1 = 有，0 = 无 |

### ✅ 示例：创建带有布尔字段的表

```sql
CREATE TABLE accounts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    is_verified BOOLEAN DEFAULT 0,      -- 是否验证，默认未验证 (0)
    is_premium BOOL DEFAULT 0           -- 是否高级用户，默认否 (0)
);
```

### ✅ 示例：插入数据

```sql
INSERT INTO accounts (username, is_verified, is_premium)
VALUES 
    ('alice', 1, 0),   -- 已验证，非高级
    ('bob', 0, 1);     -- 未验证，是高级
```

### ✅ 示例：查询数据

```sql
-- 查询所有已验证的用户
SELECT * FROM accounts WHERE is_verified = 1;

-- 查询所有非高级用户
SELECT * FROM accounts WHERE is_premium = 0;
```

---

## 四、为什么使用 TINYINT(1) 来模拟布尔类型？

### 优点：

| 原因 | 说明 |
|------|------|
| ✅ 简洁性 | 使用 `BOOLEAN` 或 `BOOL` 关键字更直观、语义更清晰 |
| ✅ 兼容性 | 所有 MySQL 版本都支持，无需特殊配置 |
| ✅ 节省空间 | TINYINT(1) 只占 **1 字节**，非常节省存储空间 |
| ✅ 灵活性 | 虽然约定 0/1，但你仍然可以存其他数字（如 0/1/2），但一般不建议 |

### 注意事项：

- **MySQL 不会限制你只能存 0 或 1**
  - 你可以插入 `2`、`-1`、`99` 等值，但**强烈建议只使用 0 和 1 来表示 FALSE / TRUE**
- **没有真正的布尔逻辑类型检查**
  - 比如在某些数据库中，`BOOLEAN` 字段只能接受 true/false，但在 MySQL 中你可以存任意整数

---

## 五、布尔类型与其它数据类型的对比

| 类型 | 实际存储类型 | 是否真的布尔 | 推荐使用场景 | 可存值范围 |
|------|--------------|---------------|----------------|-------------|
| **BOOLEAN / BOOL** | ✅ TINYINT(1) | ❌（只是别名） | 逻辑状态字段，如 is_active, is_deleted | 通常用 0/1，但可存任意整数 |
| **TINYINT(1)** | TINYINT(1) | ❌ | 同 BOOLEAN，更显式 | 0 ~ 255（但一般只用 0/1） |
| **ENUM('Y','N')** | ENUM 类型 | ⚠️ 模拟布尔 | 也可用来表示 是/否，但更繁琐 | 'Y' / 'N' 或其它自定义值 |
| **CHAR(1) 存 '0'/'1'** | CHAR(1) | ⚠️ 模拟布尔 | 不推荐，直接用 TINYINT 更高效 | '0', '1' 或其他字符 |

---

## 六、最佳实践建议

### ✅ 推荐做法：

1. **使用 `BOOLEAN` 或 `BOOL` 关键字定义字段**，提高代码可读性：
   ```sql
   is_active BOOLEAN DEFAULT 0
   ```

2. **约定俗成：**
   - **0 表示 FALSE / 否 / 关闭 / 未激活**
   - **1 表示 TRUE / 是 / 开启 / 已激活**

3. **设置默认值：**
   - 大多数布尔字段可设默认值为 `0`（如未验证、非管理员等）

4. **避免存非 0/1 值（除非有特殊需求）**

---

## 七、实际应用场景举例

### ✅ 场景 1：用户账户是否激活
```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(100),
    is_active BOOLEAN DEFAULT 0  -- 0=未激活，1=已激活
);
```

### ✅ 场景 2：订单是否已支付
```sql
CREATE TABLE orders (
    id INT PRIMARY KEY,
    amount DECIMAL(10,2),
    is_paid BOOLEAN DEFAULT 0  -- 0=未支付，1=已支付
);
```

### ✅ 场景 3：文章是否发布
```sql
CREATE TABLE articles (
    id INT PRIMARY KEY,
    title VARCHAR(200),
    content TEXT,
    is_published BOOLEAN DEFAULT 0  -- 0=草稿，1=已发布
);
```

---

## 八、总结

| 项目 | 说明 |
|------|------|
| ✅ MySQL 是否有真正的 BOOLEAN 类型？ | ❌ 没有，但支持 BOOLEAN / BOOL 关键字 |
| ✅ BOOLEAN 实际是什么？ | 🔁 是 **TINYINT(1)** 的别名 |
| ✅ 可存值 | 通常用 **0（假/否） 和 1（真/是）**，但也可以存其他整数 |
| ✅ 推荐用途 | 存储逻辑状态：是否激活、是否删除、是否管理员、是否支付等 |
| ✅ 最佳实践 | 使用 `BOOLEAN` 关键字定义字段，约定 0/1，可设置默认值 |
| ⚠️ 注意事项 | 不要误以为 MySQL 的 BOOLEAN 有类型检查，它本质就是 TINYINT(1) |

---

### ✅ 一句话总结：

> **MySQL 中没有原生的布尔类型，但你可以使用 BOOLEAN 或 BOOL 关键字来定义一个 TINYINT(1) 字段，通过存储 0 和 1 来表示 FALSE 和 TRUE，这是 MySQL 中实现布尔逻辑的标准做法。**

---

如你希望了解：

- 如何在 **SELECT 查询中把 0/1 转为 '否'/'是' 显示**
- 如何用 **CASE WHEN** 或 **IF()** 函数显示更友好的布尔文本
- 或者如何在 **应用程序（如 PHP、Python、Java）中处理 MySQL 的布尔字段**

欢迎继续提问！我可以为你提供对应的 SQL 示例和代码片段。


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

