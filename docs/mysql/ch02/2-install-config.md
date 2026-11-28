---
title: MySQL 的安装与配置
description: 介绍 MySQL 服务器的安装方式与基本配置方法，包括安装包类型、配置文件主要参数及初始化设置。
keywords: [MySQL, 安装, 配置, my.ini, my.cnf, 字符集, 端口, 初始化, 对口升学]
sidebar_label: 2.2 MySQL的安装与配置
sidebar_position: 2
slug: /mysql/ch02/2-install-config
tags: [MySQL, 第二章, MySQL数据库管理基础, 对口升学]
---

## 知识点

### 1. MySQL 服务器的安装

常见安装方式：

| 方式 | 说明 | 适用平台 |
| --- | --- | --- |
| **安装包（MSI / DMG / EXE）** | 图形化向导安装，适合初学者 | Windows、macOS |
| **压缩包（ZIP / TAR）** | 解压后手动初始化配置 | Windows、Linux、macOS |
| **包管理器** | `apt` / `yum` / `brew` 等命令安装 | Linux、macOS |
| **Docker 镜像** | 容器化部署，快速启动 | 跨平台 |

**安装基本流程**：

1. 下载对应操作系统的安装包；
2. 选择安装类型（典型 / 自定义 / 完整）；
3. 设置安装路径；
4. 配置服务器类型与端口（默认 **3306**）；
5. 设置 root 用户密码；
6. 配置环境变量（将 `bin` 目录加入 `PATH`），便于在命令行任意位置使用 `mysql` 命令；
7. 完成安装并验证：`mysql --version` 或 `mysql -u root -p`。

### 2. MySQL 服务器的基本配置

MySQL 通过配置文件读取启动参数：

- Windows：`my.ini`
- Linux / macOS：`my.cnf`（常位于 `/etc/my.cnf` 或 `/etc/mysql/my.cnf`）

常见配置项：

| 配置项 | 说明 | 示例 |
| --- | --- | --- |
| `port` | 服务器监听端口 | `port=3306` |
| `basedir` | MySQL 安装目录 | `basedir=C:/mysql` |
| `datadir` | 数据文件存放目录 | `datadir=C:/mysql/data` |
| `character-set-server` | 服务器默认字符集 | `utf8mb4` |
| `collation-server` | 默认排序规则 | `utf8mb4_general_ci` |
| `default-storage-engine` | 默认存储引擎 | `InnoDB` |
| `max_connections` | 最大连接数 | `max_connections=151` |
| `sql_mode` | SQL 模式（严格模式等） | `STRICT_TRANS_TABLES` |

**查看配置信息**：

```sql
-- 查看字符集
SHOW VARIABLES LIKE 'character%';

-- 查看排序规则
SHOW VARIABLES LIKE 'collation%';

-- 查看存储引擎
SHOW ENGINES;
```

> 提示：修改配置文件后需要**重启 MySQL 服务**才能生效。推荐使用 `utf8mb4` 字符集以支持中文和 emoji 等字符。

## 考点提示

- 高频考点：MySQL 默认端口 **3306**，默认管理员账户 **root**，默认存储引擎 **InnoDB**。
- 易错点：配置文件 Windows 下为 `my.ini`，Linux 下为 `my.cnf`；改配置后需重启服务。
- 字符集常考 `utf8mb4` 与 `SHOW VARIABLES LIKE 'character%'` 命令。
