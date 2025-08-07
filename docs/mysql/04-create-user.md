---
noteId: "e0578d0072d511f0ad982d3ab7f75a03"
tags: []

---

## 创建新用户

```sql
-- 创建用户
CREATE USER 'username'@'localhost' IDENTIFIED BY 'your_password';

-- 授予权限（示例：授予所有数据库的所有权限）
GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost' WITH GRANT OPTION;

-- 刷新权限
FLUSH PRIVILEGES;
```

配置文件修改（关键参数）

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

