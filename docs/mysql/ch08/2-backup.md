---
title: 数据库备份
description: 介绍备份的类型（完全/增量/差异、逻辑/物理备份）、备份策略的选择，以及使用 mysqldump 进行逻辑备份的具体操作。
keywords: [MySQL, 备份类型, 完全备份, 增量备份, 差异备份, 逻辑备份, 物理备份, mysqldump, 备份策略, 对口升学]
sidebar_label: 8.2 数据库备份
sidebar_position: 2
slug: /mysql/ch08/2-backup
tags: [MySQL, 第八章, 数据库备份与恢复, 对口升学]
---

## 知识点

### 8.2.1 备份类型

#### （1）按备份范围分类

| 类型 | 说明 | 特点 |
| --- | --- | --- |
| **完全备份** | 备份**全部数据** | 恢复最快、最简单；但备份时间长、占用空间大 |
| **增量备份** | 只备份**自上次备份（任意类型）以来变化的数据** | 备份快、空间小；恢复时需要依次应用多个备份，最慢 |
| **差异备份** | 只备份**自上次完全备份以来变化的数据** | 备份速度和空间介于两者之间；恢复只需完全备份 + 最新差异备份 |

> 三者对比是高频考点：增量备份"每次备份从上一次备份算起"，差异备份"每次从上一次完全备份算起"。

#### （2）按备份方式分类

| 类型 | 说明 | 常用工具 |
| --- | --- | --- |
| **逻辑备份** | 导出数据库的**逻辑结构（SQL 语句）** | `mysqldump`、`mysqlpump` |
| **物理备份** | 直接复制数据库的**物理数据文件** | `mysqlbackup`、Percona XtraBackup、复制 data 目录 |

- 逻辑备份：生成 `.sql` 文件，可读性好、跨平台、可选择性备份，但备份恢复速度较慢；
- 物理备份：速度快、适合大型数据库，但可移植性差、版本兼容性要求高。

### 8.2.2 备份策略

1. **备份周期**：根据数据重要性和变化频率确定，如每天完全备份 + 每小时增量备份；
2. **备份方式**：完全备份 + 增量/差异备份结合，逻辑备份与物理备份结合；
3. **备份文件管理**：
   - 按日期命名（如 `school_20261128.sql`），便于识别；
   - 异地存储，防止本地灾难；
   - 设置保留期限，定期清理过期备份；
   - 记录备份日志；
4. **备份策略的选择**：综合考虑**数据重要程度、变化频率、可接受的恢复时间（RTO）、可接受的数据损失量（RPO）、存储空间和备份窗口**。

### 8.2.3 MySQL 备份操作：`mysqldump`

`mysqldump` 是 MySQL 自带的**逻辑备份工具**，生成包含 `CREATE`、`INSERT` 等语句的 `.sql` 文件。

**基本语法**：

```bash
mysqldump -h 主机名 -u 用户名 -p 数据库名 [表名] > 备份文件.sql
```

**（1）备份单个数据库**：

```bash
mysqldump -u root -p school > school_backup.sql
```

**（2）备份指定数据表**：

```bash
mysqldump -u root -p school students > students_backup.sql
mysqldump -u root -p school students teachers > multi_tables.sql
```

**（3）备份多个数据库**：

```bash
mysqldump -u root -p --databases school library > dbs_backup.sql
```

**（4）备份所有数据库**：

```bash
mysqldump -u root -p --all-databases > all_backup.sql
```

**（5）仅备份表结构 / 仅备份数据**：

```bash
mysqldump -u root -p -d school > school_schema.sql   # -d：只备份结构
mysqldump -u root -p -t school > school_data.sql     # -t：只备份数据
```

**常用参数**：

| 参数 | 说明 |
| --- | --- |
| `-u` / `-h` / `-p` / `-P` | 用户名 / 主机 / 密码 / 端口 |
| `--databases` | 备份多个数据库（含建库语句） |
| `--all-databases` | 备份所有数据库 |
| `-d` / `--no-data` | 只备份结构 |
| `-t` / `--no-create-info` | 只备份数据 |
| `--single-transaction` | InnoDB 一致性备份（不锁表） |
| `--routines` | 备份存储过程和函数 |
| `--events` | 备份事件 |

**备份文件管理**：使用日期命名、压缩存储（`gzip`）、异地保存、定期验证。

## 考点提示

- 高频考点：完全备份、增量备份、差异备份的概念与区别；`mysqldump` 的语法。
- 易错点：增量备份基于**上一次备份**，差异备份基于**上一次完全备份**——常考判断题。
- `mysqldump` 属于**逻辑备份**；`--databases` 备份多个库，`--all-databases` 备份所有库。
