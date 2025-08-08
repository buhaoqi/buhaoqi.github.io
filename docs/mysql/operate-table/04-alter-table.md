---
noteId: "b97e8360481311f0a6929b02b627d898"
tags: []

---

## 改：数据结构（ALTER）

```sql
-- 修改表名
ALTER TABLE 旧表名 RENAME TO 新表名;

-- 修改列名
ALTER TABLE 表名 RENAME COLUMN 旧列名 TO 新表名; 

-- 添加列
ALTER TABLE 表名
  ADD COLUMN 列1 数据类型 [约束条件] [FIRST|AFTER 已存在列],
  ADD COLUMN 列2 数据类型 [约束条件] [FIRST|AFTER 已存在列];

-- 添加唯一约束
ALTER TABLE 表名 ADD CONSTRAINT 约束名 UNIQUE (列名);
ALTER TABLE users ADD CONSTRAINT unique_email UNIQUE (email);  

-- 删除列
ALTER TABLE 表名 
  DROP COLUMN 列1, 
  DROP COLUMN 列2;
  
-- 删除主键约束
ALTER TABLE 表名 DROP PRIMARY KEY;

-- 删除外键约束
ALTER TABLE 表名 DROP FOREIGN KEY 外键名;

-- 删除唯一约束
ALTER TABLE 表名 DROP INDEX 索引名;
ALTER TABLE users DROP INDEX unique_email;

-- 调整列序
ALTER TABLE 表名
	MODIFY COLUMN 列1 数据类型 AFTER 目标列,
	MODIFY COLUMN 列2 数据类型 AFTER 目标列;

-- 调整列到首位
ALTER TABLE 表名
	MODIFY COLUMN 列1 数据类型 FIRST;

-- 修改列定义（表名除外）
ALTER TABLE 表名 MODIFY COLUMN 列名 新数据类型 [约束条件];

-- 修改列定义
ALTER TABLE 表名 CHANGE COLUMN 旧列名 新列名 新数据类型 [约束条件];

-- 添加非空约束
ALTER TABLE 表名 MODIFY COLUMN 列名 数据类型 NOT NULL;
ALTER TABLE users MODIFY email VARCHAR(255) NOT NULL;

-- 将非空约束改为允许空值
ALTER TABLE 表名 MODIFY COLUMN 列名 数据类型 NULL;
ALTER TABLE users MODIFY email VARCHAR(255) NULL;

-- 删除非空约束
ALTER TABLE 表名 MODIFY COLUMN 列名 数据类型 NULL;
ALTER TABLE users MODIFY email VARCHAR(255) NULL; 

-- 添加自增主键约束
ALTER TABLE 表名 
MODIFY 列名 数据类型 AUTO_INCREMENT PRIMARY KEY;
ALTER TABLE users 
MODIFY id INT AUTO_INCREMENT PRIMARY KEY;

-- 修改默认值
ALTER TABLE 表名 
MODIFY 列名 数据类型 DEFAULT 默认值;
-- 示例
ALTER TABLE products 
MODIFY price DECIMAL(10,2) DEFAULT 0.00;

-- 添加或修改默认值
ALTER TABLE 表 
ALTER COLUMN 列名 SET DEFAULT 默认值;
-- 示例
ALTER TABLE orders 
ALTER COLUMN status SET DEFAULT 'active';

-- 删除默认值
ALTER TABLE 表名 
ALTER COLUMN 列名 DROP DEFAULT;
-- 示例
ALTER TABLE users 
ALTER COLUMN phone DROP DEFAULT;
```



```sql
-- 修改表名
ALTER TABLE 旧表名 RENAME TO 新表名;

-- 修改列名
ALTER TABLE 表名 RENAME COLUMN 旧列名 TO 新表名; 

-- 添加列
ALTER TABLE 表名
  ADD COLUMN 列1 数据类型 [约束条件] [FIRST|AFTER 已存在列],
  ADD COLUMN 列2 数据类型 [约束条件] [FIRST|AFTER 已存在列];

-- 添加唯一约束
ALTER TABLE 表名 ADD CONSTRAINT 约束名 UNIQUE (列名);
ALTER TABLE users ADD CONSTRAINT unique_email UNIQUE (email);  

-- 删除列
ALTER TABLE 表名 
  DROP COLUMN 列1, 
  DROP COLUMN 列2;
  
-- 删除主键约束
ALTER TABLE 表名 DROP PRIMARY KEY;

-- 删除外键约束
ALTER TABLE 表名 DROP FOREIGN KEY 外键名;

-- 删除唯一约束
ALTER TABLE 表名 DROP INDEX 索引名;
ALTER TABLE users DROP INDEX unique_email;

-- 调整列序
ALTER TABLE 表名
	MODIFY COLUMN 列1 数据类型 AFTER 目标列,
	MODIFY COLUMN 列2 数据类型 AFTER 目标列;

-- 调整列到首位
ALTER TABLE 表名
	MODIFY COLUMN 列1 数据类型 FIRST;

-- 修改列定义（表名除外）
ALTER TABLE 表名 MODIFY COLUMN 列名 新数据类型 [约束条件];

-- 修改列定义
ALTER TABLE 表名 CHANGE COLUMN 旧列名 新列名 新数据类型 [约束条件];

-- 添加非空约束
ALTER TABLE 表名 MODIFY COLUMN 列名 数据类型 NOT NULL;
ALTER TABLE users MODIFY email VARCHAR(255) NOT NULL;

-- 将非空约束改为允许空值
ALTER TABLE 表名 MODIFY COLUMN 列名 数据类型 NULL;
ALTER TABLE users MODIFY email VARCHAR(255) NULL;

-- 删除非空约束
ALTER TABLE 表名 MODIFY COLUMN 列名 数据类型 NULL;
ALTER TABLE users MODIFY email VARCHAR(255) NULL; 

-- 添加自增主键约束
ALTER TABLE 表名 
MODIFY 列名 数据类型 AUTO_INCREMENT PRIMARY KEY;
ALTER TABLE users 
MODIFY id INT AUTO_INCREMENT PRIMARY KEY;

-- 修改默认值
ALTER TABLE 表名 
MODIFY 列名 数据类型 DEFAULT 默认值;
-- 示例
ALTER TABLE products 
MODIFY price DECIMAL(10,2) DEFAULT 0.00;

-- 添加或修改默认值
ALTER TABLE 表 
ALTER COLUMN 列名 SET DEFAULT 默认值;
-- 示例
ALTER TABLE orders 
ALTER COLUMN status SET DEFAULT 'active';

-- 删除默认值
ALTER TABLE 表名 
ALTER COLUMN 列名 DROP DEFAULT;
-- 示例
ALTER TABLE users 
ALTER COLUMN phone DROP DEFAULT;

```


## 4.ALTER TABLE

ALTER TABLE是修改表结构的**语句（Statement）**。它是修改表结构的所有操作的核心指令。

语法

```sql
ALTER TABLE 表名 ADD COLUMN 列名 数据类型 [约束条件] [位置参数];
ALTER TABLE 表名 ADD COLUMN 列名 数据类型 [约束条件] [AFTER 目标列 | FIRST];
ALTER TABLE 表名 DROP COLUMN 列名;
ALTER TABLE 表名 MODIFY COLUMN 列名 数据类型 [位置参数]
```

- ALTER TABLE 是**主句**，是修改表结构的所有操作的核心指令。
- ADD COLUMN是**子句**，指定操作是添加列。
- DROP COLUMN是**子句**，指定操作是删除列。
- MODIFY COLUMN是**子句**，指定操作是修改列定义（表名除外）。

## 5.添加列到指定位置

在添加列的同时，可以通过AFTER和FIRST关键词指定新列的位置。AFTER和FIRST不属于约束条件

语法

```sql
ALTER TABLE student ADD COLUMN 列定义 [位置];
```

- `AFTER  目标列`：把新列添加到目标列的后面

- `FIRST`：把新列添加到首位 

## 6.调整列序

语法

```sql
ALTER TABLE student MODIFY COLUMN 列名 数据类型 AFTER 目标列名;
```

语法

```sql
ALTER TABLE student MODIFY COLUMN 列名 数据类型 FIRST;
```

## 练习1：修改学生表 - 增删列

要求：先为student表添加四个新列chinese、math、english、computer，然后再把他们删掉

步骤1：添加一个新列chinese

```sql
ALTER TABLE student
  ADD COLUMN 列定义;
```

步骤2: 添加三个新列 math、english、computer

```sql
ALTER TABLE student
  ADD COLUMN 列定义,
  ADD COLUMN 列定义,
  ADD COLUMN 列定义;
```

步骤3: 删除四个新列：chinese、math、english、computer

```sql
ALTER TABLE student
  DROP COLUMN 列名,
  DROP COLUMN 列名,
  DROP COLUMN 列名,
  DROP COLUMN 列名;
```

## 练习2：修改学生表 - 指定列序

要求：在student表中添加四个新列chinese、math、english、computer，注意新列的位置

1: 把chinese列添加到id前

2: 把math列添加到id后

3: 把english列添加到age前

4: 把computer添加到age后

## 练习3：修改学生表 - 列排序

要求：在student表中

把chinese math english computer 改为 computer  english math chinese


# ✅ 10 道 MySQL ALTER TABLE 语句练习题

`ALTER TABLE` 是 MySQL 中用于 **修改已有表结构** 的 DDL（数据定义语言）语句，使用频率高，功能强大。

它可以用来：

- 添加列（字段）
- 删除列
- 修改列的数据类型或属性
- 添加约束（如主键、唯一、外键等）
- 删除约束
- 重命名表
- 重命名列
- 修改表的存储引擎等

---

## 🎯 练习目标

通过以下 **10 道练习题**，帮助你熟练掌握 `ALTER TABLE` 的常见用法，包括：

| 功能 | 说明 |
|------|------|
| 1~3 | **添加字段（列）** |
| 4~5 | **修改字段（列）**：数据类型、名称、约束等 |
| 6~7 | **删除字段（列）** |
| 8 | **添加约束（如主键、唯一键）** |
| 9 | **删除约束（如主键）** |
| 10 | **重命名表或字段** |

---

## 🧩 练习题（附表结构）

> 🎲 **基础表：`employees`**

假设你已经创建了如下表（你可以先运行以下 SQL 创建表，再做练习）：

```sql
CREATE TABLE employees (
    id INT,
    name VARCHAR(50),
    age INT
);
```

表中目前已有的字段为：`id`, `name`, `age`

---

## ✅ 练习题

---

### **1. 添加一个新字段：`salary`，类型为 DECIMAL(10,2)**

> 目的：为员工表添加工资字段

🔧 答案：

```sql
ALTER TABLE employees ADD salary DECIMAL(10,2);
```

---

### **2. 添加一个字段：`department`，类型为 VARCHAR(100)，放在 `age` 字段后面**

> 目的：添加部门字段，并控制字段顺序

🔧 答案：

```sql
ALTER TABLE employees ADD department VARCHAR(100) AFTER age;
```

> ⚠️ MySQL 支持使用 `AFTER 列名` 或 `FIRST` 控制字段顺序，但不是所有数据库都支持。

---

### **3. 添加一个字段：`hire_date`，类型为 DATE，默认值为 '2023-01-01'**

> 目的：添加入职日期字段，并设置默认值

🔧 答案：

```sql
ALTER TABLE employees ADD hire_date DATE DEFAULT '2023-01-01';
```

---

### **4. 将字段 `name` 的类型修改为 VARCHAR(100)**

> 目的：扩大 name 字段的存储空间

🔧 答案：

```sql
ALTER TABLE employees MODIFY name VARCHAR(100);
```

---

### **5. 将字段 `age` 的名称修改为 `employee_age`，类型不变**

> 目的：重命名字段

🔧 答案：

```sql
ALTER TABLE employees CHANGE age employee_age INT;
```

> ⚠️ 注意：`CHANGE` 语法需要写 **旧字段名和新字段名**，还要重新写字段类型！

如果你只想改名而 **不改变类型**，也必须把原类型写上。

---

### **6. 删除字段：`hire_date`**

> 目的：移除不需要的字段

🔧 答案：

```sql
ALTER TABLE employees DROP COLUMN hire_date;
```

---

### **7. 删除字段：`department`**

> 目的：删除部门字段

🔧 答案：

```sql
ALTER TABLE employees DROP COLUMN department;
```

---

### **8. 为字段 `id` 添加主键约束**

> 目的：将 id 设为主键，保证唯一标识

🔧 答案：

```sql
ALTER TABLE employees ADD PRIMARY KEY (id);
```

---

### **9. 删除表 `employees` 的主键约束**

> 目的：移除主键（比如重新设计表结构前）

🔧 答案：

```sql
ALTER TABLE employees DROP PRIMARY KEY;
```

> ⚠️ 注意：如果主键字段有 `AUTO_INCREMENT`，可能需要先去掉该属性。

---

### **10. 将表名 `employees` 修改为 `staff_info`**

> 目的：重命名表

🔧 答案：

```sql
ALTER TABLE employees RENAME TO staff_info;
```

或者（MySQL 也支持这种写法）：

```sql
RENAME TABLE employees TO staff_info;
```

---

## 📝 拓展练习（可选，挑战自己）

如果你已经完成了以上 10 题，可以尝试以下 **进阶练习**：

1. **为 `id` 字段添加自增属性：`AUTO_INCREMENT`**
2. **为 `email` 字段添加唯一约束：`UNIQUE`**
3. **添加一个字段 `manager_id` INT，并设置为外键（需有对应主表）**
4. **修改表引擎为 InnoDB：`ENGINE=InnoDB`**
5. **添加注释到某个字段，如：`COMMENT '员工年龄'`**

---

## ✅ 总结：ALTER TABLE 常用操作速查

| 功能 | 语法示例 |
|------|----------|
| 添加列 | `ALTER TABLE 表名 ADD 列名 类型 [约束] [AFTER 列名]` |
| 修改列类型/属性 | `ALTER TABLE 表名 MODIFY 列名 新类型 [约束]` |
| 修改列名称和类型 | `ALTER TABLE 表名 CHANGE 旧列名 新列名 新类型 [约束]` |
| 删除列 | `ALTER TABLE 表名 DROP COLUMN 列名` |
| 添加主键 | `ALTER TABLE 表名 ADD PRIMARY KEY (列名)` |
| 删除主键 | `ALTER TABLE 表名 DROP PRIMARY KEY` |
| 重命名表 | `ALTER TABLE 旧表名 RENAME TO 新表名` 或 `RENAME TABLE 旧表名 TO 新表名` |

---

🙋 **如果你想查看每道题的表结构变化，或者想要我提供每个练习的“执行前/后表结构对比”，或者想生成对应的 SQL 文件 / 练习环境，欢迎继续提问！**

😊 **掌握 ALTER TABLE，你就能灵活地设计、优化和迭代数据库结构！**