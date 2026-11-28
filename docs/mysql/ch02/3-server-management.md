---
title: MySQL 服务器管理
description: 介绍 MySQL 服务器的启动、关闭与基本管理操作，包括 Windows/Linux/macOS 下的服务管理命令与常用状态查看方法。
keywords: [MySQL, 服务器管理, 启动, 关闭, 服务, net start, systemctl, 端口, 对口升学]
sidebar_label: 2.3 MySQL服务器管理
sidebar_position: 3
slug: /mysql/ch02/3-server-management
tags: [MySQL, 第二章, MySQL数据库管理基础, 对口升学]
---

## 知识点

### 1. MySQL 服务器的启动

安装并配置完成后，需要启动 MySQL 服务才能使用。

**Windows（命令行，需管理员权限）**：

```cmd
net start mysql        :: 启动服务
net stop mysql         :: 停止服务
```

也可通过"服务"管理器（`services.msc`）图形化启动/停止。

**Linux（systemd）**：

```bash
sudo systemctl start mysql      # 启动
sudo systemctl status mysql     # 查看状态
sudo systemctl restart mysql    # 重启
```

**macOS（Homebrew 安装）**：

```bash
brew services start mysql
```

**直接以命令方式启动**：

```bash
mysqld --console          # 前台启动（Windows）
mysqld_safe &             # 后台启动（Linux）
```

### 2. MySQL 服务器的关闭

```cmd
net stop mysql                    :: Windows 停止服务
```

```bash
sudo systemctl stop mysql         # Linux 停止服务
```

```sql
-- 在 MySQL 客户端中关闭服务器（需相应权限）
SHUTDOWN;
```

> 注意：关闭前应确保数据已安全写入，避免强制结束进程导致数据损坏。

### 3. MySQL 服务器的基本管理

常用管理操作：

| 操作 | 命令 / 语句 |
| --- | --- |
| 查看服务器版本 | `SELECT VERSION();` |
| 查看当前用户 | `SELECT USER();` |
| 查看运行状态 | `SHOW STATUS;` |
| 查看系统变量 | `SHOW VARIABLES;` |
| 查看正在执行的进程 | `SHOW PROCESSLIST;` |
| 查看支持的存储引擎 | `SHOW ENGINES;` |
| 查看所有数据库 | `SHOW DATABASES;` |
| 修改用户密码 | `ALTER USER 'root'@'localhost' IDENTIFIED BY '新密码';` |

**检查服务是否正常运行**：

- 查看服务状态：`systemctl status mysql`；
- 检查端口监听：`netstat -an | findstr 3306`（Windows）或 `ss -lntp | grep 3306`（Linux）；
- 客户端登录测试：`mysql -u root -p`。

## 考点提示

- 高频考点：启动/停止服务的命令（`net start/stop mysql`、`systemctl start/stop mysql`）。
- 易错点：`SHUTDOWN` 是在 **MySQL 客户端内部**执行的 SQL 语句，不是操作系统命令。
- 默认端口 3306，登录命令 `mysql -u root -p` 需牢记。
