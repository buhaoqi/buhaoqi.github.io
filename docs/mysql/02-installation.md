---
noteId: "9fb266102d5e11f0965ee5785546709e"
tags: []

---

## 安装MySQL(Windows系统)
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

## MySQL客户端管理工具

- MySQL客户端（官方命令行管理工具）
- CMD：windows7命令行工具
- PowerSheel：windows10命令行工具
- **MySQL Workbench**（官方界面管理工具）

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
# Windows
通过“服务”管理工具重启 MySQL 服务。

# Linux/macOS
sudo systemctl restart mysql   # 或 sudo service mysql restart

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
