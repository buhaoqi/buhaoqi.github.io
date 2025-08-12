---
noteId: "78166040481911f0a6929b02b627d898"
tags: []

---

**在 MySQL 中，使用 `CREATE DATABASE` 语句来创建一个新的数据库，它可以指定数据库名称，还可以选择性地设置字符集和排序规则，是数据库开发与管理的第一步。**

---
![创建数据库](../images/ebooks/110.jpeg) 
![创建数据库](../images/ebooks/111.jpeg) 
![创建数据库](../images/ebooks/112.jpeg) 
![创建数据库](../images/ebooks/113.jpeg) 
![创建数据库](../images/ebooks/114.jpeg) 
![创建数据库](../images/ebooks/115.jpeg) 
![创建数据库](../images/ebooks/116.jpeg) 
![创建数据库](../images/ebooks/117.jpeg) 
![创建数据库](../images/ebooks/118.jpeg) 
![创建数据库](../images/ebooks/119.jpeg) 

## 一、创建数据库基本语法

```sql
CREATE DATABASE 数据库名;
```
**数据库名命名规则**：

- 数据库名最长64个字符
- 可以包含字母、数字、下划线和$
- Linux系统区分大小写,Win和Mac不区分

**命名建议**：

1. 数据库名建议全部小写
2. 所有数据库名建议以“_db"结尾

### 示例：创建数据库

创建一个名为"student_db"的数据库

```sql
CREATE DATABASE student_db;
```

## 二、创建数据库完整语法

```sql
CREATE DATABASE [IF NOT EXISTS] database_name
[CHARACTER SET charset_name]
[COLLATE collation_name];
```
参数详解：

| 参数/关键字 | 是否必填 | 说明 |
|-------------|----------|------|
| **CREATE DATABASE** | ✅ 必填 | 创建数据库的关键字 |
| **数据库名** | ✅ 必填 | 你想要创建的数据库的名称，如 `school`, `company_db` 等 |
| **IF NOT EXISTS** | ⚠️ 可选 | 如果数据库已经存在，则 **不会报错**；如果不加，当数据库已存在时会报错 |
| **CHARACTER SET** | ⚠️ 可选 | 指定该数据库默认使用的字符集，如 `utf8mb4`（推荐）、`latin1` 等 |
| **COLLATE** | ⚠️ 可选 | 指定该数据库默认的排序规则，如 `utf8mb4_unicode_ci`（推荐） |

> 🎯 **字符集（Character Set）** 决定了数据库能存储哪些字符（比如中文、表情符号等）  
> **排序规则（Collation）** 决定了字符串比较和排序的方式（是否区分大小写、重音等）

---

### 示例：带条件判断的创建

```sql
CREATE DATABASE IF NOT EXISTS mydb;
```
只有当"mydb"不存在时才会创建，避免重复创建报错


### 示例：指定字符集和排序规则
```sql
CREATE DATABASE mydb 
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
```
创建一个使用UTF-8MB4字符集和Unicode排序规则的数据库（推荐用于多语言支持）

---

## 三、常见示例

### 示例1：最基础用法

```sql
-- 创建一个简单的数据库
CREATE DATABASE school;
```

> 🎯 这将创建一个名为 `school` 的数据库，使用 MySQL 的默认字符集和排序规则（通常是 `utf8mb4` / `utf8mb4_0900_ai_ci`，取决于你的 MySQL 版本）

---

### 示例2：使用 IF NOT EXISTS

```sql
-- 避免重复创建，推荐！
CREATE DATABASE IF NOT EXISTS school;
```

> 🎯 如果数据库 `school` **已经存在，则不会报错**，也不会重复创建；如果不存在，则新建。这是非常实用的写法，尤其在脚本中。

---

### 示例3：指定字符集

```sql
CREATE DATABASE school
CHARACTER SET utf8mb4;
```

> 🎯 指定该数据库默认使用 `utf8mb4` 字符集，支持完整的 Unicode，包括 **中文、Emoji 表情等**，是当前推荐的标准字符集。

---

### 示例4：指定字符集 + 排序规则

```sql
CREATE DATABASE school
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
```

> -  `utf8mb4`：支持所有 Unicode 字符（包括中文和 emoji）  
> - `utf8mb4_unicode_ci`：不区分大小写的 Unicode 排序规则，适合大多数场景  
> - 如果你希望 **区分大小写**，可以使用 `utf8mb4_bin`（按二进制比较）

---

## 四、常用字符集与排序规则

| 字符集 | 说明 | 是否推荐 |
|--------|------|----------|
| `latin1` | 西欧字符集，不支持中文 | ❌ 不推荐 |
| `utf8` | MySQL 中的“伪 utf8”，只支持最多 3 字节的字符（不支持某些 emoji） | ⚠️ 不推荐（已过时） |
| **`utf8mb4`** | 真正的 UTF-8 实现，支持所有 Unicode（包括中文和 emoji） | ✅ **强烈推荐** |
| `gbk` | 中文字符集，仅适合简体中文环境 | ⚠️ 特定场景可用，但不通用 |
| 排序规则 | 说明 |
|----------|------|
| `utf8mb4_unicode_ci` | 基于 Unicode 标准排序，不区分大小写，推荐大多数场景 |
| `utf8mb4_general_ci` | 性能略好，但排序规则较旧，不区分大小写 |
| `utf8mb4_bin` | 按二进制比较，区分大小写，适合精确匹配 |

---

## 五、**总结一句话：**

> **在 MySQL 中，使用 `CREATE DATABASE 数据库名;` 语句来创建一个新的数据库，推荐使用 `IF NOT EXISTS` 避免报错，并指定 `utf8mb4` 字符集与合适的排序规则，以确保支持完整的 Unicode 数据（如中文和 Emoji），这是数据库开发的第一步。**

---


