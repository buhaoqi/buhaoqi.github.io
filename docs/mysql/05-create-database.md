---
noteId: "78166040481911f0a6929b02b627d898"
tags: []

---

MySQL 创建数据库的基本语法非常简单，但包含一些有用的选项。以下是完整的语法结构和详细解释：

## 创建数据库的语法

基本语法

```sql
CREATE DATABASE 数据库名;
```

详细语法

```sql
CREATE DATABASE [IF NOT EXISTS] database_name
[CHARACTER SET charset_name]
[COLLATE collation_name];
```

## 语法说明

### 1. 必选部分
- `CREATE DATABASE`：创建数据库的关键字
- `database_name`：要创建的数据库名称（需遵循MySQL命名规则）

### 2. 可选部分
- `IF NOT EXISTS`：条件判断，仅在数据库不存在时创建（避免报错）
- `CHARACTER SET`：指定数据库字符集（如utf8mb4）
- `COLLATE`：指定排序规则（如utf8mb4_general_ci）

## 实际应用示例

### 示例1：最简单的创建方式
```sql
CREATE DATABASE mydb;
```
这将创建一个名为"mydb"的数据库，使用MySQL默认字符集和排序规则

### 示例2：带条件判断的创建
```sql
CREATE DATABASE IF NOT EXISTS mydb;
```
只有当"mydb"不存在时才会创建，避免重复创建报错

### 示例3：指定字符集和排序规则
```sql
CREATE DATABASE mydb 
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
```
创建一个使用UTF-8MB4字符集和Unicode排序规则的数据库（推荐用于多语言支持）

## 注意事项

1. **权限要求**：执行CREATE DATABASE需要CREATE权限
2. **命名规则**：
   - 数据库名最长64个字符
   - 可以包含字母、数字、下划线和$
   - 区分大小写（取决于操作系统）
3. **字符集选择**：
   - utf8mb4（推荐）：完整支持4字节Unicode字符（如emoji）
   - utf8：只支持3字节Unicode字符
4. **查看已有数据库**：创建前可先用`SHOW DATABASES;`查看

## 创建后操作

创建数据库后，通常需要选择使用它：
```sql
USE mydb;
```

或者查看数据库的创建语句（包含字符集等信息）：
```sql
SHOW CREATE DATABASE mydb;
```

## 完整工作流程示例

```sql
-- 1. 查看现有数据库
SHOW DATABASES;

-- 2. 创建新数据库（带完整选项）
CREATE DATABASE IF NOT EXISTS school_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- 3. 使用新创建的数据库
USE school_db;

-- 4. 验证数据库信息
SHOW CREATE DATABASE school_db;
```

希望这个详细解释对您有所帮助！如需了解如何在特定编程语言中创建MySQL数据库，可以进一步询问。