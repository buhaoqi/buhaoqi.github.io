---
noteId: "4b83f09032db11f0ab03e5a28898bc4c"
tags: []

---
以下是 MySQL 定义数据表的完整语法和详细说明，适合初学者入门：

---

## **MySQL 定义表的基本语法**
```sql
CREATE TABLE [IF NOT EXISTS] 表名 (
    -- 列定义
    列1 数据类型 [列约束],
    列2 数据类型 [列约束],
    
    -- 表级约束
    [PRIMARY KEY (列名)],
    [FOREIGN KEY (外键列) REFERENCES 父表(父表列)],
    [UNIQUE (列名)],
    [CHECK (条件表达式)]
)
[ENGINE=存储引擎]
[DEFAULT CHARSET=字符集]
[COMMENT='表注释']
[其他表选项];
```

---
## CREATE TABLE 

## [IF NOT EXISTS]

用途

在 MySQL 中，IF NOT EXISTS 是用于创建表时避免重复创建的关键字。

作用

- 存在性检查：当表已存在时，跳过创建而不是报错。
- 防冲突：避免因重复执行建表语句导致程序中断。
- 脚本健壮性：确保 SQL 脚本可重复执行而无需手动检查表是否存在。

1. 不使用 IF NOT EXISTS

```sql
CREATE TABLE IF NOT EXISTS students (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);
```
如果表已存在：报错 ERROR 1050 (42S01): Table 'students' already exists。

2. 使用 IF NOT EXISTS
```sql
CREATE TABLE IF NOT EXISTS students (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);
```
如果表已存在：显示警告 Query OK, 0 rows affected, 1 warning，但不会报错。

执行后可通过 SHOW WARNINGS 查看提示信息：

```sql
SHOW WARNINGS;
```

输出
```sql
+-------+------+----------------------------------------------+
| Level | Code | Message                                      |
+-------+------+----------------------------------------------+
| Note  | 1050 | Table 'students' already exists              |
+-------+------+----------------------------------------------+
```
## 表名

## 列定义

**示例**：
```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,  -- 主键，自增
    username VARCHAR(50) NOT NULL,      -- 非空
    email VARCHAR(100) UNIQUE,          -- 唯一值
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- 默认值
);
```

### 列名

用途：自定义的字段名称（如 `id`, `name`）。

### 数据类型

用途：指定列存储的数据类型（如 INT, VARCHAR, DATE）。

常用数据类型**
| **类型**        | **用途**                            | **示例**              |
|----------------|-----------------------------------|----------------------|
| `INT`          | 整数（如用户ID）                    | `age INT`            |
| `VARCHAR(n)`   | 可变长度字符串（如用户名）           | `username VARCHAR(50)` |
| `DECIMAL(m,n)` | 精确小数（如金额）                   | `price DECIMAL(10,2)` |
| `DATE`         | 日期（如生日）                      | `birthday DATE`      |
| `TIMESTAMP`    | 时间戳（如创建时间）                 | `created_at TIMESTAMP` |
| `TEXT`         | 长文本（如文章内容）                 | `content TEXT`       |


### 列约束

用途：可选，限制列的取值（如 `NOT NULL`, `AUTO_INCREMENT`）。

| **约束**           | **说明**                          | **示例**                     |
|--------------------|----------------------------------|------------------------------|
| `PRIMARY KEY`      | 主键（唯一标识行）                 | `id INT PRIMARY KEY`         |
| `AUTO_INCREMENT`   | 自增（通常用于主键）               | `id INT AUTO_INCREMENT`      |
| `NOT NULL`         | 禁止为空                          | `username VARCHAR(50) NOT NULL` |
| `UNIQUE`           | 值唯一                            | `email VARCHAR(100) UNIQUE`  |
| `DEFAULT`          | 默认值                            | `status INT DEFAULT 1`       |
| `FOREIGN KEY`      | 外键（关联其他表）                 | `FOREIGN KEY (user_id) REFERENCES users(id)` |


- NOT NULL：禁止空值。
- DEFAULT 默认值：设置默认值。
- AUTO_INCREMENT：自增（仅限整数类型）。
- UNIQUE：唯一值约束。
- COMMENT '注释'：列注释。

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    age TINYINT UNSIGNED DEFAULT 18,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
## 表约束

### PRIMARY KEY

主键约束

```sql
PRIMARY KEY (列1, 列2)（支持复合主键）。
```

### FOREIGN KEY

外键约束：

```sql
FOREIGN KEY (外键列) 
    REFERENCES 父表(父表列)
    [ON DELETE 行为] 
    [ON UPDATE 行为]
```
### 行为选项

- CASCADE
- SET NULL
- RESTRICT（默认）

### 唯一约束：
```sql
UNIQUE (列1, 列2)。
```
### 检查约束：

```sql
CHECK (条件)（MySQL 8.0.16+ 支持强制检查）。

```
## 表选项

| **选项**             | **说明**                          | **常用值**                   |
|----------------------|----------------------------------|------------------------------|
| `ENGINE`             | 存储引擎                          | `InnoDB`（推荐）, `MyISAM`   |
| `DEFAULT CHARSET`    | 默认字符集                        | `utf8mb4`（支持中文和Emoji） |
| `COMMENT`            | 表注释                            | `COMMENT='用户表'`           |

### [ENGINE=存储引擎]

- ENGINE=InnoDB（默认）
- ENGINE=MyISAM

### [DEFAULT CHARSET=字符集] 

建议显式指定，避免依赖服务器默认配置：

```SQL
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```


### [COMMENT='表注释'];

```sql
COMMENT='用户表'。
```
### AUTO_INCREMENT
```sql
AUTO_INCREMENT=100（设置自增起始值）
```

### ROW_FORMAT
```sql
ROW_FORMAT=COMPRESSED（行格式）。
```
### 示例

```sql
CREATE TABLE logs (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT
) ENGINE=InnoDB 
  DEFAULT CHARSET=utf8mb4 
  COMMENT='系统日志表'
  AUTO_INCREMENT=1000;
```
---

## 示例

**示例**：
```sql
CREATE TABLE orders (
    order_id INT,
    user_id INT,
    product_id INT,
    -- 表级约束
    PRIMARY KEY (order_id, user_id),  -- 复合主键
    FOREIGN KEY (user_id) REFERENCES users(id),
    UNIQUE (order_id, product_id)
);
```

**完整示例**：
```sql
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='商品表';
```

---

**实际案例：用户表 + 订单表**
```sql
-- 用户表
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 订单表（关联用户表）
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    order_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB;
```

---

## **注意事项**
1. **主键必须唯一且非空**：每个表只能有一个主键。
2. **外键要求**：父表的被引用列必须是主键或唯一索引。
3. **存储引擎选择**：推荐使用 `InnoDB`（支持事务和外键）。
4. **字符集推荐**：使用 `utf8mb4`（兼容所有Unicode字符，包括Emoji）。
5. **命名规范**：表名和列名建议用英文小写和下划线（如 `user_profile`）。

---

## **常见错误**
- **忘记逗号**：列定义之间必须用逗号分隔。
- **数据类型错误**：如用 `VARCHAR` 存数字。
- **重复主键**：插入重复的主键值会报错。
- **外键约束失败**：插入不存在的父表数据会报错。
