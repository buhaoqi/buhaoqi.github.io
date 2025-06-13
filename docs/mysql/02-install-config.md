---
noteId: "9fb266102d5e11f0965ee5785546709e"
tags: []

---

考点：

- 0B.2 了解MySQL服务器的安装与配置；
- 0B.3 掌握MySQL服务器的启动与关闭；
- 0B.4 掌握MySQL客户端管理工具。

---

## Windows系统安装MySQL
1. **下载安装包**  
   - 访问 [MySQL官网下载页面](https://dev.mysql.com/downloads/installer/)。
   - 选择 **MySQL Installer for Windows**（推荐下载完整版）。

2. **运行安装向导**  
   - 选择安装类型：  
     - **Developer Default**（开发默认，包含常用工具）。  
     - **Server only**（仅安装MySQL服务器）。  
   - 按提示完成安装，记住设置的**root用户密码**。

3. **配置环境变量**（可选）  
   - 将MySQL的`bin`目录（如 `C:\Program Files\MySQL\MySQL Server 8.0\bin`）添加到系统`PATH`。

---

## Windows系统配置MySQL
**1. 登录MySQL**

```bash
# 使用root用户登录（输入密码）
mysql -u root -p
```

**2. 创建新用户并授权**

```sql
-- 创建用户
CREATE USER 'username'@'localhost' IDENTIFIED BY 'your_password';

-- 授予权限（示例：授予所有数据库的所有权限）
GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost' WITH GRANT OPTION;

-- 刷新权限
FLUSH PRIVILEGES;
```

**3. 配置文件修改（关键参数）**

- **配置文件路径**：  
  - Linux/macOS: `/etc/my.cnf` 或 `/etc/mysql/my.cnf`  
  - Windows: `C:\ProgramData\MySQL\MySQL Server 8.0\my.ini`  

- **常用配置项**（根据需求调整）：

```ini
[mysqld]
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock

# 字符集设置（避免中文乱码）
character-set-server=utf8mb4
collation-server=utf8mb4_unicode_ci

# 性能优化
innodb_buffer_pool_size=1G  # 缓冲池大小（建议为内存的50%-70%）
max_connections=100         # 最大连接数
```

## MySQL的启动(windows)
方法一：**通过服务管理器**：

- 按 `Win + R`，输入 `services.msc` 回车。
- 找到 **MySQL** 服务，右键选择 **启动**。

方法二：**命令行启动**：

```cmd
net start mysql
```

**查看 MySQL 状态**
```cmd
sc query mysql
```
如果显示 `STATE : 4 RUNNING`，表示 MySQL 正在运行。

重启MySQL服务

```bash
# Linux/macOS
sudo systemctl restart mysql   # 或 sudo service mysql restart

# Windows
通过“服务”管理工具重启 MySQL 服务。
```

---
## MySQL的关闭(windows)
方法一：**服务管理器**：
   
- 进入 `services.msc`，找到 MySQL 服务，右键 **停止**。

方法二：**命令行关闭**：
```cmd
net stop mysql
```
**总结**

| **操作**       | **Linux/macOS**                     | **Windows**                  |
|----------------|------------------------------------|-----------------------------|
| **启动 MySQL** | `sudo systemctl start mysql`       | `net start mysql`           |
| **关闭 MySQL** | `sudo systemctl stop mysql`        | `net stop mysql`            |
| **重启 MySQL** | `sudo systemctl restart mysql`     | `net stop mysql && net start mysql` |
| **查看状态**   | `sudo systemctl status mysql`      | `sc query mysql`            |

如果 MySQL 无法启动，建议检查日志文件（`/var/log/mysql/error.log`）排查问题。

---

## MySQL客户端管理工具

### 命令行工具

- mysql 官方命令行客户端
- CMD：windows7命令行工具
- PowerSheel：windows10命令行工具

### 图形化管理工具推荐
- **MySQL Workbench**（官方工具）  
- **DBeaver**（跨平台）  
- **phpMyAdmin**（Web端）  

### Web 端工具

- phpMyAdmin：适用场景：通过浏览器管理 MySQL（适合远程服务器）。特点：免费开源，需 PHP 环境。

---

完成以上步骤后，MySQL即可正常运行。根据实际需求进一步优化配置（如备份、主从复制等）。