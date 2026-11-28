---
title: 数据库恢复
description: 介绍数据库恢复的基本过程，以及使用命令行、SQL 文件和 mysql 命令恢复数据库的方法与综合应用。
keywords: [MySQL, 数据库恢复, SOURCE, mysql命令, 重定向, 数据还原, mysqldump, 对口升学]
sidebar_label: 8.3 数据库恢复
sidebar_position: 3
slug: /mysql/ch08/3-restore
tags: [MySQL, 第八章, 数据库备份与恢复, 对口升学]
---

## 知识点

### 1. 数据库恢复的基本过程

1. **确认故障类型与恢复目标**：确定要恢复的时间点和范围；
2. **选择合适的备份文件**：完全备份 + 相应的增量/差异备份；
3. **准备恢复环境**：必要时先创建空数据库，停止相关应用写入；
4. **执行恢复操作**：导入备份文件；
5. **应用增量/差异备份**（如有）：按备份时间顺序依次恢复；
6. **验证恢复结果**：检查数据完整性、记录数、关键业务数据；
7. **记录恢复过程**：总结故障原因与处理过程，完善备份策略。

> ⚠️ 恢复前建议先对当前（损坏的）数据库再做一次备份，避免二次破坏。

### 2. 使用命令行恢复数据库

**（1）使用输入重定向恢复**：

```bash
# 恢复单个数据库（备份文件含建库语句时）
mysql -u root -p < school_backup.sql

# 恢复到指定数据库（备份文件不含建库语句时）
mysql -u root -p school < school_backup.sql
```

**（2）使用 `mysql` 命令指定数据库恢复**：

```bash
mysql -u root -p school < school_backup.sql
```

**（3）备份文件含建库语句时的处理**：

```bash
# 使用 --databases 或 --all-databases 备份的文件自带 CREATE DATABASE
mysql -u root -p < all_backup.sql
```

### 3. 使用 SQL 文件恢复数据（在 MySQL 客户端中）

```sql
-- 先选择或创建数据库
CREATE DATABASE IF NOT EXISTS school;
USE school;

-- 执行 SQL 脚本
SOURCE /path/to/school_backup.sql;
```

> 注意：`SOURCE` 是 **MySQL 客户端命令**，路径使用正斜杠 `/`，Windows 下如 `SOURCE C:/backup/school.sql;`。

### 4. MySQL 数据库恢复操作示例

**完整恢复流程示例**：

```bash
# 1. 查看备份文件内容（确认可用性）
head -20 school_backup.sql

# 2. 创建新数据库（如需）
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS school DEFAULT CHARSET utf8mb4;"

# 3. 执行恢复
mysql -u root -p school < school_backup.sql

# 4. 验证
mysql -u root -p -e "USE school; SHOW TABLES; SELECT COUNT(*) FROM students;"
```

**基于二进制日志（binlog）的时间点恢复**（了解）：

```bash
mysqlbinlog --stop-datetime="2026-11-28 13:00:00" binlog.000001 | mysql -u root -p
```

### 5. 备份与恢复的综合应用

**场景**：某数据库每天 0 点做完全备份，此后每小时做增量备份。某日 10:30 误删数据，需恢复。

**恢复步骤**：

1. 停止应用写入，防止数据继续变化；
2. 恢复当天 0 点的**完全备份**；
3. 按时间顺序依次恢复 1:00、2:00、…、10:00 的**增量备份**；
4. 利用 binlog 恢复到 10:30 故障前的状态（如启用）；
5. 验证数据完整性后恢复应用运行。

> 综合题常考查恢复顺序：**先完全备份，再按时间顺序应用增量/差异备份**。

## 考点提示

- 高频考点：恢复命令 `mysql -u root -p 数据库名 < 备份文件.sql`；客户端命令 `SOURCE 文件路径;`。
- 易错点：`SOURCE` 在 MySQL 客户端内执行，`<` 重定向在操作系统命令行执行，两者使用环境不同。
- 综合应用题重点考查恢复顺序：完全备份 → 增量/差异备份（按时间顺序）→ binlog（可选）。
