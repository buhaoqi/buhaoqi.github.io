---
noteId: "0bf32490741311f0ac7f012540a4f7e6"
tags: []

---

# MySQL 中逻辑运算符的用法详解

在 MySQL 中，**逻辑运算符（Logical Operators）** 是用于**组合或反转多个条件表达式**的操作符，它们在 `WHERE`、`HAVING`、`CASE`、`IF` 等语句中广泛使用，用于构建**复杂的查询条件**，实现对数据的精准筛选。

---

## 一、什么是逻辑运算符？

逻辑运算符用于对 **布尔表达式（TRUE / FALSE / NULL）** 进行逻辑操作，比如：

- 组合多个条件（AND / OR）
- 反转条件结果（NOT / !）
- 实现复杂的逻辑判断

它们通常与 **关系运算符（如 =, >, <, IN, LIKE 等）** 一起使用，用于控制查询的过滤逻辑。

---

## 二、MySQL 支持的主要逻辑运算符一览

| 运算符 | 别名/写法 | 名称         | 说明 | 示例 |
|--------|-----------|--------------|------|------|
| `AND`  | `&&`      | 逻辑与       | 当所有条件都为 TRUE 时返回 TRUE | `A AND B` |
| `OR`   | `||`      | 逻辑或       | 当任意一个条件为 TRUE 时返回 TRUE | `A OR B` |
| `NOT`  | `!`       | 逻辑非       | 对条件取反，TRUE 变 FALSE，FALSE 变 TRUE | `NOT A` 或 `！A` |
| `XOR`  | 无        | 逻辑异或     | 两个条件中**只有一个为 TRUE 时返回 TRUE**，其他情况返回 FALSE | `A XOR B` |

> ✅ 其中 `AND` / `OR` / `NOT` 是**最常用的逻辑运算符**，`XOR` 较少使用但也是标准 SQL 的一部分。

---

## 三、逻辑运算符详解与示例

---

### 1️⃣ AND（逻辑与）

**作用：**  
当**所有条件都为真（TRUE）时，返回 TRUE**，否则返回 FALSE。

**语法：**
```sql
条件1 AND 条件2 AND 条件3 ...
```

**示例：**
```sql
-- 查询年龄大于 18 并且状态为 1（激活）的用户
SELECT * FROM users WHERE age > 18 AND status = 1;

-- 查询部门是 IT 并且工资大于 10000 的员工
SELECT * FROM employees WHERE department = 'IT' AND salary > 10000;
```

> ✅ 相当于“并且”、“同时满足”

---

### 2️⃣ OR（逻辑或）

**作用：**  
当**任意一个条件为真（TRUE）时，返回 TRUE**，只有全部为假才返回 FALSE。

**语法：**
```sql
条件1 OR 条件2 OR 条件3 ...
```

**示例：**
```sql
-- 查询部门是 HR 或者 Finance 的员工
SELECT * FROM employees WHERE department = 'HR' OR department = 'Finance';

-- 查询状态为 1（激活）或者 2（待审核）的订单
SELECT * FROM orders WHERE status = 1 OR status = 2;
```

> ✅ 相当于“或者”、“满足任意一个即可”

---

### 3️⃣ NOT（逻辑非）

**作用：**  
对某个条件取反，即把 **TRUE 变成 FALSE，FALSE 变成 TRUE**。

**语法：**
```sql
NOT 条件
-- 或者使用 ! （较少用）
```

**示例：**
```sql
-- 查询状态不为 0（未激活）的用户
SELECT * FROM users WHERE NOT status = 0;
-- 或者
SELECT * FROM users WHERE status != 0;

-- 查询不是 NULL 的邮箱
SELECT * FROM users WHERE NOT email IS NULL;
-- 或更常用的写法：WHERE email IS NOT NULL
```

> ✅ 常用于排除某些情况，比如“非管理员”、“未删除”等

---

### 4️⃣ XOR（逻辑异或）【较少使用】

**作用：**  
当**两个条件中只有一个为 TRUE 时返回 TRUE**，其他情况（都为 TRUE 或都为 FALSE）返回 FALSE。

> ⚠️ 注意：`XOR` 不是所有数据库都支持，但 **MySQL 支持该逻辑运算符**

**语法：**
```sql
条件1 XOR 条件2
```

**示例：**
```sql
-- 查询年龄小于 18 或者 大于 60，但不可同时满足（只满足其中一个）
SELECT * FROM users WHERE age < 18 XOR age > 60;

-- 查询是 VIP 或者 是新用户，但不能同时是两者
SELECT * FROM customers WHERE is_vip = 1 XOR is_new = 1;
```

> ✅ 适用于“二选一”的业务逻辑，但实际开发中使用频率较低

---

## 四、逻辑运算符的优先级（从高到低）

在组合多个逻辑运算符时，它们的**优先级顺序如下**（类似数学中的优先级）：

1. `NOT`
2. `AND`
3. `XOR`
4. `OR`

> ✅ 为避免歧义，建议使用 **括号 `()`** 明确优先级！

### 示例：优先级演示

```sql
-- 以下表达式的逻辑是：
-- 先判断 status = 1，再判断 age > 18，最后用 AND 组合
SELECT * FROM users WHERE status = 1 AND age > 18;

-- 以下表达式由于没有括号，会先执行 AND 再执行 OR
-- 可能不符合你的预期！
SELECT * FROM users WHERE status = 1 OR status = 2 AND age > 18;

-- 更清晰的写法（推荐）：
SELECT * FROM users 
WHERE (status = 1 OR status = 2) AND age > 18;
```

---

## 五、逻辑运算符的常见使用场景

### ✅ 场景 1：组合多个筛选条件
```sql
-- 查询年龄在 18~30 之间，且状态为激活，且邮箱不为空的用户
SELECT * FROM users
WHERE age BETWEEN 18 AND 30
  AND status = 1
  AND email IS NOT NULL;
```

### ✅ 场景 2：多条件 OR（满足任一）
```sql
-- 查询部门是 IT、HR 或 Finance 的员工
SELECT * FROM employees
WHERE department = 'IT' OR department = 'HR' OR department = 'Finance';

-- 更清晰的写法（推荐）：
SELECT * FROM employees
WHERE department IN ('IT', 'HR', 'Finance');
```

### ✅ 场景 3：排除某些记录（NOT）
```sql
-- 查询不是管理员（is_admin = 0）的用户
SELECT * FROM users WHERE NOT is_admin = 1;
-- 或更直观的写法：
SELECT * FROM users WHERE is_admin != 1;
```

### ✅ 场景 4：复杂逻辑组合（AND + OR + NOT）
```sql
-- 查询年龄大于 18，或者（状态为 1 且是 VIP），但排除已删除用户
SELECT * FROM users
WHERE age > 18
   OR (status = 1 AND is_vip = 1)
   AND is_deleted = 0;
   
-- 更清晰的写法（推荐用括号明确优先级）：
SELECT * FROM users
WHERE (age > 18 OR (status = 1 AND is_vip = 1))
  AND is_deleted = 0;
```

---

## 六、逻辑运算符与布尔表达式

在 MySQL 中，**关系表达式的结果本身就是布尔值（TRUE / FALSE / NULL）**，逻辑运算符就是对这些布尔表达式进行组合。

| 表达式 | 结果类型 |
|--------|----------|
| `age > 18` | 布尔值（TRUE / FALSE / NULL） |
| `status = 1` | 布尔值 |
| `NOT status = 0` | 布尔值 |
| `age > 18 AND status = 1` | 布尔值 |

---

## ✅ 总结表：MySQL 常用逻辑运算符

| 运算符 | 名称     | 说明 | 示例 |
|--------|----------|------|------|
| `AND`  | 逻辑与   | 所有条件为 TRUE 时返回 TRUE | `A AND B` |
| `OR`   | 逻辑或   | 任意一个条件为 TRUE 时返回 TRUE | `A OR B` |
| `NOT`  | 逻辑非   | 对条件取反 | `NOT A` 或 `！A` |
| `XOR`  | 逻辑异或 | 只有一个条件为 TRUE 时返回 TRUE | `A XOR B` |

---

## 📌 下一步建议

你可以尝试以下练习来巩固逻辑运算符的使用：

1. ✅ 编写查询筛选 **年龄大于 18 且状态为激活** 的用户
2. ✅ 查询 **部门是 IT 或 HR** 的员工
3. ✅ 查询 **不是管理员且已激活** 的用户
4. ✅ 使用括号明确 **AND 和 OR 混合条件** 的优先级
5. ✅ 尝试使用 `XOR` 实现“二选一”的逻辑（如“是 VIP 或 新用户，但不能同时是”）

---

如你希望获取：
- ✅ 逻辑运算符的 **建表 + 数据 + 复杂查询示例**
- ✅ 如何与 **聚合函数 + GROUP BY + HAVING** 中的逻辑组合
- ✅ 或者 **逻辑运算符在 CASE WHEN 中的应用**

