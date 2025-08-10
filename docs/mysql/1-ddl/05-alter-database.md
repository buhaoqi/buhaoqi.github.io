---
noteId: "3d661d50481911f0a6929b02b627d898"
tags: []

---

抱歉！MySQL 没有提供修改数据库名的语句。如果你坚持要修改数据库名，可以尝试以下两种方法：

## 方法一：重新创建新数据库

创建新数据库并迁移数据，是最安全可靠的方法：

```sql
-- 1. 创建新数据库
CREATE DATABASE new_database_name;

-- 2. 导出原数据库结构和数据
-- 使用 mysqldump 命令行工具（不是在 MySQL 客户端中执行）
mysqldump -u username -p old_database_name > dump.sql

-- 3. 导入到新数据库
mysql -u username -p new_database_name < dump.sql

-- 4. 验证数据后，删除旧数据库（可选）
DROP DATABASE old_database_name;
```

## 方法二：重命名所有表

适用于小型数据库。

```sql
-- 1. 创建新数据库
CREATE DATABASE new_database_name;

-- 2. 重命名每个表到新数据库
RENAME TABLE old_database_name.table1 TO new_database_name.table1,
             old_database_name.table2 TO new_database_name.table2,
             ...;

-- 3. 删除旧数据库（可选）
DROP DATABASE old_database_name;
```


## 注意事项

1. **权限问题**：确保执行操作的用户有足够的权限
2. **依赖关系**：检查是否有存储过程、视图、触发器等依赖于原数据库名
3. **应用程序配置**：修改后需要更新应用程序中的数据库连接配置
4. **备份**：操作前务必备份重要数据

## 为什么不支持重命名数据库？

MySQL 不提供直接重命名数据库的命令，主要是因为：

- 数据库名被许多内部系统表引用
- 可能破坏存储过程、视图等对象
- 确保数据完整性需要复杂的操作

对于生产环境，推荐使用第一种方法（导出/导入），虽然耗时但最安全可靠。